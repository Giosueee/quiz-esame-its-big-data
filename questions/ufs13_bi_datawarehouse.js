/* ============================================================
   MATERIA: BI e Data Warehouse  (UFS13 - Power BI, dbt, Fivetran, DW)
   100 domande. (Camuffatura lunghezze: pass finale.)
   ============================================================ */
registerSubject("BI e Data Warehouse", [
  {
    id: "u13001", topic: "Business Intelligence",
    q: "Cos'è la Business Intelligence (BI)?",
    opts: [
      "L'insieme di strumenti e processi per trasformare i dati in informazioni per le decisioni",
      "L'insieme delle tecniche per registrare le transazioni operative quotidiane",
      "La progettazione dell'infrastruttura hardware e di rete dei sistemi aziendali",
      "La branca dell'informatica che studia le reti neurali artificiali"
    ],
    correct: [0],
    exp: "La BI raccoglie, integra, analizza e presenta i dati aziendali (dashboard, report) per supportare le decisioni. Trasforma dati grezzi in informazioni utili al business."
  },
  {
    id: "u13002", topic: "Data Warehouse",
    q: "Cos'è un data warehouse?",
    opts: [
      "Un archivio centralizzato di dati integrati e storicizzati per l'analisi",
      "Un database operativo che gestisce le transazioni in tempo reale",
      "Un foglio di calcolo condiviso in cui si inseriscono i dati a mano",
      "Un server web che ospita le pagine e le applicazioni aziendali"
    ],
    correct: [0],
    exp: "Il data warehouse consolida dati da più fonti in una struttura ottimizzata per l'analisi e il reporting, con dati storici. È il cuore dei sistemi di BI."
  },
  {
    id: "u13003", topic: "OLTP vs OLAP",
    q: "Qual è la differenza tra OLTP e OLAP?",
    opts: [
      "OLTP gestisce transazioni operative; OLAP serve all'analisi di grandi volumi",
      "OLAP gestisce le transazioni operative; OLTP serve all'analisi storica",
      "Sono la stessa tecnologia indicata con due nomi commerciali diversi",
      "OLTP funziona solo in cloud, mentre OLAP solo su server locali"
    ],
    correct: [0],
    exp: "OLTP (Online Transaction Processing) gestisce operazioni quotidiane (inserimenti, aggiornamenti) su database normalizzati; OLAP (Online Analytical Processing) analizza grandi aggregazioni di dati storici."
  },
  {
    id: "u13004", topic: "Schema a stella",
    q: "Nello schema a stella (star schema):",
    opts: [
      "Una tabella dei fatti centrale è collegata a più tabelle dimensione",
      "Tutte le tabelle sono normalizzate al massimo grado per evitare ridondanze",
      "Non esistono tabelle dimensione: i dati stanno in un'unica tabella",
      "Le tabelle non hanno relazioni tra loro e vanno unite manualmente"
    ],
    correct: [0],
    exp: "Lo star schema ha al centro la fact table (metriche) circondata dalle dimension table (contesto: tempo, prodotto, cliente). Denormalizzato per query analitiche veloci."
  },
  {
    id: "u13005", topic: "Fact table",
    q: "Una tabella dei fatti (fact table) contiene tipicamente:",
    opts: [
      "Misure numeriche (es. vendite, quantità) e chiavi verso le dimensioni",
      "Solo attributi descrittivi testuali come nome, categoria e indirizzo",
      "Esclusivamente le date degli eventi, senza alcuna misura numerica",
      "Nessun dato: serve solo a collegare fisicamente le altre tabelle"
    ],
    correct: [0],
    exp: "La fact table registra gli eventi misurabili del business (vendite, transazioni) con metriche numeriche e foreign key verso le dimensioni. È di solito la tabella più grande."
  },
  {
    id: "u13006", topic: "Dimension table",
    q: "Una tabella dimensione (dimension) contiene:",
    opts: [
      "Attributi descrittivi che danno contesto ai fatti (chi, cosa, quando, dove)",
      "Soltanto valori numerici già aggregati come somme e medie",
      "Le transazioni operative registrate in tempo reale dai sistemi",
      "Nessuna chiave: è collegata ai fatti solo in base alla posizione"
    ],
    correct: [0],
    exp: "Le dimensioni descrivono il contesto: cliente (nome, città), prodotto (categoria, marca), tempo (giorno, mese, anno). Permettono di 'affettare' i fatti per diverse prospettive."
  },
  {
    id: "u13007", topic: "Schema a fiocco",
    q: "Lo schema a fiocco di neve (snowflake) differisce dallo star perché:",
    opts: [
      "Le dimensioni sono normalizzate in più tabelle collegate",
      "Non esiste una tabella dei fatti al centro dello schema",
      "È sempre più veloce dello star grazie a un numero minore di join",
      "Le tabelle non usano chiavi per collegarsi tra di loro"
    ],
    correct: [0],
    exp: "Nello snowflake le dimensioni sono suddivise in sotto-tabelle normalizzate (es. prodotto→categoria→reparto): risparmia spazio ma richiede più join, spesso più lente dello star."
  },
  {
    id: "u13008", topic: "ETL",
    q: "Cosa significa ETL?",
    opts: [
      "Extract, Transform, Load",
      "Export, Test, Link",
      "Enter, Type, Log",
      "Edit, Transfer, List"
    ],
    correct: [0],
    exp: "ETL: Extract (estrai dai sistemi sorgente), Transform (pulisci e trasforma), Load (carica nel data warehouse). È il processo classico di integrazione dati."
  },
  {
    id: "u13009", topic: "ELT",
    q: "Qual è la differenza tra ETL ed ELT?",
    opts: [
      "Nell'ELT si caricano prima i dati grezzi e si trasformano dopo, dentro il warehouse",
      "Sono lo stesso processo indicato con due sigle intercambiabili",
      "Nell'ELT i dati non vengono mai trasformati, ma solo copiati",
      "Nell'ETL i dati non vengono mai estratti dalle sorgenti originali"
    ],
    correct: [0],
    exp: "Nell'ELT si estrae e si carica (Load) prima nel data warehouse, sfruttandone la potenza per trasformare (Transform) dopo. Comune nei data warehouse cloud moderni con dbt."
  },
  {
    id: "u13010", topic: "Power BI",
    q: "Cos'è Power BI?",
    opts: [
      "Uno strumento di visualizzazione e reportistica dati di Microsoft",
      "Un database relazionale usato per archiviare grandi volumi di dati",
      "Un linguaggio di programmazione per sviluppare applicazioni web",
      "Un sistema operativo ottimizzato per l'analisi dei big data"
    ],
    correct: [0],
    exp: "Power BI è una piattaforma di BI: importa dati da varie fonti, li modella e crea dashboard e report interattivi. Include Power Query (ETL) e il linguaggio DAX."
  },
  {
    id: "u13011", topic: "DAX",
    q: "DAX in Power BI è:",
    opts: [
      "Il linguaggio per creare misure e colonne calcolate",
      "Un tipo di grafico interattivo per le dashboard",
      "Il connettore che importa i dati dalle sorgenti",
      "Il formato di file in cui si salvano i report"
    ],
    correct: [0],
    exp: "DAX (Data Analysis Expressions) è il linguaggio di formule di Power BI per definire misure (calcoli aggregati) e colonne calcolate, con funzioni come SUM, CALCULATE, FILTER."
  },
  {
    id: "u13012", topic: "Misure",
    q: "Una 'misura' (measure) in Power BI:",
    opts: [
      "È un calcolo aggregato che si adatta al contesto del report",
      "È una colonna con valori fissi calcolati una volta al caricamento",
      "È un tipo di grafico predefinito disponibile nelle dashboard",
      "È una tabella di supporto usata per collegare le dimensioni"
    ],
    correct: [0],
    exp: "Le misure calcolano valori aggregati (somme, medie) che reagiscono ai filtri e al contesto del visual (es. totale vendite per la selezione corrente). Sono calcolate 'al volo'."
  },
  {
    id: "u13013", topic: "Power Query",
    q: "Power Query in Power BI serve a:",
    opts: [
      "Estrarre, pulire e trasformare i dati prima del caricamento",
      "Creare i grafici e i visual interattivi della dashboard finale",
      "Scrivere le misure DAX che calcolano i valori aggregati",
      "Pubblicare e condividere il report con gli altri utenti"
    ],
    correct: [0],
    exp: "Power Query è lo strumento ETL di Power BI: connette le fonti, applica trasformazioni (filtri, join, pulizia) registrandole come passi ripetibili, e carica i dati nel modello."
  },
  {
    id: "u13014", topic: "dbt",
    q: "A cosa serve dbt (data build tool)?",
    opts: [
      "A trasformare i dati nel warehouse scrivendo trasformazioni in SQL versionate",
      "A estrarre i dati dalle API delle sorgenti esterne e caricarli",
      "A creare dashboard e report interattivi per gli utenti finali",
      "A gestire e configurare i server su cui gira il warehouse"
    ],
    correct: [0],
    exp: "dbt gestisce la 'T' dell'ELT: trasforma i dati già nel warehouse tramite modelli SQL modulari, con versionamento, test e documentazione. Porta pratiche software all'analytics."
  },
  {
    id: "u13015", topic: "Fivetran",
    q: "Strumenti come Fivetran servono a:",
    opts: [
      "Estrarre e caricare (EL) dati da varie fonti nel warehouse in modo automatico",
      "Trasformare i dati grezzi già caricati in modelli dimensionali",
      "Creare i grafici e le dashboard finali per gli utenti di business",
      "Addestrare modelli di machine learning a partire dai dati raccolti"
    ],
    correct: [0],
    exp: "Fivetran è un tool di data integration che automatizza l'estrazione e il caricamento (Extract-Load) da centinaia di sorgenti verso il data warehouse, gestendo connettori e schema."
  },
  {
    id: "u13016", topic: "Slowly Changing Dimensions",
    q: "Le Slowly Changing Dimensions (SCD) gestiscono:",
    opts: [
      "Come registrare i cambiamenti degli attributi di una dimensione nel tempo",
      "Come gestire le transazioni operative in tempo reale sul database",
      "Come cifrare gli attributi sensibili contenuti in una dimensione",
      "Come configurare la rete tra il warehouse e i sistemi sorgente"
    ],
    correct: [0],
    exp: "Le SCD trattano l'evoluzione dei dati dimensionali (es. un cliente cambia città): il tipo 1 sovrascrive, il tipo 2 conserva lo storico creando nuove righe con validità temporale."
  },
  {
    id: "u13017", topic: "Kimball vs Inmon",
    q: "L'approccio Kimball al data warehouse è caratterizzato da:",
    opts: [
      "Modellazione dimensionale bottom-up (data mart con schemi a stella)",
      "Un unico grande modello normalizzato costruito con approccio top-down",
      "Un'architettura priva di tabelle dei fatti, basata solo su dimensioni",
      "Un modello pensato esclusivamente per i dati non strutturati"
    ],
    correct: [0],
    exp: "Kimball propone un approccio dimensionale bottom-up (data mart integrati con star schema). Inmon propone un DW centrale normalizzato (top-down) da cui derivare i data mart."
  },
  {
    id: "u13018", topic: "Data mart",
    q: "Un data mart è:",
    opts: [
      "Un sottoinsieme del data warehouse focalizzato su un'area/reparto",
      "L'intero data warehouse aziendale con tutti i dati integrati",
      "Un database operativo che gestisce le transazioni quotidiane",
      "Un semplice file CSV esportato dal data warehouse"
    ],
    correct: [0],
    exp: "Il data mart è una porzione tematica del DW dedicata a un dominio (vendite, marketing): più piccolo e specifico, facilita l'accesso ai dati per quel reparto."
  },
  {
    id: "u13019", topic: "Grain",
    q: "Il 'grain' (grana) di una fact table indica:",
    opts: [
      "Il livello di dettaglio di ogni riga (cosa rappresenta una riga)",
      "Il numero complessivo di colonne presenti nella tabella dei fatti",
      "La quantità di memoria che la tabella occupa nella cache",
      "L'ordine con cui le righe vengono restituite dalle query"
    ],
    correct: [0],
    exp: "La grana definisce cosa rappresenta una singola riga dei fatti (es. una riga = una vendita di un prodotto in un giorno). Definire la grana è il primo passo della modellazione dimensionale."
  },
  {
    id: "u13020", topic: "KPI",
    q: "Un KPI (Key Performance Indicator) è:",
    opts: [
      "Una metrica chiave per misurare le prestazioni verso un obiettivo",
      "Un tipo di grafico usato per rappresentare i dati di vendita",
      "Una tabella di supporto che collega i fatti alle dimensioni",
      "Un connettore che importa i dati dalle sorgenti esterne"
    ],
    correct: [0],
    exp: "I KPI sono indicatori sintetici che misurano il progresso verso obiettivi di business (es. tasso di conversione, fatturato mensile). Sono spesso al centro delle dashboard."
  },
  {
    id: "u13021", topic: "Dashboard",
    q: "Una dashboard di BI serve a:",
    opts: [
      "Mostrare a colpo d'occhio metriche e KPI con visualizzazioni interattive",
      "Archiviare i dati grezzi provenienti dai sistemi sorgente",
      "Estrarre e trasformare i dati prima di caricarli nel warehouse",
      "Definire i permessi di accesso degli utenti ai vari report"
    ],
    correct: [0],
    exp: "La dashboard riassume visivamente le informazioni chiave (grafici, KPI, tabelle) in modo interattivo, permettendo di monitorare l'andamento e approfondire (drill-down)."
  },
  {
    id: "u13022", topic: "Denormalizzazione",
    q: "Perché i data warehouse sono spesso denormalizzati?",
    opts: [
      "Per velocizzare le query analitiche riducendo il numero di join",
      "Per garantire la massima integrità dei dati durante la scrittura",
      "Per ridurre al minimo lo spazio occupato dai dati su disco",
      "Per gestire meglio le transazioni concorrenti di molti utenti"
    ],
    correct: [0],
    exp: "A differenza degli OLTP normalizzati (per l'integrità in scrittura), i DW privilegiano la lettura veloce di grandi aggregazioni: la denormalizzazione (star schema) riduce i join costosi."
  },
  {
    id: "u13023", topic: "Drill-down",
    q: "Il 'drill-down' in un report BI consiste nel:",
    opts: [
      "Passare da un livello aggregato a uno più dettagliato",
      "Aggregare i dati a un livello di dettaglio superiore",
      "Esportare il report in un file PDF stampabile",
      "Cambiare il tema di colori della dashboard"
    ],
    correct: [0],
    exp: "Il drill-down approfondisce: es. da vendite annuali → mensili → giornaliere. Il roll-up è l'operazione inversa (aggregare). Sono tipici dell'analisi OLAP."
  },
  {
    id: "u13024", topic: "Cubo OLAP",
    q: "Un cubo OLAP permette di:",
    opts: [
      "Analizzare i dati secondo più dimensioni con aggregazioni rapide",
      "Memorizzare i file binari e i documenti allegati dell'azienda",
      "Gestire le transazioni operative in tempo reale sul database",
      "Definire i permessi di accesso ai dati per ciascun utente"
    ],
    correct: [0],
    exp: "Il cubo OLAP pre-aggrega i dati lungo più dimensioni (tempo, geografia, prodotto), consentendo analisi multidimensionali rapide con slice, dice, drill-down e roll-up."
  },
  {
    id: "u13025", topic: "Staging area",
    q: "L'area di staging in un processo ETL serve a:",
    opts: [
      "Ospitare temporaneamente i dati grezzi prima della trasformazione",
      "Mostrare le dashboard finali agli utenti di business",
      "Archiviare in modo permanente i report già generati",
      "Gestire gli account e i permessi degli utenti del warehouse"
    ],
    correct: [0],
    exp: "Lo staging è un'area di transito dove i dati estratti vengono depositati grezzi prima di pulizia e trasformazione, isolando i sistemi sorgente dal warehouse finale."
  },
  {
    id: "u13026", topic: "Chiave surrogata",
    q: "Una chiave surrogata in una dimensione è:",
    opts: [
      "Un identificatore artificiale (es. progressivo) indipendente dai dati di business",
      "La chiave naturale proveniente direttamente dal sistema sorgente",
      "Un valore descrittivo che riassume il contenuto della riga",
      "Una misura numerica calcolata a partire dai fatti collegati"
    ],
    correct: [0],
    exp: "La chiave surrogata (un intero generato) identifica le righe della dimensione a prescindere dalle chiavi naturali, che possono cambiare o duplicarsi. Essenziale per le SCD di tipo 2."
  },
  {
    id: "u13027", topic: "Relazioni Power BI",
    q: "In Power BI, il modello dati collega le tabelle tramite:",
    opts: [
      "Relazioni tra colonne chiave (uno-a-molti tipicamente)",
      "Un unico file di testo che contiene tutte le tabelle",
      "Copie manuali dei dati incollate tra una tabella e l'altra",
      "Nessun collegamento: ogni tabella resta del tutto isolata"
    ],
    correct: [0],
    exp: "Nel modello di Power BI si definiscono relazioni tra dimensioni e fatti (di solito uno-a-molti): permettono ai visual di filtrare e aggregare correttamente tra le tabelle."
  },
  {
    id: "u13028", topic: "CALCULATE",
    q: "La funzione DAX CALCULATE serve a:",
    opts: [
      "Valutare un'espressione modificando il contesto dei filtri",
      "Creare un nuovo grafico all'interno della pagina del report",
      "Importare i dati dalle sorgenti esterne dentro il modello",
      "Ordinare le righe di una tabella secondo una colonna"
    ],
    correct: [0],
    exp: "CALCULATE è la funzione DAX più potente: calcola una misura applicando o modificando i filtri (es. vendite solo per una regione), controllando il contesto di calcolo."
  },
  {
    id: "u13029", topic: "Single source of truth",
    q: "Un data warehouse fornisce una 'single source of truth' perché:",
    opts: [
      "Integra i dati in un'unica versione coerente e condivisa",
      "Duplica i dati in più copie gestite da reparti diversi",
      "Elimina i dati storici mantenendo solo lo stato attuale",
      "È semplicemente una copia di backup dei database operativi"
    ],
    correct: [0],
    exp: "Consolidando le fonti in un modello unico e coerente, il DW evita che reparti diversi abbiano numeri contrastanti: tutti fanno riferimento agli stessi dati certificati."
  },
  {
    id: "u13030", topic: "Data pipeline",
    q: "Una data pipeline è:",
    opts: [
      "Un flusso automatizzato che sposta e trasforma i dati tra sistemi",
      "Un singolo file statico in cui sono salvati tutti i dati",
      "Un grafico che mostra l'andamento dei dati nel tempo",
      "Un database operativo che gestisce le transazioni quotidiane"
    ],
    correct: [0],
    exp: "La data pipeline orchestra i passi (estrazione, trasformazione, caricamento) per portare i dati dalle sorgenti alla destinazione (DW), in modo ripetibile e automatizzato."
  },
  {
    id: "u13031", topic: "OLAP operazioni",
    q: "L'operazione OLAP di 'slice' consiste nel:",
    opts: [
      "Fissare il valore di una dimensione per estrarne una fetta",
      "Aggregare i dati salendo a un livello di dettaglio superiore",
      "Cambiare del tutto la combinazione di colori del report",
      "Eliminare completamente una dimensione dall'analisi del cubo"
    ],
    correct: [0],
    exp: "Lo slice fissa una dimensione (es. anno=2023) per analizzare una 'fetta' del cubo. Il dice seleziona un sotto-cubo su più dimensioni; drill-down/roll-up cambiano il dettaglio."
  },
  {
    id: "u13032", topic: "Reportistica",
    q: "Un report operativo differisce da uno analitico perché:",
    opts: [
      "Serve al monitoraggio quotidiano; l'analitico esplora trend e cause",
      "Serve a esplorare trend e cause; l'analitico al monitoraggio quotidiano",
      "Sono la stessa cosa: cambia soltanto il nome che si utilizza",
      "Il report operativo gestisce le transazioni, l'analitico i backup"
    ],
    correct: [0],
    exp: "Il reporting operativo dà una fotografia corrente per l'operatività; quello analitico supporta decisioni approfondendo trend, confronti e relazioni sui dati storici."
  },
  {
    id: "u13033", topic: "Data lineage",
    q: "Il 'data lineage' descrive:",
    opts: [
      "Il percorso e le trasformazioni dei dati dalla sorgente alla destinazione",
      "Il numero di utenti che accedono ai dati in un dato periodo",
      "La combinazione di colori usata nei grafici della dashboard",
      "La velocità della rete che collega le sorgenti al warehouse"
    ],
    correct: [0],
    exp: "Il data lineage traccia da dove vengono i dati e come sono stati trasformati lungo la pipeline: fondamentale per fiducia, debugging e conformità normativa."
  },
  {
    id: "u13034", topic: "Aggregazioni pre-calcolate",
    q: "Pre-calcolare le aggregazioni in un DW serve a:",
    opts: [
      "Velocizzare le query analitiche frequenti",
      "Rallentare volutamente le query poco usate",
      "Ridurre lo spazio eliminando i dati storici",
      "Impedire l'accesso concorrente alle tabelle"
    ],
    correct: [0],
    exp: "Materializzare aggregati (tabelle di riepilogo, cubi) evita di ricalcolare ogni volta grandi somme, accelerando i report a scapito di più spazio e aggiornamenti."
  },
  {
    id: "u13035", topic: "Star schema vantaggi",
    q: "Un vantaggio dello star schema è:",
    opts: [
      "Query semplici e veloci grazie a pochi join intuitivi",
      "La massima normalizzazione dei dati per evitare ogni ridondanza",
      "L'assenza totale di ridondanza in tutte le tabelle",
      "L'impossibilità di aggregare i dati per più dimensioni"
    ],
    correct: [0],
    exp: "Lo star schema è facile da capire e interrogare (i fatti al centro, poche join verso le dimensioni): ottimizzato per performance analitiche e strumenti di BI."
  },
  {
    id: "u13036", topic: "Contesto di filtro DAX",
    q: "In DAX, il 'contesto di filtro' determina:",
    opts: [
      "Quali righe sono considerate nel calcolo di una misura",
      "La combinazione di colori applicata ai visual del report",
      "Il nome della tabella da cui provengono i dati mostrati",
      "La connessione di rete usata per accedere al database"
    ],
    correct: [0],
    exp: "Il contesto di filtro (dato da slicer, righe/colonne del visual, CALCULATE) definisce il sottoinsieme di dati su cui la misura viene calcolata. È centrale in DAX."
  },
  {
    id: "u13037", topic: "Incrementale",
    q: "Un caricamento incrementale nel DW:",
    opts: [
      "Aggiorna solo i dati nuovi o modificati, non tutto da capo",
      "Ricarica ogni volta l'intero dataset dalla sorgente originale",
      "Non aggiorna mai i dati una volta caricati la prima volta",
      "Cancella i dati esistenti prima di ogni nuovo caricamento"
    ],
    correct: [0],
    exp: "Il refresh incrementale carica solo le variazioni (nuove righe, modifiche) invece dell'intero dataset: più rapido ed efficiente su grandi volumi rispetto al full load."
  },
  {
    id: "u13038", topic: "Governance",
    q: "La data governance riguarda:",
    opts: [
      "Politiche, qualità, sicurezza e responsabilità sui dati",
      "La combinazione di colori e lo stile grafico delle dashboard",
      "La velocità di elaborazione della CPU dei server del warehouse",
      "La sola procedura di backup periodico dei dati aziendali"
    ],
    correct: [0],
    exp: "La governance definisce ruoli, standard di qualità, sicurezza, accesso e definizioni condivise (glossario) per gestire i dati come un asset affidabile e conforme."
  },
  {
    id: "u13039", topic: "Self-service BI",
    q: "La 'self-service BI' permette agli utenti di business di:",
    opts: [
      "Creare report e analisi autonomamente, senza dipendere dall'IT",
      "Programmare direttamente il database sottostante con codice SQL",
      "Gestire e configurare i server su cui gira la piattaforma",
      "Scrivere i driver di connessione verso le sorgenti dati"
    ],
    correct: [0],
    exp: "Strumenti come Power BI abilitano gli utenti a esplorare i dati e costruire report da soli, riducendo il collo di bottiglia dell'IT, purché su dati governati e affidabili."
  },
  {
    id: "u13040", topic: "Trasformazioni dbt",
    q: "In dbt, un 'model' è:",
    opts: [
      "Un file SQL che definisce una trasformazione (una SELECT) materializzata come tabella/vista",
      "Un modello di machine learning addestrato sui dati del warehouse",
      "Un grafico predefinito incluso nelle dashboard interattive",
      "Un connettore che importa i dati da una sorgente esterna"
    ],
    correct: [0],
    exp: "Un model dbt è una SELECT SQL che dbt esegue e materializza (come tabella o vista) nel warehouse. I model si compongono referenziandosi tra loro con ref()."
  },
  {
    id: "u13041", topic: "Test dbt",
    q: "I test in dbt servono a:",
    opts: [
      "Verificare la qualità dei dati (unicità, non nulli, valori attesi)",
      "Generare automaticamente i grafici dei risultati delle query",
      "Estrarre i dati grezzi dalle sorgenti operative dell'azienda",
      "Gestire gli account e i permessi degli utenti del warehouse"
    ],
    correct: [0],
    exp: "dbt permette test sui dati (es. una chiave deve essere unica e non nulla, un valore deve stare in un elenco): individua problemi di qualità nelle trasformazioni prima che arrivino ai report."
  },
  {
    id: "u13042", topic: "Modellazione dimensionale",
    q: "Il primo passo della modellazione dimensionale (Kimball) è:",
    opts: [
      "Scegliere il processo di business e definire la grana dei fatti",
      "Disegnare subito le dashboard e i grafici finali del progetto",
      "Applicare la cifratura a tutte le tabelle del data warehouse",
      "Acquistare l'hardware e i server su cui girerà il sistema"
    ],
    correct: [0],
    exp: "Kimball: 1) scegliere il processo di business, 2) dichiarare la grana, 3) identificare le dimensioni, 4) identificare i fatti. Definire la grana è cruciale e precede le dimensioni."
  },
  {
    id: "u13043", topic: "Visualizzazione appropriata",
    q: "Per mostrare l'andamento delle vendite nel tempo, il grafico più adatto è:",
    opts: [
      "Un grafico a linee",
      "Un grafico a torta",
      "Una tabella di correlazione",
      "Un istogramma di una variabile"
    ],
    correct: [0],
    exp: "Il grafico a linee mostra bene l'evoluzione temporale. La torta è per composizioni (parti di un totale), non per trend. Scegliere il visual giusto è chiave in BI."
  },
  {
    id: "u13044", topic: "Cardinalità relazione",
    q: "Una relazione uno-a-molti tra dimensione e fatti significa:",
    opts: [
      "Una riga della dimensione è collegata a molte righe dei fatti",
      "Una riga dei fatti è collegata a molte righe della dimensione",
      "Ogni riga della dimensione corrisponde a una sola riga dei fatti",
      "Le due tabelle non hanno alcun collegamento diretto tra loro"
    ],
    correct: [0],
    exp: "Es: un cliente (una riga in dimensione) compare in molte vendite (molte righe nei fatti). È la cardinalità tipica dello star schema: dimensione (uno) → fatti (molti)."
  },
  {
    id: "u13045", topic: "Refresh",
    q: "La pianificazione dell'aggiornamento (refresh) di un report serve a:",
    opts: [
      "Mantenere i dati del report allineati alle sorgenti a intervalli regolari",
      "Aggiornare la combinazione di colori e il layout del report",
      "Eliminare periodicamente i dati storici per liberare spazio",
      "Creare nuovi account per gli utenti che consultano il report"
    ],
    correct: [0],
    exp: "I dati importati vanno aggiornati periodicamente (schedulato) affinché dashboard e report riflettano i valori più recenti delle sorgenti."
  },
  {
    id: "u13046", topic: "Dati storici",
    q: "Perché un data warehouse conserva i dati storici mentre un OLTP spesso no?",
    opts: [
      "Perché l'analisi richiede confronti nel tempo e trend, non solo lo stato attuale",
      "Perché conservare i dati storici occupa molto meno spazio su disco",
      "Perché è più veloce cancellare i dati vecchi a ogni caricamento",
      "Perché i dati storici non servono mai alle decisioni aziendali"
    ],
    correct: [0],
    exp: "L'OLTP tiene lo stato corrente per l'operatività; il DW conserva la storia per analizzare trend, stagionalità e confronti tra periodi, essenziali per le decisioni."
  },
  {
    id: "u13047", topic: "Colonna vs misura",
    q: "In Power BI, una colonna calcolata rispetto a una misura:",
    opts: [
      "È calcolata riga per riga e memorizzata; la misura si calcola al volo nel contesto",
      "Si calcola al volo nel contesto; la misura è memorizzata riga per riga",
      "Sono esattamente la stessa cosa indicata con due nomi diversi",
      "Reagisce ai filtri del report esattamente come fa una misura"
    ],
    correct: [0],
    exp: "La colonna calcolata è valutata per ogni riga durante il refresh e occupa spazio; la misura è calcolata dinamicamente in base al contesto del visual. Scegliere quale usare è importante per performance."
  },
  {
    id: "u13048", topic: "Sorgenti eterogenee",
    q: "Il data warehouse integra dati da sorgenti eterogenee, quindi deve:",
    opts: [
      "Uniformare formati, unità e definizioni durante la trasformazione",
      "Lasciare i dati esattamente come sono nelle sorgenti originali",
      "Usare una sola sorgente dati ignorando tutte le altre",
      "Evitare qualsiasi trasformazione per non alterare i dati"
    ],
    correct: [0],
    exp: "Dati da CRM, ERP, file, API hanno formati e definizioni diverse: l'ETL/ELT li standardizza (date, valute, chiavi, categorie) per renderli confrontabili e coerenti."
  },
  {
    id: "u13049", topic: "Semantica condivisa",
    q: "Un 'semantic layer' (o modello semantico) serve a:",
    opts: [
      "Definire metriche e relazioni in modo coerente per tutti gli utenti",
      "Cifrare i dati prima di mostrarli nelle dashboard agli utenti",
      "Gestire la rete che collega il warehouse ai client di analisi",
      "Sostituire completamente il database relazionale sottostante"
    ],
    correct: [0],
    exp: "Il layer semantico traduce le tabelle tecniche in concetti di business (metriche, dimensioni) con definizioni condivise, così tutti calcolano gli stessi KPI allo stesso modo."
  },
  {
    id: "u13050", topic: "Data lake vs warehouse",
    q: "Qual è la differenza tra data lake e data warehouse?",
    opts: [
      "Il data lake conserva dati grezzi di ogni tipo; il DW dati strutturati e modellati",
      "Il data warehouse conserva dati grezzi; il data lake dati già modellati",
      "Sono identici: cambia soltanto il fornitore che li commercializza",
      "Il data lake gestisce solo dati relazionali già strutturati"
    ],
    correct: [0],
    exp: "Il data lake archivia grandi volumi di dati grezzi (strutturati e non, schema-on-read); il data warehouse contiene dati puliti e modellati per l'analisi (schema-on-write). Il lakehouse unisce i due."
  },
  {
    id: "u13051", topic: "Aggregazione temporale",
    q: "Una tabella 'dimensione tempo' (date dimension) serve a:",
    opts: [
      "Fornire attributi di calendario (giorno, mese, trimestre, festività) per le analisi temporali",
      "Memorizzare le transazioni operative con il relativo orario esatto",
      "Cifrare le date per proteggere le informazioni sensibili dei clienti",
      "Sostituire la tabella dei fatti nelle analisi che coinvolgono il tempo"
    ],
    correct: [0],
    exp: "La dimensione tempo pre-costruita permette di aggregare e filtrare i fatti per periodo (mese, trimestre, anno, festività) senza calcolare ogni volta le componenti dalle date."
  },
  {
    id: "u13052", topic: "Formato colonnare",
    q: "I data warehouse analitici usano spesso storage colonnare perché:",
    opts: [
      "Legge solo le colonne necessarie, velocizzando le aggregazioni",
      "Registra i dati riga per riga, ideale per le transazioni operative",
      "Occupa sempre più spazio ma garantisce una scrittura più rapida",
      "Serve esclusivamente a cifrare le colonne con dati sensibili"
    ],
    correct: [0],
    exp: "Lo storage colonnare memorizza i dati per colonna: le query analitiche che aggregano poche colonne su molte righe leggono solo ciò che serve e comprimono meglio, risultando molto più veloci."
  },
  {
    id: "u13053", topic: "Qualità dei dati",
    q: "La qualità dei dati in un DW riguarda dimensioni come:",
    opts: [
      "Accuratezza, completezza, coerenza e tempestività dei dati",
      "La combinazione di colori usata per rappresentare i dati",
      "La velocità della CPU dei server che ospitano i dati",
      "Il numero di dashboard costruite a partire dai dati"
    ],
    correct: [0],
    exp: "Dati di qualità sono accurati, completi, coerenti, aggiornati e univoci. Report costruiti su dati scadenti portano a decisioni sbagliate ('garbage in, garbage out')."
  },
  {
    id: "u13054", topic: "Ruoli e sicurezza",
    q: "La row-level security (RLS) in Power BI serve a:",
    opts: [
      "Mostrare a ciascun utente solo le righe di dati che gli competono",
      "Cambiare la combinazione di colori del report per ogni utente",
      "Velocizzare l'aggiornamento dei dati per gli utenti connessi",
      "Creare automaticamente nuove misure DAX per ciascun utente"
    ],
    correct: [0],
    exp: "La RLS filtra i dati in base al ruolo/utente (es. un responsabile vede solo la sua regione): stessa dashboard, dati diversi secondo i permessi."
  },
  {
    id: "u13055", topic: "Metriche vs dimensioni",
    q: "'fatturato' e 'regione' sono rispettivamente:",
    opts: [
      "Una misura (numerica) e una dimensione (categorica)",
      "Due misure numeriche che si possono sommare tra loro",
      "Due dimensioni categoriche usate per filtrare i dati",
      "Due tabelle dei fatti collegate alla stessa dimensione"
    ],
    correct: [0],
    exp: "Il fatturato è una misura (si somma, si media); la regione è una dimensione (contesto per cui si analizza). Distinguere misure e dimensioni è alla base della modellazione BI."
  },
  {
    id: "u13056", topic: "Orchestrazione",
    q: "L'aggiornamento dei dati del DW è tipicamente orchestrato:",
    opts: [
      "Da pipeline schedulate (es. notturne) che eseguono l'ETL/ELT",
      "Manualmente ogni ora da parte degli utenti di business",
      "Non viene mai aggiornato dopo il primo caricamento iniziale",
      "Esclusivamente in tempo reale a ogni singola transazione"
    ],
    correct: [0],
    exp: "Le pipeline vengono schedulate (spesso di notte, in batch) per aggiornare il DW quando il carico è basso. Strumenti di orchestrazione (es. Airflow) ne gestiscono l'ordine e le dipendenze."
  },
  {
    id: "u13057", topic: "SCD tipo 2",
    q: "Una SCD di tipo 2 conserva lo storico:",
    opts: [
      "Creando una nuova riga a ogni cambiamento, con date di validità",
      "Sovrascrivendo il vecchio valore con quello nuovo, senza storico",
      "Cancellando l'intera dimensione a ogni cambiamento rilevato",
      "Ignorando i cambiamenti e mantenendo sempre il primo valore"
    ],
    correct: [0],
    exp: "La SCD di tipo 2 storicizza: quando un attributo cambia, si aggiunge una nuova riga (con chiave surrogata e periodo di validità), mantenendo anche la versione precedente. Il tipo 1 sovrascrive."
  },
  {
    id: "u13058", topic: "Drill-through",
    q: "Il 'drill-through' in un report permette di:",
    opts: [
      "Passare a una pagina di dettaglio filtrata sul contesto selezionato",
      "Cambiare la combinazione di colori dell'intero report",
      "Esportare l'intero report in un file PDF stampabile",
      "Eliminare un visual dalla pagina corrente del report"
    ],
    correct: [0],
    exp: "Il drill-through porta l'utente a una pagina di approfondimento mostrando i dettagli relativi all'elemento selezionato (es. cliccando una regione si aprono i dettagli di quella regione)."
  },
  {
    id: "u13059", topic: "Batch vs streaming",
    q: "Un DW tradizionale aggiorna i dati tipicamente in modalità:",
    opts: [
      "Batch (a intervalli), anche se esistono soluzioni near-real-time",
      "Esclusivamente in tempo reale a ogni singola transazione",
      "Mai: i dati vengono caricati una sola volta all'inizio",
      "Solo manualmente, con inserimenti fatti a mano dagli utenti"
    ],
    correct: [0],
    exp: "Storicamente i DW si aggiornano in batch periodici. Per esigenze in tempo reale si usano architetture di streaming (near-real-time), più complesse e costose."
  },
  {
    id: "u13060", topic: "Modello dati Power BI",
    q: "Uno schema a stella è consigliato in Power BI perché:",
    opts: [
      "Ottimizza le prestazioni e semplifica le misure DAX",
      "Rallenta i calcoli ma garantisce una maggiore sicurezza",
      "Impedisce di creare relazioni tra le tabelle del modello",
      "Elimina la necessità di scrivere qualsiasi misura DAX"
    ],
    correct: [0],
    exp: "Power BI lavora meglio con un modello a stella (fatti + dimensioni): relazioni chiare, query più veloci e formule DAX più semplici e prevedibili rispetto a modelli piatti o troppo normalizzati."
  },
  {
    id: "u13061", topic: "Aggregare in visual",
    q: "In un visual di Power BI, trascinare una misura la mostra:",
    opts: [
      "Aggregata secondo le dimensioni presenti nel visual",
      "Riga per riga così com'è, senza alcuna aggregazione",
      "Come testo statico che non cambia mai con i filtri",
      "Senza alcun calcolo, mostrando solo il nome della misura"
    ],
    correct: [0],
    exp: "La misura viene calcolata per ogni combinazione delle dimensioni del visual (es. vendite per regione e anno): il contesto del visual determina il livello di aggregazione."
  },
  {
    id: "u13062", topic: "Connettori",
    q: "Un connettore in uno strumento di BI serve a:",
    opts: [
      "Collegarsi a una specifica sorgente dati (database, API, file)",
      "Creare i grafici e i visual della dashboard finale",
      "Scrivere le query SQL di trasformazione dei dati",
      "Gestire gli account e i permessi degli utenti del report"
    ],
    correct: [0],
    exp: "I connettori standardizzano l'accesso alle varie sorgenti (SQL Server, Excel, Salesforce, API): l'utente configura la connessione e importa i dati senza scrivere codice di integrazione."
  },
  {
    id: "u13063", topic: "Materializzazione dbt",
    q: "In dbt, materializzare un model come 'table' invece che 'view' significa:",
    opts: [
      "Salvare fisicamente i risultati (più veloci in lettura, ma da aggiornare)",
      "Non salvare nulla e ricalcolare la query a ogni interrogazione",
      "Generare automaticamente un grafico a partire dai risultati",
      "Cifrare i dati trasformati prima di archiviarli nel warehouse"
    ],
    correct: [0],
    exp: "Una view ricalcola la query a ogni interrogazione (sempre fresca ma potenzialmente lenta); una table salva i risultati (letture rapide, ma va rigenerata). La scelta bilancia freschezza e performance."
  },
  {
    id: "u13064", topic: "Additività",
    q: "Una misura 'additiva' (es. quantità venduta):",
    opts: [
      "Può essere sommata lungo tutte le dimensioni",
      "Non può mai essere sommata lungo nessuna dimensione",
      "È sempre espressa come una percentuale o un rapporto",
      "È in realtà una dimensione e non una misura numerica"
    ],
    correct: [0],
    exp: "Le misure additive si sommano su qualunque dimensione (tempo, prodotto, luogo). Alcune sono semi-additive (es. saldo di magazzino: non si somma nel tempo) o non additive (es. rapporti/percentuali)."
  },
  {
    id: "u13065", topic: "Bridge table",
    q: "Una 'bridge table' (tabella ponte) serve a gestire:",
    opts: [
      "Relazioni molti-a-molti tra dimensioni e fatti",
      "Semplici relazioni uno-a-uno tra due tabelle",
      "La cifratura delle chiavi che collegano le tabelle",
      "La configurazione delle dashboard condivise"
    ],
    correct: [0],
    exp: "La bridge table risolve relazioni molti-a-molti (es. un ordine con più promozioni), collegando le tabelle attraverso una tabella intermedia con le coppie di chiavi."
  },
  {
    id: "u13066", topic: "Metrica vs KPI",
    q: "Qual è la differenza tra metrica e KPI?",
    opts: [
      "Il KPI è una metrica LEGATA a un obiettivo strategico; non tutte le metriche sono KPI",
      "La metrica è legata a un obiettivo strategico; il KPI è una misura qualsiasi",
      "Sono la stessa cosa: due nomi diversi per lo stesso concetto",
      "La metrica è sempre più importante e strategica del KPI"
    ],
    correct: [0],
    exp: "Una metrica è qualunque valore misurabile; il KPI è una metrica selezionata perché critica per un obiettivo (es. il tasso di abbandono per l'obiettivo di retention). Pochi KPI, molte metriche."
  },
  {
    id: "u13067", topic: "Aggregazione errata",
    q: "Fare la 'media delle medie' su gruppi di dimensione diversa:",
    opts: [
      "Può dare un risultato errato: serve ponderare per la numerosità",
      "Dà sempre il risultato corretto indipendentemente dai gruppi",
      "È più preciso della media calcolata sui dati complessivi",
      "Non è mai un problema perché le medie si sommano tra loro"
    ],
    correct: [0],
    exp: "Mediare medie di gruppi con numerosità diverse senza pesarle distorce il risultato. Serve la media ponderata o calcolare somma/conteggio totali. Errore comune nei report."
  },
  {
    id: "u13068", topic: "Idempotenza pipeline",
    q: "Una pipeline ETL idempotente:",
    opts: [
      "Rieseguita più volte produce sempre lo stesso risultato, senza duplicare i dati",
      "Rieseguita più volte duplica i dati a ogni nuova esecuzione",
      "Non può in alcun modo essere rieseguita una seconda volta",
      "Cancella tutti i dati esistenti a ogni singola esecuzione"
    ],
    correct: [0],
    exp: "L'idempotenza garantisce che rilanciare una pipeline (es. dopo un errore) non crei duplicati o incoerenze: il risultato finale è lo stesso. Fondamentale per pipeline affidabili."
  },
  {
    id: "u13069", topic: "Reporting vs analisi",
    q: "L'analisi 'ad hoc' si distingue dal reporting standard perché:",
    opts: [
      "Esplora domande specifiche e non pianificate sui dati",
      "Produce report ricorrenti predefiniti su base giornaliera",
      "Non utilizza affatto i dati del data warehouse aziendale",
      "Serve soltanto a creare grafici colorati per le presentazioni"
    ],
    correct: [0],
    exp: "Il reporting standard produce report ricorrenti predefiniti; l'analisi ad hoc risponde a domande estemporanee esplorando i dati liberamente, spesso in self-service."
  },
  {
    id: "u13070", topic: "Ottimizzazione DAX",
    q: "Per performance in Power BI, è meglio:",
    opts: [
      "Usare misure ben scritte su un modello a stella pulito",
      "Molte colonne calcolate su tabelle enormi e piatte",
      "Evitare le relazioni",
      "Importare tutto senza modellare"
    ],
    correct: [0],
    exp: "Prestazioni migliori si ottengono con un modello a stella snello, tipi di dato adeguati e misure DAX efficienti, evitando tabelle enormi denormalizzate e colonne calcolate inutili."
  },
  {
    id: "u13071", topic: "Fonti in tempo reale",
    q: "Il 'DirectQuery' in Power BI (rispetto all'import):",
    opts: [
      "Interroga la sorgente in tempo reale senza importare i dati",
      "Copia sempre tutti i dati della sorgente dentro il modello",
      "Non riesce a connettersi ai database, ma solo ai file Excel",
      "Trasforma i dati prima di mostrarli, come fa Power Query"
    ],
    correct: [0],
    exp: "Con DirectQuery Power BI invia le query direttamente al database sorgente (dati sempre aggiornati, ma dipende dalle performance della sorgente). L'import copia i dati nel modello (più veloce, ma da aggiornare)."
  },
  {
    id: "u13072", topic: "Fact type",
    q: "Una 'fact table' senza misure numeriche, che registra solo il verificarsi di eventi, è detta:",
    opts: [
      "Factless fact table (tabella dei fatti senza fatti)",
      "Una normale tabella dimensione con soli attributi descrittivi",
      "Una tabella ponte che collega due dimensioni tra loro",
      "Una tabella di staging usata solo in modo temporaneo"
    ],
    correct: [0],
    exp: "La factless fact table registra eventi/relazioni (es. presenze studenti a lezione) senza metriche numeriche: si analizza contando le righe. Utile per coperture e occorrenze."
  },
  {
    id: "u13073", topic: "Trasformazioni comuni",
    q: "Tra le trasformazioni ETL più comuni c'è:",
    opts: [
      "Pulizia, deduplicazione, join e standardizzazione dei valori",
      "La semplice copia dei file senza applicare alcuna modifica",
      "La sola cifratura dei dati prima del caricamento finale",
      "Nessuna trasformazione: i dati passano del tutto invariati"
    ],
    correct: [0],
    exp: "Le trasformazioni tipiche includono pulizia (NaN, formati), deduplicazione, unione di sorgenti (join), calcolo di campi derivati e standardizzazione di codici/unità."
  },
  {
    id: "u13074", topic: "Business case BI",
    q: "Un progetto di BI di successo parte tipicamente da:",
    opts: [
      "Le domande di business e i KPI che si vogliono monitorare",
      "La scelta della combinazione di colori delle dashboard",
      "L'acquisto dell'hardware e dei server necessari al progetto",
      "Il numero di tabelle che comporranno il data warehouse"
    ],
    correct: [0],
    exp: "Prima si capisce quali decisioni supportare e quali KPI servono, poi si modella e si costruiscono i report. Partire dai dati senza obiettivi porta a dashboard inutili."
  },
  {
    id: "u13075", topic: "Storicizzazione",
    q: "Registrare uno snapshot periodico dei dati (es. giacenze a fine mese) serve a:",
    opts: [
      "Analizzare l'evoluzione nel tempo di grandezze che verrebbero sovrascritte",
      "Cancellare lo storico per mantenere solo il valore più recente",
      "Cifrare periodicamente i dati per proteggerli dagli accessi",
      "Velocizzare le transazioni operative del sistema OLTP"
    ],
    correct: [0],
    exp: "Gli snapshot periodici (accumulating/periodic snapshot fact) fotografano lo stato a intervalli regolari, permettendo confronti temporali su grandezze come saldi e giacenze."
  },
  {
    id: "u13076", topic: "Definizione condivisa",
    q: "Se due reparti calcolano il 'fatturato' con regole diverse:",
    opts: [
      "Servono definizioni condivise (governance) per evitare numeri contrastanti",
      "Va bene così: ogni reparto può usare la propria definizione",
      "Il data warehouse in questi casi diventa del tutto inutile",
      "Basta cambiare la combinazione di colori dei grafici prodotti"
    ],
    correct: [0],
    exp: "Definizioni incoerenti generano report che si contraddicono e sfiducia nei dati. La governance stabilisce definizioni univoche (metriche certificate) come 'single source of truth'."
  },
  {
    id: "u13077", topic: "Aggiornamento incrementale dbt",
    q: "Un model 'incremental' in dbt:",
    opts: [
      "Aggiorna solo i record nuovi/modificati invece di ricostruire tutto",
      "Ricostruisce sempre da capo l'intera tabella a ogni esecuzione",
      "Non applica alcuna trasformazione ai dati del warehouse",
      "Genera automaticamente i grafici a partire dai risultati"
    ],
    correct: [0],
    exp: "I model incrementali di dbt processano solo i nuovi dati (in base a una condizione temporale/chiave), riducendo tempi e costi su tabelle grandi rispetto al full-refresh."
  },
  {
    id: "u13078", topic: "Visual comparativo",
    q: "Per confrontare un valore effettivo con un obiettivo, un visual adatto è:",
    opts: [
      "Il grafico a KPI o il bullet chart",
      "Il grafico a torta che mostra la composizione di un totale",
      "Il diagramma a dispersione tra due variabili numeriche",
      "La nuvola di parole costruita a partire dal testo"
    ],
    correct: [0],
    exp: "KPI card e bullet chart mostrano il valore attuale rispetto a un target/soglia, evidenziando il raggiungimento dell'obiettivo. Scelte più efficaci di grafici generici per i KPI."
  },
  {
    id: "u13079", topic: "Chiave naturale vs surrogata",
    q: "Perché non usare la chiave naturale (es. codice cliente) come chiave della dimensione?",
    opts: [
      "Può cambiare o essere riusata: la surrogata garantisce stabilità e supporta lo storico",
      "È sempre più veloce da usare rispetto a una chiave surrogata",
      "È vietata dagli standard di progettazione dei data warehouse",
      "Occupa molto meno spazio su disco rispetto alla surrogata"
    ],
    correct: [0],
    exp: "Le chiavi naturali dei sistemi sorgente possono cambiare, ripetersi o differire tra fonti. La surrogata (interna, stabile) disaccoppia il DW e abilita la storicizzazione (SCD tipo 2)."
  },
  {
    id: "u13080", topic: "Layer del dato",
    q: "Molte architetture moderne organizzano i dati in strati (es. bronze, silver, gold) per:",
    opts: [
      "Separare dati grezzi, puliti e aggregati pronti per il consumo",
      "Cifrare i dati con un livello di protezione diverso",
      "Assegnare un colore diverso a ciascun livello di dati",
      "Ridurre il numero di utenti che accedono ai dati"
    ],
    correct: [0],
    exp: "L'architettura a medaglione (bronze=grezzi, silver=puliti/integrati, gold=aggregati per il business) rende la pipeline modulare, tracciabile e riutilizzabile."
  },
  {
    id: "u13081", topic: "Report interattivo",
    q: "Uno 'slicer' in Power BI serve a:",
    opts: [
      "Filtrare interattivamente i dati del report per l'utente",
      "Creare nuove misure DAX all'interno del modello dati",
      "Connettere il report direttamente al database sorgente",
      "Esportare l'intero report in un file PDF condivisibile"
    ],
    correct: [0],
    exp: "Lo slicer è un controllo di filtro visibile (es. selezione dell'anno o della regione) che l'utente usa per filtrare tutti i visual collegati, rendendo il report interattivo."
  },
  {
    id: "u13082", topic: "Modellazione: fatti multipli",
    q: "In presenza di più processi (vendite, resi, spedizioni) di solito si creano:",
    opts: [
      "Più fact table che condividono le stesse dimensioni (conformi)",
      "Un'unica tabella dei fatti che contiene tutti i processi insieme",
      "Nessuna tabella dei fatti, ma solo tante tabelle dimensione",
      "Una sola dimensione condivisa senza alcuna tabella dei fatti"
    ],
    correct: [0],
    exp: "Ogni processo di business ha la sua fact table, ma condividono dimensioni 'conformi' (stesso cliente, stesso tempo): questo permette analisi integrate (drill across) tra i processi."
  },
  {
    id: "u13083", topic: "Freschezza dei dati",
    q: "La 'data freshness' (freschezza) indica:",
    opts: [
      "Quanto sono recenti/aggiornati i dati rispetto alla realtà",
      "La combinazione di colori scelta per rappresentare i dati",
      "La dimensione complessiva dei file salvati nel warehouse",
      "Il numero di colonne presenti in ciascuna tabella dei fatti"
    ],
    correct: [0],
    exp: "La freschezza misura il ritardo tra l'evento reale e la sua disponibilità nel report. Requisiti diversi (giornaliero vs tempo reale) determinano l'architettura della pipeline."
  },
  {
    id: "u13084", topic: "Aggregazione a livelli",
    q: "Il roll-up in OLAP consiste nel:",
    opts: [
      "Aggregare i dati a un livello di dettaglio superiore (es. da giorno a mese)",
      "Scendere verso un livello di dettaglio più fine (es. da mese a giorno)",
      "Passare da una dimensione di analisi a un'altra diversa",
      "Fissare il valore di una dimensione per estrarne una fetta"
    ],
    correct: [0],
    exp: "Il roll-up sale nella gerarchia aggregando (giorno→mese→anno). Il drill-down fa l'opposto. Sono le operazioni base per navigare le gerarchie di un cubo OLAP."
  },
  {
    id: "u13085", topic: "Trasformazione vs caricamento",
    q: "Nell'ELT moderno, la trasformazione avviene:",
    opts: [
      "Dentro il data warehouse dopo il caricamento dei dati grezzi",
      "Fuori dal warehouse, prima di caricare i dati al suo interno",
      "Non avviene mai: i dati restano sempre allo stato grezzo",
      "Solo sui sistemi sorgente, prima di estrarre i dati"
    ],
    correct: [0],
    exp: "L'ELT sfrutta la potenza di calcolo del data warehouse cloud: si caricano i dati grezzi e li si trasforma lì (con SQL/dbt), a differenza dell'ETL che trasforma prima del caricamento."
  },
  {
    id: "u13086", topic: "Report vs dashboard",
    q: "Qual è una differenza tra report e dashboard?",
    opts: [
      "La dashboard sintetizza i KPI a colpo d'occhio; il report è più dettagliato e sfogliabile",
      "Il report sintetizza i KPI a colpo d'occhio; la dashboard è più dettagliata",
      "Sono esattamente la stessa cosa indicata con due nomi diversi",
      "La dashboard non utilizza i dati, mentre il report sì"
    ],
    correct: [0],
    exp: "La dashboard offre una sintesi visiva immediata dei KPI su una schermata; il report è tipicamente più esteso e dettagliato, con più pagine e tabelle da esplorare."
  },
  {
    id: "u13087", topic: "Chiavi nei fatti",
    q: "Le colonne chiave in una fact table sono per lo più:",
    opts: [
      "Foreign key verso le dimensioni più le misure numeriche",
      "Soltanto attributi descrittivi di tipo testuale",
      "Esclusivamente le date degli eventi registrati",
      "Nessuna chiave, ma solo valori numerici sciolti"
    ],
    correct: [0],
    exp: "La fact table contiene le FK verso le dimensioni (che ne definiscono il contesto) e le misure numeriche dell'evento. La combinazione delle FK spesso definisce la grana."
  },
  {
    id: "u13088", topic: "Cataloghi dati",
    q: "Un data catalog serve a:",
    opts: [
      "Documentare e rendere ricercabili i dataset e i loro significati",
      "Cifrare i dataset per proteggerli dagli accessi esterni",
      "Generare automaticamente i grafici delle dashboard aziendali",
      "Gestire l'allocazione di CPU e memoria dei server"
    ],
    correct: [0],
    exp: "Il data catalog è un inventario dei dati aziendali con metadati, descrizioni, proprietari e lineage: aiuta gli utenti a trovare e capire i dati disponibili e affidabili."
  },
  {
    id: "u13089", topic: "Modello vs report",
    q: "In Power BI, separare il modello dati (dataset) dai report permette di:",
    opts: [
      "Riutilizzare lo stesso modello certificato per più report",
      "Duplicare inutilmente gli stessi dati dentro ogni report",
      "Impedire la creazione di grafici all'interno dei report",
      "Rallentare il caricamento di tutti i report collegati"
    ],
    correct: [0],
    exp: "Un dataset condiviso e certificato può alimentare più report: garantisce coerenza delle metriche e riuso, evitando che ogni report reinventi il modello."
  },
  {
    id: "u13090", topic: "Aggregazioni Power BI",
    q: "Le 'aggregation tables' in Power BI servono a:",
    opts: [
      "Rispondere a query su grandi volumi usando dati pre-aggregati, più veloci",
      "Cambiare la combinazione di colori dei visual del report",
      "Cifrare i dati aggregati prima di mostrarli agli utenti",
      "Creare relazioni casuali tra le tabelle del modello dati"
    ],
    correct: [0],
    exp: "Le tabelle di aggregazione contengono dati pre-riassunti: Power BI le usa automaticamente per le query di alto livello, ricorrendo al dettaglio solo quando serve, migliorando le performance."
  },
  {
    id: "u13091", topic: "Sicurezza dati",
    q: "Prima di condividere una dashboard esterna, è importante:",
    opts: [
      "Verificare permessi, RLS e assenza di dati sensibili non autorizzati",
      "Cambiare la combinazione di colori per renderla più gradevole",
      "Aumentare il numero di grafici presenti in ogni pagina",
      "Cancellare il modello dati per alleggerire il report"
    ],
    correct: [0],
    exp: "La condivisione deve rispettare la sicurezza: controllare chi può vedere cosa (RLS, permessi) ed evitare di esporre dati riservati. La governance della condivisione è parte della BI."
  },
  {
    id: "u13092", topic: "Pipeline: monitoraggio",
    q: "Monitorare le pipeline dati serve a:",
    opts: [
      "Rilevare fallimenti, ritardi e anomalie di qualità e intervenire per tempo",
      "Scegliere la combinazione di colori dei grafici finali",
      "Aumentare il numero di visual presenti nelle dashboard",
      "Ridurre il numero di utenti che accedono ai dati"
    ],
    correct: [0],
    exp: "Le pipeline vanno monitorate (esiti, tempi, volumi, controlli di qualità) per accorgersi subito di errori o dati mancanti, prima che report sbagliati raggiungano gli utenti."
  },
  {
    id: "u13093", topic: "Dimensione degenerata",
    q: "Una 'dimensione degenerata' è:",
    opts: [
      "Un attributo dimensionale (es. numero d'ordine) memorizzato nella fact table",
      "Una tabella dei fatti che non contiene alcuna misura numerica",
      "Una dimensione con milioni di righe difficile da gestire",
      "Un errore di progettazione che va sempre corretto"
    ],
    correct: [0],
    exp: "La dimensione degenerata è un identificativo (es. numero fattura/ordine) che sta nella fact table senza una tabella dimensione propria: utile per raggruppare le righe di uno stesso evento."
  },
  {
    id: "u13094", topic: "Trasformazioni riproducibili",
    q: "Perché è importante che le trasformazioni dati siano versionate (es. con dbt/git)?",
    opts: [
      "Per riproducibilità, tracciabilità delle modifiche e collaborazione",
      "Per poter usare una gamma di colori più ampia nei report",
      "Per cifrare automaticamente i dati durante la trasformazione",
      "Non è importante: le trasformazioni non vanno versionate"
    ],
    correct: [0],
    exp: "Versionare le trasformazioni (codice SQL) permette di sapere chi ha cambiato cosa, tornare indietro, testare e collaborare: porta le buone pratiche del software nell'analytics."
  },
  {
    id: "u13095", topic: "Metrica derivata",
    q: "Il 'margine %' calcolato come (ricavi−costi)/ricavi è una misura:",
    opts: [
      "Non additiva: non si somma tra i gruppi, va ricalcolata dai totali",
      "Additiva come i ricavi: si somma liberamente tra i gruppi",
      "Una dimensione categorica usata per filtrare i dati",
      "Una costante che resta sempre uguale in ogni gruppo"
    ],
    correct: [0],
    exp: "I rapporti/percentuali non sono additivi: sommare i margini % dei gruppi è sbagliato. Vanno ricalcolati dai totali di ricavi e costi. Errore frequente nei report."
  },
  {
    id: "u13096", topic: "Scelta del visual",
    q: "Usare troppi colori e grafici in una dashboard:",
    opts: [
      "Riduce la leggibilità e distrae dai messaggi chiave",
      "Migliora sempre la comprensione dei dati da parte dell'utente",
      "È una regola obbligatoria imposta dagli standard di BI",
      "Non ha alcun effetto sulla qualità della comunicazione"
    ],
    correct: [0],
    exp: "Un buon design privilegia chiarezza e semplicità: pochi visual mirati, colori con significato, gerarchia visiva. L'eccesso di elementi confonde e nasconde le informazioni importanti."
  },
  {
    id: "u13097", topic: "Batch notturno",
    q: "Perché molte pipeline ETL girano di notte?",
    opts: [
      "Per sfruttare le finestre di basso carico e avere dati pronti al mattino",
      "Perché i sistemi sorgente sono spenti durante le ore diurne",
      "Per ridurre il consumo di risorse grafiche nei report generati",
      "Perché la cifratura dei dati funziona soltanto di notte"
    ],
    correct: [0],
    exp: "Le elaborazioni batch pesanti si schedulano in orari di basso utilizzo (notte) per non impattare i sistemi operativi e per avere i report aggiornati all'inizio della giornata lavorativa."
  },
  {
    id: "u13098", topic: "Conformità",
    q: "Una 'conformed dimension' (dimensione conforme) è:",
    opts: [
      "Una dimensione condivisa e coerente tra più fact table/data mart",
      "Una dimensione che assume un significato diverso in ogni report",
      "Una tabella dei fatti condivisa tra più data mart aziendali",
      "Una misura numerica presente in tutte le tabelle dei fatti"
    ],
    correct: [0],
    exp: "Le dimensioni conformi (stesso significato e chiavi in tutto il DW) permettono di integrare analisi di processi diversi (drill across), garantendo coerenza aziendale."
  },
  {
    id: "u13099", topic: "Valore della BI",
    q: "L'obiettivo finale della BI è:",
    opts: [
      "Supportare decisioni migliori basate sui dati (data-driven)",
      "Produrre il maggior numero possibile di grafici colorati",
      "Sostituire completamente i manager nelle decisioni aziendali",
      "Archiviare in modo sicuro tutti i dati storici dell'azienda"
    ],
    correct: [0],
    exp: "La BI esiste per abilitare decisioni informate e tempestive basate sui dati, non per accumulare report. Il valore si misura dall'impatto sulle decisioni e sui risultati di business."
  },
  {
    id: "u13100", topic: "Flusso BI",
    q: "Un flusso tipico di un progetto BI è:",
    opts: [
      "Sorgenti → ETL/ELT → data warehouse → modello → report/dashboard",
      "Sorgenti → data warehouse → ETL/ELT → modello → report/dashboard",
      "Sorgenti → ETL/ELT → modello → data warehouse → report/dashboard",
      "Report/dashboard → sorgenti → ETL/ELT → data warehouse → modello"
    ],
    correct: [0],
    exp: "Il flusso: estrarre dai sistemi sorgente, trasformare e caricare nel DW, modellare (star schema, misure) e infine costruire report e dashboard per gli utenti di business."
  },
  // === AGGIUNGI NUOVE DOMANDE BI E DATA WAREHOUSE QUI ===
]);
