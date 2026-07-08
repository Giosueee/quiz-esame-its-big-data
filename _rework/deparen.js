// Rimuove le parentesi (...) dalla risposta CORRETTA quando NESSUN distrattore ne ha:
// elimina il "tell" della parentesi solo-nella-corretta (Fase 1). Il dettaglio resta in exp.
// Uso: node deparen.js questions/<file>.js
const fs = require('fs'), path = require('path');
const p = process.argv[2];
const text = fs.readFileSync(p, 'utf8');
let subject = null, objs = [];
new Function('registerSubject', text)((n, a) => { subject = n; objs = a; });
const header = text.slice(0, text.indexOf('registerSubject('));
const mk = text.match(/\n(\s*\/\/ === AGGIUNGI[^\n]*)\n\]\);/);
const marker = mk ? mk[1] : '';
const esc = s => JSON.stringify(s);
let n = 0;
for (const o of objs) {
  if (o.correct.length !== 1) continue;
  const ci = o.correct[0];
  const distrHasParen = o.opts.some((opt, j) => j !== ci && opt.includes('('));
  if (distrHasParen) continue;                       // se anche i distrattori hanno parentesi, è parallelo: ok
  const cur = o.opts[ci];
  if (!cur.includes('(')) continue;
  let s = cur.replace(/\s*\([^()]*\)/g, '').replace(/\s{2,}/g, ' ').replace(/\s+([.,;:])/g, '$1').trim();
  if (s.length >= 12 && s !== cur) { o.opts[ci] = s; n++; }
}
function emit(o) {
  return '  {\n' + `    id: ${esc(o.id)}, topic: ${esc(o.topic)},\n` + `    q: ${esc(o.q)},\n` +
    '    opts: [\n' + o.opts.map(x => '      ' + esc(x)).join(',\n') + '\n    ],\n' +
    `    correct: [${o.correct.join(',')}],\n` + `    exp: ${esc(o.exp)}\n  }`;
}
fs.writeFileSync(p, header + `registerSubject(${esc(subject)}, [\n` + objs.map(emit).join(',\n') + ',\n' + (marker ? marker + '\n' : '') + ']);\n', 'utf8');
console.log(`${path.basename(p)}: rimosse parentesi da ${n} corrette`);
