/* ============================================================
   MATERIA: Statistica  (UFS06 - Fondamenti di Probabilità e Statistica)
   100 domande a risposta multipla, bilanciate e "a trabocchetto".
   { id, topic, q, opts:[...], correct:[indici], exp }
   ============================================================ */
registerSubject("Statistica", [
  {
    id: "u06001", topic: "Media",
    q: "La media aritmetica di un insieme di dati si calcola:",
    opts: [
      "Sottraendo il valore minimo da quello massimo dei dati",
      "Prendendo il valore che si trova esattamente al centro dei dati ordinati",
      "Sommando tutti i valori e dividendo per il numero di valori"
    ],
    correct: [2],
    exp: "La media aritmetica è la somma dei valori divisa per il loro numero. Il valore centrale è la mediana, quello più frequente è la moda, la differenza max-min è il campo di variazione."
  },
  {
    id: "u06002", topic: "Mediana",
    q: "La mediana di una serie di dati è:",
    opts: [
      "Il valore centrale dei dati una volta ordinati in ordine crescente",
      "Il valore che nella distribuzione ha la frequenza maggiore",
      "La media tra il valore più piccolo e quello più grande della serie"
    ],
    correct: [0],
    exp: "La mediana è il valore che occupa la posizione centrale nei dati ORDINATI (con n pari è la media dei due centrali). Non va confusa con media (somma/numero) o moda (valore più frequente)."
  },
  {
    id: "u06003", topic: "Media vs mediana",
    q: "In presenza di forti valori anomali (outlier), quale indice è più robusto e meno influenzato?",
    opts: [
      "La media, perché tiene conto di tutti i valori compresi quelli estremi",
      "La mediana, perché dipende dalla posizione centrale e non dai valori estremi",
      "Il campo di variazione, perché misura l'ampiezza totale dei dati"
    ],
    correct: [1],
    exp: "La media risente molto degli outlier (un valore enorme la trascina). La mediana, basandosi sulla posizione, resta stabile: per questo è preferita con distribuzioni asimmetriche, es. i redditi."
  },
  {
    id: "u06004", topic: "Moda",
    q: "Che cos'è la moda di una distribuzione?",
    opts: [
      "La radice quadrata della varianza calcolata sui dati",
      "Il valore che divide esattamente a metà i dati ordinati in due parti",
      "Il valore che si presenta con la frequenza più elevata"
    ],
    correct: [2],
    exp: "La moda è il valore più frequente. Una distribuzione può essere unimodale, bimodale o plurimodale (più mode) e in alcuni casi non avere moda se tutti i valori compaiono una sola volta."
  },
  {
    id: "u06005", topic: "Media",
    q: "Aggiungendo a un campione un nuovo dato pari esattamente alla media attuale, la media:",
    opts: [
      "Resta invariata, perché il nuovo valore coincide con la media stessa",
      "Aumenta, perché cresce il numero di osservazioni del campione",
      "Diventa uguale alla mediana del nuovo insieme di dati"
    ],
    correct: [0],
    exp: "Se il nuovo valore è uguale alla media, il rapporto somma/numero non cambia: la media resta identica. Aumenta solo la numerosità, ma il baricentro dei dati non si sposta."
  },
  {
    id: "u06006", topic: "Indici di posizione",
    q: "Quale di questi è un indice di posizione (tendenza centrale)?",
    opts: [
      "La deviazione standard",
      "La media aritmetica",
      "Il campo di variazione (range)"
    ],
    correct: [1],
    exp: "Media, mediana e moda sono indici di POSIZIONE (descrivono il centro della distribuzione). La deviazione standard e il campo di variazione misurano invece la DISPERSIONE dei dati."
  },
  {
    id: "u06007", topic: "Varianza",
    q: "La varianza misura:",
    opts: [
      "La differenza tra il valore massimo e il valore minimo osservati nella serie di dati",
      "La frequenza con cui compare il valore più comune all'interno della serie di dati",
      "Quanto i dati si disperdono attorno alla media, come media dei quadrati degli scarti"
    ],
    correct: [2],
    exp: "La varianza è la media dei quadrati degli scarti dalla media: quantifica la dispersione. Più è alta, più i dati sono 'sparpagliati'. Si eleva al quadrato per evitare che scarti positivi e negativi si annullino."
  },
  {
    id: "u06008", topic: "Deviazione standard",
    q: "Qual è la relazione tra deviazione standard e varianza?",
    opts: [
      "La deviazione standard è la radice quadrata della varianza",
      "La deviazione standard è il quadrato della varianza",
      "La deviazione standard è la varianza divisa per il numero di dati"
    ],
    correct: [0],
    exp: "La deviazione standard è la radice quadrata della varianza. Il vantaggio è che è espressa nella STESSA unità di misura dei dati (la varianza è in unità al quadrato), quindi più interpretabile."
  },
  {
    id: "u06009", topic: "Deviazione standard",
    q: "Se tutti i valori di un insieme sono identici tra loro, la deviazione standard vale:",
    opts: [
      "1, perché è il valore minimo che la deviazione standard può assumere",
      "0, perché non c'è alcuna variabilità attorno alla media",
      "La media stessa dei valori considerati nell'insieme"
    ],
    correct: [1],
    exp: "Se i dati sono tutti uguali, ognuno coincide con la media: gli scarti sono nulli, quindi varianza e deviazione standard valgono 0. La deviazione standard non può mai essere negativa."
  },
  {
    id: "u06010", topic: "Campo di variazione",
    q: "Il campo di variazione (range) di una serie di dati è:",
    opts: [
      "Il rapporto tra la deviazione standard e la media dei dati",
      "Il valore centrale che divide i dati ordinati in due metà uguali",
      "La differenza tra il valore massimo e il valore minimo osservati"
    ],
    correct: [2],
    exp: "Il range è semplicemente max − min: la misura di dispersione più elementare. È molto sensibile agli outlier, perché dipende solo dai due valori estremi."
  },
  {
    id: "u06011", topic: "Coefficiente di variazione",
    q: "A cosa serve il coefficiente di variazione (deviazione standard / media)?",
    opts: [
      "A confrontare la variabilità di serie diverse",
      "A misurare la tendenza centrale di una distribuzione asimmetrica",
      "A calcolare la probabilità che un evento casuale si verifichi"
    ],
    correct: [0],
    exp: "Il coefficiente di variazione è una misura RELATIVA (adimensionale) di dispersione: rapportando la deviazione standard alla media permette di confrontare la variabilità di fenomeni diversi (es. altezze vs stipendi)."
  },
  {
    id: "u06012", topic: "Dispersione",
    q: "La varianza può assumere valori negativi?",
    opts: [
      "Sì, quando la maggior parte degli scarti dalla media è negativa",
      "No, perché è una media di quadrati e i quadrati non sono mai negativi",
      "Sì, ma solo se la media dei dati risulta essere negativa"
    ],
    correct: [1],
    exp: "La varianza è la media di scarti ELEVATI AL QUADRATO: i quadrati sono sempre ≥ 0, quindi la varianza è sempre ≥ 0. Vale 0 solo se tutti i dati sono uguali."
  },
  {
    id: "u06013", topic: "Frequenze",
    q: "La frequenza relativa di una modalità è:",
    opts: [
      "La differenza tra la frequenza più alta e quella più bassa osservate nei dati",
      "Il numero di volte in cui quella specifica modalità compare all'interno dei dati",
      "Il rapporto tra la frequenza assoluta e il numero totale di osservazioni"
    ],
    correct: [2],
    exp: "La frequenza relativa = frequenza assoluta / totale (compresa tra 0 e 1, o in %). La frequenza assoluta è il semplice conteggio; la somma progressiva è la frequenza cumulata."
  },
  {
    id: "u06014", topic: "Frequenze",
    q: "La frequenza cumulata fino a una certa modalità rappresenta:",
    opts: [
      "La somma delle frequenze di quella modalità e di tutte le precedenti",
      "Solo il conteggio delle osservazioni di quella singola modalità",
      "La media delle frequenze di tutte le modalità osservate"
    ],
    correct: [0],
    exp: "La frequenza cumulata somma progressivamente le frequenze (assolute o relative) fino a una data modalità. La cumulata dell'ultima modalità è pari al totale (o a 1 se relativa)."
  },
  {
    id: "u06015", topic: "Grafici",
    q: "Qual è la differenza principale tra un istogramma e un diagramma a barre?",
    opts: [
      "Il diagramma a barre si usa solo per i dati continui suddivisi in classi di frequenza",
      "L'istogramma è per dati continui in classi; le barre per categorie",
      "L'istogramma può rappresentare al massimo due categorie di dati per volta, non di più"
    ],
    correct: [1],
    exp: "L'istogramma è per variabili quantitative continue divise in classi: le barre sono attaccate perché l'asse è una scala continua. Il diagramma a barre è per categorie distinte, con barre separate."
  },
  {
    id: "u06016", topic: "Boxplot",
    q: "In un boxplot, la linea interna alla scatola rappresenta:",
    opts: [
      "Il valore massimo osservato",
      "La media aritmetica dei dati",
      "La mediana della distribuzione"
    ],
    correct: [2],
    exp: "Nel boxplot la scatola va dal primo al terzo quartile e la linea interna è la MEDIANA. I 'baffi' si estendono verso i valori estremi (entro 1,5×IQR); oltre ci sono gli outlier."
  },
  {
    id: "u06017", topic: "Boxplot",
    q: "I bordi della scatola (box) di un boxplot corrispondono a:",
    opts: [
      "Il primo quartile e il terzo quartile",
      "La media più e meno una deviazione standard",
      "Il decimo e il novantesimo percentile"
    ],
    correct: [0],
    exp: "La scatola va da Q1 (25° percentile) a Q3 (75° percentile): la sua altezza è lo scarto interquartile (IQR = Q3 − Q1), che contiene il 50% centrale dei dati."
  },
  {
    id: "u06018", topic: "Percentili",
    q: "Il 25° percentile di una distribuzione:",
    opts: [
      "È il valore che compare nel 25% dei casi come modalità",
      "È il valore sotto il quale si trova il 25% delle osservazioni",
      "Corrisponde a un quarto del valore massimo"
    ],
    correct: [1],
    exp: "Il p-esimo percentile è il valore sotto cui cade il p% delle osservazioni. Il 25° percentile coincide con il primo quartile Q1; il 50° con la mediana; il 75° con Q3."
  },
  {
    id: "u06019", topic: "Quartili",
    q: "Lo scarto interquartile (IQR) è definito come:",
    opts: [
      "La somma del primo e del terzo quartile diviso due",
      "La differenza tra il valore massimo e il valore minimo",
      "La differenza tra il terzo e il primo quartile"
    ],
    correct: [2],
    exp: "IQR = Q3 − Q1 misura la dispersione del 50% centrale dei dati ed è robusto agli outlier. Si usa nel boxplot per individuare i valori anomali (oltre 1,5×IQR dai quartili)."
  },
  {
    id: "u06020", topic: "Quartili",
    q: "La mediana coincide con:",
    opts: [
      "Il secondo quartile (Q2), cioè il 50° percentile",
      "Il primo quartile (Q1), cioè il 25° percentile",
      "Il terzo quartile (Q3), cioè il 75° percentile"
    ],
    correct: [0],
    exp: "La mediana è il secondo quartile (Q2) e il 50° percentile: divide i dati a metà. Coincide con la media solo in distribuzioni perfettamente simmetriche, non in generale."
  },
  {
    id: "u06021", topic: "Probabilità",
    q: "Secondo la definizione classica, la probabilità di un evento è:",
    opts: [
      "Il numero di volte in cui l'evento si è verificato in passato",
      "Il rapporto tra i casi favorevoli e i casi possibili, se equiprobabili",
      "La somma dei casi favorevoli e dei casi possibili dell'esperimento"
    ],
    correct: [1],
    exp: "Definizione classica: P(E) = casi favorevoli / casi possibili, valida quando i casi sono equiprobabili. La probabilità è sempre compresa tra 0 e 1."
  },
  {
    id: "u06022", topic: "Probabilità",
    q: "Quale di questi valori NON può essere una probabilità?",
    opts: [
      "1",
      "0",
      "1,2"
    ],
    correct: [2],
    exp: "La probabilità è sempre compresa tra 0 e 1 (estremi inclusi). 1,2 è maggiore di 1, quindi impossibile. 0 (evento impossibile) e 1 (evento certo) sono invece ammessi."
  },
  {
    id: "u06023", topic: "Probabilità",
    q: "La probabilità dell'evento complementare P(non A) è pari a:",
    opts: [
      "1 − P(A)",
      "P(A) − 1",
      "1 / P(A)"
    ],
    correct: [0],
    exp: "L'evento complementare (A non si verifica) ha probabilità 1 − P(A), perché A e non-A coprono tutto lo spazio (somma 1). Utile quando è più facile calcolare la probabilità contraria."
  },
  {
    id: "u06024", topic: "Eventi incompatibili",
    q: "Due eventi si dicono incompatibili (mutuamente esclusivi) quando:",
    opts: [
      "Il verificarsi di uno non cambia la probabilità dell'altro",
      "Non possono verificarsi entrambi contemporaneamente: P = 0",
      "Hanno la stessa identica probabilità di verificarsi"
    ],
    correct: [1],
    exp: "Eventi incompatibili non possono accadere insieme: la loro intersezione è vuota, P(A∩B)=0. Attenzione: incompatibile NON significa indipendente (anzi, due eventi incompatibili con prob. positiva sono dipendenti)."
  },
  {
    id: "u06025", topic: "Eventi indipendenti",
    q: "Due eventi A e B sono indipendenti quando:",
    opts: [
      "La somma delle loro probabilità è uguale a 1",
      "Non possono mai verificarsi contemporaneamente nello stesso esperimento",
      "P = P × P: il verificarsi di uno non influenza l'altro"
    ],
    correct: [2],
    exp: "Per eventi indipendenti la probabilità congiunta è il prodotto: P(A∩B)=P(A)·P(B), e P(A|B)=P(A). Indipendenza riguarda l'influenza reciproca, cosa diversa dall'incompatibilità."
  },
  {
    id: "u06026", topic: "Somma di probabilità",
    q: "Per due eventi qualsiasi A e B, P(A o B) è uguale a:",
    opts: [
      "P(A) + P(B) − P(A e B)",
      "P(A) + P(B),",
      "P(A) × P(B) se sono incompatibili"
    ],
    correct: [0],
    exp: "Regola della somma: P(A∪B)=P(A)+P(B)−P(A∩B). Si sottrae l'intersezione per non contarla due volte. Solo se A e B sono incompatibili (P(A∩B)=0) diventa P(A)+P(B)."
  },
  {
    id: "u06027", topic: "Eventi incompatibili vs indipendenti",
    q: "'incompatibili' e 'indipendenti' sono sinonimi?",
    opts: [
      "Sì, indicano entrambi che gli eventi non si verificano mai insieme",
      "No: incompatibili non possono coesistere, indipendenti non si influenzano",
      "No: incompatibili significa che uno è il complementare dell'altro"
    ],
    correct: [1],
    exp: "Sono concetti diversi. Incompatibili: P(A∩B)=0 (non coesistono). Indipendenti: P(A∩B)=P(A)·P(B) (non si influenzano). Due eventi incompatibili con probabilità non nulle sono in realtà DIPENDENTI."
  },
  {
    id: "u06028", topic: "Probabilità condizionata",
    q: "La probabilità condizionata P(A|B) rappresenta:",
    opts: [
      "La probabilità che B si verifichi sapendo che A è avvenuto",
      "La probabilità che si verifichi almeno uno tra A e B",
      "La probabilità che si verifichi A sapendo che B si è verificato"
    ],
    correct: [2],
    exp: "P(A|B) è la probabilità di A DATO che B è avvenuto, e si calcola come P(A∩B)/P(B). Attenzione a non invertirla con P(B|A): sono in generale diverse."
  },
  {
    id: "u06029", topic: "Bayes",
    q: "P(A|B) e P(B|A) sono sempre uguali tra loro?",
    opts: [
      "No, in generale sono diverse",
      "Sì, ma solo quando i due eventi sono tra loro incompatibili",
      "No, ma la loro somma è pari esattamente a 1"
    ],
    correct: [0],
    exp: "P(A|B) ≠ P(B|A) in generale (è l'errore del 'condizionale invertito'). Il teorema di Bayes lega le due: P(A|B) = P(B|A)·P(A)/P(B). Sono uguali solo se P(A)=P(B)."
  },
  {
    id: "u06030", topic: "Bayes",
    q: "Il teorema di Bayes serve principalmente a:",
    opts: [
      "Calcolare la media di una distribuzione di probabilità continua",
      "Aggiornare la probabilità di un'ipotesi con nuove evidenze",
      "Verificare se due variabili numeriche sono tra loro correlate"
    ],
    correct: [1],
    exp: "Bayes 'inverte' il condizionamento e aggiorna una probabilità a priori in una a posteriori dopo aver osservato un'evidenza: P(ipotesi|dato)=P(dato|ipotesi)·P(ipotesi)/P(dato). Base di molti classificatori."
  },
  {
    id: "u06031", topic: "Probabilità congiunta",
    q: "Per due eventi indipendenti, la probabilità che si verifichino entrambi è:",
    opts: [
      "La più grande tra le due probabilità P(A) e P(B)",
      "La somma delle loro probabilità: P(A) + P(B)",
      "Il prodotto delle loro probabilità: P(A) × P(B)"
    ],
    correct: [2],
    exp: "Per eventi indipendenti P(A∩B)=P(A)·P(B). Es: due lanci di moneta, P(due teste)=0,5·0,5=0,25. Per eventi dipendenti serve invece P(A)·P(B|A)."
  },
  {
    id: "u06032", topic: "Variabili aleatorie",
    q: "Una variabile aleatoria si dice discreta quando:",
    opts: [
      "Può assumere un numero finito o numerabile di valori distinti",
      "Può assumere qualsiasi valore reale in un intervallo continuo",
      "Assume e solo valori compresi tra 0 e 1"
    ],
    correct: [0],
    exp: "Una variabile discreta assume valori 'separati' e numerabili (es. il numero di teste in 3 lanci). Una variabile continua può assumere infiniti valori in un intervallo (es. l'altezza)."
  },
  {
    id: "u06033", topic: "Distribuzione normale",
    q: "La distribuzione normale (gaussiana) ha forma:",
    opts: [
      "Uniforme, con tutti i valori ugualmente probabili",
      "A campana, simmetrica rispetto alla media",
      "Fortemente asimmetrica verso destra"
    ],
    correct: [1],
    exp: "La normale è la classica curva 'a campana', simmetrica attorno alla media: media, mediana e moda coincidono. È descritta da due parametri: media (posizione) e deviazione standard (larghezza)."
  },
  {
    id: "u06034", topic: "Distribuzione normale",
    q: "Nella distribuzione normale, media, mediana e moda:",
    opts: [
      "Non sono definite per questa distribuzione",
      "Hanno la media doppia rispetto alla mediana",
      "Coincidono: la curva è simmetrica"
    ],
    correct: [2],
    exp: "Nella normale, essendo simmetrica e unimodale, i tre indici di posizione coincidono nel centro. In distribuzioni asimmetriche invece si separano (es. media > mediana se coda a destra)."
  },
  {
    id: "u06035", topic: "Regola empirica",
    q: "Nella distribuzione normale, circa quale percentuale dei dati cade entro ±1 deviazione standard dalla media?",
    opts: [
      "Circa il 68%",
      "Circa il 95%",
      "Circa il 50%"
    ],
    correct: [0],
    exp: "Regola empirica (68-95-99,7): entro ±1σ cade ~68% dei dati, entro ±2σ ~95%, entro ±3σ ~99,7%. È valida per distribuzioni approssimativamente normali."
  },
  {
    id: "u06036", topic: "Standardizzazione",
    q: "Lo z-score (punteggio standardizzato) di un valore indica:",
    opts: [
      "La probabilità esatta che il valore si verifichi",
      "A quante deviazioni standard il valore si trova dalla media",
      "Il valore diviso per il numero totale di osservazioni"
    ],
    correct: [1],
    exp: "z = (x − media) / deviazione standard: dice quante deviazioni standard un valore dista dalla media. Uno z=2 significa 'due deviazioni sopra la media'. Serve a confrontare valori di distribuzioni diverse."
  },
  {
    id: "u06037", topic: "Distribuzione normale standard",
    q: "La distribuzione normale standard ha:",
    opts: [
      "Media e deviazione standard entrambe pari a 100",
      "Media 1 e deviazione standard 0",
      "Media 0 e deviazione standard 1"
    ],
    correct: [2],
    exp: "La normale standard è una normale con media 0 e deviazione standard 1. Ogni normale può essere ricondotta a essa con la standardizzazione (z-score), per usare le tavole di Gauss."
  },
  {
    id: "u06038", topic: "Distribuzione binomiale",
    q: "La distribuzione binomiale modella:",
    opts: [
      "Il numero di successi in n prove indipendenti con due soli esiti possibili",
      "Il tempo medio di attesa che intercorre tra due eventi successivi nel tempo",
      "Una variabile continua distribuita secondo la classica forma a campana"
    ],
    correct: [0],
    exp: "La binomiale conta i successi in n prove indipendenti di tipo 'successo/insuccesso' (prove di Bernoulli) con probabilità p costante. Es: numero di teste in 10 lanci di moneta."
  },
  {
    id: "u06039", topic: "Distribuzione di Poisson",
    q: "La distribuzione di Poisson è tipicamente usata per modellare:",
    opts: [
      "La media di un campione estratto casualmente da una popolazione normale",
      "Il numero di eventi rari che avvengono in un dato intervallo di tempo o spazio",
      "Il valore centrale di una distribuzione simmetrica a forma di campana"
    ],
    correct: [1],
    exp: "La Poisson descrive il conteggio di eventi rari e indipendenti in un intervallo fisso (es. chiamate a un call center in un'ora, difetti per metro di tessuto). Dipende dal solo parametro λ (tasso medio)."
  },
  {
    id: "u06040", topic: "Distribuzioni",
    q: "In una distribuzione asimmetrica con coda a destra (asimmetria positiva), di solito:",
    opts: [
      "La moda è maggiore sia della media sia della mediana",
      "Media e mediana coincidono nonostante l'asimmetria",
      "La media è maggiore della mediana, tirata verso i valori alti"
    ],
    correct: [2],
    exp: "Con coda a destra i pochi valori molto alti trascinano la MEDIA verso l'alto più della mediana, quindi tipicamente media > mediana > moda. È il caso classico dei redditi."
  },
  {
    id: "u06041", topic: "Correlazione",
    q: "Il coefficiente di correlazione di Pearson assume valori:",
    opts: [
      "Compresi tra −1 e +1",
      "Compresi tra 0 e 1",
      "Compresi tra 0 e 100"
    ],
    correct: [0],
    exp: "Il coefficiente di correlazione r varia tra −1 (relazione lineare inversa perfetta) e +1 (diretta perfetta); 0 indica assenza di relazione lineare. Misura forza e verso del legame LINEARE."
  },
  {
    id: "u06042", topic: "Correlazione",
    q: "Un coefficiente di correlazione pari a 0 indica che:",
    opts: [
      "Le due variabili sono perfettamente correlate in modo diretto tra di loro",
      "Non c'è relazione lineare tra le due variabili",
      "Una delle due variabili è costante nel tempo e non varia in alcun modo"
    ],
    correct: [1],
    exp: "r=0 significa assenza di relazione LINEARE, ma potrebbe esistere una relazione non lineare (es. a U) che il coefficiente di Pearson non coglie. Correlazione nulla non implica indipendenza totale."
  },
  {
    id: "u06043", topic: "Correlazione e causa",
    q: "Una forte correlazione tra due variabili implica che una causa l'altra?",
    opts: [
      "No, la correlazione esiste solo tra variabili senza alcun legame",
      "Sì: se sono correlate, una è sicuramente causa dell'altra",
      "No: la correlazione non implica un rapporto di causa-effetto"
    ],
    correct: [2],
    exp: "Correlazione ≠ causalità. Due variabili possono correlare per caso o per effetto di una terza variabile nascosta (confondente). Es: gelati venduti e annegamenti correlano, ma la causa comune è il caldo."
  },
  {
    id: "u06044", topic: "Covarianza",
    q: "La covarianza tra due variabili indica:",
    opts: [
      "Se tendono a variare nello stesso verso o in versi opposti",
      "Il valore centrale della distribuzione congiunta delle due variabili",
      "La probabilità che le due variabili assumano lo stesso valore"
    ],
    correct: [0],
    exp: "La covarianza misura come due variabili variano insieme: positiva se crescono insieme, negativa se una cresce mentre l'altra cala. A differenza della correlazione, dipende dalle unità di misura (non è normalizzata)."
  },
  {
    id: "u06045", topic: "Popolazione e campione",
    q: "Qual è la differenza tra popolazione e campione?",
    opts: [
      "Il campione è l'insieme completo; la popolazione un suo sottoinsieme",
      "La popolazione è l'insieme completo; il campione è un sottoinsieme di essa",
      "La popolazione riguarda le persone, il campione gli oggetti"
    ],
    correct: [1],
    exp: "La popolazione è l'insieme di TUTTI gli elementi di interesse; il campione è un sottoinsieme che si studia per inferire proprietà della popolazione, quando esaminarla tutta è impossibile o costoso."
  },
  {
    id: "u06046", topic: "Parametro e statistica",
    q: "La media calcolata su un campione è un...",
    opts: [
      "Un valore uguale alla media della popolazione",
      "Un parametro, perché descrive l'intera popolazione",
      "Una statistica, perché calcolata sui dati campionari"
    ],
    correct: [2],
    exp: "La media del campione è una STATISTICA (una stima); la media dell'intera popolazione è un PARAMETRO. La statistica campionaria varia da campione a campione e approssima il parametro."
  },
  {
    id: "u06047", topic: "Campionamento casuale",
    q: "In un campionamento casuale semplice:",
    opts: [
      "Ogni elemento ha la stessa probabilità di essere scelto",
      "Si scelgono solo gli elementi più comodi da raggiungere",
      "Il primo elemento estratto determina tutti i successivi"
    ],
    correct: [0],
    exp: "Nel campionamento casuale semplice ogni unità ha uguale probabilità di entrare nel campione. Riduce le distorsioni (bias) e rende il campione rappresentativo della popolazione."
  },
  {
    id: "u06048", topic: "Errore standard",
    q: "L'errore standard della media misura:",
    opts: [
      "La media dei valori campionari estratti dalla popolazione",
      "La variabilità della media campionaria da un campione all'altro",
      "La differenza tra il valore massimo e minimo del campione"
    ],
    correct: [1],
    exp: "L'errore standard è la deviazione standard della distribuzione delle medie campionarie: quantifica quanto la media di un campione può variare rispetto ad altri campioni. Diminuisce all'aumentare della numerosità n (σ/√n)."
  },
  {
    id: "u06049", topic: "Errore standard",
    q: "Aumentando la numerosità del campione, l'errore standard della media:",
    opts: [
      "Diventa uguale alla deviazione standard della popolazione",
      "Aumenta, perché ci sono più dati da cui può derivare errore",
      "Diminuisce, perché la stima diventa più precisa"
    ],
    correct: [2],
    exp: "L'errore standard = σ/√n: cresce n → diminuisce l'errore standard, cioè la media campionaria è più precisa. Per dimezzarlo serve però un campione quattro volte più grande."
  },
  {
    id: "u06050", topic: "Teorema del limite centrale",
    q: "Il teorema del limite centrale afferma che, all'aumentare della numerosità del campione:",
    opts: [
      "Le medie campionarie tendono alla distribuzione normale",
      "Tutti i dati della popolazione diventano normali",
      "La varianza dei dati tende inevitabilmente a zero"
    ],
    correct: [0],
    exp: "Il TLC dice che la distribuzione delle MEDIE campionarie tende alla normale al crescere di n, QUALUNQUE sia la distribuzione di partenza. È il fondamento di gran parte dell'inferenza statistica."
  },
  {
    id: "u06051", topic: "Tipi di dati",
    q: "Quale di queste è una variabile qualitativa (categorica)?",
    opts: [
      "L'altezza misurata in centimetri",
      "Il colore degli occhi",
      "Il numero di figli di una persona"
    ],
    correct: [1],
    exp: "Il colore degli occhi è qualitativo (categorie senza ordine numerico). L'altezza in cm e il numero di figli sono variabili QUANTITATIVE (misurabili con numeri): rispettivamente continua e discreta."
  },
  {
    id: "u06052", topic: "Scale di misura",
    q: "Una variabile su scala ORDINALE:",
    opts: [
      "È e comunque una variabile numerica di tipo continuo, come il peso o l'altezza",
      "Ha categorie prive di qualsiasi ordine possibile tra loro, come ad esempio il colore",
      "Ha categorie ordinabili ma senza distanze numeriche significative, es. basso/medio/alto"
    ],
    correct: [2],
    exp: "La scala ordinale ha un ordine tra le categorie (es. livello di soddisfazione basso<medio<alto) ma le distanze non sono quantificabili. La nominale non ha ordine; le scale a intervalli/rapporti sono numeriche."
  },
  {
    id: "u06053", topic: "Tipi di dati",
    q: "Il numero di automobili vendute in un giorno è una variabile:",
    opts: [
      "Quantitativa discreta",
      "Quantitativa continua",
      "Qualitativa ordinale"
    ],
    correct: [0],
    exp: "È quantitativa discreta: un conteggio che assume valori interi separati (0, 1, 2, ...). Una variabile continua (es. peso) può invece assumere infiniti valori in un intervallo."
  },
  {
    id: "u06054", topic: "Intervallo di confidenza",
    q: "Un intervallo di confidenza al 95% significa che:",
    opts: [
      "Il 95% dei dati del campione si trova dentro l'intervallo",
      "Nel 95% dei campioni l'intervallo contiene il vero parametro",
      "Il parametro ha il 5% di probabilità di essere corretto"
    ],
    correct: [1],
    exp: "Un IC al 95% è costruito con un metodo che, ripetendo il campionamento, cattura il vero parametro nel 95% dei casi. Non è la probabilità che il singolo intervallo lo contenga (il parametro è fisso)."
  },
  {
    id: "u06055", topic: "Stima",
    q: "Uno stimatore si dice corretto (non distorto) quando:",
    opts: [
      "Fornisce un valore superiore al parametro reale",
      "Restituisce lo stesso valore in ogni campione",
      "Il valore atteso coincide col parametro da stimare"
    ],
    correct: [2],
    exp: "Uno stimatore corretto (unbiased) ha valore atteso uguale al parametro: in media 'ci azzecca'. Es: la media campionaria è uno stimatore corretto della media della popolazione."
  },
  {
    id: "u06056", topic: "Media",
    q: "La media di 2, 4, 4, 4, 5, 5, 7, 9 è 5. Cosa vale la mediana?",
    opts: [
      "4,5",
      "5, uguale alla media",
      "4, il valore più frequente"
    ],
    correct: [0],
    exp: "I dati sono già ordinati e sono 8 (pari): i due centrali sono il 4° (4) e il 5° (5), la mediana è la loro media = 4,5. La moda invece è 4 (compare 3 volte)."
  },
  {
    id: "u06057", topic: "Outlier",
    q: "Un outlier è:",
    opts: [
      "Il valore che compare con la frequenza più alta all'interno della distribuzione",
      "Un valore anomalo, molto distante dagli altri dati della distribuzione osservata",
      "La media aritmetica calcolata solo sui valori estremi della serie di dati"
    ],
    correct: [1],
    exp: "Un outlier è un valore fortemente distante dagli altri, spesso identificato oltre 1,5×IQR dai quartili. Può essere un errore di misura o un caso reale ma raro: va indagato, non sempre eliminato."
  },
  {
    id: "u06058", topic: "Frequenze",
    q: "La somma di tutte le frequenze relative di una distribuzione è pari a:",
    opts: [
      "La media delle frequenze assolute",
      "Il numero totale di osservazioni",
      "1 (ovvero 100%)"
    ],
    correct: [2],
    exp: "Le frequenze relative sono quote sul totale, quindi la loro somma è 1 (100%). La somma delle frequenze ASSOLUTE è invece pari al numero totale di osservazioni."
  },
  {
    id: "u06059", topic: "Probabilità",
    q: "Lanciando due dadi a sei facce, la probabilità di ottenere somma 7 è:",
    opts: [
      "1/6",
      "7/36",
      "1/12"
    ],
    correct: [0],
    exp: "Su 36 casi possibili, la somma 7 si ottiene con 6 coppie: (1,6)(2,5)(3,4)(4,3)(5,2)(6,1). Quindi 6/36 = 1/6. È la somma più probabile con due dadi."
  },
  {
    id: "u06060", topic: "Probabilità",
    q: "Estraendo una carta da un mazzo di 52, la probabilità che sia un asso è:",
    opts: [
      "4/13",
      "1/13",
      "1/4"
    ],
    correct: [1],
    exp: "Ci sono 4 assi su 52 carte: P = 4/52 = 1/13 ≈ 0,077. I casi favorevoli sono 4, i possibili 52."
  },
  {
    id: "u06061", topic: "Distribuzione uniforme",
    q: "In una distribuzione uniforme discreta:",
    opts: [
      "Un solo valore ha probabilità 1 e gli altri 0",
      "La probabilità cresce linearmente con il valore",
      "Tutti i valori sono equiprobabili"
    ],
    correct: [2],
    exp: "Nella uniforme tutti gli esiti sono equiprobabili, es. il lancio di un dado equilibrato (ogni faccia 1/6). La forma è 'piatta', senza valori privilegiati."
  },
  {
    id: "u06062", topic: "Asimmetria",
    q: "Un indice di asimmetria (skewness) positivo indica una distribuzione:",
    opts: [
      "Con la coda più lunga verso destra (valori alti)",
      "Con la coda più lunga verso sinistra (valori bassi)",
      "Con due mode ben distinte"
    ],
    correct: [0],
    exp: "Skewness positiva → coda a destra (pochi valori molto grandi), tipico dei redditi. Skewness negativa → coda a sinistra. Skewness ≈ 0 → simmetrica."
  },
  {
    id: "u06063", topic: "Curtosi",
    q: "La curtosi di una distribuzione descrive:",
    opts: [
      "La direzione della relazione lineare che lega due variabili osservate",
      "Quanto è 'appuntita' la distribuzione e quanto sono pesanti le sue code",
      "Il numero complessivo di mode presenti nella distribuzione dei dati"
    ],
    correct: [1],
    exp: "La curtosi misura il 'peso' delle code e l'appuntimento del picco rispetto alla normale: alta curtosi = code pesanti e picco pronunciato (più outlier), bassa = distribuzione più piatta."
  },
  {
    id: "u06064", topic: "Probabilità totale",
    q: "La probabilità di ottenere almeno una testa in 2 lanci di una moneta equa è:",
    opts: [
      "1, perché è certo ottenere almeno una testa",
      "1/4, cioè due teste di fila",
      "3/4"
    ],
    correct: [2],
    exp: "Conviene usare il complementare: P(nessuna testa)=P(TT... croce-croce)=1/2·1/2=1/4, quindi P(almeno una testa)=1−1/4=3/4. Calcolare 'almeno uno' col complementare è spesso più semplice."
  },
  {
    id: "u06065", topic: "Media ponderata",
    q: "La media ponderata si usa quando:",
    opts: [
      "I diversi valori hanno pesi differenti",
      "Tutti i valori hanno esattamente lo stesso peso",
      "Si vogliono contare le frequenze delle modalità"
    ],
    correct: [0],
    exp: "La media ponderata assegna a ciascun valore un peso: media = Σ(valore×peso)/Σpesi. Es: la media dei voti d'esame pesata per i crediti (CFU). Se i pesi sono uguali, coincide con la media semplice."
  },
  {
    id: "u06066", topic: "Probabilità",
    q: "Un evento con probabilità 0 è:",
    opts: [
      "Un evento certo",
      "Un evento impossibile",
      "Un evento molto probabile"
    ],
    correct: [1],
    exp: "Probabilità 0 = evento impossibile; probabilità 1 = evento certo. Tutti gli altri eventi hanno probabilità intermedia tra 0 e 1."
  },
  {
    id: "u06067", topic: "Distribuzione normale",
    q: "Cambiando la deviazione standard di una normale (a parità di media), la curva:",
    opts: [
      "Diventa fortemente asimmetrica con una coda più lunga verso destra",
      "Cambia soltanto il colore della curva ma non la sua forma complessiva",
      "Cambia larghezza: con σ più grande la campana è più larga e più bassa"
    ],
    correct: [2],
    exp: "La deviazione standard controlla la LARGHEZZA: σ grande → campana larga e schiacciata; σ piccola → stretta e alta. È la media a spostare la curva lateralmente, non σ."
  },
  {
    id: "u06068", topic: "Percentili",
    q: "Se il tuo punteggio è all'80° percentile, significa che:",
    opts: [
      "Hai un punteggio superiore a circa l'80% di chi ha svolto lo stesso test",
      "Hai risposto correttamente all'80% delle domande presenti nel test",
      "Il tuo punteggio grezzo corrisponde esattamente a 80 punti su 100"
    ],
    correct: [0],
    exp: "L'80° percentile indica la tua POSIZIONE relativa: superi circa l'80% degli altri. Non dice quante risposte hai dato giuste, né che il tuo voto è 80: è un ranking, non un punteggio."
  },
  {
    id: "u06069", topic: "Probabilità condizionata",
    q: "In un'urna con 3 palline rosse e 2 nere, estraendone due SENZA reinserimento, la probabilità che la seconda sia rossa dipende:",
    opts: [
      "Non dipende dalla prima: gli eventi sono indipendenti",
      "Dall'esito della prima estrazione",
      "Solo dal numero totale iniziale di palline"
    ],
    correct: [1],
    exp: "Senza reinserimento la composizione dell'urna cambia dopo la prima estrazione: gli eventi sono DIPENDENTI e serve la probabilità condizionata. Con reinserimento sarebbero invece indipendenti."
  },
  {
    id: "u06070", topic: "Statistica descrittiva vs inferenziale",
    q: "Qual è la differenza tra statistica descrittiva e inferenziale?",
    opts: [
      "La descrittiva riguarda soltanto i grafici, l'inferenziale soltanto le tabelle",
      "La descrittiva fa uso della probabilità mentre l'inferenziale non la utilizza affatto",
      "La descrittiva sintetizza i dati raccolti; l'inferenziale generalizza alla popolazione"
    ],
    correct: [2],
    exp: "La statistica descrittiva sintetizza e rappresenta i dati raccolti (indici, grafici). L'inferenziale usa un campione per trarre conclusioni (stime, test) sull'intera popolazione, con un margine di incertezza."
  },
  {
    id: "u06071", topic: "Media",
    q: "Raddoppiando ogni valore di un insieme di dati, la media:",
    opts: [
      "Raddoppia anch'essa",
      "Resta invariata",
      "Si dimezza"
    ],
    correct: [0],
    exp: "Moltiplicando ogni dato per una costante, la media viene moltiplicata per la stessa costante: se i dati raddoppiano, la media raddoppia. Lo stesso vale per la deviazione standard."
  },
  {
    id: "u06072", topic: "Deviazione standard",
    q: "Sommando una costante c a ogni valore dei dati, la deviazione standard:",
    opts: [
      "Viene moltiplicata per il valore della costante c aggiunta a ciascun dato",
      "Resta invariata, perché aggiungere una costante non cambia la dispersione",
      "Diventa esattamente zero indipendentemente dai valori assunti dai dati"
    ],
    correct: [1],
    exp: "Aggiungere una costante SPOSTA tutti i dati (cambia la media di c) ma non ne modifica la dispersione: gli scarti dalla media restano identici, quindi la deviazione standard non cambia."
  },
  {
    id: "u06073", topic: "Probabilità",
    q: "La probabilità che, lanciando un dado equo, esca un numero pari è:",
    opts: [
      "2/3",
      "1/3",
      "1/2"
    ],
    correct: [2],
    exp: "I numeri pari su un dado sono 2, 4, 6: tre casi favorevoli su sei possibili → 3/6 = 1/2."
  },
  {
    id: "u06074", topic: "Frequenze",
    q: "In una tabella di frequenza, la 'frequenza assoluta' di una modalità è:",
    opts: [
      "Quante volte quella modalità è stata osservata",
      "La somma cumulata fino a quella modalità",
      "La differenza rispetto alla modalità precedente"
    ],
    correct: [0],
    exp: "La frequenza assoluta è il semplice conteggio delle osservazioni per una modalità. Divisa per il totale dà la frequenza relativa; sommata progressivamente dà la cumulata."
  },
  {
    id: "u06075", topic: "Distribuzioni",
    q: "Quale distribuzione è più adatta a modellare il numero di clienti che entrano in un negozio in un'ora?",
    opts: [
      "La distribuzione normale standard",
      "La distribuzione di Poisson",
      "La distribuzione uniforme continua"
    ],
    correct: [1],
    exp: "Il conteggio di eventi che accadono in un intervallo di tempo (arrivi di clienti) è tipicamente modellato dalla Poisson, con parametro λ pari al tasso medio di arrivi."
  },
  {
    id: "u06076", topic: "Correlazione",
    q: "Una correlazione di −0,9 tra due variabili indica:",
    opts: [
      "Una relazione lineare diretta molto forte tra le due variabili osservate",
      "L'assenza totale di qualsiasi relazione tra le due variabili considerate",
      "Una forte relazione lineare inversa tra le variabili"
    ],
    correct: [2],
    exp: "Il segno indica il verso (− = inversa) e il valore assoluto la forza: |−0,9| è vicino a 1, quindi relazione lineare inversa MOLTO forte. Non è debole: la debolezza si ha vicino a 0."
  },
  {
    id: "u06077", topic: "Probabilità",
    q: "Se P(A)=0,6 e P(B)=0,7, possono A e B essere incompatibili?",
    opts: [
      "No, perché se lo fossero P+P dovrebbe essere ≤ 1, mentre qui vale 1,3",
      "Sì, a condizione che i due eventi siano anche statisticamente indipendenti",
      "Soltanto nel caso in cui uno dei due coincida con l'evento certo"
    ],
    correct: [0],
    exp: "Se fossero incompatibili, P(A∪B)=P(A)+P(B)=1,3 > 1: impossibile. Due eventi con probabilità la cui somma supera 1 DEVONO potersi verificare insieme (intersezione non vuota)."
  },
  {
    id: "u06078", topic: "Media geometrica",
    q: "La media geometrica è particolarmente indicata per:",
    opts: [
      "Individuare il valore che si presenta più spesso all'interno di una serie",
      "Tassi di crescita e rapporti, come le crescite percentuali composte nel tempo",
      "Misurare quanto i dati si disperdono attorno alla loro media aritmetica"
    ],
    correct: [1],
    exp: "La media geometrica (radice n-esima del prodotto dei valori) è adatta a grandezze moltiplicative come tassi di crescita e rendimenti composti, dove la media aritmetica sovrastimerebbe."
  },
  {
    id: "u06079", topic: "Campionamento",
    q: "Un campione si dice 'distorto' (biased) quando:",
    opts: [
      "È stato estratto in modo perfettamente casuale da tutta la popolazione",
      "Contiene esattamente la metà degli elementi dell'intera popolazione studiata",
      "Non è rappresentativo della popolazione e favorisce sistematicamente certi elementi"
    ],
    correct: [2],
    exp: "Un campione distorto sovra o sotto-rappresenta parti della popolazione in modo sistematico (es. sondaggio solo tra chi usa internet), producendo stime fuorvianti. Il campionamento casuale riduce il bias."
  },
  {
    id: "u06080", topic: "Probabilità",
    q: "La regola del prodotto per eventi dipendenti afferma che P(A e B) è uguale a:",
    opts: [
      "P(A) × P(B|A)",
      "P(A) × P(B)",
      "P(A) + P(B|A)"
    ],
    correct: [0],
    exp: "Per eventi dipendenti: P(A∩B)=P(A)·P(B|A), cioè la probabilità di A per quella di B condizionata ad A. Se sono indipendenti, P(B|A)=P(B) e si torna al semplice prodotto."
  },
  {
    id: "u06081", topic: "Distribuzione normale",
    q: "Nella normale, la probabilità di ottenere ESATTAMENTE un valore preciso (es. x = 1,73000...) è:",
    opts: [
      "Un valore pari all'altezza della curva di densità in quel preciso punto",
      "0, perché su una variabile continua i singoli punti hanno probabilità nulla",
      "1, perché quel valore rientra sicuramente tra quelli che si possono verificare"
    ],
    correct: [1],
    exp: "Per una variabile continua la probabilità di un singolo valore esatto è 0: ha senso solo la probabilità su un INTERVALLO (area sotto la curva). L'altezza della curva è la densità, non una probabilità."
  },
  {
    id: "u06082", topic: "Indici",
    q: "Quale coppia di indici misura la DISPERSIONE (e non la posizione)?",
    opts: [
      "La media e la moda dei dati",
      "La mediana e la moda della serie",
      "La varianza e la deviazione standard"
    ],
    correct: [2],
    exp: "Varianza e deviazione standard misurano la dispersione (quanto i dati si allontanano dal centro). Media, mediana e moda sono indici di posizione (dove si colloca il centro)."
  },
  {
    id: "u06083", topic: "Probabilità",
    q: "Lo spazio campionario di un esperimento è:",
    opts: [
      "L'insieme di tutti i possibili esiti dell'esperimento",
      "Il numero medio di volte in cui l'esperimento va ripetuto",
      "La probabilità complessiva di tutti gli eventi impossibili"
    ],
    correct: [0],
    exp: "Lo spazio campionario Ω è l'insieme di tutti gli esiti possibili (es. per un dado {1,2,3,4,5,6}). Un evento è un sottoinsieme dello spazio campionario."
  },
  {
    id: "u06084", topic: "Distribuzione binomiale",
    q: "Nella distribuzione binomiale, il valore atteso (media) del numero di successi è:",
    opts: [
      "p / n, cioè probabilità di successo divisa per il numero di prove",
      "n × p, cioè numero di prove per probabilità di successo",
      "n + p, cioè numero di prove più la probabilità di successo"
    ],
    correct: [1],
    exp: "Per la binomiale il numero medio di successi è n·p. Es: in 10 lanci di moneta (p=0,5), il numero atteso di teste è 10·0,5 = 5."
  },
  {
    id: "u06085", topic: "Probabilità",
    q: "Due dadi vengono lanciati. La probabilità di ottenere due numeri uguali (un 'doppio') è:",
    opts: [
      "5/36",
      "1/2",
      "1/6"
    ],
    correct: [2],
    exp: "I doppi sono (1,1)(2,2)(3,3)(4,4)(5,5)(6,6): 6 casi su 36 → 1/6. Ogni faccia deve ripetersi identica."
  },
  {
    id: "u06086", topic: "Statistica descrittiva",
    q: "La moda è sempre unica?",
    opts: [
      "No: può essere bimodale, plurimodale, oppure non avere alcuna moda",
      "Sì, ogni distribuzione possiede esattamente una sola moda",
      "No, ma soltanto quando si tratta di variabili di tipo continuo"
    ],
    correct: [0],
    exp: "La moda può non essere unica: se due o più valori hanno la stessa frequenza massima la distribuzione è bimodale/plurimodale; se tutti i valori compaiono una sola volta, non c'è moda."
  },
  {
    id: "u06087", topic: "Scale di misura",
    q: "La temperatura in gradi Celsius è una variabile su scala:",
    opts: [
      "A rapporti (lo zero indica assenza della grandezza)",
      "A intervalli (lo zero è convenzionale, non assoluto)",
      "Ordinale"
    ],
    correct: [1],
    exp: "La scala Celsius è a intervalli: le differenze hanno senso ma lo zero è convenzionale (0°C non è 'assenza di temperatura'), quindi non si può dire che 20°C è 'il doppio' di 10°C. La scala Kelvin è invece a rapporti."
  },
  {
    id: "u06088", topic: "Probabilità",
    q: "La probabilità di NON ottenere un 6 in un singolo lancio di dado è:",
    opts: [
      "4/6",
      "1/2",
      "5/6"
    ],
    correct: [2],
    exp: "P(non 6) = 1 − P(6) = 1 − 1/6 = 5/6. Le facce diverse da 6 sono cinque su sei."
  },
  {
    id: "u06089", topic: "Distribuzione normale",
    q: "Circa quale percentuale dei dati di una normale cade ENTRO ±2 deviazioni standard?",
    opts: [
      "Circa il 95%",
      "Circa il 68%",
      "Circa il 50%"
    ],
    correct: [0],
    exp: "Regola 68-95-99,7: entro ±2σ cade circa il 95% dei dati. Il 68% è entro ±1σ, il 99,7% entro ±3σ."
  },
  {
    id: "u06090", topic: "Correlazione",
    q: "Il diagramma più adatto a visualizzare la relazione tra due variabili quantitative è:",
    opts: [
      "Il diagramma a torta",
      "Lo scatter plot",
      "Il diagramma a barre"
    ],
    correct: [1],
    exp: "Lo scatter plot mostra ogni osservazione come un punto (x,y) e rende visibile la relazione tra due variabili quantitative (lineare, non lineare, assente). La torta è per composizioni, l'istogramma per una sola variabile."
  },
  {
    id: "u06091", topic: "Media",
    q: "In un gruppo di 10 persone il salario medio è 2.000€. Se entra una persona che guadagna 52.000€, la media:",
    opts: [
      "Scende, perché aumenta il numero di persone",
      "Sale esattamente a 3.000€",
      "Sale a circa 6.545€ per via del valore estremo"
    ],
    correct: [2],
    exp: "Nuovo totale = 10·2000 + 52000 = 72000, diviso 11 ≈ 6.545€. Un singolo outlier stravolge la media: qui la mediana (più robusta) resterebbe vicina a 2.000€ e descriverebbe meglio il gruppo."
  },
  {
    id: "u06092", topic: "Probabilità",
    q: "Se si estrae una pallina da un'urna con 5 rosse e 15 blu, la probabilità che sia rossa è:",
    opts: [
      "1/4",
      "1/3",
      "3/4"
    ],
    correct: [0],
    exp: "Totale palline = 20, rosse = 5: P = 5/20 = 1/4. Casi favorevoli su casi possibili."
  },
  {
    id: "u06093", topic: "Inferenza",
    q: "Aumentare il livello di confidenza (es. dal 90% al 99%), a parità di dati, rende l'intervallo:",
    opts: [
      "Più stretto, perché all'aumentare della confidenza aumenta la precisione",
      "Più ampio, perché per essere più 'sicuri' serve un intervallo più largo",
      "Invariato, perché l'ampiezza non dipende dal livello di confidenza scelto"
    ],
    correct: [1],
    exp: "Più confidenza vuoi, più devi 'allargare la rete': l'intervallo diventa più ampio. C'è un compromesso tra confidenza e precisione: per stringerlo mantenendo la confidenza serve più dati."
  },
  {
    id: "u06094", topic: "Statistica descrittiva",
    q: "Quale misura è più appropriata per descrivere il 'valore tipico' di una variabile categorica (es. il colore preferito)?",
    opts: [
      "La mediana",
      "La media",
      "La moda"
    ],
    correct: [2],
    exp: "Su una variabile categorica non ha senso sommare o ordinare i valori, quindi media e mediana non si applicano: l'unico indice di posizione utilizzabile è la MODA (la categoria più frequente)."
  },
  {
    id: "u06095", topic: "Probabilità",
    q: "Dopo aver ottenuto 5 teste di fila con una moneta equa, la probabilità che il 6° lancio sia testa è:",
    opts: [
      "1/2: i lanci sono indipendenti",
      "Più alta di 1/2, perché la moneta è in serie di teste",
      "0, perché non possono uscire 6 teste di fila"
    ],
    correct: [0],
    exp: "È la 'fallacia del giocatore': i lanci sono indipendenti, la moneta non ricorda il passato. Ogni lancio resta 1/2, indipendentemente dalla sequenza precedente."
  },
  {
    id: "u06096", topic: "Distribuzioni",
    q: "In una distribuzione simmetrica e unimodale, quale relazione è vera?",
    opts: [
      "Moda > media > mediana",
      "Media ≈ mediana ≈ moda",
      "Media < moda < mediana"
    ],
    correct: [1],
    exp: "Nella simmetria unimodale i tre indici coincidono (o quasi) al centro. Le disuguaglianze tra media, mediana e moda emergono solo in presenza di asimmetria."
  },
  {
    id: "u06097", topic: "Errore standard",
    q: "L'errore standard e la deviazione standard sono la stessa cosa?",
    opts: [
      "Sì, ma l'errore standard si utilizza soltanto quando i campioni sono molto piccoli",
      "No, l'errore standard riguarda esclusivamente i dati di tipo qualitativo o categorico",
      "No: la SD misura la dispersione dei dati, l'errore standard quella della media campionaria"
    ],
    correct: [2],
    exp: "La deviazione standard descrive quanto variano i DATI; l'errore standard (σ/√n) descrive quanto varia la MEDIA da campione a campione. L'errore standard è più piccolo e diminuisce con n."
  },
  {
    id: "u06098", topic: "Probabilità",
    q: "La legge dei grandi numeri afferma che, ripetendo molte volte un esperimento:",
    opts: [
      "La frequenza relativa di un evento tende alla sua probabilità teorica",
      "Ogni possibile esito dell'esperimento diventa progressivamente equiprobabile",
      "La media dei risultati ottenuti tende inevitabilmente verso lo zero"
    ],
    correct: [0],
    exp: "La legge dei grandi numeri dice che, all'aumentare delle prove, la frequenza osservata di un evento si avvicina alla sua probabilità teorica. Es: lanciando una moneta molte volte, la quota di teste tende a 0,5."
  },
  {
    id: "u06099", topic: "Grafici",
    q: "Per rappresentare la composizione percentuale di un totale (es. quote di mercato), il grafico più adatto è:",
    opts: [
      "Il diagramma a dispersione tra due variabili",
      "Il diagramma a torta, oppure le barre impilate",
      "Il boxplot che mostra quartili e mediana"
    ],
    correct: [1],
    exp: "Torta o barre impilate mostrano bene come un totale si suddivide in parti (quote che sommano a 100%). Lo scatter serve per relazioni tra variabili, l'istogramma per distribuzioni, il boxplot per posizione/dispersione."
  },
  {
    id: "u06100", topic: "Probabilità condizionata",
    q: "Su 100 persone, 40 usano gli occhiali e, tra queste, 10 sono mancine. La probabilità di essere mancino DATO che si portano gli occhiali è:",
    opts: [
      "40/10 = 4",
      "40/100 = 0,40",
      "10/40 = 0,25"
    ],
    correct: [2],
    exp: "P(mancino | occhiali) = mancini con occhiali / totale con occhiali = 10/40 = 0,25. Il condizionamento restringe lo spazio ai soli 40 con occhiali, non ai 100 totali."
  },
  // === AGGIUNGI NUOVE DOMANDE STATISTICA QUI ===
]);
