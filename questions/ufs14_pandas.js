/* ============================================================
   MATERIA: Pandas  (UFS14 - DataFrames, manipolazione e analisi dati)
   100 domande. (Camuffatura lunghezze: pass finale.)
   ============================================================ */
registerSubject("Pandas", [
  {
    id: "u14001", topic: "Strutture dati",
    q: "Cos'è una Series in pandas?",
    opts: [
      "Un array unidimensionale etichettato (una colonna)",
      "Una tabella bidimensionale con righe e colonne",
      "Un dizionario che associa nomi di colonna ai tipi"
    ],
    correct: [0],
    exp: "La Series è la struttura 1D di pandas: valori con un indice (etichette). Una colonna di un DataFrame è una Series."
  },
  {
    id: "u14002", topic: "Strutture dati",
    q: "Cos'è un DataFrame in pandas?",
    opts: [
      "Una tabella 2D con righe e colonne etichettate",
      "Un array unidimensionale di valori (una sola colonna)",
      "Un dizionario semplice di coppie chiave-valore"
    ],
    correct: [0],
    exp: "Il DataFrame è la struttura tabellare 2D di pandas: colonne (Series) di tipi eventualmente diversi, con indice di riga. È il cuore dell'analisi dati in Python."
  },
  {
    id: "u14003", topic: "Import",
    q: "Quale funzione legge un CSV in un DataFrame?",
    opts: [
      "pd.read_csv()",
      "pd.import_csv()",
      "pd.open()"
    ],
    correct: [0],
    exp: "pd.read_csv('file.csv') importa un CSV in un DataFrame, con molti argomenti (sep, header, index_col, dtype, parse_dates)."
  },
  {
    id: "u14004", topic: "Esplorazione",
    q: "df.head() mostra:",
    opts: [
      "Le prime righe del DataFrame",
      "Solo i nomi delle colonne",
      "Il numero di righe"
    ],
    correct: [0],
    exp: "df.head(n) mostra le prime n righe (default 5); df.tail(n) le ultime. Utili per un primo sguardo ai dati."
  },
  {
    id: "u14005", topic: "Esplorazione",
    q: "df.info() fornisce:",
    opts: [
      "Tipi delle colonne, valori non nulli e uso di memoria",
      "La media e la deviazione standard di ogni colonna",
      "Il numero totale di righe e nient'altro"
    ],
    correct: [0],
    exp: "df.info() riepiloga struttura: numero di righe, colonne, dtype, conteggio dei non-null e memoria. Ottima per individuare valori mancanti e tipi errati."
  },
  {
    id: "u14006", topic: "Statistiche",
    q: "df.describe() restituisce:",
    opts: [
      "Statistiche descrittive delle colonne numeriche",
      "Il tipo di ogni colonna",
      "Un istogramma per mostrare la distribuzione dei valori numerici"
    ],
    correct: [0],
    exp: "df.describe() dà conteggio, media, deviazione standard, min, quartili e max per le colonne numeriche. Con include='all' considera anche quelle categoriche."
  },
  {
    id: "u14007", topic: "Selezione",
    q: "Per selezionare una colonna 'eta' si scrive:",
    opts: [
      "df['eta']",
      "df.eta()",
      "df.get(eta)"
    ],
    correct: [0],
    exp: "df['eta'] (o df.eta se il nome è un identificatore valido) restituisce la colonna come Series. Per più colonne: df[['eta','nome']]."
  },
  {
    id: "u14008", topic: "loc vs iloc",
    q: "Qual è la differenza tra .loc e .iloc?",
    opts: [
      ".loc usa etichette, .iloc usa posizioni intere",
      "Hanno comportamento e risultato identici nello stesso contesto operativo",
      ".iloc usa etichette e .loc posizioni, invertendo i due metodi"
    ],
    correct: [0],
    exp: ".loc seleziona per ETICHETTA (nome indice/colonna), .iloc per POSIZIONE numerica (0,1,2...). Es: df.loc[0,'eta'] vs df.iloc[0,2]."
  },
  {
    id: "u14009", topic: "Filtri",
    q: "df[df['eta'] > 30] restituisce:",
    opts: [
      "Le righe con età maggiore di 30",
      "Le prime 30 righe del DataFrame",
      "Il numero di righe con età maggiore di 30"
    ],
    correct: [0],
    exp: "Il boolean indexing filtra le righe che soddisfano la condizione: df['eta']>30 crea una maschera booleana usata per selezionare le righe corrispondenti."
  },
  {
    id: "u14010", topic: "Filtri multipli",
    q: "Per combinare due condizioni in un filtro pandas si usa:",
    opts: [
      "& e | con le parentesi attorno a ciascuna condizione",
      "and e or di Python applicati direttamente alle Series booleane",
      "+ e - usati per combinare maschere booleane"
    ],
    correct: [0],
    exp: "In pandas si usano gli operatori bitwise & (and) e | (or), con parentesi: df[(df.a>1) & (df.b<5)]. and/or di Python non funzionano su Series."
  },
  {
    id: "u14011", topic: "groupby",
    q: "df.groupby('categoria')['prezzo'].mean() calcola:",
    opts: [
      "La media del prezzo per ciascuna categoria",
      "La media calcolata su tutte le righe senza distinguere gruppi",
      "La somma complessiva dei valori senza separare per categoria"
    ],
    correct: [0],
    exp: "groupby raggruppa per la colonna indicata e applica l'aggregazione (qui mean) alla colonna scelta: equivale al GROUP BY di SQL."
  },
  {
    id: "u14012", topic: "Aggregazioni",
    q: "df.groupby('reparto').agg({'stipendio':'mean','id':'count'}):",
    opts: [
      "Applica aggregazioni diverse a colonne diverse per gruppo",
      "Rimuove i gruppi creati invece di calcolare riepiloghi per gruppo",
      "Ordina le righe secondo una chiave, senza filtrare o aggregare"
    ],
    correct: [0],
    exp: ".agg() con un dizionario applica funzioni diverse a colonne diverse: qui media dello stipendio e conteggio degli id per ciascun reparto."
  },
  {
    id: "u14013", topic: "Merge",
    q: "pd.merge(df1, df2, on='id', how='inner'):",
    opts: [
      "Unisce due DataFrame tenendo solo le chiavi presenti in entrambi",
      "Rimuove colonne dal DataFrame senza modificare le righe selezionate",
      "Ordina i dati per una colonna o un timestamp senza cambiarne il contenuto"
    ],
    correct: [0],
    exp: "merge unisce due DataFrame sulla chiave 'id'. how='inner' tiene solo le corrispondenze; 'left', 'right', 'outer' cambiano quali righe conservare, come nelle JOIN SQL."
  },
  {
    id: "u14014", topic: "Concat",
    q: "pd.concat([df1, df2]) di default:",
    opts: [
      "Impila i DataFrame uno sotto l'altro (per riga)",
      "Li affianca per colonna allineandoli sull'indice",
      "Restituisce solo le righe presenti in entrambi"
    ],
    correct: [0],
    exp: "concat unisce lungo le righe (axis=0) di default, impilando i DataFrame. Con axis=1 li affianca per colonna. merge invece unisce su chiavi."
  },
  {
    id: "u14015", topic: "Valori mancanti",
    q: "df.isna() restituisce:",
    opts: [
      "Una maschera booleana con True dove i valori sono mancanti",
      "Il numero totale di valori mancanti nel DataFrame",
      "Le righe che contengono almeno un valore mancante"
    ],
    correct: [0],
    exp: "df.isna() (o isnull()) dà True nelle celle con NaN. df.isna().sum() conta i mancanti per colonna. Fondamentale nel data cleaning."
  },
  {
    id: "u14016", topic: "Valori mancanti",
    q: "df.fillna(0) serve a:",
    opts: [
      "Sostituire i valori mancanti con 0",
      "Eliminare le righe che contengono valori mancanti",
      "Sostituire i valori mancanti con la media"
    ],
    correct: [0],
    exp: "fillna sostituisce i NaN con un valore (0, la media, il precedente con method='ffill', ecc.). È un'alternativa al rimuovere le righe mancanti."
  },
  {
    id: "u14017", topic: "Valori mancanti",
    q: "df.dropna() di default:",
    opts: [
      "Elimina le righe che contengono almeno un valore mancante",
      "Elimina le colonne sempre",
      "Lascia invariati i valori mancanti senza rimuovere righe o colonne"
    ],
    correct: [0],
    exp: "dropna rimuove le righe con almeno un NaN (axis=0). Con axis=1 rimuove le colonne. Attenzione: può ridurre molto i dati."
  },
  {
    id: "u14018", topic: "Ordinamento",
    q: "df.sort_values('prezzo', ascending=False):",
    opts: [
      "Ordina le righe per prezzo in ordine decrescente",
      "Ordina per indice",
      "Filtra i prezzi secondo una soglia invece di ordinare il risultato"
    ],
    correct: [0],
    exp: "sort_values ordina per i valori di una colonna. ascending=False dà l'ordine decrescente. sort_index() ordina invece per l'indice."
  },
  {
    id: "u14019", topic: "Conteggi",
    q: "df['citta'].value_counts() restituisce:",
    opts: [
      "Il conteggio delle occorrenze di ciascun valore",
      "I valori distinti della colonna in ordine alfabetico",
      "Le prime righe della colonna 'citta'"
    ],
    correct: [0],
    exp: "value_counts() conta quante volte compare ogni valore in una Series, ordinato per frequenza. Con normalize=True dà le proporzioni."
  },
  {
    id: "u14020", topic: "Nuove colonne",
    q: "df['iva'] = df['prezzo'] * 0.22 in pandas:",
    opts: [
      "Crea una nuova colonna calcolata dalle altre (operazione vettorializzata)",
      "Rimuove una colonna esistente invece di crearne una calcolata",
      "Ordina il DataFrame per indice o per valore, lasciando invariata la struttura logica"
    ],
    correct: [0],
    exp: "Assegnare a una nuova etichetta crea o sovrascrive una colonna. Le operazioni sono vettorializzate: si applicano a tutta la colonna senza cicli espliciti."
  },
  {
    id: "u14021", topic: "apply",
    q: "df['nome'].apply(len) applica:",
    opts: [
      "La funzione len a ciascun elemento della colonna",
      "La somma delle lunghezze di tutti i nomi",
      "Un filtro che tiene solo i nomi lunghi"
    ],
    correct: [0],
    exp: "apply esegue una funzione su ogni elemento (o riga/colonna). Utile per trasformazioni personalizzate quando non basta un'operazione vettorializzata pronta."
  },
  {
    id: "u14022", topic: "Stringhe",
    q: "df['nome'].str.upper() serve a:",
    opts: [
      "Trasformare in maiuscolo i valori testuali della colonna",
      "Ordinare le stringhe in ordine alfabetico",
      "Rimuovere gli spazi iniziali e finali dalle stringhe"
    ],
    correct: [0],
    exp: "L'accessor .str offre metodi vettorializzati per il testo: .upper(), .lower(), .contains(), .replace(), .split(). Operano su tutta la Series di stringhe."
  },
  {
    id: "u14023", topic: "Date",
    q: "pd.to_datetime(df['data']) serve a:",
    opts: [
      "Convertire una colonna in tipo datetime",
      "Ordinare il DataFrame in base alla data",
      "Estrarre l'anno da una colonna di date"
    ],
    correct: [0],
    exp: "to_datetime converte stringhe/numeri in datetime, abilitando operazioni temporali (.dt.year, .dt.month, differenze tra date, resampling)."
  },
  {
    id: "u14024", topic: "Datetime accessor",
    q: "df['data'].dt.year estrae:",
    opts: [
      "L'anno da una colonna datetime",
      "Il giorno della settimana da una data",
      "La data formattata come stringa"
    ],
    correct: [0],
    exp: "L'accessor .dt espone componenti temporali: .year, .month, .day, .dayofweek, .hour. Utile per creare feature di calendario da una colonna datetime."
  },
  {
    id: "u14025", topic: "Pivot",
    q: "df.pivot_table(index='regione', columns='anno', values='vendite', aggfunc='sum'):",
    opts: [
      "Crea una tabella riassuntiva con regioni in righe e anni in colonne",
      "Elimina le righe con valori mancanti nelle vendite",
      "Ordina le vendite per regione e per anno"
    ],
    correct: [0],
    exp: "pivot_table riorganizza e aggrega i dati in forma di tabella incrociata (come le tabelle pivot di Excel), applicando una funzione di aggregazione."
  },
  {
    id: "u14026", topic: "Rinominare",
    q: "df.rename(columns={'old':'new'}):",
    opts: [
      "Rinomina le colonne indicate",
      "Ordina le righe",
      "Elimina le colonne"
    ],
    correct: [0],
    exp: "rename cambia i nomi di colonne (o indici) senza toccare i dati. Per applicarlo sul posto si usa inplace=True o si riassegna il risultato."
  },
  {
    id: "u14027", topic: "Drop",
    q: "df.drop('colonna', axis=1):",
    opts: [
      "Rimuove la colonna indicata",
      "Rimuove una riga per default",
      "Rinomina la colonna"
    ],
    correct: [0],
    exp: "drop rimuove etichette: axis=1 per le colonne, axis=0 (default) per le righe. Restituisce un nuovo DataFrame (o inplace=True)."
  },
  {
    id: "u14028", topic: "Indice",
    q: "df.reset_index() serve a:",
    opts: [
      "Riportare l'indice a numeri progressivi 0,1,2... spostando l'indice attuale in colonna",
      "Ordinare le righe in base ai valori dell'indice",
      "Filtrare le righe in base all'indice"
    ],
    correct: [0],
    exp: "reset_index reimposta un indice intero di default; l'indice precedente diventa una colonna (drop=True per scartarlo). Utile dopo groupby o filtri."
  },
  {
    id: "u14029", topic: "set_index",
    q: "df.set_index('id') serve a:",
    opts: [
      "Usare la colonna 'id' come indice di riga",
      "Ordinare le righe in base alla colonna 'id'",
      "Contare i valori distinti nella colonna 'id'"
    ],
    correct: [0],
    exp: "set_index promuove una colonna a indice del DataFrame, utile per allineamenti e ricerche per etichetta con .loc."
  },
  {
    id: "u14030", topic: "Tipi",
    q: "df.dtypes restituisce:",
    opts: [
      "Il tipo di dato di ciascuna colonna",
      "Il numero di righe del DataFrame",
      "La media di ogni colonna numerica"
    ],
    correct: [0],
    exp: "df.dtypes mostra il dtype di ogni colonna (int64, float64, object per stringhe, datetime64, category). Controllarli evita errori (es. numeri letti come testo)."
  },
  {
    id: "u14031", topic: "Conversione tipi",
    q: "df['x'].astype(float) serve a:",
    opts: [
      "Convertire la colonna nel tipo float",
      "Ordinare la colonna in modo crescente",
      "Rimuovere i valori mancanti dalla colonna"
    ],
    correct: [0],
    exp: "astype converte il dtype di una colonna (es. da object a float, da float a int). Fallisce se i valori non sono convertibili; a volte serve pulire prima i dati."
  },
  {
    id: "u14032", topic: "Duplicati",
    q: "df.drop_duplicates() rimuove:",
    opts: [
      "Le righe duplicate",
      "Le colonne duplicate del DataFrame",
      "Le righe che non rispettano lo schema"
    ],
    correct: [0],
    exp: "drop_duplicates elimina le righe identiche (o duplicate su un sottoinsieme di colonne con subset=). df.duplicated() individua invece i duplicati."
  },
  {
    id: "u14033", topic: "Dimensioni",
    q: "df.shape restituisce:",
    opts: [
      "Una tupla (numero di righe, numero di colonne)",
      "Restituisce solo il numero di righe, non la tupla completa",
      "Restituisce solo il numero di colonne, non la tupla completa"
    ],
    correct: [0],
    exp: "df.shape dà (righe, colonne). len(df) dà il numero di righe. È tra i primi controlli sulle dimensioni di un dataset."
  },
  {
    id: "u14034", topic: "Selezione multipla",
    q: "df.loc[df['eta']>30, 'nome'] restituisce:",
    opts: [
      "La colonna 'nome' delle righe con età > 30",
      "Tutte le righe del DataFrame",
      "La media dei nomi delle persone over 30"
    ],
    correct: [0],
    exp: ".loc combina filtro sulle righe (maschera) e selezione delle colonne: qui i nomi delle persone con più di 30 anni."
  },
  {
    id: "u14035", topic: "map",
    q: "df['genere'].map({'M':'Maschio','F':'Femmina'}):",
    opts: [
      "Sostituisce i valori secondo il dizionario di mappatura",
      "Ordina i valori in ordine crescente o decrescente senza trasformarli",
      "Conta i valori presenti senza modificare granularità o struttura"
    ],
    correct: [0],
    exp: "map su una Series applica una funzione o un dizionario di sostituzione elemento per elemento: comodo per ricodificare valori categorici."
  },
  {
    id: "u14036", topic: "Missing: conteggio",
    q: "df.isna().sum() restituisce:",
    opts: [
      "Il numero di valori mancanti per ciascuna colonna",
      "Le righe che contengono valori mancanti",
      "La media di ciascuna colonna esclusi i NaN"
    ],
    correct: [0],
    exp: "isna() dà la maschera booleana; sum() la somma per colonna (True=1), ottenendo il conteggio dei mancanti per colonna. Passo chiave nell'esplorazione."
  },
  {
    id: "u14037", topic: "Vettorializzazione",
    q: "Perché in pandas si preferiscono operazioni vettorializzate ai cicli for?",
    opts: [
      "Sono molto più veloci e concise (implementate in C)",
      "Sono sempre errate anche quando rispettano tipi, indice e contesto",
      "I cicli non esistono"
    ],
    correct: [0],
    exp: "Le operazioni vettorializzate di pandas/NumPy operano su intere colonne in codice ottimizzato: molto più rapide dei cicli Python elemento per elemento."
  },
  {
    id: "u14038", topic: "query",
    q: "df.query('eta > 30 and citta == \"Milano\"'):",
    opts: [
      "Filtra le righe usando un'espressione testuale",
      "Ordina i dati per una colonna o un timestamp senza cambiarne il contenuto",
      "Rimuove colonne dal dataset invece di combinare o filtrare i record"
    ],
    correct: [0],
    exp: "query filtra con una stringa leggibile, alternativa al boolean indexing. Comoda per condizioni multiple senza ripetere il nome del DataFrame."
  },
  {
    id: "u14039", topic: "Statistiche colonna",
    q: "df['prezzo'].mean() calcola:",
    opts: [
      "La media della colonna 'prezzo'",
      "Il numero di righe con un prezzo",
      "Il prezzo massimo della colonna"
    ],
    correct: [0],
    exp: "I metodi statistici (mean, sum, min, max, std, median) si applicano direttamente a una Series o a un DataFrame (per colonna). Ignorano i NaN di default."
  },
  {
    id: "u14040", topic: "Applicazione riga",
    q: "df.apply(func, axis=1) applica la funzione:",
    opts: [
      "A ciascuna riga del DataFrame",
      "A ciascuna colonna",
      "A un solo valore"
    ],
    correct: [0],
    exp: "apply con axis=1 passa a func un'intera riga (Series); axis=0 (default) opera per colonna. Utile per calcoli che coinvolgono più colonne."
  },
  {
    id: "u14041", topic: "nunique",
    q: "df['citta'].nunique() restituisce:",
    opts: [
      "Il numero di valori distinti",
      "L'elenco di tutti i valori della colonna",
      "La media dei valori numerici"
    ],
    correct: [0],
    exp: "nunique conta i valori unici (escludendo i NaN). unique() restituisce invece l'array dei valori distinti."
  },
  {
    id: "u14042", topic: "Selezione colonne numeriche",
    q: "df.select_dtypes(include='number') restituisce:",
    opts: [
      "Solo le colonne numeriche",
      "Solo quelle testuali",
      "Tutte le colonne"
    ],
    correct: [0],
    exp: "select_dtypes filtra le colonne per tipo: comodo per applicare operazioni solo alle numeriche o solo alle categoriche."
  },
  {
    id: "u14043", topic: "Copia",
    q: "Df2 = df crea:",
    opts: [
      "Un riferimento allo stesso DataFrame (non una copia)",
      "Un DataFrame vuoto con lo stesso schema",
      "Un errore perché non si può assegnare un DataFrame"
    ],
    correct: [0],
    exp: "df2 = df crea un altro nome per lo STESSO oggetto: modificando df2 si modifica df. Per una copia vera si usa df.copy()."
  },
  {
    id: "u14044", topic: "loc assegnazione",
    q: "df.loc[df['eta']<18, 'minorenne'] = True:",
    opts: [
      "Imposta True nella colonna 'minorenne' solo per le righe selezionate",
      "Rimuove righe dal dataset invece di trasformare o calcolare valori",
      "Ordina i dati per una colonna o un timestamp senza cambiarne il contenuto"
    ],
    correct: [0],
    exp: ".loc permette di assegnare valori a un sottoinsieme di righe/colonne in modo sicuro (evita il 'SettingWithCopyWarning' del chained indexing)."
  },
  {
    id: "u14045", topic: "crosstab",
    q: "pd.crosstab(df['genere'], df['acquisto']) crea:",
    opts: [
      "Una tabella di contingenza tra le due variabili",
      "Un grafico a torta delle due variabili",
      "La media di 'acquisto' per ciascun genere"
    ],
    correct: [0],
    exp: "crosstab conta le frequenze incrociate tra due (o più) variabili categoriche, producendo una tabella di contingenza."
  },
  {
    id: "u14046", topic: "Statistiche multiple",
    q: "df.groupby('reparto')['stipendio'].agg(['mean','min','max']):",
    opts: [
      "Calcola più statistiche per gruppo in un colpo solo",
      "Elimina i gruppi con un solo elemento",
      "Ordina i reparti per stipendio medio"
    ],
    correct: [0],
    exp: "Passando una lista di funzioni a agg si ottengono più aggregazioni contemporaneamente per ciascun gruppo (media, minimo, massimo dello stipendio)."
  },
  {
    id: "u14047", topic: "Filtri isin",
    q: "df[df['citta'].isin(['Milano','Roma'])]:",
    opts: [
      "Tiene le righe la cui città è tra quelle elencate",
      "Ordina la colonna città senza filtrare i valori richiesti",
      "Conta le città presenti invece di filtrare quelle richieste"
    ],
    correct: [0],
    exp: "isin verifica l'appartenenza a una lista di valori: pratico per filtrare più categorie insieme, come l'operatore IN di SQL."
  },
  {
    id: "u14048", topic: "NaN nei calcoli",
    q: "df['x'].sum() con dei NaN nella colonna:",
    opts: [
      "Ignora i NaN e somma i valori presenti",
      "Restituisce NaN",
      "Genera un errore di esecuzione invece di produrre un risultato valido"
    ],
    correct: [0],
    exp: "I metodi di aggregazione di pandas (sum, mean, ...) escludono i NaN per default (skipna=True). Attenzione: comportamento diverso da NumPy grezzo."
  },
  {
    id: "u14049", topic: "Rolling",
    q: "df['vendite'].rolling(7).mean() calcola:",
    opts: [
      "La media mobile su una finestra di 7 periodi",
      "La media di tutte le vendite del DataFrame",
      "La somma cumulata delle vendite"
    ],
    correct: [0],
    exp: "rolling crea una finestra scorrevole; .mean() ne calcola la media mobile. Utile per lisciare serie e creare feature temporali."
  },
  {
    id: "u14050", topic: "Cumulate",
    q: "df['x'].cumsum() restituisce:",
    opts: [
      "La somma cumulata progressiva",
      "La somma totale della colonna",
      "La media progressiva dei valori"
    ],
    correct: [0],
    exp: "cumsum dà la somma progressiva riga per riga; esistono anche cumprod, cummax, cummin. Utili per totali progressivi."
  },
  {
    id: "u14051", topic: "Categoria",
    q: "Convertire una colonna a dtype 'category' serve a:",
    opts: [
      "Risparmiare memoria e trattarla come categorica",
      "Ordinare la colonna in modo alfabetico",
      "Rimuovere i valori mancanti dalla colonna"
    ],
    correct: [0],
    exp: "Il dtype category memorizza le categorie una sola volta con codici interni: riduce la memoria e velocizza raggruppamenti su colonne con pochi valori distinti."
  },
  {
    id: "u14052", topic: "Selezione righe iloc",
    q: "df.iloc[0:5] restituisce:",
    opts: [
      "Le prime cinque righe per posizione",
      "Le prime cinque colonne del DataFrame",
      "Un singolo valore nella posizione indicata"
    ],
    correct: [0],
    exp: "iloc usa le POSIZIONI: 0:5 prende le righe dalla 0 alla 4 (estremo destro escluso, come lo slicing Python). loc userebbe invece le etichette."
  },
  {
    id: "u14053", topic: "Colonne",
    q: "df.columns restituisce:",
    opts: [
      "L'elenco (Index) dei nomi delle colonne",
      "L'elenco dei valori della prima riga",
      "Il numero di colonne del DataFrame"
    ],
    correct: [0],
    exp: "df.columns è l'oggetto Index con i nomi delle colonne. Si può convertire in lista con list(df.columns) o rinominare riassegnandolo."
  },
  {
    id: "u14054", topic: "Ordinamento multiplo",
    q: "df.sort_values(['reparto','stipendio']):",
    opts: [
      "Ordina prima per reparto, poi per stipendio dentro ciascun reparto",
      "Ordina solo per stipendio",
      "Filtra righe già presenti in base a una condizione booleana"
    ],
    correct: [0],
    exp: "Passando una lista di colonne, sort_values ordina gerarchicamente: prima per la prima colonna, poi per la seconda a parità della prima."
  },
  {
    id: "u14055", topic: "NumPy",
    q: "Pandas è costruito sopra quale libreria per i calcoli numerici?",
    opts: [
      "NumPy",
      "scikit-learn per i calcoli",
      "Il modulo standard csv di Python"
    ],
    correct: [0],
    exp: "Pandas usa NumPy come motore numerico: gli array NumPy sono alla base delle Series/DataFrame, garantendo operazioni vettorializzate veloci."
  },
  {
    id: "u14056", topic: "Merge how",
    q: "In pd.merge, how='left' mantiene:",
    opts: [
      "Tutte le righe del DataFrame di sinistra",
      "Tutte le righe di destra",
      "Un risultato vuoto perché nessun record soddisfa la condizione"
    ],
    correct: [0],
    exp: "how='left' conserva tutte le righe del DataFrame sinistro, riempiendo con NaN dove manca la corrispondenza a destra, come la LEFT JOIN di SQL."
  },
  {
    id: "u14057", topic: "Aggregazione con reset",
    q: "Dopo un groupby().sum(), la colonna di raggruppamento diventa:",
    opts: [
      "L'indice del risultato (si usa reset_index() per riportarla in colonna)",
      "Una normale colonna come tutte le altre",
      "Una colonna che viene automaticamente cancellata"
    ],
    correct: [0],
    exp: "Il risultato di groupby ha come indice la chiave di raggruppamento; reset_index() la riporta come colonna normale, comodo per successive elaborazioni o merge."
  },
  {
    id: "u14058", topic: "Applicare a gruppi",
    q: "transform() rispetto a agg() in un groupby:",
    opts: [
      "Restituisce un risultato della stessa lunghezza dell'originale (broadcast per gruppo)",
      "Restituisce una sola riga per gruppo come una normale aggregazione",
      "Elimina la struttura dei gruppi senza produrre un risultato per ogni gruppo"
    ],
    correct: [0],
    exp: "agg riduce ogni gruppo a un valore; transform restituisce un valore per OGNI riga (es. la media del gruppo ripetuta su tutte le sue righe), utile per creare feature."
  },
  {
    id: "u14059", topic: "where",
    q: "df['x'].where(df['x']>0, 0) restituisce:",
    opts: [
      "I valori dove la condizione è vera, altrimenti 0",
      "Un errore perché where non accetta un valore",
      "La media dei valori positivi della colonna"
    ],
    correct: [0],
    exp: "where mantiene i valori dove la condizione è True e sostituisce gli altri (default NaN, qui 0). np.where offre una logica if/else vettorializzata simile."
  },
  {
    id: "u14060", topic: "Testo: contains",
    q: "df[df['nome'].str.contains('an')]:",
    opts: [
      "Tiene le righe il cui nome contiene 'an'",
      "Ordina i nomi alfabeticamente senza cercare pattern nei dati",
      "Rimuove la colonna"
    ],
    correct: [0],
    exp: "str.contains(pattern) restituisce True dove la stringa contiene il pattern (anche regex): usato come maschera per filtrare righe testuali."
  },
  {
    id: "u14061", topic: "Indicizzazione booleana",
    q: "df['eta'] > 30 (da solo) restituisce:",
    opts: [
      "Una Series di valori booleani (la maschera)",
      "Le righe del DataFrame con età superiore a 30",
      "Un errore perché manca il DataFrame attorno"
    ],
    correct: [0],
    exp: "Il confronto su una colonna dà una Series booleana; per ottenere le righe va usata come indice: df[df['eta']>30]. La maschera da sola non filtra."
  },
  {
    id: "u14062", topic: "NaN riempimento avanti",
    q: "df.fillna(method='ffill') riempie i NaN con:",
    opts: [
      "L'ultimo valore valido precedente (forward fill)",
      "Il valore zero in tutte le celle mancanti",
      "Il primo valore valido successivo (backward fill)"
    ],
    correct: [0],
    exp: "ffill (forward fill) propaga in avanti l'ultimo valore valido; bfill fa l'opposto (all'indietro). Comuni con serie temporali ordinate."
  },
  {
    id: "u14063", topic: "Numero righe uniche",
    q: "len(df) restituisce:",
    opts: [
      "Il numero di righe del DataFrame",
      "Il numero di colonne del DataFrame",
      "Le prime righe del DataFrame"
    ],
    correct: [0],
    exp: "len(df) conta le righe. Per le colonne si usa len(df.columns) o df.shape[1]; df.shape dà entrambe."
  },
  {
    id: "u14064", topic: "Esporta",
    q: "df.to_csv('out.csv', index=False):",
    opts: [
      "Salva il DataFrame in un CSV senza la colonna indice",
      "Elimina i dati di input invece di elaborarli o validarli",
      "Produce una visualizzazione grafica dei dati invece di trasformarli"
    ],
    correct: [0],
    exp: "to_csv esporta in CSV; index=False evita di scrivere l'indice come colonna aggiuntiva. Esistono anche to_excel, to_parquet, to_json."
  },
  {
    id: "u14065", topic: "Media per gruppo su tutte",
    q: "df.groupby('reparto').mean(numeric_only=True):",
    opts: [
      "Calcola la media di tutte le colonne numeriche per reparto",
      "Solo la prima colonna",
      "Elimina la struttura dei gruppi senza produrre un risultato per ogni gruppo"
    ],
    correct: [0],
    exp: "Senza specificare una colonna, l'aggregazione si applica a tutte le colonne numeriche del gruppo. numeric_only=True evita errori con colonne non numeriche."
  },
  {
    id: "u14066", topic: "Applica dizionario replace",
    q: "df.replace({'-':None}) serve a:",
    opts: [
      "Sostituire valori specifici in tutto il DataFrame",
      "Filtrare le righe che contengono quel valore",
      "Ordinare le righe in base a quel valore"
    ],
    correct: [0],
    exp: "replace sostituisce valori ovunque compaiano (utile per uniformare 'placeholder' come '-', 'N/A' in veri NaN). Accetta valori singoli, liste o dizionari."
  },
  {
    id: "u14067", topic: "Slicing colonne",
    q: "df.iloc[:, 0:3] seleziona:",
    opts: [
      "Tutte le righe e le prime tre colonne per posizione",
      "Le prime tre righe di tutte le colonne",
      "Un singolo valore alla posizione indicata"
    ],
    correct: [0],
    exp: "Con iloc si indica [righe, colonne] per posizione: ':' tutte le righe, 0:3 le prime tre colonne (estremo escluso)."
  },
  {
    id: "u14068", topic: "Valori unici ordinati",
    q: "df['categoria'].value_counts(normalize=True) restituisce:",
    opts: [
      "Le proporzioni (frequenze relative) di ciascuna categoria",
      "I conteggi assoluti di ciascuna categoria",
      "Le prime righe della colonna categoria"
    ],
    correct: [0],
    exp: "Con normalize=True, value_counts dà le frequenze relative (che sommano a 1) invece dei conteggi assoluti: utile per percentuali."
  },
  {
    id: "u14069", topic: "Merge chiavi diverse",
    q: "Se le chiavi hanno nomi diversi, in merge si usa:",
    opts: [
      "left_on e right_on",
      "solo il parametro on con lo stesso nome",
      "index_col per allineare le due tabelle"
    ],
    correct: [0],
    exp: "Quando le colonne chiave si chiamano diversamente: pd.merge(a, b, left_on='id_a', right_on='id_b'). 'on' si usa solo se il nome è identico."
  },
  {
    id: "u14070", topic: "Applica su più colonne",
    q: "df[['a','b']].sum(axis=1) calcola:",
    opts: [
      "La somma delle due colonne riga per riga",
      "La somma totale di tutti i valori delle due colonne",
      "La media delle due colonne per ciascuna riga"
    ],
    correct: [0],
    exp: "axis=1 opera lungo le colonne per ciascuna riga: qui somma a+b per ogni riga. axis=0 sommerebbe verticalmente ciascuna colonna."
  },
  {
    id: "u14071", topic: "Indice datetime",
    q: "Impostare un indice datetime permette di:",
    opts: [
      "Fare slicing per periodo e resampling temporale",
      "Eliminare le date",
      "Contare le righe disponibili invece di analizzare il fenomeno richiesto"
    ],
    correct: [0],
    exp: "Con un DatetimeIndex si può selezionare per intervallo (df['2023-01']) e usare resample per aggregare a diverse frequenze, sfruttando le funzioni temporali di pandas."
  },
  {
    id: "u14072", topic: "Resample",
    q: "df.resample('M').sum() (con indice datetime):",
    opts: [
      "Aggrega i dati a frequenza mensile sommandoli",
      "Filtra i mesi presenti senza aggregare alla frequenza mensile",
      "Ordina le date dell'indice senza cambiare frequenza"
    ],
    correct: [0],
    exp: "resample raggruppa per intervalli temporali (M=mensile, D=giornaliero) e applica un'aggregazione: è il 'groupby del tempo' per le serie."
  },
  {
    id: "u14073", topic: "Pivot vs pivot_table",
    q: "La differenza tra pivot e pivot_table è che pivot_table:",
    opts: [
      "Gestisce i valori duplicati aggregandoli, pivot no",
      "Non aggrega mai valori duplicati nelle combinazioni indice-colonna",
      "Funziona solo su colonne testuali e non su dati tabellari generali"
    ],
    correct: [0],
    exp: "pivot richiede combinazioni indice/colonna uniche (fallisce con duplicati); pivot_table aggrega i duplicati con una funzione (default media), gestendo casi più generali."
  },
  {
    id: "u14074", topic: "apply lambda",
    q: "df['prezzo'].apply(lambda x: x*1.1):",
    opts: [
      "Aumenta ogni prezzo del 10% con una funzione anonima",
      "Ordina i prezzi",
      "Filtra i prezzi secondo una soglia invece di ordinare il risultato"
    ],
    correct: [0],
    exp: "apply con una lambda applica una trasformazione al volo a ogni elemento. Per operazioni semplici, però, la vettorializzazione diretta (df['prezzo']*1.1) è più veloce."
  },
  {
    id: "u14075", topic: "Gestione indici duplicati",
    q: "df.index.is_unique verifica:",
    opts: [
      "Se le etichette dell'indice sono tutte diverse",
      "Se la colonna indice contiene valori mancanti",
      "La media dei valori dell'indice"
    ],
    correct: [0],
    exp: "is_unique è True se l'indice non ha duplicati. Indici duplicati possono causare comportamenti inattesi in selezioni e allineamenti."
  },
  {
    id: "u14076", topic: "Applica a colonna testo split",
    q: "df['nome_completo'].str.split(' ', expand=True):",
    opts: [
      "Divide la stringa in più colonne separate",
      "Ordina i nomi alfabeticamente senza cercare pattern nei dati",
      "Elimina la colonna indicata invece di modificarne i valori"
    ],
    correct: [0],
    exp: "str.split con expand=True separa la stringa in più colonne (es. nome e cognome). Senza expand restituisce una Series di liste."
  },
  {
    id: "u14077", topic: "Colonne calcolate condizionali",
    q: "np.where(df['eta']>=18, 'adulto', 'minore'):",
    opts: [
      "Assegna 'adulto'/'minore' in base alla condizione, in modo vettorializzato",
      "Filtra tenendo solo le righe con età >= 18",
      "Ordina le righe in base all'età"
    ],
    correct: [0],
    exp: "np.where(condizione, se_vero, se_falso) è un if/else vettorializzato: crea una colonna derivata rapidamente, alternativa a apply."
  },
  {
    id: "u14078", topic: "Info memoria",
    q: "df.memory_usage(deep=True) mostra:",
    opts: [
      "L'uso di memoria di ciascuna colonna",
      "Il numero di righe di ciascuna colonna",
      "La media dei valori di ogni colonna"
    ],
    correct: [0],
    exp: "memory_usage(deep=True) stima la memoria reale (incluse le stringhe). Utile per ottimizzare (es. convertire a category o a tipi più piccoli)."
  },
  {
    id: "u14079", topic: "Concatenazione colonne",
    q: "pd.concat([df1, df2], axis=1):",
    opts: [
      "Affianca i due DataFrame per colonna",
      "Fa una join su chiave",
      "Rimuove colonne dal dataset invece di combinare o filtrare i record"
    ],
    correct: [0],
    exp: "Con axis=1 concat allinea per indice e affianca le colonne. Con axis=0 (default) impila le righe. Per unire su chiavi si usa merge."
  },
  {
    id: "u14080", topic: "Valori mancanti: interpolate",
    q: "df['x'].interpolate() serve a:",
    opts: [
      "Stimare i NaN interpolando tra valori noti",
      "Sostituire con zero",
      "Eliminare le righe"
    ],
    correct: [0],
    exp: "interpolate riempie i mancanti stimandoli (di default lineare) tra i valori adiacenti: utile su serie ordinate per mantenere la continuità."
  },
  {
    id: "u14081", topic: "Applica a intero DataFrame",
    q: "df.apply(np.sum) di default calcola:",
    opts: [
      "La somma di ciascuna colonna",
      "La somma di ciascuna riga",
      "La media di ciascuna colonna"
    ],
    correct: [0],
    exp: "Su un DataFrame, apply opera per colonna (axis=0) di default: qui somma ciascuna colonna. Con axis=1 opererebbe per riga."
  },
  {
    id: "u14082", topic: "Rinominare indice",
    q: "df.rename_axis('id') serve a:",
    opts: [
      "Dare un nome all'indice",
      "Ordinare le etichette dell'indice",
      "Rimuovere del tutto l'indice"
    ],
    correct: [0],
    exp: "rename_axis assegna un nome all'asse dell'indice (o delle colonne): utile per chiarezza e dopo groupby, quando l'indice ha un significato."
  },
  {
    id: "u14083", topic: "Filtri combinati query",
    q: "Perché usare parentesi in df[(df.a>1) & (df.b<5)]?",
    opts: [
      "Perché & ha precedenza alta e senza parentesi la valutazione sarebbe errata",
      "Le parentesi non sono mai necessarie nelle maschere booleane pandas",
      "Serve solo a rendere più leggibile il codice, senza effetto sulla valutazione"
    ],
    correct: [0],
    exp: "L'operatore & ha precedenza maggiore dei confronti, quindi senza parentesi pandas proverebbe a valutare 1 & df.b prima, dando errore. Le parentesi impongono l'ordine corretto."
  },
  {
    id: "u14084", topic: "assign",
    q: "df.assign(iva = df['prezzo']*0.22):",
    opts: [
      "Restituisce un nuovo DataFrame con la colonna aggiunta",
      "Rimuove una colonna esistente invece di crearne una calcolata",
      "Ordina i dati per una colonna o un timestamp senza cambiarne il contenuto"
    ],
    correct: [0],
    exp: "assign crea una copia con nuove colonne calcolate, utile nelle catene di metodi (method chaining) senza modificare l'originale."
  },
  {
    id: "u14085", topic: "Groupby multiplo",
    q: "df.groupby(['regione','anno'])['vendite'].sum():",
    opts: [
      "Somma le vendite per ogni combinazione regione-anno",
      "Somma solo per regione",
      "Elimina la struttura dei gruppi senza produrre un risultato per ogni gruppo"
    ],
    correct: [0],
    exp: "Passando una lista a groupby si raggruppa per più chiavi: il risultato ha un indice gerarchico (MultiIndex) con una riga per ciascuna combinazione."
  },
  {
    id: "u14086", topic: "MultiIndex",
    q: "Un MultiIndex in pandas è:",
    opts: [
      "Un indice a più livelli (gerarchico)",
      "Un errore di indicizzazione del DataFrame",
      "Una singola colonna usata come chiave"
    ],
    correct: [0],
    exp: "Il MultiIndex permette indici gerarchici (es. regione dentro anno), tipici dopo raggruppamenti multipli o pivot. Si naviga con .loc a livelli e si appiattisce con reset_index."
  },
  {
    id: "u14087", topic: "Applica funzione riga complessa",
    q: "Per creare una colonna che dipende da più colonne, un modo pulito è:",
    opts: [
      "Operazioni vettorializzate o np.where, evitando apply quando possibile",
      "Un ciclo for che scorre riga per riga",
      "Solo un merge tra le colonne"
    ],
    correct: [0],
    exp: "Combinare colonne con operazioni vettorializzate (df['a']+df['b']) o np.where è più veloce di apply(axis=1); apply si usa quando la logica è troppo complessa per la vettorializzazione."
  },
  {
    id: "u14088", topic: "Ordinare per conteggio",
    q: "df['citta'].value_counts().head(3) mostra:",
    opts: [
      "Le tre città più frequenti",
      "Le tre città meno frequenti",
      "La media dei valori delle prime tre città"
    ],
    correct: [0],
    exp: "value_counts ordina per frequenza decrescente; head(3) prende i primi tre, cioè i valori più comuni. Utile per le 'top N' categorie."
  },
  {
    id: "u14089", topic: "Colonne booleane",
    q: "(df['eta']>=18).sum() restituisce:",
    opts: [
      "Il numero di righe con età >= 18",
      "La somma delle età di tutte le persone",
      "Le righe con età maggiore o uguale a 18"
    ],
    correct: [0],
    exp: "La maschera booleana ha True=1 e False=0: sommandola si contano le righe che soddisfano la condizione. Trucco comune per contare rapidamente."
  },
  {
    id: "u14090", topic: "Cast a intero con NaN",
    q: "Una colonna con NaN non può essere int64 standard perché:",
    opts: [
      "NaN è un float; serve il tipo 'Int64' nullable per interi con mancanti",
      "Gli interi non sono supportati come tipo dati in pandas",
      "È un errore generico di pandas non legato al tipo nullable"
    ],
    correct: [0],
    exp: "NaN è rappresentato come float, quindi una colonna intera con mancanti diventa float64. Pandas offre il tipo nullable 'Int64' (maiuscolo) per interi con valori mancanti."
  },
  {
    id: "u14091", topic: "describe categoriche",
    q: "df.describe(include='object') mostra:",
    opts: [
      "Statistiche per le colonne testuali (conteggio, unici, top, freq)",
      "La media e i quartili delle colonne numeriche",
      "Le prime righe delle colonne di testo"
    ],
    correct: [0],
    exp: "Per le colonne object/categoriche, describe mostra numero di valori, quanti unici, il più frequente (top) e la sua frequenza. Complementare alle statistiche numeriche."
  },
  {
    id: "u14092", topic: "Applica su gruppi personalizzata",
    q: "df.groupby('reparto').apply(func):",
    opts: [
      "Applica una funzione personalizzata a ciascun sotto-DataFrame di gruppo",
      "Somma tutti i valori del DataFrame",
      "Ordina le righe di ciascun reparto"
    ],
    correct: [0],
    exp: "groupby().apply passa a func l'intero sotto-DataFrame di ogni gruppo: massima flessibilità (es. calcoli che coinvolgono più colonne per gruppo), ma più lenta di agg/transform."
  },
  {
    id: "u14093", topic: "Loc con lista",
    q: "df.loc[[0,2,5]] seleziona:",
    opts: [
      "Le righe con etichette 0, 2 e 5",
      "Le prime cinque righe del DataFrame",
      "Un singolo valore nella posizione 0"
    ],
    correct: [0],
    exp: ".loc con una lista di etichette seleziona quelle righe specifiche. Con iloc si userebbero le posizioni intere."
  },
  {
    id: "u14094", topic: "Rimuovere righe per condizione",
    q: "Per eliminare le righe con età < 0 si può:",
    opts: [
      "Filtrare tenendo df[df['eta']>=0]",
      "Usare df.columns",
      "Usare df.head()"
    ],
    correct: [0],
    exp: "Non c'è bisogno di 'cancellare': si ricrea il DataFrame filtrando le righe valide, es. df = df[df['eta']>=0]. È l'approccio idiomatico in pandas."
  },
  {
    id: "u14095", topic: "Chained indexing",
    q: "Perché è sconsigliato df[df.a>0]['b'] = 1?",
    opts: [
      "Il chained indexing può agire su una copia, non modificando l'originale (SettingWithCopyWarning)",
      "È più veloce perché evita controlli sull'indice e sulle copie intermedie",
      "Fallisce sempre, anche quando la selezione produce un oggetto valido"
    ],
    correct: [0],
    exp: "Il doppio indexing 'a catena' può restituire una copia temporanea: l'assegnazione potrebbe non avere effetto. Si usa invece df.loc[df.a>0, 'b'] = 1, sicuro e chiaro."
  },
  {
    id: "u14096", topic: "Numeri e testo",
    q: "pd.to_numeric(df['x'], errors='coerce'):",
    opts: [
      "Converte in numero, trasformando i valori non validi in NaN",
      "Ordina i valori in ordine crescente o decrescente senza trasformarli",
      "Conta i valori presenti senza modificare granularità o struttura"
    ],
    correct: [0],
    exp: "to_numeric con errors='coerce' forza la conversione numerica e mette NaN dove il valore non è convertibile: utile per pulire colonne 'sporche' lette come testo."
  },
  {
    id: "u14097", topic: "Ordinare indice",
    q: "df.sort_index() ordina:",
    opts: [
      "Le righe in base alle etichette dell'indice",
      "Le righe in base ai valori di una colonna",
      "Le colonne in base al loro tipo di dato"
    ],
    correct: [0],
    exp: "sort_index riordina per etichetta dell'indice (o delle colonne con axis=1). sort_values ordina invece per i valori di una colonna."
  },
  {
    id: "u14098", topic: "Applica formattazione",
    q: "df.round(2) su colonne numeriche:",
    opts: [
      "Arrotonda i valori a due decimali",
      "Ordina i valori numerici in modo crescente",
      "Conta i valori con due cifre decimali"
    ],
    correct: [0],
    exp: "round arrotonda i valori numerici al numero di decimali indicato, su tutto il DataFrame o su colonne selezionate. Utile prima di esportare o visualizzare."
  },
  {
    id: "u14099", topic: "Contare per gruppo",
    q: "df.groupby('reparto').size() restituisce:",
    opts: [
      "Il numero di righe per ciascun reparto",
      "La media dei valori di ciascun reparto",
      "I valori distinti presenti in ogni reparto"
    ],
    correct: [0],
    exp: "size() conta le righe di ogni gruppo (inclusi i NaN), restituendo una Series. count() invece conta i non-null per colonna."
  },
  {
    id: "u14100", topic: "Flusso analisi",
    q: "Un tipico flusso di analisi con pandas è:",
    opts: [
      "Caricare → esplorare → pulire → trasformare/aggregare → visualizzare/esportare",
      "Esplorare → caricare → pulire → trasformare/aggregare → visualizzare/esportare",
      "Visualizzare/esportare → caricare → esplorare → pulire → trasformare/aggregare"
    ],
    correct: [0],
    exp: "Il flusso: read_csv → head/info/describe (esplorare) → gestione NaN e tipi (pulire) → filtri, groupby, merge (trasformare) → grafici o to_csv (comunicare). È iterativo."
  },
  // === AGGIUNGI NUOVE DOMANDE PANDAS QUI ===
]);
