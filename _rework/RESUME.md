# Rework distrattori — stato & come riprendere

**Scopo:** togliere da TUTTE le 1520 domande i bias per cui la corretta è riconoscibile senza
sapere la materia (più lunga / con parentesi / eco lessicale / assoluti solo nei distrattori),
ridurre da 4 a **3 opzioni** (1 corretta + 2 distrattori forti), aggiungere domande di
**lettura di codice**, e dimostrarlo con numeri.

## Decisioni bloccate (approvate dall'utente)
- **3 opzioni** per ogni domanda.
- **46 domande multi-risposta → convertite a risposta singola** (1 corretta + 2 distrattori).
- **Domande "lettura di codice" = REPLACE**: sostituiscono le domande più deboli, il **totale resta 1520**.
  Linguaggi: **Python** (file python.js) e **SQL** (file sql.js); valutare anche R/Pandas/Spark.
- L'app **mescola le opzioni a runtime** (`app.js:118`), quindi il bias di posizione nei dati non
  è sfruttabile nel quiz; lo ribilancio comunque nei dati (metrica richiesta).

## Regole di riscrittura (Fase 2) — DA APPLICARE A TUTTE
1. Niente eco lessicale: la corretta non ripete radici della domanda assenti nei distrattori.
2. Lunghezza omogenea (scarto ≤ ~25% char tra opzioni).
3. **Rank di lunghezza bilanciato (regola AGGIUNTA su richiesta utente):** sull'intero dataset la
   corretta deve essere **la più corta ~33,3%, media ~33,3%, più lunga ~33,3%**. Se serve,
   **riscrivere la lunghezza della corretta** (aggiungendo/togliendo una clausola VERA, non padding)
   per far quadrare le percentuali. NON deve mai risultare sistematicamente la più lunga.
4. Struttura grammaticale parallela; se una opzione ha parentesi, o tutte o nessuna.
5. Distrattori = misconcezioni reali IN TEMA (mai filler tipo "casuale/non esiste"; per i "flussi"
   = stesso flusso con passi invertiti).
6. Niente doppioni/sinonimi; niente "tutte/nessuna delle precedenti".
7. **Termini assoluti bilanciati** (sempre/mai/solo/tutti/nessuno): non concentrarli nei distrattori.
8. **Posizione corretta ~33/33/33** su A/B/C.
9. Domande-codice: i 2 distrattori = errore concettuale specifico (filtro dimenticato, ordine
   invertito, HAVING usato come WHERE, indicizzazione 0/1, mutazione vs copia…), mai output assurdo.
10. Mantenere schema dati: `{id, topic, q, opts:[3], correct:[1 indice], exp}`. La spiegazione
    dell'errore di ogni distrattore va nel campo `exp`, non nell'opzione.

## Baseline misurata (PRIMA) — vedi baseline.txt
- corretta = più lunga **68,0%** (target ~33); più corta 10,7%
- parentesi solo-corretta 15,5%; eco lessicale esclusiva 10,3%
- assoluti: distrattori 47,4% vs corretta 9,8% (sbilanciato)
- posizione: **A 95% / B 4% / C 0,8% / D 0,1%**
- filler puro ("casuale/non esiste/a caso") ~50-80 domande; il proxy "fuori tema 80,8%" è gonfiato.

## Pilota (Fase 5) — APPROVATO con correzione lunghezze — vedi pilot.json
9 domande riscritte (u02008, py010, py002, sql044, u06048, u09001, py056 + 2 nuove di codice).
Verificato: corretta più-lunga 33,3% / più-corta 33,3%, parentesi 0%, assoluti 33/33, posizione 33/33/33.

## Pipeline (Fase 6) — come procedere
1. `node _rework/dump.js _rework/questions.json` → estrae tutte le domande in JSON (schema affidabile).
2. Riscrivere **materia per materia** (13 UFS + Python + SQL), a lotti di 25-30, ognuna secondo le
   regole sopra. Tenere le riscritture in un file dati per-id e **rigenerare i .js** preservando
   header + `registerSubject("Nome",[...])` e i campi/ordine. (Style: opts multilinea come originale.)
3. Dopo ogni lotto: `python3 _rework/qa.py _rework/questions.json` per controllare il drift, + commit.
4. Ordine consigliato (dalle più rotte): SO/Reti, Python, poi le materie segnate "DA FINIRE" in
   memoria (Time Series, ML, NLP, Pandas, IoT, Spark, Data Pipelines, Modelli Statistici, R, End-to-end),
   infine SQL/Statistica/BI (già più decenti: lì basta 4→3 + ribilanciare).
5. Per REPLACE codice: usare come target le domande più deboli/ridondanti (heuristica in dump: correttà
   più lunga + margine + filler). Salvare quali id sono stati sostituiti.

## Verifica finale (Fase 7/8/9)
- Fase 7: `qa.py` su questions.json PRIMA vs DOPO (baseline.txt è il PRIMA).
- Fase 8: subagent a contesto pulito su ~15-20 domande a caso del risultato.
- Fase 9: aggiornare la memoria di progetto (già fatto il blocco regole).

## DOMANDA APERTA per l'utente (posta, non ancora risolta)
Policy REPLACE per le domande-codice: sacrificare le più deboli anche se sono concetti utili
(riscrivendone comunque il resto), oppure **solo** item davvero ridondanti/duplicati? (Default
assunto: sostituire le più deboli e ridondanti, riscrivendo i concetti salvabili invece di perderli.)

## AVANZAMENTO Fase 6 (aggiornato)
FATTE: ufs02 ✅ | python ✅ | sql ✅ | ufs06 statistica ✅. RESTANO: ufs06 statistica, ufs07 modelli_statistici, ufs08 r, ufs09 ml, ufs10 time_series, ufs12 data_pipelines, ufs13 bi, ufs14 pandas, ufs15 iot, ufs17 spark, ufs18 end_to_end, ufs19 nlp.
METRICA VERA sulla lunghezza: guardare MEDIA char corretta vs distrattori (deve combaciare) e margine-quando-strettamente-piu-lunga (<~5 char = ok). Il '% piu lunga' di qa.py include i pareggi e sovrastima.
RICETTA per file GIA' BUONO (distrattori pieni: statistica, bi, forse modelli/spark/bi): node _rework/reduce4to3.js questions/<f> ; poi convertire multi con apply.js ; trimcorrect.js sugli offender margine>=8 ; commit.
RICETTA per file ROTTO (distrattori corti/deboli: ml, nlp, time_series, pandas, iot, data_pipelines, r, end_to_end): riscrivere a mano rw_<f>.json come ufs02 (distrattori pieni near-miss).
Workflow per file: leggi -> _rework/rw_<file>.json (correct index0) -> node _rework/apply.js questions/<file> _rework/rw_<file>.json -> misura rank lunghezza -> trim offender margine>=8 -> commit. ALLA FINE: node _rework/balance.js (posizione 33/33/33) + python3 _rework/qa.py sul dump finale.
