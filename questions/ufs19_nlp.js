/* ============================================================
   MATERIA: NLP e LLM  (UFS19 - Text and natural language processing)
   100 domande. Basate su NLP base/tradizionale, embedding,
   Transformer, LLM, prompting, RAG, tool e agenti.
   ============================================================ */
registerSubject("NLP e LLM", [
  {
    id: "u19001", topic: "NLP",
    q: "Che cosa indica NLP?",
    opts: [
      "Natural Language Processing: elaborazione automatica del linguaggio naturale",
      "Network Layer Protocol, acronimo di rete non legato al linguaggio",
      "Numeric Linear Programming, acronimo matematico non linguistico",
      "Natural Logic Parser, parser logico ma non definizione standard di NLP"
    ],
    correct: [0],
    exp: "Il NLP e' l'intersezione tra linguistica, informatica e machine learning per trattare testi in linguaggio naturale con sistemi computazionali."
  },
  {
    id: "u19002", topic: "Task NLP",
    q: "Quali sono esempi di task NLP? (una o piu' risposte)",
    opts: [
      "Classificazione del sentiment",
      "Named Entity Recognition",
      "Traduzione automatica",
      "Deframmentazione disco"
    ],
    correct: [0,1,2],
    exp: "Tra i task NLP ci sono classificazione, NER, question answering, machine translation e generazione di testo. La deframmentazione disco non e' NLP."
  },
  {
    id: "u19003", topic: "Rappresentazione",
    q: "Perche' il testo grezzo va trasformato prima di usarlo nei modelli?",
    opts: [
      "Perche' i processori lavorano su rappresentazioni numeriche, non su significati testuali grezzi",
      "Perche' i modelli accettano solo file PDF",
      "Perche' il testo non contiene informazioni",
      "Perche' ogni parola va cancellata"
    ],
    correct: [0],
    exp: "Il testo deve diventare token, vettori o altre rappresentazioni numeriche affinche' algoritmi e modelli possano elaborarlo."
  },
  {
    id: "u19004", topic: "Pipeline NLP",
    q: "Una pipeline NLP tradizionale contiene spesso:",
    opts: [
      "Pulizia, tokenizzazione, vettorizzazione e modello",
      "Solo esportazione in immagine",
      "Solo compressione ZIP",
      "Solo ordinamento alfabetico dei file"
    ],
    correct: [0],
    exp: "Il flusso tipico porta il testo da grezzo a pulito, poi a token e rappresentazioni numeriche, infine a inferenza o machine learning."
  },
  {
    id: "u19005", topic: "Tokenizzazione",
    q: "La tokenizzazione consiste nel:",
    opts: [
      "Dividere il testo in unita' minime come caratteri, parole o subword",
      "Tradurre il testo invece di dividerlo in unità",
      "Eliminare parole rare invece di segmentare il testo",
      "Generare codice SQL invece di tokenizzare linguaggio naturale"
    ],
    correct: [0],
    exp: "I token sono le unita' su cui lavora il sistema: possono essere caratteri, parole, parti di parola o simboli a seconda della strategia."
  },
  {
    id: "u19006", topic: "Token",
    q: "Quali elementi possono essere token? (una o piu' risposte)",
    opts: [
      "Parole",
      "Subword",
      "Caratteri",
      "Solo frasi complete"
    ],
    correct: [0,1,2],
    exp: "La granularita' dipende dal tokenizer. Anche spazi, punteggiatura o emoji possono essere trattati come token in alcuni sistemi."
  },
  {
    id: "u19007", topic: "Tokenizzazione caratteri",
    q: "Un vantaggio della tokenizzazione a caratteri e':",
    opts: [
      "Ha un vocabolario piccolo e semplice",
      "Cattura sempre bene la semantica",
      "Produce sequenze molto corte",
      "Elimina ogni ambiguita'"
    ],
    correct: [0],
    exp: "Usare caratteri riduce il numero di simboli possibili, ma crea sequenze lunghe e poco rappresentative semanticamente."
  },
  {
    id: "u19008", topic: "Tokenizzazione parole",
    q: "Un limite della tokenizzazione a parole e':",
    opts: [
      "Il vocabolario puo' diventare enorme e includere forme nuove o flesse",
      "Non rappresenta mai parole intere",
      "Produce solo 128 token",
      "Funziona solo con immagini"
    ],
    correct: [0],
    exp: "Le lingue hanno molte parole, flessioni, errori e neologismi. Un tokenizer a parole puo' incontrare molti termini rari o non visti."
  },
  {
    id: "u19009", topic: "Subword",
    q: "La tokenizzazione a subword e' utile perche':",
    opts: [
      "Bilancia rappresentativita' delle parole e controllo della dimensione del vocabolario",
      "Usa solo caratteri ASCII invece di unità subword apprese",
      "Elimina completamente ogni bisogno di normalizzare il testo",
      "Converte token o parole in frasi complete"
    ],
    correct: [0],
    exp: "Le subword sono un compromesso: gestiscono parole nuove o rare componendole da pezzi ricorrenti, mantenendo sequenze piu' informative dei singoli caratteri."
  },
  {
    id: "u19010", topic: "Normalizzazione",
    q: "La normalizzazione del testo serve a:",
    opts: [
      "Ridurre varianti superficiali e carico computazionale",
      "Aumentare volutamente il rumore",
      "Rimuovere tutti i nomi propri sempre",
      "Sostituire i modelli ML"
    ],
    correct: [0],
    exp: "Lowercase, rimozione doppi spazi, accenti o normalizzazione Unicode possono rendere il testo piu' coerente. Va pero' evitata perdita di informazione utile."
  },
  {
    id: "u19011", topic: "Normalizzazione",
    q: "Quale rischio ha una normalizzazione troppo aggressiva?",
    opts: [
      "Perdere informazioni rilevanti come differenze semantiche o accenti",
      "Aumentare sempre la precisione",
      "Rendere impossibile la tokenizzazione",
      "Creare automaticamente un LLM"
    ],
    correct: [0],
    exp: "Esempio: papa e papa' non sono equivalenti. Normalizzare senza criterio puo' cancellare distinzioni importanti."
  },
  {
    id: "u19012", topic: "Unicode",
    q: "Unicode NFKC e' un esempio di:",
    opts: [
      "Normalizzazione di caratteri equivalenti o compatibili",
      "Algoritmo di clustering",
      "Modello transformer",
      "Misura di accuratezza"
    ],
    correct: [0],
    exp: "La normalizzazione Unicode puo' convertire rappresentazioni compatibili in forme standard, riducendo inconsistenze tecniche nel testo."
  },
  {
    id: "u19013", topic: "Stopword",
    q: "Le stopword sono:",
    opts: [
      "Parole molto frequenti spesso poco discriminanti, come articoli e preposizioni",
      "Parole offensive per definizione, non semplicemente frequenti",
      "Solo nomi propri invece di parole funzionali frequenti",
      "Token prodotti da modelli transformer durante la generazione"
    ],
    correct: [0],
    exp: "Rimuoverle puo' ridurre rumore e carico computazionale, soprattutto in analisi basate su frequenze."
  },
  {
    id: "u19014", topic: "Stopword",
    q: "Quando rimuovere stopword puo' essere sbagliato?",
    opts: [
      "Quando sintassi e contesto completo sono importanti",
      "Quando si usa un corpus piccolo",
      "Sempre, senza eccezioni",
      "Solo con testi in inglese"
    ],
    correct: [0],
    exp: "In task dove negazioni, pronomi o struttura della frase contano, rimuovere stopword puo' togliere informazione essenziale."
  },
  {
    id: "u19015", topic: "Stemming",
    q: "Lo stemming riduce le parole:",
    opts: [
      "A una radice approssimata eliminando suffissi o desinenze",
      "A una traduzione inglese",
      "A un embedding denso",
      "A una frase completa"
    ],
    correct: [0],
    exp: "Lo stemming e' efficiente ma poco intelligente: puo' produrre radici che non sono parole reali."
  },
  {
    id: "u19016", topic: "Lemmatizzazione",
    q: "La lemmatizzazione mira a ottenere:",
    opts: [
      "Il lemma, cioe' la forma base linguistica della parola",
      "Un vettore sparso di frequenze",
      "La prima lettera della parola",
      "Un bigramma casuale"
    ],
    correct: [0],
    exp: "La lemmatizzazione e' piu' accurata dello stemming ma richiede strumenti linguistici piu' ricchi e puo' essere piu' lenta."
  },
  {
    id: "u19017", topic: "Stemming vs Lemmatizzazione",
    q: "Differenza corretta tra stemming e lemmatizzazione:",
    opts: [
      "Stemming e' piu' semplice; lemmatizzazione conserva forme base linguistiche",
      "Sono sinonimi perfetti",
      "La lemmatizzazione elimina sempre il contesto",
      "Lo stemming usa transformer"
    ],
    correct: [0],
    exp: "Stemming taglia parti finali; lemmatizzazione riconosce la forma base, spesso usando informazioni morfologiche e lessicali."
  },
  {
    id: "u19018", topic: "Preprocessing",
    q: "Quali operazioni sono preprocessing testuale? (una o piu' risposte)",
    opts: [
      "Tokenizzazione",
      "Normalizzazione",
      "Rimozione stopword",
      "Overclock della CPU"
    ],
    correct: [0,1,2],
    exp: "Tokenizzazione, normalizzazione e stopword removal sono passaggi classici. L'overclock hardware non e' preprocessing NLP."
  },
  {
    id: "u19019", topic: "PoS Tagging",
    q: "Il Part-of-Speech tagging assegna a ogni token:",
    opts: [
      "Una categoria grammaticale come nome, verbo o aggettivo",
      "Una coordinata GPS",
      "Una chiave primaria SQL",
      "Un colore di dashboard"
    ],
    correct: [0],
    exp: "Il PoS tagging etichetta il ruolo grammaticale dei token e puo' richiedere contesto per risolvere ambiguita'."
  },
  {
    id: "u19020", topic: "PoS Tagging",
    q: "Perche' il contesto e' importante nel PoS tagging?",
    opts: [
      "La stessa forma puo' avere ruoli diversi, come nome o verbo",
      "Ogni parola ha sempre un solo ruolo",
      "I token non hanno grammatica",
      "Il contesto va rimosso sempre"
    ],
    correct: [0],
    exp: "Esempio: una parola puo' essere sostantivo in una frase e verbo in un'altra. Il sistema deve guardare la frase."
  },
  {
    id: "u19021", topic: "NER",
    q: "La Named Entity Recognition serve a:",
    opts: [
      "Riconoscere e classificare entita' come persone, organizzazioni, luoghi e date",
      "Misurare solo la lunghezza delle frasi senza riconoscere entità",
      "Creare visualizzazioni 3D invece di classificare entità testuali",
      "Comprimere il corpus senza estrarre entità nominate"
    ],
    correct: [0],
    exp: "La NER individua nomi e riferimenti strutturabili nel testo, associandoli a categorie come PERSON, ORG, LOC, DATE o MONEY."
  },
  {
    id: "u19022", topic: "NER",
    q: "Quale coppia e' coerente con NER?",
    opts: [
      "Milano -> LOC",
      "Il -> MONEY",
      "Mangiare -> DATE",
      "42 -> PERSON sempre"
    ],
    correct: [0],
    exp: "Milano e' tipicamente un luogo. Le altre associazioni sono errate o non valide senza contesto specifico."
  },
  {
    id: "u19023", topic: "Intenti",
    q: "In alcuni sistemi, classificare i verbi come intenti serve a:",
    opts: [
      "Capire l'azione o richiesta implicata nel testo",
      "Creare un vocabolario di emoji",
      "Rimuovere tutte le entita'",
      "Convertire testo in audio"
    ],
    correct: [0],
    exp: "Nel NLP applicativo, riconoscere intenti aiuta chatbot e sistemi a decidere quale azione eseguire."
  },
  {
    id: "u19024", topic: "n-grammi",
    q: "Un n-gramma e':",
    opts: [
      "Una sequenza di n token consecutivi",
      "Una parola sempre rara",
      "Una rete neurale ricorrente",
      "Una funzione di loss"
    ],
    correct: [0],
    exp: "Con token parole, il bigramma di 'il gatto nero' produce sequenze come 'il gatto' e 'gatto nero'."
  },
  {
    id: "u19025", topic: "Bigrammi",
    q: "In un testo tokenizzato a parole, un bigramma contiene:",
    opts: [
      "Due token consecutivi",
      "Tre documenti",
      "Una sola lettera",
      "Tutto il corpus"
    ],
    correct: [0],
    exp: "Bi-gramma significa sequenza di due token. Trigramma ne contiene tre."
  },
  {
    id: "u19026", topic: "Bag-of-Words",
    q: "Bag-of-Words rappresenta un testo come:",
    opts: [
      "Frequenze di parole senza ordine e struttura sintattica",
      "Sequenza completa con grammatica preservata",
      "Embedding contestuale per ogni token",
      "Traduzione automatica"
    ],
    correct: [0],
    exp: "BoW ignora l'ordine delle parole e conserva soprattutto il conteggio delle feature nel vocabolario."
  },
  {
    id: "u19027", topic: "Vocabolario",
    q: "Nel Bag-of-Words, il vocabolario e':",
    opts: [
      "L'insieme delle parole/feature presenti nel corpus",
      "La lista dei modelli disponibili",
      "Il dizionario dei prompt",
      "Il numero di layer del transformer"
    ],
    correct: [0],
    exp: "Ogni termine del vocabolario puo' diventare una dimensione del vettore BoW."
  },
  {
    id: "u19028", topic: "BoW vettori",
    q: "Dopo avere un vocabolario, ogni frase BoW diventa:",
    opts: [
      "Un vettore di frequenze sulle parole del vocabolario",
      "Una rappresentazione visuale a pixel invece di un vettore testuale",
      "Una query SQL testuale invece di una rappresentazione vettoriale",
      "Un file audio invece di una codifica bag-of-words"
    ],
    correct: [0],
    exp: "Ogni posizione del vettore corrisponde a una feature del vocabolario e contiene il conteggio o peso relativo."
  },
  {
    id: "u19029", topic: "Limite BoW",
    q: "Un limite forte di BoW e':",
    opts: [
      "Non cattura ordine, sintassi e semantica profonda",
      "Conserva troppo contesto grammaticale",
      "Richiede sempre GPU",
      "Non puo' contare parole"
    ],
    correct: [0],
    exp: "BoW puo' dire che due testi condividono parole, ma non capisce sinonimi, ordine o significati dipendenti dal contesto."
  },
  {
    id: "u19030", topic: "TF-IDF",
    q: "TF in TF-IDF indica:",
    opts: [
      "Term Frequency: quante volte un termine compare in un documento",
      "Total Format Index, acronimo non usato per TF-IDF",
      "Transformer Fine Inference, sigla non legata alla frequenza del termine",
      "Text Function ID, interpretazione errata della sigla TF"
    ],
    correct: [0],
    exp: "La componente TF misura frequenza locale del termine nel documento."
  },
  {
    id: "u19031", topic: "TF-IDF",
    q: "IDF in TF-IDF aumenta il peso di parole:",
    opts: [
      "Rare nel corpus e quindi piu' discriminanti",
      "Comuni in tutti i documenti",
      "Sempre grammaticali",
      "Piu' lunghe di dieci lettere"
    ],
    correct: [0],
    exp: "Inverse Document Frequency riduce il peso delle parole troppo comuni e valorizza termini che distinguono documenti."
  },
  {
    id: "u19032", topic: "TF-IDF",
    q: "TF-IDF e' utile per:",
    opts: [
      "Pesare parole in base a frequenza locale e rarita' nel corpus",
      "Generare testo autoregressivo",
      "Creare token subword",
      "Invocare funzioni esterne"
    ],
    correct: [0],
    exp: "TF-IDF e' una rappresentazione tradizionale efficace per retrieval, similarita' e classificazione di testi."
  },
  {
    id: "u19033", topic: "ML tradizionale",
    q: "Per usare testi in un modello ML tradizionale occorre:",
    opts: [
      "Trasformarli in rappresentazioni numeriche come BoW o TF-IDF",
      "Lasciarli sempre come HTML grezzo",
      "Rimuovere tutte le etichette",
      "Usare solo immagini"
    ],
    correct: [0],
    exp: "Classificatori di spam o sentiment richiedono input numerici. La vettorizzazione rende il testo elaborabile dal modello."
  },
  {
    id: "u19034", topic: "Vettori sparsi",
    q: "BoW e TF-IDF producono spesso vettori:",
    opts: [
      "Sparsi, con molti zeri quando il vocabolario e' grande",
      "Sempre densi e corti",
      "Una rappresentazione senza variabili misurabili o coordinate utili",
      "Solo binari senza frequenze"
    ],
    correct: [0],
    exp: "Se il vocabolario ha molte parole, un documento usa solo una piccola parte delle dimensioni, lasciando molte celle a zero."
  },
  {
    id: "u19035", topic: "Embedding",
    q: "Gli embedding sono:",
    opts: [
      "Vettori densi e continui che catturano aspetti semantici",
      "Tabelle HTML con frequenze, non vettori densi continui",
      "Liste di parole da rimuovere, non rappresentazioni dense",
      "Regole per ridurre parole alla radice, non embedding"
    ],
    correct: [0],
    exp: "A differenza di BoW, gli embedding cercano di rappresentare significato e vicinanza semantica in uno spazio vettoriale denso."
  },
  {
    id: "u19036", topic: "Embedding",
    q: "Una caratteristica degli embedding moderni e':",
    opts: [
      "Lunghezza prefissata che non cresce con il vocabolario",
      "Una dimensione per ogni parola del corpus",
      "Solo valori interi positivi",
      "Assenza di semantica"
    ],
    correct: [0],
    exp: "Un embedding ha dimensione fissata dal modello, per esempio centinaia o migliaia di numeri, indipendentemente dal vocabolario osservato."
  },
  {
    id: "u19037", topic: "Embedding",
    q: "I valori di un embedding sono tipicamente:",
    opts: [
      "Numeri reali in un vettore",
      "Solo lettere maiuscole",
      "Solo token testuali",
      "Solo valori TRUE/FALSE"
    ],
    correct: [0],
    exp: "Gli embedding sono array di numeri reali, per esempio 0.12, -0.35, 0.78, usati per calcolare similarita'."
  },
  {
    id: "u19038", topic: "Semantica",
    q: "Perche' due frasi semanticamente simili possono avere embedding vicini?",
    opts: [
      "Il modello codifica significato e contesto in uno spazio vettoriale",
      "Perche' hanno necessariamente le stesse parole",
      "Perche' BoW conserva sinonimi automaticamente",
      "Perche' il vettore e' casuale"
    ],
    correct: [0],
    exp: "Frasi come 'il mio cane dorme' e 'il mio animale domestico dorme' possono risultare vicine anche senza coincidenza perfetta di parole."
  },
  {
    id: "u19039", topic: "Word2Vec",
    q: "Word2Vec produce:",
    opts: [
      "Word embeddings dove una parola e' rappresentata da un vettore",
      "Restituire solo stopword filtrate invece di vettori",
      "Produrre solo traduzioni automatiche invece di embedding",
      "Produrre grafici di frequenza invece di vettori parola"
    ],
    correct: [0],
    exp: "Word2Vec, introdotto da Google, apprende vettori per parole in cui termini simili tendono a essere vicini."
  },
  {
    id: "u19040", topic: "CBOW",
    q: "Nel modello CBOW di Word2Vec, l'obiettivo e':",
    opts: [
      "Predire una parola dal suo contesto",
      "Predire il contesto da una parola",
      "Tradurre frasi intere",
      "Generare JSON strutturato"
    ],
    correct: [0],
    exp: "CBOW sta per Continuous Bag of Words: usa le parole vicine per predire quella centrale."
  },
  {
    id: "u19041", topic: "Skip-gram",
    q: "Nel modello Skip-gram di Word2Vec, l'obiettivo e':",
    opts: [
      "Predire il contesto a partire da una parola",
      "Predire una parola dal documento intero",
      "Rimuovere parole molto frequenti e poco informative dal testo",
      "Eseguire NER"
    ],
    correct: [0],
    exp: "Skip-gram usa una parola sorgente per predire parole di contesto circostanti."
  },
  {
    id: "u19042", topic: "GloVe",
    q: "GloVe migliora Word2Vec sfruttando:",
    opts: [
      "Informazioni statistiche sull'intero corpus",
      "Solo finestre locali senza corpus",
      "Solo regole grammaticali manuali",
      "Solo caratteri Unicode"
    ],
    correct: [0],
    exp: "GloVe usa co-occorrenze globali del corpus per apprendere rappresentazioni vettoriali delle parole."
  },
  {
    id: "u19043", topic: "FastText",
    q: "FastText gestisce meglio parole rare perche':",
    opts: [
      "Usa n-grammi di caratteri oltre alla parola intera",
      "Ignora ogni sottoparola",
      "Usa solo parole funzionali frequenti del corpus",
      "Non crea vettori"
    ],
    correct: [0],
    exp: "Rappresentare parole tramite n-grammi di caratteri consente di comporre vettori anche per parole rare o non viste."
  },
  {
    id: "u19044", topic: "Polisemia",
    q: "Un limite di Word2Vec, GloVe e FastText classici e':",
    opts: [
      "Non gestiscono bene significati diversi della stessa parola in contesti diversi",
      "Non producono rappresentazioni vettoriali delle parole",
      "Ignorano completamente le frequenze nel corpus",
      "Sono modelli pensati solo per immagini, non per testo"
    ],
    correct: [0],
    exp: "Una parola polisemica tende ad avere un solo vettore statico, anche se in frasi diverse assume significati diversi."
  },
  {
    id: "u19045", topic: "Embedding contestuali",
    q: "Con embedding contestuali come ELMo si passa a:",
    opts: [
      "Vettori diversi per la stessa parola in contesti diversi",
      "Un solo vettore fisso per ogni parola sempre",
      "Rimozione completa della semantica",
      "Solo rappresentazioni BoW"
    ],
    correct: [0],
    exp: "Gli embedding contestuali dipendono dalla frase: la stessa parola puo' avere rappresentazioni diverse in base al significato nel contesto."
  },
  {
    id: "u19046", topic: "Distanze vettoriali",
    q: "La distanza coseno misura soprattutto:",
    opts: [
      "L'angolo/direzione tra vettori",
      "Solo la lunghezza assoluta del testo",
      "Il numero di stopword",
      "La posizione nel documento"
    ],
    correct: [0],
    exp: "In NLP si usa spesso la similarita' coseno per confrontare embedding in base alla direzione, riducendo l'effetto della magnitudine."
  },
  {
    id: "u19047", topic: "Distanze vettoriali",
    q: "Un limite della distanza euclidea sugli embedding e':",
    opts: [
      "Vettori grandi possono falsare la misura se conta troppo la magnitudine",
      "Non usa coordinate vettoriali per misurare distanze",
      "Non può essere calcolata tra vettori numerici",
      "Misura token testuali grezzi invece di vettori embedding"
    ],
    correct: [0],
    exp: "La distanza euclidea misura una linea retta nello spazio; in NLP spesso la direzione semantica e' piu' utile della grandezza del vettore."
  },
  {
    id: "u19048", topic: "Similarita'",
    q: "Nel corso, la similarita' tra vettori viene descritta come:",
    opts: [
      "1 - distanza",
      "distanza + stopword",
      "numero token / layer",
      "solo ordine alfabetico"
    ],
    correct: [0],
    exp: "La formula dipende dalla metrica, ma l'idea presentata e' che minore distanza corrisponde a maggiore similarita'."
  },
  {
    id: "u19049", topic: "Vector DB",
    q: "Un database vettoriale serve a:",
    opts: [
      "Indicizzare embedding e recuperare elementi semanticamente simili",
      "Archiviare solo CSV invece di indicizzare embedding",
      "Applicare stemming invece di recuperare elementi semanticamente simili",
      "Creare grafici statici invece di fare retrieval vettoriale"
    ],
    correct: [0],
    exp: "I vector database consentono ricerca per similarita' su embedding, base di semantic search e RAG."
  },
  {
    id: "u19050", topic: "Semantic search",
    q: "La semantic search differisce da una ricerca solo keyword perche':",
    opts: [
      "Recupera contenuti vicini per significato, non solo per parole identiche",
      "Cerca solo caratteri maiuscoli",
      "Elimina tutti i sinonimi",
      "Usa solo ordinamento alfabetico"
    ],
    correct: [0],
    exp: "Con embedding, query e documenti possono essere confrontati semanticamente anche se non condividono le stesse parole."
  },
  {
    id: "u19051", topic: "Embedding API",
    q: "Gli embedding possono essere ottenuti tramite:",
    opts: [
      "Modelli/API specializzate che trasformano testo in vettori",
      "Solo manualmente parola per parola",
      "Solo database relazionali",
      "Solo fogli Excel"
    ],
    correct: [0],
    exp: "Le slide citano API e modelli di embedding: il punto chiave e' convertire testo in vettori usabili per similarita' e retrieval."
  },
  {
    id: "u19052", topic: "RNN",
    q: "Un limite delle RNN rispetto ai Transformer e':",
    opts: [
      "Elaborazione piu' sequenziale e meno parallelizzabile",
      "Assenza totale di memoria",
      "Impossibilita' di leggere token",
      "Uso esclusivo di immagini"
    ],
    correct: [0],
    exp: "Le RNN processano la sequenza passo dopo passo; i Transformer permettono maggiore parallelizzazione e connessioni piu' dirette tramite attention."
  },
  {
    id: "u19053", topic: "Transformer",
    q: "Il paper 'Attention is all you need' introduce:",
    opts: [
      "L'architettura Transformer basata su meccanismi di attention",
      "Il modello Bag-of-Words",
      "La prima lista di stopword",
      "Un database vettoriale usato per retrieval semantico"
    ],
    correct: [0],
    exp: "Il Transformer sposta il centro sull'attention, riducendo dipendenza da ricorrenza sequenziale."
  },
  {
    id: "u19054", topic: "Attention",
    q: "Il meccanismo di attention permette al modello di:",
    opts: [
      "Pesare relazioni tra token della sequenza",
      "Rimuovere sempre tutti i token passati",
      "Ignorare il contesto",
      "Contare solo le vocali"
    ],
    correct: [0],
    exp: "L'attention assegna importanza differente ai token quando costruisce rappresentazioni contestuali."
  },
  {
    id: "u19055", topic: "Multi-head attention",
    q: "La multi-head attention serve a:",
    opts: [
      "Osservare diverse relazioni tra token in parallelo",
      "Usare una sola relazione fissa",
      "Eliminare gli embedding",
      "Sostituire la tokenizzazione"
    ],
    correct: [0],
    exp: "Teste diverse possono catturare aspetti differenti: relazioni grammaticali, semantiche, posizionali o di dipendenza."
  },
  {
    id: "u19056", topic: "Encoder",
    q: "Nel Transformer, l'encoder:",
    opts: [
      "Trasforma la frase sorgente in rappresentazioni contestuali",
      "Genera sempre token futuri uno alla volta",
      "Rimuove ogni informazione di posizione",
      "Esegue solo stemming"
    ],
    correct: [0],
    exp: "L'encoder legge la sequenza e produce embedding contestuali che rappresentano il contenuto in modo ricco."
  },
  {
    id: "u19057", topic: "Decoder",
    q: "Nel Transformer, il decoder:",
    opts: [
      "Genera output usando input e token gia' generati",
      "Crea solo un vocabolario BoW",
      "Esegue solo NER",
      "Elimina la self-attention"
    ],
    correct: [0],
    exp: "Il decoder genera sequenze, spesso autoregressivamente: il token prodotto diventa parte del contesto per il successivo."
  },
  {
    id: "u19058", topic: "Masked self-attention",
    q: "La masked self-attention nel decoder impedisce di:",
    opts: [
      "Vedere token futuri durante la generazione",
      "Vedere token passati",
      "Usare embedding",
      "Calcolare probabilita'"
    ],
    correct: [0],
    exp: "Durante la generazione autoregressiva il modello deve predire il prossimo token usando solo il contesto precedente."
  },
  {
    id: "u19059", topic: "Autoregressione",
    q: "Un modello autoregressivo genera testo:",
    opts: [
      "Predicendo il prossimo token dato il contesto precedente",
      "Leggendo sempre l'intera risposta futura",
      "Ordinando parole alfabeticamente",
      "Rimuovendo tutti i verbi"
    ],
    correct: [0],
    exp: "GPT e' decoder-only autoregressivo: produce un token alla volta condizionato dai token precedenti."
  },
  {
    id: "u19060", topic: "Parallelizzazione",
    q: "Uno dei vantaggi dei Transformer rispetto a modelli ricorrenti e':",
    opts: [
      "Maggiore parallelizzazione durante l'addestramento",
      "Obbligo di processare sempre un token alla volta in training",
      "Assenza di attenzione",
      "Uso solo di regole manuali"
    ],
    correct: [0],
    exp: "L'attention consente di elaborare molte posizioni della sequenza in parallelo, migliorando scalabilita' rispetto alle RNN."
  },
  {
    id: "u19061", topic: "T5",
    q: "T5 mantiene un'architettura:",
    opts: [
      "Encoder-decoder adatta a task testo-a-testo",
      "Solo encoder come BERT",
      "Solo decoder come GPT",
      "Solo Bag-of-Words"
    ],
    correct: [0],
    exp: "T5 trasforma diversi compiti in formato text-to-text, utile per traduzione, riassunto e task seq2seq."
  },
  {
    id: "u19062", topic: "BERT",
    q: "BERT usa principalmente:",
    opts: [
      "Solo la parte encoder del Transformer",
      "Solo la parte decoder autoregressiva",
      "Un vocabolario BoW puro",
      "Un database vettoriale usato per retrieval semantico"
    ],
    correct: [0],
    exp: "BERT e' encoder-only e costruisce rappresentazioni bidirezionali adatte a comprensione del testo."
  },
  {
    id: "u19063", topic: "BERT",
    q: "BERT e' bidirezionale perche':",
    opts: [
      "Ogni token puo' guardare contesto a sinistra e a destra",
      "Genera token solo da sinistra a destra",
      "Ignora il contesto precedente",
      "Vede solo una parola"
    ],
    correct: [0],
    exp: "La bidirezionalita' lo rende forte in compiti di comprensione, classificazione e ricerca."
  },
  {
    id: "u19064", topic: "BERT",
    q: "BERT e' particolarmente utile per:",
    opts: [
      "Comprensione, classificazione e web search",
      "Solo generazione autoregressiva lunga",
      "Solo compressione file",
      "Solo scraping HTML"
    ],
    correct: [0],
    exp: "Essendo encoder bidirezionale, BERT e varianti sono adatti a rappresentare testo per classificare o recuperare informazioni."
  },
  {
    id: "u19065", topic: "GPT",
    q: "GPT e' descritto come modello:",
    opts: [
      "Transformer decoder-only autoregressivo",
      "Encoder-only bidirezionale",
      "Solo n-grammi statistici",
      "Solo TF-IDF"
    ],
    correct: [0],
    exp: "GPT predice il prossimo token dato il contesto precedente usando masked self-attention."
  },
  {
    id: "u19066", topic: "GPT",
    q: "L'obiettivo base di GPT e':",
    opts: [
      "Predire il prossimo token dato il contesto precedente",
      "Riconoscere solo entita' geografiche",
      "Eliminare tutte le stopword",
      "Calcolare solo TF-IDF"
    ],
    correct: [0],
    exp: "La predizione del prossimo token su grandi corpus e' il nucleo del pre-training autoregressivo."
  },
  {
    id: "u19067", topic: "Training LLM",
    q: "Un flusso tipico per modelli GPT include:",
    opts: [
      "Pre-training, fine-tuning e feedback umano o ottimizzazione per chat",
      "Applicare solo stemming manuale senza reti neurali",
      "Usare solo bag-of-words senza modelli neurali",
      "Fare solo scraping di una pagina web"
    ],
    correct: [0],
    exp: "Le slide distinguono pre-training su enormi corpus, adattamenti successivi e ottimizzazione per interazione."
  },
  {
    id: "u19068", topic: "GPT capacita'",
    q: "Pur essendo decoder-only, GPT puo' svolgere anche:",
    opts: [
      "Classificazione, traduzione e altri task tramite prompting o adattamento",
      "Solo completamento di una singola lettera",
      "Solo PoS tagging manuale",
      "Solo creazione di DFM"
    ],
    correct: [0],
    exp: "I decoder-only moderni apprendono capacita' generali e possono seguire istruzioni per molti compiti testuali."
  },
  {
    id: "u19069", topic: "LLM",
    q: "Un Large Language Model e':",
    opts: [
      "Un modello linguistico di grandi dimensioni addestrato su moltissimi token",
      "Un foglio di calcolo con molte colonne",
      "Un algoritmo di ordinamento stringhe",
      "Un server web statico"
    ],
    correct: [0],
    exp: "Gli LLM sono modelli di linguaggio basati su grandi reti neurali, spesso Transformer o varianti, addestrati su enormi quantita' di testo."
  },
  {
    id: "u19070", topic: "LLM capacita'",
    q: "Quali capacita' sono tipiche degli LLM? (una o piu' risposte)",
    opts: [
      "Generazione testo",
      "Riassunto",
      "Question answering",
      "Partizionamento disco"
    ],
    correct: [0,1,2],
    exp: "Gli LLM possono generare testo, tradurre, riassumere, rispondere a domande e scrivere codice. Il partizionamento disco non e' una capacita' NLP."
  },
  {
    id: "u19071", topic: "Limiti LLM",
    q: "Quali sono limiti o rischi degli LLM? (una o piu' risposte)",
    opts: [
      "Allucinazioni",
      "Bias",
      "Costi computazionali",
      "Garanzia assoluta di verita'"
    ],
    correct: [0,1,2],
    exp: "Gli LLM possono inventare contenuti plausibili, riflettere bias dei dati e avere costi alti. Non garantiscono verita' assoluta."
  },
  {
    id: "u19072", topic: "Prompt",
    q: "Un prompt e':",
    opts: [
      "Input testuale dato al modello per guidarne l'output",
      "Un vettore BoW sempre sparso",
      "Un file robots.txt",
      "Un algoritmo di stemming"
    ],
    correct: [0],
    exp: "Il prompt influenza qualita', stile, vincoli e accuratezza della risposta del modello."
  },
  {
    id: "u19073", topic: "System prompt",
    q: "Il system o developer prompt serve a:",
    opts: [
      "Dare istruzioni di comportamento o vincoli definiti dallo sviluppatore",
      "Calcolare embedding",
      "Rimuovere parole molto frequenti e poco informative dal testo",
      "Scrivere CSS selector"
    ],
    correct: [0],
    exp: "I prompt di sistema/sviluppatore impostano ruolo, regole e limiti dell'assistente prima dell'input utente."
  },
  {
    id: "u19074", topic: "Zero-shot",
    q: "Zero-shot prompting significa:",
    opts: [
      "Chiedere un compito senza fornire esempi nel prompt",
      "Fornire un esempio",
      "Fornire molti esempi",
      "Addestrare di nuovo il modello"
    ],
    correct: [0],
    exp: "Nel zero-shot il modello deve generalizzare dall'istruzione e dalle sue capacita' pre-addestrate, senza esempi specifici."
  },
  {
    id: "u19075", topic: "One-shot",
    q: "One-shot prompting significa:",
    opts: [
      "Fornire un solo esempio nel prompt",
      "Non fornire esempi",
      "Fornire centinaia di esempi",
      "Usare solo token carattere"
    ],
    correct: [0],
    exp: "Un esempio puo' chiarire formato e stile attesi, riducendo ambiguita' rispetto al solo comando."
  },
  {
    id: "u19076", topic: "Few-shot",
    q: "Few-shot prompting significa:",
    opts: [
      "Fornire pochi esempi nel prompt",
      "Non fornire alcun esempio",
      "Fare fine-tuning con GPU",
      "Usare solo stopword"
    ],
    correct: [0],
    exp: "Con pochi esempi il modello inferisce pattern di risposta, classificazione o formato senza aggiornare i pesi."
  },
  {
    id: "u19077", topic: "Chain of Thought",
    q: "La Chain of Thought nel prompting mira a:",
    opts: [
      "Guidare il ragionamento passo passo",
      "Eliminare ogni spiegazione",
      "Ridurre il contesto a una parola",
      "Trasformare testo in HTML"
    ],
    correct: [0],
    exp: "La CoT invita il modello a scomporre problemi complessi in passaggi intermedi, quando appropriato."
  },
  {
    id: "u19078", topic: "Temperatura",
    q: "La temperatura nella generazione controlla:",
    opts: [
      "Il grado di casualita' o creativita' dell'output",
      "La lunghezza massima del contesto",
      "Il numero di documenti presenti nel corpus testuale",
      "La dimensione del vocabolario BoW"
    ],
    correct: [0],
    exp: "Temperatura bassa rende l'output piu' deterministico; valori piu' alti aumentano variabilita' e creativita'."
  },
  {
    id: "u19079", topic: "Top-k top-p",
    q: "Top-k e top-p servono a:",
    opts: [
      "Filtrare le scelte di token candidate durante la generazione",
      "Rimuovere parole frequenti invece di filtrare token candidati",
      "Calcolare IDF invece di controllare il campionamento dei token",
      "Creare un encoder invece di filtrare le opzioni di generazione"
    ],
    correct: [0],
    exp: "Top-k limita ai k token piu' probabili; top-p considera un insieme cumulativo di probabilita'."
  },
  {
    id: "u19080", topic: "Max tokens",
    q: "Il parametro max tokens definisce:",
    opts: [
      "La lunghezza massima dell'output generato",
      "Il numero di documenti presenti nel corpus testuale",
      "La soglia di stopword",
      "La dimensione del database"
    ],
    correct: [0],
    exp: "Max tokens pone un limite alla quantita' di testo che il modello puo' generare nella risposta."
  },
  {
    id: "u19081", topic: "Context window",
    q: "La context window e':",
    opts: [
      "Il numero massimo di token gestibili tra input e output",
      "Il numero di righe del dataset",
      "La finestra temporale di Kafka",
      "Il numero di stopword italiane"
    ],
    correct: [0],
    exp: "La finestra di contesto limita quanto testo il modello puo' considerare in una singola interazione."
  },
  {
    id: "u19082", topic: "Chunking",
    q: "Il chunking per testi lunghi serve a:",
    opts: [
      "Spezzare documenti in parti gestibili dalla context window o dal retrieval",
      "Unire tutto in un prompt infinito",
      "Eliminare tutti i metadati",
      "Convertire vettori in parole"
    ],
    correct: [0],
    exp: "Documenti lunghi vengono divisi in chunk per indicizzazione, embedding, recupero e uso nel contesto del modello."
  },
  {
    id: "u19083", topic: "RAG",
    q: "Retrieval Augmented Generation combina:",
    opts: [
      "Recupero di informazioni esterne e generazione del modello",
      "Applicare solo stemming e rimozione stopword",
      "Usare solo bag-of-words e part-of-speech tagging",
      "Fare solo traduzione automatica senza retrieval"
    ],
    correct: [0],
    exp: "La RAG cerca documenti rilevanti e li fornisce al modello come contesto per generare risposte piu' fondate."
  },
  {
    id: "u19084", topic: "RAG",
    q: "Una pipeline RAG tipica usa:",
    opts: [
      "Embedding, motore di ricerca vettoriale e contesto recuperato",
      "Usare solo file CSV manuali senza retrieval semantico",
      "Usare solo n-grammi senza motore di ricerca vettoriale",
      "Produrre solo grafici a barre invece di recuperare contesto"
    ],
    correct: [0],
    exp: "I documenti vengono indicizzati tramite embedding; al momento della domanda si recuperano chunk simili e si passano al modello."
  },
  {
    id: "u19085", topic: "RAG vantaggio",
    q: "La RAG puo' ridurre allucinazioni perche':",
    opts: [
      "Ancora la risposta a documenti esterni recuperati",
      "Elimina il modello linguistico",
      "Rimuove ogni prompt",
      "Impedisce qualsiasi errore in assoluto"
    ],
    correct: [0],
    exp: "Fornire contesto verificabile migliora accuratezza, anche se non elimina del tutto errori o cattivo recupero."
  },
  {
    id: "u19086", topic: "Fine-tuning",
    q: "Il fine-tuning consiste nel:",
    opts: [
      "Riaddestrare/adattare il modello su dati specifici di dominio",
      "Scrivere un prompt generico senza adattare i pesi del modello",
      "Calcolare bag-of-words invece di adattare il modello",
      "Rimuovere token futuri invece di riaddestrare su dominio"
    ],
    correct: [0],
    exp: "Il fine-tuning modifica i parametri o adattatori del modello per specializzarlo su compiti o domini specifici."
  },
  {
    id: "u19087", topic: "LoRA",
    q: "LoRA e' una tecnica che:",
    opts: [
      "Aggiorna poche matrici a basso rango rendendo il tuning piu' efficiente",
      "Cancella il modello base",
      "Usa solo parole funzionali frequenti del corpus",
      "Sostituisce la tokenizzazione"
    ],
    correct: [0],
    exp: "Low-Rank Adaptation riduce costo e memoria del fine-tuning aggiornando componenti aggiuntivi invece di tutti i parametri."
  },
  {
    id: "u19088", topic: "Function calling",
    q: "Il function calling permette al modello di:",
    opts: [
      "Restituire una chiamata strutturata a una funzione o API",
      "Accedere sempre a Internet da solo",
      "Fare stemming piu' veloce",
      "Creare un corpus quanteda prima delle analisi testuali"
    ],
    correct: [0],
    exp: "Il modello puo' indicare nome funzione e parametri in forma strutturata; il sistema esegue il tool e passa il risultato al modello."
  },
  {
    id: "u19089", topic: "Function calling",
    q: "Perche' JSON e' comune nel function calling?",
    opts: [
      "Perche' rappresenta parametri strutturati leggibili dal programma",
      "Perché JSON sarebbe un embedding vettoriale",
      "Perché JSON rimuoverebbe bias dal modello",
      "Perché JSON sostituirebbe qualunque API esterna"
    ],
    correct: [0],
    exp: "JSON consente output strutturati e validabili, piu' affidabili di testo libero per integrazioni programmatiche."
  },
  {
    id: "u19090", topic: "Tool use",
    q: "Nel tool use, il modello tipicamente:",
    opts: [
      "Decide che serve un tool, propone chiamata e poi usa il risultato restituito",
      "Esegue sempre codice senza ambiente",
      "Ignora ogni funzione disponibile",
      "Cancella il prompt utente"
    ],
    correct: [0],
    exp: "Il modello non deve inventare il dato: quando serve, richiama uno strumento e integra l'output nella risposta finale."
  },
  {
    id: "u19091", topic: "MCP",
    q: "Il Model Context Protocol serve a:",
    opts: [
      "Standardizzare come gli LLM accedono a strumenti e fonti esterne",
      "Calcolare pesi TF-IDF per termini in documenti testuali",
      "Definire stopword italiane",
      "Eseguire PoS tagging"
    ],
    correct: [0],
    exp: "MCP e' un protocollo aperto per esporre strumenti, risorse e contesto ai modelli in modo standardizzato."
  },
  {
    id: "u19092", topic: "Agenti",
    q: "Un agente basato su LLM e':",
    opts: [
      "Un sistema che pianifica ed esegue piu' azioni usando ragionamento e tool",
      "Un semplice vettore BoW",
      "Un solo prompt statico senza azioni",
      "Una lista di parole comuni da rimuovere nel preprocessing"
    ],
    correct: [0],
    exp: "Gli agenti combinano pianificazione, esecuzione, uso di tool/API e spesso iterazioni per completare compiti multi-step."
  },
  {
    id: "u19093", topic: "Agenti",
    q: "Negli agenti, planning + execution indica:",
    opts: [
      "Scomporre un obiettivo e svolgere i passi con strumenti o chiamate successive",
      "Generare un singolo token senza pianificazione di passi",
      "Rimuovere il contesto invece di usarlo durante l'esecuzione",
      "Limitarsi alla tokenizzazione senza azioni o strumenti"
    ],
    correct: [0],
    exp: "Un agente puo' decidere i passaggi, chiamare strumenti, valutare risultati e continuare finche' il compito non e' completato."
  },
  {
    id: "u19094", topic: "Tool per agenti",
    q: "Quali possono essere tool per un agente? (una o piu' risposte)",
    opts: [
      "API esterne",
      "Database o basi di conoscenza",
      "Classificatori o web search",
      "Solo punteggiatura"
    ],
    correct: [0,1,2],
    exp: "Gli agenti possono usare API, database, knowledge base, classificatori, motori di ricerca e altri strumenti esposti dal sistema."
  },
  {
    id: "u19095", topic: "LangChain",
    q: "LangChain e' un framework per:",
    opts: [
      "Costruire applicazioni basate su LLM con prompt, chain, tool e integrazioni",
      "Calcolare solo distanze euclidee tra embedding",
      "Fare solo rimozione di stopword dal corpus",
      "Disegnare selettori CSS invece di orchestrare LLM"
    ],
    correct: [0],
    exp: "LangChain offre moduli per chatbot, RAG, agenti, integrazioni con API, database e vector store."
  },
  {
    id: "u19096", topic: "LangGraph",
    q: "LangGraph e' utile per:",
    opts: [
      "Costruire agenti multi-step piu' controllabili e tracciabili",
      "Tokenizzare caratteri ASCII senza modellare flussi multi-step",
      "Calcolare solo term frequency senza orchestrare agenti",
      "Leggere file HTML invece di costruire agenti controllabili"
    ],
    correct: [0],
    exp: "LangGraph organizza flussi agentici come grafi di stati e passaggi, migliorando controllo rispetto a catene lineari semplici."
  },
  {
    id: "u19097", topic: "Hugging Face",
    q: "Nel contesto UFS19, Hugging Face e' rilevante per:",
    opts: [
      "Trovare e usare modelli NLP/embedding open-source",
      "Definire espressioni cron",
      "Creare database relazionali",
      "Configurare reti Wi-Fi"
    ],
    correct: [0],
    exp: "Le slide citano risorse di embedding anche su Hugging Face, piattaforma nota per modelli e dataset NLP."
  },
  {
    id: "u19098", topic: "Prompt vs fine-tuning",
    q: "Differenza corretta tra prompting e fine-tuning:",
    opts: [
      "Il prompting guida l'output senza cambiare pesi; il fine-tuning adatta parametri o adattatori",
      "Rappresentano lo stesso concetto e sono intercambiabili nell'esercizio",
      "Il prompting richiede sempre GPU",
      "Il fine-tuning e' solo un esempio nel prompt"
    ],
    correct: [0],
    exp: "Prompting agisce nel contesto della richiesta. Fine-tuning modifica il comportamento del modello tramite addestramento aggiuntivo."
  },
  {
    id: "u19099", topic: "RAG vs fine-tuning",
    q: "Quando preferire RAG al fine-tuning?",
    opts: [
      "Quando serve usare conoscenza esterna aggiornata o documenti specifici recuperabili",
      "Quando bisogna cambiare ogni peso del modello sempre",
      "Quando non esistono documenti",
      "Quando si vuole eliminare il retrieval"
    ],
    correct: [0],
    exp: "La RAG e' adatta a conoscenza consultabile e aggiornabile senza riaddestrare. Il fine-tuning serve piu' per stile, formato o competenze ricorrenti."
  },
  {
    id: "u19100", topic: "Sintesi UFS19",
    q: "Quale sequenza riassume meglio l'evoluzione trattata in UFS19?",
    opts: [
      "Preprocessing -> BoW/TF-IDF -> embedding -> Transformer/LLM -> RAG/agenti",
      "Docker -> SQL -> kernel -> virtualizzazione",
      "Media -> varianza -> test t -> ANOVA",
      "Scraping -> CSS -> HTML -> robots"
    ],
    correct: [0],
    exp: "UFS19 parte dalle basi del testo, passa dal NLP tradizionale alle rappresentazioni dense, poi ai Transformer, LLM e applicazioni moderne con retrieval, tool e agenti."
  },
  // === AGGIUNGI NUOVE DOMANDE NLP E LLM QUI ===
]);
