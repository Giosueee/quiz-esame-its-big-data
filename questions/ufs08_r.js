/* ============================================================
   MATERIA: R  (UFS08 - Statistica e visualizzazione dati in R)
   100 domande. (Camuffatura lunghezze: pass finale.)
   ============================================================ */
registerSubject("R", [
  {
    id: "u08001", topic: "Assegnazione",
    q: "Qual è l'operatore di assegnazione idiomatico in R?",
    opts: [
      "=>",
      "<-",
      "::"
    ],
    correct: [1],
    exp: "In R si usa <- per assegnare (x <- 5). Anche = funziona, ma <- è la convenzione. == è il confronto di uguaglianza."
  },
  {
    id: "u08002", topic: "Vettori",
    q: "Come si crea un vettore in R?",
    opts: [
      "array=1,2,3",
      "vector[1,2,3]",
      "c(1, 2, 3)"
    ],
    correct: [2],
    exp: "La funzione c() ('combine') crea un vettore: c(1,2,3). È la struttura dati di base di R; gli elementi devono essere dello stesso tipo."
  },
  {
    id: "u08003", topic: "Vettori",
    q: "Gli indici dei vettori in R partono da:",
    opts: [
      "1",
      "-1",
      "Dipende dal vettore"
    ],
    correct: [0],
    exp: "In R l'indicizzazione parte da 1 (a differenza di Python che parte da 0): v[1] è il primo elemento. Un errore tipico per chi viene da altri linguaggi."
  },
  {
    id: "u08004", topic: "Data frame",
    q: "Cos'è un data frame in R?",
    opts: [
      "Un vettore che può contenere valori di un solo tipo",
      "Una tabella con righe e colonne di tipi anche diversi",
      "Una funzione che riassume le statistiche dei dati"
    ],
    correct: [1],
    exp: "Il data frame è la struttura tabellare di R: colonne (variabili) di tipo eventualmente diverso e righe (osservazioni). È l'equivalente di un DataFrame pandas o di una tabella."
  },
  {
    id: "u08005", topic: "Tipi di dato",
    q: "In R, un 'factor' rappresenta:",
    opts: [
      "Una funzione matematica",
      "Una data del calendario",
      "Una variabile categorica con livelli predefiniti"
    ],
    correct: [2],
    exp: "Il factor è il tipo per le variabili categoriche (es. 'basso','medio','alto'): memorizza i livelli (levels) e si usa nei modelli e nei grafici per gestire le categorie."
  },
  {
    id: "u08006", topic: "Funzioni statistiche",
    q: "Quale funzione calcola la media in R?",
    opts: [
      "mean()",
      "median()",
      "sum()"
    ],
    correct: [0],
    exp: "mean() restituisce la media aritmetica. median() dà la mediana, sum() la somma. avg() non esiste in R base."
  },
  {
    id: "u08007", topic: "Valori mancanti",
    q: "In R, un valore mancante è rappresentato da:",
    opts: [
      "NULL",
      "NA",
      "''"
    ],
    correct: [1],
    exp: "NA (Not Available) indica un dato mancante. NULL è l'oggetto vuoto/assente. Molte funzioni hanno l'argomento na.rm=TRUE per ignorare gli NA nei calcoli."
  },
  {
    id: "u08008", topic: "Valori mancanti",
    q: "mean(c(1, 2, NA)) restituisce:",
    opts: [
      "Errore",
      "1.5",
      "NA"
    ],
    correct: [2],
    exp: "Se il vettore contiene NA, mean() restituisce NA per default. Per ignorare i mancanti si usa mean(x, na.rm=TRUE), che darebbe 1.5."
  },
  {
    id: "u08009", topic: "ggplot2",
    q: "ggplot2 è una libreria R per:",
    opts: [
      "La visualizzazione dei dati",
      "La connessione ai database",
      "La gestione dei file"
    ],
    correct: [0],
    exp: "ggplot2 è il pacchetto principe per la grafica in R, basato sulla 'grammar of graphics': si costruiscono grafici a strati (layer) combinando dati, estetiche (aes) e geometrie (geom)."
  },
  {
    id: "u08010", topic: "ggplot2",
    q: "In ggplot2, aes() serve a:",
    opts: [
      "Salvare il grafico su file",
      "Mappare le variabili sugli assi/estetiche",
      "Calcolare le statistiche"
    ],
    correct: [1],
    exp: "aes() (aesthetics) mappa le colonne dei dati sulle proprietà visive: x, y, color, size, fill. Es: aes(x=eta, y=reddito, color=genere)."
  },
  {
    id: "u08011", topic: "ggplot2",
    q: "Quale geom si usa per un diagramma a dispersione (scatter) in ggplot2?",
    opts: [
      "geom_histogram",
      "geom_line()",
      "geom_point()"
    ],
    correct: [2],
    exp: "geom_point() disegna i punti (scatter). geom_bar() barre, geom_line() linee, geom_histogram() istogrammi. I geom definiscono il tipo di rappresentazione."
  },
  {
    id: "u08012", topic: "dplyr",
    q: "Nel pacchetto dplyr, la funzione filter() serve a:",
    opts: [
      "Selezionare le righe che soddisfano una condizione",
      "Selezionare un sottoinsieme di colonne del data frame",
      "Raggruppare le righe per calcolarne le statistiche"
    ],
    correct: [0],
    exp: "filter() tiene le RIGHE che rispettano una condizione (es. filter(df, eta>30)). select() sceglie le COLONNE, arrange() ordina, group_by() raggruppa."
  },
  {
    id: "u08013", topic: "dplyr",
    q: "In dplyr, select() serve a:",
    opts: [
      "Calcolare una media",
      "Scegliere le colonne di un data frame",
      "Unire due tabelle"
    ],
    correct: [1],
    exp: "select() sceglie/riordina le COLONNE (es. select(df, nome, eta)). Da non confondere con filter(), che agisce sulle righe."
  },
  {
    id: "u08014", topic: "dplyr",
    q: "L'operatore pipe di dplyr/magrittr è:",
    opts: [
      "->>",
      "|>|",
      "%>%"
    ],
    correct: [2],
    exp: "%>% (pipe) passa il risultato di un'espressione alla funzione successiva: df %>% filter(...) %>% select(...). Rende leggibili le catene di operazioni. (R base ha anche |> )."
  },
  {
    id: "u08015", topic: "dplyr",
    q: "summarise() combinata con group_by() serve a:",
    opts: [
      "Calcolare statistiche per ciascun gruppo",
      "Rimuovere le righe duplicate dal data frame",
      "Rinominare le variabili mantenendone i valori"
    ],
    correct: [0],
    exp: "group_by() definisce i gruppi e summarise() calcola un valore riassuntivo per ciascuno (es. media per categoria). È l'equivalente del GROUP BY di SQL."
  },
  {
    id: "u08016", topic: "Strutture di controllo",
    q: "Quale struttura esegue codice ripetutamente in R?",
    opts: [
      "switch",
      "for",
      "geom"
    ],
    correct: [1],
    exp: "Il ciclo for itera su una sequenza (for(i in 1:10){...}). In R però si preferiscono spesso le funzioni vettorializzate (apply, sapply) ai cicli espliciti."
  },
  {
    id: "u08017", topic: "Funzioni apply",
    q: "La famiglia di funzioni apply (sapply, lapply) serve a:",
    opts: [
      "Gestire NA e valori mancanti senza applicare funzioni iterate",
      "Disegnare grafici invece di applicare funzioni agli elementi",
      "Applicare una funzione a ogni elemento senza scrivere cicli espliciti"
    ],
    correct: [2],
    exp: "apply/lapply/sapply applicano una funzione a ciascun elemento di una struttura (lista, vettore, colonne), in modo conciso e vettorializzato, evitando i cicli for."
  },
  {
    id: "u08018", topic: "Importazione dati",
    q: "Quale funzione legge un file CSV in R?",
    opts: [
      "read.csv()",
      "load.csv()",
      "open.file()"
    ],
    correct: [0],
    exp: "read.csv() (o read_csv() di readr) importa un CSV in un data frame. Ha argomenti per separatore, header, encoding."
  },
  {
    id: "u08019", topic: "RMarkdown",
    q: "A cosa serve RMarkdown?",
    opts: [
      "A connettersi a un database",
      "A creare report che uniscono testo, codice R e risultati",
      "A creare macchine virtuali"
    ],
    correct: [1],
    exp: "RMarkdown combina testo formattato (Markdown) e blocchi di codice R eseguibili in un unico documento riproducibile, esportabile in HTML, PDF o Word. Ideale per report e analisi."
  },
  {
    id: "u08020", topic: "Test statistici in R",
    q: "La funzione t.test() in R esegue:",
    opts: [
      "Un raggruppamento",
      "Una regressione lineare",
      "Un test t di Student"
    ],
    correct: [2],
    exp: "t.test() effettua il test t (a uno o due campioni) e restituisce statistica, p-value e intervallo di confidenza. Per la regressione si usa lm()."
  },
  {
    id: "u08021", topic: "Regressione in R",
    q: "Quale funzione stima un modello di regressione lineare in R?",
    opts: [
      "lm()",
      "glm.plot()",
      "mean()"
    ],
    correct: [0],
    exp: "lm() ('linear model') stima una regressione lineare: lm(y ~ x, data=df). summary() del modello mostra coefficienti, R² e significatività."
  },
  {
    id: "u08022", topic: "Formula",
    q: "In R, la formula y ~ x indica:",
    opts: [
      "x è trattata come variabile dipendente e y come predittore",
      "y è la variabile dipendente, x l'indipendente",
      "y diviso x come operazione aritmetica, non formula statistica"
    ],
    correct: [1],
    exp: "La sintassi formula 'risposta ~ predittori' è usata da lm/glm e nei grafici: y ~ x significa modellare y in funzione di x. Si aggiungono predittori con y ~ x1 + x2."
  },
  {
    id: "u08023", topic: "Vettorializzazione",
    q: "In R, c(1,2,3) * 2 restituisce:",
    opts: [
      "Errore",
      "c(1, 2, 3, 2)",
      "c(2, 4, 6)"
    ],
    correct: [2],
    exp: "Le operazioni in R sono vettorializzate: moltiplicare un vettore per uno scalare moltiplica ogni elemento → c(2,4,6). Non serve un ciclo esplicito."
  },
  {
    id: "u08024", topic: "Liste",
    q: "Una list() in R rispetto a un vettore:",
    opts: [
      "Può contenere elementi di tipi diversi",
      "Può contenere solo numeri",
      "È più veloce, anche quando i dati sono eterogenei o copiati"
    ],
    correct: [0],
    exp: "La lista è una struttura eterogenea: può contenere numeri, stringhe, vettori, altre liste. Il vettore invece richiede elementi tutti dello stesso tipo."
  },
  {
    id: "u08025", topic: "str()",
    q: "La funzione str() in R serve a:",
    opts: [
      "Convertire un oggetto in una stringa di testo",
      "Mostrare la struttura di un oggetto",
      "Rimuovere gli spazi iniziali e finali di una stringa"
    ],
    correct: [1],
    exp: "str() ('structure') dà una panoramica compatta di un oggetto: tipo, dimensioni, primi valori delle colonne. Utilissima per ispezionare rapidamente un data frame."
  },
  {
    id: "u08026", topic: "summary()",
    q: "summary() applicata a un data frame numerico restituisce:",
    opts: [
      "La correlazione tra colonne",
      "Un grafico a barre per confrontare categorie o frequenze",
      "Statistiche descrittive per ogni colonna"
    ],
    correct: [2],
    exp: "summary() fornisce un riepilogo statistico colonna per colonna: minimo, primo quartile, mediana, media, terzo quartile, massimo (e conteggio NA)."
  },
  {
    id: "u08027", topic: "Visualizzazione",
    q: "Quale geom di ggplot2 crea un istogramma?",
    opts: [
      "geom_histogram()",
      "geom_point",
      "geom_boxplot"
    ],
    correct: [0],
    exp: "geom_histogram() rappresenta la distribuzione di una variabile continua in classi. geom_boxplot() mostra invece quartili e outlier."
  },
  {
    id: "u08028", topic: "Boxplot",
    q: "In R, un boxplot mostra:",
    opts: [
      "La sola media, ignorando dispersione, dipendenze o struttura dei dati",
      "Mediana, quartili e valori anomali di una distribuzione",
      "La correlazione tra due variabili"
    ],
    correct: [1],
    exp: "Il boxplot visualizza la mediana (linea centrale), i quartili (scatola), i baffi e gli outlier. Ottimo per confrontare la distribuzione tra gruppi."
  },
  {
    id: "u08029", topic: "Fattori e livelli",
    q: "Perché usare un factor invece di una stringa per una variabile categorica?",
    opts: [
      "Non permette di definire o usare livelli ordinati",
      "Occupa più memoria rispetto a una stringa semplice",
      "Gestisce i livelli in modo esplicito ed è trattato correttamente da modelli e grafici"
    ],
    correct: [2],
    exp: "Il factor definisce i livelli ammessi e il loro ordine, così i modelli statistici e ggplot2 li trattano come categorie (non come testo libero), con codifiche corrette."
  },
  {
    id: "u08030", topic: "Installazione pacchetti",
    q: "Come si installa un pacchetto in R?",
    opts: [
      "install.packages(\"nome\")",
      "pip install nome",
      "library.install(nome)"
    ],
    correct: [0],
    exp: "install.packages('ggplot2') scarica e installa un pacchetto da CRAN. Poi lo si carica nella sessione con library(ggplot2)."
  },
  {
    id: "u08031", topic: "library()",
    q: "library(dplyr) serve a:",
    opts: [
      "Installare il pacchetto da repository prima del caricamento",
      "Caricare il pacchetto già installato nella sessione corrente",
      "Rimuovere il pacchetto installato dalla libreria locale"
    ],
    correct: [1],
    exp: "library() carica in memoria un pacchetto già installato, rendendone disponibili le funzioni. Va eseguita a ogni nuova sessione in cui serve il pacchetto."
  },
  {
    id: "u08032", topic: "mutate()",
    q: "In dplyr, mutate() serve a:",
    opts: [
      "Ordinare le righe in base a una colonna",
      "Filtrare le righe secondo una condizione",
      "Creare o modificare colonne del data frame"
    ],
    correct: [2],
    exp: "mutate() aggiunge nuove colonne o trasforma quelle esistenti (es. mutate(df, prezzo_iva = prezzo*1.22)), mantenendo tutte le righe."
  },
  {
    id: "u08033", topic: "arrange()",
    q: "arrange() in dplyr:",
    opts: [
      "Ordina le righe in base a una o più colonne",
      "Rinomina le colonne",
      "Rimuove duplicati mantenendo una sola occorrenza per valore"
    ],
    correct: [0],
    exp: "arrange(df, colonna) ordina le righe in modo crescente; arrange(df, desc(colonna)) in modo decrescente."
  },
  {
    id: "u08034", topic: "Join",
    q: "In dplyr, inner_join() unisce due data frame tenendo:",
    opts: [
      "Solo quelle senza corrispondenza",
      "Solo le righe con corrispondenza in entrambi",
      "Solo il primo data frame"
    ],
    correct: [1],
    exp: "inner_join() mantiene solo le righe con chiave presente in entrambe le tabelle, come la INNER JOIN di SQL. Esistono anche left_join, right_join, full_join."
  },
  {
    id: "u08035", topic: "Riproducibilità",
    q: "set.seed() in R serve a:",
    opts: [
      "Fissare il numero di decimali",
      "Impostare la cartella di lavoro",
      "Rendere riproducibili i risultati casuali"
    ],
    correct: [2],
    exp: "set.seed(n) inizializza il generatore di numeri casuali: con lo stesso seme si ottengono le stesse sequenze casuali, rendendo l'analisi riproducibile."
  },
  {
    id: "u08036", topic: "Coercion",
    q: "c(1, 'a', TRUE) in R diventa un vettore di tipo:",
    opts: [
      "character (tutto convertito a stringa)",
      "numeric, mantenendo solo valori numerici omogenei nel vettore",
      "logical, convertendo tutti gli elementi in TRUE/FALSE"
    ],
    correct: [0],
    exp: "Un vettore ammette un solo tipo: R applica la coercizione al tipo più 'generale'. Con una stringa presente, tutto diventa character → c('1','a','TRUE')."
  },
  {
    id: "u08037", topic: "head/tail",
    q: "head(df) mostra:",
    opts: [
      "Il nome delle colonne",
      "Le prime righe del data frame",
      "Il numero di righe"
    ],
    correct: [1],
    exp: "head(df) mostra le prime 6 righe (di default); tail(df) le ultime. Utili per ispezionare rapidamente i dati."
  },
  {
    id: "u08038", topic: "nrow/ncol",
    q: "nrow(df) restituisce:",
    opts: [
      "Il nome delle righe",
      "Il numero di colonne",
      "Il numero di righe"
    ],
    correct: [2],
    exp: "nrow() conta le righe, ncol() le colonne. dim() restituisce entrambe. Servono a conoscere le dimensioni di un data frame."
  },
  {
    id: "u08039", topic: "Indicizzazione",
    q: "In R, df[df$eta > 30, ] seleziona:",
    opts: [
      "Le righe con età maggiore di 30",
      "Le prime 30 righe",
      "Un valore singolo"
    ],
    correct: [0],
    exp: "La sintassi df[condizione_sulle_righe, ] filtra le righe: qui tiene le righe dove la colonna eta supera 30. La virgola con spazio dopo indica 'tutte le colonne'."
  },
  {
    id: "u08040", topic: "$",
    q: "L'operatore $ in R (es. df$nome) serve a:",
    opts: [
      "Moltiplicare due colonne",
      "Accedere a una colonna di un data frame per nome",
      "Definire una funzione"
    ],
    correct: [1],
    exp: "df$colonna estrae quella colonna come vettore. È il modo più diretto per riferirsi a una variabile di un data frame o a un elemento di una lista."
  },
  {
    id: "u08041", topic: "is.na()",
    q: "is.na(x) restituisce:",
    opts: [
      "Il numero di elementi",
      "La media di x",
      "TRUE dove ci sono valori mancanti"
    ],
    correct: [2],
    exp: "is.na(x) dà un vettore logico con TRUE nelle posizioni con NA. Utile per contare (sum(is.na(x))) o rimuovere i mancanti."
  },
  {
    id: "u08042", topic: "Grafici a barre",
    q: "Per contare le occorrenze di una categoria in ggplot2 si usa spesso:",
    opts: [
      "geom_bar()",
      "geom_point",
      "geom_smooth"
    ],
    correct: [0],
    exp: "geom_bar() conta e rappresenta le frequenze delle categorie. Per barre con altezze già calcolate si usa geom_col()."
  },
  {
    id: "u08043", topic: "Correlazione in R",
    q: "cor(x, y) in R calcola:",
    opts: [
      "La covarianza soltanto",
      "Il coefficiente di correlazione tra x e y",
      "La media di x e y"
    ],
    correct: [1],
    exp: "cor() restituisce il coefficiente di correlazione (Pearson di default), tra -1 e 1. cov() dà la covarianza, lm() stima la regressione."
  },
  {
    id: "u08044", topic: "Tabelle di frequenza",
    q: "table(x) in R produce:",
    opts: [
      "La media dei valori presenti nel vettore",
      "Un data frame vuoto con le stesse colonne",
      "Il conteggio delle occorrenze di ogni valore"
    ],
    correct: [2],
    exp: "table() crea una tabella di frequenza contando quante volte compare ciascun valore/categoria. Con due argomenti crea una tabella di contingenza."
  },
  {
    id: "u08045", topic: "Ambiente di lavoro",
    q: "getwd() in R restituisce:",
    opts: [
      "La cartella di lavoro corrente",
      "La lista dei pacchetti",
      "La memoria libera"
    ],
    correct: [0],
    exp: "getwd() ('get working directory') mostra la cartella corrente; setwd() la cambia. Da lì R cerca e salva i file con percorsi relativi."
  },
  {
    id: "u08046", topic: "Funzioni utente",
    q: "Come si definisce una funzione in R?",
    opts: [
      "function nome(x) {}",
      "nome <- function(x) { ... }",
      "func nome = x =>"
    ],
    correct: [1],
    exp: "In R le funzioni si assegnano: quadr <- function(x){ x^2 }. Si richiamano con quadr(4). L'ultima espressione valutata è il valore di ritorno (o si usa return())."
  },
  {
    id: "u08047", topic: "Sequenze",
    q: "1:5 in R genera:",
    opts: [
      "Una divisione",
      "Solo il numero 15",
      "Il vettore 1 2 3 4 5"
    ],
    correct: [2],
    exp: "L'operatore : crea una sequenza di interi: 1:5 → 1 2 3 4 5. Per passi diversi si usa seq(1, 10, by=2)."
  },
  {
    id: "u08048", topic: "Missing data",
    q: "na.omit(df) in R:",
    opts: [
      "Rimuove le righe che contengono valori mancanti",
      "Sostituisce gli NA con 0",
      "Ignora l'operazione"
    ],
    correct: [0],
    exp: "na.omit() elimina le righe con almeno un NA. Attenzione: può ridurre molto i dati; a volte è meglio imputare i mancanti invece di rimuoverli."
  },
  {
    id: "u08049", topic: "Facet",
    q: "In ggplot2, facet_wrap() serve a:",
    opts: [
      "Modificare solo la presentazione grafica dei risultati",
      "Creare più sotto-grafici, uno per categoria",
      "Aggiungere un titolo"
    ],
    correct: [1],
    exp: "facet_wrap(~categoria) suddivide il grafico in pannelli separati per ciascun livello di una variabile: utile per confrontare i sottogruppi affiancati."
  },
  {
    id: "u08050", topic: "Salvataggio grafici",
    q: "ggsave() in ggplot2:",
    opts: [
      "Installa un pacchetto",
      "Calcola statistiche",
      "Salva l'ultimo grafico su un file immagine"
    ],
    correct: [2],
    exp: "ggsave('grafico.png') esporta il grafico corrente in un file (PNG, PDF, ecc.), con dimensioni e risoluzione configurabili."
  },
  {
    id: "u08051", topic: "Deviazione standard",
    q: "sd(x) in R calcola:",
    opts: [
      "La deviazione standard campionaria",
      "La media",
      "La varianza al quadrato"
    ],
    correct: [0],
    exp: "sd() restituisce la deviazione standard (radice della varianza var()). Entrambe usano il denominatore n-1 (campionario)."
  },
  {
    id: "u08052", topic: "quantile()",
    q: "quantile(x) in R restituisce:",
    opts: [
      "La sola media, ignorando dispersione, dipendenze o struttura dei dati",
      "I quantili della distribuzione",
      "Un istogramma per mostrare la distribuzione dei valori numerici"
    ],
    correct: [1],
    exp: "quantile() calcola i quantili: di default minimo, primo quartile, mediana, terzo quartile, massimo. Si possono richiedere percentili specifici con l'argomento probs."
  },
  {
    id: "u08053", topic: "ifelse()",
    q: "ifelse(x > 0, 'pos', 'neg') in R:",
    opts: [
      "Genera una visualizzazione invece di restituire valori trasformati",
      "Valuta un solo valore invece di operare elemento per elemento",
      "Restituisce 'pos'/'neg' elemento per elemento in modo vettorializzato"
    ],
    correct: [2],
    exp: "ifelse() è la versione vettorializzata dell'if: valuta la condizione su ogni elemento e restituisce un vettore con i valori corrispondenti. Comoda per creare variabili derivate."
  },
  {
    id: "u08054", topic: "paste()",
    q: "paste('a', 'b') in R restituisce:",
    opts: [
      "'a b' (concatenazione con spazio)",
      "c('a','b')",
      "Errore"
    ],
    correct: [0],
    exp: "paste() concatena stringhe separandole con uno spazio di default. paste0() concatena senza separatore. L'argomento sep cambia il separatore."
  },
  {
    id: "u08055", topic: "length()",
    q: "length(x) su un vettore restituisce:",
    opts: [
      "La somma degli elementi",
      "Il numero di elementi",
      "Il tipo del vettore"
    ],
    correct: [1],
    exp: "length() conta gli elementi di un vettore o di una lista. Per i data frame length() dà il numero di colonne (usare nrow/ncol per le dimensioni)."
  },
  {
    id: "u08056", topic: "Visualizzazione linee",
    q: "geom_line() è adatto a rappresentare:",
    opts: [
      "Una matrice di correlazione",
      "La distribuzione di frequenza",
      "L'andamento di una variabile nel tempo o su una sequenza ordinata"
    ],
    correct: [2],
    exp: "geom_line() collega i punti con una linea, ideale per serie temporali o relazioni ordinate. Per categorie discrete si usano barre."
  },
  {
    id: "u08057", topic: "class()",
    q: "class(x) in R restituisce:",
    opts: [
      "Il tipo/classe dell'oggetto",
      "Il numero di righe",
      "Il primo elemento"
    ],
    correct: [0],
    exp: "class() indica la classe di un oggetto (numeric, character, factor, data.frame, ...). Utile per capire con che tipo si sta lavorando."
  },
  {
    id: "u08058", topic: "Conversione tipi",
    q: "as.numeric('3.14') in R restituisce:",
    opts: [
      "La stringa '3.14'",
      "Il numero 3.14",
      "Errore"
    ],
    correct: [1],
    exp: "as.numeric() converte in numero: as.numeric('3.14') → 3.14. Se la stringa non è convertibile restituisce NA con un warning."
  },
  {
    id: "u08059", topic: "Riepilogo per gruppo",
    q: "Qual è l'equivalente R del GROUP BY di SQL?",
    opts: [
      "arrange, che riordina righe senza riassumere gruppi",
      "select, che sceglie colonne senza calcolare aggregazioni",
      "group_by() seguito da summarise() in dplyr"
    ],
    correct: [2],
    exp: "group_by() + summarise() replica il GROUP BY con aggregazioni: raggruppa e calcola statistiche per gruppo. filter/select agiscono su righe/colonne, non aggregano."
  },
  {
    id: "u08060", topic: "Vettori logici",
    q: "sum(c(TRUE, FALSE, TRUE)) in R vale:",
    opts: [
      "2",
      "0",
      "TRUE"
    ],
    correct: [0],
    exp: "In R TRUE vale 1 e FALSE vale 0: sommandoli si contano i TRUE → 2. È un modo comune per contare quante osservazioni soddisfano una condizione."
  },
  {
    id: "u08061", topic: "Grafici: tema",
    q: "In ggplot2, theme_minimal() cambia:",
    opts: [
      "Il tipo di modello",
      "L'aspetto grafico",
      "Le variabili sugli assi"
    ],
    correct: [1],
    exp: "I theme_*() controllano l'estetica non legata ai dati: sfondo, griglie, font. theme_minimal() dà un look pulito. Non alterano i dati né le mappature aes."
  },
  {
    id: "u08062", topic: "Rinominare",
    q: "rename() in dplyr serve a:",
    opts: [
      "Filtrare le righe secondo una condizione",
      "Modificare i valori contenuti nelle colonne",
      "Cambiare il nome delle colonne"
    ],
    correct: [2],
    exp: "rename(df, nuovo = vecchio) rinomina le colonne mantenendo i dati. È diverso da mutate(), che crea o trasforma i valori."
  },
  {
    id: "u08063", topic: "distinct()",
    q: "distinct() in dplyr:",
    opts: [
      "Rimuove le righe duplicate",
      "Conta i valori",
      "Somma le colonne"
    ],
    correct: [0],
    exp: "distinct() restituisce le righe uniche, eliminando i duplicati. Si può limitare a certe colonne per definire l'unicità."
  },
  {
    id: "u08064", topic: "Grafico densità",
    q: "geom_density() rappresenta:",
    opts: [
      "Le categorie discrete di una variabile qualitativa",
      "Una stima liscia della distribuzione di una variabile continua",
      "Una serie temporale disegnata come funzione a gradini"
    ],
    correct: [1],
    exp: "geom_density() disegna la curva di densità (una versione 'liscia' dell'istogramma) che stima la distribuzione di probabilità di una variabile continua."
  },
  {
    id: "u08065", topic: "pivot",
    q: "In tidyr, pivot_longer() trasforma i dati:",
    opts: [
      "Rimuove righe dal dataset invece di trasformare o calcolare valori",
      "Da lungo a largo",
      "Da formato largo a formato lungo"
    ],
    correct: [2],
    exp: "pivot_longer() 'allunga' i dati portando più colonne in coppie chiave-valore (formato tidy). pivot_wider() fa l'opposto, allargando."
  },
  {
    id: "u08066", topic: "Tidy data",
    q: "Nel concetto di 'tidy data', ogni riga rappresenta:",
    opts: [
      "Un'osservazione, con ogni colonna una variabile",
      "Una variabile, con ogni colonna un'osservazione distinta",
      "Un raggruppamento di più tabelle correlate tra loro"
    ],
    correct: [0],
    exp: "Nei tidy data: ogni variabile è una colonna, ogni osservazione una riga, ogni valore una cella. È il formato ideale per l'analisi con dplyr/ggplot2."
  },
  {
    id: "u08067", topic: "round()",
    q: "round(3.14159, 2) restituisce:",
    opts: [
      "3.1416",
      "3.14",
      "3.142"
    ],
    correct: [1],
    exp: "round(x, n) arrotonda a n cifre decimali: round(3.14159, 2) → 3.14. Esistono anche floor() (per difetto) e ceiling() (per eccesso)."
  },
  {
    id: "u08068", topic: "seq()",
    q: "seq(0, 10, by = 2) genera:",
    opts: [
      "2 4 6 8 10",
      "0 1 2... 10",
      "0 2 4 6 8 10"
    ],
    correct: [2],
    exp: "seq(da, a, by=passo) crea una sequenza con passo definito: seq(0,10,by=2) → 0 2 4 6 8 10. Più flessibile dell'operatore :."
  },
  {
    id: "u08069", topic: "which()",
    q: "which(x > 5) restituisce:",
    opts: [
      "Le posizioni degli elementi che soddisfano la condizione",
      "I valori maggiori di 5 invece delle loro posizioni",
      "Un vettore logico TRUE/FALSE invece delle posizioni degli elementi"
    ],
    correct: [0],
    exp: "which() dà gli INDICI in cui la condizione è vera (non i valori). Es: which(c(3,7,2)>5) → 2. Utile per localizzare elementi."
  },
  {
    id: "u08070", topic: "Fattori ordinati",
    q: "Un factor ordinato (ordered) è utile quando:",
    opts: [
      "Le categorie non hanno ordine",
      "Le categorie hanno un ordine naturale",
      "Non ci sono categorie"
    ],
    correct: [1],
    exp: "Il factor ordinato mantiene un ordine tra i livelli (scala ordinale), permettendo confronti come < e >. Utile per soddisfazione, classi di età, ecc."
  },
  {
    id: "u08071", topic: "Grafici: colore",
    q: "In aes(), mappare color a una variabile categorica:",
    opts: [
      "Non modifica né l'output né lo stato dell'oggetto analizzato",
      "Ordina i dati per una colonna o un timestamp senza cambiarne il contenuto",
      "Colora i punti/linee in base ai livelli di quella variabile"
    ],
    correct: [2],
    exp: "aes(color = categoria) assegna un colore diverso a ciascun livello, con legenda automatica: rende visibili i gruppi nel grafico."
  },
  {
    id: "u08072", topic: "NA vs NULL",
    q: "Qual è la differenza tra NA e NULL in R?",
    opts: [
      "NA è un valore mancante; NULL è l'assenza di oggetto",
      "Hanno comportamento e risultato identici nello stesso contesto operativo",
      "NULL è un numero, NA una stringa"
    ],
    correct: [0],
    exp: "NA rappresenta un dato mancante DENTRO una struttura (occupa una posizione); NULL è l'oggetto vuoto/inesistente e 'sparisce' se inserito in un vettore."
  },
  {
    id: "u08073", topic: "lm summary",
    q: "In summary(lm(...)), il valore 'Multiple R-squared' indica:",
    opts: [
      "La pendenza della retta",
      "La quota di varianza della risposta spiegata dal modello",
      "Il numero di osservazioni disponibili per stimare o valutare il modello"
    ],
    correct: [1],
    exp: "L'R² del summary di lm() esprime la frazione di variabilità di y spiegata dai predittori. L'Adjusted R² penalizza i predittori inutili."
  },
  {
    id: "u08074", topic: "Predizione",
    q: "predict(modello, newdata) in R serve a:",
    opts: [
      "Disegnare un grafico",
      "Riaddestrare il modello",
      "Ottenere previsioni del modello su nuovi dati"
    ],
    correct: [2],
    exp: "predict() applica un modello stimato (lm, glm, ...) a nuovi dati per ottenere i valori previsti. È il passo di inferenza/predizione dopo l'addestramento."
  },
  {
    id: "u08075", topic: "Operatori logici",
    q: "In R, l'operatore AND elemento-per-elemento è:",
    opts: [
      "&",
      "and",
      "%and%"
    ],
    correct: [0],
    exp: "& è l'AND vettorializzato (opera su ogni elemento); && è l'AND scalare (solo primo elemento, usato nel flusso di controllo). Analogamente | e ||."
  },
  {
    id: "u08076", topic: "Grafici: aggiungere layer",
    q: "In ggplot2 i componenti si combinano con:",
    opts: [
      "L'operatore %>%",
      "L'operatore +",
      "L'operatore <-"
    ],
    correct: [1],
    exp: "In ggplot2 i layer si sommano con +: ggplot(df, aes(x,y)) + geom_point() + theme_minimal(). Il pipe %>% è invece di dplyr per le trasformazioni dati."
  },
  {
    id: "u08077", topic: "factor levels",
    q: "levels(f) su un factor restituisce:",
    opts: [
      "Il numero di righe",
      "I valori numerici",
      "I livelli del factor"
    ],
    correct: [2],
    exp: "levels() elenca le categorie ammesse di un factor. L'ordine dei livelli influenza modelli e grafici (es. la categoria di riferimento nella regressione)."
  },
  {
    id: "u08078", topic: "apply su matrice",
    q: "apply(m, 1, sum) su una matrice calcola:",
    opts: [
      "La somma di ogni riga",
      "La somma di ogni colonna",
      "La somma totale"
    ],
    correct: [0],
    exp: "apply(m, MARGIN, fun): MARGIN=1 opera per riga, MARGIN=2 per colonna. apply(m,1,sum) somma ciascuna riga; con 2 sommerebbe le colonne."
  },
  {
    id: "u08079", topic: "Reshape",
    q: "pivot_wider() è utile quando si vuole:",
    opts: [
      "Allungare i dati portando le colonne in righe",
      "Trasformare valori di una colonna in nuove colonne",
      "Ordinare il data frame in base alla data"
    ],
    correct: [1],
    exp: "pivot_wider() 'allarga' i dati: prende una colonna di chiavi e una di valori e le distribuisce in più colonne. Opposto di pivot_longer()."
  },
  {
    id: "u08080", topic: "Random",
    q: "rnorm(10) in R genera:",
    opts: [
      "Un istogramma per mostrare la distribuzione dei valori numerici",
      "Un vettore di zeri",
      "10 numeri casuali da una distribuzione normale"
    ],
    correct: [2],
    exp: "rnorm(n) estrae n valori casuali dalla normale (media 0, sd 1 di default). Esistono runif (uniforme), rbinom (binomiale), ecc."
  },
  {
    id: "u08081", topic: "Aggregazione",
    q: "mean(df$prezzo) e summarise(df, mean(prezzo)) danno:",
    opts: [
      "Lo stesso valore, con sintassi diverse",
      "Valori diversi",
      "Un errore il secondo"
    ],
    correct: [0],
    exp: "Entrambi calcolano la media della colonna prezzo: mean() direttamente sul vettore, summarise() nel flusso dplyr (utile se combinato con group_by)."
  },
  {
    id: "u08082", topic: "Grafici: scala",
    q: "scale_y_log10() in ggplot2:",
    opts: [
      "Cambia la codifica cromatica senza modificare dati o modello",
      "Trasforma l'asse y in scala logaritmica",
      "Ordina i dati per una colonna o un timestamp senza cambiarne il contenuto"
    ],
    correct: [1],
    exp: "scale_y_log10() applica una scala logaritmica all'asse y: utile quando i valori variano su ordini di grandezza molto diversi."
  },
  {
    id: "u08083", topic: "unique()",
    q: "unique(x) restituisce:",
    opts: [
      "Il primo valore",
      "Il numero di valori",
      "I valori distinti di x"
    ],
    correct: [2],
    exp: "unique() elimina i duplicati restituendo i valori distinti. Per contarli si usa length(unique(x))."
  },
  {
    id: "u08084", topic: "Import Excel",
    q: "Per leggere un file Excel in R si usa tipicamente:",
    opts: [
      "Il pacchetto readxl (read_excel())",
      "read.csv()",
      "install.packages"
    ],
    correct: [0],
    exp: "read_excel() del pacchetto readxl importa fogli .xlsx/.xls in un data frame. read.csv() è invece per i file CSV di testo."
  },
  {
    id: "u08085", topic: "Concatenare data frame",
    q: "bind_rows() in dplyr:",
    opts: [
      "Affianca le colonne",
      "Impila due data frame uno sotto l'altro",
      "Filtra righe già presenti in base a una condizione booleana"
    ],
    correct: [1],
    exp: "bind_rows() unisce i data frame per riga (uno sotto l'altro), come UNION. bind_cols() li affianca per colonna."
  },
  {
    id: "u08086", topic: "case_when",
    q: "case_when() in dplyr è utile per:",
    opts: [
      "Unire due data frame su una chiave comune",
      "Contare le righe che soddisfano una condizione",
      "Creare una variabile con più condizioni"
    ],
    correct: [2],
    exp: "case_when() gestisce condizioni multiple in modo leggibile, assegnando valori diversi a seconda dei casi: è un if/else annidato vettorializzato."
  },
  {
    id: "u08087", topic: "prop.table",
    q: "prop.table(table(x)) restituisce:",
    opts: [
      "Le proporzioni (frequenze relative) di ciascuna categoria",
      "I conteggi assoluti (non le proporzioni) di ciascuna categoria",
      "La somma dei valori appartenenti a ogni categoria"
    ],
    correct: [0],
    exp: "table() dà i conteggi; prop.table() li trasforma in proporzioni sul totale (frequenze relative), utili per confronti percentuali."
  },
  {
    id: "u08088", topic: "Visualizzazione correlazione",
    q: "Un grafico adatto a mostrare la relazione tra due variabili numeriche in R è:",
    opts: [
      "Il grafico a torta",
      "Lo scatter plot",
      "Il boxplot di una sola variabile"
    ],
    correct: [1],
    exp: "Lo scatter plot (geom_point) visualizza la relazione tra due variabili quantitative. Aggiungendo geom_smooth() si può sovrapporre una linea di tendenza."
  },
  {
    id: "u08089", topic: "Ambiente",
    q: "ls() in R elenca:",
    opts: [
      "I pacchetti installati",
      "I file della cartella",
      "Gli oggetti presenti nell'ambiente di lavoro"
    ],
    correct: [2],
    exp: "ls() mostra i nomi degli oggetti (variabili, funzioni) creati nella sessione. rm() li rimuove; rm(list=ls()) pulisce tutto."
  },
  {
    id: "u08090", topic: "Grafici: regressione",
    q: "geom_smooth(method='lm') in ggplot2 aggiunge:",
    opts: [
      "Una retta di regressione lineare con banda di confidenza",
      "Un istogramma per mostrare la distribuzione dei valori numerici",
      "Solo i punti del grafico senza modello di regressione"
    ],
    correct: [0],
    exp: "geom_smooth(method='lm') sovrappone la retta di regressione stimata e la sua banda di confidenza. Con 'loess' traccia invece una curva liscia non lineare."
  },
  {
    id: "u08091", topic: "Tipi numerici",
    q: "In R, la differenza tra integer e double è:",
    opts: [
      "integer è testo",
      "integer sono interi, double numeri in virgola mobile",
      "double è logico"
    ],
    correct: [1],
    exp: "double memorizza numeri con decimali (default per i numeri in R); integer memorizza interi (si forza con L, es. 5L). Entrambi sono numeric."
  },
  {
    id: "u08092", topic: "Funzioni anonime",
    q: "In R, function(x) x^2 è:",
    opts: [
      "Un vettore",
      "Un errore",
      "Una funzione anonima"
    ],
    correct: [2],
    exp: "È una funzione anonima, spesso passata a sapply/map: sapply(1:3, function(x) x^2) → 1 4 9. R recente ammette anche la sintassi \\(x) x^2."
  },
  {
    id: "u08093", topic: "Missing: sostituzione",
    q: "Per sostituire gli NA con la media in una colonna si può:",
    opts: [
      "Assegnare la media agli elementi dove is.na è TRUE",
      "Usare ggplot, che costruisce grafici dai dati",
      "Usare setwd, che cambia la directory di lavoro"
    ],
    correct: [0],
    exp: "Es: x[is.na(x)] <- mean(x, na.rm=TRUE) imputa i mancanti con la media. È una strategia semplice (ne esistono di più sofisticate)."
  },
  {
    id: "u08094", topic: "Grafici: dimensione",
    q: "In aes(size = popolazione), la dimensione dei punti:",
    opts: [
      "Cambia la codifica cromatica senza modificare dati o modello",
      "Varia in base al valore della variabile popolazione",
      "Non modifica né l'output né lo stato dell'oggetto analizzato"
    ],
    correct: [1],
    exp: "Mappare size a una variabile crea una 'bubble chart': punti più grandi per valori maggiori, aggiungendo una terza dimensione informativa al grafico."
  },
  {
    id: "u08095", topic: "Struttura condizionale",
    q: "In R, l'if classico (non vettorializzato) valuta:",
    opts: [
      "tutti i rami",
      "Un intero vettore elemento per elemento",
      "Una singola condizione logica"
    ],
    correct: [2],
    exp: "if() valuta UNA condizione scalare: if(x>0){...}else{...}. Per condizioni su interi vettori si usa ifelse(), vettorializzato."
  },
  {
    id: "u08096", topic: "Reimportazione",
    q: "str_detect() del pacchetto stringr serve a:",
    opts: [
      "Verificare se una stringa contiene un pattern",
      "Calcolare la lunghezza media delle stringhe",
      "Sostituire un pattern con un altro nelle stringhe"
    ],
    correct: [0],
    exp: "str_detect(x, pattern) restituisce TRUE/FALSE se il pattern (anche regex) è presente nelle stringhe. stringr offre funzioni coerenti per il testo."
  },
  {
    id: "u08097", topic: "Aggregate base",
    q: "aggregate(prezzo ~ categoria, df, mean) calcola:",
    opts: [
      "Il numero di categorie distinte presenti nei dati",
      "La media del prezzo per ciascuna categoria",
      "La media complessiva di tutti i prezzi insieme"
    ],
    correct: [1],
    exp: "aggregate() in R base raggruppa per categoria e applica una funzione (qui mean) alla variabile: equivale a group_by()+summarise() di dplyr."
  },
  {
    id: "u08098", topic: "Salvare dati",
    q: "write.csv(df, 'out.csv') in R:",
    opts: [
      "Crea un grafico",
      "Legge un file",
      "Salva il data frame in un file CSV"
    ],
    correct: [2],
    exp: "write.csv() esporta un data frame in un file CSV. saveRDS() salva invece un oggetto R in formato binario, ricaricabile con readRDS()."
  },
  {
    id: "u08099", topic: "Vettorializzazione vs loop",
    q: "Perché in R si preferiscono le operazioni vettorializzate ai cicli for?",
    opts: [
      "Sono più concise e spesso molto più veloci",
      "Sono errate anche quando rispettano tipi, indice e contesto",
      "Non esistono i cicli in R"
    ],
    correct: [0],
    exp: "Le operazioni vettorializzate (e le funzioni apply/map) sono più leggibili e ottimizzate internamente, quindi in genere più veloci dei cicli for espliciti in R."
  },
  {
    id: "u08100", topic: "Pipeline analisi",
    q: "Un tipico flusso di analisi dati in R con tidyverse è:",
    opts: [
      "Pulire (tidy) → importare → trasformare (dplyr) → visualizzare (ggplot2) → modellare",
      "Importare → pulire (tidy) → trasformare (dplyr) → visualizzare (ggplot2) → modellare",
      "Modellare → importare → pulire (tidy) → trasformare (dplyr) → visualizzare (ggplot2)"
    ],
    correct: [1],
    exp: "Il flusso tidyverse: import (readr) → tidy (tidyr) → transform (dplyr) → visualize (ggplot2) → model. È un ciclo iterativo di esplorazione e analisi dei dati."
  },
  // === AGGIUNGI NUOVE DOMANDE R QUI ===
]);
