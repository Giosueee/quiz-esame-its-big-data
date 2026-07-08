/* ============================================================
   MATERIA: Data Pipelines  (UFS12 - Orchestrate Data Pipelines / Airflow)
   100 domande. (Camuffatura lunghezze: pass finale.)
   ============================================================ */
registerSubject("Data Pipelines", [
  {
    id: "u12001", topic: "Pipeline",
    q: "Cos'è una data pipeline?",
    opts: [
      "Un file isolato contenente dati, senza passi automatizzati di trasformazione",
      "Un flusso automatizzato di passi che spostano e trasformano i dati",
      "Una visualizzazione statica dei dati già elaborati"
    ],
    correct: [1],
    exp: "La data pipeline è una sequenza di passi (estrazione, trasformazione, caricamento) automatizzati che portano i dati dalle sorgenti alla destinazione in modo ripetibile."
  },
  {
    id: "u12002", topic: "Orchestrazione",
    q: "Cosa fa un orchestratore di pipeline (es. Airflow)?",
    opts: [
      "Sostituisce il database di destinazione invece di orchestrare il flusso",
      "Memorizza i dati come sistema di storage invece di coordinare i task",
      "Coordina l'esecuzione dei task rispettando dipendenze e schedulazione"
    ],
    correct: [2],
    exp: "L'orchestratore decide COSA eseguire, QUANDO e in quale ORDINE, gestendo dipendenze, ritenta i fallimenti e monitora l'esecuzione. Airflow è uno degli strumenti più diffusi."
  },
  {
    id: "u12003", topic: "Airflow DAG",
    q: "In Airflow, cosa rappresenta un DAG?",
    opts: [
      "Un grafo diretto aciclico che definisce i task e le loro dipendenze",
      "Un singolo task che esegue l'intera pipeline in un colpo solo",
      "Una connessione permanente verso il database di destinazione"
    ],
    correct: [0],
    exp: "Il DAG (Directed Acyclic Graph) descrive il workflow: i nodi sono i task e gli archi le dipendenze. 'Aciclico' significa che non ci sono cicli, così l'esecuzione ha un ordine ben definito."
  },
  {
    id: "u12004", topic: "Aciclico",
    q: "Perché il grafo di una pipeline deve essere ACICLICO?",
    opts: [
      "Per ridurre lo spazio occupato dai metadati dei task",
      "Per evitare dipendenze circolari che bloccherebbero l'esecuzione",
      "Per permettere ai task di eseguirsi in ordine casuale"
    ],
    correct: [1],
    exp: "Un ciclo (A dipende da B che dipende da A) renderebbe impossibile stabilire l'ordine di esecuzione. L'assenza di cicli garantisce che i task possano essere ordinati ed eseguiti."
  },
  {
    id: "u12005", topic: "Task",
    q: "In Airflow, un 'task' è:",
    opts: [
      "Il calendario che stabilisce quando parte la pipeline",
      "La connessione configurata verso una sorgente dati",
      "Un'unità di lavoro da eseguire"
    ],
    correct: [2],
    exp: "Il task è il singolo passo del workflow (es. estrarre un file, eseguire una query). I task sono istanze di operatori e vengono collegati tra loro con dipendenze."
  },
  {
    id: "u12006", topic: "Operator",
    q: "Un 'operator' in Airflow definisce:",
    opts: [
      "Il tipo di lavoro che un task esegue",
      "Il database in cui vengono salvati i risultati finali",
      "L'ordine con cui i task devono essere completati"
    ],
    correct: [0],
    exp: "L'operator è il template del task: PythonOperator esegue codice Python, BashOperator comandi shell, SQL operator query. Istanziandolo si crea un task concreto."
  },
  {
    id: "u12007", topic: "Dipendenze",
    q: "In Airflow, task_a >> task_b significa:",
    opts: [
      "task_a viene eseguito dopo task_b, invertendo la dipendenza indicata",
      "task_b viene eseguito dopo task_a",
      "I due task non hanno vincoli di dipendenza tra loro"
    ],
    correct: [1],
    exp: "L'operatore >> definisce la dipendenza: task_a deve completarsi prima di task_b. È il modo idiomatico di collegare i task nel DAG."
  },
  {
    id: "u12008", topic: "Schedulazione",
    q: "La schedulazione di un DAG serve a:",
    opts: [
      "Assegnare le risorse di calcolo ai singoli task",
      "Stabilire quali task dipendono da quali altri task",
      "Definire quando e con quale frequenza la pipeline viene eseguita"
    ],
    correct: [2],
    exp: "Lo scheduling (es. ogni giorno, ogni ora, tramite espressione cron) stabilisce quando l'orchestratore avvia automaticamente il DAG, senza intervento manuale."
  },
  {
    id: "u12009", topic: "Cron",
    q: "Un'espressione cron serve a:",
    opts: [
      "Specificare orari e frequenze di esecuzione ricorrenti",
      "Definire un grafo di task invece di specificare la ricorrenza temporale",
      "Gestire risorse di memoria durante l'esecuzione dei task"
    ],
    correct: [0],
    exp: "Il cron definisce pattern temporali (es. '0 2 * * *' = ogni giorno alle 2:00). Airflow e molti scheduler lo usano per pianificare le esecuzioni ricorrenti."
  },
  {
    id: "u12010", topic: "Idempotenza",
    q: "Perché un task di pipeline dovrebbe essere idempotente?",
    opts: [
      "Così viene eseguito più velocemente a ogni tentativo",
      "Così rieseguirlo non duplica né corrompe i dati",
      "Così può dipendere da più task contemporaneamente"
    ],
    correct: [1],
    exp: "L'idempotenza garantisce che rieseguire un task produca lo stesso risultato senza duplicati: fondamentale perché le pipeline vanno spesso ritentate dopo fallimenti."
  },
  {
    id: "u12011", topic: "Retry",
    q: "La configurazione dei 'retries' in un task serve a:",
    opts: [
      "Aumentare il volume dei dati senza risolvere il fallimento del task",
      "Rimuovere il task fallito invece di ritentarne l'esecuzione",
      "Riprovare automaticamente in caso di fallimento temporaneo"
    ],
    correct: [2],
    exp: "I retry ritentano automaticamente un task fallito (es. per un errore di rete transitorio), spesso con un intervallo tra i tentativi, aumentando la robustezza della pipeline."
  },
  {
    id: "u12012", topic: "Backfill",
    q: "Il 'backfill' in Airflow consiste nel:",
    opts: [
      "Eseguire il DAG per date passate non ancora processate",
      "Anticipare l'esecuzione di date future non ancora arrivate",
      "Duplicare i dati già caricati per aumentarne la ridondanza"
    ],
    correct: [0],
    exp: "Il backfill esegue le run per intervalli di tempo passati (es. per popolare lo storico o recuperare esecuzioni saltate), sfruttando la data logica di ciascuna run."
  },
  {
    id: "u12013", topic: "ETL vs ELT",
    q: "Nell'ELT rispetto all'ETL:",
    opts: [
      "Trasformare prima del caricamento come nell'ETL classico",
      "Si caricano prima i dati grezzi e si trasformano dopo, nel warehouse",
      "Non caricare mai dati nel warehouse o nel lake"
    ],
    correct: [1],
    exp: "ELT (Extract-Load-Transform) carica i dati grezzi nel data warehouse e li trasforma lì, sfruttandone la potenza. Comune nei DW cloud, spesso con dbt per la trasformazione."
  },
  {
    id: "u12014", topic: "Batch vs streaming",
    q: "L'elaborazione batch differisce dallo streaming perché:",
    opts: [
      "Lo streaming processa a blocchi",
      "Il batch è in tempo reale",
      "Il batch processa dati a blocchi periodici; lo streaming in continuo, in tempo reale"
    ],
    correct: [2],
    exp: "Il batch elabora gruppi di dati a intervalli (es. ogni notte); lo streaming processa gli eventi appena arrivano (bassa latenza). La scelta dipende dai requisiti di freschezza."
  },
  {
    id: "u12015", topic: "Dipendenze tra task",
    q: "Le dipendenze in un DAG servono a garantire che:",
    opts: [
      "Un task parta solo dopo il completamento di quelli da cui dipende",
      "Tutti i task partano insieme",
      "Nessun task venga eseguito"
    ],
    correct: [0],
    exp: "Le dipendenze impongono l'ordine: es. 'trasforma' deve attendere 'estrai'. L'orchestratore le usa per eseguire i task nella sequenza corretta e in parallelo dove possibile."
  },
  {
    id: "u12016", topic: "Monitoraggio",
    q: "Il monitoraggio di una pipeline serve a:",
    opts: [
      "Definire lo schema dei dati letti dalle sorgenti",
      "Rilevare fallimenti, ritardi e anomalie per intervenire tempestivamente",
      "Trasformare i dati grezzi in report pronti all'uso"
    ],
    correct: [1],
    exp: "Monitorare esiti, tempi e volumi delle run permette di accorgersi subito di errori o dati mancanti prima che si propaghino a valle (report sbagliati, decisioni errate)."
  },
  {
    id: "u12017", topic: "Airflow UI",
    q: "L'interfaccia web di Airflow permette di:",
    opts: [
      "Modellare i dati del data warehouse in schemi a stella",
      "Scrivere e compilare il codice delle trasformazioni SQL",
      "Visualizzare lo stato dei DAG e delle run, e gestire le esecuzioni"
    ],
    correct: [2],
    exp: "La UI di Airflow mostra i DAG, lo stato dei task (successo/fallimento/in corso), i log e permette di rilanciare o mettere in pausa le esecuzioni. È lo strumento di controllo."
  },
  {
    id: "u12018", topic: "XCom",
    q: "In Airflow, gli XCom servono a:",
    opts: [
      "Scambiare piccole quantità di dati tra task",
      "Memorizzare grandi file di dati grezzi tra le run",
      "Definire la frequenza di schedulazione del DAG"
    ],
    correct: [0],
    exp: "Gli XCom (cross-communication) permettono a un task di passare piccoli valori a task successivi. Per dati grandi si usa uno storage esterno, non gli XCom."
  },
  {
    id: "u12019", topic: "Sensor",
    q: "Un 'sensor' in Airflow è un task che:",
    opts: [
      "Genera automaticamente i grafici di monitoraggio",
      "Attende il verificarsi di una condizione",
      "Distribuisce i task tra i worker disponibili"
    ],
    correct: [1],
    exp: "I sensor mettono in pausa la pipeline finché una condizione non è soddisfatta (es. un file è presente, una partizione è pronta): utili per sincronizzare con eventi esterni."
  },
  {
    id: "u12020", topic: "Data quality",
    q: "Inserire controlli di qualità (data quality checks) nella pipeline serve a:",
    opts: [
      "Ridurre il numero di partizioni dei dati elaborati",
      "Aumentare volutamente la latenza per sincronizzare i task",
      "Bloccare o segnalare dati errati prima che raggiungano i sistemi a valle"
    ],
    correct: [2],
    exp: "I check di qualità (valori nulli, range, unicità, conteggi attesi) intercettano problemi durante la pipeline, evitando che dati sbagliati arrivino ai report e alle decisioni."
  },
  {
    id: "u12021", topic: "Kimball",
    q: "Nella modellazione dati, l'approccio Kimball è:",
    opts: [
      "Bottom-up con modellazione dimensionale",
      "Una rappresentazione senza variabili misurabili o coordinate utili",
      "Solo per dati non strutturati"
    ],
    correct: [0],
    exp: "Kimball costruisce data mart dimensionali (star schema) integrati tramite dimensioni conformi. Inmon parte da un DW centrale normalizzato (top-down) da cui derivare i mart."
  },
  {
    id: "u12022", topic: "Inmon",
    q: "L'approccio Inmon al data warehouse prevede:",
    opts: [
      "Costruire solo data mart separati senza warehouse centrale",
      "Un data warehouse centrale normalizzato come fonte unica",
      "Eliminare i processi ETL dal data warehouse"
    ],
    correct: [1],
    exp: "Inmon propone un Corporate Information Factory: un DW centrale in terza forma normale, da cui si derivano data mart dimensionali. Approccio top-down, robusto ma più lungo da realizzare."
  },
  {
    id: "u12023", topic: "Parametrizzazione",
    q: "Parametrizzare una pipeline (es. con la data di esecuzione) serve a:",
    opts: [
      "Ridurre i permessi necessari per accedere alle sorgenti",
      "Aumentare il numero di task eseguiti in parallelo",
      "Riutilizzare lo stesso codice per periodi o ambienti diversi"
    ],
    correct: [2],
    exp: "Passare parametri (data logica, ambiente, sorgente) rende la pipeline flessibile e riutilizzabile: la stessa logica gira su date o contesti diversi senza duplicare il codice."
  },
  {
    id: "u12024", topic: "Data logica",
    q: "In Airflow, la 'logical date' (o execution date) di una run rappresenta:",
    opts: [
      "Il periodo di dati che la run sta processando, non l'orario reale di avvio",
      "L'orario fisico di avvio della run nel sistema",
      "Il nome identificativo del DAG, non il periodo logico processato"
    ],
    correct: [0],
    exp: "La logical date indica l'intervallo di dati logicamente coperto dalla run (es. i dati di ieri), utile per elaborazioni idempotenti e backfill, distinta dall'istante di esecuzione."
  },
  {
    id: "u12025", topic: "Modularità",
    q: "Suddividere una pipeline in task piccoli e specifici aiuta a:",
    opts: [
      "Ridurre il numero totale di dati processati dalla pipeline",
      "Isolare i guasti, riprovare solo il passo fallito e riusare i componenti",
      "Eliminare la necessità di definire dipendenze tra i task"
    ],
    correct: [1],
    exp: "Task piccoli e mirati rendono la pipeline più manutenibile: si può ritentare solo il passo fallito, individuare rapidamente i problemi e riutilizzare i componenti."
  },
  {
    id: "u12026", topic: "Full vs incremental load",
    q: "Un caricamento incrementale rispetto al full load:",
    opts: [
      "Elimina i dati sorgente invece di conservarli o trasformarli",
      "Ricarica tutto",
      "Elabora solo i dati nuovi/modificati, riducendo tempi e costi"
    ],
    correct: [2],
    exp: "L'incremental load processa solo le variazioni (nuove righe, aggiornamenti) invece dell'intero dataset: molto più efficiente su grandi volumi rispetto al full load ogni volta."
  },
  {
    id: "u12027", topic: "Dipendenze dati",
    q: "Perché ordinare i task in base alle dipendenze dei dati?",
    opts: [
      "Perché un passo può richiedere l'output di un altro già pronto",
      "Perché così i task occupano meno memoria durante l'esecuzione",
      "Perché l'ordine casuale dei task è più efficiente"
    ],
    correct: [0],
    exp: "Se 'trasforma' usa l'output di 'estrai', deve partire dopo. L'ordine basato sulle dipendenze dei dati garantisce che ogni task disponga degli input necessari."
  },
  {
    id: "u12028", topic: "Alert",
    q: "Configurare notifiche/alert su una pipeline serve a:",
    opts: [
      "Aumentare automaticamente le risorse assegnate ai task lenti",
      "Avvisare il team quando un task fallisce o supera una soglia di tempo",
      "Ridurre il numero di run schedulate durante la giornata"
    ],
    correct: [1],
    exp: "Gli alert (email, Slack) informano subito gli operatori di fallimenti o ritardi, permettendo un intervento rapido invece di scoprire i problemi dai report sbagliati."
  },
  {
    id: "u12029", topic: "Parallelismo",
    q: "Task indipendenti in un DAG possono essere:",
    opts: [
      "Uniti obbligatoriamente in un unico grande task",
      "Eseguiti solo in sequenza uno dopo l'altro",
      "Eseguiti in parallelo per ridurre il tempo totale"
    ],
    correct: [2],
    exp: "L'orchestratore esegue in parallelo i task senza dipendenze reciproche (compatibilmente con le risorse), riducendo la durata complessiva della pipeline."
  },
  {
    id: "u12030", topic: "Riproducibilità",
    q: "Versionare il codice delle pipeline (git) serve a:",
    opts: [
      "Tracciare le modifiche, collaborare e poter tornare a versioni precedenti",
      "Aumentare la velocità di esecuzione senza tracciare versioni e modifiche",
      "Ridurre lo spazio occupato dai dati sul warehouse"
    ],
    correct: [0],
    exp: "Il versionamento porta le pratiche software nelle pipeline: cronologia delle modifiche, revisione, rollback e collaborazione, rendendo il processo affidabile e riproducibile."
  },
  {
    id: "u12031", topic: "Staging",
    q: "Un'area di staging in una pipeline serve a:",
    opts: [
      "Mostrare dashboard finali invece di ospitare dati grezzi",
      "Ospitare i dati grezzi in transito prima delle trasformazioni",
      "Archiviare report finali invece di dati in transito"
    ],
    correct: [1],
    exp: "Lo staging isola le sorgenti dal target: i dati estratti vi sostano grezzi prima di pulizia e caricamento, semplificando debugging e ripartenze."
  },
  {
    id: "u12032", topic: "Trigger",
    q: "Una pipeline 'event-driven' viene avviata:",
    opts: [
      "Da un altro task nello stesso identico DAG",
      "Solo manualmente da un operatore a ogni esecuzione",
      "Dal verificarsi di un evento invece che a orario fisso"
    ],
    correct: [2],
    exp: "Le pipeline event-driven reagiscono a eventi (nuovo file, messaggio in coda) invece di una schedulazione fissa: utili quando i dati arrivano in modo irregolare o serve bassa latenza."
  },
  {
    id: "u12033", topic: "SLA",
    q: "Impostare uno SLA su una pipeline serve a:",
    opts: [
      "Definire un tempo massimo entro cui deve completarsi, segnalando i ritardi",
      "Stabilire quante volte un task fallito viene ritentato",
      "Definire lo schema dei dati prodotti in output"
    ],
    correct: [0],
    exp: "Lo SLA (Service Level Agreement) fissa una scadenza: se la pipeline non finisce in tempo, si genera un alert. Aiuta a garantire che i dati siano pronti quando servono."
  },
  {
    id: "u12034", topic: "Dead letter",
    q: "Un meccanismo di 'dead letter' per i dati problematici serve a:",
    opts: [
      "Eliminare definitivamente i record corretti già elaborati",
      "Mettere da parte i record non processabili per analizzarli senza bloccare tutto",
      "Aumentare la priorità dei record problematici in coda"
    ],
    correct: [1],
    exp: "I record che non superano le validazioni vengono deviati in un'area 'dead letter' per ispezione, così la pipeline continua sui dati validi senza fermarsi del tutto."
  },
  {
    id: "u12035", topic: "Idempotenza pratica",
    q: "Un modo per rendere idempotente un caricamento è:",
    opts: [
      "Cancellare tutto ogni volta a caso",
      "Aggiungere nuove righe",
      "Sostituire/sovrascrivere la partizione della data invece di accodare sempre"
    ],
    correct: [2],
    exp: "Riscrivere la partizione corrispondente alla data logica (upsert o overwrite) evita duplicati se il task viene rieseguito: il risultato è sempre lo stesso, a prescindere dai retry."
  },
  {
    id: "u12036", topic: "Estrazione incrementale",
    q: "Per estrarre solo i nuovi dati da una sorgente si usa spesso:",
    opts: [
      "Un campo watermark per prelevare solo le novità",
      "Un ordinamento casuale delle righe della sorgente",
      "La cancellazione dei dati vecchi dalla sorgente"
    ],
    correct: [0],
    exp: "Il watermark (timestamp o id crescente) tiene traccia di fin dove si è già letto: alla run successiva si estraggono solo i record più recenti, realizzando l'estrazione incrementale."
  },
  {
    id: "u12037", topic: "Data pipeline vs script",
    q: "Perché usare un orchestratore invece di un semplice script cron?",
    opts: [
      "Perché si attribuisce all'orchestratore un rallentamento come beneficio",
      "Gestisce dipendenze, retry, monitoraggio e visibilità meglio di uno script isolato",
      "Non offre vantaggi rispetto a uno script isolato con schedulazione cron"
    ],
    correct: [1],
    exp: "Un orchestratore offre gestione delle dipendenze tra task, ritentativi, log centralizzati, alert e UI di monitoraggio: capacità che un cron con script sparsi non fornisce facilmente."
  },
  {
    id: "u12038", topic: "Task fallito",
    q: "Se un task a monte fallisce, i task a valle che ne dipendono:",
    opts: [
      "Diventano più veloci perché il task a monte è fallito",
      "Partono comunque anche se manca l'output del task a monte",
      "Non vengono eseguiti"
    ],
    correct: [2],
    exp: "Le dipendenze impediscono ai task a valle di partire se un loro predecessore è fallito, evitando di elaborare dati mancanti o incompleti. Si interviene sul task fallito e si rilancia."
  },
  {
    id: "u12039", topic: "Config as code",
    q: "Definire le pipeline 'as code' (es. DAG Python) rispetto a interfacce grafiche:",
    opts: [
      "Favorisce versionamento, test e riproducibilità",
      "Impedisce la collaborazione",
      "Non permette la schedulazione"
    ],
    correct: [0],
    exp: "Le pipeline come codice sono versionabili, testabili e riproducibili, e si integrano con git e CI/CD. Airflow definisce i DAG in Python proprio per questi vantaggi."
  },
  {
    id: "u12040", topic: "Latenza vs costo",
    q: "Passare da batch giornaliero a streaming in tempo reale:",
    opts: [
      "Lascia invariato il risultato dell'operazione sui dati",
      "Riduce la latenza dei dati ma aumenta complessità e costi",
      "Elimina la necessità di monitoraggio"
    ],
    correct: [1],
    exp: "Il tempo reale offre dati freschissimi ma richiede architetture più complesse (streaming, code) e maggiori costi. Si sceglie solo se il business ne ha davvero bisogno."
  },
  {
    id: "u12041", topic: "Catalogo",
    q: "Un data catalog nel contesto delle pipeline aiuta a:",
    opts: [
      "Aumentare il numero di retry in caso di fallimento",
      "Assegnare le risorse di calcolo ai task della pipeline",
      "Documentare dataset, schemi e lineage per trovarli e capirli"
    ],
    correct: [2],
    exp: "Il catalogo raccoglie metadati, descrizioni e provenienza dei dataset prodotti dalle pipeline, facilitando scoperta, comprensione e fiducia nei dati."
  },
  {
    id: "u12042", topic: "Ambienti",
    q: "Separare gli ambienti (dev, test, produzione) per le pipeline serve a:",
    opts: [
      "Testare le modifiche senza rischiare i dati di produzione",
      "Ridurre lo spazio occupato dai dati sul warehouse",
      "Eliminare la necessità di monitorare le pipeline"
    ],
    correct: [0],
    exp: "Sviluppare e testare in ambienti isolati evita che errori impattino i dati reali. Solo dopo la validazione le modifiche vengono promosse in produzione."
  },
  {
    id: "u12043", topic: "Riavvio parziale",
    q: "Poter rilanciare solo il task fallito (invece dell'intero DAG) è utile perché:",
    opts: [
      "Elimina i dati sorgente invece di conservarli o trasformarli",
      "Risparmia tempo e risorse non rieseguendo i passi già completati",
      "Modifica i colori dell'interfaccia senza intervenire sulla pipeline"
    ],
    correct: [1],
    exp: "Se un solo passo fallisce, ri-eseguire da capo tutta la pipeline è spreco. Gli orchestratori permettono di riavviare dal punto di fallimento, sfruttando gli output già prodotti (se idempotenti)."
  },
  {
    id: "u12044", topic: "Dipendenza esterna",
    q: "Una pipeline che dipende dall'output di un'altra si può gestire con:",
    opts: [
      "L'esecuzione delle due pipeline in ordine casuale",
      "La copia manuale dell'output da una pipeline all'altra",
      "Sensor o trigger che attendono il completamento dell'altra pipeline"
    ],
    correct: [2],
    exp: "Le dipendenze tra pipeline si gestiscono con sensori o trigger cross-DAG che fanno partire una pipeline solo quando l'altra ha prodotto i dati necessari."
  },
  {
    id: "u12045", topic: "Logging",
    q: "I log dettagliati dei task servono a:",
    opts: [
      "Diagnosticare i problemi quando qualcosa va storto",
      "Aumentare la velocità di esecuzione dei task",
      "Assegnare le priorità ai task in coda"
    ],
    correct: [0],
    exp: "I log registrano cosa ha fatto ogni task (input, errori, tempi): sono essenziali per capire e risolvere i fallimenti. Airflow li centralizza e li rende accessibili dalla UI."
  },
  {
    id: "u12046", topic: "Costanza dello schema",
    q: "Un cambiamento improvviso dello schema della sorgente (schema drift) può:",
    opts: [
      "Migliorare automaticamente le prestazioni delle query",
      "Rompere la pipeline se non gestito",
      "Ridurre il numero di partizioni dei dati elaborati"
    ],
    correct: [1],
    exp: "Se la sorgente cambia struttura (colonne aggiunte/rimosse/rinominate) senza che la pipeline se ne accorga, l'elaborazione può fallire o produrre dati errati. Serve gestione e monitoraggio dello schema."
  },
  {
    id: "u12047", topic: "Trasformazione nel DW",
    q: "Nell'ELT, spostare la trasformazione nel data warehouse permette di:",
    opts: [
      "Eliminare la necessità di estrarre i dati dalle sorgenti",
      "Evitare qualsiasi trasformazione dei dati",
      "Sfruttare la potenza di calcolo del DW e usare SQL/dbt versionato"
    ],
    correct: [2],
    exp: "I data warehouse cloud sono molto potenti: trasformare i dati lì con SQL (spesso via dbt) è scalabile, versionabile e testabile, a differenza di trasformare fuori prima del caricamento."
  },
  {
    id: "u12048", topic: "Deduplicazione",
    q: "La deduplicazione in una pipeline serve a:",
    opts: [
      "Eliminare record ripetuti prima del caricamento",
      "Cifrare i record sensibili prima dell'invio",
      "Ordinare i record in base alla data di arrivo"
    ],
    correct: [0],
    exp: "Sorgenti e retry possono introdurre duplicati: la deduplicazione (per chiave) garantisce che ogni entità compaia una sola volta, mantenendo la qualità dei dati a valle."
  },
  {
    id: "u12049", topic: "Costi cloud",
    q: "Ottimizzare una pipeline in cloud spesso significa:",
    opts: [
      "Elaborare l'intero dataset a ogni esecuzione",
      "Ridurre dati elaborati inutilmente e usare caricamenti incrementali",
      "Disattivare il monitoraggio per risparmiare risorse"
    ],
    correct: [1],
    exp: "In cloud si paga per calcolo e storage usati: processare solo i dati necessari (incrementale), pulire dati inutili e schedulare bene riduce i costi senza sacrificare i risultati."
  },
  {
    id: "u12050", topic: "Pipeline affidabile",
    q: "Quale caratteristica ha una pipeline dati affidabile?",
    opts: [
      "L'esecuzione senza alcun monitoraggio",
      "L'assenza di gestione degli errori",
      "L'idempotenza delle esecuzioni"
    ],
    correct: [2],
    exp: "Una pipeline affidabile è idempotente, ha retry automatici e monitoraggio/alert. L'assenza di gestione errori o di monitoraggio la rende fragile e inaffidabile."
  },
  {
    id: "u12051", topic: "Grafo dei task",
    q: "La rappresentazione a grafo di una pipeline aiuta a:",
    opts: [
      "Visualizzare dipendenze e flusso di esecuzione",
      "Cifrare i dati che transitano tra i task",
      "Ridurre il numero di utenti che accedono ai dati"
    ],
    correct: [0],
    exp: "Il grafo (DAG) mostra chiaramente quali task dipendono da quali e in che ordine scorrono i dati, facilitando comprensione, debugging e ottimizzazione della pipeline."
  },
  {
    id: "u12052", topic: "Scheduler",
    q: "Lo scheduler di Airflow si occupa di:",
    opts: [
      "Memorizzare fisicamente i dati elaborati dai task",
      "Decidere quali task eseguire e quando, in base a schedulazione e dipendenze",
      "Creare le dashboard di business intelligence"
    ],
    correct: [1],
    exp: "Lo scheduler valuta i DAG, determina le run da avviare (in base a schedulazione e stato delle dipendenze) e mette i task in coda per l'esecuzione da parte dei worker."
  },
  {
    id: "u12053", topic: "Worker",
    q: "I 'worker' in un sistema di orchestrazione:",
    opts: [
      "Assegnano le priorità ai task in coda",
      "Definiscono la struttura del DAG e le dipendenze",
      "Eseguono concretamente i task assegnati"
    ],
    correct: [2],
    exp: "I worker sono i processi che eseguono i task. In architetture distribuite più worker eseguono task in parallelo, scalando la capacità di elaborazione della pipeline."
  },
  {
    id: "u12054", topic: "Trasformazioni SQL",
    q: "Usare SQL per le trasformazioni nel DW (es. con dbt) offre:",
    opts: [
      "Leggibilità, testabilità e sfruttamento del motore del warehouse",
      "Impedisce il versionamento delle trasformazioni SQL",
      "Non porta alcun vantaggio rispetto a trasformazioni ad hoc"
    ],
    correct: [0],
    exp: "SQL è dichiarativo, familiare e potente sul DW; con dbt si aggiungono modularità, test, documentazione e versionamento, portando ingegneria del software all'analytics."
  },
  {
    id: "u12055", topic: "Partizionamento",
    q: "Partizionare i dati per data nel data lake/warehouse serve a:",
    opts: [
      "Rallentare le query obbligando a leggere tutti i dati",
      "Leggere solo le partizioni rilevanti, velocizzando query e caricamenti",
      "Aumentare i duplicati distribuendo i dati su più file"
    ],
    correct: [1],
    exp: "Il partizionamento (es. per giorno) permette di leggere/riscrivere solo i dati del periodo interessato invece dell'intero dataset, migliorando performance ed efficienza dei caricamenti incrementali."
  },
  {
    id: "u12056", topic: "Recupero da errore",
    q: "Dopo un fallimento, una buona pipeline deve poter:",
    opts: [
      "Ignorare l'errore e proseguire a caso",
      "Cancellare tutti i dati",
      "Ripartire in sicurezza senza corrompere o duplicare i dati"
    ],
    correct: [2],
    exp: "La ripartenza sicura (grazie a idempotenza e stato dei task) permette di riprendere dal punto giusto senza danni ai dati. È essenziale in produzione, dove i fallimenti capitano."
  },
  {
    id: "u12057", topic: "Test delle pipeline",
    q: "Testare una pipeline dati significa anche:",
    opts: [
      "Verificare trasformazioni e qualità dei dati con dati di prova/asserzioni",
      "Aumentare la velocità di esecuzione senza tracciare versioni e modifiche",
      "Ridurre il numero di sorgenti dati collegate"
    ],
    correct: [0],
    exp: "Oltre al codice, si testano le trasformazioni (output atteso su input noti) e la qualità dei dati (asserzioni su nulli, range, conteggi), spesso integrandoli nella pipeline stessa."
  },
  {
    id: "u12058", topic: "Orchestrazione vs esecuzione",
    q: "Un orchestratore come Airflow tipicamente:",
    opts: [
      "Non avvia task né coordina esecuzioni della pipeline",
      "Coordina i task ma delega l'esecuzione pesante ad altri sistemi",
      "Sostituisce il warehouse invece di coordinare task e dipendenze"
    ],
    correct: [1],
    exp: "Airflow eccelle nell'orchestrazione (quando/ordine), ma il calcolo pesante è meglio delegarlo a motori appositi (data warehouse, Spark). Airflow innesca e coordina, non è un motore di elaborazione dati."
  },
  {
    id: "u12059", topic: "Pipeline dichiarativa",
    q: "Definire cosa deve accadere (dichiarativo) invece di ogni passo procedurale aiuta a:",
    opts: [
      "Nascondere le dipendenze tra i vari task",
      "Aumentare la latenza complessiva della pipeline",
      "Rendere la pipeline più leggibile e manutenibile"
    ],
    correct: [2],
    exp: "Un approccio dichiarativo (es. modelli dbt, DAG con dipendenze esplicite) descrive obiettivi e relazioni, lasciando al sistema i dettagli di esecuzione: più chiaro e manutenibile."
  },
  {
    id: "u12060", topic: "Freschezza dati",
    q: "La frequenza di schedulazione di una pipeline dipende soprattutto da:",
    opts: [
      "Quanto devono essere freschi i dati per le esigenze di business",
      "La scelta cromatica delle visualizzazioni, senza effetto sui dati",
      "Il numero di sviluppatori"
    ],
    correct: [0],
    exp: "Se il business ha bisogno di dati aggiornati ogni ora, la pipeline gira ogni ora; se basta il giorno prima, gira di notte. La freschezza richiesta guida la schedulazione (e i costi)."
  },
  {
    id: "u12061", topic: "Metadati di esecuzione",
    q: "Registrare metadati sulle run (durata, righe processate, esito) serve a:",
    opts: [
      "Definire lo schema dei dati letti dalle sorgenti",
      "Monitorare le performance e diagnosticare anomalie nel tempo",
      "Sostituire i log dettagliati dei singoli task"
    ],
    correct: [1],
    exp: "I metadati di esecuzione permettono di individuare rallentamenti, cali di volume o fallimenti ricorrenti, misurando l'affidabilità e la salute della pipeline nel tempo."
  },
  {
    id: "u12062", topic: "Concorrenza",
    q: "Limitare la concorrenza (numero di task paralleli) serve a:",
    opts: [
      "Ridurre lo spazio occupato dai dati sul disco",
      "Aumentare il numero di retry in caso di fallimento",
      "Evitare di sovraccaricare le risorse o le sorgenti dati"
    ],
    correct: [2],
    exp: "Troppi task in parallelo possono saturare CPU, memoria o le connessioni alla sorgente. Impostare limiti di concorrenza protegge i sistemi e mantiene la pipeline stabile."
  },
  {
    id: "u12063", topic: "Trasformazione riproducibile",
    q: "Perché una trasformazione dovrebbe dipendere solo dai suoi input e non dallo stato esterno?",
    opts: [
      "Per essere riproducibile e idempotente: stesso input, stesso output",
      "Per potersi collegare a più sorgenti contemporaneamente",
      "Per essere eseguita più lentamente ma con più sicurezza"
    ],
    correct: [0],
    exp: "Una funzione di trasformazione 'pura' (dipende solo dagli input) è riproducibile e testabile: rieseguirla dà sempre lo stesso risultato, indispensabile per pipeline affidabili."
  },
  {
    id: "u12064", topic: "Priorità",
    q: "Le priorità dei task in un orchestratore servono a:",
    opts: [
      "Definire lo schema dei dati prodotti dai task",
      "Decidere quali eseguire prima quando le risorse sono limitate",
      "Cancellare i task a bassa priorità dal DAG"
    ],
    correct: [1],
    exp: "Quando più task competono per risorse limitate, le priorità stabiliscono l'ordine, assicurando che i processi critici (es. quelli con SLA stringenti) vengano serviti per primi."
  },
  {
    id: "u12065", topic: "Estrazione da API",
    q: "Estrarre dati da un'API con paginazione richiede di:",
    opts: [
      "Ordinare le pagine in modo casuale prima di leggerle",
      "Richiedere tutte le pagine in un'unica chiamata sola",
      "Iterare sulle pagine finché non si esauriscono i risultati"
    ],
    correct: [2],
    exp: "Le API restituiscono i dati a pagine: la pipeline deve iterare (seguendo cursori o offset) finché non ci sono più risultati, gestendo anche i limiti di frequenza (rate limit)."
  },
  {
    id: "u12066", topic: "Rate limiting",
    q: "Rispettare il rate limit di una sorgente/API significa:",
    opts: [
      "Non superare il numero massimo di richieste consentite nell'unità di tempo",
      "Fare più richieste possibili tutte nello stesso istante",
      "Cifrare ogni richiesta inviata alla sorgente"
    ],
    correct: [0],
    exp: "Molte API limitano le richieste al secondo/minuto: la pipeline deve rallentare o distribuire le chiamate per non essere bloccata, gestendo anche i retry con backoff."
  },
  {
    id: "u12067", topic: "Backoff",
    q: "Un retry con 'exponential backoff' significa:",
    opts: [
      "Riprovare subito senza attese",
      "Aumentare progressivamente l'attesa tra un tentativo e il successivo",
      "Rimuovere il task fallito invece di ritentarne l'esecuzione"
    ],
    correct: [1],
    exp: "Con l'exponential backoff gli intervalli tra i retry crescono (1s, 2s, 4s...): dà tempo a un servizio sovraccarico di riprendersi ed evita di martellarlo con richieste ravvicinate."
  },
  {
    id: "u12068", topic: "Data contract",
    q: "Un 'data contract' tra produttore e consumatore di dati definisce:",
    opts: [
      "La capacità della rete tra servizi, non una regola di dipendenza",
      "La scelta cromatica delle visualizzazioni, senza effetto sui dati",
      "Lo schema e le garanzie attese sui dati scambiati"
    ],
    correct: [2],
    exp: "Il data contract stabilisce struttura, tipi, significato e SLA dei dati forniti: riduce le rotture da schema drift e allinea le aspettative tra chi produce e chi consuma i dati."
  },
  {
    id: "u12069", topic: "Trasformazioni in memoria vs push-down",
    q: "Il 'push-down' delle trasformazioni consiste nel:",
    opts: [
      "Far eseguire le operazioni al sistema che detiene i dati",
      "Portare i dati in locale prima di elaborarli",
      "Applicare i filtri dopo aver caricato i dati"
    ],
    correct: [0],
    exp: "Spingere il calcolo dove stanno i dati (es. filtri e aggregazioni nel DW) riduce i dati trasferiti e sfrutta motori ottimizzati, invece di estrarre tutto ed elaborarlo altrove."
  },
  {
    id: "u12070", topic: "Idempotenza vs append",
    q: "Un task che fa solo 'append' dei dati a ogni run:",
    opts: [
      "È idempotente",
      "Rischia duplicati se rieseguito: non è idempotente di per sé",
      "Elimina i dati sorgente invece di conservarli o trasformarli"
    ],
    correct: [1],
    exp: "L'append cieco duplica i dati se la run viene ripetuta. Per l'idempotenza serve sovrascrivere la partizione o usare upsert su chiave, così i retry non creano doppioni."
  },
  {
    id: "u12071", topic: "Documentazione",
    q: "Documentare una pipeline (scopo, sorgenti, trasformazioni) serve a:",
    opts: [
      "Ridurre lo spazio occupato dai dati sul warehouse",
      "Aumentare la velocità di esecuzione della pipeline",
      "Facilitare manutenzione, onboarding e fiducia nei dati"
    ],
    correct: [2],
    exp: "La documentazione rende la pipeline comprensibile a chi la mantiene o consuma i dati: cosa fa, da dove vengono i dati e come sono trasformati, aumentando fiducia e manutenibilità."
  },
  {
    id: "u12072", topic: "Costruire vs comprare",
    q: "Usare uno strumento gestito (es. Fivetran) per l'estrazione invece di scrivere connettori serve a:",
    opts: [
      "Risparmiare tempo di sviluppo e manutenzione sui connettori",
      "Aumentare inevitabilmente il numero di bug nel codice",
      "Rallentare l'estrazione rispetto a un connettore custom"
    ],
    correct: [0],
    exp: "Strumenti gestiti offrono connettori pronti e manutenuti verso molte sorgenti: si evita di sviluppare e mantenere integrazioni fragili, concentrandosi sul valore (trasformazioni e analisi)."
  },
  {
    id: "u12073", topic: "Snapshot sorgente",
    q: "Fare uno snapshot periodico di una tabella sorgente mutabile serve a:",
    opts: [
      "Cancellare definitivamente la tabella sorgente originale",
      "Catturarne lo stato nel tempo per storicizzazione e SCD",
      "Aumentare la velocità delle query sulla sorgente"
    ],
    correct: [1],
    exp: "Se la sorgente sovrascrive i dati, gli snapshot ne registrano lo stato a intervalli, permettendo di ricostruire la storia (utile per le Slowly Changing Dimensions)."
  },
  {
    id: "u12074", topic: "Trigger a valle",
    q: "Il concetto di 'trigger rule' in Airflow definisce:",
    opts: [
      "La capacità della rete tra servizi, non una regola di dipendenza",
      "Il colore mostrato nell'interfaccia per distinguere lo stato del task",
      "A quali condizioni sui task a monte un task deve partire"
    ],
    correct: [2],
    exp: "Le trigger rule (all_success, one_failed, all_done...) stabiliscono quando un task si attiva in base allo stato dei predecessori, gestendo flussi condizionali e di gestione errori."
  },
  {
    id: "u12075", topic: "Ambiente riproducibile",
    q: "Usare container (Docker) per i task della pipeline aiuta a:",
    opts: [
      "Garantire lo stesso ambiente ed evitare problemi di dipendenze",
      "Aumentare volutamente la latenza tra un task e l'altro",
      "Ridurre il numero di task presenti nel DAG"
    ],
    correct: [0],
    exp: "I container impacchettano codice e dipendenze in un ambiente coerente: il task gira uguale in sviluppo e produzione, eliminando i problemi 'funziona sul mio computer'."
  },
  {
    id: "u12076", topic: "Modello incrementale",
    q: "Per un caricamento incrementale servono tipicamente:",
    opts: [
      "Soltanto un ordinamento casuale delle righe della sorgente",
      "Una chiave e un campo temporale/watermark per individuare le novità",
      "Un unico task che cancella e ricarica l'intera tabella"
    ],
    correct: [1],
    exp: "Per caricare solo le novità servono un identificatore (chiave per gli upsert) e un riferimento temporale (data di modifica) che indichi cosa è cambiato dall'ultima esecuzione."
  },
  {
    id: "u12077", topic: "Pipeline come prodotto",
    q: "Trattare i dati/pipeline 'come un prodotto' significa:",
    opts: [
      "Aumentare il numero di run senza alcun monitoraggio",
      "Ignorare chi consuma i dati a valle",
      "Curarne qualità, affidabilità, documentazione e i bisogni degli utenti"
    ],
    correct: [2],
    exp: "L'approccio 'data as a product' pone attenzione a chi consuma i dati: affidabilità, SLA, qualità e documentazione, come per qualsiasi prodotto con i suoi clienti."
  },
  {
    id: "u12078", topic: "Esecuzione condizionale",
    q: "Il branching in una pipeline permette di:",
    opts: [
      "Eseguire percorsi diversi in base a una condizione",
      "Eseguire tutti i task senza eccezioni",
      "Aumentare il numero di retry dei task"
    ],
    correct: [0],
    exp: "Il branching (es. BranchPythonOperator) sceglie a runtime quali task eseguire in base a una condizione, permettendo flussi diversi (es. carica solo se ci sono nuovi dati)."
  },
  {
    id: "u12079", topic: "Timeout",
    q: "Impostare un timeout su un task serve a:",
    opts: [
      "Aumentare le risorse assegnate al task automaticamente",
      "Interromperlo se supera una durata massima, evitando blocchi indefiniti",
      "Cifrare i dati elaborati dal task"
    ],
    correct: [1],
    exp: "Il timeout evita che un task 'appeso' (es. per una sorgente che non risponde) blocchi la pipeline all'infinito: dopo il limite viene interrotto e può scattare un retry o un alert."
  },
  {
    id: "u12080", topic: "Consistenza a valle",
    q: "Caricare dati parziali nel DW durante un errore può causare:",
    opts: [
      "Una riduzione automatica dello spazio occupato",
      "Nessun problema, anzi rende i dati più freschi",
      "Report incoerenti; meglio caricare in modo atomico/transazionale"
    ],
    correct: [2],
    exp: "Se una run fallisce a metà lasciando dati parziali, i report diventano incoerenti. Caricare in modo atomico (tutto o niente) o su una partizione sostituita mantiene la coerenza."
  },
  {
    id: "u12081", topic: "Riuso di componenti",
    q: "Creare task/operator riutilizzabili aiuta a:",
    opts: [
      "Ridurre duplicazione e standardizzare le pipeline",
      "Rallentare l'esecuzione dei task riutilizzati",
      "Impedire il versionamento del codice della pipeline"
    ],
    correct: [0],
    exp: "Componenti riutilizzabili (funzioni, operator custom, macro) evitano di riscrivere la stessa logica in ogni DAG, standardizzando e semplificando la manutenzione."
  },
  {
    id: "u12082", topic: "Osservabilità",
    q: "L'osservabilità dei dati (data observability) riguarda:",
    opts: [
      "Solo impostazioni grafiche di presentazione, senza controlli sui dati",
      "Monitorare freschezza, volume, schema e qualità per accorgersi dei problemi",
      "Il numero di visualizzazioni presenti nel report o nella dashboard"
    ],
    correct: [1],
    exp: "La data observability sorveglia metriche come freschezza, volumi, distribuzione, schema e qualità, avvisando quando qualcosa devia dall'atteso, prima che impatti i consumatori."
  },
  {
    id: "u12083", topic: "Ordine di caricamento",
    q: "Perché caricare le dimensioni prima dei fatti?",
    opts: [
      "Perché i fatti vanno cancellati dopo le dimensioni",
      "Perché le dimensioni occupano più spazio dei fatti",
      "Perché i fatti referenziano le chiavi delle dimensioni, che devono già esistere"
    ],
    correct: [2],
    exp: "Le fact table contengono foreign key verso le dimensioni: se un fatto arriva prima della dimensione corrispondente, il collegamento manca. Quindi si caricano prima le dimensioni."
  },
  {
    id: "u12084", topic: "Pipeline scalabile",
    q: "Una pipeline scalabile deve poter gestire:",
    opts: [
      "Volumi crescenti di dati senza riscritture radicali",
      "Soltanto volumi di dati fissi e mai variabili",
      "Nessun aumento dei dati nel corso del tempo"
    ],
    correct: [0],
    exp: "La scalabilità permette di reggere l'aumento dei dati (partizionamento, parallelismo, motori distribuiti) senza dover riprogettare tutto: importante man mano che il business cresce."
  },
  {
    id: "u12085", topic: "Ingestione",
    q: "L'ingestione (ingestion) dei dati è la fase in cui:",
    opts: [
      "I dati vengono cancellati dopo essere stati letti",
      "I dati vengono acquisiti dalle sorgenti verso la piattaforma dati",
      "Si generano i grafici finali per gli utenti"
    ],
    correct: [1],
    exp: "L'ingestione è il primo passo: portare i dati (batch o streaming) dalle sorgenti (database, API, file, code) nella piattaforma (lake/warehouse) per le successive elaborazioni."
  },
  {
    id: "u12086", topic: "Trasformazioni testate",
    q: "Aggiungere test alle trasformazioni (es. con dbt) permette di:",
    opts: [
      "Assegnare le risorse di calcolo ai vari modelli",
      "Aumentare il numero di righe duplicate nei risultati",
      "Individuare regressioni e problemi di qualità prima della pubblicazione"
    ],
    correct: [2],
    exp: "I test verificano che le trasformazioni producano risultati corretti e che i dati rispettino le regole (unicità, non nulli, valori attesi): intercettano errori prima che arrivino agli utenti."
  },
  {
    id: "u12087", topic: "Costo del ritardo",
    q: "Un ritardo nella pipeline (dati non pronti in tempo) può:",
    opts: [
      "Compromettere decisioni e report che dipendono da quei dati",
      "Migliorare la qualità dei dati man mano che passa il tempo",
      "Non avere alcuna conseguenza sui consumatori dei dati"
    ],
    correct: [0],
    exp: "Se i dati non sono pronti quando servono (es. report del mattino), le decisioni si basano su dati vecchi o mancanti. Per questo si definiscono SLA e alert sui ritardi."
  },
  {
    id: "u12088", topic: "Separazione responsabilità",
    q: "Separare estrazione, trasformazione e caricamento in fasi distinte aiuta a:",
    opts: [
      "Confondere le fasi rendendole indistinguibili tra loro",
      "Isolare i problemi e riutilizzare/ritentare singole fasi",
      "Impedire di individuare in quale punto avviene un errore"
    ],
    correct: [1],
    exp: "Fasi ben separate (E, T, L) permettono di individuare in quale punto qualcosa è andato storto, ritentare solo quella fase e riutilizzare i componenti in altre pipeline."
  },
  {
    id: "u12089", topic: "Compressione e formati",
    q: "Usare formati colonnari compressi (es. Parquet) nelle pipeline aiuta a:",
    opts: [
      "Impedire la lettura selettiva delle colonne",
      "Rallentare le letture obbligando a scorrere tutto",
      "Ridurre spazio e velocizzare le letture analitiche"
    ],
    correct: [2],
    exp: "Parquet (colonnare, compresso) riduce lo storage e permette di leggere solo le colonne necessarie: molto più efficiente del CSV per elaborazioni analitiche su grandi volumi."
  },
  {
    id: "u12090", topic: "Backfill sicuro",
    q: "Perché l'idempotenza è cruciale per il backfill?",
    opts: [
      "Perché si rieseguono molte run passate e non devono duplicare i dati",
      "Perché il backfill è un'operazione vietata in produzione",
      "Perché riduce il numero di partizioni dei dati"
    ],
    correct: [0],
    exp: "Il backfill rilancia molte esecuzioni storiche: se i task non sono idempotenti, si accumulerebbero duplicati. L'idempotenza garantisce che ogni run produca lo stato corretto."
  },
  {
    id: "u12091", topic: "Coda di messaggi",
    q: "Una coda di messaggi (message queue) in una pipeline serve a:",
    opts: [
      "Accoppiare strettamente i due sistemi tra loro",
      "Disaccoppiare produttori e consumatori, bufferizzando gli eventi",
      "Rallentare volutamente l'intera pipeline"
    ],
    correct: [1],
    exp: "La coda fa da cuscinetto tra chi produce e chi consuma i dati: assorbe i picchi, disaccoppia i sistemi e rende la pipeline più resiliente. Tipica nelle architetture di streaming."
  },
  {
    id: "u12092", topic: "Trasformazione vs orchestrazione",
    q: "Dbt e Airflow sono:",
    opts: [
      "Due strumenti di grafica",
      "Concorrenti che fanno la stessa cosa",
      "Complementari: dbt trasforma nel DW, Airflow orchestra i passi"
    ],
    correct: [2],
    exp: "Airflow orchestra (quando/ordine dei task), dbt esegue le trasformazioni SQL dentro il warehouse. Spesso Airflow schedula ed esegue i job dbt: lavorano insieme."
  },
  {
    id: "u12093", topic: "Dati di test",
    q: "Usare un piccolo campione di dati in sviluppo serve a:",
    opts: [
      "Iterare velocemente senza processare l'intero volume di produzione",
      "Rallentare lo sviluppo aumentando i dati di test",
      "Aumentare il rischio di errori in produzione"
    ],
    correct: [0],
    exp: "Sviluppare e testare su un campione riduce tempi e costi; solo dopo la validazione si esegue sull'intero dataset di produzione. Accelera il ciclo di sviluppo delle pipeline."
  },
  {
    id: "u12094", topic: "Auditing",
    q: "Registrare metriche di audit (righe lette/scritte, scarti) per ogni run serve a:",
    opts: [
      "Sostituire i log dettagliati dei task",
      "Verificare che i dati siano stati processati correttamente e riconciliarli",
      "Ridurre il numero di utenti che accedono ai dati"
    ],
    correct: [1],
    exp: "Le metriche di audit permettono di riconciliare i conteggi (input vs output), individuare perdite o duplicazioni di dati e dimostrare la correttezza dell'elaborazione."
  },
  {
    id: "u12095", topic: "Dipendenze inter-DAG",
    q: "Un ExternalTaskSensor in Airflow serve a:",
    opts: [
      "Cancellare i DAG che non vengono più utilizzati",
      "Eseguire in parallelo tutti i task dello stesso DAG",
      "Attendere il completamento di un task in un altro DAG"
    ],
    correct: [2],
    exp: "L'ExternalTaskSensor mette in pausa un DAG finché un task di un altro DAG non è completato: gestisce dipendenze tra pipeline diverse mantenendo l'ordine corretto."
  },
  {
    id: "u12096", topic: "Gestione segreti",
    q: "Le credenziali per le connessioni alle sorgenti dovrebbero essere:",
    opts: [
      "Gestite in modo sicuro, non scritte nel codice",
      "Scritte in chiaro direttamente nel codice del DAG",
      "Condivise pubblicamente per facilitare la collaborazione"
    ],
    correct: [0],
    exp: "Le credenziali vanno conservate in modo sicuro (variabili/connessioni cifrate, secret manager) e mai nel codice versionato, per evitare fughe di dati sensibili."
  },
  {
    id: "u12097", topic: "Riconciliazione",
    q: "La riconciliazione dei dati nella pipeline verifica che:",
    opts: [
      "I dati vengano cifrati durante il trasferimento tra le fasi",
      "I conteggi/totali a valle corrispondano a quelli attesi dalla sorgente",
      "Le trasformazioni vengano eseguite nell'ordine corretto"
    ],
    correct: [1],
    exp: "La riconciliazione confronta i totali tra sorgente e destinazione (righe, somme) per assicurarsi che nessun dato sia andato perso o duplicato durante l'elaborazione."
  },
  {
    id: "u12098", topic: "Ripetibilità",
    q: "Una pipeline 'deterministica' produce, a parità di input:",
    opts: [
      "Output casuali",
      "Output diversi ogni volta",
      "Sempre lo stesso output"
    ],
    correct: [2],
    exp: "Il determinismo garantisce risultati riproducibili: stesso input → stesso output. È alla base della testabilità, del debugging e della fiducia nei dati prodotti."
  },
  {
    id: "u12099", topic: "Scalare l'orchestrazione",
    q: "Per gestire molti DAG e task, l'orchestratore può:",
    opts: [
      "Distribuire l'esecuzione su più worker in parallelo",
      "Eseguire tutto su un solo processo",
      "Cancellare i DAG"
    ],
    correct: [0],
    exp: "Architetture distribuite (più worker, executor come Celery/Kubernetes) permettono all'orchestratore di eseguire molti task in parallelo, scalando con il numero di pipeline."
  },
  {
    id: "u12100", topic: "Flusso pipeline",
    q: "Un flusso tipico di data pipeline orchestrata è:",
    opts: [
      "Staging → ingestione → caricamento nel DW → trasformazione → verifica qualità",
      "Ingestione → staging → trasformazione → caricamento nel DW → verifica qualità",
      "Verifica qualità → ingestione → staging → trasformazione → caricamento nel DW"
    ],
    correct: [1],
    exp: "Il flusso: acquisire i dati (ingestion), depositarli in staging, trasformarli (pulizia, modellazione), caricarli nel data warehouse e verificarne la qualità, il tutto orchestrato e monitorato."
  },
  // === AGGIUNGI NUOVE DOMANDE DATA PIPELINES QUI ===
]);
