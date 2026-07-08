/* ============================================================
   Quiz Esame — motore applicativo
   "Database" locale (localStorage): per ogni domanda salva
   tentativi ed errori; la modalità adattiva usa questi dati per
   riproporre più spesso gli argomenti in cui sbagli.
   ============================================================ */

const STORE_KEY = "quizEsame_v1";

/* ---------- Persistenza (il nostro "database") ---------- */
function loadDB(){
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {stats:{}, sessions:0}; }
  catch { return {stats:{}, sessions:0}; }
}
function saveDB(db){ localStorage.setItem(STORE_KEY, JSON.stringify(db)); }
let DB = loadDB();

// stat per domanda: { seen, correct, wrong, lastWrong, streak, everWrong }
//  streak    = risposte corrette consecutive attuali (azzerata a ogni errore)
//  everWrong = sbagliata almeno una volta nella storia (NON si azzera mai)
function statFor(id){
  const s = DB.stats[id] || (DB.stats[id] = {});
  if(s.seen==null)      s.seen=0;
  if(s.correct==null)   s.correct=0;
  if(s.wrong==null)     s.wrong=0;
  if(s.lastWrong==null) s.lastWrong=false;
  if(s.streak==null)    s.streak=0;
  if(s.everWrong==null) s.everWrong=(s.wrong>0);   // migrazione dati vecchi
  return s;
}

// Soglia di "imparata": tot. corrette consecutive dopo essere stata sbagliata
const LEARN_STREAK = 3;
function isLearned(s){ return s.everWrong && s.streak >= LEARN_STREAK; }      // sbagliata e poi recuperata
function isRecidiva(s){ return s.everWrong && s.wrong >= 2 && !isLearned(s); } // sbagliata più volte, non ancora imparata
function errorState(s){
  if(!s.everWrong) return null;
  if(isLearned(s))  return {key:"learned",  label:"IMPARATA",           cls:"b-learned"};
  if(isRecidiva(s)) return {key:"recidiva", label:"SBAGLIATA PIÙ VOLTE", cls:"b-recidiva"};
  return {key:"review", label:"DA RIVEDERE", cls:"b-review"};
}

/* ---------- Stato sessione corrente ---------- */
let session = { area:"Tutto", count:30, mode:"adattiva", questions:[], answers:{} };

/* ---------- Utility ---------- */
const $  = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));
function shuffle(a){ a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; }
function sameSet(a,b){ if(a.length!==b.length) return false; const s=new Set(b); return a.every(x=>s.has(x)); }

/* ---------- Selezione domande ---------- */
// peso adattivo di una domanda (più alto = più probabile)
function adaptiveWeight(q){
  const s = statFor(q.id);
  let w = 1;
  if(s.seen===0)      w += 1.2;                     // mai viste: priorità
  if(s.wrong>0)       w += 2.5*Math.min(s.wrong,4); // gli errori pesano molto
  if(s.lastWrong)     w += 2;                        // sbagliata l'ultima volta
  if(s.seen>0 && s.wrong===0) w -= 0.5;              // già padroneggiate: meno spesso
  return Math.max(0.2, w);
}
// estrae n domande da un pool (pesata adattiva; casuale pura se mode==="casuale")
function pickFromPool(pool, n, mode){
  if(n<=0 || pool.length===0) return [];
  if(mode==="casuale") return shuffle(pool).slice(0, n);
  const bag = pool.map(q=>({q, w:adaptiveWeight(q)}));
  const chosen=[];
  while(chosen.length < n && bag.length){
    const tot = bag.reduce((a,b)=>a+b.w,0);
    let r = Math.random()*tot, idx=0;
    for(let i=0;i<bag.length;i++){ r-=bag[i].w; if(r<=0){ idx=i; break; } }
    chosen.push(bag[idx].q); bag.splice(idx,1);
  }
  return chosen;
}
function pickQuestions(){
  // Modalità "solo i miei errori": tutte le domande già sbagliate, in ordine casuale
  if(session.mode==="errori"){
    const pool = QUESTIONS.filter(q => statFor(q.id).everWrong);
    if(pool.length===0) return [];
    return shuffle(pool).slice(0, session.count);
  }
  // Altrimenti: MIX BILANCIATO fra tutte le materie (quote ~uguali per materia)
  const subs = shuffle(SUBJECTS);                    // ordine casuale: varia chi prende il "resto"
  const base = Math.floor(session.count / subs.length);
  const remainder = session.count - base*subs.length;
  let result = [];
  subs.forEach((name, i)=>{
    const target = base + (i < remainder ? 1 : 0);
    const pool = QUESTIONS.filter(q => q.area===name);
    result = result.concat(pickFromPool(pool, target, session.mode));
  });
  // se qualche materia aveva troppe poche domande, completa dal resto
  if(result.length < session.count){
    const used = new Set(result.map(q=>q.id));
    const rest = QUESTIONS.filter(q=>!used.has(q.id));
    result = result.concat(pickFromPool(rest, session.count - result.length, session.mode));
  }
  return shuffle(result);
}

/* ---------- Navigazione schermate ---------- */
function show(screen){
  $$(".screen").forEach(s=>s.classList.remove("active"));
  $("#screen-"+screen).classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}

/* ---------- Rendering QUIZ ---------- */
function startSession(){
  session.questions = pickQuestions();
  session.answers = {};

  if(session.questions.length===0){
    if(session.mode==="errori"){
      alert("Non hai ancora errori registrati in questo argomento. Ottimo! Fai qualche sessione normale prima di usare questa modalità.");
    } else {
      alert("Nessuna domanda disponibile per questa selezione.");
    }
    return;
  }

  const form = $("#quiz-form");
  form.innerHTML = "";
  $("#results-list").innerHTML = "";   // pulisce i risultati della sessione precedente
  session.questions.forEach((q,i)=>{
    const multi = q.correct.length>1;
    // ordine di visualizzazione mescolato: così il corretto non è mai in una posizione prevedibile.
    // Il value resta l'indice ORIGINALE, quindi la correzione non cambia.
    const order = shuffle(q.opts.map((_,idx)=>idx));
    const opts = order.map(idx=>`
      <label class="opt" data-i="${idx}">
        <input type="checkbox" name="q${i}" value="${idx}">
        <span class="opt-txt">${escapeHTML(q.opts[idx])}</span>
      </label>`).join("");
    form.insertAdjacentHTML("beforeend",`
      <div class="q" id="q${i}">
        <div class="q-top">
          <span class="q-num">Domanda ${i+1}</span>
          <span class="tag area-${q.area}">${q.area}</span>
          <span class="tag">${escapeHTML(q.topic)}</span>
        </div>
        <div class="q-text">${escapeHTML(q.q)}</div>
        <div class="q-hint">${multi ? "⚑ Attenzione: può avere PIÙ di una risposta corretta." : "Seleziona la risposta corretta."}</div>
        <div class="opts">${opts}</div>
      </div>`);
  });

  updateProgress();
  show("quiz");
}

// conta le opzioni selezionate SOLO nel form attivo (evita di leggere le card della sessione precedente)
function checkedFor(i){ return $$(`#quiz-form input[name=q${i}]:checked`); }

function updateProgress(){
  const answered = session.questions.filter((q,i)=>checkedFor(i).length>0).length;
  const tot = session.questions.length;
  $("#progressbar").style.width = (answered/tot*100)+"%";
  $("#progresstext").textContent = `${answered}/${tot} risposte`;
}

/* ---------- Correzione ---------- */
function gradeSession(){
  let correctCount=0;
  session.questions.forEach((q,i)=>{
    const chosen = checkedFor(i).map(el=>parseInt(el.value));
    const ok = sameSet(chosen, q.correct);
    if(ok) correctCount++;

    // aggiorna il "database"
    const s = statFor(q.id);
    s.seen++;
    if(ok){ s.correct++; s.lastWrong=false; s.streak++; }
    else  { s.wrong++;   s.lastWrong=true;  s.streak=0; s.everWrong=true; }

    // mostra correzione nella card
    const card = $("#q"+i);
    card.querySelectorAll("input").forEach(el=>el.disabled=true);
    card.querySelectorAll(".opt").forEach(opt=>{
      const idx = parseInt(opt.dataset.i);
      const isCorrect = q.correct.includes(idx);
      const isChosen  = chosen.includes(idx);
      opt.classList.remove("sel");
      if(isCorrect){ opt.classList.add("correct"); opt.insertAdjacentHTML("beforeend",`<span class="mark">✓ corretta</span>`); }
      else if(isChosen){ opt.classList.add("wrong"); opt.insertAdjacentHTML("beforeend",`<span class="mark">✗ tua scelta</span>`); }
    });
    card.insertAdjacentHTML("beforeend",`
      <div class="explain">
        <span class="verdict ${ok?"ok":"no"}">${ok?"RISPOSTA CORRETTA":"RISPOSTA ERRATA"}</span><br>
        <b>Spiegazione.</b> ${escapeHTML(q.exp)}
      </div>`);
  });

  DB.sessions = (DB.sessions||0)+1;
  DB.history = DB.history || [];
  DB.history.push({ t: Date.now(), area: session.area, correct: correctCount, total: session.questions.length });
  if(DB.history.length > 300) DB.history = DB.history.slice(-300);
  saveDB(DB);
  renderScore(correctCount, session.questions.length);
  buildResultsScroll();
  show("results");
}

function renderScore(correct, tot){
  const pct = Math.round(correct/tot*100);
  const voto = Math.round(pct/100*30);            // voto in trentesimi
  const promosso = voto>=18;
  const ringcol = promosso ? "var(--green)" : "var(--red)";
  let msg = voto>=27 ? "Ottimo! Sei più che pronto." :
            voto>=24 ? "Molto bene, ci siamo quasi." :
            voto>=18 ? "Sufficiente, ma continua a ripassare." :
                       "Insufficiente: rileggi le spiegazioni e riprova.";
  $("#scorecard").innerHTML = `
    <div class="score-ring" style="--pct:${pct}%;--ringcol:${ringcol}"><span>${voto}<small>/30</small></span></div>
    <h2>${correct} risposte corrette su ${tot}</h2>
    <p class="voto-line ${promosso?"ok":"no"}">Voto: <b>${voto}/30</b> · ${promosso?"promosso ✓":"insufficiente"}</p>
    <p>${msg}</p>`;
}

// sposta le card corrette nella schermata risultati
function buildResultsScroll(){
  const list = $("#results-list");
  list.innerHTML = "";
  const form = $("#quiz-form");
  Array.from(form.children).forEach(c=>list.appendChild(c));
}

/* ---------- Statistiche ---------- */
function renderStats(){
  const ids = Object.keys(DB.stats);
  let seen=0,correct=0,wrong=0;
  ids.forEach(id=>{ const s=DB.stats[id]; seen+=s.seen; correct+=s.correct; wrong+=s.wrong; });
  const acc = seen? Math.round(correct/seen*100):0;

  $("#stats-global").innerHTML = `
    <div class="stat-box"><b>${DB.sessions||0}</b><span>Sessioni svolte</span></div>
    <div class="stat-box"><b>${seen}</b><span>Risposte totali</span></div>
    <div class="stat-box"><b style="color:var(--green)">${acc}%</b><span>Precisione media</span></div>
    <div class="stat-box"><b>${QUESTIONS.length}</b><span>Domande disponibili</span></div>`;

  renderMastery();
  renderTrendChart();
  renderAreaChart();

  // per argomento (topic)
  const byTopic = {};
  QUESTIONS.forEach(q=>{
    const s = DB.stats[q.id]; if(!s || s.seen===0) return;
    if(!byTopic[q.topic]) byTopic[q.topic]={c:0,t:0,area:q.area};
    byTopic[q.topic].c += s.correct; byTopic[q.topic].t += s.seen;
  });
  const topics = Object.entries(byTopic).sort((a,b)=>(a[1].c/a[1].t)-(b[1].c/b[1].t));
  const tc = $("#stats-topics");
  if(topics.length===0){ tc.innerHTML=`<p class="empty">Nessun dato ancora. Completa una sessione per vedere le statistiche.</p>`; }
  else {
    tc.innerHTML = topics.map(([name,d])=>{
      const p = Math.round(d.c/d.t*100);
      const col = p>=70?"var(--green)":p>=45?"var(--amber)":"var(--red)";
      return `<div class="topic-row">
        <div class="tl"><span>${escapeHTML(name)} <span class="tag area-${d.area}" style="margin-left:4px">${d.area}</span></span><span class="pct">${p}% (${d.c}/${d.t})</span></div>
        <div class="tbar"><i style="width:${p}%;background:${col}"></i></div>
      </div>`;
    }).join("");
  }

  // domande più sbagliate
  const worst = QUESTIONS.map(q=>({q, s:DB.stats[q.id]}))
    .filter(x=>x.s && x.s.wrong>0)
    .sort((a,b)=>b.s.wrong-a.s.wrong).slice(0,8);
  const wc = $("#stats-worst");
  if(worst.length===0){ wc.innerHTML=`<p class="empty">Nessun errore registrato. 👏</p>`; }
  else {
    wc.innerHTML = worst.map(x=>`
      <div class="worst-row"><span class="wq">${escapeHTML(x.q.q)}</span><span class="wn">${x.s.wrong} err.</span></div>`).join("");
  }
}

/* ---------- Riepilogo padronanza errori (usato in Statistiche e in Errori) ---------- */
function errorAggregate(){
  let tot=0, learned=0, recidiva=0, review=0;
  QUESTIONS.forEach(q=>{
    const s=DB.stats[q.id]; if(!s || !s.everWrong) return;
    tot++;
    const st=errorState(statFor(q.id));
    if(st.key==="learned") learned++;
    else if(st.key==="recidiva") recidiva++;
    else review++;
  });
  return {tot, learned, recidiva, review};
}

function renderMastery(){
  const a=errorAggregate();
  $("#stats-mastery").innerHTML = `
    <div class="stat-box"><b>${a.tot}</b><span>Domande sbagliate (totale)</span></div>
    <div class="stat-box"><b style="color:var(--green)">${a.learned}</b><span>Imparate</span></div>
    <div class="stat-box"><b style="color:var(--red)">${a.recidiva}</b><span>Sbagliate più volte</span></div>
    <div class="stat-box"><b style="color:var(--amber)">${a.review}</b><span>Ancora da rivedere</span></div>`;
}

/* ---------- Sezione "Errori commessi" (persistente, mai svuotata) ---------- */
function renderErrors(){
  const a=errorAggregate();
  $("#errors-summary").innerHTML = `
    <div class="stat-box"><b>${a.tot}</b><span>Errori totali</span></div>
    <div class="stat-box"><b style="color:var(--green)">${a.learned}</b><span>Imparate</span></div>
    <div class="stat-box"><b style="color:var(--red)">${a.recidiva}</b><span>Sbagliate più volte</span></div>
    <div class="stat-box"><b style="color:var(--amber)">${a.review}</b><span>Da rivedere</span></div>`;

  $("#errors-legend").innerHTML =
    `<span class="badge b-learned">IMPARATA</span> risposta poi corretta ${LEARN_STREAK}+ volte di fila · ` +
    `<span class="badge b-recidiva">SBAGLIATA PIÙ VOLTE</span> errata 2+ volte · ` +
    `<span class="badge b-review">DA RIVEDERE</span> errata una volta`;

  // tutte le domande mai sbagliate, ordinate: prima le più problematiche
  const items = QUESTIONS
    .map(q=>({q, s:statFor(q.id)}))
    .filter(x=>x.s.everWrong)
    .sort((x,y)=> (isLearned(x.s)-isLearned(y.s)) || (y.s.wrong-x.s.wrong));

  const list=$("#errors-list");
  if(items.length===0){
    list.innerHTML=`<p class="empty">Nessun errore registrato. Fai qualche sessione: le domande che sbagli compariranno qui e ci resteranno.</p>`;
    return;
  }
  list.innerHTML = items.map(({q,s})=>{
    const st=errorState(s);
    const correcte = q.correct.map(i=>escapeHTML(q.opts[i])).join("<br>");
    return `<div class="err">
      <div class="err-top">
        <span class="badge ${st.cls}">${st.label}</span>
        <span class="tag area-${q.area}">${q.area}</span>
        <span class="tag">${escapeHTML(q.topic)}</span>
        <span class="err-meta">sbagliata ${s.wrong}× · ${s.streak} giuste di fila</span>
      </div>
      <div class="err-q">${escapeHTML(q.q)}</div>
      <div class="err-ans"><b>Risposta corretta:</b> ${correcte}</div>
      <div class="err-exp">${escapeHTML(q.exp)}</div>
    </div>`;
  }).join("");
}

/* ---------- Grafico: andamento precisione per sessione (SVG a linea) ---------- */
function renderTrendChart(){
  const box = $("#chart-trend");
  const hist = (DB.history||[]).slice(-24);
  if(hist.length < 1){ box.innerHTML = `<p class="empty">Completa qualche sessione per vedere l'andamento nel tempo.</p>`; return; }
  const data = hist.map(x=> Math.round(x.correct/x.total*100));

  const W=640, H=240, pl=38, pr=14, pt=16, pb=28;
  const plotW=W-pl-pr, plotH=H-pt-pb;
  const n=data.length;
  const xAt = i => pl + (n===1 ? plotW/2 : plotW*i/(n-1));
  const yAt = v => pt + plotH*(1 - v/100);

  // griglia orizzontale 0/25/50/75/100
  let grid="", ylabels="";
  [0,25,50,75,100].forEach(v=>{
    const y=yAt(v);
    grid += `<line x1="${pl}" y1="${y}" x2="${W-pr}" y2="${y}" class="grid"/>`;
    ylabels += `<text x="${pl-8}" y="${y+3.5}" class="ylab">${v}</text>`;
  });

  const linePts = data.map((v,i)=>`${xAt(i)},${yAt(v)}`).join(" ");
  const areaPts = `${pl},${yAt(0)} ` + linePts + ` ${xAt(n-1)},${yAt(0)}`;
  const dots = data.map((v,i)=>`<circle cx="${xAt(i)}" cy="${yAt(v)}" r="3.5" class="dot"><title>Sessione ${hist.length-n+i+1}: ${v}%</title></circle>`).join("");

  // media
  const avg = Math.round(data.reduce((a,b)=>a+b,0)/n);
  const avgY = yAt(avg);

  box.innerHTML = `
  <svg viewBox="0 0 ${W} ${H}" class="linechart" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Andamento precisione">
    <defs>
      <linearGradient id="tg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="var(--brand)" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="var(--brand)" stop-opacity="0"/>
      </linearGradient>
    </defs>
    ${grid}
    <line x1="${pl}" y1="${avgY}" x2="${W-pr}" y2="${avgY}" class="avgline"/>
    <text x="${W-pr}" y="${avgY-5}" class="avglab" text-anchor="end">media ${avg}%</text>
    <polygon points="${areaPts}" fill="url(#tg)"/>
    <polyline points="${linePts}" class="trend"/>
    ${dots}
    ${ylabels}
    <text x="${pl}" y="${H-8}" class="xlab">meno recenti</text>
    <text x="${W-pr}" y="${H-8}" class="xlab" text-anchor="end">più recenti →</text>
  </svg>`;
}

/* ---------- Grafico: precisione per materia (barre orizzontali) ---------- */
function renderAreaChart(){
  const box = $("#chart-area");
  const byArea = {};
  QUESTIONS.forEach(q=>{
    const s=DB.stats[q.id]; if(!s || s.seen===0) return;
    if(!byArea[q.area]) byArea[q.area]={c:0,t:0};
    byArea[q.area].c+=s.correct; byArea[q.area].t+=s.seen;
  });
  const entries=Object.entries(byArea);
  if(entries.length===0){ box.innerHTML=`<p class="empty">Ancora nessun dato per materia.</p>`; return; }
  box.innerHTML = entries.map(([name,d])=>{
    const p=Math.round(d.c/d.t*100);
    const col = p>=70?"var(--green)":p>=45?"var(--amber)":"var(--red)";
    return `<div class="topic-row">
      <div class="tl"><span><b>${escapeHTML(name)}</b></span><span class="pct">${p}% · ${d.c}/${d.t}</span></div>
      <div class="tbar tbar-lg"><i style="width:${p}%;background:${col}"></i></div>
    </div>`;
  }).join("");
}

/* ---------- Home quickstats ---------- */
function renderQuickstats(){
  const ids=Object.keys(DB.stats);
  let seen=0,correct=0,wrongQ=0;
  ids.forEach(id=>{const s=DB.stats[id];seen+=s.seen;correct+=s.correct;if(s.lastWrong)wrongQ++;});
  const acc = seen?Math.round(correct/seen*100):0;
  $("#home-quickstats").innerHTML = `
    <div class="qs"><b>${DB.sessions||0}</b><span>sessioni</span></div>
    <div class="qs"><b>${seen}</b><span>risposte date</span></div>
    <div class="qs"><b>${acc}%</b><span>precisione</span></div>
    <div class="qs"><b>${wrongQ}</b><span>da ripassare</span></div>`;
}

/* ---------- Helpers ---------- */
function escapeHTML(str){
  return String(str).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

/* ============ Event binding ============ */
function bindSegmented(id, key){
  $$(`#${id} .seg`).forEach(b=>b.addEventListener("click",()=>{
    $$(`#${id} .seg`).forEach(x=>x.classList.remove("active"));
    b.classList.add("active");
    session[key] = isNaN(b.dataset.val)? b.dataset.val : parseInt(b.dataset.val);
    if(id==="opt-mode"){
      const hints={
        adattiva:"Adattiva: mescola domande nuove e domande che hai sbagliato in passato, dando priorità ai tuoi punti deboli.",
        casuale:"Casuale pura: estrazione totalmente casuale, senza tener conto dei tuoi errori.",
        errori:"Solo i miei errori: ripropone unicamente le domande che hai già sbagliato almeno una volta."
      };
      $("#mode-hint").textContent = hints[session[key]];
    }
  }));
}

document.addEventListener("DOMContentLoaded",()=>{
  session.area = "Tutto";                 // niente scelta materia: sempre mix bilanciato di tutte
  bindSegmented("opt-count","count");
  bindSegmented("opt-mode","mode");

  // listener del form agganciati UNA volta sola (il form persiste tra le sessioni)
  const form = $("#quiz-form");
  form.addEventListener("change", e=>{
    if(e.target.matches("input[type=checkbox]")){
      e.target.closest(".opt").classList.toggle("sel", e.target.checked);
    }
    updateProgress();
  });

  $("#btn-start").addEventListener("click", startSession);
  $("#btn-submit").addEventListener("click", ()=>{
    const answered = session.questions.filter((q,i)=>checkedFor(i).length>0).length;
    if(answered < session.questions.length){
      if(!confirm(`Hai risposto a ${answered} domande su ${session.questions.length}. Vuoi correggere lo stesso? Le domande senza risposta contano come errate.`)) return;
    }
    gradeSession();
  });
  $("#btn-cancel").addEventListener("click", ()=>{ renderQuickstats(); show("home"); });
  $("#btn-new").addEventListener("click", ()=>{ renderQuickstats(); show("home"); });

  $("#nav-home").addEventListener("click", ()=>{ renderQuickstats(); show("home"); });
  $("#nav-errors").addEventListener("click", ()=>{ renderErrors(); show("errors"); });
  $("#nav-stats").addEventListener("click", ()=>{ renderStats(); show("stats"); });
  $("#btn-train-errors").addEventListener("click", ()=>{
    const a=errorAggregate();
    if(a.tot===0){ alert("Non hai ancora errori da allenare. Completa qualche sessione!"); return; }
    session.mode="errori";
    $$("#opt-mode .seg").forEach(x=>x.classList.toggle("active", x.dataset.val==="errori"));
    startSession();
  });
  $("#btn-reset").addEventListener("click", ()=>{
    if(confirm("Sicuro di voler azzerare tutte le statistiche e i progressi? L'operazione non è reversibile.")){
      DB={stats:{},sessions:0}; saveDB(DB); renderStats(); renderQuickstats();
    }
  });

  renderQuickstats();
});
