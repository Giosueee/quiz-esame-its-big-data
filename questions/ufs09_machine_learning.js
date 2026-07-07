/* ============================================================
   MATERIA: Machine Learning  (UFS09)
   100 domande. (Camuffatura lunghezze: pass finale.)
   ============================================================ */
registerSubject("Machine Learning", [
  {
    id: "u09001", topic: "Tipi di ML",
    q: "Nel machine learning supervisionato:",
    opts: [
      "Si impara da dati etichettati (input con output noto)",
      "Non ci sono etichette nei dati",
      "Si usano solo dati testuali",
      "L'algoritmo non impara dai dati"
    ],
    correct: [0],
    exp: "Nel supervisionato ogni esempio ha una label (output corretto): il modello impara la relazione input→output per prevedere nuovi casi. Classificazione e regressione sono supervisionate."
  },
  {
    id: "u09002", topic: "Tipi di ML",
    q: "L'apprendimento NON supervisionato serve a:",
    opts: [
      "Trovare struttura/pattern in dati senza etichette",
      "Predire una label già definita a partire da esempi etichettati",
      "Ottimizzare una ricompensa tramite interazione con un ambiente",
      "Etichettare manualmente i dati"
    ],
    correct: [0],
    exp: "Il non supervisionato lavora su dati senza label per scoprire pattern: clustering (raggruppamenti) e riduzione di dimensionalità (PCA) ne sono esempi tipici."
  },
  {
    id: "u09003", topic: "Classificazione vs regressione",
    q: "La differenza tra classificazione e regressione è che:",
    opts: [
      "La classificazione predice categorie, la regressione valori numerici continui",
      "La regressione produce classi discrete invece di valori continui",
      "Rappresentano lo stesso concetto e sono intercambiabili nell'esercizio",
      "La classificazione apprende senza label come un metodo non supervisionato"
    ],
    correct: [0],
    exp: "Classificazione → output categorico (spam/non spam). Regressione → output numerico continuo (prezzo di una casa). Entrambe sono supervisionate."
  },
  {
    id: "u09004", topic: "Overfitting",
    q: "L'overfitting si verifica quando un modello:",
    opts: [
      "Si adatta troppo ai dati di training e generalizza male su dati nuovi",
      "È troppo semplice e non riesce a rappresentare la relazione nei dati",
      "Non riceve dati di training e quindi non apprende parametri",
      "Ha pochi parametri rispetto alla complessità del fenomeno"
    ],
    correct: [0],
    exp: "L'overfitting è l'apprendimento a memoria del rumore del training: ottime prestazioni sul training ma scarse sul test. Si combatte con regolarizzazione, più dati, modelli più semplici."
  },
  {
    id: "u09005", topic: "Underfitting",
    q: "L'underfitting indica un modello che:",
    opts: [
      "È troppo semplice e non coglie i pattern nemmeno nel training",
      "È troppo complesso e rischia di adattarsi al rumore del training",
      "Ha memorizzato il training set invece di generalizzare",
      "Generalizza perfettamente su dati nuovi senza errore residuo"
    ],
    correct: [0],
    exp: "L'underfitting è l'opposto dell'overfitting: il modello è troppo semplice (alto bias) e va male sia sul training sia sul test. Serve un modello più espressivo o feature migliori."
  },
  {
    id: "u09006", topic: "Train/test split",
    q: "Perché si divide il dataset in training e test?",
    opts: [
      "Per valutare le prestazioni su dati mai visti dal modello",
      "Per aumentare artificialmente il training set a scapito della valutazione",
      "Per ridurre il tempo di calcolo invece di stimare la generalizzazione",
      "Usare tutto il dataset insieme senza separare training e test"
    ],
    correct: [0],
    exp: "Il test set, mai visto durante l'addestramento, stima la capacità di GENERALIZZAZIONE. Valutare sul training darebbe risultati ottimistici e ingannevoli."
  },
  {
    id: "u09007", topic: "Validation set",
    q: "A cosa serve il validation set?",
    opts: [
      "A scegliere iperparametri e modelli senza toccare il test",
      "Usare la validazione al posto dei dati di addestramento",
      "A rimuovere i dati disponibili prima dell'elaborazione",
      "Assegnare manualmente le label invece di scegliere iperparametri"
    ],
    correct: [0],
    exp: "Il validation set serve per tuning di iperparametri e selezione del modello. Il test finale resta 'intatto' per una stima imparziale delle prestazioni finali."
  },
  {
    id: "u09008", topic: "Cross-validation",
    q: "La k-fold cross-validation:",
    opts: [
      "Divide i dati in k parti, addestrando e validando a rotazione",
      "Usa una sola divisione training-validazione invece di ruotare i fold",
      "Rimuove il test set invece di preservarlo per la valutazione finale",
      "Aumenta il numero di variabili disponibili per il modello"
    ],
    correct: [0],
    exp: "Nella k-fold i dati sono divisi in k blocchi: a turno uno fa da validazione e gli altri da training. La media dei k risultati dà una stima più robusta e usa tutti i dati."
  },
  {
    id: "u09009", topic: "Bias-variance",
    q: "Il compromesso bias-variance dice che:",
    opts: [
      "Ridurre il bias tende ad aumentare la varianza e viceversa",
      "Bias e varianza cambiano indipendentemente dalla complessità del modello",
      "Si possono portare a zero bias e varianza con una scelta semplice",
      "Vale solo per problemi NLP e non per modelli generali"
    ],
    correct: [0],
    exp: "Modelli semplici hanno alto bias/bassa varianza (underfit); modelli complessi basso bias/alta varianza (overfit). L'obiettivo è il punto di equilibrio che minimizza l'errore su dati nuovi."
  },
  {
    id: "u09010", topic: "Confusion matrix",
    q: "La matrice di confusione mostra:",
    opts: [
      "Il confronto tra classi predette e classi reali (TP, FP, FN, TN)",
      "Mostra solo la percentuale di predizioni corrette",
      "Misura la relazione lineare tra variabili di input",
      "Mostra la distribuzione delle osservazioni nel dataset"
    ],
    correct: [0],
    exp: "La confusion matrix incrocia previsioni e verità: veri positivi, falsi positivi, falsi negativi, veri negativi. Da essa si ricavano accuratezza, precisione, recall, F1."
  },
  {
    id: "u09011", topic: "Metriche",
    q: "L'accuratezza (accuracy) è:",
    opts: [
      "La quota di previsioni corrette sul totale",
      "La quota di veri positivi sui positivi predetti",
      "La quota di veri positivi sui positivi reali",
      "L'errore quadratico medio"
    ],
    correct: [0],
    exp: "Accuracy = (TP+TN)/totale. Attenzione: con classi sbilanciate può essere ingannevole (un modello che predice sempre la classe maggioritaria ha alta accuracy ma è inutile)."
  },
  {
    id: "u09012", topic: "Metriche",
    q: "La precision (precisione) misura:",
    opts: [
      "Tra i casi predetti positivi, quanti lo sono davvero",
      "Tra i positivi reali, quanti sono stati trovati",
      "L'errore medio assoluto",
      "Il numero totale di errori"
    ],
    correct: [0],
    exp: "Precision = TP/(TP+FP): dei predetti positivi, quanti giusti. Alta precision = pochi falsi allarmi. Importante quando un falso positivo è costoso."
  },
  {
    id: "u09013", topic: "Metriche",
    q: "La recall (sensibilità) misura:",
    opts: [
      "Tra i positivi reali, quanti ne ha trovati il modello",
      "Tra i predetti positivi, quanti giusti",
      "L'accuratezza complessiva",
      "La varianza del modello"
    ],
    correct: [0],
    exp: "Recall = TP/(TP+FN): dei casi realmente positivi, quanti individuati. Alta recall = pochi falsi negativi. Cruciale quando 'mancare' un positivo è grave (es. diagnosi)."
  },
  {
    id: "u09014", topic: "Metriche",
    q: "L'F1-score è:",
    opts: [
      "La media armonica di precision e recall",
      "La somma di precision e recall",
      "L'accuratezza media",
      "L'errore quadratico"
    ],
    correct: [0],
    exp: "F1 = 2·(P·R)/(P+R): bilancia precision e recall in un unico numero, utile con classi sbilanciate. È alto solo se entrambe sono alte."
  },
  {
    id: "u09015", topic: "Trade-off P/R",
    q: "Aumentare la recall tende a:",
    opts: [
      "Ridurre la precision (e viceversa)",
      "Aumentare anche la precision",
      "Non avere alcun effetto",
      "Azzerare i falsi negativi e i falsi positivi"
    ],
    correct: [0],
    exp: "Abbassando la soglia di classificazione si trovano più positivi (recall su) ma con più falsi allarmi (precision giù). C'è un compromesso tra le due, riassunto dall'F1 o dalla curva P-R."
  },
  {
    id: "u09016", topic: "Metriche regressione",
    q: "L'RMSE (Root Mean Squared Error) misura:",
    opts: [
      "L'errore tipico delle previsioni, nella stessa unità della variabile",
      "La percentuale di previsioni corrette",
      "Misura la relazione lineare tra variabili di input",
      "Il numero di classi presenti nel problema di classificazione"
    ],
    correct: [0],
    exp: "RMSE è la radice della media degli errori al quadrato: penalizza molto gli errori grandi ed è nelle unità della variabile target. Più basso = previsioni migliori."
  },
  {
    id: "u09017", topic: "ROC/AUC",
    q: "L'AUC (area sotto la curva ROC) vicina a 1 indica:",
    opts: [
      "Un classificatore che distingue molto bene le classi",
      "Un modello che indovina a caso",
      "Overfitting garantito",
      "Dati mancanti"
    ],
    correct: [0],
    exp: "L'AUC misura la capacità di separare le classi al variare della soglia: 1 = perfetto, 0,5 = come il caso. Utile e robusta anche con classi moderatamente sbilanciate."
  },
  {
    id: "u09018", topic: "Feature scaling",
    q: "Perché si normalizzano/standardizzano le feature?",
    opts: [
      "Per evitare che feature con scale diverse dominino il modello",
      "Per aumentare il numero di righe",
      "Per assegnare label manuali ai dati prima di usarli nel modello",
      "Non serve mai"
    ],
    correct: [0],
    exp: "Algoritmi basati su distanze o gradiente (KNN, SVM, reti) sono sensibili alla scala: standardizzare (media 0, sd 1) o normalizzare mette le feature su scale comparabili."
  },
  {
    id: "u09019", topic: "Encoding",
    q: "Il one-hot encoding serve a:",
    opts: [
      "Trasformare una variabile categorica in colonne binarie 0/1",
      "Ridurre il numero di righe",
      "Normalizzare i numeri",
      "Rimuovere i valori mancanti"
    ],
    correct: [0],
    exp: "Il one-hot crea una colonna binaria per ciascuna categoria, evitando di imporre un ordine numerico fittizio. Necessario per algoritmi che accettano solo input numerici."
  },
  {
    id: "u09020", topic: "K-means",
    q: "L'algoritmo k-means serve a:",
    opts: [
      "Raggruppare i dati in k cluster (non supervisionato)",
      "Classificare con etichette note",
      "Prevedere un valore continuo",
      "Ridurre gli errori di un albero"
    ],
    correct: [0],
    exp: "k-means è clustering non supervisionato: assegna i punti a k gruppi minimizzando la distanza dai centroidi. Il numero k va scelto (es. metodo del gomito)."
  },
  {
    id: "u09021", topic: "K-means",
    q: "Nel k-means, il valore di k:",
    opts: [
      "Va scelto in anticipo dall'utente",
      "È determinato automaticamente",
      "È sempre uguale al numero di righe",
      "Coincide col numero di feature"
    ],
    correct: [0],
    exp: "k (numero di cluster) è un iperparametro da fissare prima. Si sceglie con euristiche come il metodo del gomito (elbow) o il silhouette score."
  },
  {
    id: "u09022", topic: "PCA",
    q: "La PCA (Analisi delle Componenti Principali) serve a:",
    opts: [
      "Ridurre la dimensionalità conservando la massima varianza",
      "Aumentare il numero di feature",
      "Aggiungere manualmente label ai record prima dell'addestramento",
      "Classificare le immagini"
    ],
    correct: [0],
    exp: "La PCA proietta i dati su nuove componenti ortogonali che catturano la maggior varianza: riduce le dimensioni mantenendo l'informazione, contro la 'maledizione della dimensionalità'."
  },
  {
    id: "u09023", topic: "Decision tree",
    q: "Un albero di decisione:",
    opts: [
      "Divide i dati con una serie di domande/soglie sulle feature",
      "È un algoritmo di clustering",
      "Non è interpretabile",
      "Funziona solo su testo"
    ],
    correct: [0],
    exp: "L'albero di decisione suddivide ricorsivamente i dati con condizioni sulle feature fino alle foglie (previsione). È interpretabile ma tende all'overfitting se non potato."
  },
  {
    id: "u09024", topic: "Random forest",
    q: "Una random forest è:",
    opts: [
      "Un insieme (ensemble) di molti alberi di decisione",
      "Un singolo albero molto profondo",
      "Un algoritmo che raggruppa osservazioni senza label",
      "Una rete neurale"
    ],
    correct: [0],
    exp: "La random forest combina molti alberi addestrati su sottocampioni casuali e ne media le previsioni: riduce l'overfitting del singolo albero ed è robusta e accurata."
  },
  {
    id: "u09025", topic: "KNN",
    q: "Il k-Nearest Neighbors classifica un punto in base a:",
    opts: [
      "Le classi dei k vicini più prossimi",
      "Una soglia sul primo attributo",
      "La media calcolata su tutte le righe senza distinguere gruppi",
      "Un albero di decisione"
    ],
    correct: [0],
    exp: "KNN assegna la classe più frequente tra i k punti più vicini (per distanza). È semplice, 'pigro' (non addestra un modello) e sensibile alla scala delle feature."
  },
  {
    id: "u09026", topic: "Regressione logistica",
    q: "La regressione logistica si usa per:",
    opts: [
      "Problemi di classificazione (probabilità di una classe)",
      "Prevedere valori continui illimitati",
      "Raggruppare senza etichette",
      "Ridurre le dimensioni"
    ],
    correct: [0],
    exp: "Nonostante il nome, la regressione logistica è un classificatore: stima la probabilità (0-1) che un'osservazione appartenga a una classe, usando la funzione sigmoide."
  },
  {
    id: "u09027", topic: "Gradient descent",
    q: "La discesa del gradiente (gradient descent) serve a:",
    opts: [
      "Minimizzare la funzione di costo aggiornando i parametri passo passo",
      "Aumentare l'errore",
      "Separare i dati in sottoinsiemi di training, validazione e test",
      "Assegnare nomi leggibili alle classi dopo la previsione"
    ],
    correct: [0],
    exp: "Il gradient descent aggiorna i parametri nella direzione opposta al gradiente della funzione di costo, riducendola iterativamente fino a un minimo. È il motore di molti modelli."
  },
  {
    id: "u09028", topic: "Learning rate",
    q: "Un learning rate troppo alto nella discesa del gradiente:",
    opts: [
      "Può far divergere l'ottimizzazione (salta il minimo)",
      "Rende sempre l'addestramento più preciso",
      "Lascia invariati parametri, dati e risultato del modello",
      "Riduce il numero di feature"
    ],
    correct: [0],
    exp: "Un tasso di apprendimento troppo grande fa 'rimbalzare' i parametri e può divergere; troppo piccolo rende l'addestramento lentissimo. Va calibrato con attenzione."
  },
  {
    id: "u09029", topic: "Regolarizzazione",
    q: "La regolarizzazione (L1/L2) serve a:",
    opts: [
      "Penalizzare la complessità del modello per ridurre l'overfitting",
      "Aumentare il numero di parametri",
      "Aggiungere manualmente label ai record prima dell'addestramento",
      "Accelerare la lettura dei file"
    ],
    correct: [0],
    exp: "La regolarizzazione aggiunge alla funzione di costo una penalità sui pesi grandi: L2 (ridge) li riduce, L1 (lasso) può azzerarli (selezione di feature). Combatte l'overfitting."
  },
  {
    id: "u09030", topic: "Data leakage",
    q: "Il data leakage (fuga di dati) si verifica quando:",
    opts: [
      "Informazioni del test/futuro filtrano nel training, gonfiando le prestazioni",
      "Una perdita fisica o logica di record dal dataset",
      "Un modello con capacità insufficiente rispetto ai pattern",
      "Assenza di label disponibili per l'apprendimento supervisionato"
    ],
    correct: [0],
    exp: "Il leakage avviene quando il modello 'vede' in addestramento informazioni non disponibili in produzione (es. normalizzare usando anche il test): dà risultati ottimistici e falsi."
  },
  {
    id: "u09031", topic: "Iperparametri",
    q: "Un iperparametro (es. profondità dell'albero, k del KNN):",
    opts: [
      "È impostato prima dell'addestramento, non appreso dai dati",
      "È appreso automaticamente dai dati",
      "È l'output del modello",
      "È un'etichetta"
    ],
    correct: [0],
    exp: "Gli iperparametri configurano l'algoritmo e si scelgono prima (o tramite tuning su validation). I parametri veri (es. i pesi) sono invece appresi dai dati durante l'addestramento."
  },
  {
    id: "u09032", topic: "Dati sbilanciati",
    q: "Con classi molto sbilanciate (es. 99% vs 1%), l'accuratezza:",
    opts: [
      "Può essere alta ma fuorviante, ignorando la classe rara",
      "È sempre la metrica migliore",
      "Non è calcolabile",
      "Coincide con la recall"
    ],
    correct: [0],
    exp: "Un modello che predice sempre la classe maggioritaria ha 99% di accuracy ma non trova mai la classe rara. Con sbilanciamento servono precision, recall, F1 o AUC."
  },
  {
    id: "u09033", topic: "Ensemble",
    q: "I metodi ensemble (bagging, boosting) migliorano le prestazioni:",
    opts: [
      "Combinando più modelli deboli in uno più forte",
      "Usando un solo modello semplice",
      "Eliminando i dati di training",
      "Riducendo sempre l'interpretabilità a zero"
    ],
    correct: [0],
    exp: "Gli ensemble aggregano più modelli: il bagging (random forest) riduce la varianza, il boosting (es. XGBoost) riduce il bias addestrando in sequenza correggendo gli errori."
  },
  {
    id: "u09034", topic: "Boosting",
    q: "Nel boosting, i modelli vengono addestrati:",
    opts: [
      "In sequenza, ciascuno correggendo gli errori del precedente",
      "Tutti in parallelo e indipendenti",
      "Una sola volta insieme",
      "Senza usare le etichette"
    ],
    correct: [0],
    exp: "Il boosting costruisce modelli in serie: ogni nuovo modello si concentra sugli esempi sbagliati dai precedenti. Esempi: AdaBoost, Gradient Boosting, XGBoost."
  },
  {
    id: "u09035", topic: "Feature engineering",
    q: "Il feature engineering consiste nel:",
    opts: [
      "Creare/trasformare variabili utili per migliorare il modello",
      "Aumentare il numero di righe",
      "Scegliere gli iperparametri",
      "Separare i dati in sottoinsiemi di training, validazione e test"
    ],
    correct: [0],
    exp: "Il feature engineering trasforma i dati grezzi in variabili informative (combinazioni, aggregazioni, estrazioni da date/testo): spesso incide più della scelta dell'algoritmo."
  },
  {
    id: "u09036", topic: "Curse of dimensionality",
    q: "La 'maledizione della dimensionalità' indica che:",
    opts: [
      "Con troppe feature i dati diventano radi e i modelli peggiorano",
      "Più feature sono sempre meglio",
      "Le dimensioni non contano",
      "I dati diventano più densi"
    ],
    correct: [0],
    exp: "All'aumentare delle dimensioni lo spazio cresce esponenzialmente e i punti diventano sparsi: distanze poco significative, rischio overfitting. Da qui l'utilità della riduzione (PCA)."
  },
  {
    id: "u09037", topic: "Naive Bayes",
    q: "Il classificatore Naive Bayes assume che le feature siano:",
    opts: [
      "Indipendenti tra loro data la classe (assunzione 'ingenua')",
      "Feature sempre dipendenti tra loro data la classe",
      "Feature necessariamente numeriche continue",
      "Feature etichettate manualmente una per una"
    ],
    correct: [0],
    exp: "Naive Bayes applica Bayes assumendo indipendenza condizionata tra le feature: assunzione spesso irrealistica ma che funziona bene, es. nella classificazione di testi/spam."
  },
  {
    id: "u09038", topic: "SVM",
    q: "Una Support Vector Machine (SVM) cerca:",
    opts: [
      "L'iperpiano che separa le classi con il massimo margine",
      "Il centroide dei dati",
      "Il valore medio calcolato aggregando tutte le osservazioni",
      "Il numero di cluster"
    ],
    correct: [0],
    exp: "La SVM trova il confine (iperpiano) che massimizza la distanza (margine) dai punti più vicini di ciascuna classe. Con i kernel gestisce anche separazioni non lineari."
  },
  {
    id: "u09039", topic: "Clustering gerarchico",
    q: "Il clustering gerarchico produce:",
    opts: [
      "Una struttura ad albero (dendrogramma) di raggruppamenti annidati",
      "Un unico valore numerico invece di una struttura di cluster",
      "Un modello addestrato su esempi con label note",
      "Una regressione che predice un valore numerico continuo"
    ],
    correct: [0],
    exp: "Il clustering gerarchico costruisce cluster annidati visualizzati in un dendrogramma: si può 'tagliare' a diverse altezze per ottenere un diverso numero di gruppi, senza fissare k a priori."
  },
  {
    id: "u09040", topic: "Generalizzazione",
    q: "L'obiettivo finale di un modello ML è:",
    opts: [
      "Generalizzare bene su dati nuovi mai visti",
      "Memorizzare perfettamente il training",
      "Avere il maggior numero di parametri",
      "Usare tutte le feature disponibili"
    ],
    correct: [0],
    exp: "Un modello utile GENERALIZZA: fa buone previsioni su dati nuovi. Ottime prestazioni solo sul training (overfitting) non servono nella realtà."
  },
  {
    id: "u09041", topic: "Reinforcement learning",
    q: "Nell'apprendimento per rinforzo (reinforcement learning):",
    opts: [
      "Un agente impara agendo nell'ambiente e ricevendo ricompense",
      "Si usano solo dati etichettati",
      "Non c'è alcun obiettivo",
      "I dati non cambiano nel tempo e non arrivano come flusso continuo"
    ],
    correct: [0],
    exp: "Nel reinforcement learning un agente compie azioni, riceve ricompense/penalità e impara una strategia (policy) che massimizza la ricompensa nel tempo. Es: giochi, robotica."
  },
  {
    id: "u09042", topic: "Pipeline ML",
    q: "Un tipico flusso di un progetto ML è:",
    opts: [
      "Raccolta dati → preparazione → addestramento → valutazione → deploy",
      "Raccolta dati → addestramento → preparazione → valutazione → deploy",
      "Raccolta dati → preparazione → valutazione → addestramento → deploy",
      "Deploy → raccolta dati → preparazione → addestramento → valutazione"
    ],
    correct: [0],
    exp: "Il flusso: raccogliere e pulire i dati, ingegnerizzare feature, addestrare, valutare su dati indipendenti e infine mettere in produzione (e monitorare). È iterativo."
  },
  {
    id: "u09043", topic: "Imputazione",
    q: "Gestire i valori mancanti tramite imputazione significa:",
    opts: [
      "Sostituirli con stime (media, mediana, modello)",
      "Eliminarli sempre",
      "Ignorarli lasciandoli vuoti",
      "Duplicare le righe"
    ],
    correct: [0],
    exp: "L'imputazione riempie i mancanti con valori stimati (media/mediana, o modelli più sofisticati) per non perdere righe. La rimozione è un'alternativa ma riduce i dati."
  },
  {
    id: "u09044", topic: "Overfitting: segnali",
    q: "Quale sintomo indica overfitting?",
    opts: [
      "Errore molto basso sul training ma alto sul test",
      "Errore alto su entrambi",
      "Errore basso su entrambi",
      "Nessun addestramento"
    ],
    correct: [0],
    exp: "Il divario tra ottime prestazioni sul training e scarse sul test è il segno tipico dell'overfitting. Se l'errore è alto su entrambi è underfitting."
  },
  {
    id: "u09045", topic: "Metriche regressione",
    q: "Il MAE (Mean Absolute Error) rispetto all'RMSE:",
    opts: [
      "Penalizza meno gli errori grandi (è più robusto agli outlier)",
      "Penalizza di più gli errori grandi",
      "È sempre uguale all'RMSE",
      "Non è una metrica di errore"
    ],
    correct: [0],
    exp: "Il MAE è la media degli errori in valore assoluto: tratta tutti gli errori linearmente. L'RMSE, elevando al quadrato, penalizza di più gli errori grandi ed è più sensibile agli outlier."
  },
  {
    id: "u09046", topic: "Etichette",
    q: "In un problema supervisionato, la 'target' (o label) è:",
    opts: [
      "La variabile che il modello deve prevedere",
      "Una feature di input qualsiasi",
      "Il numero di righe presenti nel dataset o nel risultato",
      "Un parametro scelto prima dell'addestramento del modello"
    ],
    correct: [0],
    exp: "La target/label è l'output da prevedere (es. il prezzo, la classe). Le feature sono gli input usati per predirla."
  },
  {
    id: "u09047", topic: "Standardizzazione",
    q: "Standardizzare una feature significa portarla a:",
    opts: [
      "Media 0 e deviazione standard 1",
      "Valori tra 0 e 1",
      "Solo valori interi",
      "Una categoria"
    ],
    correct: [0],
    exp: "La standardizzazione (z-score) sottrae la media e divide per la deviazione standard → media 0, sd 1. La normalizzazione min-max porta invece i valori in [0,1]."
  },
  {
    id: "u09048", topic: "Silhouette",
    q: "Il silhouette score in un clustering misura:",
    opts: [
      "Quanto i punti sono coesi nel proprio cluster e separati dagli altri",
      "Il numero di variabili usate per rappresentare ogni osservazione",
      "L'accuratezza rispetto a etichette note",
      "L'errore quadratico"
    ],
    correct: [0],
    exp: "Il silhouette (tra -1 e 1) valuta la qualità dei cluster: alto se i punti sono vicini al proprio gruppo e lontani dagli altri. Aiuta a scegliere il numero di cluster."
  },
  {
    id: "u09049", topic: "Baseline",
    q: "Perché si definisce un modello 'baseline'?",
    opts: [
      "Per avere un riferimento minimo con cui confrontare i modelli veri",
      "Per usarlo in produzione senza modifiche",
      "Per aumentare l'overfitting",
      "Per assegnare label manuali ai dati prima di usarli nel modello"
    ],
    correct: [0],
    exp: "La baseline (es. predire sempre la media o la classe più frequente) fornisce un metro minimo: un modello complesso ha senso solo se batte chiaramente la baseline."
  },
  {
    id: "u09050", topic: "Generalizzazione",
    q: "Aumentare la quantità di dati di training tipicamente:",
    opts: [
      "Aiuta a ridurre l'overfitting e migliorare la generalizzazione",
      "Aumenta sempre l'overfitting",
      "Lascia invariati parametri, dati e risultato del modello",
      "Elimina la necessità di valutazione"
    ],
    correct: [0],
    exp: "Più dati (variati e rappresentativi) aiutano il modello a cogliere i pattern veri anziché il rumore, migliorando la generalizzazione. Non sostituiscono però una buona valutazione."
  },
  {
    id: "u09051", topic: "Feature selection",
    q: "La selezione delle feature (feature selection) serve a:",
    opts: [
      "Tenere solo le variabili più informative, riducendo rumore e complessità",
      "Aggiungere sempre più variabili",
      "Aggiungere manualmente label ai record prima dell'addestramento",
      "Aumentare le righe"
    ],
    correct: [0],
    exp: "Selezionare le feature rilevanti riduce overfitting, tempi di calcolo e migliora l'interpretabilità, scartando variabili ridondanti o irrilevanti."
  },
  {
    id: "u09052", topic: "Modello parametrico",
    q: "Un modello 'parametrico' (es. regressione lineare):",
    opts: [
      "Ha un numero fisso di parametri indipendente dalla mole di dati",
      "Cresce sempre con la dimensione del dataset osservato",
      "Non contiene parametri stimati o fissati dal modello",
      "È sempre un modello ad albero indipendentemente dalla formulazione"
    ],
    correct: [0],
    exp: "I modelli parametrici assumono una forma con parametri fissi (es. i coefficienti di una retta). I non parametrici (KNN, alberi) adattano la complessità ai dati."
  },
  {
    id: "u09053", topic: "Epoca",
    q: "In addestramento iterativo, un'epoca (epoch) è:",
    opts: [
      "Un passaggio completo su tutto il dataset di training",
      "Una sola osservazione del dataset di training",
      "Un valore scelto prima del training e non appreso dai dati",
      "Il sottoinsieme usato solo per la valutazione finale"
    ],
    correct: [0],
    exp: "Un'epoca è una passata completa su tutti gli esempi di training. Si eseguono più epoche affinché il modello converga; troppe possono portare a overfitting."
  },
  {
    id: "u09054", topic: "Batch",
    q: "Nel mini-batch gradient descent, il modello aggiorna i pesi:",
    opts: [
      "Su piccoli sottoinsiemi (batch) di dati alla volta",
      "Solo dopo l'intero dataset",
      "Su un solo esempio sempre",
      "Non avviene in nessuna configurazione utile del problema"
    ],
    correct: [0],
    exp: "Il mini-batch aggiorna i parametri su piccoli gruppi di esempi: compromesso tra il batch completo (stabile ma lento) e lo stocastico su singolo esempio (rumoroso ma rapido)."
  },
  {
    id: "u09055", topic: "Overfitting: rimedi",
    q: "Quali tecniche riducono l'overfitting? (una o più risposte)",
    opts: [
      "Regolarizzazione",
      "Più dati di training",
      "Modelli più semplici",
      "Aumentare la complessità del modello"
    ],
    correct: [0,1,2],
    exp: "Regolarizzazione, più dati, modelli più semplici (o dropout, early stopping) riducono l'overfitting. Aumentare la complessità lo PEGGIORA."
  },
  {
    id: "u09056", topic: "Interpretabilità",
    q: "Quale modello è generalmente più interpretabile?",
    opts: [
      "Un albero di decisione poco profondo",
      "Una rete neurale con più strati nascosti usata per apprendimento profondo",
      "Un ensemble di 500 alberi",
      "Una SVM con kernel complesso"
    ],
    correct: [0],
    exp: "Un albero poco profondo o una regressione lineare sono trasparenti (si leggono le regole/coefficienti). Reti profonde ed ensemble grandi sono 'scatole nere', più accurati ma opachi."
  },
  {
    id: "u09057", topic: "Centroide",
    q: "Nel k-means, un centroide è:",
    opts: [
      "Il punto medio di un cluster",
      "Un'etichetta",
      "Il punto più lontano",
      "Un iperparametro fisso"
    ],
    correct: [0],
    exp: "Il centroide è la media delle posizioni dei punti di un cluster. L'algoritmo alterna assegnazione dei punti al centroide più vicino e aggiornamento dei centroidi."
  },
  {
    id: "u09058", topic: "Threshold",
    q: "In un classificatore probabilistico, abbassare la soglia di decisione:",
    opts: [
      "Aumenta i positivi predetti (più recall, meno precision)",
      "Riduce sempre i falsi negativi e i falsi positivi",
      "Lascia invariato il risultato dell'operazione sui dati",
      "Elimina la classe positiva"
    ],
    correct: [0],
    exp: "Con soglia più bassa più casi vengono etichettati positivi: sale la recall ma scende la precision. La soglia si tara secondo il costo relativo di falsi positivi e negativi."
  },
  {
    id: "u09059", topic: "Generalizzazione: test",
    q: "Il test set va usato:",
    opts: [
      "Solo alla fine, per la valutazione finale imparziale",
      "Per scegliere gli iperparametri",
      "Durante ogni epoca",
      "Per addestrare il modello"
    ],
    correct: [0],
    exp: "Il test set si tocca solo alla fine: se lo si usa per tuning diventa parte del processo e non fornisce più una stima onesta della generalizzazione (rischio leakage)."
  },
  {
    id: "u09060", topic: "Modello vs algoritmo",
    q: "Qual è la differenza tra algoritmo e modello?",
    opts: [
      "L'algoritmo è la procedura di apprendimento; il modello è il risultato addestrato",
      "Sono termini sinonimi e non cambiano la procedura richiesta",
      "Il modello addestra l'algoritmo",
      "L'algoritmo è i dati"
    ],
    correct: [0],
    exp: "L'algoritmo (es. random forest) è la procedura; il modello è ciò che si ottiene dopo l'addestramento sui dati (con i parametri appresi), pronto a fare previsioni."
  },
  {
    id: "u09061", topic: "Bagging",
    q: "Il bagging (bootstrap aggregating) riduce principalmente:",
    opts: [
      "La varianza, addestrando modelli su campioni bootstrap e mediando",
      "La componente di errore dovuta a ipotesi troppo semplici del modello",
      "Il numero di variabili usate per rappresentare ogni osservazione",
      "Il volume di esempi disponibili per addestramento e valutazione"
    ],
    correct: [0],
    exp: "Il bagging addestra più modelli su campioni casuali con rimpiazzo e ne aggrega le previsioni: media gli errori e riduce la varianza. La random forest ne è l'esempio."
  },
  {
    id: "u09062", topic: "Metriche: quando usare",
    q: "Per una diagnosi medica dove non si può 'mancare' un malato, si privilegia:",
    opts: [
      "La recall (pochi falsi negativi)",
      "La precision",
      "L'accuratezza grezza",
      "L'RMSE"
    ],
    correct: [0],
    exp: "Non individuare un malato (falso negativo) è grave: serve alta recall. Si accetta qualche falso allarme in più (precision minore) pur di non perdere casi positivi."
  },
  {
    id: "u09063", topic: "Normalizzazione min-max",
    q: "La normalizzazione min-max porta i valori:",
    opts: [
      "In un intervallo fisso, tipicamente [0, 1]",
      "A media 0 e sd 1",
      "A soli valori interi",
      "In categorie"
    ],
    correct: [0],
    exp: "Min-max riscala: (x−min)/(max−min) → valori in [0,1]. Sensibile agli outlier (che spostano min/max). La standardizzazione usa invece media e deviazione standard."
  },
  {
    id: "u09064", topic: "Ensemble voting",
    q: "In un classificatore ensemble a votazione, la previsione finale è:",
    opts: [
      "La classe scelta dalla maggioranza dei modelli",
      "Sempre quella del primo modello",
      "La media delle feature",
      "Una scelta casuale non guidata dai dati né da una metrica"
    ],
    correct: [0],
    exp: "Nel voting 'hard' vince la classe più votata dai modelli; nel 'soft' si mediano le probabilità. Aggregare più modelli spesso batte il singolo."
  },
  {
    id: "u09065", topic: "Learning curve",
    q: "Una curva di apprendimento (errore vs quantità di dati) aiuta a capire se:",
    opts: [
      "Il modello soffre di più bias o più varianza",
      "Una proprietà visuale del grafico, non una logica di calcolo",
      "Il numero di classi presenti nel problema di classificazione",
      "La velocità del disco"
    ],
    correct: [0],
    exp: "Le learning curve mostrano l'errore su training e validation al crescere dei dati: curve vicine e alte → underfit (bias); ampio gap → overfit (varianza), che più dati possono ridurre."
  },
  {
    id: "u09066", topic: "Sovracampionamento",
    q: "Con classi sbilanciate, l'oversampling (es. SMOTE) serve a:",
    opts: [
      "Aumentare gli esempi della classe minoritaria",
      "Ridurre tutti i dati",
      "Aggiungere manualmente label ai record prima dell'addestramento",
      "Cambiare l'algoritmo"
    ],
    correct: [0],
    exp: "L'oversampling (o SMOTE che genera esempi sintetici) bilancia le classi aumentando la minoritaria. L'undersampling invece riduce la maggioritaria. Servono a gestire lo sbilanciamento."
  },
  {
    id: "u09067", topic: "Modello lineare",
    q: "La regressione lineare presuppone una relazione:",
    opts: [
      "Approssimativamente lineare tra feature e target",
      "Sempre esponenziale",
      "Categorica",
      "Una scelta casuale non guidata dai dati né da una metrica"
    ],
    correct: [0],
    exp: "La regressione lineare modella una relazione lineare. Se la relazione è fortemente non lineare, servono trasformazioni, feature polinomiali o modelli non lineari."
  },
  {
    id: "u09068", topic: "Confusione: FP",
    q: "Un falso positivo (FP) è:",
    opts: [
      "Un caso predetto positivo che in realtà è negativo",
      "Un positivo reale non trovato",
      "Un vero positivo",
      "Un dato mancante"
    ],
    correct: [0],
    exp: "FP = 'falso allarme': il modello dice positivo ma è negativo. Il falso negativo (FN) è l'opposto: un positivo reale classificato come negativo."
  },
  {
    id: "u09069", topic: "Dimensionalità",
    q: "La riduzione della dimensionalità è utile per:",
    opts: [
      "Visualizzare, velocizzare e ridurre l'overfitting",
      "Aumentare il numero di variabili",
      "Aggiungere manualmente label ai record prima dell'addestramento",
      "Creare più righe"
    ],
    correct: [0],
    exp: "Ridurre le dimensioni (PCA, t-SNE) aiuta a visualizzare i dati in 2D/3D, accelera i modelli e attenua la maledizione della dimensionalità e l'overfitting."
  },
  {
    id: "u09070", topic: "Modello generativo vs discriminativo",
    q: "Un modello discriminativo (es. regressione logistica) impara:",
    opts: [
      "Direttamente il confine tra le classi (P(y|x))",
      "La distribuzione completa dei dati",
      "Solo a generare nuovi dati",
      "Senza usare le feature"
    ],
    correct: [0],
    exp: "I discriminativi modellano P(classe|input), concentrandosi sul confine decisionale. I generativi (es. Naive Bayes) modellano come i dati sono generati (P(x|classe)) e poi applicano Bayes."
  },
  {
    id: "u09071", topic: "Convergenza",
    q: "Se la funzione di costo non diminuisce durante l'addestramento, potrebbe dipendere da:",
    opts: [
      "Un learning rate mal calibrato o dati non normalizzati",
      "Troppi dati di test",
      "Una proprietà visuale del grafico, non una logica di calcolo",
      "Il nome delle variabili"
    ],
    correct: [0],
    exp: "Mancata convergenza spesso deriva da learning rate troppo alto/basso, feature non scalate o dati problematici. Sono i primi aspetti da controllare."
  },
  {
    id: "u09072", topic: "Cross-val: vantaggio",
    q: "Il vantaggio della cross-validation rispetto a un singolo split è:",
    opts: [
      "Una stima più stabile usando tutti i dati per validare",
      "È sempre più veloce, anche quando i dati sono eterogenei o copiati",
      "Elimina il bisogno di dati",
      "Aumenta l'overfitting"
    ],
    correct: [0],
    exp: "La k-fold riduce la dipendenza da un particolare split fortunato/sfortunato: ogni dato viene usato sia per addestrare sia per validare, dando una stima più affidabile."
  },
  {
    id: "u09073", topic: "Feature importance",
    q: "La 'feature importance' di una random forest indica:",
    opts: [
      "Quanto ciascuna variabile contribuisce alle previsioni",
      "Il numero di alberi",
      "L'accuratezza totale",
      "La dimensione del dataset"
    ],
    correct: [0],
    exp: "La feature importance quantifica il contributo di ogni variabile al modello: utile per interpretare e selezionare feature, pur con cautela in presenza di variabili correlate."
  },
  {
    id: "u09074", topic: "Modello in produzione",
    q: "Le prestazioni di un modello in produzione possono peggiorare nel tempo per:",
    opts: [
      "Il data/concept drift (i dati reali cambiano rispetto al training)",
      "Il numero di righe del training",
      "Il colore dell'interfaccia",
      "Il sistema operativo"
    ],
    correct: [0],
    exp: "Il 'drift' è il cambiamento della distribuzione dei dati o della relazione target nel tempo: il modello, addestrato sul passato, si degrada. Serve monitoraggio e ri-addestramento."
  },
  {
    id: "u09075", topic: "Encoding ordinale",
    q: "L'encoding ordinale è appropriato quando la categoria:",
    opts: [
      "Ha un ordine naturale (es. basso<medio<alto)",
      "Non possiede un ordine naturale tra le categorie",
      "È una variabile numerica continua, non una categoria ordinata",
      "È una categoria assente o valore mancante nel dataset"
    ],
    correct: [0],
    exp: "L'ordinal encoding assegna numeri crescenti a categorie ordinate. Per categorie senza ordine si usa il one-hot, per non introdurre relazioni d'ordine inesistenti."
  },
  {
    id: "u09076", topic: "Modello: parametri",
    q: "I parametri di un modello (es. i pesi) sono:",
    opts: [
      "Appresi dai dati durante l'addestramento",
      "Fissati a mano prima",
      "Le etichette",
      "I dati grezzi"
    ],
    correct: [0],
    exp: "I parametri (pesi, coefficienti) sono ciò che il modello apprende ottimizzando la funzione di costo. Gli iperparametri, invece, si impostano prima dell'addestramento."
  },
  {
    id: "u09077", topic: "Anomaly detection",
    q: "Il rilevamento di anomalie (anomaly detection) individua:",
    opts: [
      "Osservazioni che si discostano molto dal comportamento normale",
      "La media dei dati",
      "Le classi più frequenti",
      "Il numero di variabili usate per rappresentare ogni osservazione"
    ],
    correct: [0],
    exp: "L'anomaly detection segnala i casi rari/insoliti (frodi, guasti, intrusioni). Spesso è non supervisionato, perché gli esempi anomali sono pochi o sconosciuti."
  },
  {
    id: "u09078", topic: "Generalizzazione: rumore",
    q: "Il 'rumore' nei dati è:",
    opts: [
      "Variabilità casuale non spiegabile che il modello non dovrebbe imparare",
      "La parte informativa dei dati che il modello dovrebbe apprendere",
      "Le label vere usate come target nel training supervisionato",
      "Un parametro scelto prima dell'addestramento del modello"
    ],
    correct: [0],
    exp: "Il rumore è la parte casuale/errata dei dati. Un buon modello coglie il segnale ma non il rumore; adattarsi al rumore è overfitting."
  },
  {
    id: "u09079", topic: "Kernel",
    q: "Nei metodi come le SVM, il 'kernel trick' permette di:",
    opts: [
      "Gestire separazioni non lineari senza calcolare esplicitamente nuove dimensioni",
      "Ridurre il numero di esempi disponibili per l'addestramento",
      "Etichettare automaticamente",
      "Eliminare gli iperparametri"
    ],
    correct: [0],
    exp: "Il kernel calcola similarità in uno spazio a più dimensioni implicitamente, permettendo confini non lineari nello spazio originale senza costruire davvero quelle dimensioni."
  },
  {
    id: "u09080", topic: "Grid search",
    q: "La grid search serve a:",
    opts: [
      "Provare sistematicamente combinazioni di iperparametri per trovare le migliori",
      "Addestrare un solo modello",
      "Aggiungere manualmente label ai record prima dell'addestramento",
      "Ridurre il numero di righe del dataset prima dell'analisi"
    ],
    correct: [0],
    exp: "La grid search esplora una griglia di valori di iperparametri, valutando ciascuna combinazione (spesso in cross-validation) per selezionare la configurazione ottimale."
  },
  {
    id: "u09081", topic: "Deep learning",
    q: "Il deep learning usa:",
    opts: [
      "Reti neurali con molti livelli (layer)",
      "Solo alberi di decisione",
      "Solo regressione lineare",
      "Nessun dato viene usato per calcolare il risultato"
    ],
    correct: [0],
    exp: "Il deep learning impiega reti neurali profonde (molti strati) capaci di apprendere rappresentazioni complesse: eccelle con immagini, audio e testo, ma richiede molti dati e calcolo."
  },
  {
    id: "u09082", topic: "Attivazione",
    q: "In una rete neurale, la funzione di attivazione serve a:",
    opts: [
      "Introdurre non linearità permettendo di apprendere relazioni complesse",
      "Ridurre il numero di esempi disponibili per l'addestramento",
      "Assegnare nomi leggibili alle classi dopo la previsione",
      "Serializzare il modello addestrato su disco per riutilizzarlo"
    ],
    correct: [0],
    exp: "Senza funzioni di attivazione non lineari (ReLU, sigmoide) una rete equivarrebbe a un modello lineare. La non linearità permette di modellare relazioni complesse."
  },
  {
    id: "u09083", topic: "Dropout",
    q: "Il dropout in una rete neurale:",
    opts: [
      "Disattiva casualmente neuroni in addestramento per ridurre l'overfitting",
      "Aggiunge neuroni alla rete durante l'addestramento",
      "Elimina i dati di input invece di elaborarli o validarli",
      "Modifica le label del dataset invece della struttura della rete"
    ],
    correct: [0],
    exp: "Il dropout 'spegne' casualmente una frazione di neuroni a ogni passo di training, impedendo co-adattamenti eccessivi e migliorando la generalizzazione."
  },
  {
    id: "u09084", topic: "Early stopping",
    q: "L'early stopping consiste nel:",
    opts: [
      "Fermare l'addestramento quando l'errore di validazione smette di migliorare",
      "Non avviare l'addestramento del modello",
      "Usare il test set per decidere quando fermare il training",
      "Continuare l'addestramento senza criterio di arresto"
    ],
    correct: [0],
    exp: "L'early stopping interrompe l'addestramento quando le prestazioni sul validation peggiorano, evitando che il modello continui a specializzarsi sul training (overfitting)."
  },
  {
    id: "u09085", topic: "Modello benchmark",
    q: "Confrontare più modelli richiede:",
    opts: [
      "Le stesse condizioni: stessi dati di test e stesse metriche",
      "Metriche diverse per ciascuno",
      "Nessuna valutazione",
      "Solo il training set"
    ],
    correct: [0],
    exp: "Per un confronto equo i modelli vanno valutati sugli stessi dati di test con le stesse metriche. Cambiare le condizioni rende i confronti privi di significato."
  },
  {
    id: "u09086", topic: "Target leakage",
    q: "Includere tra le feature una variabile disponibile solo DOPO l'evento da prevedere causa:",
    opts: [
      "Target leakage: prestazioni gonfiate e inutili in produzione",
      "Underfitting: modello troppo semplice anche sul training",
      "Un miglioramento reale del modello anche in produzione",
      "Nessun problema di validità nella valutazione del modello"
    ],
    correct: [0],
    exp: "Se una feature 'contiene' informazione sul futuro/target non disponibile al momento della predizione, il modello bara in test ma fallisce in produzione. È una forma di leakage."
  },
  {
    id: "u09087", topic: "Clustering vs classificazione",
    q: "Il clustering è:",
    opts: [
      "Non supervisionato (nessuna etichetta nota)",
      "Supervisionato, perché sfrutta etichette note",
      "Una tecnica di regressione su valori continui",
      "Un metodo per ridurre le dimensioni dei dati"
    ],
    correct: [0],
    exp: "Il clustering raggruppa i dati senza etichette (non supervisionato). La classificazione, invece, usa etichette note per assegnare categorie."
  },
  {
    id: "u09088", topic: "Metriche: macro/micro",
    q: "In problemi multiclasse, la media 'macro' di una metrica:",
    opts: [
      "Media la metrica calcolata per classe, trattandole con lo stesso peso",
      "Pesa le classi in base alla numerosità, come una media weighted",
      "Calcola la metrica solo sulla classe più frequente",
      "Non è definita per problemi con più di due classi"
    ],
    correct: [0],
    exp: "La macro-media calcola la metrica per ciascuna classe e ne fa la media semplice (ogni classe conta uguale). La micro-media aggrega prima i conteggi, dando più peso alle classi numerose."
  },
  {
    id: "u09089", topic: "Outlier",
    q: "Gli outlier possono influenzare molto:",
    opts: [
      "Modelli sensibili come la regressione lineare e le distanze (KNN)",
      "Solo la resa visiva dei grafici, senza intervenire sul modello",
      "Nessun modello viene influenzato dagli outlier",
      "Solo problemi NLP e non modelli numerici o tabellari"
    ],
    correct: [0],
    exp: "Gli outlier distorcono medie, coefficienti di regressione e distanze. Vanno individuati e trattati (rimozione, trasformazioni, modelli robusti) secondo il contesto."
  },
  {
    id: "u09090", topic: "Modello robusto",
    q: "Rendere un modello più robusto significa:",
    opts: [
      "Renderlo meno sensibile a rumore, outlier e piccole variazioni",
      "Aumentare sempre i parametri invece di ridurre sensibilità al rumore",
      "Eliminare la valutazione invece di rendere stabile il modello",
      "Usare meno dati di training come unica strategia di robustezza"
    ],
    correct: [0],
    exp: "Un modello robusto mantiene buone prestazioni anche con dati imperfetti (rumore, outlier, drift lieve). Si ottiene con regolarizzazione, feature stabili, tecniche robuste."
  },
  {
    id: "u09091", topic: "Overfitting: complessità",
    q: "A parità di prestazioni su dati nuovi, è preferibile il modello:",
    opts: [
      "Più semplice (principio di parsimonia)",
      "Più complesso",
      "Con più feature",
      "Con più parametri"
    ],
    correct: [0],
    exp: "Il rasoio di Occam: a parità di risultati, il modello più semplice generalizza meglio, è più interpretabile e meno soggetto a overfitting."
  },
  {
    id: "u09092", topic: "Feature categoriche",
    q: "Un albero di decisione, rispetto alla regressione lineare, con le feature categoriche:",
    opts: [
      "Le gestisce naturalmente con split, senza per forza scalare o codificare in modo complesso",
      "Non può usare feature categoriche in nessuna forma",
      "Richiede sempre scaling numerico anche per variabili categoriche",
      "Ignora automaticamente le feature categoriche durante lo split"
    ],
    correct: [0],
    exp: "Gli alberi dividono i dati con soglie/condizioni e gestiscono bene feature categoriche e scale diverse, senza bisogno di normalizzazione (a differenza di KNN, SVM, reti)."
  },
  {
    id: "u09093", topic: "Validazione temporale",
    q: "Con dati temporali (serie storiche), lo split train/test deve:",
    opts: [
      "Rispettare l'ordine cronologico (addestra sul passato, testa sul futuro)",
      "Mescolare casualmente passato e futuro nella valutazione",
      "Usare osservazioni future nel training, causando leakage temporale",
      "Ignorare l'ordine temporale nello split o nella trasformazione"
    ],
    correct: [0],
    exp: "Con dati nel tempo uno split casuale causa leakage (usare il futuro per prevedere il passato). Si addestra sui dati passati e si valida sui successivi, con validazione temporale."
  },
  {
    id: "u09094", topic: "Pipeline scikit-learn",
    q: "Una Pipeline (es. in scikit-learn) serve a:",
    opts: [
      "Concatenare pre-processing e modello in un unico flusso riproducibile",
      "Solo a visualizzare i dati",
      "A etichettare a mano",
      "A rimuovere i dati disponibili prima dell'elaborazione"
    ],
    correct: [0],
    exp: "La Pipeline incapsula i passi (scaling, encoding, modello) in sequenza: garantisce che le stesse trasformazioni siano applicate in training e in predizione, prevenendo leakage."
  },
  {
    id: "u09095", topic: "Metrica per regressione",
    q: "L'accuratezza (accuracy) si usa in un problema di regressione?",
    opts: [
      "No: è una metrica di classificazione; per la regressione si usano MAE, RMSE, R²",
      "Sì, in ogni caso, indipendentemente da frequenza e granularità dei dati",
      "Sì, ma solo con pochi dati",
      "No, non esistono metriche per la regressione"
    ],
    correct: [0],
    exp: "L'accuracy conta le previsioni esatte tra categorie: non ha senso per valori continui. La regressione usa errori (MAE, MSE, RMSE) o R²."
  },
  {
    id: "u09096", topic: "Bias del campione",
    q: "Se i dati di training non rappresentano la popolazione reale, il modello:",
    opts: [
      "Erediterà quel bias e generalizzerà male sul mondo reale",
      "Sarà comunque perfetto",
      "Ignorerà i dati",
      "Diventerà non supervisionato"
    ],
    correct: [0],
    exp: "'Garbage in, garbage out': un campione distorto produce un modello distorto. La rappresentatività e la qualità dei dati sono fondamentali, oltre all'algoritmo."
  },
  {
    id: "u09097", topic: "Ottimizzazione",
    q: "La funzione di costo (loss) in un modello:",
    opts: [
      "Misura quanto le previsioni si discostano dai valori reali, da minimizzare",
      "Va sempre massimizzata come se fosse una metrica di accuratezza",
      "Conta il numero di feature usate dal modello",
      "È il numero di righe"
    ],
    correct: [0],
    exp: "La loss quantifica l'errore del modello (es. MSE, cross-entropy): l'addestramento cerca i parametri che la MINIMIZZANO. Loss diverse portano a comportamenti diversi."
  },
  {
    id: "u09098", topic: "Semi-supervisionato",
    q: "L'apprendimento semi-supervisionato usa:",
    opts: [
      "Pochi dati etichettati insieme a molti dati non etichettati",
      "Solo dati etichettati",
      "Solo ricompense",
      "Nessun dato viene usato per calcolare il risultato"
    ],
    correct: [0],
    exp: "Il semi-supervisionato sfrutta una piccola parte di dati etichettati e una grande di non etichettati: utile quando etichettare è costoso, come spesso accade nella pratica."
  },
  {
    id: "u09099", topic: "Explainability",
    q: "Tecniche come SHAP e LIME servono a:",
    opts: [
      "Spiegare le previsioni di modelli complessi (interpretabilità)",
      "Addestrare più velocemente",
      "Aumentare il volume dei dati senza risolvere il fallimento del task",
      "Cancellare feature"
    ],
    correct: [0],
    exp: "SHAP e LIME attribuiscono a ciascuna feature il contributo a una specifica previsione, rendendo interpretabili anche modelli 'black box' come reti ed ensemble."
  },
  {
    id: "u09100", topic: "Ciclo ML",
    q: "Dopo il deploy, un progetto ML si considera:",
    opts: [
      "Da monitorare e mantenere nel tempo (il ciclo non finisce)",
      "Terminato definitivamente dopo il primo rilascio",
      "Da ripartire completamente da zero a ogni giornata",
      "Inutile da monitorare dopo la messa in produzione"
    ],
    correct: [0],
    exp: "Il deploy non è la fine: i modelli vanno monitorati per drift e degrado, ri-addestrati con dati nuovi e mantenuti. Il ML è un ciclo di vita continuo, non un'attività una tantum."
  },
  // === AGGIUNGI NUOVE DOMANDE MACHINE LEARNING QUI ===
]);
