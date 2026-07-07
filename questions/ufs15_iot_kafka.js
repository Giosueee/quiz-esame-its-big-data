/* ============================================================
   MATERIA: IoT e Stream Processing  (UFS15 - Kafka, streaming)
   100 domande. (Camuffatura lunghezze: pass finale.)
   ============================================================ */
registerSubject("IoT e Streaming", [
  {
    id: "u15001", topic: "IoT",
    q: "Cosa indica l'acronimo IoT?",
    opts: [
      "Internet of Things (Internet delle cose)",
      "Input Output Transfer",
      "Internal Object Type",
      "Integrated Online Tool"
    ],
    correct: [0],
    exp: "IoT (Internet of Things) è la rete di dispositivi fisici (sensori, attuatori) connessi che raccolgono e scambiano dati, generando flussi continui da elaborare."
  },
  {
    id: "u15002", topic: "Streaming vs batch",
    q: "L'elaborazione in streaming differisce dal batch perché:",
    opts: [
      "Processa gli eventi in continuo appena arrivano (bassa latenza)",
      "Elabora sempre a blocchi periodici",
      "Usa solo configurazioni o layout, senza elaborare dati osservati",
      "È più lenta per definizione"
    ],
    correct: [0],
    exp: "Lo streaming elabora i dati evento per evento in tempo (quasi) reale; il batch li accumula ed elabora a intervalli. Lo streaming abilita reazioni immediate (allarmi, dashboard live)."
  },
  {
    id: "u15003", topic: "Kafka",
    q: "Cos'è Apache Kafka?",
    opts: [
      "Una piattaforma distribuita di streaming/messaggistica ad alta capacità",
      "Un database relazionale con tabelle e schema rigido",
      "Un foglio di calcolo usato per dati tabellari manuali",
      "Un linguaggio per scrivere codice applicativo"
    ],
    correct: [0],
    exp: "Kafka è una piattaforma di streaming distribuita: pubblica, memorizza e consuma flussi di eventi in modo scalabile e durevole. È lo standard de facto per le architetture event-driven."
  },
  {
    id: "u15004", topic: "Topic",
    q: "In Kafka, un 'topic' è:",
    opts: [
      "Un canale/categoria a cui vengono pubblicati i messaggi",
      "Un singolo messaggio inviato da un producer",
      "Un'applicazione che consuma i messaggi in arrivo",
      "Il nodo del cluster che memorizza le partizioni"
    ],
    correct: [0],
    exp: "Il topic è un flusso nominato di messaggi (es. 'ordini', 'sensori-temperatura'). I producer scrivono su un topic, i consumer vi leggono. È l'unità logica di organizzazione dei dati."
  },
  {
    id: "u15005", topic: "Partizione",
    q: "Le partizioni di un topic Kafka servono a:",
    opts: [
      "Distribuire e parallelizzare i dati per scalabilità",
      "Cifrare i messaggi prima di scriverli su disco",
      "Cancellare automaticamente i messaggi più vecchi",
      "Definire per quanto tempo conservare i dati"
    ],
    correct: [0],
    exp: "Un topic è diviso in partizioni: permettono di distribuire i dati su più broker e di consumarli in parallelo, aumentando throughput e scalabilità."
  },
  {
    id: "u15006", topic: "Producer",
    q: "Un 'producer' in Kafka:",
    opts: [
      "Pubblica (scrive) messaggi su un topic",
      "Legge i messaggi",
      "Cancella i topic",
      "Gestisce i broker"
    ],
    correct: [0],
    exp: "Il producer è l'applicazione che invia messaggi a un topic Kafka. Può scegliere la partizione (es. in base a una chiave) per distribuire o ordinare i dati."
  },
  {
    id: "u15007", topic: "Consumer",
    q: "Un 'consumer' in Kafka:",
    opts: [
      "Legge (consuma) i messaggi da un topic",
      "Pubblica nuovi messaggi su un topic",
      "Crea e configura i topic del cluster",
      "Gestisce la replica delle partizioni tra i broker"
    ],
    correct: [0],
    exp: "Il consumer legge i messaggi da uno o più topic e li elabora. Tiene traccia di fin dove ha letto tramite l'offset, così può riprendere dal punto giusto."
  },
  {
    id: "u15008", topic: "Broker",
    q: "Un 'broker' Kafka è:",
    opts: [
      "Un server del cluster che memorizza i dati e serve producer/consumer",
      "Un tipo di messaggio",
      "Un consumatore",
      "Un database relazionale interrogabile con SQL"
    ],
    correct: [0],
    exp: "Il broker è un nodo del cluster Kafka: conserva le partizioni e gestisce le richieste di lettura/scrittura. Più broker formano un cluster scalabile e tollerante ai guasti."
  },
  {
    id: "u15009", topic: "Offset",
    q: "L'offset in Kafka rappresenta:",
    opts: [
      "La posizione sequenziale di un messaggio all'interno di una partizione",
      "Il numero di partizioni fisiche o logiche usate per distribuire i dati",
      "La dimensione del topic",
      "Il nome del broker"
    ],
    correct: [0],
    exp: "L'offset è un numero progressivo che identifica ogni messaggio nella partizione. Il consumer memorizza l'offset raggiunto (commit) per sapere da dove riprendere la lettura."
  },
  {
    id: "u15010", topic: "Consumer group",
    q: "Un consumer group in Kafka serve a:",
    opts: [
      "Far consumare un topic in parallelo distribuendo le partizioni tra i consumer",
      "Duplicare ogni messaggio verso tutti i consumer del gruppo",
      "Cancellare i messaggi dopo che un consumer li ha letti",
      "Cifrare i messaggi scambiati tra producer e consumer"
    ],
    correct: [0],
    exp: "In un consumer group, ogni partizione è assegnata a un solo consumer del gruppo: così il carico si distribuisce e si scala orizzontalmente. Gruppi diversi ricevono ognuno tutti i messaggi."
  },
  {
    id: "u15011", topic: "Retention",
    q: "La 'retention' di un topic Kafka definisce:",
    opts: [
      "Per quanto tempo (o quanto spazio) i messaggi vengono conservati",
      "Chi può leggere i dati",
      "Il numero di partizioni fisiche o logiche usate per distribuire i dati",
      "Il colore dei messaggi"
    ],
    correct: [0],
    exp: "La retention stabilisce quanto a lungo Kafka conserva i messaggi (es. 7 giorni) o quanta memoria usare, dopodiché li elimina. A differenza di una coda tradizionale, i messaggi restano leggibili finché non scadono."
  },
  {
    id: "u15012", topic: "Replication",
    q: "La replica (replication) delle partizioni in Kafka serve a:",
    opts: [
      "Garantire durabilità e tolleranza ai guasti mantenendo copie su più broker",
      "Velocizzare sempre la scrittura dei messaggi sul disco",
      "Ridurre lo spazio occupato eliminando i duplicati",
      "Ordinare i messaggi tra partizioni diverse dello stesso topic"
    ],
    correct: [0],
    exp: "Ogni partizione può avere repliche su broker diversi: se un broker cade, una replica ne prende il posto (leader election), evitando perdita di dati. Il replication factor ne definisce il numero di copie."
  },
  {
    id: "u15013", topic: "MQTT",
    q: "Il protocollo MQTT è usato tipicamente per:",
    opts: [
      "Comunicazioni IoT leggere tra dispositivi con banda limitata",
      "Trasferire grandi file",
      "Navigare pagine web",
      "Gestire database SQL transazionali invece di messaggi publish/subscribe leggeri"
    ],
    correct: [0],
    exp: "MQTT è un protocollo di messaggistica publish/subscribe leggero, ideale per dispositivi IoT con risorse e banda limitate. Usa un broker e il modello a topic."
  },
  {
    id: "u15014", topic: "Pub/Sub",
    q: "Nel modello publish/subscribe:",
    opts: [
      "I produttori pubblicano messaggi e i consumatori interessati li ricevono, disaccoppiati",
      "Ogni messaggio va a un solo destinatario fisso",
      "Non ci sono messaggi",
      "I dati non cambiano nel tempo e non arrivano come flusso continuo"
    ],
    correct: [0],
    exp: "Nel pub/sub chi pubblica non conosce chi consuma: i messaggi vanno su topic e chi è iscritto li riceve. Producer e consumer sono disaccoppiati, facilitando scalabilità e flessibilità."
  },
  {
    id: "u15015", topic: "Schema Registry",
    q: "Uno Schema Registry (es. con Kafka) serve a:",
    opts: [
      "Gestire e far evolvere gli schemi dei messaggi garantendone la compatibilità",
      "Assegnare le partizioni ai consumer di un gruppo",
      "Bilanciare il carico tra i broker del cluster",
      "Cancellare i messaggi scaduti dai topic"
    ],
    correct: [0],
    exp: "Lo Schema Registry conserva gli schemi (es. Avro) dei messaggi e verifica la compatibilità quando evolvono, evitando che producer e consumer si 'rompano' per cambi di formato."
  },
  {
    id: "u15016", topic: "Avro",
    q: "Apache Avro è:",
    opts: [
      "Un formato di serializzazione compatto con schema, usato nello streaming",
      "Un database relazionale distribuito per lo streaming",
      "Un linguaggio per interrogare gli stream come tabelle",
      "Un protocollo di rete leggero per dispositivi IoT"
    ],
    correct: [0],
    exp: "Avro serializza i dati in formato binario compatto insieme a uno schema: efficiente per lo scambio di messaggi (es. su Kafka) e supporta l'evoluzione dello schema."
  },
  {
    id: "u15017", topic: "CDC",
    q: "Il Change Data Capture (CDC, es. con Debezium) serve a:",
    opts: [
      "Catturare i cambiamenti di un database e trasmetterli come stream di eventi",
      "Creare dashboard in tempo reale dai dati del database",
      "Cancellare periodicamente le tabelle non più usate",
      "Cifrare le tabelle prima di replicarle su Kafka"
    ],
    correct: [0],
    exp: "Il CDC intercetta insert/update/delete di un database (leggendone il log) e li pubblica come eventi (es. su Kafka), permettendo di sincronizzare i dati in tempo reale verso altri sistemi."
  },
  {
    id: "u15018", topic: "Latenza",
    q: "Una bassa latenza nello streaming significa:",
    opts: [
      "Poco tempo tra l'arrivo di un evento e la sua elaborazione",
      "Molti dati elaborati al secondo, cioè throughput e non latenza",
      "Alta sicurezza della comunicazione, non tempo di risposta",
      "Molte partizioni nello stream o nel topic, non una misura di latenza"
    ],
    correct: [0],
    exp: "La latenza è il ritardo tra evento e risultato. Lo streaming punta a latenze basse (millisecondi/secondi) per reazioni immediate, a differenza del batch che elabora dopo."
  },
  {
    id: "u15019", topic: "ksqlDB",
    q: "ksqlDB permette di:",
    opts: [
      "Elaborare stream Kafka con query simili a SQL",
      "Sostituire il sistema operativo invece di virtualizzare risorse o servizi",
      "Creare grafici di BI",
      "Gestire container applicativi invece di isolamento o rete del sistema"
    ],
    correct: [0],
    exp: "ksqlDB offre un linguaggio SQL-like per definire trasformazioni, filtri, join e aggregazioni sugli stream Kafka in tempo reale, senza scrivere codice a basso livello."
  },
  {
    id: "u15020", topic: "Docker",
    q: "Nel contesto dello streaming, Docker viene usato per:",
    opts: [
      "Impacchettare ed eseguire i servizi (Kafka, connettori) in container isolati",
      "Cifrare i messaggi che transitano nei topic Kafka",
      "Sostituire Kafka nella gestione degli stream",
      "Creare automaticamente i topic e le partizioni"
    ],
    correct: [0],
    exp: "Docker permette di avviare rapidamente ambienti di streaming riproducibili (Kafka, Schema Registry, connettori) in container, utile per sviluppo, test e deployment coerenti."
  },
  {
    id: "u15021", topic: "At-least-once",
    q: "La garanzia 'at-least-once' nello streaming significa:",
    opts: [
      "Ogni messaggio è consegnato almeno una volta (possibili duplicati)",
      "Ogni messaggio esattamente una volta",
      "I messaggi possono andare persi",
      "Nessun messaggio viene consegnato"
    ],
    correct: [0],
    exp: "At-least-once garantisce nessuna perdita ma possibili duplicati (in caso di retry): i consumer devono gestire l'idempotenza. Le altre semantiche sono at-most-once ed exactly-once."
  },
  {
    id: "u15022", topic: "Exactly-once",
    q: "La semantica 'exactly-once' garantisce che ogni messaggio sia elaborato:",
    opts: [
      "Esattamente una volta, senza perdite né duplicati",
      "Almeno una volta, accettando possibili duplicati",
      "Al massimo una volta, accettando possibili perdite",
      "In modo casuale, senza alcuna garanzia sulla consegna"
    ],
    correct: [0],
    exp: "Exactly-once è la garanzia più forte (né perdite né duplicati) ma la più complessa e costosa. Kafka la supporta con transazioni e produttori idempotenti in specifiche condizioni."
  },
  {
    id: "u15023", topic: "Chiave del messaggio",
    q: "La chiave (key) di un messaggio Kafka serve a:",
    opts: [
      "Determinare la partizione, garantendo l'ordine per una stessa chiave",
      "Cifrare il contenuto del messaggio prima dell'invio",
      "Indicare per quanto tempo conservare il messaggio",
      "Assegnare una priorità di consegna al messaggio"
    ],
    correct: [0],
    exp: "I messaggi con la stessa chiave finiscono nella stessa partizione, che ne mantiene l'ordine. Es: tutti gli eventi di un cliente ordinati insieme. Senza chiave, la distribuzione è bilanciata ma senza garanzia d'ordine globale."
  },
  {
    id: "u15024", topic: "Ordine dei messaggi",
    q: "In Kafka l'ordine dei messaggi è garantito:",
    opts: [
      "Solo all'interno di una singola partizione, non tra partizioni diverse",
      "Sempre a livello globale su tutte le partizioni del topic",
      "Mai, perché Kafka non garantisce alcun ordinamento",
      "Solo quando è attivo un unico consumer group"
    ],
    correct: [0],
    exp: "Kafka garantisce l'ordine dentro una partizione. Tra partizioni diverse non c'è ordine globale. Per ordinare eventi correlati si usa la stessa chiave, così vanno nella stessa partizione."
  },
  {
    id: "u15025", topic: "Backpressure",
    q: "La 'backpressure' in un sistema di streaming indica:",
    opts: [
      "Quando i consumatori non tengono il passo dei produttori e serve rallentare/bufferizzare",
      "Un aumento improvviso della velocità di elaborazione",
      "La cifratura automatica dei messaggi in transito",
      "Un tipo di finestra temporale usata nelle aggregazioni"
    ],
    correct: [0],
    exp: "La backpressure si verifica quando i dati arrivano più velocemente di quanto vengano elaborati: il sistema deve bufferizzare, rallentare i producer o scalare i consumer per non collassare."
  },
  {
    id: "u15026", topic: "Windowing",
    q: "Nel processamento di stream, una 'finestra' (window) temporale serve a:",
    opts: [
      "Aggregare eventi in intervalli di tempo (es. conteggi ogni 5 minuti)",
      "Cifrare i dati raccolti in un dato intervallo temporale",
      "Cancellare i messaggi più vecchi di un certo tempo",
      "Creare automaticamente nuovi topic a intervalli regolari"
    ],
    correct: [0],
    exp: "Le finestre raggruppano gli eventi per intervalli (tumbling, sliding, session window) per calcolare aggregazioni su flussi infiniti, es. il numero di click ogni minuto."
  },
  {
    id: "u15027", topic: "Event time vs processing time",
    q: "La differenza tra 'event time' e 'processing time' è:",
    opts: [
      "Event time è quando l'evento è accaduto; processing time quando viene elaborato",
      "Hanno comportamento e risultato identici nello stesso contesto operativo",
      "Event time è sempre dopo",
      "Processing time non esiste"
    ],
    correct: [0],
    exp: "L'event time è il timestamp reale dell'evento; il processing time è quando il sistema lo elabora. Gli eventi possono arrivare in ritardo/fuori ordine: gestire l'event time è cruciale per risultati corretti."
  },
  {
    id: "u15028", topic: "Sensori IoT",
    q: "I sensori IoT generano tipicamente:",
    opts: [
      "Flussi continui di misurazioni (telemetria) nel tempo",
      "Un singolo valore statico",
      "Immagini a bassa frequenza sempre",
      "Dati solo testuali"
    ],
    correct: [0],
    exp: "I sensori (temperatura, movimento, GPS) producono telemetria: serie di misure ad alta frequenza. Questi flussi vengono ingeriti e processati in streaming per monitoraggio e allarmi."
  },
  {
    id: "u15029", topic: "Edge computing",
    q: "L'edge computing nell'IoT consiste nel:",
    opts: [
      "Elaborare i dati vicino ai dispositivi (sul campo) invece che solo nel cloud",
      "Elaborare tutti i dati esclusivamente nel cloud centrale",
      "Cancellare i dati raccolti dai sensori dopo la lettura",
      "Cifrare la rete tra i dispositivi e il gateway"
    ],
    correct: [0],
    exp: "L'edge processa i dati vicino alla fonte (sul dispositivo o gateway): riduce latenza e banda verso il cloud, utile quando serve reazione immediata o connettività limitata."
  },
  {
    id: "u15030", topic: "Coda vs log",
    q: "Kafka rispetto a una coda tradizionale (es. RabbitMQ):",
    opts: [
      "Conserva i messaggi (log durevole) e permette a più consumatori di rileggerli",
      "Cancella subito ogni messaggio letto",
      "Non memorizza nulla",
      "È un database relazionale usato per query transazionali SQL"
    ],
    correct: [0],
    exp: "Kafka è un log distribuito e durevole: i messaggi restano (fino alla retention) e più consumer group possono leggerli indipendentemente, anche rileggendo dal passato. Una coda classica di solito rimuove il messaggio dopo la consegna."
  },
  {
    id: "u15031", topic: "Kafka Connect",
    q: "Kafka Connect serve a:",
    opts: [
      "Integrare Kafka con sistemi esterni (database, storage) tramite connettori pronti",
      "Cifrare i topic prima di renderli disponibili ai consumer",
      "Creare dashboard a partire dai messaggi dei topic",
      "Bilanciare il carico tra i broker del cluster"
    ],
    correct: [0],
    exp: "Kafka Connect sposta dati tra Kafka e sistemi esterni (source e sink connector) senza scrivere codice: es. importare da un database (CDC) o esportare verso un data warehouse."
  },
  {
    id: "u15032", topic: "Throughput",
    q: "Il throughput di un sistema di streaming misura:",
    opts: [
      "Quanti eventi/messaggi vengono elaborati per unità di tempo",
      "Il ritardo di un singolo evento",
      "Il numero di argomenti latenti scelti per il modello topic",
      "La sicurezza"
    ],
    correct: [0],
    exp: "Il throughput è la capacità di elaborazione (es. messaggi/secondo). Kafka scala il throughput aggiungendo partizioni e broker. È distinto dalla latenza (ritardo del singolo evento)."
  },
  {
    id: "u15033", topic: "Stateful processing",
    q: "Un'elaborazione di stream 'stateful' (con stato):",
    opts: [
      "Mantiene informazioni tra eventi (es. conteggi, aggregazioni)",
      "Non ricorda nulla tra un evento e l'altro",
      "Cifra ogni evento prima di elaborarlo",
      "Cancella lo stato precedente a ogni nuovo evento"
    ],
    correct: [0],
    exp: "Le operazioni stateful (aggregazioni, join, finestre) mantengono uno stato aggiornato mano a mano che arrivano gli eventi. Richiedono gestione dello stato e checkpoint per la resilienza."
  },
  {
    id: "u15034", topic: "Producer idempotente",
    q: "Un producer idempotente in Kafka evita:",
    opts: [
      "I messaggi duplicati causati da retry di rete",
      "La perdita di tutti i messaggi in caso di guasto",
      "La necessità di creare manualmente i topic",
      "La cifratura non autorizzata dei messaggi"
    ],
    correct: [0],
    exp: "Il producer idempotente assegna identificatori ai messaggi così che, in caso di retry, il broker non li scriva due volte. È un mattone per la semantica exactly-once."
  },
  {
    id: "u15035", topic: "Dashboard real-time",
    q: "Lo streaming abilita dashboard in tempo reale perché:",
    opts: [
      "I dati vengono elaborati e mostrati appena arrivano",
      "I dati sono sempre vecchi",
      "Usa solo configurazioni o layout, senza elaborare dati osservati",
      "È più lento del batch"
    ],
    correct: [0],
    exp: "Elaborando gli eventi in continuo, lo streaming aggiorna metriche e visualizzazioni quasi istantaneamente, utile per monitoraggio operativo, allarmi e decisioni immediate."
  },
  {
    id: "u15036", topic: "Partizioni e parallelismo",
    q: "In un consumer group, il numero massimo di consumer utili è limitato:",
    opts: [
      "Dal numero di partizioni del topic",
      "Dal numero di broker soltanto",
      "Dalla dimensione dei messaggi",
      "Non c'è limite"
    ],
    correct: [0],
    exp: "Ogni partizione va a un solo consumer del gruppo: con più consumer che partizioni, quelli in eccesso restano inattivi. Per aumentare il parallelismo servono più partizioni."
  },
  {
    id: "u15037", topic: "Compattazione log",
    q: "La 'log compaction' in Kafka mantiene:",
    opts: [
      "Solo l'ultimo valore per ciascuna chiave",
      "Tutti i messaggi per sempre",
      "Nessun messaggio",
      "Solo i primi messaggi"
    ],
    correct: [0],
    exp: "La compaction conserva, per ogni chiave, l'ultimo messaggio, eliminando i più vecchi: utile per topic che rappresentano lo stato corrente di entità (es. l'ultimo profilo di ogni utente)."
  },
  {
    id: "u15038", topic: "Delivery semantics",
    q: "La semantica 'at-most-once' comporta:",
    opts: [
      "Possibile perdita di messaggi, ma nessun duplicato",
      "Nessuna perdita, possibili duplicati",
      "Sempre esattamente una volta",
      "Nessuna consegna"
    ],
    correct: [0],
    exp: "At-most-once consegna ogni messaggio al massimo una volta: rapido ma può perdere dati (nessun retry). Accettabile solo dove qualche perdita non è critica (es. metriche approssimate)."
  },
  {
    id: "u15039", topic: "Message queue disaccoppiamento",
    q: "Usare un broker di messaggi tra sistemi serve a:",
    opts: [
      "Disaccoppiarli, assorbire i picchi e aumentare la resilienza",
      "Accoppiarli strettamente per sincronizzarli sempre",
      "Rallentare volutamente lo scambio di dati",
      "Cifrare tutti i dati scambiati tra i sistemi"
    ],
    correct: [0],
    exp: "Il broker fa da cuscinetto: produttori e consumatori evolvono indipendentemente, i picchi vengono assorbiti dai buffer e un consumatore lento non blocca il produttore. Aumenta robustezza e flessibilità."
  },
  {
    id: "u15040", topic: "Telemetria",
    q: "La telemetria in IoT è:",
    opts: [
      "La raccolta e trasmissione automatica di misure dai dispositivi",
      "Un database relazionale per archiviare i dati IoT",
      "Un protocollo di cifratura per i dispositivi remoti",
      "Un tipo di grafico per visualizzare i dati dei sensori"
    ],
    correct: [0],
    exp: "La telemetria è l'invio continuo di dati di stato/misura dai dispositivi remoti a un sistema centrale, base per monitoraggio, manutenzione predittiva e automazione nell'IoT."
  },
  {
    id: "u15041", topic: "Scalabilità Kafka",
    q: "Per aumentare la capacità di un topic Kafka si può:",
    opts: [
      "Aggiungere partizioni e broker per distribuire il carico",
      "Ridurre il numero di partizioni per semplificare il topic",
      "Cifrare i messaggi per renderli più compatti",
      "Cancellare i consumer group non più attivi"
    ],
    correct: [0],
    exp: "Più partizioni permettono più parallelismo tra consumer e distribuzione su più broker, aumentando throughput. È il meccanismo principale di scalabilità orizzontale di Kafka."
  },
  {
    id: "u15042", topic: "Dead letter queue",
    q: "Una dead letter queue nello streaming raccoglie:",
    opts: [
      "I messaggi che non è stato possibile elaborare correttamente",
      "I messaggi validi già elaborati con successo",
      "I topic rimasti vuoti per assenza di producer",
      "I dati cifrati in attesa di essere decifrati"
    ],
    correct: [0],
    exp: "I messaggi problematici (malformati, che causano errori) vengono deviati in una dead letter queue per analisi successiva, senza bloccare l'elaborazione del flusso principale."
  },
  {
    id: "u15043", topic: "Eventi fuori ordine",
    q: "Nello stream processing, gli eventi in ritardo o fuori ordine si gestiscono con:",
    opts: [
      "Watermark e finestre con tolleranza al ritardo",
      "Ignorandoli sistematicamente senza elaborarli",
      "Cifrandoli prima di scartarli dal flusso",
      "Cancellando l'intero topic e ricreandolo"
    ],
    correct: [0],
    exp: "I watermark stimano fino a che event time i dati sono 'completi', permettendo di chiudere le finestre con una tolleranza per i ritardatari, gestendo correttamente eventi fuori ordine."
  },
  {
    id: "u15044", topic: "IoT gateway",
    q: "Un gateway IoT serve a:",
    opts: [
      "Raccogliere i dati dei dispositivi e inoltrarli, spesso pre-elaborandoli",
      "Sostituire i sensori nella raccolta delle misure",
      "Cifrare l'intera comunicazione verso il cloud",
      "Creare i grafici finali per gli utenti"
    ],
    correct: [0],
    exp: "Il gateway aggrega i dati di più dispositivi (magari con protocolli diversi), può filtrarli/pre-elaborarli (edge) e li inoltra al cloud o al broker, riducendo il traffico e la latenza."
  },
  {
    id: "u15045", topic: "Stream-table duality",
    q: "Nel mondo Kafka, uno stream può essere visto come:",
    opts: [
      "Una sequenza di eventi, mentre una tabella è lo stato aggregato risultante",
      "Un file statico salvato su disco una volta sola",
      "Un grafico che mostra l'andamento degli eventi",
      "Un database relazionale interrogabile con SQL"
    ],
    correct: [0],
    exp: "La dualità stream-tabella: uno stream è un log di cambiamenti; applicandolo si ottiene lo stato corrente (tabella). ksqlDB e Kafka Streams sfruttano questo concetto per le aggregazioni."
  },
  {
    id: "u15046", topic: "Commit offset",
    q: "Quando un consumer 'committa' l'offset:",
    opts: [
      "Registra fin dove ha letto, così può riprendere da lì dopo un riavvio",
      "Cancella i messaggi già letti dalla partizione",
      "Crea un nuovo topic con i messaggi elaborati",
      "Cifra i messaggi letti prima di elaborarli"
    ],
    correct: [0],
    exp: "Il commit dell'offset salva la posizione raggiunta. In caso di riavvio o rebalance, il consumer riparte dall'ultimo offset committato, evitando di rileggere o saltare messaggi."
  },
  {
    id: "u15047", topic: "Rebalance",
    q: "Un 'rebalance' in un consumer group avviene quando:",
    opts: [
      "Le partizioni vengono ridistribuite tra i consumer (es. uno entra o esce)",
      "I messaggi del topic vengono automaticamente cifrati",
      "Viene creato un nuovo topic con più partizioni",
      "Il cluster cancella i dati per liberare spazio"
    ],
    correct: [0],
    exp: "Il rebalance riassegna le partizioni ai consumer del gruppo quando cambia la loro composizione (aggiunta/rimozione/crash), mantenendo il bilanciamento del carico."
  },
  {
    id: "u15048", topic: "Formati efficienti",
    q: "Nello streaming si preferiscono formati come Avro/Protobuf a JSON perché:",
    opts: [
      "Sono più compatti ed efficienti e supportano gli schemi",
      "JSON è sempre più veloce anche senza schema e serializzazione compatta",
      "Non definiscono uno schema dei messaggi e dei tipi",
      "Occupano più spazio anche con codifica binaria compatta"
    ],
    correct: [0],
    exp: "Avro e Protobuf serializzano in binario compatto con schema definito: minor banda, parsing veloce e controllo di compatibilità. JSON è leggibile ma più verboso e senza schema forte."
  },
  {
    id: "u15049", topic: "Manutenzione predittiva",
    q: "Analizzare in streaming i dati dei sensori permette la manutenzione predittiva, cioè:",
    opts: [
      "Prevedere i guasti prima che accadano intervenendo per tempo",
      "Riparare i macchinari solo dopo che si sono guastati",
      "Ignorare i dati dei sensori considerandoli irrilevanti",
      "Cifrare le misure trasmesse dai macchinari"
    ],
    correct: [0],
    exp: "Elaborando la telemetria in tempo reale si individuano segnali di anomalia (vibrazioni, temperature) che anticipano i guasti, permettendo interventi programmati e riducendo i fermi macchina."
  },
  {
    id: "u15050", topic: "Durabilità",
    q: "La durabilità dei dati in Kafka è garantita da:",
    opts: [
      "La scrittura su disco e la replica su più broker",
      "La sola memoria volatile degli executor",
      "L'assenza di qualsiasi meccanismo di persistenza",
      "La cifratura obbligatoria di tutti i messaggi"
    ],
    correct: [0],
    exp: "Kafka persiste i messaggi su disco e li replica su più broker: anche in caso di guasto di un nodo i dati non si perdono, purché il replication factor sia adeguato."
  },
  {
    id: "u15051", topic: "Producer ack",
    q: "Il parametro 'acks' di un producer Kafka controlla:",
    opts: [
      "Quante conferme di scrittura attendere (durabilità vs latenza)",
      "Il numero di partizioni assegnate a ciascun topic",
      "La priorità con cui i messaggi vengono consegnati",
      "L'algoritmo di cifratura applicato ai messaggi"
    ],
    correct: [0],
    exp: "acks=0 non attende conferme (veloce, rischioso), acks=1 attende il leader, acks=all attende tutte le repliche in-sync (massima durabilità, più latenza). Bilancia sicurezza e velocità."
  },
  {
    id: "u15052", topic: "Stream join",
    q: "Fare il join tra due stream serve a:",
    opts: [
      "Correlare in tempo reale eventi provenienti da flussi diversi",
      "Cancellare uno dei due stream per liberare risorse",
      "Cifrare i dati scambiati tra i due flussi",
      "Creare automaticamente un nuovo topic combinato"
    ],
    correct: [0],
    exp: "Il join di stream unisce eventi correlati (es. click e acquisti) entro una finestra temporale, arricchendo i dati in tempo reale. Richiede gestione dello stato e delle finestre."
  },
  {
    id: "u15053", topic: "Ingestione IoT",
    q: "Un flusso tipico di dati IoT è:",
    opts: [
      "Dispositivo → gateway/broker → stream processing → storage/dashboard",
      "Dispositivo → stream processing → gateway/broker → storage/dashboard",
      "Gateway/broker → dispositivo → stream processing → storage/dashboard",
      "Storage/dashboard → dispositivo → gateway/broker → stream processing"
    ],
    correct: [0],
    exp: "I dati vanno dai dispositivi (via MQTT/gateway) a un broker (Kafka), vengono elaborati in streaming (filtri, aggregazioni, allarmi) e poi archiviati e visualizzati in dashboard."
  },
  {
    id: "u15054", topic: "Compressione",
    q: "Comprimere i messaggi Kafka (es. snappy, gzip) serve a:",
    opts: [
      "Ridurre banda e spazio a costo di un po' di CPU",
      "Aumentare la dimensione dei messaggi per sicurezza",
      "Cifrare i messaggi rendendoli illeggibili",
      "Cancellare i topic più grandi per liberare spazio"
    ],
    correct: [0],
    exp: "La compressione riduce la quantità di dati trasmessi e memorizzati, aumentando il throughput effettivo. Costa un po' di CPU per comprimere/decomprimere: quasi sempre conveniente su grandi volumi."
  },
  {
    id: "u15055", topic: "Idempotenza consumer",
    q: "Con garanzia at-least-once, il consumer dovrebbe essere:",
    opts: [
      "Idempotente, per gestire correttamente eventuali messaggi duplicati",
      "Sempre più veloce indipendentemente da stato e duplicati",
      "Necessariamente stateless anche quando deve deduplicare",
      "Indifferente ai duplicati anche con consegna at-least-once"
    ],
    correct: [0],
    exp: "Poiché at-least-once può consegnare duplicati, il consumer deve elaborarli in modo idempotente (es. deduplicare per id) così che un doppione non alteri il risultato finale."
  },
  {
    id: "u15056", topic: "Zookeeper/KRaft",
    q: "In Kafka, la gestione dei metadati del cluster è affidata storicamente a:",
    opts: [
      "ZooKeeper (sostituito nelle versioni recenti da KRaft)",
      "Un foglio di calcolo condiviso tra i broker",
      "Il singolo producer che pubblica i messaggi",
      "Il consumer group attivo sul topic principale"
    ],
    correct: [0],
    exp: "ZooKeeper coordinava i metadati e l'elezione dei leader del cluster Kafka. Le versioni recenti usano KRaft (Kafka Raft), integrando la gestione dei metadati in Kafka stesso."
  },
  {
    id: "u15057", topic: "Micro-batch",
    q: "L'elaborazione a 'micro-batch' (es. Spark Structured Streaming):",
    opts: [
      "Processa lo stream in piccoli lotti frequenti, compromesso tra batch e streaming puro",
      "È identica a un batch giornaliero con una sola esecuzione",
      "Non elabora eventi o record, limitandosi a conservarli in ingresso",
      "Funziona solo su colonne testuali e non su dati tabellari generali"
    ],
    correct: [0],
    exp: "Il micro-batch raccoglie gli eventi in piccoli intervalli (es. ogni secondo) e li elabora a lotti: latenza bassa (anche se non evento-per-evento) e riuso dell'infrastruttura batch."
  },
  {
    id: "u15058", topic: "Sicurezza streaming",
    q: "Proteggere un cluster Kafka include: (una o più risposte)",
    opts: [
      "Autenticazione dei client",
      "Cifratura in transito (TLS)",
      "Autorizzazioni (ACL) sui topic",
      "Lasciare tutto aperto senza controlli"
    ],
    correct: [0,1,2],
    exp: "La sicurezza di Kafka comprende autenticazione (SASL), cifratura TLS del traffico e ACL per controllare chi legge/scrive sui topic. Lasciare il cluster aperto è una grave vulnerabilità."
  },
  {
    id: "u15059", topic: "Evoluzione schema",
    q: "Una modifica di schema 'compatibile all'indietro' (backward compatible) permette:",
    opts: [
      "Ai nuovi consumer di leggere anche i dati prodotti con lo schema vecchio",
      "Di interrompere il funzionamento di tutti i consumer esistenti",
      "Di cancellare i topic che usano lo schema precedente",
      "Di cifrare i messaggi prodotti con il vecchio schema"
    ],
    correct: [0],
    exp: "La compatibilità all'indietro fa sì che il nuovo schema possa leggere i dati vecchi (es. aggiungendo campi con default): permette di evolvere senza interrompere i consumatori esistenti."
  },
  {
    id: "u15060", topic: "Real-time analytics",
    q: "L'analisi in tempo reale (real-time analytics) sui flussi serve a:",
    opts: [
      "Reagire immediatamente a eventi (frodi, allarmi, personalizzazione)",
      "Analizzare soltanto dati raccolti mesi prima",
      "Salvare eventi grezzi senza trasformazioni né controlli di qualità",
      "Sostituire completamente il data warehouse aziendale"
    ],
    correct: [0],
    exp: "Analizzare gli eventi appena accadono permette azioni immediate: bloccare una frode, allertare su un guasto, personalizzare l'esperienza. È il valore chiave dello streaming rispetto al batch."
  },
  {
    id: "u15061", topic: "Buffer",
    q: "Un buffer in un sistema di streaming serve a:",
    opts: [
      "Assorbire temporaneamente i picchi di dati tra produttori e consumatori",
      "Cancellare i dati non appena vengono prodotti",
      "Cifrare i messaggi prima di consegnarli",
      "Creare i grafici di monitoraggio del flusso"
    ],
    correct: [0],
    exp: "Il buffer immagazzina temporaneamente i dati quando arrivano più velocemente di quanto vengano consumati, smussando i picchi ed evitando perdite o sovraccarichi improvvisi."
  },
  {
    id: "u15062", topic: "Tumbling window",
    q: "Una 'tumbling window' è:",
    opts: [
      "Una finestra a intervalli fissi non sovrapposti (es. ogni 5 minuti)",
      "Una finestra sliding che avanza sovrapponendosi alle precedenti",
      "Una finestra senza limite temporale di chiusura",
      "Nessun raggruppamento temporale degli eventi"
    ],
    correct: [0],
    exp: "La tumbling window divide il tempo in blocchi fissi e non sovrapposti: ogni evento appartiene a una sola finestra. Es: conteggio eventi ogni 5 minuti esatti."
  },
  {
    id: "u15063", topic: "Sliding window",
    q: "Una 'sliding window' differisce dalla tumbling perché:",
    opts: [
      "Le finestre si sovrappongono, scorrendo di un passo",
      "Non ha alcuna durata temporale definita",
      "È sempre molto più lunga di una tumbling window",
      "Non calcola alcuna aggregazione sugli eventi"
    ],
    correct: [0],
    exp: "La sliding window scorre di un intervallo (es. finestra di 5 min ogni 1 min): le finestre si sovrappongono e uno stesso evento può ricadere in più finestre, dando aggregazioni più fluide."
  },
  {
    id: "u15064", topic: "Consumatori indipendenti",
    q: "Due consumer group diversi che leggono lo stesso topic:",
    opts: [
      "Ricevono entrambi tutti i messaggi, in modo indipendente",
      "Si dividono i messaggi tra loro",
      "Cancellano i messaggi",
      "Non possono coesistere"
    ],
    correct: [0],
    exp: "Ogni consumer group ha i propri offset: gruppi diversi ricevono tutti i messaggi indipendentemente (es. uno per analytics, uno per allarmi). Dentro un gruppo, invece, le partizioni si dividono."
  },
  {
    id: "u15065", topic: "Protocollo leggero",
    q: "Perché MQTT è preferito a HTTP per molti dispositivi IoT?",
    opts: [
      "È più leggero, efficiente su reti instabili e adatto a molti dispositivi",
      "È più pesante di HTTP perché mantiene più stato applicativo",
      "Non supporta il modello publish/subscribe tra client e broker",
      "Richiede più banda e connessioni più costose per i dispositivi"
    ],
    correct: [0],
    exp: "MQTT ha overhead minimo, mantiene connessioni persistenti, gestisce reti instabili e il modello pub/sub scala bene con tanti dispositivi: ideale per l'IoT rispetto al più pesante HTTP request/response."
  },
  {
    id: "u15066", topic: "Checkpoint",
    q: "I checkpoint nello stream processing stateful servono a:",
    opts: [
      "Salvare periodicamente lo stato per riprendere dopo un guasto senza perdite",
      "Cancellare lo stato accumulato per liberare memoria",
      "Proteggere il traffico di rete tra nodi senza salvare stato elaborativo",
      "Creare i grafici di monitoraggio dell'elaborazione"
    ],
    correct: [0],
    exp: "I checkpoint persistono lo stato dell'elaborazione a intervalli: se il sistema cade, riparte dall'ultimo checkpoint, garantendo tolleranza ai guasti e semantiche di consegna forti."
  },
  {
    id: "u15067", topic: "Data in movimento vs a riposo",
    q: "Lo streaming lavora sui dati 'in movimento', a differenza del data warehouse che lavora su dati:",
    opts: [
      "A riposo (già memorizzati)",
      "Anch'essi in continuo movimento",
      "Che non esistono ancora nel sistema",
      "Disponibili solo in forma cifrata"
    ],
    correct: [0],
    exp: "Lo streaming elabora i dati mentre fluiscono (in movimento); il data warehouse analizza dati già archiviati (a riposo). Molte architetture combinano entrambi gli approcci."
  },
  {
    id: "u15068", topic: "Fan-out",
    q: "Il 'fan-out' in un sistema pub/sub indica:",
    opts: [
      "Un evento distribuito a molti consumatori interessati",
      "Un evento consegnato a un solo destinatario fisso",
      "La cancellazione periodica degli eventi vecchi",
      "La cifratura degli eventi prima della consegna"
    ],
    correct: [0],
    exp: "Il fan-out è la capacità di consegnare lo stesso evento a molti subscriber: un produttore, molti consumatori. Kafka lo realizza con più consumer group sullo stesso topic."
  },
  {
    id: "u15069", topic: "Lag del consumer",
    q: "Il 'consumer lag' misura:",
    opts: [
      "Quanto un consumer è indietro rispetto agli ultimi messaggi prodotti",
      "La prestazione hardware della macchina che esegue il processo",
      "Il numero di argomenti latenti scelti per il modello topic",
      "La dimensione dei messaggi"
    ],
    correct: [0],
    exp: "Il lag è la differenza tra l'offset più recente e quello letto dal consumer: un lag crescente indica che il consumer non tiene il passo e potrebbe servire scalarlo o ottimizzarlo."
  },
  {
    id: "u15070", topic: "Architettura event-driven",
    q: "In un'architettura event-driven i servizi comunicano:",
    opts: [
      "Tramite eventi (messaggi) invece di chiamate dirette sincrone",
      "Solo tramite chiamate sincrone dirette tra servizi",
      "Senza scambio di messaggi o dati tra componenti",
      "Solo tramite email invece di eventi applicativi"
    ],
    correct: [0],
    exp: "Nell'event-driven i componenti emettono e reagiscono a eventi tramite un broker, restando disaccoppiati: più scalabile e resiliente delle chiamate sincrone punto a punto."
  },
  {
    id: "u15071", topic: "IoT scala",
    q: "Una sfida tipica dell'IoT su larga scala è:",
    opts: [
      "Gestire enormi volumi di dati da moltissimi dispositivi in modo affidabile",
      "Avere pochi dati da pochi dispositivi, problema opposto alla scala",
      "Assenza di sensori da cui raccogliere eventi",
      "Assenza totale di connettività, non gestione su larga scala"
    ],
    correct: [0],
    exp: "Milioni di dispositivi generano flussi enormi e continui: servono architetture scalabili (broker, streaming), gestione della connettività intermittente, sicurezza e storage adeguato."
  },
  {
    id: "u15072", topic: "Stream to storage",
    q: "Archiviare gli stream in un data lake serve a:",
    opts: [
      "Conservare lo storico degli eventi per analisi successive (batch)",
      "Cancellare gli eventi subito dopo l'elaborazione",
      "Impedire qualsiasi analisi successiva dei dati",
      "Cifrare i broker che gestiscono lo stream"
    ],
    correct: [0],
    exp: "Oltre all'elaborazione in tempo reale, gli eventi vengono spesso salvati (sink verso data lake/warehouse) per analisi storiche, addestramento di modelli e conformità."
  },
  {
    id: "u15073", topic: "QoS MQTT",
    q: "I livelli di QoS in MQTT definiscono:",
    opts: [
      "Le garanzie di consegna dei messaggi (0, 1, 2)",
      "Il colore con cui rappresentare i messaggi",
      "La priorità di cifratura dei singoli messaggi",
      "Il numero massimo di topic per dispositivo"
    ],
    correct: [0],
    exp: "MQTT offre QoS 0 (at-most-once), 1 (at-least-once) e 2 (exactly-once): si sceglie in base al bilanciamento tra affidabilità richiesta e overhead sulla rete."
  },
  {
    id: "u15074", topic: "Digital twin",
    q: "Un 'digital twin' nell'IoT è:",
    opts: [
      "Una replica virtuale di un dispositivo/sistema fisico aggiornata dai dati reali",
      "Una copia di backup del database dei sensori",
      "Un grafico che mostra i dati del dispositivo",
      "Un tipo di sensore che raddoppia le misure"
    ],
    correct: [0],
    exp: "Il digital twin è un modello digitale che rispecchia lo stato di un oggetto fisico grazie alla telemetria in tempo reale: permette simulazioni, monitoraggio e ottimizzazione."
  },
  {
    id: "u15075", topic: "Kafka Streams",
    q: "Kafka Streams è:",
    opts: [
      "Una libreria per elaborare stream direttamente nelle applicazioni Java/Scala",
      "Un database relazionale interrogabile con SQL",
      "Un foglio di calcolo usato per dati tabellari manuali",
      "Un protocollo di messaggistica usato dai dispositivi IoT"
    ],
    correct: [0],
    exp: "Kafka Streams permette di costruire applicazioni di stream processing (trasformazioni, aggregazioni, join stateful) integrate nell'app, consumando e producendo su Kafka, senza un cluster separato."
  },
  {
    id: "u15076", topic: "Watermark",
    q: "Un watermark nello stream processing indica:",
    opts: [
      "Fino a quale event time si considerano arrivati (quasi) tutti gli eventi",
      "L'algoritmo di cifratura applicato agli eventi",
      "Il numero di partizioni assegnate al topic",
      "Il colore usato per rappresentare gli eventi in ritardo"
    ],
    correct: [0],
    exp: "Il watermark è una stima del progresso dell'event time: segnala che gli eventi fino a quel momento sono probabilmente tutti arrivati, permettendo di chiudere le finestre e gestire i ritardatari."
  },
  {
    id: "u15077", topic: "Real-time vs near-real-time",
    q: "'near-real-time' significa:",
    opts: [
      "Con un piccolo ritardo (secondi), non istantaneo al millisecondo",
      "Esattamente in tempo reale al microsecondo",
      "Con un ritardo di diversi giorni sui dati",
      "Senza alcun dato disponibile all'elaborazione"
    ],
    correct: [0],
    exp: "Near-real-time indica elaborazione con latenza bassa ma non nulla (secondi): sufficiente per molti casi d'uso (dashboard, allarmi) senza la complessità del vero tempo reale sub-millisecondo."
  },
  {
    id: "u15078", topic: "Sink connector",
    q: "Un sink connector (Kafka Connect) serve a:",
    opts: [
      "Esportare i dati da Kafka verso un sistema esterno (es. database, S3)",
      "Importare dati da una sorgente esterna dentro Kafka",
      "Cancellare i topic non più utilizzati dal cluster",
      "Cifrare i broker prima di renderli disponibili"
    ],
    correct: [0],
    exp: "Il sink connector scrive i messaggi di un topic Kafka verso una destinazione esterna (data warehouse, storage, indice di ricerca). Il source connector fa l'opposto (importa in Kafka)."
  },
  {
    id: "u15079", topic: "Deduplicazione stream",
    q: "Deduplicare in uno stream serve a:",
    opts: [
      "Evitare di elaborare più volte lo stesso evento (es. con at-least-once)",
      "Duplicare volutamente gli eventi per ridondanza",
      "Cifrare gli eventi prima di elaborarli",
      "Cancellare l'intero topic in caso di duplicati"
    ],
    correct: [0],
    exp: "Con garanzie at-least-once possono arrivare duplicati: deduplicare per identificatore univoco entro una finestra assicura che ogni evento sia conteggiato/elaborato una sola volta."
  },
  {
    id: "u15080", topic: "Partition key skew",
    q: "Se molti messaggi hanno la stessa chiave, si rischia:",
    opts: [
      "Uno squilibrio (skew): una partizione sovraccarica e le altre scariche",
      "Un perfetto bilanciamento del carico tra le partizioni",
      "La perdita di tutti i messaggi con quella chiave",
      "La cifratura automatica dei messaggi ripetuti"
    ],
    correct: [0],
    exp: "Poiché la chiave determina la partizione, chiavi molto frequenti concentrano il carico su poche partizioni (data skew), limitando il parallelismo. Va scelta una chiave con buona distribuzione."
  },
  {
    id: "u15081", topic: "Retention vs coda",
    q: "Grazie alla retention, in Kafka un nuovo consumer può:",
    opts: [
      "Leggere anche messaggi passati (entro il periodo di retention)",
      "Leggere solo messaggi prodotti dopo l'avvio del consumer",
      "Non leggere messaggi anche se il topic conserva retention",
      "Cancellare i vecchi messaggi invece di recuperarli"
    ],
    correct: [0],
    exp: "Poiché Kafka conserva i messaggi, un consumer che parte da zero può rileggere lo storico disponibile (fino alla retention), a differenza di una coda che li rimuove dopo la consegna."
  },
  {
    id: "u15082", topic: "Elaborazione continua",
    q: "Uno stream è concettualmente:",
    opts: [
      "Un flusso di dati potenzialmente infinito e senza fine predefinita",
      "Un dataset finito e statico salvato su disco",
      "Un singolo valore restituito da una query",
      "Un grafico che rappresenta l'andamento dei dati"
    ],
    correct: [0],
    exp: "Lo stream è unbounded (illimitato): i dati arrivano di continuo senza un 'ultimo record'. Questo richiede tecniche diverse dal batch (finestre, stato, watermark) per aggregare e analizzare."
  },
  {
    id: "u15083", topic: "Osservabilità streaming",
    q: "Monitorare consumer lag e throughput in Kafka serve a:",
    opts: [
      "Accorgersi se il sistema non regge il carico e intervenire",
      "Cifrare i messaggi che transitano nei topic",
      "Creare le dashboard di business intelligence",
      "Assegnare le partizioni ai consumer del gruppo"
    ],
    correct: [0],
    exp: "Metriche come lag, throughput e tassi di errore rivelano se i consumer stanno al passo e se il cluster è sano, permettendo di scalare o ottimizzare prima che si accumulino ritardi."
  },
  {
    id: "u15084", topic: "Serializzazione",
    q: "La serializzazione di un messaggio consiste nel:",
    opts: [
      "Convertire i dati in un formato di byte per la trasmissione",
      "Cifrare i dati prima di inviarli sul topic",
      "Cancellare i dati dopo averli trasmessi",
      "Colorare i dati per distinguerne il tipo"
    ],
    correct: [0],
    exp: "Serializzare trasforma gli oggetti in byte per inviarli su Kafka; il consumer li deserializza per riottenere i dati. Formati comuni: Avro, Protobuf, JSON. Lo schema garantisce coerenza."
  },
  {
    id: "u15085", topic: "Alta disponibilità",
    q: "L'alta disponibilità di Kafka si basa su:",
    opts: [
      "Cluster di più broker con partizioni replicate e failover automatico",
      "Un singolo broker che gestisce tutte le partizioni",
      "L'assenza totale di repliche per risparmiare spazio",
      "La cifratura di tutti i messaggi del cluster"
    ],
    correct: [0],
    exp: "Distribuendo le partizioni con repliche su più broker, se un nodo cade un altro assume la leadership della partizione: il servizio continua senza perdita di dati (con replication factor adeguato)."
  },
  {
    id: "u15086", topic: "Comando e telemetria",
    q: "Nell'IoT, oltre alla telemetria (dal dispositivo), i comandi vanno:",
    opts: [
      "Dal sistema centrale verso i dispositivi (per controllarli)",
      "Solo direttamente da un dispositivo all'altro",
      "Non vengono mai inviati ai dispositivi",
      "Esclusivamente in forma cifrata e mai in chiaro"
    ],
    correct: [0],
    exp: "La comunicazione IoT è bidirezionale: i dispositivi inviano telemetria e ricevono comandi (es. spegni, aggiorna soglia) dal sistema centrale, spesso tramite topic dedicati."
  },
  {
    id: "u15087", topic: "Processamento vicino alla fonte",
    q: "Filtrare/aggregare i dati IoT sull'edge prima di inviarli serve a:",
    opts: [
      "Ridurre il volume trasmesso e la latenza verso il cloud",
      "Aumentare la banda usata verso il cloud centrale",
      "Cifrare tutti i dati prima di scartarli",
      "Cancellare i dati utili raccolti dai sensori"
    ],
    correct: [0],
    exp: "Elaborare sull'edge (filtrare, aggregare, rilevare eventi) invia al cloud solo ciò che conta, riducendo banda, costi e latenza, utile quando i sensori generano enormi volumi grezzi."
  },
  {
    id: "u15088", topic: "Ordinamento globale",
    q: "Per garantire l'ordine totale di TUTTI i messaggi di un topic Kafka bisognerebbe:",
    opts: [
      "Usare una sola partizione (limitando però il parallelismo)",
      "Usare il maggior numero possibile di partizioni",
      "Cifrare tutti i messaggi del topic",
      "Aumentare il numero di broker del cluster"
    ],
    correct: [0],
    exp: "L'ordine è garantito solo dentro una partizione: con una sola partizione si ha ordine totale ma nessun parallelismo. È un compromesso tra ordinamento globale e scalabilità."
  },
  {
    id: "u15089", topic: "Time to insight",
    q: "Il vantaggio dello streaming per il business è ridurre il 'time to insight', cioè:",
    opts: [
      "Il tempo tra il verificarsi di un evento e la possibilità di agire su di esso",
      "Il numero di visualizzazioni presenti nel report o nella dashboard",
      "La dimensione dei dati",
      "Il costo del server"
    ],
    correct: [0],
    exp: "Elaborando in tempo reale, si accorcia l'intervallo tra evento e decisione/azione: fondamentale per casi come rilevamento frodi, allarmi e personalizzazione immediata."
  },
  {
    id: "u15090", topic: "Kafka come hub",
    q: "Kafka viene spesso usato come 'hub centrale' dei dati perché:",
    opts: [
      "Disaccoppia le sorgenti dai consumatori integrando molti sistemi in tempo reale",
      "È un database relazionale usato per query transazionali SQL",
      "Sostituisce i dispositivi di acquisizione invece di trasportare eventi",
      "Elimina i dati sorgente invece di conservarli o trasformarli"
    ],
    correct: [0],
    exp: "Kafka fa da spina dorsale: le sorgenti pubblicano una volta e molti sistemi (analytics, microservizi, DW) consumano indipendentemente, riducendo integrazioni punto-a-punto fragili."
  },
  {
    id: "u15091", topic: "Rilevamento anomalie realtime",
    q: "Rilevare anomalie in streaming permette di:",
    opts: [
      "Segnalare comportamenti insoliti nel momento in cui accadono",
      "Analizzare soltanto dati raccolti anni prima",
      "Cancellare i dati anomali senza elaborarli",
      "Cifrare gli eventi sospetti prima di scartarli"
    ],
    correct: [0],
    exp: "Applicare regole o modelli sugli stream individua subito valori anomali (picchi, frodi, guasti) al loro verificarsi, permettendo allarmi e interventi immediati anziché scoperte tardive."
  },
  {
    id: "u15092", topic: "Message key vs value",
    q: "In un record Kafka, il 'value' contiene:",
    opts: [
      "Il contenuto/payload principale del messaggio",
      "La partizione a cui il messaggio è destinato",
      "L'offset del messaggio nella partizione",
      "Il nome del broker che lo ha ricevuto"
    ],
    correct: [0],
    exp: "Il record ha una chiave (opzionale, per il partizionamento/ordinamento) e un value (il payload dei dati), oltre a timestamp e metadati. Il value è l'informazione vera e propria trasmessa."
  },
  {
    id: "u15093", topic: "Scalare consumatori",
    q: "Per elaborare più velocemente un topic molto trafficato si può:",
    opts: [
      "Aumentare partizioni e consumer nel gruppo",
      "Ridurre il numero di partizioni del topic",
      "Usare un solo consumer per tutto il topic",
      "Cifrare i messaggi per elaborarli più in fretta"
    ],
    correct: [0],
    exp: "Più partizioni permettono a più consumer del gruppo di lavorare in parallelo, aumentando la capacità di elaborazione complessiva del topic ad alto traffico."
  },
  {
    id: "u15094", topic: "Streaming ETL",
    q: "Lo 'streaming ETL' consiste nel:",
    opts: [
      "Estrarre, trasformare e caricare i dati in continuo, non a batch",
      "Elaborare i dati una sola volta all'anno",
      "Caricare i dati senza applicare alcuna trasformazione",
      "Salvare eventi grezzi senza trasformazioni né controlli di qualità"
    ],
    correct: [0],
    exp: "Nello streaming ETL le trasformazioni (pulizia, arricchimento, aggregazione) avvengono sul flusso in tempo reale mentre i dati transitano, alimentando destinazioni sempre aggiornate."
  },
  {
    id: "u15095", topic: "Contratti tra servizi",
    q: "Lo schema di un topic funge da 'contratto' perché:",
    opts: [
      "Definisce la struttura attesa dei messaggi tra produttori e consumatori",
      "Cifra i messaggi scambiati tra i due sistemi",
      "Cancella i messaggi che non rispettano il formato",
      "Colora i topic per distinguerli tra loro"
    ],
    correct: [0],
    exp: "Lo schema (gestito dallo Schema Registry) stabilisce il formato dei messaggi: producer e consumer vi si conformano, e le evoluzioni sono controllate per compatibilità, evitando rotture."
  },
  {
    id: "u15096", topic: "Buffer di rete instabile",
    q: "In ambienti IoT con connettività intermittente, i dispositivi spesso:",
    opts: [
      "Bufferizzano localmente i dati e li inviano quando la connessione torna",
      "Cancellano immediatamente i dati che non riescono a inviare",
      "Ignorano del tutto lo stato della connessione",
      "Cifrano ogni dato prima di scartarlo definitivamente"
    ],
    correct: [0],
    exp: "Con reti instabili, i dispositivi/gateway memorizzano localmente la telemetria (store-and-forward) e la trasmettono al ripristino della connessione, evitando perdite di dati."
  },
  {
    id: "u15097", topic: "Latenza end-to-end",
    q: "La latenza end-to-end in una pipeline di streaming è:",
    opts: [
      "Il tempo totale dall'evento sorgente al risultato finale utilizzabile",
      "Solo il tempo di trasporto in rete, escludendo elaborazione e sink",
      "Solo il tempo di calcolo locale, ignorando acquisizione e trasporto",
      "Il numero totale di eventi processati, non il tempo end-to-end"
    ],
    correct: [0],
    exp: "La latenza end-to-end somma i ritardi di tutte le fasi (ingestione, broker, elaborazione, scrittura): è ciò che percepisce l'utente/sistema finale e va ottimizzata secondo i requisiti."
  },
  {
    id: "u15098", topic: "Replay",
    q: "Il 'replay' degli eventi in Kafka consente di:",
    opts: [
      "Rileggere lo storico per rielaborare i dati (es. dopo un bug corretto)",
      "Cancellare in modo permanente gli eventi passati",
      "Cifrare gli eventi già consegnati ai consumer",
      "Colorare gli eventi in base al loro tipo"
    ],
    correct: [0],
    exp: "Poiché Kafka conserva il log, si può riportare un consumer a un offset passato e rielaborare gli eventi: utile per correggere errori, testare nuova logica o ricostruire uno stato."
  },
  {
    id: "u15099", topic: "Idempotenza a valle",
    q: "Scrivere i risultati dello stream in un database in modo idempotente serve a:",
    opts: [
      "Evitare duplicati o incoerenze in caso di rielaborazione/retry",
      "Rendere più lente le scritture verso il database",
      "Ridurre lo spazio occupato dai risultati salvati",
      "Impedire ad altri sistemi di leggere i risultati"
    ],
    correct: [0],
    exp: "Se lo stream può rielaborare eventi (retry, replay), scrivere a valle in modo idempotente (upsert per chiave) garantisce che il risultato resti corretto senza accumulare duplicati."
  },
  {
    id: "u15100", topic: "Architettura streaming",
    q: "Un'architettura di streaming tipica comprende:",
    opts: [
      "Sorgenti/sensori → broker (Kafka) → stream processing → storage e dashboard",
      "Sorgenti/sensori → stream processing → broker (Kafka) → storage e dashboard",
      "Broker (Kafka) → sorgenti/sensori → stream processing → storage e dashboard",
      "Storage e dashboard → sorgenti/sensori → broker (Kafka) → stream processing"
    ],
    correct: [0],
    exp: "Il pattern: le sorgenti (dispositivi, app, CDC) pubblicano su Kafka; motori di stream processing trasformano e aggregano in tempo reale; i risultati vanno a storage, dashboard o sistemi che reagiscono."
  },
  // === AGGIUNGI NUOVE DOMANDE IOT E STREAMING QUI ===
]);
