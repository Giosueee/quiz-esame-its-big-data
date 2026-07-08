// Carica tutti i file questions/*.js eseguendo registerSubject in una sandbox
// e produce un JSON unico con tutte le domande + provenienza (file, subject, index).
const fs = require('fs');
const path = require('path');

const QDIR = "/Users/giosue/1 esame/Quiz Esame/questions";
const out = [];

const files = fs.readdirSync(QDIR).filter(f => f.endsWith('.js')).sort();
for (const file of files) {
  const full = path.join(QDIR, file);
  const text = fs.readFileSync(full, 'utf8');
  const reg = (name, arr) => {
    arr.forEach((qq, idx) => {
      out.push({ file, subject: name, idx, ...qq });
    });
  };
  // Esegue il corpo del file (che è una chiamata a registerSubject) nella nostra sandbox
  try {
    new Function('registerSubject', text)(reg);
  } catch (e) {
    console.error("ERRORE parsing", file, e.message);
    process.exit(1);
  }
}
fs.writeFileSync(process.argv[2], JSON.stringify(out, null, 1), 'utf8');
console.log("Domande totali dump:", out.length);
