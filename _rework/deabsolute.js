// Riduce lo SBILANCIAMENTO dei termini assoluti: rimuove dai DISTRATTORI (non dalla corretta)
// gli intensificatori assoluti GRATUITI, che non cambiano il senso della frase sbagliata.
// Non tocca "solo/soltanto/tutti/nessuno/ogni/qualsiasi": quelli spesso sono essenziali.
// Uso: node deabsolute.js questions/<file>.js
const fs = require('fs'), path = require('path');
const p = process.argv[2];
const text = fs.readFileSync(p, 'utf8');
let subject = null, objs = [];
new Function('registerSubject', text)((n, a) => { subject = n; objs = a; });
const header = text.slice(0, text.indexOf('registerSubject('));
const mk = text.match(/\n(\s*\/\/ === AGGIUNGI[^\n]*)\n\]\);/);
const marker = mk ? mk[1] : '';
const esc = s => JSON.stringify(s);
const RE = /\b(sempre e in ogni caso|in ogni caso|sempre|completamente|del tutto|assolutamente|necessariamente|per forza|in qualunque caso|a prescindere)\b/gi;
function clean(s) {
  let out = s.replace(RE, ' ').replace(/\s{2,}/g, ' ').replace(/\s+([.,;:])/g, '$1').replace(/\(\s*\)/g, '').trim();
  out = out.replace(/\s{2,}/g, ' ');
  return out;
}
let n = 0;
for (const o of objs) {
  if (o.correct.length !== 1) continue;
  o.opts.forEach((opt, j) => {
    if (j === o.correct[0]) return;
    const c = clean(opt);
    if (c !== opt && c.length >= 10) { o.opts[j] = c; n++; }
  });
}
function emit(o) {
  return '  {\n' + `    id: ${esc(o.id)}, topic: ${esc(o.topic)},\n` + `    q: ${esc(o.q)},\n` +
    '    opts: [\n' + o.opts.map(x => '      ' + esc(x)).join(',\n') + '\n    ],\n' +
    `    correct: [${o.correct.join(',')}],\n` + `    exp: ${esc(o.exp)}\n  }`;
}
fs.writeFileSync(p, header + `registerSubject(${esc(subject)}, [\n` + objs.map(emit).join(',\n') + ',\n' + (marker ? marker + '\n' : '') + ']);\n', 'utf8');
console.log(`${path.basename(p)}: ripuliti ${n} distrattori da assoluti gratuiti`);
