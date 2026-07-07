/* ============================================================
   MATERIA: SQL  —  banca domande
   Ogni oggetto: { id, topic, q, opts:[...], correct:[indici], exp }
   correct e SEMPRE un array: >1 elemento = domanda a risposta multipla.
   Per aggiungere domande: copia un blocco prima del marcatore in fondo.
   ============================================================ */
registerSubject("SQL", [
  {
    id: "sql001", topic: "Concetti di base",
    q: "Che cos'è un database?",
    opts: [
      "Una collezione di dati organizzata, aggiornabile, interrogabile e gestibile",
      "Il software che permette di creare, gestire e interrogare i dati archiviati",
      "Un linguaggio dichiarativo usato per interrogare e modificare i dati",
      "Il dispositivo hardware su cui vengono fisicamente memorizzati i dati"
    ],
    correct: [0],
    exp: "Un database è una raccolta ORGANIZZATA di dati (aggiornabile, interrogabile, gestibile). Il DBMS è invece il SOFTWARE che gestisce quei dati: sono due cose distinte."
  },
  {
    id: "sql002", topic: "Concetti di base",
    q: "Qual è la differenza tra Database e DBMS?",
    opts: [
      "Il database è l'insieme dei dati; il DBMS è il software che li gestisce",
      "Il DBMS è l'insieme dei dati, mentre il database è il software che li gestisce",
      "Sono sinonimi: due termini intercambiabili per indicare lo stesso concetto",
      "Il DBMS è semplicemente un particolare tipo di database di grandi dimensioni"
    ],
    correct: [0],
    exp: "Il database è l'insieme dei DATI; il DBMS (Database Management System) è il SOFTWARE che li gestisce. Analogia della slide: è la stessa differenza tra Microsoft Word (il DBMS) e i file .docx (i dati/database)."
  },
  {
    id: "sql003", topic: "Architettura DBMS",
    q: "Che tipo di architettura hanno tipicamente i DBMS relazionali?",
    opts: [
      "Peer-to-peer",
      "Client/Server",
      "Monolitica a singolo utente",
      "Seriale"
    ],
    correct: [1],
    exp: "I DBMS hanno tipicamente un'architettura CLIENT/SERVER: il client (es. Workbench, uno script Python) invia richieste SQL; il server elabora e gestisce i dati, restituendo i risultati."
  },
  {
    id: "sql004", topic: "Modello E-R",
    q: "Chi ha formalizzato il modello Entità-Relazione (E-R) e in che anno?",
    opts: [
      "Edgar Codd, 1970",
      "Peter Chen, 1976",
      "Guido van Rossum, 1991",
      "Tim Berners-Lee, 1989"
    ],
    correct: [1],
    exp: "Il modello E-R è stato formalizzato da Peter Chen nel 1976. Nonostante l'età, è ancora oggi il sistema più usato per progettare la struttura concettuale di un database."
  },
  {
    id: "sql005", topic: "Modello E-R",
    q: "Quali sono i costrutti principali del modello E-R? (una o più risposte)",
    opts: [
      "Entità",
      "Relazioni",
      "Attributi",
      "Funzioni"
    ],
    correct: [0,1,2],
    exp: "Il modello E-R descrive la realtà con tre costrutti: Entità (oggetti/tabelle), Relazioni (collegamenti tra entità) e Attributi (proprietà elementari di entità e relazioni)."
  },
  {
    id: "sql006", topic: "Modello E-R",
    q: "Nel diagramma E-R, come si rappresentano graficamente entità, relazioni e attributi?",
    opts: [
      "Entità = rettangoli, Relazioni = rombi, Attributi = ovali",
      "Entità = cerchi, Relazioni = quadrati, Attributi = triangoli",
      "Entità = rombi, Relazioni = rettangoli, Attributi = linee",
      "Sono tutti rappresentati con rettangoli"
    ],
    correct: [0],
    exp: "Nel diagramma E-R: le ENTITÀ sono rettangoli, le RELAZIONI sono rombi (rombi/diamanti), gli ATTRIBUTI sono ovali (ellissi). È lo schema visuale standard."
  },
  {
    id: "sql007", topic: "Modello E-R",
    q: "Cos'è un'entità nel modello E-R?",
    opts: [
      "Un oggetto (tipicamente una tabella) che raccoglie dati con proprietà comuni, es. i clienti",
      "Un collegamento logico che mette in relazione due o più tabelle all'interno del database",
      "Una singola proprietà elementare di una tabella, come il nome o la data di nascita",
      "Un tipo di dato numerico usato per identificare in modo univoco le righe di una tabella"
    ],
    correct: [0],
    exp: "Un'entità è un oggetto/tabella che raccoglie dati con proprietà comuni (es. i 'clienti' con indirizzo, P.IVA, recapiti). Le relazioni collegano le entità; gli attributi sono le loro proprietà."
  },
  {
    id: "sql008", topic: "Modelli di dati",
    q: "Quali sono i modelli logici di database citati nel corso? (una o più risposte)",
    opts: [
      "Gerarchico (struttura ad albero)",
      "Reticolare (struttura a grafo)",
      "Relazionale (struttura a tabelle)",
      "Sequenziale (struttura a nastro)"
    ],
    correct: [0,1,2],
    exp: "I tre modelli LOGICI sono: Gerarchico (dati ad albero), Reticolare (dati a grafo) e Relazionale (dati in tabelle, il più diffuso). Il modello concettuale è invece l'E-R/UML/ORM."
  },
  {
    id: "sql009", topic: "Modelli di dati",
    q: "Cosa rappresenta il modello FISICO di un database?",
    opts: [
      "Il database già assemblato con tabelle, campi e relazioni, che opera fisicamente su disco",
      "Lo schema concettuale astratto che descrive le entità e le relazioni prima di realizzarle",
      "Il diagramma entità-relazione disegnato su carta durante la fase iniziale del progetto",
      "L'elenco degli utenti abilitati ad accedere e a modificare i dati del database fisico"
    ],
    correct: [0],
    exp: "Il modello fisico è il database concretamente realizzato (tabelle, campi, relazioni) che 'vive' fisicamente sul disco del computer, pronto all'uso. È l'ultimo livello dopo il concettuale (E-R) e il logico."
  },
  {
    id: "sql010", topic: "Normalizzazione",
    q: "A cosa serve la normalizzazione di un database?",
    opts: [
      "Ad aumentare volutamente la ridondanza dei dati per averne più copie disponibili",
      "A eliminare ridondanze e incoerenze nei dati, sfruttando il modello E-R",
      "A rendere il database più lento in cambio di una maggiore sicurezza dei dati",
      "A cancellare i dati considerati inutili appartenenti ai singoli utenti registrati"
    ],
    correct: [1],
    exp: "La normalizzazione elimina RIDONDANZE (stesso dato ripetuto → spreco di spazio) e INCOERENZE (stesso dato scritto diversamente in più punti). Migliora coerenza e manutenzione del DB."
  },
  {
    id: "sql011", topic: "Normalizzazione",
    q: "Cosa richiede la PRIMA forma normale (1NF)?",
    opts: [
      "Che ogni colonna non chiave dipenda dall'intera chiave primaria e non da una parte",
      "Che a ogni incrocio riga/colonna ci sia un singolo valore, mai un elenco di valori",
      "Che nella tabella non esista alcuna chiave esterna verso altre tabelle collegate",
      "Che ogni tabella del database contenga sempre almeno tre colonne di dati distinti"
    ],
    correct: [1],
    exp: "La 1NF impone che ogni cella (intersezione riga-colonna) contenga un solo valore atomico, mai una lista. Es: non mettere '333, 348' in un unico campo Telefono."
  },
  {
    id: "sql012", topic: "Normalizzazione",
    q: "Cosa richiede la SECONDA forma normale (2NF)?",
    opts: [
      "Ogni colonna non chiave dipende dall'intera chiave primaria, non solo da una parte di essa",
      "Che ogni cella della tabella contenga un solo valore atomico e mai un elenco di valori",
      "Che le colonne non chiave non dipendano in alcun modo le une dalle altre nella tabella",
      "Che la tabella non contenga alcuna chiave primaria, per evitare vincoli troppo rigidi"
    ],
    correct: [0],
    exp: "La 2NF (presuppone la 1NF) richiede che ogni colonna non chiave dipenda dall'INTERA chiave primaria e non solo da una parte di essa (rilevante quando la chiave è composta da più campi)."
  },
  {
    id: "sql013", topic: "Normalizzazione",
    q: "Cosa richiede la TERZA forma normale (3NF)?",
    opts: [
      "Le colonne non chiave dipendono solo dalla chiave primaria, non da altre colonne non chiave",
      "Che nella base di dati sia presente una sola tabella, per evitare del tutto le ridondanze",
      "Che ogni cella della tabella possa contenere un elenco ordinato di più valori distinti",
      "Che tutte le colonne della tabella facciano parte insieme della chiave primaria composta"
    ],
    correct: [0],
    exp: "La 3NF (presuppone la 2NF) richiede che nessuna colonna non chiave dipenda da un'altra colonna non chiave: ogni attributo non chiave deve dipendere SOLO dalla chiave primaria."
  },
  {
    id: "sql014", topic: "Chiavi",
    q: "Cos'è una PRIMARY KEY (chiave primaria)?",
    opts: [
      "Un identificativo univoco di ciascuna riga della tabella, che deve essere sempre NOT NULL",
      "Un campo il cui valore può ripetersi liberamente tra le diverse righe della tabella",
      "Un campo che fa riferimento alla chiave di un'altra tabella per collegarle tra loro",
      "Un campo che deve obbligatoriamente essere sempre di tipo testo, come VARCHAR o CHAR"
    ],
    correct: [0],
    exp: "La PRIMARY KEY identifica in modo UNIVOCO ogni riga (record) della tabella: non può ripetersi e non può essere nulla (NOT NULL). Spesso è un numero progressivo auto-incrementale."
  },
  {
    id: "sql015", topic: "Chiavi",
    q: "Qual è lo scopo di una FOREIGN KEY (chiave esterna)?",
    opts: [
      "Garantire che un campo contenga solo valori esistenti come chiave in un'altra tabella",
      "Garantire che ogni valore del campo sia univoco e identifichi una sola riga",
      "Cifrare i valori del campo così che non siano leggibili senza autorizzazione",
      "Ordinare in automatico le righe della tabella in base al valore del campo"
    ],
    correct: [0],
    exp: "La FOREIGN KEY è un campo che fa riferimento alla PRIMARY KEY di un'altra tabella. Garantisce che il valore inserito corrisponda sempre a un record esistente nell'altra tabella (integrità referenziale)."
  },
  {
    id: "sql016", topic: "Chiavi",
    q: "Cosa garantiscono insieme PRIMARY KEY e FOREIGN KEY?",
    opts: [
      "L'integrità referenziale: i riferimenti tra le tabelle restano validi e non si spezzano",
      "La cifratura dei dati sensibili contenuti nelle colonne collegate tra loro",
      "L'aumento della velocità delle query che coinvolgono più tabelle in join",
      "L'esecuzione di un backup automatico ogni volta che i dati vengono modificati"
    ],
    correct: [0],
    exp: "PK e FK insieme garantiscono l'INTEGRITÀ REFERENZIALE: non può esistere una riga che fa riferimento a un ID inesistente in un'altra tabella. I collegamenti restano sempre coerenti."
  },
  {
    id: "sql017", topic: "Chiavi",
    q: "Quali sono le possibili strategie quando si tenta di cancellare un record referenziato da una FOREIGN KEY? (una o più risposte)",
    opts: [
      "Impedire la cancellazione finché esistono righe che lo referenziano",
      "Cancellare a cascata (CASCADE) anche le righe collegate",
      "Azzerare (SET NULL) i campi che lo referenziano",
      "Duplicare automaticamente il record"
    ],
    correct: [0,1,2],
    exp: "Le tre possibilità sono: (1) bloccare la cancellazione (RESTRICT/NO ACTION), (2) CASCADE: cancellare anche le righe collegate, (3) SET NULL: azzerare i campi che referenziavano il record. Non esiste la duplicazione automatica."
  },
  {
    id: "sql018", topic: "Tipi di dato",
    q: "Quale tipo di dato è più adatto per memorizzare un valore booleano (Sì/No, attivo/non attivo)?",
    opts: [
      "VARCHAR",
      "BIT",
      "DATE",
      "FLOAT"
    ],
    correct: [1],
    exp: "Il tipo BIT contiene un solo bit (0 o 1), quindi è ideale per dati booleani come 'utente attivo Sì/No'. VARCHAR è per il testo, DATE per le date, FLOAT per i decimali."
  },
  {
    id: "sql019", topic: "Tipi di dato",
    q: "Qual è la differenza principale tra VARCHAR(50) e CHAR(2)?",
    opts: [
      "VARCHAR ha lunghezza variabile fino al massimo indicato; CHAR ha lunghezza sempre fissa",
      "Non c'è alcuna differenza: sono due modi diversi di dichiarare lo stesso tipo di testo",
      "CHAR serve a memorizzare numeri interi, mentre VARCHAR serve a memorizzare le date",
      "VARCHAR può contenere solo cifre, mentre CHAR può contenere anche lettere e simboli"
    ],
    correct: [0],
    exp: "VARCHAR(n) memorizza testo di lunghezza VARIABILE fino a n caratteri (occupa solo lo spazio necessario). CHAR(n) ha lunghezza FISSA di n caratteri: utile per dati sempre della stessa lunghezza, come la sigla provincia CHAR(2)."
  },
  {
    id: "sql020", topic: "Tipi di dato",
    q: "Perché è importante scegliere bene il tipo e la dimensione di ogni campo? (una o più risposte)",
    opts: [
      "Per poter fare ricerche testuali, conteggi numerici e confronti tra date correttamente",
      "Per non sprecare spazio su disco con campi inutilmente grandi",
      "Per assicurarsi che lo spazio sia sufficiente a contenere il dato",
      "Per rendere impossibile ogni query"
    ],
    correct: [0,1,2],
    exp: "Il tipo di dato permette operazioni corrette (ricerche testo, somme, confronti date) e, dimensionando bene lo spazio, evita sia troncamenti (spazio insufficiente) sia sprechi (campi troppo grandi)."
  },
  {
    id: "sql021", topic: "Sottolinguaggi SQL",
    q: "A quale sottolinguaggio SQL appartiene l'istruzione CREATE TABLE ?",
    opts: [
      "DML (Data Manipulation Language)",
      "DDL (Data Definition Language)",
      "DQL (Data Query Language)",
      "DCL (Data Control Language)"
    ],
    correct: [1],
    exp: "CREATE TABLE (come CREATE DATABASE, ALTER, DROP) definisce la STRUTTURA del database, quindi appartiene al DDL – Data Definition Language."
  },
  {
    id: "sql022", topic: "Sottolinguaggi SQL",
    q: "A quale sottolinguaggio appartengono INSERT, UPDATE e DELETE ?",
    opts: [
      "DDL (Data Definition Language)",
      "DML (Data Manipulation Language)",
      "DQL (Data Query Language)",
      "DCL (Data Control Language)"
    ],
    correct: [1],
    exp: "INSERT, UPDATE e DELETE manipolano i DATI memorizzati (inserire, modificare, cancellare), quindi fanno parte del DML – Data Manipulation Language."
  },
  {
    id: "sql023", topic: "Sottolinguaggi SQL",
    q: "A quale sottolinguaggio appartiene l'istruzione SELECT ?",
    opts: [
      "DDL (Data Definition Language) — definizione della struttura",
      "DML (Data Manipulation Language) — modifica dei dati",
      "DQL (Data Query Language) — interrogazione dei dati",
      "DCL (Data Control Language) — gestione dei permessi"
    ],
    correct: [2],
    exp: "SELECT serve a INTERROGARE i dati, quindi appartiene al DQL – Data Query Language. È l'istruzione più usata di SQL."
  },
  {
    id: "sql024", topic: "Sottolinguaggi SQL",
    q: "A quale sottolinguaggio appartengono GRANT e REVOKE (gestione permessi)?",
    opts: [
      "DDL (Data Definition Language) — definizione delle tabelle",
      "DML (Data Manipulation Language) — inserimento e modifica",
      "DQL (Data Query Language) — interrogazione dei dati",
      "DCL (Data Control Language) — gestione dei permessi"
    ],
    correct: [3],
    exp: "GRANT (concedere) e REVOKE (revocare) gestiscono i PERMESSI/autorizzazioni degli utenti, quindi appartengono al DCL – Data Control Language."
  },
  {
    id: "sql025", topic: "Creazione tabelle",
    q: "Quale clausola impone che un campo contenga SEMPRE un valore (non possa essere vuoto)?",
    opts: [
      "UNIQUE",
      "NOT NULL",
      "AUTO_INCREMENT",
      "DEFAULT"
    ],
    correct: [1],
    exp: "NOT NULL obbliga il campo ad avere sempre un valore. È obbligatoria per i campi chiave (una PRIMARY KEY deve essere sempre NOT NULL)."
  },
  {
    id: "sql026", topic: "Creazione tabelle",
    q: "Come si chiama la clausola che numera automaticamente la chiave primaria? (indica le due corrette)",
    opts: [
      "AUTO_INCREMENT (in MySQL)",
      "IDENTITY (in SQL Server)",
      "AUTO_KEY (in tutti i DBMS)",
      "SELF_NUMBER"
    ],
    correct: [0,1],
    exp: "Per numerare automaticamente la PK: in MySQL si usa AUTO_INCREMENT, in SQL Server si usa IDENTITY. Con queste clausole non serve indicare l'ID nell'INSERT: lo assegna il DBMS."
  },
  {
    id: "sql027", topic: "Modificare tabelle",
    q: "Quale istruzione si usa per AGGIUNGERE una colonna a una tabella già esistente?",
    opts: [
      "UPDATE tabella ADD colonna, confondendo modifica dello schema e update di righe",
      "ALTER TABLE tabella ADD colonna tipo",
      "INSERT COLUMN, usando una sintassi non prevista da SQL standard",
      "CREATE COLUMN, separando la colonna dalla definizione della tabella"
    ],
    correct: [1],
    exp: "ALTER TABLE modifica la struttura di una tabella esistente. Es: ALTER TABLE nomi ADD ProvinciaNascita CHAR(2); aggiunge una nuova colonna."
  },
  {
    id: "sql028", topic: "Modificare tabelle",
    q: "Quale istruzione ELIMINA completamente una tabella (struttura + dati)?",
    opts: [
      "DELETE TABLE nome_tabella",
      "DROP TABLE nome_tabella",
      "REMOVE TABLE nome_tabella",
      "CLEAR TABLE nome_tabella"
    ],
    correct: [1],
    exp: "DROP TABLE elimina l'intera tabella (struttura e dati). Attenzione a non confonderla con DELETE, che invece cancella solo le RIGHE lasciando la tabella in piedi."
  },
  {
    id: "sql029", topic: "INSERT / UPDATE / DELETE",
    q: "Nella INSERT, se un campo è AUTO_INCREMENT / IDENTITY (es. l'ID)...",
    opts: [
      "Non serve indicarlo: lo compila automaticamente il DBMS con il valore successivo",
      "Devi indicarne sempre il valore manualmente, altrimenti la riga non viene inserita",
      "L'inserimento fallisce con un errore perché il campo ID non è stato specificato",
      "Va impostato esplicitamente a NULL, così il database capisce di doverlo generare"
    ],
    correct: [0],
    exp: "Con AUTO_INCREMENT/IDENTITY non devi specificare il campo ID nell'INSERT: il DBMS assegna automaticamente il valore progressivo successivo."
  },
  {
    id: "sql030", topic: "INSERT / UPDATE / DELETE",
    q: "Perché è FONDAMENTALE la clausola WHERE in un'istruzione UPDATE o DELETE?",
    opts: [
      "Perché senza WHERE l'operazione modifica o cancella TUTTE le righe della tabella",
      "Perché è obbligatoria e senza di essa la query genera sempre un errore di sintassi",
      "Perché rende la query più lenta, dato che filtra una riga alla volta durante l'esecuzione",
      "Perché la clausola WHERE ha senso solo dentro le istruzioni SELECT di lettura dei dati"
    ],
    correct: [0],
    exp: "WHERE filtra su quali righe agire. Un UPDATE o DELETE SENZA WHERE colpisce TUTTE le righe della tabella! Consiglio della slide: prima di una DELETE, prova la stessa WHERE con una SELECT per vedere cosa cancelleresti."
  },
  {
    id: "sql031", topic: "INSERT / UPDATE / DELETE",
    q: "Quale istruzione useresti per modificare il nome del record con ID=1?",
    opts: [
      "UPDATE tabella SET Nome='Carlo' WHERE ID=1",
      "INSERT tabella SET Nome='Carlo', creando un record invece di modificarlo",
      "SELECT Nome='Carlo' WHERE ID=1, interrogando senza aggiornare il record",
      "ALTER tabella SET Nome='Carlo', cambiando schema invece di dati"
    ],
    correct: [0],
    exp: "UPDATE ... SET campo=valore WHERE condizione aggiorna i dati esistenti. Il WHERE ID=1 limita la modifica alla sola riga con ID=1: qui si vede l'utilità della chiave primaria."
  },
  {
    id: "sql032", topic: "SELECT",
    q: "Qual è la forma base di una SELECT?",
    opts: [
      "SELECT <campi> FROM <tabelle> WHERE <condizioni>",
      "FROM <tabelle> SELECT <campi> WHERE <condizioni>",
      "GET <campi> IN <tabelle> WHERE <condizioni>",
      "SELECT <tabelle> FROM <campi> WHERE <condizioni>"
    ],
    correct: [0],
    exp: "La struttura base è: SELECT (quali campi) FROM (quali tabelle) WHERE (quali condizioni/filtri sulle righe). Il WHERE è opzionale: senza, estrae tutte le righe."
  },
  {
    id: "sql033", topic: "SELECT",
    q: "Cosa restituisce una SELECT senza la clausola WHERE?",
    opts: [
      "Nessuna riga",
      "Solo la prima riga",
      "TUTTE le righe della tabella",
      "Un errore"
    ],
    correct: [2],
    exp: "Senza WHERE la SELECT non filtra nulla e restituisce TUTTE le righe della tabella. Il WHERE serve proprio a selezionare solo le righe che soddisfano una condizione."
  },
  {
    id: "sql034", topic: "SELECT",
    q: "A cosa serve la parola chiave AS in una SELECT?",
    opts: [
      "A dare un alias, cioè un nome alternativo, a un campo o a una tabella nella query",
      "A filtrare le righe mantenendo solo quelle che rispettano una condizione",
      "A ordinare le righe del risultato in base al valore di un determinato campo",
      "A creare una nuova tabella permanente a partire dal risultato della query"
    ],
    correct: [0],
    exp: "AS assegna un ALIAS: SELECT Nome AS NomeContatto rinomina l'intestazione della colonna nel risultato. Utile anche per abbreviare i nomi delle tabelle nelle JOIN. In molti DBMS AS è opzionale."
  },
  {
    id: "sql035", topic: "SELECT",
    q: "In SQL, come si scrive correttamente una condizione numerica e un valore decimale?",
    opts: [
      "I numeri vanno tra apici e i decimali con la virgola: WHERE Altezza>='1,80'",
      "I numeri NON vanno tra apici e i decimali si scrivono col punto: WHERE Prezzo>=1.80",
      "I numeri vanno sempre tra doppi apici come se fossero stringhe",
      "I decimali si scrivono con la virgola come nella notazione italiana"
    ],
    correct: [1],
    exp: "I valori numerici NON vanno tra apici (gli apici servono per testo e date). Inoltre SQL usa la notazione americana: il separatore decimale è il PUNTO, non la virgola."
  },
  {
    id: "sql036", topic: "JOIN",
    q: "A cosa serve una JOIN?",
    opts: [
      "A combinare in una query i dati provenienti da più tabelle collegate tra loro",
      "A creare fisicamente una nuova tabella su disco unendo il contenuto di altre due",
      "A cancellare in un colpo solo le righe corrispondenti da più tabelle collegate",
      "A cifrare i dati contenuti in due tabelle diverse prima di metterli in relazione"
    ],
    correct: [0],
    exp: "La JOIN unisce i dati di più tabelle in un unico risultato (a video, non su disco), collegandole tramite i campi in comune (di solito PK e FK)."
  },
  {
    id: "sql037", topic: "JOIN",
    q: "Quale JOIN restituisce TUTTI i record della tabella di sinistra, anche quelli senza corrispondenza a destra (campi mancanti a NULL)?",
    opts: [
      "INNER JOIN",
      "LEFT JOIN",
      "CROSS JOIN",
      "SELF JOIN"
    ],
    correct: [1],
    exp: "La LEFT JOIN restituisce tutte le righe della tabella di sinistra; dove manca la corrispondenza nella tabella di destra, i relativi campi risultano NULL/vuoti. Es: tutti i nominativi, anche quelli senza chiamate ricevute."
  },
  {
    id: "sql038", topic: "JOIN",
    q: "Cosa restituisce una INNER JOIN?",
    opts: [
      "Tutte le righe di entrambe le tabelle, anche quelle prive di corrispondenza",
      "Solo le righe che hanno una corrispondenza in entrambe le tabelle collegate",
      "Solo le righe della tabella di sinistra, anche quando manca la corrispondenza",
      "Soltanto le righe che non hanno alcuna corrispondenza nell'altra tabella"
    ],
    correct: [1],
    exp: "La INNER JOIN restituisce solo le righe che hanno una corrispondenza in ENTRAMBE le tabelle. Es: solo i nominativi di cui si sono effettivamente ricevute chiamate."
  },
  {
    id: "sql039", topic: "JOIN",
    q: "Nella clausola JOIN, a cosa serve la parola chiave ON?",
    opts: [
      "A specificare il campo (o i campi) su cui collegare le righe delle due tabelle",
      "A ordinare il risultato della join in base ai valori del campo indicato",
      "A filtrare le righe della join in base a una condizione su una data",
      "A definire l'alias con cui la tabella verrà richiamata all'interno della query"
    ],
    correct: [0],
    exp: "ON indica la CONDIZIONE di collegamento: ...LEFT JOIN Tabella2 ON Tabella1.CampoID = Tabella2.CampoID. Specifica quali campi devono corrispondere per associare le righe."
  },
  {
    id: "sql040", topic: "JOIN",
    q: "Quando due tabelle hanno un campo con lo STESSO nome (es. ID), come si evita l'ambiguità nella SELECT?",
    opts: [
      "Premettendo al campo il nome della tabella, es. Tabella1.ID e Tabella2.ID",
      "Non è possibile usare la JOIN quando due campi hanno lo stesso identico nome",
      "Rinominando fisicamente una delle due colonne omonime direttamente sul database",
      "Eseguendo due SELECT separate e unendo poi manualmente i due risultati ottenuti"
    ],
    correct: [0],
    exp: "Si prefissa il campo col nome (o alias) della tabella seguito dal punto: Tabella1.ID. Così la query sa da quale tabella prendere il campo, evitando ambiguità."
  },
  {
    id: "sql041", topic: "Algebra booleana",
    q: "Nell'algebra booleana del WHERE, qual è la differenza tra AND e OR?",
    opts: [
      "AND: tutte le condizioni devono essere vere; OR: ne basta almeno una vera",
      "AND: ne basta una vera; OR: devono essere tutte quante vere contemporaneamente",
      "Sono operatori equivalenti: si possono scambiare senza cambiare il risultato",
      "OR funziona soltanto con i campi numerici, mentre AND con qualsiasi tipo di campo"
    ],
    correct: [0],
    exp: "AND richiede che TUTTE le condizioni siano vere; OR richiede che ne sia vera ALMENO UNA. Combinandoli si costruiscono filtri complessi."
  },
  {
    id: "sql042", topic: "Algebra booleana",
    q: "Perché WHERE Reddito<20000 AND Età<30 OR Età>55 può dare risultati SBAGLIATI?",
    opts: [
      "Conta la precedenza degli operatori: senza parentesi il risultato può non essere quello voluto",
      "Gli operatori AND e OR non possono mai comparire insieme nella stessa clausola WHERE",
      "Mancano gli apici attorno ai valori numerici, che in SQL vanno sempre racchiusi tra apici",
      "Il campo Età non è un nome valido perché contiene una lettera accentata non consentita"
    ],
    correct: [0],
    exp: "Come in matematica, anche nella logica booleana conta la PRECEDENZA (AND si valuta prima di OR). Senza parentesi il significato cambia. Vanno usate le parentesi per raggruppare correttamente: es. ...AND (Età<30 OR Età>55)."
  },
  {
    id: "sql043", topic: "Funzioni di aggregazione",
    q: "Quali sono funzioni di aggregazione SQL? (una o più risposte)",
    opts: [
      "SUM",
      "AVG",
      "MAX",
      "SELECT"
    ],
    correct: [0,1,2],
    exp: "SUM (somma), AVG (media), MAX (massimo), oltre a MIN e COUNT, sono funzioni di AGGREGAZIONE: combinano più righe in un unico risultato. SELECT non è una funzione di aggregazione ma l'istruzione di interrogazione."
  },
  {
    id: "sql044", topic: "GROUP BY",
    q: "Se in una SELECT con funzione di aggregazione includi anche un campo non aggregato, cosa DEVI fare?",
    opts: [
      "Inserire quel campo anche nella clausola GROUP BY, insieme agli altri raggruppati",
      "Nulla di particolare: la query funziona correttamente esattamente così com'è scritta",
      "Racchiudere il nome del campo non aggregato tra apici singoli all'interno della SELECT",
      "Sostituire per forza la GROUP BY con una clausola HAVING del tutto equivalente"
    ],
    correct: [0],
    exp: "Ogni campo presente nella SELECT che NON è aggregato deve comparire nella GROUP BY. Es: SELECT Data, SUM(Incasso) FROM Vendite GROUP BY Data. La GROUP BY definisce i gruppi su cui calcolare l'aggregazione."
  },
  {
    id: "sql045", topic: "HAVING vs WHERE",
    q: "Qual è la differenza tra WHERE e HAVING?",
    opts: [
      "WHERE filtra le righe prima del raggruppamento; HAVING filtra sui risultati aggregati",
      "Sono equivalenti e si possono usare in modo intercambiabile in qualunque tipo di query",
      "HAVING filtra le singole righe, mentre WHERE agisce sui gruppi creati dalla GROUP BY",
      "HAVING si può usare solo quando nella query non è presente la clausola GROUP BY"
    ],
    correct: [0],
    exp: "WHERE agisce sulle singole righe PRIMA del raggruppamento. HAVING agisce DOPO, sul risultato delle aggregazioni (es. HAVING SUM(Vendite)>1000 per tenere solo i gruppi che superano 1000). Con WHERE non si può filtrare su un SUM."
  },
  {
    id: "sql046", topic: "Proprietà ACID",
    q: "Cosa significa l'acronimo ACID?",
    opts: [
      "Atomicity, Consistency, Isolation, Durability",
      "Access, Control, Identity, Data come acronimo orientato ai permessi",
      "Automatic, Cloud, Index, Database come acronimo infrastrutturale",
      "Atomicity, Cache, Integrity, Delete sostituendo consistency e durability"
    ],
    correct: [0],
    exp: "ACID = Atomicity (atomicità), Consistency (coerenza), Isolation (isolamento), Durability (durabilità). Sono le proprietà che le transazioni devono avere per garantire la validità dei dati anche in caso di guasti."
  },
  {
    id: "sql047", topic: "Proprietà ACID",
    q: "Cosa afferma la proprietà di ATOMICITÀ (Atomicity) di una transazione?",
    opts: [
      "O tutte le operazioni riescono, o falliscono tutte: se una salta, si annulla l'intera transazione",
      "Le operazioni della transazione vengono eseguite una alla volta, con calma e senza fretta",
      "Ogni operazione è indipendente e viene salvata subito, a prescindere dalle altre del blocco",
      "I dati coinvolti nella transazione vengono automaticamente compressi per occupare meno spazio"
    ],
    correct: [0],
    exp: "Atomicità: la transazione è un'unità indivisibile. O TUTTE le operazioni vanno a buon fine, oppure viene annullato tutto (rollback), incluse quelle già completate. Esempio classico: bonifico bancario (prelievo + accredito insieme)."
  },
  {
    id: "sql048", topic: "Proprietà ACID",
    q: "Cosa distingue i DBMS relazionali dai database NoSQL riguardo ad ACID?",
    opts: [
      "I DBMS relazionali sono ACID compliant, il che li rende adatti dove i dati devono essere validi",
      "I database NoSQL sono sempre ACID compliant, mentre quelli relazionali non lo sono affatto",
      "Nessuno dei due tipi rispetta le proprietà ACID: dipende soltanto dal software utilizzato",
      "Le proprietà ACID riguardano unicamente la velocità di esecuzione delle query, non i dati"
    ],
    correct: [0],
    exp: "I DBMS relazionali sono ACID compliant: garantiscono la validità dei dati anche in caso di errori. Questo li rende ideali dove non ci si può permettere dati incoerenti (es. transazioni bancarie). È un elemento che li differenzia da molti NoSQL."
  },
  {
    id: "sql049", topic: "Transazioni",
    q: "Qual è il vantaggio principale di una transazione?",
    opts: [
      "Raggruppa più operazioni in un blocco unico che ha effetto solo se riescono tutte",
      "Rende più veloci le query eseguendo le operazioni in parallelo su più core",
      "Cifra in automatico tutti i dati coinvolti nelle operazioni del blocco",
      "Crea una copia di backup dei dati prima di eseguire ogni singola operazione"
    ],
    correct: [0],
    exp: "La transazione raggruppa più operazioni in un corpo unico: il DBMS le rende definitive solo quando TUTTE sono completate. In caso contrario, tutte le modifiche vengono annullate (rollback), preservando la coerenza."
  },
  {
    id: "sql050", topic: "Viste",
    q: "Cos'è una VISTA (VIEW) in un database?",
    opts: [
      "Una query memorizzata nel DB, richiamabile con una SELECT come se fosse una tabella",
      "Una copia fisica dei dati salvata su disco e aggiornata a ogni modifica della tabella",
      "Un particolare tipo di indice che velocizza le ricerche sui campi più consultati spesso",
      "Una copia di backup della tabella creata automaticamente a intervalli di tempo regolari"
    ],
    correct: [0],
    exp: "Una vista è una query salvata nel database: invece di riscrivere ogni volta una SELECT complessa, la memorizzi (CREATE VIEW ... AS SELECT ...) e la richiami come una tabella. Non duplica i dati fisicamente."
  },
  {
    id: "sql051", topic: "Indici",
    q: "A cosa serve un INDICE su una tabella?",
    opts: [
      "A rendere più veloce la ricerca dei dati su un determinato campo della tabella",
      "A cifrare i valori memorizzati nella tabella per proteggerli da accessi non autorizzati",
      "A eliminare automaticamente i valori duplicati presenti in una colonna",
      "A creare una nuova tabella a partire dai dati di quella che viene indicizzata"
    ],
    correct: [0],
    exp: "Un indice crea un elenco ordinato dei valori di un campo, così la ricerca avviene rapidamente sull'indice invece di scorrere tutta la tabella. Rende più veloci le SELECT su quel campo."
  },
  {
    id: "sql052", topic: "Indici",
    q: "Qual è lo SVANTAGGIO degli indici?",
    opts: [
      "Velocizzano le ricerche ma rallentano gli inserimenti e occupano spazio aggiuntivo",
      "Rallentano tutte le SELECT perché costringono a scorrere l'intera tabella",
      "Non presentano alcuno svantaggio, quindi conviene indicizzare ogni colonna",
      "Cancellano i dati della colonna indicizzata quando l'indice viene aggiornato"
    ],
    correct: [0],
    exp: "L'indice accelera le ricerche (lettura) ma va aggiornato a ogni INSERT/UPDATE/DELETE, quindi rallenta le scritture e occupa spazio aggiuntivo. Vanno creati con criterio, sui campi cercati spesso."
  },
  {
    id: "sql053", topic: "Indici",
    q: "Quali sono tipologie/metodi di indice citati? (una o più risposte)",
    opts: [
      "clustered / non-clustered",
      "b-tree",
      "bitmap",
      "waterfall"
    ],
    correct: [0,1,2],
    exp: "Metodi: clustered (organizza fisicamente i dati) vs non-clustered (indice separato, di default). Tipologie: b-tree (albero, semplice o composto), bitmap (per colonne con pochi valori distinti), unique (impediscono duplicati). 'waterfall' non esiste."
  },
  {
    id: "sql054", topic: "SQL dichiarativo",
    q: "SQL, nella sua specifica ANSI, è un linguaggio...",
    opts: [
      "Dichiarativo: ogni istruzione dichiara il risultato voluto, non i passi per ottenerlo",
      "Imperativo/strutturato: si definiscono i singoli passi che il motore deve eseguire",
      "Orientato agli oggetti, con classi e istanze come nei linguaggi tipo Python o Java",
      "Di basso livello, molto vicino all'assembly e al linguaggio macchina del computer"
    ],
    correct: [0],
    exp: "SQL è DICHIARATIVO: dichiari COSA vuoi ottenere (il risultato), non COME ottenerlo passo per passo (a differenza dei linguaggi imperativi come Python). È il DBMS a decidere come eseguire la query."
  },
  {
    id: "sql055", topic: "Stored procedure",
    q: "Cos'è una STORED PROCEDURE?",
    opts: [
      "Un programma con variabili, cicli e condizioni salvato nel database e da richiamare",
      "Una singola istruzione SELECT salvata e richiamabile come se fosse una tabella",
      "Una copia di sicurezza dei dati del database eseguita a intervalli regolari",
      "Un elenco ordinato dei valori di una colonna per velocizzare le ricerche"
    ],
    correct: [0],
    exp: "Una stored procedure è un vero programma ('stored' = salvato dentro il DB) con variabili, iterazioni, condizioni e gestione errori. Non parte da sola: va avviata con CALL nome (MySQL) o EXEC nome (SQL Server)."
  },
  {
    id: "sql056", topic: "Stored procedure",
    q: "Cosa indicano i parametri IN e OUT di una stored procedure?",
    opts: [
      "IN riceve un valore fornito nella chiamata; OUT restituisce un valore verso l'esterno",
      "IN indica l'ingresso al database mentre OUT indica l'uscita dei dati verso il disco fisso",
      "Sono la stessa cosa: due parole chiave alternative per dichiarare un qualsiasi parametro",
      "IN serve per i parametri numerici, mentre OUT serve per quelli di tipo testo o stringa"
    ],
    correct: [0],
    exp: "Un parametro IN riceve un valore in ingresso (lo passi nella CALL). Un parametro OUT restituisce un valore verso l'esterno (nella chiamata indichi la variabile che conterrà il risultato)."
  },
  {
    id: "sql057", topic: "Stored function",
    q: "Qual è la caratteristica principale di una STORED FUNCTION rispetto a una procedura?",
    opts: [
      "Restituisce un valore con RETURNS e può essere richiamata dentro una query, es. in SELECT",
      "Non può contenere istruzioni SQL né logica: si limita a dichiarare i parametri in ingresso",
      "Serve esclusivamente a cancellare dati da una tabella e non restituisce mai alcun valore",
      "Non accetta alcun parametro in ingresso e deve essere eseguita sempre senza argomenti"
    ],
    correct: [0],
    exp: "Una stored function RESTITUISCE un valore (clausola RETURNS) e può essere usata dentro le query, es. SELECT aggiungi_iva(importo). Estende le funzioni 'build-in' del DBMS come YEAR, ROUND, TRIM."
  },
  {
    id: "sql058", topic: "Funzioni built-in",
    q: "Abbina le funzioni built-in: quali di queste esistono in SQL? (una o più risposte)",
    opts: [
      "YEAR (estrae l'anno da una data)",
      "ROUND (arrotonda a un numero di decimali)",
      "TRIM (rimuove spazi iniziali/finali di una stringa)",
      "PYTHON (esegue codice Python)"
    ],
    correct: [0,1,2],
    exp: "YEAR, ROUND e TRIM sono funzioni 'build-in' del DBMS: rispettivamente estraggono l'anno da una data, arrotondano un numero, rimuovono gli spazi da una stringa. 'PYTHON' non è una funzione SQL."
  },
  {
    id: "sql059", topic: "Trigger",
    q: "Cos'è un TRIGGER?",
    opts: [
      "Istruzioni legate a una tabella che scattano in automatico su INSERT, UPDATE o DELETE",
      "Una query di sola lettura salvata nel database e richiamabile come una tabella",
      "Un campo speciale che identifica in modo univoco ogni riga della tabella",
      "Una copia incrementale dei dati creata in automatico a scopo di backup"
    ],
    correct: [0],
    exp: "Un trigger è codice legato a una tabella che 'scatta' automaticamente al verificarsi di un evento (es. prima o dopo un INSERT), utile ad esempio per controlli di coerenza sui dati prima dell'inserimento."
  },
  {
    id: "sql060", topic: "Trigger",
    q: "Quali momenti/azioni di attivazione di un trigger sono corretti? (una o più risposte)",
    opts: [
      "BEFORE INSERT / AFTER INSERT",
      "BEFORE UPDATE / AFTER UPDATE",
      "BEFORE DELETE / AFTER DELETE",
      "DURING SELECT"
    ],
    correct: [0,1,2],
    exp: "Un trigger si può attivare PRIMA (BEFORE) o DOPO (AFTER) un INSERT, UPDATE o DELETE (in SQL Server esiste anche INSTEAD OF). Non esiste un trigger 'DURING SELECT': i trigger reagiscono alle modifiche dei dati."
  },
  {
    id: "sql061", topic: "Federated Database",
    q: "Cos'è un Federated Database System (FDBS)?",
    opts: [
      "Un meta-database che appare come un unico DB ma mappa i dati su più database esterni",
      "Un unico grande database che raccoglie fisicamente al suo interno tutti i dati aziendali",
      "Un sistema che replica i dati su più server per garantirne la disponibilità continua",
      "Un archivio di backup distribuito su più nodi per proteggere i dati dai guasti hardware"
    ],
    correct: [0],
    exp: "Un FDBS è un meta-database: appare come un unico DB, ma internamente mappa dati provenienti da più database esterni (SQL, NoSQL, persino file Excel/PDF), traducendo e suddividendo le query verso le varie fonti."
  },
  {
    id: "sql062", topic: "Progettazione DB",
    q: "Qual è il PRIMO passo nella progettazione di un database?",
    opts: [
      "Determinare lo scopo del database e raccogliere i requisiti (analisi funzionale)",
      "Creare subito tutte le tabelle e cominciare a inserire i dati di esempio",
      "Applicare le regole di normalizzazione per eliminare le ridondanze presenti",
      "Pianificare la procedura di backup periodico dei dati del database"
    ],
    correct: [0],
    exp: "Il primo passo è determinare lo SCOPO del DB e raccogliere i requisiti (analisi funzionale). Poi si organizzano le informazioni, si trasformano in colonne/tabelle, si definiscono le chiavi e infine si normalizza."
  },
  {
    id: "sql063", topic: "Sicurezza",
    q: "La sicurezza del database mira a preservare tre proprietà. Quali? (una o più risposte)",
    opts: [
      "Riservatezza (confidenzialità)",
      "Integrità",
      "Disponibilità",
      "Velocità"
    ],
    correct: [0,1,2],
    exp: "La sicurezza (triade CIA) preserva Riservatezza (i dati sono visti solo da chi è autorizzato), Integrità (i dati non vengono alterati indebitamente) e Disponibilità (i dati sono accessibili quando servono). La velocità non è una proprietà di sicurezza."
  },
  {
    id: "sql064", topic: "Sicurezza",
    q: "Cos'è un attacco di tipo SQL injection?",
    opts: [
      "L'inserimento di comandi SQL malevoli tramite input non validati di un'applicazione",
      "Un guasto hardware del server che corrompe i dati memorizzati nel database",
      "Il fallimento di una procedura di backup che lascia i dati non protetti",
      "La cifratura non autorizzata dei dati da parte di un software esterno"
    ],
    correct: [0],
    exp: "La SQL injection consiste nell'iniettare comandi SQL malevoli attraverso gli input di un'applicazione (form web, header HTTP) non validati, per manipolare o rubare dati. Si previene con query parametrizzate e validazione degli input."
  },
  {
    id: "sql065", topic: "Sicurezza",
    q: "Cos'è una minaccia 'interna' (insider threat) alla sicurezza del database? (una o più risposte)",
    opts: [
      "Un dipendente malintenzionato che vuole creare un danno",
      "Un dipendente negligente che commette errori rendendo il DB vulnerabile",
      "Un account privilegiato compromesso da un attaccante esterno",
      "Un guasto del disco rigido"
    ],
    correct: [0,1,2],
    exp: "Le minacce interne provengono da chi ha accesso privilegiato: il dipendente malintenzionato, quello negligente che sbaglia, o un account interno compromesso da un aggressore esterno. Il guasto hardware è un problema di disponibilità, non una insider threat."
  },
  {
    id: "sql066", topic: "Best practice sicurezza",
    q: "Quali sono best practice di sicurezza per un database? (una o più risposte)",
    opts: [
      "Crittografare i dati a riposo e in transito",
      "Usare sempre l'ultima versione del software e applicare le patch",
      "Proteggere anche i backup con controlli rigorosi",
      "Lasciare le password di default per comodità"
    ],
    correct: [0,1,2],
    exp: "Best practice: crittografia dei dati (a riposo e in transito), software sempre aggiornato con patch, protezione dei backup con gli stessi controlli del DB. Lasciare password di default è invece una grave vulnerabilità."
  },
  {
    id: "sql067", topic: "Crittografia",
    q: "Qual è la differenza tra cifratura SIMMETRICA e ASIMMETRICA?",
    opts: [
      "Simmetrica usa la stessa chiave per cifrare e decifrare; asimmetrica usa due chiavi diverse",
      "Simmetrica usa due chiavi diverse, mentre asimmetrica ne usa una sola per entrambe le fasi",
      "Sono la stessa tecnica: cambia solo il nome a seconda del produttore del software usato",
      "La cifratura asimmetrica non utilizza alcuna chiave, mentre quella simmetrica ne usa una"
    ],
    correct: [0],
    exp: "Nella cifratura SIMMETRICA la chiave per cifrare è la STESSA che serve per decifrare. Nell'ASIMMETRICA le chiavi sono DIVERSE: si cifra con la chiave pubblica del destinatario e solo la sua chiave privata può decifrare."
  },
  {
    id: "sql068", topic: "Crittografia",
    q: "Quale di questi è un algoritmo a chiave ASIMMETRICA?",
    opts: [
      "Cifrario di Cesare",
      "DES",
      "AES",
      "RSA"
    ],
    correct: [3],
    exp: "RSA usa un sistema a chiavi ASIMMETRICHE (pubblica/privata). Cifrario di Cesare, DES e AES sono invece a chiave SIMMETRICA (stessa chiave per cifrare e decifrare)."
  },
  {
    id: "sql069", topic: "Crittografia",
    q: "Perché nelle comunicazioni si combinano spesso RSA e AES?",
    opts: [
      "RSA è sicuro ma lento: serve a scambiare una chiave AES temporanea, poi si cifra con AES",
      "AES da solo è insicuro, perciò RSA viene usato per cifrare l'intero messaggio ogni volta",
      "RSA non funziona su Internet, quindi AES lo sostituisce del tutto tra client e server",
      "Si combinano solo per rallentare di proposito la comunicazione e renderla più sicura"
    ],
    correct: [0],
    exp: "RSA (asimmetrico) è solido ma lento; AES (simmetrico) è veloce. Soluzione ibrida: RSA serve solo a scambiare in modo sicuro una chiave AES temporanea; poi la comunicazione vera e propria viaggia cifrata con AES, veloce."
  },
  {
    id: "sql070", topic: "Crittografia",
    q: "In MySQL, quale funzione permette di memorizzare un dato in forma cifrata?",
    opts: [
      "encrypt_data()",
      "aes_encrypt()",
      "hash_md5()",
      "crypt_field()"
    ],
    correct: [1],
    exp: "In MySQL si usa la funzione aes_encrypt() (con una chiave di cifratura) in fase di inserimento per salvare il dato cifrato, e aes_decrypt() per rileggerlo in chiaro. Una chiave lunga e con caratteri speciali è più sicura."
  },
  {
    id: "sql071", topic: "ACL e permessi",
    q: "Cos'è una ACL (Access Control List)?",
    opts: [
      "Un insieme di regole che concede o nega autorizzazioni a utenti o gruppi sul database",
      "Una copia di sicurezza dei permessi del database conservata per il ripristino",
      "Un algoritmo di cifratura usato per proteggere le credenziali degli utenti",
      "Una funzione di aggregazione che conta gli accessi effettuati da ciascun utente"
    ],
    correct: [0],
    exp: "Una ACL è un elenco di regole di autorizzazione: definisce chi può fare cosa (leggere una vista, scrivere in una tabella, eseguire una procedura, creare oggetti...) su utenti o gruppi."
  },
  {
    id: "sql072", topic: "ACL e permessi",
    q: "Quali istruzioni SQL concedono e revocano i permessi a un utente?",
    opts: [
      "ALLOW per concedere i permessi e DENY per negarli a un determinato utente",
      "GRANT concede i permessi e REVOKE li revoca, entrambe del sottolinguaggio DCL",
      "ADD per aggiungere i permessi e REMOVE per toglierli a un determinato utente",
      "OPEN per abilitare l'accesso e CLOSE per revocarlo a un determinato utente"
    ],
    correct: [1],
    exp: "GRANT concede permessi (es. GRANT SELECT, INSERT ON tabella TO utente), REVOKE li revoca. Fanno parte del DCL (Data Control Language)."
  },
  {
    id: "sql073", topic: "Ruoli",
    q: "Perché conviene gestire i permessi tramite RUOLI in ambienti con tanti utenti?",
    opts: [
      "Un ruolo raggruppa i privilegi da assegnare a più utenti simili, semplificando la gestione",
      "I ruoli cifrano i dati a cui gli utenti accedono, proteggendoli dagli accessi non autorizzati",
      "I ruoli rendono più veloci le query perché precaricano i permessi direttamente in memoria",
      "Senza definire almeno un ruolo gli utenti non riescono a effettuare il login al database"
    ],
    correct: [0],
    exp: "Un ruolo raggruppa privilegi comuni a utenti che svolgono la stessa attività: assegni il ruolo invece di ripetere i permessi per ogni utente. Più semplice da gestire e meno soggetto a errori in ambienti grandi."
  },
  {
    id: "sql074", topic: "Gestione utenti",
    q: "In SQL Server, la creazione di un utente prevede tipicamente...",
    opts: [
      "Prima si crea un LOGIN con password, poi uno USER associato a quel login",
      "È sufficiente il comando CREATE USER, senza bisogno di creare un login",
      "Basta assegnare i permessi con GRANT: l'utente viene creato in automatico",
      "È obbligatorio creare prima un ROLE e solo dopo si può creare l'utente"
    ],
    correct: [0],
    exp: "In SQL Server si crea prima un LOGIN (CREATE LOGIN ... WITH PASSWORD) a livello di server, poi un USER associato (CREATE USER ... FOR LOGIN ...) a livello di database. In MySQL basta CREATE USER ... IDENTIFIED BY 'password'."
  },
  {
    id: "sql075", topic: "Backup",
    q: "Quali tipologie di backup esistono? (una o più risposte)",
    opts: [
      "Completo",
      "Incrementale",
      "Differenziale",
      "Circolare"
    ],
    correct: [0,1,2],
    exp: "I backup possono essere Completi (tutti i dati), Incrementali (solo le modifiche dall'ultimo backup di qualsiasi tipo) o Differenziali (le modifiche dall'ultimo backup completo). 'Circolare' non è tra quelli citati."
  },
  {
    id: "sql076", topic: "Backup",
    q: "Perché il backup è un elemento fondamentale di ogni database? (una o più risposte)",
    opts: [
      "Per il disaster recovery in caso di guasti hardware/software",
      "Per recuperare i dati in caso di attacchi informatici",
      "Perché richiesto anche da normative (es. GDPR)",
      "Per rendere le query più veloci"
    ],
    correct: [0,1,2],
    exp: "Il backup serve per il disaster recovery (guasti), per il ripristino dopo attacchi informatici, ed è richiesto da normative come il GDPR. Non ha nulla a che vedere con la velocità delle query."
  },
  {
    id: "sql077", topic: "Python e DB",
    q: "Qual è la sequenza corretta per interrogare un database MySQL da Python?",
    opts: [
      "import mysql.connector, poi connect(), cursor(), execute(query) e infine il fetch",
      "Prima il fetch dei risultati, poi la connessione e infine l'esecuzione della query",
      "Prima si crea il cursore, poi si importa la libreria e infine ci si connette",
      "Prima si esegue la query, poi ci si connette e infine si importa la libreria"
    ],
    correct: [0],
    exp: "Si importa la libreria (import mysql.connector), ci si connette (connect con host/user/password/database), si crea un cursor, si esegue la query con execute() e si leggono i risultati con fetchone()/fetchall()."
  },
  {
    id: "sql078", topic: "Python e DB",
    q: "Qual è la differenza tra i metodi fetchone() e fetchall() del cursor?",
    opts: [
      "fetchone() restituisce una sola riga; fetchall() restituisce tutte le righe del risultato",
      "fetchall() restituisce una sola riga, mentre fetchone() restituisce l'intero risultato",
      "Sono equivalenti: entrambi restituiscono tutte le righe prodotte dalla query eseguita",
      "fetchone() cancella la prima riga dal database dopo averla letta dal cursore aperto"
    ],
    correct: [0],
    exp: "fetchone() recupera UNA riga alla volta dal risultato della query; fetchall() recupera TUTTE le righe (come lista). Si scelgono in base a quanti risultati ci si aspetta."
  },
  {
    id: "sql079", topic: "Python e DB",
    q: "Cosa cambia usando cursor(dictionary=True) in mysql.connector?",
    opts: [
      "I risultati sono restituiti come dizionari, accessibili per nome colonna (es. x['Name'])",
      "I risultati sono restituiti come tuple, accessibili per posizione (es. x[0])",
      "Le query vengono eseguite più velocemente perché i dati vengono compressi",
      "Impedisce l'esecuzione di SELECT, consentendo solo INSERT, UPDATE e DELETE"
    ],
    correct: [0],
    exp: "Con dictionary=True ogni riga è un dizionario: accedi ai campi per NOME (x['Name']) invece che per posizione nella tupla (x[0]). Rende il codice più leggibile e robusto se cambia l'ordine delle colonne."
  },
  {
    id: "sql080", topic: "Python e DB / Sicurezza",
    q: "Costruire una query concatenando direttamente l'input dell'utente, es. \"SELECT * FROM city WHERE Name LIKE '\"+nm+\"%'\", è pericoloso perché...",
    opts: [
      "Espone ad attacchi di SQL injection: l'utente può iniettare comandi SQL nella stringa",
      "Rende la query più lenta perché la stringa va ricostruita a ogni esecuzione",
      "Non funziona mai, perché non si possono unire stringhe per formare una query",
      "Occupa troppa memoria perché tiene in memoria l'intera tabella interrogata"
    ],
    correct: [0],
    exp: "Concatenare input non validato dentro la query permette la SQL injection. La soluzione è usare query PARAMETRIZZATE: query con segnaposto (es. %s) e passare i valori separatamente a execute(query, (valore,)), così il DBMS li tratta come dati e non come comandi."
  },
  {
    id: "sql081", topic: "Python e DB",
    q: "In una query parametrizzata mysql.connector come cursor.execute(query, (city_id,)), quale segnaposto si usa nella stringa della query?",
    opts: [
      "?",
      "%s",
      "{}",
      "$1"
    ],
    correct: [1],
    exp: "In mysql.connector il segnaposto per i parametri è %s (indipendentemente dal tipo di dato). I valori si passano come tupla a execute(): è il modo sicuro per evitare la SQL injection."
  },
  {
    id: "sql082", topic: "Cloud DB",
    q: "Cos'è un database in cloud?",
    opts: [
      "Un sistema di gestione dati ospitato su una piattaforma cloud e accessibile via Internet",
      "Un database che per motivi di sicurezza può funzionare esclusivamente in modalità offline",
      "Una copia di backup dei dati salvata su una chiavetta USB e conservata fisicamente fuori sede",
      "Un tipo speciale di indice che velocizza le ricerche sui dati archiviati da remoto in rete"
    ],
    correct: [0],
    exp: "Un database cloud è ospitato su una piattaforma cloud e raggiungibile via Internet, invece di risiedere su un server locale. Offre accessibilità globale, alta disponibilità e scalabilità."
  },
  {
    id: "sql083", topic: "Cloud DB",
    q: "Cosa significa DBaaS (Database as a Service)?",
    opts: [
      "Un servizio gestito in cui il provider cura installazione, manutenzione e scalabilità del DB",
      "Un database completamente gratuito e senza limiti di spazio offerto dalle piattaforme cloud",
      "Una particolare categoria di database NoSQL pensata solo per l'ambiente cloud distribuito",
      "Un algoritmo di cifratura usato per proteggere i dati archiviati nei database ospitati in cloud"
    ],
    correct: [0],
    exp: "Con il DBaaS il provider cloud gestisce l'infrastruttura (installazione, configurazione, manutenzione, scalabilità): l'utente usa il database senza preoccuparsi del server sottostante."
  },
  {
    id: "sql084", topic: "Cloud DB",
    q: "Quali sono vantaggi tipici di un database in cloud? (una o più risposte)",
    opts: [
      "Accessibilità globale da qualsiasi luogo connesso a Internet",
      "Uptime (disponibilità) elevato",
      "Scalabilità delle risorse",
      "Funziona anche senza connessione a Internet"
    ],
    correct: [0,1,2],
    exp: "Vantaggi del cloud: accessibilità globale, alta disponibilità (uptime), scalabilità. Proprio perché è accessibile via Internet, però, richiede una connessione: non funziona offline."
  },
  {
    id: "sql085", topic: "Tipi di dato / ENUM",
    q: "Nel DB Medico la colonna è definita: sesso ENUM('M','F'). Cosa fa il tipo ENUM?",
    opts: [
      "Limita il campo a un insieme predefinito di valori ammessi (qui solo 'M' o 'F')",
      "Permette di inserire qualsiasi testo, funzionando come un normale VARCHAR",
      "Memorizza un numero intero che rappresenta la posizione del valore scelto",
      "Genera in automatico un valore progressivo a ogni nuovo inserimento"
    ],
    correct: [0],
    exp: "ENUM vincola il campo a uno dei valori elencati: sesso ENUM('M','F') accetta solo 'M' o 'F'. Serve a garantire coerenza dei dati impedendo l'inserimento di valori non previsti."
  },
  {
    id: "sql086", topic: "Vincoli / UNIQUE",
    q: "Nella tabella mezzi il campo è: tipo VARCHAR(50) NOT NULL UNIQUE. Cosa impone il vincolo UNIQUE?",
    opts: [
      "Che il valore del campo non possa ripetersi in due righe diverse della tabella",
      "Che il campo possa restare vuoto, cioè assumere il valore NULL in alcune righe",
      "Che il campo contenga esclusivamente valori numerici e mai stringhe di testo",
      "Che il campo diventi automaticamente la chiave primaria della tabella indicata"
    ],
    correct: [0],
    exp: "UNIQUE garantisce che il valore sia UNIVOCO nella colonna: non possono esistere due righe con lo stesso 'tipo'. A differenza della PRIMARY KEY, una tabella può avere più campi UNIQUE e (a seconda del DBMS) UNIQUE può ammettere un NULL."
  },
  {
    id: "sql087", topic: "SELECT / ORDER BY",
    q: "A cosa serve la clausola ORDER BY in una SELECT (es. ORDER BY Population)?",
    opts: [
      "A ordinare le righe del risultato in base a uno o più campi, crescente o decrescente",
      "A filtrare le righe mantenendo solo quelle che superano un certo valore",
      "A raggruppare le righe con lo stesso valore per calcolarne un totale",
      "A eliminare dal risultato le righe duplicate lasciando solo valori distinti"
    ],
    correct: [0],
    exp: "ORDER BY ordina il risultato in base al campo indicato (crescente di default, ASC; DESC per decrescente). Es. ORDER BY Population ordina le città dalla meno alla più popolosa."
  },
  {
    id: "sql088", topic: "SELECT / LIKE",
    q: "Nell'operatore LIKE, cosa rappresenta il carattere % (es. Name LIKE 'Mil%')?",
    opts: [
      "Un singolo carattere qualsiasi in quella esatta posizione della stringa",
      "Una sequenza di zero o più caratteri qualsiasi (è il carattere jolly)",
      "Il simbolo di percentuale inteso in modo letterale, cioè il carattere %",
      "Un operatore matematico che calcola la percentuale sul valore del campo"
    ],
    correct: [1],
    exp: "Nel LIKE, % è il carattere jolly che sostituisce QUALSIASI sequenza di caratteri (anche vuota). 'Mil%' trova tutte le stringhe che iniziano con 'Mil' (Milano, Milazzo...). Il jolly _ (underscore) sostituisce invece un singolo carattere."
  },
  {
    id: "sql089", topic: "SELECT / BETWEEN",
    q: "Cosa fa la condizione WHERE Data BETWEEN '2023-01-01' AND '2023-02-28' ?",
    opts: [
      "Seleziona le righe la cui Data è uguale esattamente a una delle due indicate",
      "Seleziona le righe con Data compresa tra le due indicate, estremi inclusi",
      "Cancella dalla tabella tutte le righe che ricadono in quell'intervallo di date",
      "Ordina le righe per Data crescente nell'intervallo compreso tra le due date"
    ],
    correct: [1],
    exp: "BETWEEN x AND y seleziona i valori compresi nell'intervallo, estremi INCLUSI. Qui prende tutte le righe la cui Data va dal 1 gennaio al 28 febbraio 2023 compresi."
  },
  {
    id: "sql090", topic: "SELECT / DISTINCT",
    q: "A cosa serve la parola chiave DISTINCT in SELECT DISTINCT Regione FROM ... ?",
    opts: [
      "A contare quante righe sono presenti nel risultato prodotto dalla query eseguita",
      "A restituire solo i valori diversi, eliminando i duplicati dal risultato",
      "A ordinare i valori del risultato in ordine crescente in base alla colonna",
      "A cancellare fisicamente le righe duplicate dalla tabella salvata su disco"
    ],
    correct: [1],
    exp: "DISTINCT elimina i duplicati dal RISULTATO della query, restituendo solo i valori distinti. Non modifica i dati sul disco: agisce solo sull'output della SELECT."
  },
  {
    id: "sql100", topic: "Funzioni di aggregazione",
    q: "Cosa restituisce SELECT COUNT(*) FROM Clienti ?",
    opts: [
      "La somma dei valori contenuti in una determinata colonna numerica",
      "Il numero totale di righe presenti nella tabella",
      "L'elenco completo dei nomi di tutti i clienti presenti in tabella",
      "Soltanto la prima riga tra tutte quelle presenti nella tabella"
    ],
    correct: [1],
    exp: "COUNT(*) conta il numero di righe (record). Qui restituisce quanti clienti ci sono. COUNT(colonna) conta invece i valori non NULL di quella colonna."
  },
  {
    id: "sql101", topic: "WHERE e operatori",
    q: "A cosa serve l'operatore IN, es. WHERE Provincia IN ('MI','TO','NA') ?",
    opts: [
      "A selezionare le righe il cui valore è uno tra quelli elencati tra parentesi",
      "A ordinare le righe del risultato in base ai valori elencati tra parentesi",
      "A unire due tabelle sui campi elencati tra parentesi dopo la clausola",
      "A contare quante righe contengono uno dei valori elencati tra parentesi"
    ],
    correct: [0],
    exp: "IN verifica se un valore è tra quelli elencati: equivale a più OR (Provincia='MI' OR Provincia='TO' OR ...) ma è più compatto e leggibile."
  },
  {
    id: "sql102", topic: "Valori NULL",
    q: "Come si selezionano le righe in cui il campo Telefono è vuoto (NULL)?",
    opts: [
      "WHERE Telefono = NULL",
      "WHERE Telefono IS NULL",
      "WHERE Telefono = ''",
      "WHERE Telefono == NULL"
    ],
    correct: [1],
    exp: "Per confrontare con NULL si usa IS NULL (o IS NOT NULL), MAI = NULL: in SQL NULL significa 'valore assente' e ogni confronto con = dà risultato sconosciuto, non vero."
  },
  {
    id: "sql103", topic: "ORDER BY",
    q: "Cosa fa ORDER BY Prezzo DESC ?",
    opts: [
      "Ordina il risultato per prezzo in modo decrescente, dal più alto al più basso",
      "Ordina il risultato per prezzo in modo crescente, dal più basso al più alto",
      "Mantiene solo le righe con il prezzo più alto, scartando tutte le altre",
      "Calcola e restituisce la somma di tutti i prezzi presenti nella colonna"
    ],
    correct: [0],
    exp: "DESC ordina in modo DECRESCENTE (dal più grande al più piccolo). Senza indicazione, o con ASC, l'ordinamento è crescente."
  },
  {
    id: "sql104", topic: "Vincoli",
    q: "A cosa serve il vincolo DEFAULT su una colonna, es. attivo BIT DEFAULT 1 ?",
    opts: [
      "Assegna un valore predefinito quando nell'INSERT non se ne specifica uno per la colonna",
      "Impedisce che la colonna possa contenere valori nulli in una qualsiasi delle sue righe",
      "Rende la colonna la chiave primaria della tabella, garantendo l'univocità dei valori",
      "Ordina in automatico le righe della tabella in base al valore contenuto nella colonna"
    ],
    correct: [0],
    exp: "DEFAULT fornisce un valore predefinito: se in un INSERT non indichi quella colonna, il DBMS usa il valore di default (qui 1). Comodo per campi come 'attivo' o una data di creazione."
  },
  {
    id: "sql105", topic: "Cancellare i dati",
    q: "Qual è la differenza tra TRUNCATE TABLE e DELETE FROM (senza WHERE)?",
    opts: [
      "Entrambi svuotano i dati, ma TRUNCATE è più rapido e senza WHERE; DELETE va riga per riga",
      "Sono equivalenti: cambia solo il nome, ma eseguono esattamente la stessa identica operazione",
      "TRUNCATE elimina anche la struttura della tabella, mentre DELETE ne conserva le sole righe",
      "DELETE è più veloce di TRUNCATE perché non scrive nel log delle transazioni del database"
    ],
    correct: [0],
    exp: "TRUNCATE svuota rapidamente l'intera tabella (senza WHERE, spesso resettando l'auto-increment). DELETE cancella le righe una a una e accetta una WHERE per rimuoverne solo alcune. DROP invece elimina proprio la tabella."
  },
  {
    id: "sql106", topic: "Chiavi",
    q: "Cos'è una chiave primaria COMPOSTA (composite key)?",
    opts: [
      "Una chiave primaria formata da più colonne insieme, la cui combinazione è univoca",
      "Una chiave il cui valore può ripetersi tra le righe senza violare alcun vincolo",
      "Un altro nome con cui viene indicata la chiave esterna che collega due tabelle",
      "Una chiave i cui valori vengono cifrati per proteggere l'identità di ogni riga"
    ],
    correct: [0],
    exp: "Una chiave primaria composta è formata da due o più colonne: è la loro COMBINAZIONE a dover essere univoca. Utile ad es. nelle tabelle ponte di una relazione molti-a-molti."
  },
  {
    id: "sql107", topic: "UNION",
    q: "A cosa serve l'operatore UNION tra due SELECT?",
    opts: [
      "Combina (impila) le righe dei due risultati in un unico elenco, togliendo i duplicati",
      "Affianca le colonne dei due risultati, allargando la tabella con nuovi campi a destra",
      "Collega due tabelle sui campi in comune, come farebbe una normale operazione di JOIN",
      "Ordina automaticamente le righe dei due risultati in base al valore della prima colonna"
    ],
    correct: [0],
    exp: "UNION mette insieme (una sotto l'altra) le righe di due query con colonne compatibili, rimuovendo i duplicati (UNION ALL li mantiene). Diverso dalla JOIN, che affianca colonne di tabelle collegate."
  },
  {
    id: "sql108", topic: "Subquery",
    q: "Cos'è una subquery (query annidata)?",
    opts: [
      "Una query scritta dentro un'altra, il cui risultato viene usato da quella esterna",
      "Una query salvata nel database e richiamabile con una SELECT come una vista",
      "Una query che serve unicamente a cancellare righe da più tabelle collegate",
      "Un elenco ordinato dei valori di una colonna usato per velocizzare le ricerche"
    ],
    correct: [0],
    exp: "Una subquery è una query interna a un'altra, spesso nel WHERE o nel FROM. Es. WHERE prezzo > (SELECT AVG(prezzo) FROM articoli): la query interna calcola la media, quella esterna la usa come filtro."
  },
  {
    id: "sql109", topic: "NoSQL",
    q: "Quali sono esempi di database NoSQL (non relazionali)? (una o più risposte)",
    opts: [
      "MongoDB",
      "Cassandra",
      "DynamoDB",
      "MySQL"
    ],
    correct: [0,1,2],
    exp: "MongoDB (documenti), Cassandra (a colonne) e DynamoDB (chiave-valore) sono database NoSQL. MySQL è invece un RDBMS relazionale (SQL). I NoSQL spesso sacrificano la piena conformità ACID per scalabilità e flessibilità."
  },
  {
    id: "sql110", topic: "Connettività ai database",
    q: "Which technology is commonly used to connect an application to a SQL database?",
    opts: [
      "JDBC (Java Database Connectivity), un'API standard per collegarsi ai database relazionali",
      "FTP (File Transfer Protocol), usato per trasferire file tra un client e un server",
      "SSH (Secure Shell), usato per accedere in modo sicuro a un terminale remoto",
      "SMTP (Simple Mail Transfer Protocol), usato per inviare messaggi di posta"
    ],
    correct: [0],
    exp: "JDBC (e il suo equivalente ODBC) è lo standard per connettere un'applicazione a un database SQL. FTP, SSH e SMTP servono a scopi diversi (file, accesso remoto, email): distrattori plausibili ma sbagliati."
  },
  {
    id: "sql111", topic: "Funzioni di aggregazione",
    q: "In una colonna con alcuni valori NULL, cosa conta COUNT(colonna) rispetto a COUNT(*)?",
    opts: [
      "COUNT(colonna) conta solo i valori NON NULL; COUNT(*) conta tutte le righe",
      "Contano entrambi tutte le righe, inclusi i valori NULL della colonna",
      "COUNT(colonna) conta i NULL, mentre COUNT(*) li esclude dal totale",
      "Contano entrambi solo i valori distinti presenti nella colonna indicata"
    ],
    correct: [0],
    exp: "COUNT(colonna) ignora i NULL e conta solo i valori presenti; COUNT(*) conta le righe a prescindere dai NULL. Trappola frequente quando una colonna ha valori mancanti."
  },
  {
    id: "sql112", topic: "Valori NULL",
    q: "Cosa restituisce la query ... WHERE Telefono = NULL ?",
    opts: [
      "Nessuna riga: con NULL si usa IS NULL, non =, altrimenti il confronto è 'sconosciuto'",
      "Tutte le righe in cui il campo Telefono è effettivamente vuoto, come ci si aspetta",
      "Tutte le righe della tabella, dato che NULL corrisponde a qualunque altro valore",
      "Un errore di sintassi che impedisce del tutto l'esecuzione della query indicata"
    ],
    correct: [0],
    exp: "Trappola: = NULL non fa quel che sembra. In SQL ogni confronto con NULL dà 'sconosciuto', mai vero, quindi non estrae righe. Bisogna usare IS NULL / IS NOT NULL."
  },
  {
    id: "sql113", topic: "Cancellare dati e strutture",
    q: "Vuoi svuotare una tabella dai dati MA mantenerne la struttura. Quale istruzione NON è adatta?",
    opts: [
      "DROP TABLE, perché elimina anche la struttura della tabella, non solo i dati",
      "DELETE FROM tabella, che rimuove le righe lasciando in piedi la tabella",
      "TRUNCATE TABLE tabella, che svuota rapidamente la tabella dai dati",
      "DELETE FROM tabella WHERE 1=1, che rimuove comunque tutte le righe"
    ],
    correct: [0],
    exp: "Trappola sul verbo giusto: DELETE e TRUNCATE tolgono i DATI ma lasciano la tabella. DROP elimina proprio la tabella (struttura inclusa): NON va bene se vuoi conservarla vuota."
  },
  {
    id: "sql114", topic: "JOIN",
    q: "Vuoi elencare TUTTI i clienti, anche quelli che non hanno mai fatto un ordine. Quale join usi?",
    opts: [
      "LEFT JOIN da Clienti verso Ordini, così restano anche i clienti senza ordini",
      "INNER JOIN tra Clienti e Ordini, così ottieni tutte le combinazioni possibili",
      "INNER JOIN da Ordini verso Clienti, così includi anche gli ordini senza cliente",
      "Una semplice SELECT sulla sola tabella Ordini, che contiene già tutti i clienti"
    ],
    correct: [0],
    exp: "La INNER JOIN scarterebbe i clienti senza ordini (nessuna corrispondenza). La LEFT JOIN da Clienti mantiene TUTTI i clienti, riempiendo con NULL i dati degli ordini mancanti. Trappola classica INNER vs LEFT."
  },
  {
    id: "sql115", topic: "GROUP BY",
    q: "SELECT Reparto, Nome, COUNT(*) FROM Dipendenti GROUP BY Reparto. Cosa c'è di sbagliato?",
    opts: [
      "Nome non è aggregato né in GROUP BY: ogni campo non aggregato deve stare nella GROUP BY",
      "Non si può usare COUNT(*) insieme alla clausola GROUP BY nella stessa query",
      "Manca la clausola WHERE, che è obbligatoria ogni volta che si usa GROUP BY",
      "GROUP BY va scritto prima di FROM e non dopo, quindi la query non è valida"
    ],
    correct: [0],
    exp: "Regola: ogni campo nella SELECT che non è dentro una funzione di aggregazione deve comparire nella GROUP BY. Qui Nome viola la regola. COUNT(*) con GROUP BY è invece del tutto legittimo."
  },
  {
    id: "sql116", topic: "HAVING e WHERE",
    q: "Vuoi tenere solo i reparti con più di 10 dipendenti, contati con COUNT(*). Quale clausola usi?",
    opts: [
      "HAVING COUNT(*) > 10, perché filtra sul RISULTATO dell'aggregazione",
      "WHERE COUNT(*) > 10, perché filtra le righe prima del raggruppamento",
      "WHERE reparto > 10, applicando il filtro direttamente sul nome del reparto",
      "ORDER BY COUNT(*) > 10, ordinando i reparti in base al valore del conteggio"
    ],
    correct: [0],
    exp: "WHERE agisce sulle singole righe PRIMA del raggruppamento e non può usare un COUNT. Per filtrare sul risultato di un'aggregazione si usa HAVING. Trappola: WHERE su un COUNT dà errore."
  },
  {
    id: "sql117", topic: "UNION",
    q: "Qual è la differenza tra UNION e UNION ALL?",
    opts: [
      "UNION elimina le righe duplicate dal risultato; UNION ALL le mantiene tutte",
      "UNION affianca le colonne, mentre UNION ALL le impila una sotto l'altra",
      "UNION unisce due tabelle con una join; UNION ALL fa un prodotto incrociato",
      "UNION ordina in automatico il risultato; UNION ALL lo lascia disordinato"
    ],
    correct: [0],
    exp: "Entrambi impilano le righe di due query compatibili. UNION rimuove i duplicati (ed è più lento); UNION ALL li mantiene tutti. Non c'entrano con l'affiancare colonne (quello è la JOIN)."
  },
  {
    id: "sql118", topic: "Chiavi",
    q: "Una colonna definita come PRIMARY KEY può contenere il valore NULL?",
    opts: [
      "No: una chiave primaria deve essere sempre univoca e NOT NULL",
      "Sì, ma è ammesso un solo valore NULL in tutta la colonna",
      "Sì, i valori NULL sono sempre ammessi in qualunque colonna chiave",
      "Solo se la chiave primaria è composta da più colonne insieme"
    ],
    correct: [0],
    exp: "La PRIMARY KEY identifica in modo univoco ogni riga, quindi non può mai essere NULL né ripetersi. È invece il vincolo UNIQUE che, in alcuni DBMS, tollera un valore NULL."
  },
  {
    id: "sql119", topic: "SELECT / DISTINCT",
    q: "SELECT DISTINCT Citta, Nome FROM Clienti. Su cosa agisce DISTINCT?",
    opts: [
      "Sulla COMBINAZIONE di tutte le colonne selezionate, non solo sulla prima",
      "Solo sulla prima colonna elencata, cioè Citta, ignorando del tutto Nome",
      "Solo sull'ultima colonna elencata, cioè Nome, ignorando del tutto Citta",
      "Su ogni colonna separatamente, restituendo due elenchi distinti di valori"
    ],
    correct: [0],
    exp: "Trappola: DISTINCT non riguarda solo la prima colonna, ma l'intera RIGA selezionata. Due righe sono duplicate solo se coincidono su Citta E Nome: quindi 'Milano, Rossi' e 'Milano, Bianchi' restano entrambe."
  },
  // === AGGIUNGI NUOVE DOMANDE SQL QUI ===
]);
