// Sostituisce SOLO il testo dell'opzione corretta (accorciandola) per le domande indicate.
// Uso: node trimcorrect.js questions/<file>.js trims.json    (trims.json = { "id": "nuovo testo corretta", ... })
const fs = require('fs'), path = require('path');
const p = process.argv[2];
const trims = JSON.parse(fs.readFileSync(process.argv[3], 'utf8'));
const text = fs.readFileSync(p, 'utf8');
let subject = null, objs = [];
new Function('registerSubject', text)((n, a) => { subject = n; objs = a; });
const header = text.slice(0, text.indexOf('registerSubject('));
const mk = text.match(/\n(\s*\/\/ === AGGIUNGI[^\n]*)\n\]\);/);
const marker = mk ? mk[1] : '';
const esc = s => JSON.stringify(s);
let n = 0;
for (const o of objs) {
  if (trims[o.id] !== undefined && o.correct.length === 1) { o.opts[o.correct[0]] = trims[o.id]; n++; }
}
function emit(o) {
  return '  {\n' + `    id: ${esc(o.id)}, topic: ${esc(o.topic)},\n` + `    q: ${esc(o.q)},\n` +
    '    opts: [\n' + o.opts.map(x => '      ' + esc(x)).join(',\n') + '\n    ],\n' +
    `    correct: [${o.correct.join(',')}],\n` + `    exp: ${esc(o.exp)}\n  }`;
}
fs.writeFileSync(p, header + `registerSubject(${esc(subject)}, [\n` + objs.map(emit).join(',\n') + ',\n' + (marker ? marker + '\n' : '') + ']);\n', 'utf8');
console.log(`${path.basename(p)}: accorciate ${n} corrette`);
