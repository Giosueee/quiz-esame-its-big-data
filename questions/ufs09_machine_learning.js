/* ============================================================
   MATERIA: Machine Learning  (UFS09)
   100 domande. (Camuffatura lunghezze: pass finale.)
   ============================================================ */
registerSubject("Machine Learning", [
  {
    id: "u09001", topic: "Tipi di ML",
    q: "Nel machine learning supervisionato:",
    opts: [
      "L'algoritmo non impara dai dati",
      "Non ci sono etichette nei dati",
      "Si impara da dati etichettati"
    ],
    correct: [2],
    exp: "Nel supervisionato ogni esempio ha una label (output corretto): il modello impara la relazione input→output per prevedere nuovi casi. Classificazione e regressione sono supervisionate."
  },
  {
    id: "u09002", topic: "Tipi di ML",
    q: "L'apprendimento NON supervisionato serve a:",
    opts: [
      "Trovare struttura/pattern in dati senza etichette",
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
      "La regressione produce classi discrete invece di valori continui",
      "La classificazione predice categorie, la regressione valori numerici continui",
      "La classificazione apprende senza label come un metodo non supervisionato"
    ],
    correct: [1],
    exp: "Classificazione → output categorico (spam/non spam). Regressione → output numerico continuo (prezzo di una casa). Entrambe sono supervisionate."
  },
  {
    id: "u09004", topic: "Overfitting",
    q: "L'overfitting si verifica quando un modello:",
    opts: [
      "Non riceve dati di training e quindi non apprende parametri",
      "È troppo semplice e non riesce a rappresentare la relazione nei dati",
      "Si adatta troppo ai dati di training e generalizza male su dati nuovi"
    ],
    correct: [2],
    exp: "L'overfitting è l'apprendimento a memoria del rumore del training: ottime prestazioni sul training ma scarse sul test. Si combatte con regolarizzazione, più dati, modelli più semplici."
  },
  {
    id: "u09005", topic: "Underfitting",
    q: "L'underfitting indica un modello che:",
    opts: [
      "È troppo semplice e non coglie i pattern nemmeno nel training",
      "È troppo complesso e rischia di adattarsi al rumore del training",
      "Ha memorizzato il training set invece di generalizzare"
    ],
    correct: [0],
    exp: "L'underfitting è l'opposto dell'overfitting: il modello è troppo semplice (alto bias) e va male sia sul training sia sul test. Serve un modello più espressivo o feature migliori."
  },
  {
    id: "u09006", topic: "Train/test split",
    q: "Perché si divide il dataset in training e test?",
    opts: [
      "Per aumentare artificialmente il training set a scapito della valutazione",
      "Per valutare le prestazioni su dati mai visti dal modello",
      "Usare tutto il dataset insieme senza separare training e test"
    ],
    correct: [1],
    exp: "Il test set, mai visto durante l'addestramento, stima la capacità di GENERALIZZAZIONE. Valutare sul training darebbe risultati ottimistici e ingannevoli."
  },
  {
    id: "u09007", topic: "Validation set",
    q: "A cosa serve il validation set?",
    opts: [
      "Assegnare manualmente le label invece di scegliere iperparametri",
      "Usare la validazione al posto dei dati di addestramento",
      "A scegliere iperparametri e modelli senza toccare il test"
    ],
    correct: [2],
    exp: "Il validation set serve per tuning di iperparametri e selezione del modello. Il test finale resta 'intatto' per una stima imparziale delle prestazioni finali."
  },
  {
    id: "u09008", topic: "Cross-validation",
    q: "La k-fold cross-validation:",
    opts: [
      "Divide i dati in k parti, addestrando e validando a rotazione",
      "Usa una sola divisione training-validazione invece di ruotare i fold",
      "Rimuove il test set invece di preservarlo per la valutazione finale"
    ],
    correct: [0],
    exp: "Nella k-fold i dati sono divisi in k blocchi: a turno uno fa da validazione e gli altri da training. La media dei k risultati dà una stima più robusta e usa tutti i dati."
  },
  {
    id: "u09009", topic: "Bias-variance",
    q: "Il compromesso bias-variance dice che:",
    opts: [
      "Bias e varianza cambiano indipendentemente dalla complessità del modello",
      "Ridurre il bias tende ad aumentare la varianza e viceversa",
      "Si possono portare a zero bias e varianza con una scelta semplice"
    ],
    correct: [1],
    exp: "Modelli semplici hanno alto bias/bassa varianza (underfit); modelli complessi basso bias/alta varianza (overfit). L'obiettivo è il punto di equilibrio che minimizza l'errore su dati nuovi."
  },
  {
    id: "u09010", topic: "Confusion matrix",
    q: "La matrice di confusione mostra:",
    opts: [
      "Mostra la distribuzione delle osservazioni nel dataset",
      "Mostra solo la percentuale di predizioni corrette",
      "Il confronto tra classi predette e classi reali"
    ],
    correct: [2],
    exp: "La confusion matrix incrocia previsioni e verità: veri positivi, falsi positivi, falsi negativi, veri negativi. Da essa si ricavano accuratezza, precisione, recall, F1."
  },
  {
    id: "u09011", topic: "Metriche",
    q: "L'accuratezza (accuracy) è:",
    opts: [
      "La quota di previsioni corrette sul totale",
      "La quota di veri positivi sui positivi predetti",
      "La quota di veri positivi sui positivi reali"
    ],
    correct: [0],
    exp: "Accuracy = (TP+TN)/totale. Attenzione: con classi sbilanciate può essere ingannevole (un modello che predice sempre la classe maggioritaria ha alta accuracy ma è inutile)."
  },
  {
    id: "u09012", topic: "Metriche",
    q: "La precision (precisione) misura:",
    opts: [
      "Tra i positivi reali, quanti sono stati trovati",
      "Tra i casi predetti positivi, quanti lo sono davvero",
      "Il numero totale di errori"
    ],
    correct: [1],
    exp: "Precision = TP/(TP+FP): dei predetti positivi, quanti giusti. Alta precision = pochi falsi allarmi. Importante quando un falso positivo è costoso."
  },
  {
    id: "u09013", topic: "Metriche",
    q: "La recall (sensibilità) misura:",
    opts: [
      "La varianza del modello",
      "Tra i predetti positivi, quanti giusti",
      "Tra i positivi reali, quanti ne ha trovati il modello"
    ],
    correct: [2],
    exp: "Recall = TP/(TP+FN): dei casi realmente positivi, quanti individuati. Alta recall = pochi falsi negativi. Cruciale quando 'mancare' un positivo è grave (es. diagnosi)."
  },
  {
    id: "u09014", topic: "Metriche",
    q: "L'F1-score è:",
    opts: [
      "La media armonica di precision e recall",
      "La somma di precision e recall",
      "L'accuratezza media"
    ],
    correct: [0],
    exp: "F1 = 2·(P·R)/(P+R): bilancia precision e recall in un unico numero, utile con classi sbilanciate. È alto solo se entrambe sono alte."
  },
  {
    id: "u09015", topic: "Trade-off P/R",
    q: "Aumentare la recall tende a:",
    opts: [
      "Aumentare anche la precision",
      "Ridurre la precision (e viceversa)",
      "Azzerare i falsi negativi e i falsi positivi"
    ],
    correct: [1],
    exp: "Abbassando la soglia di classificazione si trovano più positivi (recall su) ma con più falsi allarmi (precision giù). C'è un compromesso tra le due, riassunto dall'F1 o dalla curva P-R."
  },
  {
    id: "u09016", topic: "Metriche regressione",
    q: "L'RMSE (Root Mean Squared Error) misura:",
    opts: [
      "Misura la relazione lineare tra variabili di input",
      "La percentuale di previsioni corrette",
      "L'errore tipico delle previsioni, nella stessa unità della variabile"
    ],
    correct: [2],
    exp: "RMSE è la radice della media degli errori al quadrato: penalizza molto gli errori grandi ed è nelle unità della variabile target. Più basso = previsioni migliori."
  },
  {
    id: "u09017", topic: "ROC/AUC",
    q: "L'AUC (area sotto la curva ROC) vicina a 1 indica:",
    opts: [
      "Un classificatore che distingue molto bene le classi",
      "Un modello che indovina a caso",
      "Overfitting garantito"
    ],
    correct: [0],
    exp: "L'AUC misura la capacità di separare le classi al variare della soglia: 1 = perfetto, 0,5 = come il caso. Utile e robusta anche con classi moderatamente sbilanciate."
  },
  {
    id: "u09018", topic: "Feature scaling",
    q: "Perché si normalizzano/standardizzano le feature?",
    opts: [
      "Per aumentare il numero di righe",
      "Per evitare che feature con scale diverse dominino il modello",
      "Per assegnare label manuali ai dati prima di usarli nel modello"
    ],
    correct: [1],
    exp: "Algoritmi basati su distanze o gradiente (KNN, SVM, reti) sono sensibili alla scala: standardizzare (media 0, sd 1) o normalizzare mette le feature su scale comparabili."
  },
  {
    id: "u09019", topic: "Encoding",
    q: "Il one-hot encoding serve a:",
    opts: [
      "Rimuovere i valori mancanti",
      "Ridurre il numero di righe",
      "Trasformare una variabile categorica in colonne binarie 0/1"
    ],
    correct: [2],
    exp: "Il one-hot crea una colonna binaria per ciascuna categoria, evitando di imporre un ordine numerico fittizio. Necessario per algoritmi che accettano solo input numerici."
  },
  {
    id: "u09020", topic: "K-means",
    q: "L'algoritmo k-means serve a:",
    opts: [
      "Raggruppare i dati in k cluster",
      "Classificare con etichette note",
      "Ridurre gli errori di un albero"
    ],
    correct: [0],
    exp: "k-means è clustering non supervisionato: assegna i punti a k gruppi minimizzando la distanza dai centroidi. Il numero k va scelto (es. metodo del gomito)."
  },
  {
    id: "u09021", topic: "K-means",
    q: "Nel k-means, il valore di k:",
    opts: [
      "È sempre uguale al numero di righe",
      "Va scelto in anticipo dall'utente",
      "Coincide col numero di feature"
    ],
    correct: [1],
    exp: "k (numero di cluster) è un iperparametro da fissare prima. Si sceglie con euristiche come il metodo del gomito (elbow) o il silhouette score."
  },
  {
    id: "u09022", topic: "PCA",
    q: "La PCA (Analisi delle Componenti Principali) serve a:",
    opts: [
      "Aggiungere manualmente label ai record prima dell'addestramento",
      "Aumentare il numero di feature",
      "Ridurre la dimensionalità conservando la massima varianza"
    ],
    correct: [2],
    exp: "La PCA proietta i dati su nuove componenti ortogonali che catturano la maggior varianza: riduce le dimensioni mantenendo l'informazione, contro la 'maledizione della dimensionalità'."
  },
  {
    id: "u09023", topic: "Decision tree",
    q: "Un albero di decisione:",
    opts: [
      "Divide i dati con una serie di domande/soglie sulle feature",
      "È un algoritmo di clustering",
      "Funziona solo su testo"
    ],
    correct: [0],
    exp: "L'albero di decisione suddivide ricorsivamente i dati con condizioni sulle feature fino alle foglie (previsione). È interpretabile ma tende all'overfitting se non potato."
  },
  {
    id: "u09024", topic: "Random forest",
    q: "Una random forest è:",
    opts: [
      "Un singolo albero molto profondo",
      "Un insieme (ensemble) di molti alberi di decisione",
      "Un algoritmo che raggruppa osservazioni senza label"
    ],
    correct: [1],
    exp: "La random forest combina molti alberi addestrati su sottocampioni casuali e ne media le previsioni: riduce l'overfitting del singolo albero ed è robusta e accurata."
  },
  {
    id: "u09025", topic: "KNN",
    q: "Il k-Nearest Neighbors classifica un punto in base a:",
    opts: [
      "La media calcolata su tutte le righe senza distinguere gruppi",
      "Una soglia sul primo attributo",
      "Le classi dei k vicini più prossimi"
    ],
    correct: [2],
    exp: "KNN assegna la classe più frequente tra i k punti più vicini (per distanza). È semplice, 'pigro' (non addestra un modello) e sensibile alla scala delle feature."
  },
  {
    id: "u09026", topic: "Regressione logistica",
    q: "La regressione logistica si usa per:",
    opts: [
      "Problemi di classificazione",
      "Prevedere valori continui illimitati",
      "Raggruppare senza etichette"
    ],
    correct: [0],
    exp: "Nonostante il nome, la regressione logistica è un classificatore: stima la probabilità (0-1) che un'osservazione appartenga a una classe, usando la funzione sigmoide."
  },
  {
    id: "u09027", topic: "Gradient descent",
    q: "La discesa del gradiente (gradient descent) serve a:",
    opts: [
      "Separare i dati in sottoinsiemi di training, validazione e test",
      "Minimizzare la funzione di costo aggiornando i parametri passo passo",
      "Assegnare nomi leggibili alle classi dopo la previsione"
    ],
    correct: [1],
    exp: "Il gradient descent aggiorna i parametri nella direzione opposta al gradiente della funzione di costo, riducendola iterativamente fino a un minimo. È il motore di molti modelli."
  },
  {
    id: "u09028", topic: "Learning rate",
    q: "Un learning rate troppo alto nella discesa del gradiente:",
    opts: [
      "Lascia invariati parametri, dati e risultato del modello",
      "Rende sempre l'addestramento più preciso",
      "Può far divergere l'ottimizzazione (salta il minimo)"
    ],
    correct: [2],
    exp: "Un tasso di apprendimento troppo grande fa 'rimbalzare' i parametri e può divergere; troppo piccolo rende l'addestramento lentissimo. Va calibrato con attenzione."
  },
  {
    id: "u09029", topic: "Regolarizzazione",
    q: "La regolarizzazione (L1/L2) serve a:",
    opts: [
      "Penalizzare la complessità del modello per ridurre l'overfitting",
      "Aumentare il numero di parametri",
      "Aggiungere manualmente label ai record prima dell'addestramento"
    ],
    correct: [0],
    exp: "La regolarizzazione aggiunge alla funzione di costo una penalità sui pesi grandi: L2 (ridge) li riduce, L1 (lasso) può azzerarli (selezione di feature). Combatte l'overfitting."
  },
  {
    id: "u09030", topic: "Data leakage",
    q: "Il data leakage (fuga di dati) si verifica quando:",
    opts: [
      "Un modello con capacità insufficiente rispetto ai pattern",
      "Informazioni del test/futuro filtrano nel training, gonfiando le prestazioni",
      "Assenza di label disponibili per l'apprendimento supervisionato"
    ],
    correct: [1],
    exp: "Il leakage avviene quando il modello 'vede' in addestramento informazioni non disponibili in produzione (es. normalizzare usando anche il test): dà risultati ottimistici e falsi."
  },
  {
    id: "u09031", topic: "Iperparametri",
    q: "Un iperparametro (es. profondità dell'albero, k del KNN):",
    opts: [
      "È l'output del modello",
      "È appreso automaticamente dai dati",
      "È impostato prima dell'addestramento, non appreso dai dati"
    ],
    correct: [2],
    exp: "Gli iperparametri configurano l'algoritmo e si scelgono prima (o tramite tuning su validation). I parametri veri (es. i pesi) sono invece appresi dai dati durante l'addestramento."
  },
  {
    id: "u09032", topic: "Dati sbilanciati",
    q: "Con classi molto sbilanciate (es. 99% vs 1%), l'accuratezza:",
    opts: [
      "Può essere alta ma fuorviante, ignorando la classe rara",
      "È sempre la metrica migliore",
      "Coincide con la recall"
    ],
    correct: [0],
    exp: "Un modello che predice sempre la classe maggioritaria ha 99% di accuracy ma non trova mai la classe rara. Con sbilanciamento servono precision, recall, F1 o AUC."
  },
  {
    id: "u09033", topic: "Ensemble",
    q: "I metodi ensemble (bagging, boosting) migliorano le prestazioni:",
    opts: [
      "Usando un solo modello semplice",
      "Combinando più modelli deboli in uno più forte",
      "Riducendo sempre l'interpretabilità a zero"
    ],
    correct: [1],
    exp: "Gli ensemble aggregano più modelli: il bagging (random forest) riduce la varianza, il boosting (es. XGBoost) riduce il bias addestrando in sequenza correggendo gli errori."
  },
  {
    id: "u09034", topic: "Boosting",
    q: "Nel boosting, i modelli vengono addestrati:",
    opts: [
      "Senza usare le etichette",
      "Tutti in parallelo e indipendenti",
      "In sequenza, ciascuno correggendo gli errori del precedente"
    ],
    correct: [2],
    exp: "Il boosting costruisce modelli in serie: ogni nuovo modello si concentra sugli esempi sbagliati dai precedenti. Esempi: AdaBoost, Gradient Boosting, XGBoost."
  },
  {
    id: "u09035", topic: "Feature engineering",
    q: "Il feature engineering consiste nel:",
    opts: [
      "Creare/trasformare variabili utili per migliorare il modello",
      "Aumentare il numero di righe",
      "Separare i dati in sottoinsiemi di training, validazione e test"
    ],
    correct: [0],
    exp: "Il feature engineering trasforma i dati grezzi in variabili informative (combinazioni, aggregazioni, estrazioni da date/testo): spesso incide più della scelta dell'algoritmo."
  },
  {
    id: "u09036", topic: "Curse of dimensionality",
    q: "La 'maledizione della dimensionalità' indica che:",
    opts: [
      "Più feature sono sempre meglio",
      "Con troppe feature i dati diventano radi e i modelli peggiorano",
      "I dati diventano più densi"
    ],
    correct: [1],
    exp: "All'aumentare delle dimensioni lo spazio cresce esponenzialmente e i punti diventano sparsi: distanze poco significative, rischio overfitting. Da qui l'utilità della riduzione (PCA)."
  },
  {
    id: "u09037", topic: "Naive Bayes",
    q: "Il classificatore Naive Bayes assume che le feature siano:",
    opts: [
      "Feature etichettate manualmente una per una",
      "Feature sempre dipendenti tra loro data la classe",
      "Indipendenti tra loro data la classe"
    ],
    correct: [2],
    exp: "Naive Bayes applica Bayes assumendo indipendenza condizionata tra le feature: assunzione spesso irrealistica ma che funziona bene, es. nella classificazione di testi/spam."
  },
  {
    id: "u09038", topic: "SVM",
    q: "Una Support Vector Machine (SVM) cerca:",
    opts: [
      "L'iperpiano che separa le classi con il massimo margine",
      "Il centroide dei dati",
      "Il valore medio calcolato aggregando tutte le osservazioni"
    ],
    correct: [0],
    exp: "La SVM trova il confine (iperpiano) che massimizza la distanza (margine) dai punti più vicini di ciascuna classe. Con i kernel gestisce anche separazioni non lineari."
  },
  {
    id: "u09039", topic: "Clustering gerarchico",
    q: "Il clustering gerarchico produce:",
    opts: [
      "Un unico valore numerico invece di una struttura di cluster",
      "Una struttura ad albero (dendrogramma) di raggruppamenti annidati",
      "Una regressione che predice un valore numerico continuo"
    ],
    correct: [1],
    exp: "Il clustering gerarchico costruisce cluster annidati visualizzati in un dendrogramma: si può 'tagliare' a diverse altezze per ottenere un diverso numero di gruppi, senza fissare k a priori."
  },
  {
    id: "u09040", topic: "Generalizzazione",
    q: "L'obiettivo finale di un modello ML è:",
    opts: [
      "Avere il maggior numero di parametri",
      "Memorizzare perfettamente il training",
      "Generalizzare bene su dati nuovi mai visti"
    ],
    correct: [2],
    exp: "Un modello utile GENERALIZZA: fa buone previsioni su dati nuovi. Ottime prestazioni solo sul training (overfitting) non servono nella realtà."
  },
  {
    id: "u09041", topic: "Reinforcement learning",
    q: "Nell'apprendimento per rinforzo (reinforcement learning):",
    opts: [
      "Un agente impara agendo nell'ambiente e ricevendo ricompense",
      "Si usano solo dati etichettati",
      "I dati non cambiano nel tempo e non arrivano come flusso continuo"
    ],
    correct: [0],
    exp: "Nel reinforcement learning un agente compie azioni, riceve ricompense/penalità e impara una strategia (policy) che massimizza la ricompensa nel tempo. Es: giochi, robotica."
  },
  {
    id: "u09042", topic: "Pipeline ML",
    q: "Un tipico flusso di un progetto ML è:",
    opts: [
      "Raccolta dati → preparazione → valutazione → addestramento → deploy",
      "Raccolta dati → preparazione → addestramento → valutazione → deploy",
      "Deploy → raccolta dati → preparazione → addestramento → valutazione"
    ],
    correct: [1],
    exp: "Il flusso: raccogliere e pulire i dati, ingegnerizzare feature, addestrare, valutare su dati indipendenti e infine mettere in produzione (e monitorare). È iterativo."
  },
  {
    id: "u09043", topic: "Imputazione",
    q: "Gestire i valori mancanti tramite imputazione significa:",
    opts: [
      "Duplicare le righe",
      "Ignorarli lasciandoli vuoti",
      "Sostituirli con stime"
    ],
    correct: [2],
    exp: "L'imputazione riempie i mancanti con valori stimati (media/mediana, o modelli più sofisticati) per non perdere righe. La rimozione è un'alternativa ma riduce i dati."
  },
  {
    id: "u09044", topic: "Overfitting: segnali",
    q: "Quale sintomo indica overfitting?",
    opts: [
      "Errore molto basso sul training ma alto sul test",
      "Errore alto su entrambi",
      "Errore basso su entrambi"
    ],
    correct: [0],
    exp: "Il divario tra ottime prestazioni sul training e scarse sul test è il segno tipico dell'overfitting. Se l'errore è alto su entrambi è underfitting."
  },
  {
    id: "u09045", topic: "Metriche regressione",
    q: "Il MAE (Mean Absolute Error) rispetto all'RMSE:",
    opts: [
      "Penalizza di più gli errori grandi",
      "Penalizza meno gli errori grandi",
      "È sempre uguale all'RMSE"
    ],
    correct: [1],
    exp: "Il MAE è la media degli errori in valore assoluto: tratta tutti gli errori linearmente. L'RMSE, elevando al quadrato, penalizza di più gli errori grandi ed è più sensibile agli outlier."
  },
  {
    id: "u09046", topic: "Etichette",
    q: "In un problema supervisionato, la 'target' (o label) è:",
    opts: [
      "Un parametro scelto prima dell'addestramento del modello",
      "Il numero di righe presenti nel dataset o nel risultato",
      "La variabile che il modello deve prevedere"
    ],
    correct: [2],
    exp: "La target/label è l'output da prevedere (es. il prezzo, la classe). Le feature sono gli input usati per predirla."
  },
  {
    id: "u09047", topic: "Standardizzazione",
    q: "Standardizzare una feature significa portarla a:",
    opts: [
      "Media 0 e deviazione standard 1",
      "Valori tra 0 e 1",
      "Solo valori interi"
    ],
    correct: [0],
    exp: "La standardizzazione (z-score) sottrae la media e divide per la deviazione standard → media 0, sd 1. La normalizzazione min-max porta invece i valori in [0,1]."
  },
  {
    id: "u09048", topic: "Silhouette",
    q: "Il silhouette score in un clustering misura:",
    opts: [
      "Il numero di variabili usate per rappresentare ogni osservazione",
      "Quanto i punti sono coesi nel proprio cluster e separati dagli altri",
      "L'accuratezza rispetto a etichette note"
    ],
    correct: [1],
    exp: "Il silhouette (tra -1 e 1) valuta la qualità dei cluster: alto se i punti sono vicini al proprio gruppo e lontani dagli altri. Aiuta a scegliere il numero di cluster."
  },
  {
    id: "u09049", topic: "Baseline",
    q: "Perché si definisce un modello 'baseline'?",
    opts: [
      "Per assegnare label manuali ai dati prima di usarli nel modello",
      "Per usarlo in produzione senza modifiche",
      "Per avere un riferimento minimo con cui confrontare i modelli veri"
    ],
    correct: [2],
    exp: "La baseline (es. predire sempre la media o la classe più frequente) fornisce un metro minimo: un modello complesso ha senso solo se batte chiaramente la baseline."
  },
  {
    id: "u09050", topic: "Generalizzazione",
    q: "Aumentare la quantità di dati di training tipicamente:",
    opts: [
      "Aiuta a ridurre l'overfitting e migliorare la generalizzazione",
      "Aumenta sempre l'overfitting",
      "Lascia invariati parametri, dati e risultato del modello"
    ],
    correct: [0],
    exp: "Più dati (variati e rappresentativi) aiutano il modello a cogliere i pattern veri anziché il rumore, migliorando la generalizzazione. Non sostituiscono però una buona valutazione."
  },
  {
    id: "u09051", topic: "Feature selection",
    q: "La selezione delle feature (feature selection) serve a:",
    opts: [
      "Aggiungere sempre più variabili",
      "Tenere solo le variabili più informative, riducendo rumore e complessità",
      "Aggiungere manualmente label ai record prima dell'addestramento"
    ],
    correct: [1],
    exp: "Selezionare le feature rilevanti riduce overfitting, tempi di calcolo e migliora l'interpretabilità, scartando variabili ridondanti o irrilevanti."
  },
  {
    id: "u09052", topic: "Modello parametrico",
    q: "Un modello 'parametrico' (es. regressione lineare):",
    opts: [
      "È sempre un modello ad albero indipendentemente dalla formulazione",
      "Non contiene parametri stimati o fissati dal modello",
      "Ha un numero fisso di parametri indipendente dalla mole di dati"
    ],
    correct: [2],
    exp: "I modelli parametrici assumono una forma con parametri fissi (es. i coefficienti di una retta). I non parametrici (KNN, alberi) adattano la complessità ai dati."
  },
  {
    id: "u09053", topic: "Epoca",
    q: "In addestramento iterativo, un'epoca (epoch) è:",
    opts: [
      "Un passaggio completo su tutto il dataset di training",
      "Una sola osservazione del dataset di training",
      "Un valore scelto prima del training e non appreso dai dati"
    ],
    correct: [0],
    exp: "Un'epoca è una passata completa su tutti gli esempi di training. Si eseguono più epoche affinché il modello converga; troppe possono portare a overfitting."
  },
  {
    id: "u09054", topic: "Batch",
    q: "Nel mini-batch gradient descent, il modello aggiorna i pesi:",
    opts: [
      "Solo dopo l'intero dataset",
      "Su piccoli sottoinsiemi (batch) di dati alla volta",
      "Non avviene in nessuna configurazione utile del problema"
    ],
    correct: [1],
    exp: "Il mini-batch aggiorna i parametri su piccoli gruppi di esempi: compromesso tra il batch completo (stabile ma lento) e lo stocastico su singolo esempio (rumoroso ma rapido)."
  },
  {
    id: "u09055", topic: "Overfitting: rimedi",
    q: "Quale tecnica riduce l'overfitting?",
    opts: [
      "La riduzione dei dati di addestramento",
      "L'aumento della complessità del modello",
      "La regolarizzazione dei pesi del modello"
    ],
    correct: [2],
    exp: "Regolarizzazione, più dati di training e modelli più semplici riducono l'overfitting. Aumentare la complessità del modello o ridurre i dati lo PEGGIORANO, perché il modello memorizza il rumore."
  },
  {
    id: "u09056", topic: "Interpretabilità",
    q: "Quale modello è generalmente più interpretabile?",
    opts: [
      "Un albero di decisione poco profondo",
      "Una rete neurale con più strati nascosti usata per apprendimento profondo",
      "Una SVM con kernel complesso"
    ],
    correct: [0],
    exp: "Un albero poco profondo o una regressione lineare sono trasparenti (si leggono le regole/coefficienti). Reti profonde ed ensemble grandi sono 'scatole nere', più accurati ma opachi."
  },
  {
    id: "u09057", topic: "Centroide",
    q: "Nel k-means, un centroide è:",
    opts: [
      "Il punto più lontano",
      "Il punto medio di un cluster",
      "Un iperparametro fisso"
    ],
    correct: [1],
    exp: "Il centroide è la media delle posizioni dei punti di un cluster. L'algoritmo alterna assegnazione dei punti al centroide più vicino e aggiornamento dei centroidi."
  },
  {
    id: "u09058", topic: "Threshold",
    q: "In un classificatore probabilistico, abbassare la soglia di decisione:",
    opts: [
      "Lascia invariato il risultato dell'operazione sui dati",
      "Riduce sempre i falsi negativi e i falsi positivi",
      "Aumenta i positivi predetti"
    ],
    correct: [2],
    exp: "Con soglia più bassa più casi vengono etichettati positivi: sale la recall ma scende la precision. La soglia si tara secondo il costo relativo di falsi positivi e negativi."
  },
  {
    id: "u09059", topic: "Generalizzazione: test",
    q: "Il test set va usato:",
    opts: [
      "Solo alla fine, per la valutazione finale imparziale",
      "Per scegliere gli iperparametri",
      "Per addestrare il modello"
    ],
    correct: [0],
    exp: "Il test set si tocca solo alla fine: se lo si usa per tuning diventa parte del processo e non fornisce più una stima onesta della generalizzazione (rischio leakage)."
  },
  {
    id: "u09060", topic: "Modello vs algoritmo",
    q: "Qual è la differenza tra algoritmo e modello?",
    opts: [
      "Sono termini sinonimi e non cambiano la procedura richiesta",
      "L'algoritmo è la procedura di apprendimento; il modello è il risultato addestrato",
      "Il modello addestra l'algoritmo"
    ],
    correct: [1],
    exp: "L'algoritmo (es. random forest) è la procedura; il modello è ciò che si ottiene dopo l'addestramento sui dati (con i parametri appresi), pronto a fare previsioni."
  },
  {
    id: "u09061", topic: "Bagging",
    q: "Il bagging (bootstrap aggregating) riduce principalmente:",
    opts: [
      "Il numero di variabili usate per rappresentare ogni osservazione",
      "La componente di errore dovuta a ipotesi troppo semplici del modello",
      "La varianza, addestrando modelli su campioni bootstrap e mediando"
    ],
    correct: [2],
    exp: "Il bagging addestra più modelli su campioni casuali con rimpiazzo e ne aggrega le previsioni: media gli errori e riduce la varianza. La random forest ne è l'esempio."
  },
  {
    id: "u09062", topic: "Metriche: quando usare",
    q: "Per una diagnosi medica dove non si può 'mancare' un malato, si privilegia:",
    opts: [
      "La recall (pochi falsi negativi)",
      "La precision",
      "L'accuratezza grezza"
    ],
    correct: [0],
    exp: "Non individuare un malato (falso negativo) è grave: serve alta recall. Si accetta qualche falso allarme in più (precision minore) pur di non perdere casi positivi."
  },
  {
    id: "u09063", topic: "Normalizzazione min-max",
    q: "La normalizzazione min-max porta i valori:",
    opts: [
      "A media 0 e sd 1",
      "In un intervallo fisso",
      "A soli valori interi"
    ],
    correct: [1],
    exp: "Min-max riscala: (x−min)/(max−min) → valori in [0,1]. Sensibile agli outlier (che spostano min/max). La standardizzazione usa invece media e deviazione standard."
  },
  {
    id: "u09064", topic: "Ensemble voting",
    q: "In un classificatore ensemble a votazione, la previsione finale è:",
    opts: [
      "Una scelta casuale non guidata dai dati né da una metrica",
      "Sempre quella del primo modello",
      "La classe scelta dalla maggioranza dei modelli"
    ],
    correct: [2],
    exp: "Nel voting 'hard' vince la classe più votata dai modelli; nel 'soft' si mediano le probabilità. Aggregare più modelli spesso batte il singolo."
  },
  {
    id: "u09065", topic: "Learning curve",
    q: "Una curva di apprendimento (errore vs quantità di dati) aiuta a capire se:",
    opts: [
      "Il modello soffre di più bias o più varianza",
      "Una proprietà visuale del grafico, non una logica di calcolo",
      "Il numero di classi presenti nel problema di classificazione"
    ],
    correct: [0],
    exp: "Le learning curve mostrano l'errore su training e validation al crescere dei dati: curve vicine e alte → underfit (bias); ampio gap → overfit (varianza), che più dati possono ridurre."
  },
  {
    id: "u09066", topic: "Sovracampionamento",
    q: "Con classi sbilanciate, l'oversampling (es. SMOTE) serve a:",
    opts: [
      "Aggiungere manualmente label ai record prima dell'addestramento",
      "Aumentare gli esempi della classe minoritaria",
      "Cambiare l'algoritmo"
    ],
    correct: [1],
    exp: "L'oversampling (o SMOTE che genera esempi sintetici) bilancia le classi aumentando la minoritaria. L'undersampling invece riduce la maggioritaria. Servono a gestire lo sbilanciamento."
  },
  {
    id: "u09067", topic: "Modello lineare",
    q: "La regressione lineare presuppone una relazione:",
    opts: [
      "Una scelta casuale non guidata dai dati né da una metrica",
      "Sempre esponenziale",
      "Approssimativamente lineare tra feature e target"
    ],
    correct: [2],
    exp: "La regressione lineare modella una relazione lineare. Se la relazione è fortemente non lineare, servono trasformazioni, feature polinomiali o modelli non lineari."
  },
  {
    id: "u09068", topic: "Confusione: FP",
    q: "Un falso positivo (FP) è:",
    opts: [
      "Un caso predetto positivo che in realtà è negativo",
      "Un positivo reale non trovato",
      "Un vero positivo"
    ],
    correct: [0],
    exp: "FP = 'falso allarme': il modello dice positivo ma è negativo. Il falso negativo (FN) è l'opposto: un positivo reale classificato come negativo."
  },
  {
    id: "u09069", topic: "Dimensionalità",
    q: "La riduzione della dimensionalità è utile per:",
    opts: [
      "Aumentare il numero di variabili",
      "Visualizzare, velocizzare e ridurre l'overfitting",
      "Aggiungere manualmente label ai record prima dell'addestramento"
    ],
    correct: [1],
    exp: "Ridurre le dimensioni (PCA, t-SNE) aiuta a visualizzare i dati in 2D/3D, accelera i modelli e attenua la maledizione della dimensionalità e l'overfitting."
  },
  {
    id: "u09070", topic: "Modello generativo vs discriminativo",
    q: "Un modello discriminativo (es. regressione logistica) impara:",
    opts: [
      "Solo a generare nuovi dati",
      "La distribuzione completa dei dati",
      "Direttamente il confine tra le classi (P(y|x))"
    ],
    correct: [2],
    exp: "I discriminativi modellano P(classe|input), concentrandosi sul confine decisionale. I generativi (es. Naive Bayes) modellano come i dati sono generati (P(x|classe)) e poi applicano Bayes."
  },
  {
    id: "u09071", topic: "Convergenza",
    q: "Se la funzione di costo non diminuisce durante l'addestramento, potrebbe dipendere da:",
    opts: [
      "Un learning rate mal calibrato o dati non normalizzati",
      "Troppi dati di test",
      "Una proprietà visuale del grafico, non una logica di calcolo"
    ],
    correct: [0],
    exp: "Mancata convergenza spesso deriva da learning rate troppo alto/basso, feature non scalate o dati problematici. Sono i primi aspetti da controllare."
  },
  {
    id: "u09072", topic: "Cross-val: vantaggio",
    q: "Il vantaggio della cross-validation rispetto a un singolo split è:",
    opts: [
      "È sempre più veloce, anche quando i dati sono eterogenei o copiati",
      "Una stima più stabile usando tutti i dati per validare",
      "Elimina il bisogno di dati"
    ],
    correct: [1],
    exp: "La k-fold riduce la dipendenza da un particolare split fortunato/sfortunato: ogni dato viene usato sia per addestrare sia per validare, dando una stima più affidabile."
  },
  {
    id: "u09073", topic: "Feature importance",
    q: "La 'feature importance' di una random forest indica:",
    opts: [
      "La dimensione del dataset",
      "L'accuratezza totale",
      "Quanto ciascuna variabile contribuisce alle previsioni"
    ],
    correct: [2],
    exp: "La feature importance quantifica il contributo di ogni variabile al modello: utile per interpretare e selezionare feature, pur con cautela in presenza di variabili correlate."
  },
  {
    id: "u09074", topic: "Modello in produzione",
    q: "Le prestazioni di un modello in produzione possono peggiorare nel tempo per:",
    opts: [
      "Il data/concept drift",
      "Il numero di righe del training",
      "Il colore dell'interfaccia"
    ],
    correct: [0],
    exp: "Il 'drift' è il cambiamento della distribuzione dei dati o della relazione target nel tempo: il modello, addestrato sul passato, si degrada. Serve monitoraggio e ri-addestramento."
  },
  {
    id: "u09075", topic: "Encoding ordinale",
    q: "L'encoding ordinale è appropriato quando la categoria:",
    opts: [
      "Non possiede un ordine naturale tra le categorie",
      "Ha un ordine naturale (es. basso<medio<alto)",
      "È una variabile numerica continua, non una categoria ordinata"
    ],
    correct: [1],
    exp: "L'ordinal encoding assegna numeri crescenti a categorie ordinate. Per categorie senza ordine si usa il one-hot, per non introdurre relazioni d'ordine inesistenti."
  },
  {
    id: "u09076", topic: "Modello: parametri",
    q: "I parametri di un modello (es. i pesi) sono:",
    opts: [
      "I dati grezzi",
      "Fissati a mano prima",
      "Appresi dai dati durante l'addestramento"
    ],
    correct: [2],
    exp: "I parametri (pesi, coefficienti) sono ciò che il modello apprende ottimizzando la funzione di costo. Gli iperparametri, invece, si impostano prima dell'addestramento."
  },
  {
    id: "u09077", topic: "Anomaly detection",
    q: "Il rilevamento di anomalie (anomaly detection) individua:",
    opts: [
      "Osservazioni che si discostano molto dal comportamento normale",
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
      "La parte informativa dei dati che il modello dovrebbe apprendere",
      "Variabilità casuale non spiegabile che il modello non dovrebbe imparare",
      "Un parametro scelto prima dell'addestramento del modello"
    ],
    correct: [1],
    exp: "Il rumore è la parte casuale/errata dei dati. Un buon modello coglie il segnale ma non il rumore; adattarsi al rumore è overfitting."
  },
  {
    id: "u09079", topic: "Kernel",
    q: "Nei metodi come le SVM, il 'kernel trick' permette di:",
    opts: [
      "Eliminare gli iperparametri",
      "Ridurre il numero di esempi disponibili per l'addestramento",
      "Gestire separazioni non lineari senza calcolare esplicitamente nuove dimensioni"
    ],
    correct: [2],
    exp: "Il kernel calcola similarità in uno spazio a più dimensioni implicitamente, permettendo confini non lineari nello spazio originale senza costruire davvero quelle dimensioni."
  },
  {
    id: "u09080", topic: "Grid search",
    q: "La grid search serve a:",
    opts: [
      "Provare sistematicamente combinazioni di iperparametri per trovare le migliori",
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
      "Solo regressione lineare",
      "Reti neurali con molti livelli (layer)",
      "Nessun dato viene usato per calcolare il risultato"
    ],
    correct: [1],
    exp: "Il deep learning impiega reti neurali profonde (molti strati) capaci di apprendere rappresentazioni complesse: eccelle con immagini, audio e testo, ma richiede molti dati e calcolo."
  },
  {
    id: "u09082", topic: "Attivazione",
    q: "In una rete neurale, la funzione di attivazione serve a:",
    opts: [
      "Serializzare il modello addestrato su disco per riutilizzarlo",
      "Ridurre il numero di esempi disponibili per l'addestramento",
      "Introdurre non linearità permettendo di apprendere relazioni complesse"
    ],
    correct: [2],
    exp: "Senza funzioni di attivazione non lineari (ReLU, sigmoide) una rete equivarrebbe a un modello lineare. La non linearità permette di modellare relazioni complesse."
  },
  {
    id: "u09083", topic: "Dropout",
    q: "Il dropout in una rete neurale:",
    opts: [
      "Disattiva casualmente neuroni in addestramento per ridurre l'overfitting",
      "Aggiunge neuroni alla rete durante l'addestramento",
      "Modifica le label del dataset invece della struttura della rete"
    ],
    correct: [0],
    exp: "Il dropout 'spegne' casualmente una frazione di neuroni a ogni passo di training, impedendo co-adattamenti eccessivi e migliorando la generalizzazione."
  },
  {
    id: "u09084", topic: "Early stopping",
    q: "L'early stopping consiste nel:",
    opts: [
      "Usare il test set per decidere quando fermare il training",
      "Fermare l'addestramento quando l'errore di validazione smette di migliorare",
      "Continuare l'addestramento senza criterio di arresto"
    ],
    correct: [1],
    exp: "L'early stopping interrompe l'addestramento quando le prestazioni sul validation peggiorano, evitando che il modello continui a specializzarsi sul training (overfitting)."
  },
  {
    id: "u09085", topic: "Modello benchmark",
    q: "Confrontare più modelli richiede:",
    opts: [
      "Solo il training set",
      "Metriche diverse per ciascuno",
      "Le stesse condizioni: stessi dati di test e stesse metriche"
    ],
    correct: [2],
    exp: "Per un confronto equo i modelli vanno valutati sugli stessi dati di test con le stesse metriche. Cambiare le condizioni rende i confronti privi di significato."
  },
  {
    id: "u09086", topic: "Target leakage",
    q: "Includere tra le feature una variabile disponibile solo DOPO l'evento da prevedere causa:",
    opts: [
      "Target leakage: prestazioni gonfiate e inutili in produzione",
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
      "Supervisionato, perché sfrutta etichette note",
      "Non supervisionato (nessuna etichetta nota)",
      "Una tecnica di regressione su valori continui"
    ],
    correct: [1],
    exp: "Il clustering raggruppa i dati senza etichette (non supervisionato). La classificazione, invece, usa etichette note per assegnare categorie."
  },
  {
    id: "u09088", topic: "Metriche: macro/micro",
    q: "In problemi multiclasse, la media 'macro' di una metrica:",
    opts: [
      "Calcola la metrica solo sulla classe più frequente",
      "Pesa le classi in base alla numerosità, come una media weighted",
      "Media la metrica calcolata per classe, trattandole con lo stesso peso"
    ],
    correct: [2],
    exp: "La macro-media calcola la metrica per ciascuna classe e ne fa la media semplice (ogni classe conta uguale). La micro-media aggrega prima i conteggi, dando più peso alle classi numerose."
  },
  {
    id: "u09089", topic: "Outlier",
    q: "Gli outlier possono influenzare molto:",
    opts: [
      "Modelli sensibili come la regressione lineare e le distanze",
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
      "Aumentare sempre i parametri invece di ridurre sensibilità al rumore",
      "Renderlo meno sensibile a rumore, outlier e piccole variazioni",
      "Eliminare la valutazione invece di rendere stabile il modello"
    ],
    correct: [1],
    exp: "Un modello robusto mantiene buone prestazioni anche con dati imperfetti (rumore, outlier, drift lieve). Si ottiene con regolarizzazione, feature stabili, tecniche robuste."
  },
  {
    id: "u09091", topic: "Overfitting: complessità",
    q: "A parità di prestazioni su dati nuovi, è preferibile il modello:",
    opts: [
      "Con più parametri",
      "Con più feature",
      "Più semplice (principio di parsimonia)"
    ],
    correct: [2],
    exp: "Il rasoio di Occam: a parità di risultati, il modello più semplice generalizza meglio, è più interpretabile e meno soggetto a overfitting."
  },
  {
    id: "u09092", topic: "Feature categoriche",
    q: "Un albero di decisione, rispetto alla regressione lineare, con le feature categoriche:",
    opts: [
      "Le gestisce naturalmente con split, senza per forza scalare o codificare in modo complesso",
      "Non può usare feature categoriche in nessuna forma",
      "Ignora automaticamente le feature categoriche durante lo split"
    ],
    correct: [0],
    exp: "Gli alberi dividono i dati con soglie/condizioni e gestiscono bene feature categoriche e scale diverse, senza bisogno di normalizzazione (a differenza di KNN, SVM, reti)."
  },
  {
    id: "u09093", topic: "Validazione temporale",
    q: "Con dati temporali (serie storiche), lo split train/test deve:",
    opts: [
      "Mescolare casualmente passato e futuro nella valutazione",
      "Rispettare l'ordine cronologico",
      "Ignorare l'ordine temporale nello split o nella trasformazione"
    ],
    correct: [1],
    exp: "Con dati nel tempo uno split casuale causa leakage (usare il futuro per prevedere il passato). Si addestra sui dati passati e si valida sui successivi, con validazione temporale."
  },
  {
    id: "u09094", topic: "Pipeline scikit-learn",
    q: "Una Pipeline (es. in scikit-learn) serve a:",
    opts: [
      "A rimuovere i dati disponibili prima dell'elaborazione",
      "Solo a visualizzare i dati",
      "Concatenare pre-processing e modello in un unico flusso riproducibile"
    ],
    correct: [2],
    exp: "La Pipeline incapsula i passi (scaling, encoding, modello) in sequenza: garantisce che le stesse trasformazioni siano applicate in training e in predizione, prevenendo leakage."
  },
  {
    id: "u09095", topic: "Metrica per regressione",
    q: "L'accuratezza (accuracy) si usa in un problema di regressione?",
    opts: [
      "No: è una metrica di classificazione; per la regressione si usano MAE, RMSE, R²",
      "Sì, in ogni caso, indipendentemente da frequenza e granularità dei dati",
      "No, non esistono metriche per la regressione"
    ],
    correct: [0],
    exp: "L'accuracy conta le previsioni esatte tra categorie: non ha senso per valori continui. La regressione usa errori (MAE, MSE, RMSE) o R²."
  },
  {
    id: "u09096", topic: "Bias del campione",
    q: "Se i dati di training non rappresentano la popolazione reale, il modello:",
    opts: [
      "Ignorerà i dati",
      "Erediterà quel bias e generalizzerà male sul mondo reale",
      "Diventerà non supervisionato"
    ],
    correct: [1],
    exp: "'Garbage in, garbage out': un campione distorto produce un modello distorto. La rappresentatività e la qualità dei dati sono fondamentali, oltre all'algoritmo."
  },
  {
    id: "u09097", topic: "Ottimizzazione",
    q: "La funzione di costo (loss) in un modello:",
    opts: [
      "Conta il numero di feature usate dal modello",
      "Va sempre massimizzata come se fosse una metrica di accuratezza",
      "Misura quanto le previsioni si discostano dai valori reali, da minimizzare"
    ],
    correct: [2],
    exp: "La loss quantifica l'errore del modello (es. MSE, cross-entropy): l'addestramento cerca i parametri che la MINIMIZZANO. Loss diverse portano a comportamenti diversi."
  },
  {
    id: "u09098", topic: "Semi-supervisionato",
    q: "L'apprendimento semi-supervisionato usa:",
    opts: [
      "Pochi dati etichettati insieme a molti dati non etichettati",
      "Solo dati etichettati",
      "Nessun dato viene usato per calcolare il risultato"
    ],
    correct: [0],
    exp: "Il semi-supervisionato sfrutta una piccola parte di dati etichettati e una grande di non etichettati: utile quando etichettare è costoso, come spesso accade nella pratica."
  },
  {
    id: "u09099", topic: "Explainability",
    q: "Tecniche come SHAP e LIME servono a:",
    opts: [
      "Addestrare più velocemente",
      "Spiegare le previsioni di modelli complessi (interpretabilità)",
      "Aumentare il volume dei dati senza risolvere il fallimento del task"
    ],
    correct: [1],
    exp: "SHAP e LIME attribuiscono a ciascuna feature il contributo a una specifica previsione, rendendo interpretabili anche modelli 'black box' come reti ed ensemble."
  },
  {
    id: "u09100", topic: "Ciclo ML",
    q: "Dopo il deploy, un progetto ML si considera:",
    opts: [
      "Inutile da monitorare dopo la messa in produzione",
      "Terminato definitivamente dopo il primo rilascio",
      "Da monitorare e mantenere nel tempo"
    ],
    correct: [2],
    exp: "Il deploy non è la fine: i modelli vanno monitorati per drift e degrado, ri-addestrati con dati nuovi e mantenuti. Il ML è un ciclo di vita continuo, non un'attività una tantum."
  },
  // === AGGIUNGI NUOVE DOMANDE MACHINE LEARNING QUI ===
]);
