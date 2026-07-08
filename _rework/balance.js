// Passo FINALE: riordina le opzioni di TUTTE le domande a risposta singola per
// ottenere la posizione della corretta ~33/33/33 su A/B/C, globalmente.
// Uso: node balance.js   (opera su ../questions/*.js in ordine)
const fs = require('fs'), path = require('path');
const QDIR = path.join(__dirname, '..', 'questions');
const esc = s => JSON.stringify(s);
let counter = 0;
const files = fs.readdirSync(QDIR).filter(f => f.endsWith('.js')).sort();

function emit(o) {
  let s = '  {\n';
  s += `    id: ${esc(o.id)}, topic: ${esc(o.topic)},\n`;
  s += `    q: ${esc(o.q)},\n`;
  s += '    opts: [\n' + o.opts.map(x => '      ' + esc(x)).join(',\n') + '\n    ],\n';
  s += `    correct: [${o.correct.join(',')}],\n`;
  s += `    exp: ${esc(o.exp)}\n  }`;
  return s;
}

for (const file of files) {
  const p = path.join(QDIR, file);
  const text = fs.readFileSync(p, 'utf8');
  let subject = null, objs = [];
  new Function('registerSubject', text)((name, arr) => { subject = name; objs = arr; });
  const header = text.slice(0, text.indexOf('registerSubject('));
  const mk = text.match(/\n(\s*\/\/ === AGGIUNGI[^\n]*)\n\]\);/);
  const marker = mk ? mk[1] : '';
  for (const o of objs) {
    if (o.correct.length !== 1) continue;          // solo risposta singola
    const target = counter % 3; counter++;
    const ci = o.correct[0];
    if (ci === target || target >= o.opts.length) { if (target >= o.opts.length) counter--; continue; }
    const opts = o.opts.slice();
    const tmp = opts[target]; opts[target] = opts[ci]; opts[ci] = tmp; // swap corretta<->target
    o.opts = opts; o.correct = [target];
  }
  let out = header + `registerSubject(${esc(subject)}, [\n`;
  out += objs.map(emit).join(',\n') + ',\n';
  out += (marker ? marker + '\n' : '') + ']);\n';
  fs.writeFileSync(p, out, 'utf8');
}
console.log('Bilanciamento posizione completato su', files.length, 'file.');
