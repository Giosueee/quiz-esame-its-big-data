// Riduce 4->3 opzioni SOLO per le domande a risposta singola con 4 opzioni:
// elimina il distrattore piu' DEBOLE = quello con minor overlap di parole-contenuto
// con (domanda + risposta corretta). Lascia INVARIATE le multi-risposta (le converto a mano).
// Uso: node reduce4to3.js questions/<file>.js
const fs = require('fs'), path = require('path');
const p = process.argv[2];
const text = fs.readFileSync(p, 'utf8');
let subject = null, objs = [];
new Function('registerSubject', text)((n, a) => { subject = n; objs = a; });
const header = text.slice(0, text.indexOf('registerSubject('));
const mk = text.match(/\n(\s*\/\/ === AGGIUNGI[^\n]*)\n\]\);/);
const marker = mk ? mk[1] : '';
const esc = s => JSON.stringify(s);
const STOP = new Set("del dello dei degli della delle di da in con su per tra fra il lo la i gli le un uno una che chi cui non ne come quando dove quale quali cosa e ed o oppure ma se al allo ai agli alla alle dal dai nel nei nella sul sui piu meno molto anche essere sono viene usato quello questa questo questi queste suo sua loro si me te ci vi mi ti".split(" "));
const strip = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const words = s => new Set(strip(s).match(/[a-z0-9]+/g)?.filter(w => w.length > 3 && !STOP.has(w)) || []);
let changed = 0;
for (const o of objs) {
  if (o.correct.length !== 1 || o.opts.length !== 4) continue;
  const ci = o.correct[0];
  const ref = new Set([...words(o.q), ...words(o.opts[ci])]);
  let worst = -1, worstScore = Infinity;
  o.opts.forEach((opt, j) => {
    if (j === ci) return;
    const w = words(opt);
    let ov = 0; w.forEach(x => { if (ref.has(x)) ov++; });
    const score = ov * 1000 + opt.length; // meno overlap = piu' debole; a parita', droppa il piu' CORTO (tieni i distrattori lunghi)
    if (score < worstScore) { worstScore = score; worst = j; }
  });
  const kept = o.opts.filter((_, j) => j !== worst);
  const newCi = worst < ci ? ci - 1 : ci;
  o.opts = kept; o.correct = [newCi]; changed++;
}
function emit(o) {
  let s = '  {\n';
  s += `    id: ${esc(o.id)}, topic: ${esc(o.topic)},\n`;
  s += `    q: ${esc(o.q)},\n`;
  s += '    opts: [\n' + o.opts.map(x => '      ' + esc(x)).join(',\n') + '\n    ],\n';
  s += `    correct: [${o.correct.join(',')}],\n`;
  s += `    exp: ${esc(o.exp)}\n  }`;
  return s;
}
let out = header + `registerSubject(${esc(subject)}, [\n` + objs.map(emit).join(',\n') + ',\n' + (marker ? marker + '\n' : '') + ']);\n';
fs.writeFileSync(p, out, 'utf8');
const multi = objs.filter(o => o.correct.length !== 1).map(o => o.id);
console.log(`${path.basename(p)}: ridotte ${changed} domande a 3 opzioni. Multi-risposta da convertire a mano: ${multi.join(', ') || 'nessuna'}`);
