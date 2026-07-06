# 🎓 Quiz Esame — ITS Big Data

Sito-quiz per preparare gli esami a risposta multipla (una o più risposte corrette
per domanda). Al momento contiene **220 domande**: 110 Python + 110 Database SQL,
incluse domande "trabocchetto" in stile esame (termini falsi plausibili, floating
point, `= NULL`, aliasing, ecc.). Le opzioni vengono **mescolate a ogni sessione**,
quindi la posizione della risposta giusta non è mai prevedibile.

## Come aprirlo
Fai **doppio clic su `index.html`**: si apre nel browser. Non serve installare nulla.

> I dati (risposte, statistiche, andamento) vengono salvati **solo sul tuo computer**
> (localStorage del browser). Niente viene inviato online. Usa lo stesso browser per
> ritrovare i tuoi progressi; evita la modalità anonima/incognito.

## Cosa fa
- Estrae un gruppo di domande casuali (5/10/15/20 a scelta), filtrabili per **materia**.
- Risposte con **checkbox**, perché una domanda può avere **più** risposte corrette.
- Premi **"Correggi"** → vedi corrette/sbagliate con **spiegazione semplice** per ognuna.
- Un **"database" locale** salva ogni risposta.

## Le tre modalità
- **Adattiva** (consigliata): mescola domande nuove e domande già sbagliate, dando
  **priorità ai tuoi punti deboli**.
- **Casuale pura**: estrazione totalmente casuale.
- **Solo i miei errori**: ripropone solo le domande sbagliate almeno una volta.

## Sezione "Errori commessi"
Raccoglie **tutte** le domande sbagliate, ciascuna **una sola volta**. Un errore
**non sparisce mai**: anche se poi rispondi giusto (anche in modalità *Solo i miei
errori*), la domanda resta in elenco, ma cambia stato:
- 🟡 **DA RIVEDERE** — sbagliata una volta.
- 🔴 **SBAGLIATA PIÙ VOLTE** — sbagliata 2 o più volte (recidiva).
- 🟢 **IMPARATA** — dopo l'errore l'hai risposta giusta **3+ volte di fila**.

Ogni voce mostra domanda, risposta corretta e spiegazione: funziona anche da
"foglio di ripasso". Il pulsante *Allenati su questi* avvia una sessione su di esse.

## Statistiche (con grafici)
- **Padronanza degli errori**: quante domande sbagliate hai poi imparato, quante
  sono ancora da rivedere o recidive (gli stessi conteggi della sezione Errori).
- **Andamento nel tempo**: grafico a linea della precisione sessione per sessione,
  con linea della media.
- **Precisione per materia** e **per argomento**: barre colorate (verde/giallo/rosso).
- **Domande più sbagliate**.
- Pulsante *Azzera dati* per ricominciare da zero.

---

## 📁 Struttura dei file (pensata per crescere)
```
index.html            → la pagina
style.css             → grafica
core.js               → registro delle materie (registerSubject)
app.js                → logica quiz + database locale + grafici
questions/
  python.js           → 100 domande Python
  sql.js              → 100 domande SQL
  (qui le materie future...)
```

## ➕ Aggiungere una NUOVA MATERIA (es. Statistica)
Bastano 2 passi:

1. Crea `questions/statistica.js` con questa forma:
   ```js
   registerSubject("Statistica", [
     {
       id: "st001", topic: "Media e mediana",
       q: "Testo della domanda?",
       opts: ["opzione 0", "opzione 1", "opzione 2", "opzione 3"],
       correct: [1],          // indici (0-based) giusti; più di uno = risposta multipla
       exp: "Spiegazione semplice."
     }
     // ...altre domande
   ]);
   ```
2. In `index.html`, aggiungi una riga tra gli script (dove indicato dal commento):
   ```html
   <script src="questions/statistica.js"></script>
   ```

Fatto: la nuova materia comparirà **da sola** nel filtro della home e nelle statistiche.
`id` deve essere unico in tutto il quiz.

## ➕ Aggiungere domande a una materia esistente
Apri `questions/python.js` o `questions/sql.js` e incolla un nuovo blocco `{...}`
**prima** della riga marcatore `// === AGGIUNGI NUOVE DOMANDE ... QUI ===`.
