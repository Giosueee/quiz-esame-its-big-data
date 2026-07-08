/* ============================================================
   MATERIA: Modelli Statistici  (UFS07 - inferenza, test d'ipotesi, regressione)
   100 domande bilanciate e "a trabocchetto".
   ============================================================ */
registerSubject("Modelli Statistici", [
  {
    id: "u07001", topic: "Ipotesi nulla",
    q: "L'ipotesi nulla (H0) in un test statistico rappresenta:",
    opts: [
      "L'affermazione di 'nessun effetto' o 'nessuna differenza' che si vuole mettere alla prova",
      "L'ipotesi che il ricercatore spera fortemente di dimostrare come vera",
      "Il risultato certo dell'esperimento indipendentemente dai dati raccolti"
    ],
    correct: [0],
    exp: "H0 è l'ipotesi di partenza da 'sfidare' (tipicamente nessun effetto/differenza). Il test cerca prove per RIFIUTARLA a favore dell'alternativa H1. Non si 'accetta' mai H0: al più non si riesce a rifiutarla."
  },
  {
    id: "u07002", topic: "Ipotesi alternativa",
    q: "L'ipotesi alternativa (H1) è:",
    opts: [
      "Una copia esatta dell'ipotesi nulla espressa con altre parole",
      "L'affermazione che si vuole sostenere, contraria all'ipotesi nulla",
      "L'ipotesi che viene sempre accettata a prescindere dai dati"
    ],
    correct: [1],
    exp: "H1 è ciò che si vuole dimostrare (es. 'c'è un effetto/differenza') ed è complementare a H0. Se i dati sono abbastanza forti da rifiutare H0, si conclude a favore di H1."
  },
  {
    id: "u07003", topic: "Livello di significatività",
    q: "Il livello di significatività α (es. 0,05) rappresenta:",
    opts: [
      "La percentuale di dati che cade entro una deviazione standard",
      "La probabilità che l'ipotesi nulla sia effettivamente vera",
      "La probabilità di rifiutare H0 quando in realtà è vera"
    ],
    correct: [2],
    exp: "α è la soglia di rischio di errore di primo tipo: rifiutare H0 pur essendo vera (falso positivo). Fissando α=0,05 accetti un 5% di probabilità di questo errore. Va scelto PRIMA di vedere i dati."
  },
  {
    id: "u07004", topic: "p-value",
    q: "Il p-value di un test rappresenta:",
    opts: [
      "La probabilità di osservare dati estremi quanto quelli ottenuti, se H0 è vera",
      "La probabilità che l'ipotesi nulla sia vera dati i risultati",
      "La probabilità di aver commesso un errore di secondo tipo"
    ],
    correct: [0],
    exp: "Il p-value è P(dati così estremi | H0 vera). Piccolo p-value → i dati sono improbabili sotto H0 → si rifiuta H0. NON è la probabilità che H0 sia vera (errore comune)."
  },
  {
    id: "u07005", topic: "Decisione del test",
    q: "La regola di decisione con il p-value è: si rifiuta H0 quando:",
    opts: [
      "Il p-value è maggiore del livello di significatività α",
      "Il p-value è minore o uguale al livello di significatività α",
      "Il p-value è esattamente uguale a 1 in ogni caso"
    ],
    correct: [1],
    exp: "Se p ≤ α si rifiuta H0 (risultato 'statisticamente significativo'); se p > α non si rifiuta. Es: con α=0,05 e p=0,02 si rifiuta H0."
  },
  {
    id: "u07006", topic: "p-value",
    q: "Un p-value pari a 0,03 significa che:",
    opts: [
      "C'è il 97% di probabilità che l'ipotesi alternativa sia vera",
      "C'è il 3% di probabilità che l'ipotesi nulla sia vera",
      "C'è il 3% di probabilità di ottenere dati così estremi se H0 fosse vera"
    ],
    correct: [2],
    exp: "Il p-value NON è la probabilità che H0 sia vera. È la probabilità dei dati (o più estremi) ASSUMENDO H0 vera. Con p=0,03 < 0,05 si rifiuta H0, ma non si quantifica la probabilità delle ipotesi."
  },
  {
    id: "u07007", topic: "Errore di primo tipo",
    q: "L'errore di primo tipo (di tipo I) consiste nel:",
    opts: [
      "Rifiutare l'ipotesi nulla quando in realtà è vera (falso positivo)",
      "Non rifiutare l'ipotesi nulla quando in realtà è falsa",
      "Scegliere un campione troppo piccolo per il test"
    ],
    correct: [0],
    exp: "Errore di tipo I = 'falso allarme': rifiuti H0 pur essendo vera. La sua probabilità è α. Es: concludere che un farmaco funziona quando in realtà non fa nulla."
  },
  {
    id: "u07008", topic: "Errore di secondo tipo",
    q: "L'errore di secondo tipo (di tipo II) consiste nel:",
    opts: [
      "Rifiutare l'ipotesi nulla quando in realtà è vera",
      "Non rifiutare l'ipotesi nulla quando in realtà è falsa (falso negativo)",
      "Confondere la media campionaria con quella della popolazione"
    ],
    correct: [1],
    exp: "Errore di tipo II = 'mancato allarme': non rifiuti H0 pur essendo falsa. La sua probabilità è β. Es: concludere che un farmaco non funziona quando in realtà funziona."
  },
  {
    id: "u07009", topic: "Potenza del test",
    q: "La potenza di un test statistico è:",
    opts: [
      "La probabilità che il campione sia rappresentativo della popolazione",
      "La probabilità di commettere un errore di primo tipo, pari ad α",
      "La probabilità di rifiutare correttamente H0 quando è falsa, pari a 1 − β"
    ],
    correct: [2],
    exp: "La potenza (1 − β) è la capacità del test di rilevare un effetto realmente presente. Aumenta con la numerosità del campione e con la dimensione dell'effetto. Un test poco potente rischia falsi negativi."
  },
  {
    id: "u07010", topic: "Errori del test",
    q: "Riducendo molto α (es. da 0,05 a 0,01), a parità di dati, il rischio di errore di secondo tipo (β):",
    opts: [
      "Aumenta: più difficile rifiutare H0, più falsi negativi",
      "Diminuisce insieme ad α, perché entrambi calano insieme",
      "Resta esattamente invariato, perché sono indipendenti"
    ],
    correct: [0],
    exp: "C'è un compromesso: abbassando α diventa più difficile rifiutare H0, quindi aumentano i mancati rilevamenti (β cresce). Per ridurre entrambi gli errori serve aumentare la numerosità del campione."
  },
  {
    id: "u07011", topic: "Test bilaterale",
    q: "Un test bilaterale (a due code) si usa quando l'ipotesi alternativa afferma che:",
    opts: [
      "Il parametro è strettamente maggiore del valore ipotizzato",
      "Il parametro è solo diverso (≠) dal valore ipotizzato",
      "Il parametro è strettamente minore del valore ipotizzato"
    ],
    correct: [1],
    exp: "Bilaterale: H1 è 'μ ≠ valore', quindi si considerano entrambe le code della distribuzione. Unilaterale (a una coda): H1 è 'μ > valore' o 'μ < valore', con una sola direzione di interesse."
  },
  {
    id: "u07012", topic: "Regione di rifiuto",
    q: "La regione critica (di rifiuto) di un test è:",
    opts: [
      "L'insieme dei dati anomali da eliminare prima del test",
      "L'intervallo che contiene sicuramente il vero valore del parametro",
      "L'insieme dei valori della statistica test per cui si rifiuta l'ipotesi nulla"
    ],
    correct: [2],
    exp: "La regione critica raccoglie i valori della statistica test 'troppo estremi' sotto H0: se la statistica calcolata vi ricade, si rifiuta H0. La sua ampiezza dipende da α."
  },
  {
    id: "u07013", topic: "z-test vs t-test",
    q: "Si usa il test t di Student invece dello z-test quando:",
    opts: [
      "La deviazione standard della popolazione è ignota e si stima dal campione",
      "La deviazione standard della popolazione è nota con certezza assoluta",
      "Il campione è composto da più di diecimila osservazioni"
    ],
    correct: [0],
    exp: "Il t-test si usa quando σ della popolazione è sconosciuta (caso più realistico) e va stimata dal campione, specie con campioni piccoli. Lo z-test presuppone σ nota. Per n grande t e z quasi coincidono."
  },
  {
    id: "u07014", topic: "Distribuzione t",
    q: "La distribuzione t di Student, rispetto alla normale standard, ha:",
    opts: [
      "Una forma completamente asimmetrica verso destra",
      "Code più pesanti, soprattutto con pochi gradi di libertà",
      "Nessuna relazione con la distribuzione normale"
    ],
    correct: [1],
    exp: "La t è simmetrica e campanulare come la normale, ma con code più pesanti (più incertezza) quando i gradi di libertà sono pochi. All'aumentare dei gradi di libertà tende alla normale standard."
  },
  {
    id: "u07015", topic: "Gradi di libertà",
    q: "In un t-test a un campione con n osservazioni, i gradi di libertà sono:",
    opts: [
      "n / 2",
      "n + 1",
      "n − 1"
    ],
    correct: [2],
    exp: "Per il t-test a un campione i gradi di libertà sono n − 1 (si 'perde' un grado stimando la media dal campione). I gradi di libertà determinano la forma esatta della distribuzione t."
  },
  {
    id: "u07016", topic: "Intervallo di confidenza",
    q: "Un intervallo di confidenza al 95% per la media significa che:",
    opts: [
      "Ripetendo il campionamento, il 95% degli intervalli così costruiti conterrebbe la vera media",
      "Il 95% dei dati del campione cade all'interno dell'intervallo calcolato",
      "C'è il 95% di probabilità che il singolo intervallo sia sbagliato"
    ],
    correct: [0],
    exp: "L'interpretazione corretta è frequentista: nel 95% dei campioni ripetuti l'intervallo cattura il vero parametro. Il parametro è fisso; è l'intervallo (che cambia da campione a campione) a essere aleatorio."
  },
  {
    id: "u07017", topic: "Confidenza e test",
    q: "Se un intervallo di confidenza al 95% per una differenza NON contiene lo zero, allora:",
    opts: [
      "La differenza non è significativa perché l'intervallo è troppo ampio",
      "La differenza è statisticamente significativa al livello 0,05 (si rifiuta H0)",
      "Non si può trarre alcuna conclusione dal test"
    ],
    correct: [1],
    exp: "C'è una corrispondenza tra IC e test: se l'IC al 95% per la differenza esclude lo zero (il valore di 'nessuna differenza'), allora si rifiuta H0 con α=0,05. Se lo zero è dentro, non si rifiuta."
  },
  {
    id: "u07018", topic: "Test chi-quadro",
    q: "Il test chi-quadro (χ²) di indipendenza serve a verificare:",
    opts: [
      "Se una variabile continua segue una distribuzione normale",
      "Se la media di un campione è uguale a un valore prefissato",
      "Se due variabili categoriche sono associate oppure indipendenti tra loro"
    ],
    correct: [2],
    exp: "Il χ² di indipendenza confronta le frequenze osservate in una tabella di contingenza con quelle attese sotto ipotesi di indipendenza. Un χ² grande (p piccolo) indica associazione tra le due variabili categoriche."
  },
  {
    id: "u07019", topic: "Chi-quadro",
    q: "Il test chi-quadro si basa sul confronto tra:",
    opts: [
      "Frequenze osservate e frequenze attese sotto l'ipotesi nulla",
      "La media e la mediana dei dati campionari",
      "Il coefficiente angolare e l'intercetta di una retta"
    ],
    correct: [0],
    exp: "Il χ² misura quanto le frequenze osservate si discostano da quelle attese se H0 (indipendenza o buon adattamento) fosse vera. Maggiore lo scostamento, maggiore χ², più forte l'evidenza contro H0."
  },
  {
    id: "u07020", topic: "ANOVA",
    q: "L'analisi della varianza (ANOVA) si usa per confrontare:",
    opts: [
      "La varianza di un singolo campione con un valore atteso",
      "Le medie di tre o più gruppi contemporaneamente",
      "Due variabili categoriche in una tabella di contingenza"
    ],
    correct: [1],
    exp: "L'ANOVA verifica se le medie di più gruppi (3 o più) sono tutte uguali o se almeno una differisce. Confrontare le medie a coppie con molti t-test aumenterebbe l'errore di primo tipo: l'ANOVA lo controlla."
  },
  {
    id: "u07021", topic: "ANOVA",
    q: "Perché non si usano tanti t-test a coppie invece di un'unica ANOVA con molti gruppi?",
    opts: [
      "Perché con più gruppi i dati diventano automaticamente qualitativi",
      "Perché l'ANOVA è l'unico test che usa la distribuzione normale",
      "Perché test multipli aumentano il rischio complessivo di errore di primo tipo"
    ],
    correct: [2],
    exp: "Facendo molti confronti a coppie, la probabilità di ottenere almeno un falso positivo cresce (problema dei confronti multipli). L'ANOVA fa un unico test globale controllando l'errore complessivo."
  },
  {
    id: "u07022", topic: "Regressione lineare",
    q: "La regressione lineare semplice modella:",
    opts: [
      "La relazione lineare tra una variabile dipendente e una indipendente",
      "La distribuzione di frequenza di una singola variabile categorica",
      "La probabilità congiunta di due eventi indipendenti"
    ],
    correct: [0],
    exp: "La regressione lineare semplice stima una retta Y = a + bX per prevedere Y (dipendente) dalla X (indipendente). 'a' è l'intercetta, 'b' il coefficiente angolare (pendenza)."
  },
  {
    id: "u07023", topic: "Regressione",
    q: "Nel modello Y = a + bX, il coefficiente angolare b rappresenta:",
    opts: [
      "La correlazione esatta tra X e Y espressa in percentuale",
      "La variazione attesa di Y per un aumento unitario di X",
      "La media dei residui del modello"
    ],
    correct: [1],
    exp: "Il coefficiente b (pendenza) indica di quanto varia Y in media all'aumentare di X di una unità. L'intercetta 'a' è invece il valore di Y quando X=0."
  },
  {
    id: "u07024", topic: "Metodo dei minimi quadrati",
    q: "Il metodo dei minimi quadrati stima la retta di regressione:",
    opts: [
      "Scegliendo la retta che passa per il valore massimo dei dati",
      "Facendo passare la retta esattamente per tutti i punti osservati",
      "Minimizzando la somma dei quadrati degli scarti (residui) tra dati e retta"
    ],
    correct: [2],
    exp: "I minimi quadrati (OLS) trovano la retta che rende minima la somma dei quadrati dei residui (distanze verticali punto-retta). È il criterio standard per stimare i coefficienti della regressione."
  },
  {
    id: "u07025", topic: "Residui",
    q: "Un residuo nella regressione è:",
    opts: [
      "La differenza tra il valore osservato di Y e quello previsto dal modello",
      "Il valore previsto dal modello per una data osservazione",
      "Il coefficiente di correlazione tra X e Y"
    ],
    correct: [0],
    exp: "Il residuo = valore osservato − valore previsto: misura l'errore del modello per ogni punto. L'analisi dei residui serve a verificare le assunzioni della regressione (linearità, varianza costante)."
  },
  {
    id: "u07026", topic: "R quadro",
    q: "Il coefficiente di determinazione R² indica:",
    opts: [
      "La pendenza della retta di regressione stimata",
      "La quota di variabilità di Y spiegata dal modello di regressione",
      "Il numero di osservazioni usate per stimare il modello"
    ],
    correct: [1],
    exp: "R² (tra 0 e 1) esprime la frazione di varianza di Y spiegata dal modello: R²=0,8 significa che l'80% della variabilità di Y è spiegata da X. Vicino a 1 = buon adattamento; vicino a 0 = scarso."
  },
  {
    id: "u07027", topic: "Regressione",
    q: "Un R² alto garantisce che il modello di regressione sia corretto e causale?",
    opts: [
      "No, perché R² misura soltanto la pendenza della retta",
      "Sì, un R² alto dimostra che X è la causa di Y",
      "No: R² alto indica adattamento, non correttezza né causalità"
    ],
    correct: [2],
    exp: "R² alto significa solo che il modello 'segue' bene i dati, ma può derivare da correlazioni spurie, overfitting o variabili confondenti. L'adattamento statistico non dimostra un legame di causa-effetto."
  },
  {
    id: "u07028", topic: "Significatività",
    q: "Un risultato 'statisticamente significativo' è sempre importante nella pratica?",
    opts: [
      "No: con n grande anche effetti minuscoli sono significativi",
      "Sì, significativo e importante sono sempre sinonimi",
      "No, perché la significatività statistica non esiste davvero"
    ],
    correct: [0],
    exp: "Significatività statistica ≠ rilevanza pratica. Con n enorme anche differenze trascurabili diventano significative (p piccolo). Bisogna guardare anche la DIMENSIONE dell'effetto, non solo il p-value."
  },
  {
    id: "u07029", topic: "Interpretazione test",
    q: "Non rifiutare H0 equivale a dimostrare che H0 è vera?",
    opts: [
      "Sì, non rifiutare H0 la dimostra definitivamente",
      "No: solo prove insufficienti contro H0, non che sia vera",
      "No, perché H0 va sempre rifiutata in ogni test"
    ],
    correct: [1],
    exp: "'Assenza di prova non è prova di assenza': non rifiutare H0 vuol dire solo che i dati non bastano a smentirla, magari per campione piccolo o test poco potente. Non la si 'accetta' come vera."
  },
  {
    id: "u07030", topic: "Assunzioni",
    q: "Molti test parametrici (t-test, ANOVA) assumono che i dati:",
    opts: [
      "Abbiano media esattamente uguale a zero",
      "Siano tutti valori interi positivi senza eccezioni",
      "Provengano da popolazioni approssimativamente normali con varianze simili"
    ],
    correct: [2],
    exp: "I test parametrici assumono normalità (o campioni grandi, grazie al TLC) e spesso omogeneità delle varianze. Se le assunzioni sono gravemente violate si usano test non parametrici."
  },
  {
    id: "u07031", topic: "Test non parametrici",
    q: "I test non parametrici (es. Mann-Whitney, Wilcoxon) sono utili quando:",
    opts: [
      "I dati non rispettano le assunzioni dei test parametrici",
      "Si vuole stimare esattamente la media della popolazione",
      "Le variabili sono tutte continue e simmetriche"
    ],
    correct: [0],
    exp: "I test non parametrici non richiedono l'assunzione di normalità e si basano spesso sui ranghi: sono robusti con dati ordinali, distribuzioni asimmetriche o campioni piccoli non normali."
  },
  {
    id: "u07032", topic: "Numerosità campionaria",
    q: "Aumentare la dimensione del campione, a parità di effetto reale, tende a:",
    opts: [
      "Aumentare sia α sia il p-value",
      "Aumentare la potenza del test e ridurre l'errore standard",
      "Ridurre la potenza del test statistico"
    ],
    correct: [1],
    exp: "Più dati → errore standard minore e maggiore potenza (più capacità di rilevare un effetto vero). Per questo campioni grandi rendono significativi anche effetti piccoli."
  },
  {
    id: "u07033", topic: "Statistica test",
    q: "La statistica test (es. t o z) misura, in sostanza:",
    opts: [
      "Il numero di gruppi confrontati nel test",
      "La dimensione totale del campione utilizzato",
      "Quanto il dato si discosta da H0, in errori standard"
    ],
    correct: [2],
    exp: "La statistica test standardizza la distanza tra la stima campionaria e il valore ipotizzato sotto H0, misurandola in errori standard. Valori grandi (in modulo) portano a p-value piccoli."
  },
  {
    id: "u07034", topic: "Test a due campioni",
    q: "Un test t per due campioni indipendenti confronta:",
    opts: [
      "Le medie di due gruppi distinti per stabilire se differiscono",
      "La media dello stesso gruppo prima e dopo un trattamento",
      "La varianza di un campione con un valore prefissato"
    ],
    correct: [0],
    exp: "Il t a due campioni indipendenti verifica se le medie di due gruppi separati sono diverse. Se i due gruppi sono le stesse unità misurate due volte, si usa invece il t per campioni appaiati (paired)."
  },
  {
    id: "u07035", topic: "Test appaiato",
    q: "Un test t per campioni appaiati (paired) è indicato quando:",
    opts: [
      "Si confrontano due gruppi di persone completamente diversi",
      "Si misurano le STESSE unità in due condizioni (es. prima e dopo)",
      "Si vogliono confrontare più di due gruppi insieme"
    ],
    correct: [1],
    exp: "Il test appaiato confronta due misure sulle stesse unità (prima/dopo, destra/sinistra): analizza le differenze intra-soggetto, riducendo la variabilità e aumentando la potenza rispetto al test indipendente."
  },
  {
    id: "u07036", topic: "Regressione multipla",
    q: "La regressione lineare multipla estende quella semplice perché:",
    opts: [
      "Trasforma la relazione lineare in una relazione categorica",
      "Prevede più variabili dipendenti da una sola indipendente",
      "Usa più variabili indipendenti per prevedere la variabile dipendente"
    ],
    correct: [2],
    exp: "La regressione multipla usa più predittori (X1, X2, ...) per spiegare Y: Y = a + b1X1 + b2X2 + ... Ogni coefficiente misura l'effetto di una variabile tenendo costanti le altre."
  },
  {
    id: "u07037", topic: "Overfitting",
    q: "Aggiungere sempre più variabili a un modello di regressione:",
    opts: [
      "Aumenta R² sui dati, ma rischia overfitting",
      "Riduce sempre l'errore su nuovi dati mai visti",
      "Rende il modello automaticamente causale"
    ],
    correct: [0],
    exp: "Aggiungendo predittori R² non può diminuire sui dati di addestramento, ma il modello può adattarsi al rumore (overfitting) e prevedere male su nuovi dati. Si usano R² aggiustato o validazione per evitarlo."
  },
  {
    id: "u07038", topic: "p-value",
    q: "Due studi con p=0,049 e p=0,051 (α=0,05) danno conclusioni:",
    opts: [
      "Identiche, perché entrambi non rifiutano l'ipotesi nulla",
      "Opposte per la regola formale, pur essendo l'evidenza quasi identica",
      "Prive di senso, perché il p-value non serve a decidere"
    ],
    correct: [1],
    exp: "Con la soglia rigida 0,05, p=0,049 rifiuta H0 e p=0,051 no, benché l'evidenza sia quasi la stessa. È un limite del dicotomizzare: meglio riportare il p-value esatto e la dimensione dell'effetto."
  },
  {
    id: "u07039", topic: "Ipotesi",
    q: "In un test, il segno di uguaglianza (=) compare tipicamente:",
    opts: [
      "In entrambe le ipotesi allo stesso modo",
      "Nell'ipotesi alternativa H1",
      "Nell'ipotesi nulla H0 (es. μ = valore)"
    ],
    correct: [2],
    exp: "H0 contiene l'uguaglianza (μ = μ0), mentre H1 esprime la differenza (≠, >, <). Il test valuta se i dati sono compatibili con l'uguaglianza affermata da H0."
  },
  {
    id: "u07040", topic: "Distribuzione campionaria",
    q: "La distribuzione campionaria di una statistica è:",
    opts: [
      "La distribuzione della statistica su tutti i campioni possibili",
      "La distribuzione dei dati grezzi di un singolo campione",
      "La distribuzione della popolazione di partenza"
    ],
    correct: [0],
    exp: "È la distribuzione dei valori che una statistica (es. la media) assumerebbe ripetendo il campionamento. La sua deviazione standard è l'errore standard. È il fondamento teorico dell'inferenza."
  },
  {
    id: "u07041", topic: "Errore standard",
    q: "Quadruplicando la dimensione del campione, l'errore standard della media:",
    opts: [
      "Raddoppia, perché aumentano i dati",
      "Si dimezza, perché dipende da √n al denominatore",
      "Resta identico, non dipende da n"
    ],
    correct: [1],
    exp: "Errore standard = σ/√n. Quadruplicando n, √n raddoppia, quindi l'errore standard si dimezza. Per dimezzarlo serve quadruplicare il campione: la precisione cresce lentamente."
  },
  {
    id: "u07042", topic: "Coefficiente di correlazione",
    q: "Nella regressione lineare semplice, R² è legato al coefficiente di correlazione r da:",
    opts: [
      "R² calcolato come radice della correlazione",
      "R² calcolato come complemento della correlazione",
      "R² = r², il quadrato del coefficiente di correlazione"
    ],
    correct: [2],
    exp: "Nella regressione semplice il coefficiente di determinazione è il quadrato della correlazione: R² = r². Quindi r=0,9 → R²=0,81 (81% di varianza spiegata)."
  },
  {
    id: "u07043", topic: "Test a una coda",
    q: "Un test a una coda (unilaterale) è preferibile quando:",
    opts: [
      "Interessa rilevare uno scostamento in una sola direzione precisa",
      "Non si ha alcuna ipotesi sulla direzione dell'effetto",
      "Il campione è troppo piccolo per un test bilaterale"
    ],
    correct: [0],
    exp: "Il test unilaterale si usa quando interessa solo una direzione (es. 'il nuovo metodo è MIGLIORE'). Concentrando α in una coda ha più potenza in quella direzione, ma non rileva effetti opposti."
  },
  {
    id: "u07044", topic: "Ipotesi e dati",
    q: "È corretto formulare o modificare l'ipotesi DOPO aver guardato i dati per ottenere significatività?",
    opts: [
      "Sì, è il modo standard di procedere in statistica",
      "No, è una pratica scorretta (HARKing/p-hacking) che invalida il test",
      "Sì, purché il p-value finale sia sotto 0,05"
    ],
    correct: [1],
    exp: "Formulare ipotesi a posteriori o provare molti test finché uno risulta significativo (p-hacking) gonfia i falsi positivi e invalida l'inferenza. Le ipotesi vanno fissate PRIMA di analizzare i dati."
  },
  {
    id: "u07045", topic: "Varianza spiegata",
    q: "Un modello con R² = 0,25 spiega:",
    opts: [
      "Il 25% delle osservazioni del campione",
      "Il 75% della variabilità della variabile dipendente",
      "Il 25% della variabilità della variabile dipendente"
    ],
    correct: [2],
    exp: "R²=0,25 significa che il modello spiega il 25% della varianza di Y; il restante 75% è dovuto ad altri fattori o al caso. È un adattamento piuttosto modesto."
  },
  {
    id: "u07046", topic: "Stima puntuale e intervallare",
    q: "Qual è la differenza tra stima puntuale e stima intervallare?",
    opts: [
      "La puntuale dà un valore, l'intervallare un range di confidenza",
      "La puntuale è sempre esatta, l'intervallare sempre sbagliata",
      "Non c'è differenza, sono due nomi per la stessa stima"
    ],
    correct: [0],
    exp: "La stima puntuale fornisce un unico valore (es. media campionaria); quella intervallare (IC) fornisce un intervallo che dovrebbe contenere il parametro con una data confidenza, esprimendo l'incertezza."
  },
  {
    id: "u07047", topic: "Test statistico",
    q: "Rifiutare H0 con α=0,05 significa essere sicuri al 95% che H1 è vera?",
    opts: [
      "Sì, è esattamente il significato di α=0,05",
      "No: α controlla i falsi positivi, non la probabilità di H1",
      "No, perché α non ha alcun ruolo nel test"
    ],
    correct: [1],
    exp: "α è il tasso di errore di primo tipo se H0 è vera, non la probabilità che H1 sia vera. L'approccio frequentista non assegna probabilità alle ipotesi: quello lo fa la statistica bayesiana."
  },
  {
    id: "u07048", topic: "Normalità",
    q: "Per verificare se un campione proviene da una popolazione normale si può usare:",
    opts: [
      "Il coefficiente di correlazione di Pearson",
      "Un test t per due campioni indipendenti",
      "Un test di normalità (es. Shapiro-Wilk) o un grafico Q-Q"
    ],
    correct: [2],
    exp: "La normalità si valuta con test dedicati (Shapiro-Wilk, Kolmogorov-Smirnov) o graficamente con il Q-Q plot, che confronta i quantili dei dati con quelli teorici della normale."
  },
  {
    id: "u07049", topic: "ANOVA",
    q: "Nell'ANOVA, un valore F elevato (p piccolo) indica che:",
    opts: [
      "La variabilità TRA i gruppi è grande rispetto a quella DENTRO i gruppi",
      "Tutti i gruppi hanno esattamente la stessa media",
      "Il campione è troppo piccolo per concludere"
    ],
    correct: [0],
    exp: "La statistica F confronta la varianza tra gruppi con quella entro i gruppi. F grande → le differenze tra le medie dei gruppi superano il rumore interno → si rifiuta l'ipotesi di medie tutte uguali."
  },
  {
    id: "u07050", topic: "Bontà di adattamento",
    q: "Il test chi-quadro di 'bontà di adattamento' (goodness of fit) verifica se:",
    opts: [
      "Due medie campionarie sono uguali tra loro",
      "Una distribuzione osservata è compatibile con una distribuzione teorica attesa",
      "Esiste correlazione lineare tra due variabili numeriche"
    ],
    correct: [1],
    exp: "Il goodness of fit confronta le frequenze osservate con quelle previste da una distribuzione teorica (es. uniforme, o proporzioni attese) per stabilire se i dati vi si adattano."
  },
  {
    id: "u07051", topic: "p-value",
    q: "Un p-value maggiore di α porta a:",
    opts: [
      "Concludere che l'ipotesi alternativa è vera",
      "Rifiutare l'ipotesi nulla con certezza",
      "Non rifiutare l'ipotesi nulla"
    ],
    correct: [2],
    exp: "Se p > α l'evidenza contro H0 è insufficiente: non si rifiuta H0. Non significa dimostrarla vera, ma solo che i dati sono compatibili con essa."
  },
  {
    id: "u07052", topic: "Errori",
    q: "Abbassare la probabilità di un tipo di errore, a parità di dati, generalmente:",
    opts: [
      "Aumenta la probabilità dell'altro tipo di errore",
      "Riduce entrambi gli errori contemporaneamente",
      "Elimina del tutto l'incertezza del test"
    ],
    correct: [0],
    exp: "Esiste un trade-off tra errore di tipo I (α) e di tipo II (β): stringere uno tende ad allargare l'altro. L'unico modo per ridurli entrambi è aumentare la numerosità del campione."
  },
  {
    id: "u07053", topic: "Intervallo di confidenza",
    q: "A parità di confidenza, un campione più grande produce un intervallo:",
    opts: [
      "Più ampio, quindi una stima meno precisa",
      "Più stretto, quindi una stima più precisa",
      "Identico, l'ampiezza non dipende da n"
    ],
    correct: [1],
    exp: "Più dati → errore standard minore → intervallo più stretto → stima più precisa. La numerosità è la leva principale per ottenere intervalli di confidenza più informativi."
  },
  {
    id: "u07054", topic: "Regressione",
    q: "Usare un modello lineare per prevedere valori di X molto fuori dal range dei dati osservati è:",
    opts: [
      "Impossibile, la formula non si può calcolare",
      "Sempre sicuro, perché la retta è definita ovunque",
      "Rischioso: è un'estrapolazione fuori dall'intervallo osservato"
    ],
    correct: [2],
    exp: "L'estrapolazione oltre l'intervallo dei dati è rischiosa: la relazione lineare potrebbe non reggere fuori dal range osservato. Le previsioni affidabili sono all'interno del range dei dati (interpolazione)."
  },
  {
    id: "u07055", topic: "Media campionaria",
    q: "La media campionaria è uno stimatore corretto della media della popolazione perché:",
    opts: [
      "Il suo valore atteso coincide con la media della popolazione",
      "Restituisce sempre esattamente la media della popolazione",
      "È uguale alla mediana in ogni campione"
    ],
    correct: [0],
    exp: "La media campionaria è non distorta: mediando su tutti i campioni possibili si ottiene la media della popolazione. In un singolo campione può differire, ma 'in media' è corretta."
  },
  {
    id: "u07056", topic: "Confronto medie",
    q: "Per confrontare le medie di 4 diversi gruppi, il test più appropriato è:",
    opts: [
      "Un singolo test t di Student",
      "L'ANOVA a una via",
      "Il test chi-quadro di indipendenza"
    ],
    correct: [1],
    exp: "Con più di due gruppi si usa l'ANOVA, che verifica in un colpo solo se almeno una media differisce, evitando l'inflazione dell'errore dei confronti multipli con tanti t-test."
  },
  {
    id: "u07057", topic: "Chi-quadro",
    q: "Il test chi-quadro si applica a:",
    opts: [
      "Coefficienti angolari di una regressione",
      "Medie di variabili quantitative continue",
      "Dati di frequenza (conteggi) di variabili categoriche"
    ],
    correct: [2],
    exp: "Il χ² lavora su CONTEGGI/frequenze di categorie (tabelle di contingenza), non su medie. Per confrontare medie servono t-test o ANOVA."
  },
  {
    id: "u07058", topic: "Significatività",
    q: "La 'dimensione dell'effetto' (effect size) misura:",
    opts: [
      "L'entità pratica di un effetto, indipendente da n",
      "La probabilità che H0 sia vera",
      "Il livello di significatività scelto"
    ],
    correct: [0],
    exp: "L'effect size (es. d di Cohen) quantifica QUANTO è grande un effetto, non solo se è statisticamente rilevabile. Va riportato insieme al p-value per giudicare l'importanza reale di un risultato."
  },
  {
    id: "u07059", topic: "Test d'ipotesi",
    q: "L'ordine corretto dei passi di un test d'ipotesi è:",
    opts: [
      "Guardare i dati, poi scegliere l'ipotesi che risulta significativa",
      "Formulare H0 e H1, scegliere α, calcolare la statistica/p-value, decidere",
      "Calcolare il p-value, poi formulare le ipotesi in base ad esso"
    ],
    correct: [1],
    exp: "Il metodo corretto: (1) ipotesi H0/H1, (2) livello α, (3) calcolo statistica test e p-value, (4) decisione. Fissare ipotesi e α PRIMA dei dati evita p-hacking e conclusioni distorte."
  },
  {
    id: "u07060", topic: "Regressione",
    q: "L'intercetta 'a' nel modello Y = a + bX rappresenta:",
    opts: [
      "La media dei residui del modello",
      "La variazione di Y per ogni unità di X",
      "Il valore previsto di Y quando X è uguale a zero"
    ],
    correct: [2],
    exp: "L'intercetta è il valore di Y quando X=0. A volte non ha senso interpretativo (se X=0 è fuori dal dominio reale), ma è comunque necessaria a definire la retta."
  },
  {
    id: "u07061", topic: "Potenza",
    q: "Quale fattore AUMENTA la potenza di un test?",
    opts: [
      "Un campione più numeroso",
      "Un livello di significatività α più severo",
      "Una maggiore variabilità dei dati"
    ],
    correct: [0],
    exp: "La potenza (1−β) cresce con un campione più grande e con un effetto reale più marcato. Un α più severo e una maggiore variabilità dei dati la RIDUCONO, rendendo più difficile rilevare un effetto."
  },
  {
    id: "u07062", topic: "Inferenza",
    q: "L'obiettivo dell'inferenza statistica è:",
    opts: [
      "Descrivere solo i dati del campione senza generalizzare",
      "Trarre conclusioni sulla popolazione a partire da un campione",
      "Ordinare i dati dal più piccolo al più grande"
    ],
    correct: [1],
    exp: "L'inferenza generalizza dal campione alla popolazione (stime, test, intervalli), quantificando l'incertezza. La sola descrizione dei dati campionari è invece compito della statistica descrittiva."
  },
  {
    id: "u07063", topic: "t-test",
    q: "Con un campione molto grande, la distribuzione t:",
    opts: [
      "Si allontana sempre più dalla normale",
      "Diventa fortemente asimmetrica",
      "Tende a coincidere con la normale standard"
    ],
    correct: [2],
    exp: "All'aumentare dei gradi di libertà (campioni grandi) la t si avvicina alla normale standard: le code si 'alleggeriscono'. Per questo con n grande t-test e z-test danno risultati quasi identici."
  },
  {
    id: "u07064", topic: "Ipotesi nulla",
    q: "In un test sull'efficacia di un nuovo farmaco, l'ipotesi nulla tipica è:",
    opts: [
      "Il farmaco non ha alcun effetto rispetto al controllo",
      "Il farmaco è sicuramente più efficace del controllo",
      "Il campione è stato scelto in modo distorto"
    ],
    correct: [0],
    exp: "H0 è lo scenario 'nessun effetto' (il farmaco non fa differenza). Il test cerca prove per rifiutarla a favore di H1 ('il farmaco funziona'). Si parte sempre dallo scetticismo."
  },
  {
    id: "u07065", topic: "Residui",
    q: "Se i residui di una regressione mostrano uno schema evidente (non casuale), significa che:",
    opts: [
      "Il modello è perfetto e non va modificato",
      "Il modello lineare non cattura bene la relazione",
      "I dati sono stati raccolti in modo casuale"
    ],
    correct: [1],
    exp: "Idealmente i residui dovrebbero essere casuali attorno a zero. Uno schema (es. a curva) indica che la relazione non è lineare o mancano variabili: il modello va rivisto."
  },
  {
    id: "u07066", topic: "Confidenza",
    q: "Un intervallo di confidenza al 99% rispetto a uno al 95%, a parità di dati, è:",
    opts: [
      "Sempre centrato su un valore più alto",
      "Più stretto, perché più preciso",
      "Più ampio: serve più sicurezza di contenere il parametro"
    ],
    correct: [2],
    exp: "Più confidenza (99% vs 95%) → intervallo più largo, per essere più 'sicuri' di catturare il parametro. C'è un compromesso tra confidenza e precisione."
  },
  {
    id: "u07067", topic: "Test",
    q: "La 'statistica test' e il 'valore critico' servono a:",
    opts: [
      "Confrontare il risultato con una soglia per decidere su H0",
      "Calcolare la media della popolazione",
      "Misurare la correlazione tra due variabili"
    ],
    correct: [0],
    exp: "Si confronta la statistica test con il valore critico (soglia legata ad α): se la supera si cade nella regione di rifiuto e si rifiuta H0. È l'approccio equivalente al confronto p-value vs α."
  },
  {
    id: "u07068", topic: "Campionamento",
    q: "Un campione non rappresentativo produce:",
    opts: [
      "Sempre stime perfette del parametro",
      "Stime distorte che non riflettono la vera popolazione",
      "Un p-value automaticamente uguale a zero"
    ],
    correct: [1],
    exp: "Se il campione è distorto (non rappresentativo), tutte le inferenze sono viziate: nessun calcolo statistico può correggere un campionamento sbagliato. La qualità del campione è cruciale."
  },
  {
    id: "u07069", topic: "Regressione logistica",
    q: "La regressione logistica si usa quando la variabile dipendente è:",
    opts: [
      "Una data del calendario",
      "Sempre normalmente distribuita",
      "Categorica binaria"
    ],
    correct: [2],
    exp: "La regressione logistica modella la probabilità di un esito binario (0/1) in funzione dei predittori, restituendo valori tra 0 e 1. La lineare classica è invece per una Y continua."
  },
  {
    id: "u07070", topic: "Multicollinearità",
    q: "La multicollinearità in una regressione multipla si verifica quando:",
    opts: [
      "Due o più variabili indipendenti molto correlate tra loro",
      "Il campione è troppo piccolo per il modello",
      "I residui sono perfettamente casuali"
    ],
    correct: [0],
    exp: "La multicollinearità (predittori molto correlati tra loro) rende instabili e poco interpretabili i coefficienti: piccoli cambiamenti nei dati li fanno oscillare molto. Va individuata e ridotta."
  },
  {
    id: "u07071", topic: "p-value",
    q: "Se ripeto lo stesso test su 20 variabili indipendenti con α=0,05 e tutte le H0 sono vere, quante 'significatività' mi aspetto in media per caso?",
    opts: [
      "Zero, perché le H0 sono vere",
      "Circa 1 falso positivo su 20 test",
      "Tutte e 20 risulteranno significative"
    ],
    correct: [1],
    exp: "Con α=0,05, il 5% dei test darà un falso positivo anche se tutte le H0 sono vere: su 20 test, in media 1. È il problema dei confronti multipli, che richiede correzioni (es. Bonferroni)."
  },
  {
    id: "u07072", topic: "Correzione confronti multipli",
    q: "La correzione di Bonferroni serve a:",
    opts: [
      "Trasformare dati non normali in normali",
      "Aumentare la potenza di un singolo test",
      "Controllare l'errore di primo tipo su molti test insieme"
    ],
    correct: [2],
    exp: "Con test multipli, Bonferroni abbassa la soglia di significatività (α diviso il numero di test) per mantenere basso il rischio complessivo di falsi positivi. È conservativa: riduce anche la potenza."
  },
  {
    id: "u07073", topic: "Inferenza bayesiana",
    q: "A differenza dell'approccio frequentista, la statistica bayesiana:",
    opts: [
      "Assegna probabilità alle ipotesi, aggiornandole coi dati",
      "Non usa mai i dati per trarre conclusioni",
      "Coincide esattamente con il calcolo del p-value"
    ],
    correct: [0],
    exp: "L'approccio bayesiano tratta i parametri/ipotesi come variabili con una probabilità a priori, aggiornata in probabilità a posteriori tramite i dati (teorema di Bayes). Il frequentista non assegna probabilità alle ipotesi."
  },
  {
    id: "u07074", topic: "Test d'ipotesi",
    q: "Un test 'non significativo' su un campione piccolo dimostra che non c'è alcun effetto?",
    opts: [
      "Sì, dimostra con certezza l'assenza di effetto",
      "No: potrebbe esserci un effetto reale non rilevato per scarsa potenza",
      "No, perché i campioni piccoli danno sempre risultati significativi"
    ],
    correct: [1],
    exp: "Un campione piccolo ha bassa potenza: può non rilevare un effetto reale (falso negativo). 'Non significativo' non equivale a 'nessun effetto': serve un campione adeguato per concludere."
  },
  {
    id: "u07075", topic: "Regressione",
    q: "Il valore previsto Y-cappello (ŷ) in un punto è:",
    opts: [
      "La differenza tra osservato e previsto",
      "Il valore realmente osservato di Y",
      "Il valore stimato dal modello per una data X"
    ],
    correct: [2],
    exp: "ŷ è la previsione del modello (sulla retta) per un certo X. La differenza tra il valore osservato e ŷ è il residuo, che misura l'errore del modello in quel punto."
  },
  {
    id: "u07076", topic: "Assunzioni regressione",
    q: "Quale di queste è un'assunzione della regressione lineare?",
    opts: [
      "Residui con varianza costante (omoschedasticità)",
      "La variabile dipendente deve essere categorica",
      "Le variabili indipendenti devono essere molto correlate"
    ],
    correct: [0],
    exp: "La regressione lineare assume linearità, residui indipendenti, normali e a varianza costante (omoschedasticità). Una dipendente categorica richiede altri modelli; forte correlazione tra le indipendenti è multicollinearità, un problema da evitare."
  },
  {
    id: "u07077", topic: "Significatività dei coefficienti",
    q: "Nel test sui coefficienti di regressione, un coefficiente 'non significativo' indica che:",
    opts: [
      "La variabile influenza sicuramente e fortemente Y",
      "Non c'è prova sufficiente che quella variabile influenzi Y",
      "Il coefficiente è esattamente uguale a 1"
    ],
    correct: [1],
    exp: "Un coefficiente non significativo (p alto) significa che i dati non forniscono prove che quel predittore abbia effetto su Y, tenuto conto degli altri. Potrebbe comunque contare in altri modelli o con più dati."
  },
  {
    id: "u07078", topic: "Distribuzione normale",
    q: "Nell'inferenza, il teorema del limite centrale è importante perché:",
    opts: [
      "Garantisce che il p-value sia sempre piccolo",
      "Rende tutti i dati grezzi perfettamente normali",
      "Rende la media campionaria normale anche con dati non normali"
    ],
    correct: [2],
    exp: "Grazie al TLC, per campioni sufficientemente grandi la distribuzione della media è approssimativamente normale a prescindere dalla forma dei dati: questo giustifica l'uso di z/t-test in molte situazioni."
  },
  {
    id: "u07079", topic: "Ipotesi",
    q: "Se H1 afferma 'μ > 100', il test è:",
    opts: [
      "Unilaterale destro (a una coda, verso valori alti)",
      "Unilaterale sinistro (verso valori bassi)",
      "Non è un test valido"
    ],
    correct: [0],
    exp: "'μ > 100' indica interesse solo per scostamenti verso l'alto: test unilaterale destro, con la regione di rifiuto nella coda destra. H0 sarebbe 'μ ≤ 100' (o μ = 100)."
  },
  {
    id: "u07080", topic: "Varianza campionaria",
    q: "Nella varianza campionaria si divide per n − 1 (invece che per n) per:",
    opts: [
      "Aumentare artificialmente il risultato",
      "Ottenere uno stimatore corretto della varianza della popolazione",
      "Trasformare la varianza in deviazione standard"
    ],
    correct: [1],
    exp: "Dividere per n−1 (correzione di Bessel) compensa la sottostima che si avrebbe usando la media campionaria: rende la varianza campionaria uno stimatore non distorto di quella della popolazione."
  },
  {
    id: "u07081", topic: "Test",
    q: "Un p-value esattamente uguale a 0 è:",
    opts: [
      "Uguale al livello di significatività α",
      "Segno che il test è stato sbagliato",
      "Quasi impossibile: molto piccolo ma non esattamente zero"
    ],
    correct: [2],
    exp: "Il p-value può essere piccolissimo (es. 0,0001) ma raramente esattamente 0; spesso il software lo riporta come 'p < 0,001'. Un valore così basso indica fortissima evidenza contro H0."
  },
  {
    id: "u07082", topic: "Confronto proporzioni",
    q: "Per confrontare la proporzione di 'successi' tra due gruppi (es. tasso di conversione A vs B) si usa:",
    opts: [
      "Un test per il confronto tra due proporzioni",
      "Una regressione lineare semplice",
      "Il coefficiente di correlazione di Pearson"
    ],
    correct: [0],
    exp: "Per due proporzioni si usa un test z per proporzioni o, equivalentemente, il chi-quadro su una tabella 2x2. È il caso tipico dell'A/B testing."
  },
  {
    id: "u07083", topic: "Livello di significatività",
    q: "Chi sceglie il valore di α e quando?",
    opts: [
      "Si ricava dai dati una volta calcolato il p-value",
      "Il ricercatore, PRIMA di analizzare i dati",
      "È sempre e comunque fissato per legge a 0,05"
    ],
    correct: [1],
    exp: "α è deciso a priori dal ricercatore in base al contesto (0,05 è comune, ma in ambito medico può essere 0,01). Sceglierlo dopo aver visto i dati invaliderebbe il test."
  },
  {
    id: "u07084", topic: "Regressione",
    q: "Una relazione con correlazione r = 0 tra X e Y implica che una regressione lineare:",
    opts: [
      "Avrà sicuramente R² alto nonostante correlazione nulla",
      "La regressione non può essere calcolata se r è circa zero",
      "Avrà pendenza vicina a zero, ma potrebbe esistere una relazione non lineare"
    ],
    correct: [2],
    exp: "r=0 → pendenza della retta ≈ 0 e R² ≈ 0 (la lineare non spiega nulla). Ma X e Y potrebbero avere una relazione non lineare (es. parabolica) che la regressione lineare non coglie."
  },
  {
    id: "u07085", topic: "Campione e popolazione",
    q: "Il parametro è alla popolazione come la statistica è al:",
    opts: [
      "Campione",
      "Grafico",
      "Residuo"
    ],
    correct: [0],
    exp: "Il parametro (es. μ, σ) descrive la popolazione ed è ignoto; la statistica (es. media campionaria) è calcolata sul campione e stima il parametro. L'inferenza usa la seconda per dire qualcosa sul primo."
  },
  {
    id: "u07086", topic: "Interpretazione",
    q: "'la differenza è significativa' vuol dire che è grande?",
    opts: [
      "Sì, significativo vuol sempre dire grande",
      "No: solo difficilmente attribuibile al caso, non grande",
      "No, significa che la differenza è nulla"
    ],
    correct: [1],
    exp: "'Significativo' è un termine tecnico: la differenza è improbabile sotto H0 (poco spiegabile dal caso). L'entità è misurata dalla dimensione dell'effetto, non dalla significatività."
  },
  {
    id: "u07087", topic: "Test di normalità",
    q: "In un grafico Q-Q, se i punti seguono bene la retta diagonale, i dati:",
    opts: [
      "Non hanno alcuna distribuzione",
      "Contengono solo valori anomali",
      "Sono approssimativamente distribuiti in modo normale"
    ],
    correct: [2],
    exp: "Il Q-Q plot confronta i quantili dei dati con quelli della normale: se i punti stanno vicino alla diagonale, i dati sono compatibili con la normalità. Deviazioni sistematiche indicano non normalità."
  },
  {
    id: "u07088", topic: "ANOVA post-hoc",
    q: "Dopo un'ANOVA significativa, i test post-hoc (es. Tukey) servono a:",
    opts: [
      "Individuare QUALI gruppi differiscono tra loro nello specifico",
      "Confermare che tutti i gruppi sono uguali",
      "Calcolare la media generale di tutti i gruppi"
    ],
    correct: [0],
    exp: "L'ANOVA dice solo che ALMENO un gruppo differisce, non quale. I test post-hoc confrontano le coppie di gruppi controllando l'errore complessivo, individuando dove stanno le differenze."
  },
  {
    id: "u07089", topic: "Errore standard vs deviazione standard",
    q: "Nel riportare un risultato, l'errore standard è tipicamente:",
    opts: [
      "Più grande della deviazione standard",
      "Più piccolo della deviazione standard",
      "Identico alla deviazione standard"
    ],
    correct: [1],
    exp: "Errore standard = SD/√n, quindi è più piccolo della deviazione standard (che descrive la dispersione dei dati). Attenzione a non confonderli quando si leggono grafici e tabelle."
  },
  {
    id: "u07090", topic: "Modelli",
    q: "Il principio di parsimonia (rasoio di Occam) nella modellazione suggerisce di:",
    opts: [
      "Scegliere il modello con R² più alto a ogni costo",
      "Aggiungere sempre il maggior numero possibile di variabili",
      "Preferire, a parità di prestazioni, il modello più semplice"
    ],
    correct: [2],
    exp: "A parità di capacità esplicativa, il modello più semplice è preferibile: generalizza meglio, è più interpretabile e meno soggetto a overfitting. Complessità in più va giustificata da un guadagno reale."
  },
  {
    id: "u07091", topic: "Ipotesi",
    q: "H0 e H1 devono essere:",
    opts: [
      "Mutuamente esclusive ed esaustive",
      "Entrambe potenzialmente vere contemporaneamente",
      "Formulate dopo aver calcolato il p-value"
    ],
    correct: [0],
    exp: "H0 e H1 sono complementari: non possono essere vere insieme e coprono tutte le possibilità (es. μ=100 vs μ≠100). Il test decide quale sia più compatibile con i dati."
  },
  {
    id: "u07092", topic: "Predizione vs inferenza",
    q: "Qual è la differenza tra obiettivo predittivo e obiettivo inferenziale di un modello?",
    opts: [
      "La predizione non usa i dati, l'inferenza sì",
      "La predizione mira a valori accurati; l'inferenza alle relazioni",
      "L'inferenza serve solo per i grafici"
    ],
    correct: [1],
    exp: "Un modello predittivo punta a prevedere bene nuovi casi (accuratezza), anche se poco interpretabile. Un modello inferenziale punta a spiegare le relazioni tra variabili (coefficienti, significatività)."
  },
  {
    id: "u07093", topic: "Outlier in regressione",
    q: "Un punto molto influente (leverage alto) in una regressione:",
    opts: [
      "Coincide sempre con la media dei dati",
      "È sempre da mantenere senza verifiche",
      "Può spostare in modo marcato la retta stimata da solo"
    ],
    correct: [2],
    exp: "Un'osservazione influente (valore estremo di X e/o residuo grande) può 'tirare' la retta e distorcere le stime. Va individuata (es. distanza di Cook) e valutata con attenzione."
  },
  {
    id: "u07094", topic: "Test statistici",
    q: "Un test 'robusto' è un test che:",
    opts: [
      "Regge bene anche se le assunzioni sono lievemente violate",
      "Non richiede alcun dato per funzionare",
      "Dà sempre risultato significativo"
    ],
    correct: [0],
    exp: "La robustezza è la capacità di un test di dare risultati validi anche con moderate violazioni delle assunzioni (es. lieve non normalità). Alcuni test sono più robusti di altri a certe deviazioni."
  },
  {
    id: "u07095", topic: "Confidenza",
    q: "Dopo aver calcolato un IC al 95%, si può dire che il parametro ha il 95% di probabilità di stare nell'intervallo?",
    opts: [
      "Sì, è esattamente questo il significato",
      "No: per i frequentisti il parametro è fisso, l'intervallo aleatorio",
      "No, perché gli IC non riguardano i parametri"
    ],
    correct: [1],
    exp: "Per un frequentista il parametro è una costante ignota: un singolo intervallo lo contiene o no. Il '95%' riguarda il metodo su campioni ripetuti, non la probabilità del singolo intervallo."
  },
  {
    id: "u07096", topic: "Regressione",
    q: "Se aggiungendo una variabile R² aumenta ma R² aggiustato diminuisce, la variabile:",
    opts: [
      "Rende il modello perfetto",
      "È sicuramente la più importante del modello",
      "Probabilmente non aggiunge valore reale al modello"
    ],
    correct: [2],
    exp: "L'R² aggiustato penalizza le variabili inutili. Se sale R² ma scende l'aggiustato, il guadagno è solo apparente (adattamento al rumore): la variabile probabilmente non serve."
  },
  {
    id: "u07097", topic: "Test d'ipotesi",
    q: "Il valore di α = 0,01 rispetto ad α = 0,05 rende il test:",
    opts: [
      "Più conservativo: meno falsi positivi",
      "Più permissivo: più facile rifiutare H0",
      "Privo di regione di rifiuto"
    ],
    correct: [0],
    exp: "α più basso (0,01) richiede prove più forti per rifiutare H0: riduce i falsi positivi (errore di tipo I) ma aumenta i falsi negativi (errore di tipo II), quindi serve più evidenza."
  },
  {
    id: "u07098", topic: "Correlazione spuria",
    q: "Una correlazione spuria è:",
    opts: [
      "Una correlazione pari esattamente a 1",
      "Un'associazione statistica senza reale legame causale",
      "Una correlazione calcolata su dati mancanti"
    ],
    correct: [1],
    exp: "Una correlazione spuria appare tra due variabili che in realtà non si influenzano, spesso perché entrambe dipendono da un fattore comune (confondente) o per pura coincidenza sui dati."
  },
  {
    id: "u07099", topic: "Modelli statistici",
    q: "Un modello statistico è, in sintesi:",
    opts: [
      "Un elenco grezzo di tutti i dati raccolti",
      "Una copia esatta e completa della realtà osservata",
      "Una rappresentazione semplificata della realtà, con parametri"
    ],
    correct: [2],
    exp: "Un modello è una semplificazione utile ('tutti i modelli sono sbagliati, alcuni sono utili'): descrive la relazione tra variabili tramite parametri, con assunzioni che vanno verificate."
  },
  {
    id: "u07100", topic: "Inferenza",
    q: "Aumentando all'infinito la dimensione del campione, il p-value di un effetto anche minimo ma reale:",
    opts: [
      "Diventa molto piccolo, rendendo l'effetto significativo",
      "Tende inevitabilmente a 1",
      "Non può mai scendere sotto 0,05"
    ],
    correct: [0],
    exp: "Con n enorme quasi ogni effetto non nullo diventa statisticamente significativo, anche se praticamente irrilevante. Ecco perché con grandi dati la dimensione dell'effetto conta più del p-value."
  },
  // === AGGIUNGI NUOVE DOMANDE MODELLI STATISTICI QUI ===
]);
