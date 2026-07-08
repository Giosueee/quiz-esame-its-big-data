// Rigenera un file questions/<materia>.js applicando le riscritture per-id.
// Uso: node apply.js <path .js originale> <path rewrites.json>
// rewrites.json = [ {id, q?, opts?, correct?, exp?, topic?}, ... ]  (solo i campi cambiati)
// Preserva header, nome materia, marker finale e ordine/id delle domande.
const fs = require('fs'), path = require('path');
const [, , origPath, rewritesPath] = process.argv;
const text = fs.readFileSync(origPath, 'utf8');

let subject = null, objs = [];
new Function('registerSubject', text)((name, arr) => { subject = name; objs = arr; });

const idx = text.indexOf('registerSubject(');
const header = text.slice(0, idx);
const mk = text.match(/\n(\s*\/\/ === AGGIUNGI[^\n]*)\n\]\);/);
const marker = mk ? mk[1] : '';

const rw = JSON.parse(fs.readFileSync(rewritesPath, 'utf8'));
const byId = {}; for (const r of rw) byId[r.id] = r;
const seen = new Set();
const esc = s => JSON.stringify(s);

function emit(o) {
  const rewritten = !!byId[o.id]; const r = byId[o.id] || {}; if (rewritten) seen.add(o.id);
  const topic = r.topic !== undefined ? r.topic : o.topic;
  const q = r.q !== undefined ? r.q : o.q;
  const opts = r.opts !== undefined ? r.opts : o.opts;
  const correct = r.correct !== undefined ? r.correct : o.correct;
  const exp = r.exp !== undefined ? r.exp : o.exp;
  if (rewritten && opts.length !== 3) throw new Error(`${o.id}: ${opts.length} opzioni (attese 3)`);
  if (correct.some(c => c < 0 || c >= opts.length)) throw new Error(`${o.id}: correct fuori range`);
  let s = '  {\n';
  s += `    id: ${esc(o.id)}, topic: ${esc(topic)},\n`;
  s += `    q: ${esc(q)},\n`;
  s += '    opts: [\n' + opts.map(x => '      ' + esc(x)).join(',\n') + '\n    ],\n';
  s += `    correct: [${correct.join(',')}],\n`;
  s += `    exp: ${esc(exp)}\n  }`;
  return s;
}

let out = header + `registerSubject(${esc(subject)}, [\n`;
out += objs.map(emit).join(',\n') + ',\n';
out += (marker ? marker + '\n' : '') + ']);\n';
fs.writeFileSync(origPath, out, 'utf8');

const missing = rw.map(r => r.id).filter(id => !seen.has(id));
if (missing.length) console.error('ATTENZIONE id non trovati:', missing.join(', '));
console.log(`${path.basename(origPath)}: ${objs.length} domande totali, ${seen.size}/${rw.length} riscritte applicate`);
