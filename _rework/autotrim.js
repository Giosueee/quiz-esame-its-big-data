// Accorcia in modo SICURO le opzioni corrette che risultano la piu' lunga della domanda:
// rimuove code esplicative (parentesi finali, incisi ", es./cioe'/ossia/ovvero...") il cui
// dettaglio resta comunque nel campo exp. Non tocca il senso tecnico della risposta.
// Uso: node autotrim.js questions/<file>.js
const fs = require('fs'), path = require('path');
const p = process.argv[2];
const text = fs.readFileSync(p, 'utf8');
let subject = null, objs = [];
new Function('registerSubject', text)((n, a) => { subject = n; objs = a; });
const header = text.slice(0, text.indexOf('registerSubject('));
const mk = text.match(/\n(\s*\/\/ === AGGIUNGI[^\n]*)\n\]\);/);
const marker = mk ? mk[1] : '';
const esc = s => JSON.stringify(s);
const isLongest = (o, ci) => { const L = o.opts.map(x => x.length); return L[ci] > Math.max(...L.filter((_, j) => j !== ci)); };
function shorten(s) {
  let prev;
  do {
    prev = s;
    s = s.replace(/\s*\([^()]*\)\s*$/, '').trim();                                  // parentesi finale
    s = s.replace(/,\s*(es\.|cio[eè]|ossia|ovvero|ad esempio|tipicamente|spesso)\b.*$/i, '').trim(); // inciso finale
  } while (s !== prev && s.length >= 15);
  return s;
}
let n = 0;
for (const o of objs) {
  if (o.correct.length !== 1 || !isLongest(o, o.correct[0])) continue;
  const ci = o.correct[0], cur = o.opts[ci], cand = shorten(cur);
  if (cand !== cur && cand.length >= 15) { o.opts[ci] = cand; n++; }
}
function emit(o) {
  return '  {\n' + `    id: ${esc(o.id)}, topic: ${esc(o.topic)},\n` + `    q: ${esc(o.q)},\n` +
    '    opts: [\n' + o.opts.map(x => '      ' + esc(x)).join(',\n') + '\n    ],\n' +
    `    correct: [${o.correct.join(',')}],\n` + `    exp: ${esc(o.exp)}\n  }`;
}
fs.writeFileSync(p, header + `registerSubject(${esc(subject)}, [\n` + objs.map(emit).join(',\n') + ',\n' + (marker ? marker + '\n' : '') + ']);\n', 'utf8');
console.log(`${path.basename(p)}: accorciate ${n} corrette (code esplicative)`);
