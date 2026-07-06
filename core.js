/* ============================================================
   core.js — registro delle materie e delle domande
   Caricato PRIMA dei file delle materie (questions/*.js).
   Ogni file materia chiama registerSubject("Nome", [ ...domande ]).
   Così per aggiungere una materia basta:
     1) creare questions/nuova.js con registerSubject(...)
     2) aggiungere <script src="questions/nuova.js"></script> in index.html
   Il resto (filtri, statistiche, grafici) si adatta da solo.
   ============================================================ */

window.QUESTIONS = [];   // tutte le domande di tutte le materie
window.SUBJECTS  = [];   // elenco nomi materie, nell'ordine di registrazione

window.registerSubject = function(name, arr){
  if(!Array.isArray(arr)) return;
  if(!SUBJECTS.includes(name)) SUBJECTS.push(name);
  arr.forEach(q=>{
    if(!q || !q.id) return;              // salta blocchi vuoti / marcatori
    q.area = name;                        // la materia è impostata qui, non nei singoli oggetti
    QUESTIONS.push(q);
  });
};
