/* ============================================================
   MATERIA: End-to-end Data Analysis  (UFS18)
   100 domande. Basate su ciclo analitico, scraping, stringr,
   quanteda, insight e data storytelling.
   ============================================================ */
registerSubject("End-to-end Data Analysis", [
  {
    id: "u18001", topic: "Analisi end-to-end",
    q: "Che cosa indica un'analisi end-to-end dei dati?",
    opts: [
      "Dalla raccolta dei dati alla comunicazione degli insight",
      "Una sola fase di pulizia dei dati",
      "Un grafico finale senza analisi"
    ],
    correct: [0],
    exp: "L'analisi end-to-end copre l'intero ciclo: domanda, raccolta, pulizia, trasformazione, analisi, visualizzazione e comunicazione degli insight utili all'azione."
  },
  {
    id: "u18002", topic: "Obiettivo dell'analisi",
    q: "L'obiettivo finale di un progetto end-to-end e':",
    opts: [
      "Scrivere codice senza comunicarlo",
      "Trasformare dati grezzi in insight azionabili",
      "Archiviare file senza interpretarli"
    ],
    correct: [1],
    exp: "Il valore non e' nei dati grezzi ma nella capacita' di interpretarli e comunicarli in modo che guidino decisioni concrete."
  },
  {
    id: "u18003", topic: "Dato informazione insight",
    q: "Quale sequenza descrive meglio la crescita di valore nell'analisi?",
    opts: [
      "Azione -> dato -> grafico -> file",
      "Insight -> dato -> azione -> informazione",
      "Dato -> informazione -> insight -> azione"
    ],
    correct: [2],
    exp: "Il dato e' grezzo; diventa informazione quando e' contestualizzato; diventa insight quando cambia la comprensione e suggerisce un'azione."
  },
  {
    id: "u18004", topic: "Dato",
    q: "Un dato, preso da solo, e':",
    opts: [
      "Un elemento grezzo privo di contesto interpretativo",
      "Una decisione gia' pronta",
      "Una raccomandazione strategica"
    ],
    correct: [0],
    exp: "Un valore come '50 euro' non dice se il prezzo e' alto o basso finche' non viene confrontato con contesto, categorie, tempo o obiettivi."
  },
  {
    id: "u18005", topic: "Informazione",
    q: "Quando un dato diventa informazione?",
    opts: [
      "Quando e' lasciato senza confronto",
      "Quando viene contestualizzato e collegato ad altri elementi",
      "Quando viene rimosso dal dataset"
    ],
    correct: [1],
    exp: "Confrontare prezzi medi tra categorie, periodi o gruppi aggiunge contesto: il dato inizia a rispondere a una domanda."
  },
  {
    id: "u18006", topic: "Insight",
    q: "Un insight e':",
    opts: [
      "Una variabile senza contesto",
      "Un numero isolato in una tabella",
      "Una comprensione che cambia prospettiva o azione"
    ],
    correct: [2],
    exp: "Un insight non descrive soltanto cosa accade: rivela un pattern, una relazione o un'anomalia che modifica il modo di interpretare il fenomeno."
  },
  {
    id: "u18007", topic: "Exploratory vs explanatory",
    q: "L'analisi esplorativa serve soprattutto a:",
    opts: [
      "Capire cosa contengono i dati e cercare pattern",
      "Presentare solo la conclusione finale",
      "Scrivere una storia gia' chiusa"
    ],
    correct: [0],
    exp: "L'exploratory analysis e' aperta, flessibile e iterativa: pone domande, prova strade, cerca anomalie, relazioni e pattern."
  },
  {
    id: "u18008", topic: "Exploratory vs explanatory",
    q: "L'analisi esplicativa serve soprattutto a:",
    opts: [
      "Tenere tutto il codice sperimentale",
      "Comunicare in modo chiaro cio' che e' stato scoperto",
      "Mostrare ogni tabella prodotta"
    ],
    correct: [1],
    exp: "L'explanatory analysis seleziona cio' che conta, costruisce una sequenza logica e trasforma l'esplorazione in una storia comprensibile."
  },
  {
    id: "u18009", topic: "Processo iterativo",
    q: "Perche' il ciclo end-to-end non e' lineare una volta per tutte?",
    opts: [
      "La comunicazione elimina ogni nuova analisi",
      "La raccolta dati avviene alla fine",
      "Gli insight generano nuove domande e fasi precedenti"
    ],
    correct: [2],
    exp: "Un progetto dati e' ciclico: analisi, comunicazione e azione possono far emergere nuove domande, richiedendo nuove raccolte o nuove trasformazioni."
  },
  {
    id: "u18010", topic: "Data literacy",
    q: "La data literacy e' la capacita' di:",
    opts: [
      "Capire, interpretare e comunicare i dati correttamente",
      "Memorizzare ogni formula statistica",
      "Disegnare grafici senza contesto"
    ],
    correct: [0],
    exp: "Saper leggere e spiegare i dati e' essenziale: senza interpretazione e comunicazione, anche dataset ricchi restano inutilizzati."
  },
  {
    id: "u18011", topic: "Comunicazione efficace",
    q: "Perche' la comunicazione e' una fase critica dell'analisi?",
    opts: [
      "Perche' sostituisce la qualita' dei dati",
      "Rende gli insight chiari e orientati all'azione",
      "Perche' serve solo a decorare slide"
    ],
    correct: [1],
    exp: "Non basta trovare un insight: bisogna spiegarlo in modo chiaro all'audience giusta, collegandolo a decisioni e implicazioni."
  },
  {
    id: "u18012", topic: "Problem definition",
    q: "Una buona analisi dovrebbe partire da:",
    opts: [
      "Un dataset senza obiettivo",
      "Una libreria installata prima del bisogno",
      "Una domanda o problema definito chiaramente"
    ],
    correct: [2],
    exp: "La definizione del problema orienta raccolta dati, trasformazioni, metriche e comunicazione. Senza domanda, l'analisi rischia di essere dispersiva."
  },
  {
    id: "u18013", topic: "Audience",
    q: "Perche' conoscere l'audience e' importante nella data story?",
    opts: [
      "Per scegliere messaggi e metriche rilevanti",
      "Per mostrare tutti i KPI disponibili",
      "Per usare lo stesso racconto con chiunque"
    ],
    correct: [0],
    exp: "Audience diverse hanno obiettivi diversi: marketing, vendite e prodotto possono richiedere metriche e messaggi differenti anche sullo stesso caso."
  },
  {
    id: "u18014", topic: "Base dati",
    q: "In una data story, una buona base dati deve essere:",
    opts: [
      "Grezza e non ancora ripulita dagli errori",
      "Rilevante, affidabile e coerente con la domanda",
      "Focalizzata su un solo indicatore isolato"
    ],
    correct: [1],
    exp: "La credibilita' della storia dipende da dati pertinenti, fonti chiare, periodo dichiarato, unita' di misura coerenti e limiti esplicitati."
  },
  {
    id: "u18015", topic: "Ridondanza",
    q: "Perche' evitare analisi accessorie in una presentazione dati?",
    opts: [
      "Per evitare qualsiasi confronto",
      "Per nascondere i limiti dell'analisi",
      "Per non distrarre dal messaggio principale"
    ],
    correct: [2],
    exp: "Una data story efficace seleziona solo le evidenze utili alla domanda e all'audience; il resto aumenta rumore cognitivo."
  },
  {
    id: "u18016", topic: "Web scraping",
    q: "Che cosa e' il web scraping?",
    opts: [
      "Estrazione automatizzata di dati da pagine web",
      "Creazione manuale di grafici web",
      "Compressione di file HTML"
    ],
    correct: [0],
    exp: "Lo scraping legge il contenuto di una pagina, ne analizza la struttura e ne estrae le informazioni utili trasformandole in dati elaborabili."
  },
  {
    id: "u18017", topic: "Screen scraping",
    q: "Lo screen scraping si basa su:",
    opts: [
      "Inserimento manuale dei record",
      "Lettura dell'HTML e selezione via DOM/CSS",
      "Query SQL su un database locale"
    ],
    correct: [1],
    exp: "Nel corso lo screen scraping usa la pagina HTML, il DOM e selettori CSS/XPath, spesso con rvest, quando non e' disponibile una API ufficiale."
  },
  {
    id: "u18018", topic: "API scraping",
    q: "Rispetto allo screen scraping, una API ufficiale di solito e':",
    opts: [
      "Limitata solo a immagini",
      "Piu' fragile se cambia la grafica",
      "Piu' stabile e restituisce dati gia' strutturati"
    ],
    correct: [2],
    exp: "Le API sono progettate per fornire dati: in genere sono piu' stabili, pulite e conformi rispetto all'estrazione dal layout HTML."
  },
  {
    id: "u18019", topic: "Fragilita' scraping",
    q: "Perche' lo screen scraping e' fragile?",
    opts: [
      "Può rompersi se cambia la struttura del sito",
      "Perche' produce solo dati numerici",
      "Perche' ignora il DOM"
    ],
    correct: [0],
    exp: "I selettori CSS dipendono dalla struttura HTML. Se classi, nodi o layout cambiano, il codice puo' non trovare piu' gli elementi attesi."
  },
  {
    id: "u18020", topic: "robots.txt",
    q: "Prima di fare scraping e' corretto controllare robots.txt per:",
    opts: [
      "Scaricare automaticamente tutti i file",
      "Capire le regole dichiarate dal sito per i crawler",
      "Aggirare i limiti del server"
    ],
    correct: [1],
    exp: "Il file robots.txt indica quali aree del sito sono consentite o vietate ai crawler. Non sostituisce il giudizio legale, ma e' un controllo minimo."
  },
  {
    id: "u18021", topic: "HTTP request",
    q: "Nel codice di scraping, user agent e header servono a:",
    opts: [
      "Eliminare il bisogno di selettori",
      "Nascondere l'identita' del codice",
      "Presentare la richiesta al server in modo trasparente"
    ],
    correct: [2],
    exp: "Specificare user agent e informazioni di contatto rende la richiesta piu' leggibile per il server e coerente con buone pratiche di scraping."
  },
  {
    id: "u18022", topic: "DOM",
    q: "Nel web scraping, il DOM e':",
    opts: [
      "La struttura ad albero degli elementi HTML della pagina",
      "Un algoritmo che raggruppa osservazioni senza label",
      "Un formato di database relazionale"
    ],
    correct: [0],
    exp: "Il DOM rappresenta la pagina come nodi annidati: titoli, paragrafi, link, immagini e altri elementi selezionabili."
  },
  {
    id: "u18023", topic: "CSS selector",
    q: "Un selettore CSS nello scraping serve a:",
    opts: [
      "Definire una regressione statistica",
      "Individuare gli elementi HTML da cui estrarre dati",
      "Creare una matrice di frequenze"
    ],
    correct: [1],
    exp: "Con CSS selector si indicano nodi specifici del DOM, per esempio classi o combinazioni di elementi, da passare a funzioni come html_nodes()."
  },
  {
    id: "u18024", topic: "SelectorGadget",
    q: "SelectorGadget e' utile per:",
    opts: [
      "Calcolare pesi TF-IDF per termini in documenti testuali",
      "Pulire stopword italiane",
      "Aiutare a individuare selettori CSS sulle pagine web"
    ],
    correct: [2],
    exp: "SelectorGadget facilita l'identificazione dei CSS selector da usare nello scraping quando si esplora una pagina HTML."
  },
  {
    id: "u18025", topic: "rvest",
    q: "In rvest, read_html() serve a:",
    opts: [
      "Leggere una pagina o un file HTML come oggetto analizzabile",
      "Estrarre direttamente solo numeri",
      "Creare una wordcloud basata sulle frequenze dei termini"
    ],
    correct: [0],
    exp: "read_html() carica il documento HTML; poi si usano selettori e funzioni come html_nodes() e html_text()/html_text2() per estrarre contenuti."
  },
  {
    id: "u18026", topic: "rvest",
    q: "In rvest, html_nodes(css = ...) serve a:",
    opts: [
      "Convertire parole in token",
      "Selezionare nodi HTML usando un selettore CSS",
      "Creare un file robots.txt"
    ],
    correct: [1],
    exp: "html_nodes() isola gli elementi della pagina che corrispondono al selettore CSS indicato."
  },
  {
    id: "u18027", topic: "rvest",
    q: "html_text2() e' usato per:",
    opts: [
      "Calcolare frequenze per gruppo",
      "Creare un corpus quanteda prima delle analisi testuali",
      "Estrarre testo da nodi HTML con gestione piu' pulita degli spazi"
    ],
    correct: [2],
    exp: "html_text() e html_text2() estraggono testo dai nodi; html_text2() tende a restituire testo piu' leggibile normalizzando meglio la spaziatura."
  },
  {
    id: "u18028", topic: "Scraping workflow",
    q: "Il flusso base dello screen scraping nel corso e':",
    opts: [
      "Acquisire HTML, selezionare nodi, estrarre, tabellare",
      "Scrivere grafico -> cancellare HTML -> inviare email",
      "Fare join -> definire CSS -> ignorare pagina"
    ],
    correct: [0],
    exp: "Lo scraping parte dall'acquisizione della pagina, poi naviga il DOM con selettori, estrae contenuti e li organizza in dataset."
  },
  {
    id: "u18029", topic: "Salvataggio HTML",
    q: "Perche' salvare localmente l'HTML scaricato puo' essere utile?",
    opts: [
      "Per evitare di pulire i testi",
      "Per lavorare su una copia riproducibile dei dati",
      "Per sostituire l'API"
    ],
    correct: [1],
    exp: "Salvare una pagina consente di ispezionare la stessa versione mentre si costruisce il parser, riducendo dipendenza da cambiamenti immediati del sito."
  },
  {
    id: "u18030", topic: "Dataset wide",
    q: "Nell'esercizio sui corsi ITS, la tabella wide richiesta prevede:",
    opts: [
      "Solo righe duplicate per ogni parola",
      "Una sola colonna con tutto il testo",
      "Sezioni in riga e corsi diversi come colonne"
    ],
    correct: [2],
    exp: "La consegna chiedeva di riassumere sezioni comuni delle pagine corso, confrontando le informazioni dei corsi in colonne diverse."
  },
  {
    id: "u18031", topic: "Dati testuali",
    q: "Perche' i testi sono difficili da analizzare automaticamente?",
    opts: [
      "Sono liberi e poco strutturati",
      "Sono gia' numerici",
      "Hanno schema fisso"
    ],
    correct: [0],
    exp: "Il linguaggio naturale include sinonimi, maiuscole, errori, abbreviazioni e forme diverse: va pulito e standardizzato prima dell'analisi."
  },
  {
    id: "u18032", topic: "Character in R",
    q: "In R, un vettore character rappresenta:",
    opts: [
      "Solo valori TRUE/FALSE",
      "Testi o stringhe scritte tra virgolette",
      "Solo date in formato ISO"
    ],
    correct: [1],
    exp: "Le stringhe in R sono valori character e possono contenere lettere, spazi, numeri, simboli o emoji."
  },
  {
    id: "u18033", topic: "Case sensitivity",
    q: "R e' case-sensitive: questo significa che:",
    opts: [
      "Gli accenti vengono corretti",
      "Tutti i testi diventano minuscoli automaticamente",
      "Maiuscole e minuscole possono essere trattate come valori diversi"
    ],
    correct: [2],
    exp: "Per confronti e join su testo conviene spesso standardizzare con funzioni come str_to_lower(), per evitare differenze artificiali."
  },
  {
    id: "u18034", topic: "stringr str_c",
    q: "str_c() serve a:",
    opts: [
      "Unire piu' stringhe in una sola",
      "Rimuovere stopword da token",
      "Leggere una pagina HTML"
    ],
    correct: [0],
    exp: "str_c() concatena stringhe; sep definisce il separatore tra argomenti, mentre collapse unisce gli elementi di un vettore in una sola stringa."
  },
  {
    id: "u18035", topic: "stringr str_c",
    q: "In str_c(), l'argomento collapse serve a:",
    opts: [
      "Separare colonne in piu' variabili",
      "Unire tutti gli elementi di un vettore in un'unica stringa",
      "Convertire tutto in maiuscolo"
    ],
    correct: [1],
    exp: "sep separa elementi passati insieme; collapse compatta un vettore intero in una stringa finale, spesso usando un separatore."
  },
  {
    id: "u18036", topic: "stringr case",
    q: "str_to_lower() e str_to_upper() sono utili per:",
    opts: [
      "Calcolare frequenze di parole",
      "Estrarre contenuto testuale da pagine o markup HTML",
      "Standardizzare maiuscole e minuscole nei testi"
    ],
    correct: [2],
    exp: "Sono funzioni stringr per uniformare il formato del testo, riducendo errori in confronti, filtri e join."
  },
  {
    id: "u18037", topic: "stringr title",
    q: "str_to_title() produce tipicamente:",
    opts: [
      "Testo con iniziale maiuscola per ogni parola",
      "Testo tutto minuscolo",
      "Una lista di parole comuni da rimuovere nel preprocessing"
    ],
    correct: [0],
    exp: "str_to_title() e' utile per normalizzare nomi propri o etichette leggibili dopo aver pulito input scritti in modo incoerente."
  },
  {
    id: "u18038", topic: "stringr spazi",
    q: "Differenza corretta tra str_trim() e str_squish():",
    opts: [
      "trim ordina parole; squish crea token",
      "trim toglie i bordi; squish anche gli spazi interni",
      "trim elimina numeri; squish elimina stopword"
    ],
    correct: [1],
    exp: "str_trim() toglie spazi iniziali/finali; str_squish() fa anche collassare sequenze di spazi interni a uno solo."
  },
  {
    id: "u18039", topic: "stringr detect",
    q: "str_detect(string, pattern) restituisce:",
    opts: [
      "Una matrice document-feature",
      "La prima parola estratta",
      "TRUE/FALSE per indicare se il pattern e' presente"
    ],
    correct: [2],
    exp: "str_detect() e' utile per filtrare commenti, creare variabili logiche e contare testi che contengono parole chiave."
  },
  {
    id: "u18040", topic: "stringr replace",
    q: "Differenza tra str_replace() e str_replace_all():",
    opts: [
      "replace cambia la prima occorrenza; replace_all tutte",
      "replace ordina; replace_all tokenizza",
      "replace legge HTML; replace_all legge PDF"
    ],
    correct: [0],
    exp: "La distinzione e' critica nella pulizia: correggere una sola occorrenza puo' lasciare valori ancora incoerenti nel testo."
  },
  {
    id: "u18041", topic: "stringr extract",
    q: "str_extract_all() rispetto a str_extract():",
    opts: [
      "Restituisce solo valori booleani",
      "Restituisce tutte le corrispondenze invece della prima soltanto",
      "Rimuove automaticamente gli accenti"
    ],
    correct: [1],
    exp: "str_extract() prende la prima corrispondenza; str_extract_all() raccoglie tutte quelle presenti in ogni stringa."
  },
  {
    id: "u18042", topic: "stringr sort",
    q: "str_sort() restituisce:",
    opts: [
      "Una colonna pulita dagli spazi",
      "Gli indici delle stringhe ordinate",
      "Le stringhe ordinate alfabeticamente"
    ],
    correct: [2],
    exp: "str_sort() restituisce i valori ordinati. str_order() restituisce invece le posizioni utili per riordinare un dataset."
  },
  {
    id: "u18043", topic: "stringr order",
    q: "str_order() e' utile quando si vuole:",
    opts: [
      "Ottenere gli indici per riordinare righe in base a testo",
      "Trovare stopword italiane",
      "Creare un corpus partendo da colonne testuali del dataframe"
    ],
    correct: [0],
    exp: "str_order() produce un ordine di posizioni; puo' essere usato per ordinare righe di un data frame secondo una colonna testuale."
  },
  {
    id: "u18044", topic: "Regex",
    q: "Che cosa sono le espressioni regolari?",
    opts: [
      "Un formato di grafico statistico",
      "Un mini-linguaggio per descrivere pattern nel testo",
      "Una libreria per API ufficiali"
    ],
    correct: [1],
    exp: "Le regex permettono di cercare, estrarre, sostituire o rimuovere sequenze che rispettano uno schema, come cifre, prefissi o estensioni file."
  },
  {
    id: "u18045", topic: "Regex",
    q: "In R/stringr, il pattern per cercare una cifra si scrive:",
    opts: [
      "csv$",
      "[A-Z]",
      "\\\\d"
    ],
    correct: [2],
    exp: "Nelle stringhe R il backslash va scritto doppio; quindi il pattern regex per una cifra e' rappresentato come \\\\d."
  },
  {
    id: "u18046", topic: "Regex",
    q: "Il pattern [A-Z] indica:",
    opts: [
      "Una lettera maiuscola",
      "La fine della stringa",
      "Uno spazio qualsiasi"
    ],
    correct: [0],
    exp: "Le parentesi quadre definiscono una classe di caratteri; [A-Z] intercetta lettere maiuscole dell'alfabeto indicato."
  },
  {
    id: "u18047", topic: "Regex",
    q: "Il simbolo ^ in un pattern come ^R indica:",
    opts: [
      "Fine della stringa",
      "Inizio della stringa",
      "Una vocale qualunque"
    ],
    correct: [1],
    exp: "^ vincola il match all'inizio della stringa: ^R trova testi che iniziano con R, non parole che contengono R altrove."
  },
  {
    id: "u18048", topic: "Regex",
    q: "Il pattern csv$ serve a trovare:",
    opts: [
      "Qualsiasi cifra prima di csv",
      "Stringhe che iniziano con csv",
      "Stringhe che finiscono con csv"
    ],
    correct: [2],
    exp: "Il simbolo $ indica la fine della stringa; csv$ intercetta nomi che terminano con csv."
  },
  {
    id: "u18049", topic: "Regex",
    q: "In R, perche' spesso si scrive \\\\s invece di \\s?",
    opts: [
      "Perche' il backslash va escapato dentro la stringa R",
      "Perche' \\\\s indica una cifra",
      "Perche' stringr non usa regex"
    ],
    correct: [0],
    exp: "R interpreta il backslash nelle stringhe. Per consegnare alla regex un backslash reale, lo si raddoppia: \\\\s rappresenta uno spazio."
  },
  {
    id: "u18050", topic: "Encoding",
    q: "L'encoding dei caratteri definisce:",
    opts: [
      "Come ordinare righe numeriche",
      "Come i byte diventano lettere, simboli o emoji",
      "Come calcolare una media"
    ],
    correct: [1],
    exp: "Se l'encoding e' interpretato male, caratteri accentati possono apparire corrotti, per esempio Jose' letto come sequenze strane."
  },
  {
    id: "u18051", topic: "Encoding",
    q: "Quando importi un CSV con accenti corrotti, una soluzione corretta e':",
    opts: [
      "Rimuovere tutte le righe accentate",
      "Applicare dfm_trim",
      "Rileggere il file specificando fileEncoding appropriato"
    ],
    correct: [2],
    exp: "read.csv() e funzioni simili permettono fileEncoding, per esempio UTF-8 o latin1, per interpretare correttamente i byte del file."
  },
  {
    id: "u18052", topic: "stringr funzioni",
    q: "Quale funzione appartiene al pacchetto stringr di R?",
    opts: [
      "str_detect()",
      "dfm_trim()",
      "read_csv()"
    ],
    correct: [0],
    exp: "stringr fornisce funzioni per le stringhe come str_squish(), str_detect(), str_replace_all(). dfm_trim() è di quanteda (analisi testuale) e read_csv() di readr."
  },
  {
    id: "u18053", topic: "Quanteda",
    q: "quanteda viene usato soprattutto per:",
    opts: [
      "Eseguire query SQL su database",
      "Analisi quantitativa di testi con corpus e DFM",
      "Standardizzare date contrattuali"
    ],
    correct: [1],
    exp: "quanteda porta i testi da stringhe/corpus a token e matrici numeriche, consentendo frequenze, confronti, concordanze e visualizzazioni testuali."
  },
  {
    id: "u18054", topic: "readtext",
    q: "Nel flusso quanteda, readtext serve a:",
    opts: [
      "Eseguire scraping del DOM",
      "Creare direttamente una dashboard",
      "Importare file testuali da analizzare"
    ],
    correct: [2],
    exp: "readtext facilita l'importazione di documenti testuali; poi quanteda costruisce corpus, token e DFM."
  },
  {
    id: "u18055", topic: "Corpus",
    q: "Un corpus in quanteda e':",
    opts: [
      "Una collezione organizzata di testi con eventuali metadati",
      "Una singola parola frequente",
      "Un grafico a barre per confrontare categorie o frequenze"
    ],
    correct: [0],
    exp: "Il corpus rappresenta l'insieme dei documenti da analizzare e puo' conservare docvars come autore, data, fonte o categoria."
  },
  {
    id: "u18056", topic: "Corpus",
    q: "In corpus(dati, text_field = 'testo'), text_field indica:",
    opts: [
      "La colonna da eliminare",
      "La colonna che contiene il testo da analizzare",
      "Il pattern regex da cercare"
    ],
    correct: [1],
    exp: "Quando il corpus nasce da un dataframe, text_field specifica quale colonna contiene il contenuto testuale."
  },
  {
    id: "u18057", topic: "Docvars",
    q: "docvars() in quanteda permette di:",
    opts: [
      "Calcolare un join tra tabelle",
      "Rimuovere la punteggiatura dai token",
      "Visualizzare o usare metadati associati ai documenti"
    ],
    correct: [2],
    exp: "Le docvars sono variabili documento, utili per analisi comparative per autore, gruppo, categoria, periodo o sentiment."
  },
  {
    id: "u18058", topic: "Corpus summary",
    q: "summary(corpus) restituisce informazioni come:",
    opts: [
      "Types, tokens e frasi dei documenti",
      "Solo il codice CSS usato",
      "Solo il numero di colonne numeriche"
    ],
    correct: [0],
    exp: "Il riepilogo del corpus aiuta a capire dimensione e struttura dei testi prima di passare a tokenizzazione e analisi."
  },
  {
    id: "u18059", topic: "textstat_summary",
    q: "textstat_summary() e' utile per:",
    opts: [
      "Correggere encoding automaticamente",
      "Ottenere statistiche descrittive sui testi del corpus",
      "Sostituire tutte le parole"
    ],
    correct: [1],
    exp: "textstat_summary() produce statistiche piu' dettagliate sui documenti, utili per una prima diagnosi testuale."
  },
  {
    id: "u18060", topic: "Tokenizzazione",
    q: "tokens() in quanteda serve a:",
    opts: [
      "Convertire HTML in CSS",
      "Creare direttamente una API",
      "Dividere testi in unita' minime di analisi"
    ],
    correct: [2],
    exp: "La tokenizzazione trasforma il testo grezzo in token, di solito parole, su cui applicare pulizia, conteggi e analisi."
  },
  {
    id: "u18061", topic: "Tokenizzazione",
    q: "In tokens(), remove_punct = TRUE fa:",
    opts: [
      "Rimuove la punteggiatura durante la tokenizzazione",
      "Rimuove solo le stopword italiane",
      "Converte tutto in DFM"
    ],
    correct: [0],
    exp: "tokens() puo' rimuovere punteggiatura, numeri, simboli e separatori, preparando testi piu' puliti per l'analisi."
  },
  {
    id: "u18062", topic: "Tokenizzazione",
    q: "tokens_tolower() serve a:",
    opts: [
      "Rimuovere token troppo rari",
      "Convertire tutti i token in minuscolo",
      "Creare una wordcloud basata sulle frequenze dei termini"
    ],
    correct: [1],
    exp: "Portare i token in minuscolo rende confrontabili forme come Roma e roma, riducendo duplicazioni artificiali."
  },
  {
    id: "u18063", topic: "Stopword",
    q: "tokens_remove(Tokens, stopwords('it')) serve a:",
    opts: [
      "Creare un corpus partendo da colonne testuali del dataframe",
      "Unire parole composte",
      "Rimuovere parole comuni italiane poco informative"
    ],
    correct: [2],
    exp: "Le stopword sono parole frequenti come articoli e preposizioni; rimuoverle puo' ridurre rumore se non sono rilevanti per l'analisi."
  },
  {
    id: "u18064", topic: "valuetype",
    q: "In tokens_remove(), valuetype = 'glob' consente di:",
    opts: [
      "Usare wildcard semplici come auto* o *mente",
      "Fare solo match case-sensitive",
      "Creare un embedding contestuale"
    ],
    correct: [0],
    exp: "quanteda supporta fixed, regex e glob. Glob permette pattern semplici con jolly senza scrivere regex complesse."
  },
  {
    id: "u18065", topic: "Stemming",
    q: "tokens_wordstem(language = 'italian') serve a:",
    opts: [
      "Tradurre testi in italiano",
      "Ridurre parole alla radice secondo la lingua scelta",
      "Ordinare alfabeticamente documenti"
    ],
    correct: [1],
    exp: "Lo stemming unifica forme come amato, amare, amando in una radice comune, utile per ridurre varianti lessicali."
  },
  {
    id: "u18066", topic: "Multiword",
    q: "tokens_compound(phrase('colonna sonora')) serve a:",
    opts: [
      "Convertire un corpus in HTML",
      "Rimuovere tutte le parole rare",
      "Trattare piu' parole come un unico token composto"
    ],
    correct: [2],
    exp: "Le multiword expressions vanno unite quando il significato dipende dalla sequenza completa, per esempio big data o colonna sonora."
  },
  {
    id: "u18067", topic: "DFM",
    q: "Una Document-Feature Matrix e':",
    opts: [
      "Documenti in riga e parole in colonna",
      "Un file HTML con nodi selezionati",
      "Un vettore di stringhe ordinate"
    ],
    correct: [0],
    exp: "La DFM traduce testi in numeri: ogni cella indica quante volte una feature compare in un documento."
  },
  {
    id: "u18068", topic: "DFM",
    q: "In una DFM, ogni colonna rappresenta tipicamente:",
    opts: [
      "Una slide della presentazione",
      "Una feature, spesso una parola o token",
      "Una regola robots.txt"
    ],
    correct: [1],
    exp: "Le colonne della DFM sono le feature testuali; le righe sono i documenti, e i valori sono frequenze o conteggi."
  },
  {
    id: "u18069", topic: "dfm_trim",
    q: "dfm_trim() serve a:",
    opts: [
      "Fare scraping di una pagina web",
      "Creare automaticamente un corpus",
      "Eliminare dalla DFM termini troppo rari o frequenti"
    ],
    correct: [2],
    exp: "Ridurre dimensionalita' puo' migliorare interpretabilita' e prestazioni, togliendo rumore o termini poco informativi."
  },
  {
    id: "u18070", topic: "Frequenze",
    q: "topfeatures(dfm1, 10) restituisce:",
    opts: [
      "Le parole piu' frequenti nella DFM",
      "I documenti piu' lunghi",
      "Le righe duplicate del dataset"
    ],
    correct: [0],
    exp: "topfeatures() offre una prima fotografia del vocabolario dominante nel corpus o in una parte della DFM."
  },
  {
    id: "u18071", topic: "Frequenze",
    q: "textstat_frequency(x, groups = ...) permette di:",
    opts: [
      "Unire token multi-parola",
      "Calcolare frequenze anche per gruppi di metadati",
      "Ordinare file per estensione"
    ],
    correct: [1],
    exp: "Con groups si confrontano frequenze tra categorie, autori, fonti o periodi usando le docvars."
  },
  {
    id: "u18072", topic: "Wordcloud",
    q: "textplot_wordcloud() visualizza:",
    opts: [
      "Il DOM di una pagina web",
      "Relazioni causali tra variabili",
      "Parole con dimensione proporzionale alla frequenza"
    ],
    correct: [2],
    exp: "La wordcloud e' esplorativa: mostra rapidamente termini ricorrenti, ma non sostituisce analisi quantitative piu' rigorose."
  },
  {
    id: "u18073", topic: "KWIC",
    q: "kwic() significa KeyWord In Context e serve a:",
    opts: [
      "Mostrare una parola col contesto prima e dopo",
      "Creare una tabella wide da HTML",
      "Calcolare una media per categoria"
    ],
    correct: [0],
    exp: "La concordanza KWIC aiuta a capire come una parola viene usata, con quali collocazioni e in quali documenti."
  },
  {
    id: "u18074", topic: "textplot_xray",
    q: "textplot_xray() visualizza:",
    opts: [
      "Le colonne mancanti di un CSV",
      "Le posizioni delle parole chiave nei documenti",
      "La struttura di un data warehouse"
    ],
    correct: [1],
    exp: "textplot_xray prende output KWIC e mostra dove compaiono i termini nei testi, anche confrontando piu' parole."
  },
  {
    id: "u18075", topic: "stringr vs quanteda",
    q: "Differenza corretta tra stringr e quanteda:",
    opts: [
      "quanteda serve solo per database SQL",
      "stringr crea solo DFM; quanteda fa solo CSS",
      "stringr manipola stringhe; quanteda analizza testi"
    ],
    correct: [2],
    exp: "stringr lavora su stringhe o vettori di stringhe. quanteda organizza testi in corpus, token e DFM per analisi quantitativa."
  },
  {
    id: "u18076", topic: "Insight",
    q: "Per riconoscere un insight non basta guardare i numeri perche':",
    opts: [
      "Serve collegare pattern, contesto e implicazioni",
      "I numeri sono sbagliati",
      "Il contesto va eliminato"
    ],
    correct: [0],
    exp: "Un insight nasce dal significato del pattern: bisogna chiedersi perche' accade, per chi conta e che cosa implica."
  },
  {
    id: "u18077", topic: "Insight tempo",
    q: "Un insight basato su cambiamento nel tempo cerca di capire:",
    opts: [
      "Solo quale categoria ha piu' righe",
      "Come un fenomeno evolve tra periodi diversi",
      "Solo quale parola e' piu' lunga"
    ],
    correct: [1],
    exp: "Analizzare trend, stagionalita' o picchi temporali permette di individuare cambiamenti rilevanti, come effetti di campagne o anomalie mensili."
  },
  {
    id: "u18078", topic: "Insight relazione",
    q: "Un insight basato su relazione tra variabili riguarda:",
    opts: [
      "Solo la sintassi del codice",
      "Solo l'ordine alfabetico dei nomi",
      "Come due fattori si associano o influenzano nel contesto"
    ],
    correct: [2],
    exp: "Esempio: ore di ascolto e probabilita' di abbonamento premium. La relazione va interpretata rispetto alla decisione di business."
  },
  {
    id: "u18079", topic: "Insight categorie",
    q: "Un confronto tra categorie e' utile quando:",
    opts: [
      "Gruppi diversi potrebbero comportarsi in modo diverso",
      "Non esistono variabili categoriali",
      "Si vuole evitare segmentazione"
    ],
    correct: [0],
    exp: "Confrontare fasce d'eta', generi, canali o segmenti rivela differenze che possono guidare azioni personalizzate."
  },
  {
    id: "u18080", topic: "Insight anomalie",
    q: "Un outlier in una data story puo' essere utile per:",
    opts: [
      "Dimostrare un errore di codice",
      "Individuare casi critici o buone pratiche da approfondire",
      "Eliminare ogni confronto"
    ],
    correct: [1],
    exp: "Le anomalie non vanno solo rimosse: possono rivelare problemi, opportunita' o casi eccezionali da studiare."
  },
  {
    id: "u18081", topic: "Storytelling",
    q: "Il data storytelling trasforma i dati in:",
    opts: [
      "Un archivio di file non commentati",
      "Una lista completa di ogni comando eseguito",
      "Una narrazione orientata a comprensione e azione"
    ],
    correct: [2],
    exp: "La storia mette in sequenza base dati, evidenza, contesto, interpretazione e azione, rendendo l'analisi comprensibile all'audience."
  },
  {
    id: "u18082", topic: "Informare vs comunicare",
    q: "Differenza tra informare e comunicare nel data storytelling:",
    opts: [
      "Comunicare porta significato e direzione all'audience",
      "Informare e comunicare sono identici",
      "Informare richiede meno precisione"
    ],
    correct: [0],
    exp: "Dire un numero e' informazione; spiegare cosa significa per un obiettivo e che azione suggerisce e' comunicazione."
  },
  {
    id: "u18083", topic: "Cognizione",
    q: "Perche' le storie aiutano con i dati?",
    opts: [
      "Sostituendo la verifica dei dati",
      "Riduce la fatica cognitiva sui numeri astratti",
      "Eliminando la necessita' di grafici"
    ],
    correct: [1],
    exp: "Le persone cercano nessi e contesto. Una narrazione ben costruita rende memorabili e interpretabili evidenze che da sole resterebbero fredde."
  },
  {
    id: "u18084", topic: "Persuasione",
    q: "Nel corso, l'obiettivo della storia sui dati non e' solo far capire ma anche:",
    opts: [
      "Nascondere limiti e fonti",
      "Mostrare ogni esperimento fallito",
      "Far agire in modo coerente con le evidenze"
    ],
    correct: [2],
    exp: "Gli insight devono guidare decisioni, strategie o cambiamenti. La comunicazione efficace collega evidenza e azione."
  },
  {
    id: "u18085", topic: "Ostacoli al cambiamento",
    q: "Quale ostacolo può impedire a un insight di generare cambiamento?",
    opts: [
      "L'inerzia culturale dell'organizzazione",
      "Un dataset pulito e ben strutturato",
      "Una visualizzazione chiara dei risultati"
    ],
    correct: [0],
    exp: "Cattiva comunicazione, chiusura mentale e inerzia culturale bloccano il passaggio dall'insight all'azione. Un dataset pulito e una buona visualizzazione, al contrario, FAVORISCONO il cambiamento."
  },
  {
    id: "u18086", topic: "Visualizzazione",
    q: "Una visualizzazione in una data story dovrebbe:",
    opts: [
      "Mostrare ogni variabile disponibile",
      "Sostenere il messaggio principale e ridurre ambiguita'",
      "Essere decorativa prima che informativa"
    ],
    correct: [1],
    exp: "Il grafico deve chiarire l'insight, non moltiplicare rumore. Titoli, assi, confronti e selezione delle metriche devono servire la storia."
  },
  {
    id: "u18087", topic: "Metriche audience",
    q: "Nel caso rebranding, metriche come engagement rate, sentiment e share of voice sono piu' utili a:",
    opts: [
      "Database administrator sui backup",
      "Team logistico sui tempi consegna",
      "Team marketing interessato a percezione e coinvolgimento"
    ],
    correct: [2],
    exp: "Le metriche vanno scelte per audience e obiettivo. Il marketing valuta impatto comunicativo e relazione con il pubblico."
  },
  {
    id: "u18088", topic: "Messaggio",
    q: "Una raccomandazione data-driven deve essere:",
    opts: [
      "Collegata a evidenze, contesto e decisione da prendere",
      "Una frase generica senza metrica",
      "Una ripetizione del dataset grezzo"
    ],
    correct: [0],
    exp: "La raccomandazione e' credibile se deriva chiaramente dai dati e spiega che cosa fare, perche' e con quali limiti."
  },
  {
    id: "u18089", topic: "Progetto finale",
    q: "Il progetto finale di gruppo UFS18 valuta soprattutto:",
    opts: [
      "Solo memorizzazione di comandi isolati",
      "Gestire un caso reale end-to-end e presentarlo",
      "Solo installazione di pacchetti"
    ],
    correct: [1],
    exp: "La valutazione richiede integrazione: dataset, analisi, dashboard/storyline, insight e comunicazione dei risultati."
  },
  {
    id: "u18090", topic: "Dashboard dataset",
    q: "Per il dataset finale della dashboard, una richiesta era contenere:",
    opts: [
      "Solo commenti testuali",
      "Solo contratti cancellati",
      "Solo contratti attivi"
    ],
    correct: [2],
    exp: "La consegna chiedeva un dataset pulito e coerente per dashboard, filtrato sui contratti attivi e strutturato secondo modello."
  },
  {
    id: "u18091", topic: "Dashboard dataset",
    q: "Standardizzare le date nel dataset dashboard serve a:",
    opts: [
      "Renderle uniformi e confrontabili nelle analisi",
      "Aumentare righe duplicate",
      "Nascondere record mancanti"
    ],
    correct: [0],
    exp: "Date in formati misti rompono filtri, ordinamenti e calcoli temporali. Standardizzarle e' una condizione minima per dashboard affidabili."
  },
  {
    id: "u18092", topic: "Join",
    q: "Effettuare join corretti con l'anagrafica significa:",
    opts: [
      "Duplicare ogni riga volontariamente",
      "Arricchire i dati con attributi tramite chiavi affidabili",
      "Sostituire i dati con grafici"
    ],
    correct: [1],
    exp: "I join devono preservare granularita' e coerenza: chiavi sbagliate creano duplicati, perdita di righe o attributi errati."
  },
  {
    id: "u18093", topic: "Indicatori binari",
    q: "Indicatori binari 0/1 per servizi attivi servono a:",
    opts: [
      "Evitare qualsiasi filtro",
      "Memorizzare testi lunghi in ogni cella",
      "Rappresentare chiaramente presenza o assenza di ciascun servizio"
    ],
    correct: [2],
    exp: "Le colonne 0/1 rendono i servizi facili da aggregare, filtrare e visualizzare in dashboard."
  },
  {
    id: "u18094", topic: "Naming",
    q: "Naming coerente nel dataset finale significa:",
    opts: [
      "Usare nomi di colonne chiari, stabili e uniformi",
      "Cambiare nomi a ogni esportazione",
      "Lasciare spazi casuali nei nomi"
    ],
    correct: [0],
    exp: "Nomi coerenti riducono errori in analisi e dashboard, rendono il dataset leggibile e facilitano collaborazione."
  },
  {
    id: "u18095", topic: "Traccia analisi",
    q: "La traccia dell'analisi richiede di chiarire:",
    opts: [
      "Solo il colore della dashboard",
      "Variabili, approccio, evidenze e ipotesi",
      "Solo la lista dei pacchetti installati"
    ],
    correct: [1],
    exp: "Prima della presentazione va definita la strategia analitica: cosa si vuole capire, con quali variabili e quale storyline provvisoria."
  },
  {
    id: "u18096", topic: "Qualita' dati",
    q: "In un flusso end-to-end, la pulizia dei dati e' necessaria perche':",
    opts: [
      "I grafici correggono automaticamente i dati",
      "La pulizia e' solo estetica",
      "Errori e duplicati possono falsare gli insight"
    ],
    correct: [2],
    exp: "La qualita' del dato condiziona tutte le fasi successive. Insight costruiti su dati sporchi producono decisioni fragili."
  },
  {
    id: "u18097", topic: "Explanatory selection",
    q: "Passare da analisi esplorativa a esplicativa richiede di:",
    opts: [
      "Selezionare e ordinare le evidenze più significative",
      "Mostrare ogni output prodotto",
      "Eliminare il messaggio principale"
    ],
    correct: [0],
    exp: "L'analisi esplicativa non e' un dump dell'esplorazione: e' una sintesi ragionata che guida chi ascolta."
  },
  {
    id: "u18098", topic: "Actionability",
    q: "Un insight e' azionabile quando:",
    opts: [
      "E' solo una descrizione neutra",
      "Suggerisce una decisione o un intervento",
      "Non ha pubblico destinatario"
    ],
    correct: [1],
    exp: "Azionabile significa che l'insight puo' orientare una scelta concreta, per esempio quando proporre un'offerta o su quale segmento intervenire."
  },
  {
    id: "u18099", topic: "Etica scraping",
    q: "Nel web scraping, un comportamento corretto include:",
    opts: [
      "Raccogliere qualunque dato senza verifica",
      "Ignorare robots.txt e fare richieste aggressive",
      "Rispettare regole del sito, limiti e carico sul server"
    ],
    correct: [2],
    exp: "Lo scraping deve essere responsabile: controllare regole, ridurre carico, usare richieste trasparenti e considerare vincoli legali ed etici."
  },
  {
    id: "u18100", topic: "Sintesi UFS18",
    q: "Quale combinazione riassume meglio il percorso UFS18 (end-to-end)?",
    opts: [
      "Raccolta dati, analisi testuale e data storytelling",
      "Sola amministrazione dei server di produzione",
      "Sola manutenzione dell'hardware di rete"
    ],
    correct: [0],
    exp: "UFS18 copre l'intero flusso: raccolta/scraping dati, pulizia e analisi testuale, insight e data storytelling. Non riguarda l'amministrazione dei server né la manutenzione hardware."
  },
  // === AGGIUNGI NUOVE DOMANDE END-TO-END QUI ===
]);
