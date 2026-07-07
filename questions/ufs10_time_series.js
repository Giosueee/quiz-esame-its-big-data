/* ============================================================
   MATERIA: Time Series  (UFS10 - Time Series Analysis)
   100 domande. (Camuffatura lunghezze: pass finale.)
   ============================================================ */
registerSubject("Time Series", [
  {
    id: "u10001", topic: "Definizione",
    q: "Cos'è una serie temporale (time series)?",
    opts: [
      "Una sequenza di osservazioni ordinate nel tempo",
      "Un insieme di dati senza ordine",
      "Una tabella di categorie",
      "Un grafico a torta per rappresentare quote percentuali tra categorie"
    ],
    correct: [0],
    exp: "Una serie temporale è una successione di valori rilevati a intervalli di tempo (giornalieri, mensili, ecc.). L'ordine temporale è essenziale e va rispettato nell'analisi."
  },
  {
    id: "u10002", topic: "Componenti",
    q: "Quali sono componenti tipiche di una serie temporale? (una o più risposte)",
    opts: [
      "Trend",
      "Stagionalità",
      "Rumore (residuo)",
      "Chiave primaria"
    ],
    correct: [0,1,2],
    exp: "Una serie si scompone in trend (andamento di fondo), stagionalità (cicli regolari), componente ciclica e rumore casuale. La 'chiave primaria' è un concetto di database, non di serie storiche."
  },
  {
    id: "u10003", topic: "Trend",
    q: "Il trend di una serie temporale rappresenta:",
    opts: [
      "L'andamento di fondo a lungo termine (crescita o calo)",
      "Le oscillazioni stagionali",
      "Il rumore casuale",
      "Un singolo valore anomalo"
    ],
    correct: [0],
    exp: "Il trend è la direzione generale della serie nel lungo periodo (crescente, decrescente o stabile), al netto di stagionalità e rumore."
  },
  {
    id: "u10004", topic: "Stagionalità",
    q: "La stagionalità è:",
    opts: [
      "Un pattern che si ripete a intervalli regolari e noti",
      "Un aumento costante nel tempo",
      "Un valore generato casualmente senza usare struttura o ordine dei dati",
      "Un errore di misura"
    ],
    correct: [0],
    exp: "La stagionalità sono fluttuazioni regolari legate a un periodo fisso (giorno, settimana, anno): es. più gelati d'estate, più acquisti a dicembre."
  },
  {
    id: "u10005", topic: "Stazionarietà",
    q: "Una serie temporale è stazionaria quando:",
    opts: [
      "Le sue proprietà statistiche (media, varianza) restano costanti nel tempo",
      "Ha un trend crescente marcato",
      "Cambia continuamente distribuzione",
      "Ha molti valori mancanti"
    ],
    correct: [0],
    exp: "Una serie stazionaria ha media, varianza e autocorrelazione stabili nel tempo. Molti modelli (es. ARIMA) richiedono la stazionarietà, spesso ottenuta con differenziazione."
  },
  {
    id: "u10006", topic: "Differenziazione",
    q: "La differenziazione (differencing) di una serie serve a:",
    opts: [
      "Renderla stazionaria rimuovendo trend/stagionalità",
      "Aggiungere un trend crescente alla serie",
      "Amplificare la componente stagionale della serie",
      "Aumentare la frequenza di campionamento dei dati"
    ],
    correct: [0],
    exp: "Differenziare significa calcolare le differenze tra valori consecutivi (y_t − y_(t−1)): rimuove il trend e stabilizza la media, aiutando a rendere la serie stazionaria."
  },
  {
    id: "u10007", topic: "ACF",
    q: "La funzione di autocorrelazione (ACF) misura:",
    opts: [
      "La correlazione della serie con sé stessa a diversi ritardi (lag)",
      "La correlazione tra due serie diverse",
      "La media della serie calcolata sull'intero intervallo osservato",
      "Il numero di valori mancanti"
    ],
    correct: [0],
    exp: "L'ACF quantifica quanto un valore è correlato con quelli passati a distanza k (lag): rivela stagionalità e persistenza. È chiave per identificare i modelli ARIMA."
  },
  {
    id: "u10008", topic: "PACF",
    q: "La PACF (autocorrelazione parziale) differisce dall'ACF perché:",
    opts: [
      "Misura la correlazione a un lag rimuovendo l'effetto dei lag intermedi",
      "Coincide con l'autocorrelazione semplice senza controllare lag intermedi",
      "Non considera lag della serie nella misura di dipendenza",
      "Misura la relazione tra due serie distinte invece dei lag della stessa serie"
    ],
    correct: [0],
    exp: "La PACF isola la correlazione diretta tra y_t e y_(t−k) al netto dei lag intermedi. ACF e PACF insieme aiutano a scegliere gli ordini p e q di un modello ARIMA."
  },
  {
    id: "u10009", topic: "ARIMA",
    q: "In ARIMA(p, d, q), la lettera 'd' indica:",
    opts: [
      "Il numero di differenziazioni per rendere la serie stazionaria",
      "Il numero di componenti stagionali",
      "La media della serie calcolata sull'intero intervallo osservato",
      "Il numero di osservazioni disponibili per stimare o valutare il modello"
    ],
    correct: [0],
    exp: "In ARIMA: p = ordine della parte autoregressiva (AR), d = grado di differenziazione (I), q = ordine della media mobile (MA). 'd' rende la serie stazionaria."
  },
  {
    id: "u10010", topic: "AR",
    q: "La componente AR (autoregressiva) di un modello usa:",
    opts: [
      "I valori passati della serie per prevedere il valore attuale",
      "Solo gli errori passati",
      "Variabili esterne",
      "Il valore medio calcolato aggregando tutte le osservazioni"
    ],
    correct: [0],
    exp: "Il modello autoregressivo esprime il valore attuale come combinazione lineare dei valori precedenti (y_t dipende da y_(t−1), y_(t−2), ...). L'ordine p indica quanti lag usare."
  },
  {
    id: "u10011", topic: "MA",
    q: "La componente MA (media mobile) di ARIMA modella il valore attuale in funzione di:",
    opts: [
      "Gli errori (residui) dei periodi passati",
      "I valori medi delle categorie",
      "Le variabili indipendenti",
      "Il trend deterministico"
    ],
    correct: [0],
    exp: "La parte MA usa gli errori di previsione passati per correggere la stima corrente. Da non confondere con la semplice media mobile di lisciamento."
  },
  {
    id: "u10012", topic: "Media mobile",
    q: "Una media mobile (moving average) di lisciamento serve a:",
    opts: [
      "Attenuare il rumore evidenziando l'andamento di fondo",
      "Aumentare le oscillazioni",
      "Aggiungere artificialmente una componente stagionale al modello",
      "Trasformare valori numerici continui in categorie discrete"
    ],
    correct: [0],
    exp: "La media mobile calcola la media su una finestra scorrevole di valori: smussa le fluttuazioni casuali e rende più visibile il trend. La finestra ne determina il grado di lisciamento."
  },
  {
    id: "u10013", topic: "Decomposizione",
    q: "La decomposizione di una serie temporale la separa in:",
    opts: [
      "Trend, stagionalità e residuo",
      "Righe e colonne",
      "Training e test",
      "Media e mediana"
    ],
    correct: [0],
    exp: "La decomposizione scompone la serie nelle sue componenti (trend, stagionalità, residuo), utile per capirla e per rimuovere/isolare specifiche componenti prima di modellare."
  },
  {
    id: "u10014", topic: "Additivo vs moltiplicativo",
    q: "In un modello moltiplicativo, la stagionalità:",
    opts: [
      "Cresce in ampiezza al crescere del livello della serie",
      "Mantiene ampiezza stagionale costante come in un modello additivo",
      "Non contiene alcuna componente stagionale nel modello",
      "Assume sempre valori negativi indipendentemente dal livello"
    ],
    correct: [0],
    exp: "Modello additivo: serie = trend + stagionalità + residuo (ampiezza stagionale costante). Moltiplicativo: componenti moltiplicate, con ampiezza stagionale proporzionale al livello."
  },
  {
    id: "u10015", topic: "Forecasting",
    q: "Il forecasting di una serie temporale consiste nel:",
    opts: [
      "Prevedere i valori futuri sulla base di quelli passati",
      "Classificare le categorie",
      "Raggruppare i dati",
      "Descrivere solo il passato"
    ],
    correct: [0],
    exp: "Il forecasting stima i valori futuri della serie usando i pattern storici (trend, stagionalità, autocorrelazione). È l'obiettivo principale dell'analisi di molte serie storiche."
  },
  {
    id: "u10016", topic: "Split temporale",
    q: "Come si divide una serie temporale in train/test?",
    opts: [
      "Rispettando l'ordine cronologico: passato per il training, futuro per il test",
      "Mescolare casualmente le osservazioni ignorando l'ordine temporale",
      "Usando il futuro per addestrare",
      "Mescolare le date prima di dividere training e test"
    ],
    correct: [0],
    exp: "Con dati temporali lo split casuale causa leakage. Si addestra sui dati più vecchi e si valida sui più recenti, simulando la previsione del futuro."
  },
  {
    id: "u10017", topic: "White noise",
    q: "Il 'rumore bianco' (white noise) è una serie con:",
    opts: [
      "Valori casuali indipendenti, media costante e nessuna autocorrelazione",
      "Una direzione di lungo periodo marcata, non rumore bianco",
      "Una componente stagionale evidente e ripetitiva nel tempo",
      "Una serie monotona crescente, non casuale e indipendente"
    ],
    correct: [0],
    exp: "Il white noise è una sequenza di valori casuali incorrelati con media e varianza costanti: non è prevedibile. Se i residui di un modello sono white noise, il modello ha catturato tutta la struttura."
  },
  {
    id: "u10018", topic: "Lag",
    q: "Un 'lag' (ritardo) di una serie temporale è:",
    opts: [
      "Il valore della serie spostato indietro di uno o più periodi",
      "La media aritmetica dei valori disponibili nella serie",
      "Un'osservazione assente o non registrata nella serie temporale",
      "La componente di lungo periodo che descrive la direzione della serie"
    ],
    correct: [0],
    exp: "Il lag k è la serie ritardata di k periodi (y_(t−k)). Le feature di lag sono fondamentali per prevedere: il valore di oggi spesso dipende da quelli dei giorni precedenti."
  },
  {
    id: "u10019", topic: "Resampling",
    q: "Il resampling di una serie (es. da giornaliera a mensile) serve a:",
    opts: [
      "Cambiare la frequenza temporale aggregando o interpolando i dati",
      "Rimuovere il trend di fondo della serie storica",
      "Ordinare le osservazioni in base alla loro data",
      "Aggiungere rumore casuale ai valori della serie"
    ],
    correct: [0],
    exp: "Il resampling modifica la granularità temporale: downsampling aggrega (es. media mensile da dati giornalieri), upsampling infittisce (interpolando). Utile per allineare o sintetizzare le serie."
  },
  {
    id: "u10020", topic: "Exponential smoothing",
    q: "Il lisciamento esponenziale (exponential smoothing) assegna ai dati passati:",
    opts: [
      "Pesi decrescenti in modo esponenziale (più recenti pesano di più)",
      "Peso uguale a tutti",
      "Peso solo al primo valore",
      "Un peso nullo che esclude l'osservazione o la feature dal calcolo"
    ],
    correct: [0],
    exp: "Nello smoothing esponenziale le osservazioni recenti pesano più di quelle vecchie, con decadimento esponenziale. Metodi come Holt-Winters gestiscono anche trend e stagionalità."
  },
  {
    id: "u10021", topic: "Stazionarietà: test",
    q: "Il test di Dickey-Fuller aumentato (ADF) verifica:",
    opts: [
      "Se una serie è stazionaria o presenta una radice unitaria",
      "La normalità dei dati",
      "La correlazione tra due serie",
      "Il numero di stagioni"
    ],
    correct: [0],
    exp: "Il test ADF controlla la stazionarietà: un p-value basso porta a rifiutare la presenza di radice unitaria, indicando stazionarietà. Serve prima di applicare modelli come ARIMA."
  },
  {
    id: "u10022", topic: "Rolling window",
    q: "Una statistica su finestra mobile (rolling) calcola, per ogni istante:",
    opts: [
      "Un valore basato sugli ultimi N periodi che scorre nel tempo",
      "La media complessiva della serie, ignorando finestra e stagionalità",
      "Un singolo valore fisso",
      "La categoria più frequente"
    ],
    correct: [0],
    exp: "Le rolling statistics (media, deviazione standard mobili) si calcolano su una finestra che scorre: utili per lisciare, individuare cambi di regime o creare feature."
  },
  {
    id: "u10023", topic: "Componente ciclica",
    q: "La componente ciclica differisce dalla stagionale perché:",
    opts: [
      "Ha durata variabile e non un periodo fisso e regolare",
      "Si ripete sempre ogni 12 mesi",
      "È solo rumore",
      "Coincide col trend"
    ],
    correct: [0],
    exp: "La stagionalità ha periodo fisso (es. annuale); la componente ciclica (es. cicli economici) ha durata irregolare e non predeterminata, di solito su archi temporali più lunghi."
  },
  {
    id: "u10024", topic: "Autocorrelazione",
    q: "Un'alta autocorrelazione a lag 12 in dati mensili suggerisce:",
    opts: [
      "Stagionalità annuale (ripetizione ogni 12 mesi)",
      "Assenza di pattern",
      "Un trend lineare",
      "Rumore casuale senza componente informativa sfruttabile dal modello"
    ],
    correct: [0],
    exp: "Un picco di ACF al lag corrispondente al periodo stagionale (12 per dati mensili) indica stagionalità annuale: i valori si somigliano a distanza di un anno."
  },
  {
    id: "u10025", topic: "SARIMA",
    q: "Il modello SARIMA estende ARIMA aggiungendo:",
    opts: [
      "Una componente stagionale",
      "Più variabili target",
      "La regressione logistica",
      "Il clustering"
    ],
    correct: [0],
    exp: "SARIMA (Seasonal ARIMA) aggiunge termini stagionali (P, D, Q, s) a ARIMA per modellare serie con stagionalità, oltre al trend e all'autocorrelazione ordinaria."
  },
  {
    id: "u10026", topic: "Baseline forecasting",
    q: "Un modello baseline di previsione molto semplice è:",
    opts: [
      "Il metodo naïve: prevedere per domani il valore di oggi",
      "Una rete neurale con più strati nascosti usata per apprendimento profondo",
      "Un ensemble di alberi",
      "La PCA"
    ],
    correct: [0],
    exp: "Il metodo naïve (ultimo valore) o quello stagionale naïve (valore dello stesso periodo dell'anno prima) sono baseline: un modello complesso deve batterle per giustificarsi."
  },
  {
    id: "u10027", topic: "Trend: rimozione",
    q: "Per rimuovere un trend lineare da una serie si può:",
    opts: [
      "Differenziare la serie (una volta)",
      "Aggiungere una componente stagionale alla serie",
      "Aggregare i dati a una frequenza più alta",
      "Riordinare le osservazioni in base al valore"
    ],
    correct: [0],
    exp: "Una differenziazione di ordine 1 (y_t − y_(t−1)) elimina un trend lineare. Trend più complessi possono richiedere differenziazioni multiple o detrending con regressione."
  },
  {
    id: "u10028", topic: "Metriche forecasting",
    q: "Il MAPE (Mean Absolute Percentage Error) esprime l'errore:",
    opts: [
      "In percentuale rispetto ai valori reali",
      "In numero di righe",
      "Come conteggio di classi",
      "In unità di tempo"
    ],
    correct: [0],
    exp: "Il MAPE misura l'errore medio in percentuale: comodo per confrontare serie di scale diverse. Attenzione: si comporta male quando i valori reali sono vicini a zero."
  },
  {
    id: "u10029", topic: "Feature temporali",
    q: "Estrarre da una data feature come mese, giorno della settimana, festività serve a:",
    opts: [
      "Aiutare il modello a cogliere pattern stagionali e di calendario",
      "Cancellare la data",
      "Aumentare i valori mancanti",
      "Ridurre il numero di righe del dataset prima dell'analisi"
    ],
    correct: [0],
    exp: "Le feature di calendario (mese, giorno, festività, ora) rendono espliciti i pattern periodici, migliorando i modelli di previsione, specie quelli non specifici per serie storiche."
  },
  {
    id: "u10030", topic: "Prophet",
    q: "Librerie come Prophet sono pensate per:",
    opts: [
      "Previsioni di serie con trend e stagionalità in modo semi-automatico",
      "Classificare immagini statiche invece di modellare serie temporali",
      "Raggruppare osservazioni simili senza prevedere valori futuri",
      "Gestire database operazionali invece di stimare trend e stagionalità"
    ],
    correct: [0],
    exp: "Prophet (di Meta) modella trend, stagionalità multiple e festività in modo robusto e facile, adatto a serie business con pattern stagionali e valori mancanti/outlier."
  },
  {
    id: "u10031", topic: "Missing in time series",
    q: "Con dati mancanti in una serie temporale, spesso si usa:",
    opts: [
      "Interpolazione (es. lineare) che rispetta l'ordine temporale",
      "La media globale casuale",
      "La rimozione di tutte le date",
      "L'ignorare l'ordine"
    ],
    correct: [0],
    exp: "Nelle serie i mancanti si imputano spesso per interpolazione (lineare, forward/backward fill) sfruttando l'ordine temporale, per non spezzare la continuità della sequenza."
  },
  {
    id: "u10032", topic: "Overfitting temporale",
    q: "Un modello di forecasting troppo complesso rischia di:",
    opts: [
      "Adattarsi al rumore del passato e prevedere male il futuro",
      "Prevedere sempre perfettamente",
      "Ignorare i dati",
      "Diventare stazionario"
    ],
    correct: [0],
    exp: "Anche nel forecasting l'overfitting è un pericolo: il modello impara fluttuazioni casuali del passato e generalizza male. La validazione temporale aiuta a rilevarlo."
  },
  {
    id: "u10033", topic: "Frequenza",
    q: "La 'frequenza' di una serie temporale indica:",
    opts: [
      "Ogni quanto sono campionate le osservazioni (oraria, giornaliera, ...)",
      "Il valore massimo osservato nel vettore o nella serie",
      "Il numero di categorie distinte presenti nella variabile",
      "La media aritmetica dei valori osservati nella variabile"
    ],
    correct: [0],
    exp: "La frequenza è il passo temporale tra osservazioni (secondi, giorni, mesi). Determina come si definiscono i lag, la stagionalità e le aggregazioni."
  },
  {
    id: "u10034", topic: "Deseasonalizzazione",
    q: "Destagionalizzare una serie significa:",
    opts: [
      "Rimuovere la componente stagionale per osservare meglio il trend",
      "Aggiungere artificialmente una componente stagionale al modello",
      "Aumentare la frequenza di campionamento dei dati",
      "Trasformare valori numerici continui in categorie discrete"
    ],
    correct: [0],
    exp: "La destagionalizzazione elimina l'effetto stagionale (es. dividendo per gli indici stagionali) per evidenziare il trend di fondo: usata anche nei dati economici ufficiali."
  },
  {
    id: "u10035", topic: "Serie multivariate",
    q: "Una serie temporale multivariata:",
    opts: [
      "Registra nel tempo più variabili contemporaneamente",
      "Ha una sola variabile",
      "Non ha componente temporale",
      "È statica"
    ],
    correct: [0],
    exp: "Nelle serie multivariate si osservano più variabili nel tempo, possibilmente correlate (es. temperatura e consumo elettrico). Modelli come VAR le trattano congiuntamente."
  },
  {
    id: "u10036", topic: "Backtesting",
    q: "Il backtesting di un modello di forecasting consiste nel:",
    opts: [
      "Simularne le previsioni sul passato per valutarne l'affidabilità",
      "Usare dati futuri nel training, invalidando la valutazione",
      "Eliminare lo storico invece di simulare previsioni sul passato",
      "Non misurare gli errori delle previsioni simulate"
    ],
    correct: [0],
    exp: "Il backtesting valuta il modello su periodi storici come se fossero futuri (walk-forward), stimando quanto ci si può fidare delle previsioni prima di usarlo davvero."
  },
  {
    id: "u10037", topic: "Stazionarietà: varianza",
    q: "Se la varianza di una serie cresce nel tempo, una trasformazione utile è:",
    opts: [
      "Il logaritmo (stabilizza la varianza)",
      "L'aggiunta di una costante",
      "L'ordinamento dei valori",
      "La rimozione delle date"
    ],
    correct: [0],
    exp: "Applicare il logaritmo (o Box-Cox) comprime i valori grandi e stabilizza una varianza crescente, avvicinando la serie alla stazionarietà in varianza."
  },
  {
    id: "u10038", topic: "Autocorrelazione residui",
    q: "Se i residui di un modello mostrano ancora autocorrelazione, significa che:",
    opts: [
      "Il modello non ha catturato tutta la struttura temporale",
      "Il modello è perfetto",
      "I dati sono categorici",
      "Non serve migliorarlo"
    ],
    correct: [0],
    exp: "Residui autocorrelati indicano struttura non modellata (trend/stagionalità/AR residui). Idealmente i residui devono essere white noise: allora il modello è adeguato."
  },
  {
    id: "u10039", topic: "Holt-Winters",
    q: "Il metodo di Holt-Winters gestisce:",
    opts: [
      "Livello, trend e stagionalità con lisciamento esponenziale",
      "Considera solo il livello medio, ignorando trend e stagionalità",
      "Non modella né livello, né trend, né stagionalità",
      "Lavora solo con categorie e non con serie numeriche"
    ],
    correct: [0],
    exp: "Holt-Winters (triplo smoothing esponenziale) modella insieme livello, trend e stagionalità, aggiornandoli con pesi esponenziali. Adatto a serie con stagionalità regolare."
  },
  {
    id: "u10040", topic: "Orizzonte di previsione",
    q: "L'orizzonte di previsione è:",
    opts: [
      "Quanto lontano nel futuro si vuole prevedere",
      "Il numero di variabili",
      "La frequenza dei dati",
      "La media della serie calcolata sull'intero intervallo osservato"
    ],
    correct: [0],
    exp: "L'orizzonte indica il numero di periodi futuri da prevedere. In genere più è lungo, più l'incertezza cresce e le previsioni diventano meno affidabili."
  },
  {
    id: "u10041", topic: "Grafico serie",
    q: "Il primo passo nell'analisi di una serie temporale è di solito:",
    opts: [
      "Visualizzarla nel tempo (line plot) per individuarne le componenti",
      "Applicare subito una rete neurale",
      "Cancellare gli outlier",
      "Ignorare l'ordine"
    ],
    correct: [0],
    exp: "Tracciare la serie nel tempo rivela a colpo d'occhio trend, stagionalità, outlier e cambi di regime, orientando le scelte successive di trasformazione e modello."
  },
  {
    id: "u10042", topic: "Radice unitaria",
    q: "Una serie con 'radice unitaria' (es. random walk) è:",
    opts: [
      "Non stazionaria: shock hanno effetto permanente",
      "Sempre stazionaria",
      "Priva di rumore",
      "Perfettamente prevedibile"
    ],
    correct: [0],
    exp: "Con una radice unitaria (random walk) la serie non torna a una media stabile e gli shock si accumulano: è non stazionaria. Va differenziata prima di modellarla."
  },
  {
    id: "u10043", topic: "Autoregressione ordine",
    q: "Un processo AR(1) esprime il valore attuale in funzione di:",
    opts: [
      "Il valore immediatamente precedente più un errore",
      "Tutti i valori passati con lo stesso peso",
      "La media calcolata su tutte le righe senza distinguere gruppi",
      "Gli errori futuri"
    ],
    correct: [0],
    exp: "AR(1): y_t = c + φ·y_(t−1) + ε_t. Dipende solo dal lag 1. L'ordine p in AR(p) indica quanti valori precedenti entrano nel modello."
  },
  {
    id: "u10044", topic: "Anomalie",
    q: "Rilevare anomalie in una serie temporale significa:",
    opts: [
      "Individuare punti che deviano dal comportamento atteso nel tempo",
      "Calcolare la media generale di tutta la serie",
      "Riordinare i valori dal più piccolo al più grande",
      "Rimuovere il trend di fondo dalla serie"
    ],
    correct: [0],
    exp: "L'anomaly detection su serie segnala picchi, cali o cambi improvvisi rispetto al pattern atteso (utile per monitoraggio, frodi, guasti), tenendo conto di trend e stagionalità."
  },
  {
    id: "u10045", topic: "Cross-validation temporale",
    q: "La 'time series cross-validation' (walk-forward):",
    opts: [
      "Espande progressivamente la finestra di training verso il futuro",
      "Mescola casualmente passato e futuro invece di avanzare nel tempo",
      "Usa il futuro per addestrare",
      "Non esegue alcuna validazione temporale del modello"
    ],
    correct: [0],
    exp: "Nella cross-validation temporale si addestra su un blocco iniziale e si valida sul successivo, avanzando nel tempo. Rispetta l'ordine ed evita di usare il futuro nel passato."
  },
  {
    id: "u10046", topic: "Stagionalità multipla",
    q: "Una serie oraria di consumi elettrici può avere:",
    opts: [
      "Più stagionalità sovrapposte (giornaliera, settimanale, annuale)",
      "Nessuna stagionalità",
      "Solo un trend lineare",
      "Rumore casuale senza componente informativa sfruttabile dal modello"
    ],
    correct: [0],
    exp: "Serie ad alta frequenza mostrano spesso stagionalità multiple: ciclo giornaliero (giorno/notte), settimanale (feriali/weekend) e annuale. Servono modelli capaci di gestirle insieme."
  },
  {
    id: "u10047", topic: "Differenziazione stagionale",
    q: "La differenziazione stagionale (es. y_t − y_(t−12)) serve a:",
    opts: [
      "Rimuovere la stagionalità di periodo 12",
      "Aggiungere un trend",
      "Aumentare la frequenza di campionamento dei dati",
      "Creare outlier"
    ],
    correct: [0],
    exp: "Sottrarre il valore dello stesso periodo dell'anno prima (lag stagionale) elimina la stagionalità, come la differenziazione ordinaria rimuove il trend. Usata in SARIMA."
  },
  {
    id: "u10048", topic: "Interpretazione ACF",
    q: "Un ACF che decade lentamente indica tipicamente:",
    opts: [
      "Presenza di un trend / non stazionarietà",
      "Rumore bianco puro",
      "Assenza di correlazione",
      "Stagionalità perfetta"
    ],
    correct: [0],
    exp: "Un ACF che scende molto lentamente segnala forte persistenza/trend (non stazionarietà): la serie va differenziata. Un ACF che si azzera rapidamente indica maggiore stazionarietà."
  },
  {
    id: "u10049", topic: "Previsione: incertezza",
    q: "Gli intervalli di previsione (prediction intervals) indicano:",
    opts: [
      "Il range di incertezza attorno alla previsione puntuale",
      "Il valore futuro puntuale assunto certo, senza intervallo di incertezza",
      "La media calcolata sui dati storici senza quantificare incertezza futura",
      "Il numero di lag"
    ],
    correct: [0],
    exp: "Oltre alla previsione puntuale, gli intervalli quantificano l'incertezza (es. 95% di probabilità che il valore reale cada nel range). Si allargano man mano che l'orizzonte cresce."
  },
  {
    id: "u10050", topic: "Modelli ML per serie",
    q: "Per il forecasting si possono usare anche modelli ML (es. gradient boosting) se:",
    opts: [
      "Si costruiscono feature di lag e di calendario adeguate",
      "Si ignora l'ordine temporale",
      "Non si creano feature",
      "Si usa solo la media"
    ],
    correct: [0],
    exp: "Modelli ML generici prevedono serie temporali trasformando il problema in supervisionato con feature di lag, medie mobili e calendario, e validazione temporale per evitare leakage."
  },
  {
    id: "u10051", topic: "Trend non lineare",
    q: "Se il trend di una serie non è lineare, si può:",
    opts: [
      "Usare trasformazioni o modelli flessibili (spline, Prophet)",
      "Ignorare sempre il trend non lineare invece di modellarlo",
      "Applicare una sola differenziazione anche se il trend resta non lineare",
      "Eliminare osservazioni invece di modellare la struttura della serie"
    ],
    correct: [0],
    exp: "Trend curvilinei richiedono trasformazioni (log), differenziazioni multiple o modelli che catturano curve (spline, Prophet, modelli non lineari), non solo un detrending lineare."
  },
  {
    id: "u10052", topic: "Serie storiche vs cross-section",
    q: "Cosa distingue dati di serie storica da dati cross-section?",
    opts: [
      "La serie storica ha un ordine temporale; la cross-section fotografa un istante",
      "Hanno comportamento e risultato identici nello stesso contesto operativo",
      "La cross-section è sempre più grande",
      "La serie storica non ha date"
    ],
    correct: [0],
    exp: "I dati cross-section riguardano più unità in un momento fisso (es. redditi di 1000 persone oggi); la serie storica segue una o più unità nel tempo (es. il PIL anno per anno)."
  },
  {
    id: "u10053", topic: "Stagionalità: indici",
    q: "Gli indici stagionali quantificano:",
    opts: [
      "Di quanto ciascun periodo si discosta in media dal livello base",
      "Il numero di osservazioni anomale nella serie",
      "La correlazione tra due serie temporali distinte",
      "Il trend lineare"
    ],
    correct: [0],
    exp: "Gli indici stagionali misurano l'effetto tipico di ogni periodo (es. dicembre +30%, agosto −20%): servono a destagionalizzare e a costruire previsioni stagionali."
  },
  {
    id: "u10054", topic: "Modello ingenuo stagionale",
    q: "Il 'seasonal naïve' prevede per un periodo futuro:",
    opts: [
      "Il valore osservato nello stesso periodo del ciclo precedente",
      "La media complessiva della serie, ignorando finestra e stagionalità",
      "Sempre zero",
      "Un valore generato casualmente senza usare struttura o ordine dei dati"
    ],
    correct: [0],
    exp: "Il seasonal naïve usa come previsione il valore dello stesso periodo del ciclo precedente (es. le vendite di dicembre scorso per il prossimo dicembre): baseline forte con dati stagionali."
  },
  {
    id: "u10055", topic: "Smoothing semplice",
    q: "Il lisciamento esponenziale SEMPLICE è adatto a serie:",
    opts: [
      "Senza trend né stagionalità evidenti",
      "Con forte stagionalità",
      "Con trend crescente marcato",
      "Categoriche"
    ],
    correct: [0],
    exp: "Il simple exponential smoothing modella solo il livello: va bene per serie piatte senza trend/stagionalità. Per trend serve Holt, per stagionalità Holt-Winters."
  },
  {
    id: "u10056", topic: "Correlazione spuria temporale",
    q: "Due serie entrambe con trend crescente possono apparire correlate:",
    opts: [
      "Anche senza alcun legame reale (correlazione spuria da trend comune)",
      "Solo in presenza di causalità diretta tra le due serie",
      "Non avviene in nessuna configurazione utile del problema",
      "Solo quando entrambe le serie sono già stazionarie"
    ],
    correct: [0],
    exp: "Serie con trend tendono a correlare per il solo fatto di crescere insieme (correlazione spuria). Per un confronto corretto vanno rese stazionarie (es. differenziandole)."
  },
  {
    id: "u10057", topic: "Frequenza di campionamento",
    q: "Aggregare dati ad alta frequenza a una frequenza più bassa:",
    opts: [
      "Riduce il rumore ma può nascondere pattern di breve periodo",
      "Aumenta sempre il dettaglio",
      "Lascia invariato il risultato dell'operazione sui dati",
      "Elimina il trend"
    ],
    correct: [0],
    exp: "Il downsampling (es. da minuti a ore) smussa il rumore e semplifica, ma può mascherare dinamiche rapide. La scelta della granularità dipende dall'obiettivo dell'analisi."
  },
  {
    id: "u10058", topic: "Autocorrelazione: uso",
    q: "L'ACF e la PACF servono soprattutto a:",
    opts: [
      "Identificare gli ordini di un modello ARIMA",
      "Rimuovere la stagionalità dalla serie storica",
      "Contare i valori mancanti presenti nella serie",
      "Normalizzare i valori della serie tra 0 e 1"
    ],
    correct: [0],
    exp: "I pattern di ACF (che suggerisce q) e PACF (che suggerisce p) guidano la scelta degli ordini di un modello ARIMA, insieme al grado di differenziazione d."
  },
  {
    id: "u10059", topic: "Prevedibilità",
    q: "Una serie di puro rumore bianco è:",
    opts: [
      "Sostanzialmente imprevedibile oltre la sua media",
      "Facilmente prevedibile oltre la media nonostante assenza di struttura",
      "Sempre crescente come una serie con trend monotono",
      "Stagionale con pattern ripetuto a periodo fisso"
    ],
    correct: [0],
    exp: "Se la serie è white noise non c'è struttura da sfruttare: la miglior previsione è la media. Quando i residui di un modello sono white noise, si è estratto tutto il segnale."
  },
  {
    id: "u10060", topic: "Lag plot",
    q: "Un lag plot (y_t contro y_(t−1)) serve a:",
    opts: [
      "Visualizzare l'autocorrelazione a lag 1",
      "Contare le categorie",
      "Mostrare la media",
      "Raggruppare osservazioni simili senza prevedere valori futuri"
    ],
    correct: [0],
    exp: "Il lag plot mette in relazione ogni valore con il precedente: una nube allineata indica autocorrelazione (struttura), una nube sparsa indica assenza di dipendenza (rumore)."
  },
  {
    id: "u10061", topic: "Modello locale vs globale",
    q: "Nelle previsioni, un modello 'globale' addestrato su molte serie:",
    opts: [
      "Impara pattern comuni condivisi tra le serie",
      "Funziona solo su una serie",
      "Ignora i dati",
      "Non usa il tempo"
    ],
    correct: [0],
    exp: "I modelli globali (comuni nel deep learning per serie) apprendono da molte serie simili contemporaneamente, sfruttando pattern condivisi, utile con tante serie brevi."
  },
  {
    id: "u10062", topic: "Componente irregolare",
    q: "La componente irregolare (residuo) di una serie è:",
    opts: [
      "Ciò che resta dopo aver rimosso trend e stagionalità",
      "La componente di trend già rimossa nella decomposizione",
      "La componente periodica della serie, non il residuo irregolare",
      "Una media calcolata su finestre temporali scorrevoli"
    ],
    correct: [0],
    exp: "Il residuo è la parte non spiegata da trend e stagionalità: idealmente casuale (white noise). Se contiene ancora struttura, il modello va migliorato."
  },
  {
    id: "u10063", topic: "Persistenza",
    q: "Una serie 'persistente' (alta autocorrelazione) implica che:",
    opts: [
      "I valori vicini nel tempo tendono a somigliarsi",
      "Ogni valore è indipendente",
      "Non c'è memoria",
      "La media è nulla"
    ],
    correct: [0],
    exp: "Persistenza significa che un valore alto tende a essere seguito da valori alti (e viceversa): forte dipendenza temporale, sfruttabile per la previsione."
  },
  {
    id: "u10064", topic: "Trasformazione Box-Cox",
    q: "La trasformazione di Box-Cox serve a:",
    opts: [
      "Stabilizzare la varianza e avvicinare i dati alla normalità",
      "Aggiungere artificialmente una componente stagionale al modello",
      "Aumentare la frequenza di campionamento dei dati",
      "Creare classi discrete a partire da valori continui"
    ],
    correct: [0],
    exp: "Box-Cox è una famiglia di trasformazioni (che include il log) per stabilizzare la varianza e rendere i dati più adatti a modelli che assumono varianza costante e normalità."
  },
  {
    id: "u10065", topic: "Previsione multi-step",
    q: "Nella previsione a più passi (multi-step), un approccio è:",
    opts: [
      "Ricorsivo: usare le previsioni precedenti come input per le successive",
      "Ignorare gli orizzonti successivi alla prima previsione",
      "Stimare solo l'orizzonte immediato senza catena multi-step",
      "Usare solo la media"
    ],
    correct: [0],
    exp: "Nel forecasting ricorsivo si prevede un passo alla volta reinserendo le previsioni come input. In alternativa si addestra un modello diretto per ciascun orizzonte."
  },
  {
    id: "u10066", topic: "Errore che si accumula",
    q: "Nelle previsioni ricorsive a lungo orizzonte l'errore:",
    opts: [
      "Tende ad accumularsi passo dopo passo",
      "Diminuisce sempre",
      "Resta costante",
      "Diventa negativo"
    ],
    correct: [0],
    exp: "Usando le proprie previsioni come input, gli errori si propagano e si sommano: le previsioni a lungo termine sono meno affidabili di quelle a breve."
  },
  {
    id: "u10067", topic: "Media mobile centrata",
    q: "Una media mobile centrata è usata soprattutto per:",
    opts: [
      "Stimare il trend in modo simmetrico attorno a ogni punto",
      "Prevedere il futuro",
      "Aggiungere rumore casuale alla serie osservata",
      "Classificare categorie"
    ],
    correct: [0],
    exp: "La media mobile centrata usa valori prima e dopo il punto: ottima per stimare il trend in analisi retrospettiva, ma non utilizzabile in tempo reale (richiede valori futuri)."
  },
  {
    id: "u10068", topic: "Serie intermittenti",
    q: "Le serie 'intermittenti' (molti zeri, domanda sporadica) richiedono:",
    opts: [
      "Metodi specifici (es. Croston), perché i modelli standard funzionano male",
      "Usare sempre un ARIMA classico anche con molti zeri e domanda sporadica",
      "Non applicare alcuna tecnica specifica nonostante zeri e irregolarità",
      "La sola media, ignorando dispersione, dipendenze o struttura dei dati"
    ],
    correct: [0],
    exp: "Con domanda intermittente (tanti periodi a zero) i modelli classici falliscono. Metodi come Croston stimano separatamente la frequenza e l'entità della domanda."
  },
  {
    id: "u10069", topic: "Frequenza vs periodo",
    q: "In una serie mensile con stagionalità annuale, il periodo stagionale è:",
    opts: [
      "12",
      "1",
      "365",
      "24"
    ],
    correct: [0],
    exp: "Il periodo stagionale è il numero di osservazioni per ciclo: 12 per dati mensili con ciclo annuale, 7 per dati giornalieri con ciclo settimanale, 24 per dati orari con ciclo giornaliero."
  },
  {
    id: "u10070", topic: "Detrend con regressione",
    q: "Rimuovere il trend con una regressione sul tempo significa:",
    opts: [
      "Stimare il trend con una retta/curva e sottrarlo dalla serie",
      "Aggiungere una retta al grafico senza rimuovere il trend stimato",
      "Mescolare le osservazioni, distruggendo l'ordine temporale della serie",
      "Ignorare l'ordine temporale nello split o nella trasformazione"
    ],
    correct: [0],
    exp: "Si può modellare il trend come funzione del tempo (regressione) e sottrarlo, ottenendo i residui destendenzializzati. È un'alternativa alla differenziazione."
  },
  {
    id: "u10071", topic: "Concetto di shock",
    q: "Uno 'shock' in una serie temporale è:",
    opts: [
      "Una perturbazione improvvisa (es. evento eccezionale)",
      "La media aritmetica dei valori osservati nella variabile",
      "La componente di lungo periodo che descrive la direzione della serie",
      "La cadenza con cui le osservazioni vengono registrate nel tempo"
    ],
    correct: [0],
    exp: "Uno shock è un evento inatteso che devia la serie (crisi, pandemia, promozione). In serie stazionarie l'effetto svanisce; con radice unitaria diventa permanente."
  },
  {
    id: "u10072", topic: "Feature: media mobile",
    q: "Usare la media mobile come feature in un modello di forecasting aiuta a:",
    opts: [
      "Fornire una sintesi del recente andamento della serie",
      "Aumentare il rumore",
      "Rimuovere la data",
      "Creare classi discrete a partire da valori continui"
    ],
    correct: [0],
    exp: "Le medie mobili (e altre statistiche su finestra) riassumono il comportamento recente della serie, offrendo al modello un segnale utile sul livello e sulla direzione correnti."
  },
  {
    id: "u10073", topic: "Stagionalità additiva",
    q: "Con stagionalità additiva, l'ampiezza delle oscillazioni stagionali:",
    opts: [
      "Resta costante indipendentemente dal livello della serie",
      "Cresce proporzionalmente al livello medio della serie",
      "È sempre zero, quindi non esiste componente stagionale",
      "Varia casualmente senza una relazione stabile con i dati osservati"
    ],
    correct: [0],
    exp: "Nell'additivo la stagionalità ha ampiezza costante (si somma). Nel moltiplicativo l'ampiezza cresce col livello (si moltiplica): la scelta dipende dai dati osservati."
  },
  {
    id: "u10074", topic: "Valutazione: naïve",
    q: "Se un modello complesso non batte il metodo naïve, allora:",
    opts: [
      "Non vale la pena usarlo: non aggiunge valore predittivo",
      "È comunque migliore",
      "Va reso più complesso a prescindere",
      "Il naïve è sbagliato"
    ],
    correct: [0],
    exp: "La baseline naïve è il metro minimo: un modello sofisticato ha senso solo se la supera chiaramente. Altrimenti aggiunge complessità senza beneficio."
  },
  {
    id: "u10075", topic: "Serie storica: obiettivi",
    q: "Oltre alla previsione, l'analisi di serie storiche serve anche a:",
    opts: [
      "Capire le componenti (trend, stagionalità) e rilevare anomalie",
      "Contare semplicemente il numero di osservazioni",
      "Ordinare le osservazioni in base al loro valore",
      "Trasformare la serie in una variabile categorica"
    ],
    correct: [0],
    exp: "L'analisi delle serie serve a descrivere e comprendere i fenomeni (trend, stagionalità, cicli), monitorare, rilevare anomalie e cambi di regime, oltre a prevedere."
  },
  {
    id: "u10076", topic: "Lag e causalità",
    q: "Il test di causalità di Granger verifica se:",
    opts: [
      "I valori passati di una serie aiutano a prevedere un'altra serie",
      "Due serie hanno la stessa media",
      "Una serie è stazionaria",
      "C'è stagionalità"
    ],
    correct: [0],
    exp: "La causalità di Granger valuta se il passato di X migliora la previsione di Y rispetto al solo passato di Y. È una nozione predittiva, non una causalità in senso stretto."
  },
  {
    id: "u10077", topic: "Frequenza irregolare",
    q: "Con osservazioni a intervalli irregolari, prima di molti modelli conviene:",
    opts: [
      "Riportare la serie a una frequenza regolare (resampling/interpolazione)",
      "Ignorare il problema",
      "Rimuovere tutte le date",
      "Aggiungere rumore casuale alla serie osservata"
    ],
    correct: [0],
    exp: "Molti modelli assumono passi temporali regolari: dati irregolari vanno ricondotti a una griglia temporale uniforme tramite aggregazione o interpolazione."
  },
  {
    id: "u10078", topic: "Componenti: ordine di analisi",
    q: "Un approccio comune è: prima stabilizzare la varianza, poi:",
    opts: [
      "Rimuovere trend e stagionalità (rendere stazionaria) e infine modellare",
      "Modellare subito la serie senza alcuna trasformazione",
      "Aggiungere rumore casuale prima di modellare",
      "Ridurre la granularità temporale aggregando osservazioni"
    ],
    correct: [0],
    exp: "Tipico flusso: log/Box-Cox per la varianza → differenziazione per trend/stagionalità → verifica stazionarietà → identificazione e stima del modello (es. ARIMA) → diagnostica dei residui."
  },
  {
    id: "u10079", topic: "Modelli esponenziali vs ARIMA",
    q: "Exponential smoothing e ARIMA sono:",
    opts: [
      "Due famiglie di metodi, spesso complementari, per il forecasting",
      "La stessa identica cosa",
      "Metodi di clustering",
      "Tecniche di visualizzazione"
    ],
    correct: [0],
    exp: "Sono due grandi famiglie di metodi statistici per serie: lo smoothing esponenziale e gli ARIMA. In molti casi danno risultati simili; la scelta dipende dai dati e dal contesto."
  },
  {
    id: "u10080", topic: "Serie e outlier",
    q: "Un outlier in una serie temporale può:",
    opts: [
      "Distorcere trend, stagionalità e previsioni se non trattato",
      "Migliorare sempre il modello",
      "Non avere mai effetto",
      "Rendere la serie stazionaria"
    ],
    correct: [0],
    exp: "Gli outlier (picchi anomali) possono falsare la stima delle componenti e le previsioni. Vanno individuati e gestiti (correzione, modelli robusti), valutandone la natura."
  },
  {
    id: "u10081", topic: "Ciclo economico",
    q: "I cicli economici sono un esempio di componente:",
    opts: [
      "Ciclica (durata variabile, non periodo fisso)",
      "Una componente stagionale con periodo fisso e regolare",
      "Una componente casuale senza struttura ciclica interpretabile",
      "Una crescita o decrescita lineare di lungo periodo"
    ],
    correct: [0],
    exp: "I cicli economici (espansioni e recessioni) hanno durata variabile e irregolare: sono componenti cicliche, distinte dalla stagionalità che ha periodo fisso e regolare."
  },
  {
    id: "u10082", topic: "Feature engineering temporale",
    q: "Una 'lag feature' in un dataset di forecasting è:",
    opts: [
      "Una colonna col valore della serie in periodi precedenti",
      "La data corrente",
      "Un valore generato casualmente senza usare struttura o ordine dei dati",
      "La media calcolata su tutte le righe senza distinguere gruppi"
    ],
    correct: [0],
    exp: "Le lag feature riportano su ogni riga i valori passati (y a t-1, t-2, ...): trasformano la serie in un problema supervisionato utilizzabile da modelli ML generici."
  },
  {
    id: "u10083", topic: "Stabilità del modello",
    q: "Ri-addestrare periodicamente un modello di forecasting serve a:",
    opts: [
      "Adattarsi a nuovi dati e cambiamenti nei pattern (drift)",
      "Peggiorare le previsioni",
      "Cancellare la storia",
      "Ignorare il presente"
    ],
    correct: [0],
    exp: "I pattern cambiano nel tempo (drift): aggiornare il modello con i dati recenti mantiene le previsioni allineate alla realtà corrente."
  },
  {
    id: "u10084", topic: "Media mobile ponderata",
    q: "Una media mobile ponderata assegna ai valori della finestra:",
    opts: [
      "Pesi diversi (spesso maggiori ai più recenti)",
      "Sempre peso uguale",
      "Un peso nullo che esclude l'osservazione o la feature dal calcolo",
      "Peso solo al primo"
    ],
    correct: [0],
    exp: "La media mobile ponderata dà più importanza a certi valori (di solito i recenti), reagendo più prontamente ai cambiamenti rispetto alla media mobile semplice."
  },
  {
    id: "u10085", topic: "Autocorrelazione negativa",
    q: "Un'autocorrelazione negativa a lag 1 suggerisce che:",
    opts: [
      "A un valore alto tende a seguirne uno basso (alternanza)",
      "I valori si somigliano",
      "Non c'è struttura",
      "C'è un trend crescente"
    ],
    correct: [0],
    exp: "Autocorrelazione negativa indica alternanza: un valore sopra la media tende a essere seguito da uno sotto la media. È comunque struttura sfruttabile per prevedere."
  },
  {
    id: "u10086", topic: "Confronto modelli",
    q: "Per confrontare modelli di forecasting si usano criteri come:",
    opts: [
      "AIC/BIC ed errori su dati di test (RMSE, MAE, MAPE)",
      "Una proprietà visuale del grafico, non una logica di calcolo",
      "Il numero di righe presenti nel dataset o nel risultato",
      "La lunghezza del codice"
    ],
    correct: [0],
    exp: "Si combinano criteri di informazione (AIC/BIC, che penalizzano la complessità) e l'errore su dati di validazione/test. L'obiettivo è previsione accurata senza overfitting."
  },
  {
    id: "u10087", topic: "Serie e granularità",
    q: "Prevedere le vendite giornaliere è in genere ___ che prevedere quelle mensili.",
    opts: [
      "Più difficile (più rumore e variabilità)",
      "Più facile perché si assume meno rumore nella granularità giornaliera",
      "Con lo stesso livello di difficoltà e variabilità della serie aggregata",
      "Impossibile da stimare anche con dati storici sufficienti"
    ],
    correct: [0],
    exp: "A granularità fine (giornaliera) c'è più rumore e variabilità (weekend, eventi), rendendo la previsione più difficile. L'aggregazione mensile smussa e spesso è più prevedibile."
  },
  {
    id: "u10088", topic: "Componenti sovrapposte",
    q: "In una serie reale, trend, stagionalità e rumore:",
    opts: [
      "Coesistono e vanno separati per analizzarla bene",
      "Non compaiono mai insieme",
      "Rappresentano lo stesso concetto e sono intercambiabili nell'esercizio",
      "Non esistono"
    ],
    correct: [0],
    exp: "Le serie reali combinano più componenti sovrapposte: la decomposizione le separa per capirle e modellarle correttamente, isolando ciò che è prevedibile dal rumore."
  },
  {
    id: "u10089", topic: "Previsione: punto di partenza",
    q: "Prima di scegliere un modello complesso conviene:",
    opts: [
      "Provare baseline semplici (naïve, media mobile) come riferimento",
      "Usare subito il deep learning",
      "Evitare qualsiasi valutazione",
      "Rimuovere i dati storici"
    ],
    correct: [0],
    exp: "Partire da baseline semplici stabilisce un riferimento: molti problemi si risolvono bene senza modelli complessi, e comunque servono a giudicare i miglioramenti reali."
  },
  {
    id: "u10090", topic: "Serie: memoria lunga",
    q: "Una serie a 'memoria lunga' presenta:",
    opts: [
      "Autocorrelazioni che decadono molto lentamente",
      "Nessuna autocorrelazione",
      "Solo stagionalità",
      "Valori indipendenti"
    ],
    correct: [0],
    exp: "Nelle serie a memoria lunga la dipendenza tra osservazioni persiste su ritardi molto ampi (ACF che decade lentamente). Richiedono modelli specifici (es. ARFIMA)."
  },
  {
    id: "u10091", topic: "Standardizzazione temporale",
    q: "Nelle serie, quando si standardizzano le feature per un modello ML, i parametri (media/sd) vanno calcolati:",
    opts: [
      "Solo sul training, per evitare leakage dal futuro",
      "Su tutta la serie compreso il test",
      "Sul solo test",
      "In modo casuale"
    ],
    correct: [0],
    exp: "Come in ogni ML, le statistiche di scaling si stimano sul training e si applicano al test: usando anche il test (futuro) si introdurrebbe leakage."
  },
  {
    id: "u10092", topic: "Grafico stagionale",
    q: "Uno 'seasonal plot' (per periodo) aiuta a:",
    opts: [
      "Confrontare l'andamento tra i vari cicli (es. anni) sovrapposti",
      "Contare le righe disponibili invece di analizzare il fenomeno richiesto",
      "Mostrare la media globale",
      "Raggruppare osservazioni simili senza prevedere valori futuri"
    ],
    correct: [0],
    exp: "Il seasonal plot sovrappone i cicli (es. tutti gli anni sullo stesso asse mensile) per evidenziare il pattern stagionale e le differenze tra periodi."
  },
  {
    id: "u10093", topic: "Aggregazione e previsione",
    q: "La 'previsione gerarchica' riconcilia previsioni fatte a:",
    opts: [
      "Diversi livelli di aggregazione (es. prodotto, categoria, totale)",
      "Un unico livello di aggregazione senza riconciliazione gerarchica",
      "Nessuna struttura gerarchica tra serie aggregate e dettagliate",
      "Livelli di aggregazione scelti casualmente senza coerenza contabile"
    ],
    correct: [0],
    exp: "Con dati organizzati gerarchicamente (prodotto→categoria→totale), la previsione gerarchica assicura coerenza tra i livelli (le somme dei figli tornano col padre)."
  },
  {
    id: "u10094", topic: "Effetto calendario",
    q: "Gli 'effetti di calendario' (festività, giorni lavorativi) in una serie:",
    opts: [
      "Possono influenzarne i valori e vanno modellati come variabili",
      "Non influenzano mai la serie, nemmeno in presenza di festività",
      "Sostituiscono la componente di trend invece di affiancarla",
      "Sono rumore casuale e non variabili esplicative modellabili"
    ],
    correct: [0],
    exp: "Festività, ponti e numero di giorni lavorativi impattano vendite, traffico, consumi: includerli come variabili (regressori) migliora le previsioni rispetto a ignorarli."
  },
  {
    id: "u10095", topic: "Modello ingenuo drift",
    q: "Il metodo 'naïve con drift' prevede:",
    opts: [
      "L'ultimo valore più la variazione media osservata nel tempo",
      "Sempre la media",
      "Solo l'ultimo valore",
      "Un valore generato casualmente senza usare struttura o ordine dei dati"
    ],
    correct: [0],
    exp: "Il naïve con drift estende l'ultimo valore lungo la pendenza media storica: una baseline che tiene conto di un trend, migliore del naïve puro su serie in crescita/calo costante."
  },
  {
    id: "u10096", topic: "Residui: diagnostica",
    q: "Una buona diagnostica dei residui di un modello di serie verifica che siano:",
    opts: [
      "Incorrelati, a media zero e varianza costante",
      "Fortemente autocorrelati",
      "Con trend crescente",
      "Tutti uguali"
    ],
    correct: [0],
    exp: "Idealmente i residui sono white noise: nessuna autocorrelazione (ACF piatta), media zero, varianza costante. In caso contrario resta struttura da modellare."
  },
  {
    id: "u10097", topic: "Serie non stazionaria: rischi",
    q: "Applicare un modello che richiede stazionarietà a una serie non stazionaria:",
    opts: [
      "Produce stime inaffidabili e previsioni scadenti",
      "Funziona sempre bene",
      "Rende la serie stazionaria",
      "Non ha conseguenze"
    ],
    correct: [0],
    exp: "Ignorare la non stazionarietà (trend, radice unitaria) porta a inferenze errate e correlazioni spurie. Va prima resa stazionaria (differenziazione, trasformazioni)."
  },
  {
    id: "u10098", topic: "Frequenza e stagionalità",
    q: "Una serie annuale (un dato per anno) può avere stagionalità infra-annuale?",
    opts: [
      "No: con un solo dato per anno la stagionalità intra-annuale non è osservabile",
      "Sì, in ogni caso, indipendentemente da frequenza e granularità dei dati",
      "Sì, ma solo mensile",
      "Dipende da una proprietà grafica e non dalla struttura temporale dei dati"
    ],
    correct: [0],
    exp: "La stagionalità richiede più osservazioni per ciclo: con dati annuali non si può cogliere una stagionalità mensile/trimestrale (non ci sono osservazioni entro l'anno)."
  },
  {
    id: "u10099", topic: "Interpolazione vs previsione",
    q: "Qual è la differenza tra interpolazione e previsione (estrapolazione)?",
    opts: [
      "L'interpolazione stima valori dentro il range osservato, la previsione oltre (nel futuro)",
      "Producono lo stesso risultato e differiscono solo nel nome usato",
      "La previsione è dentro il range",
      "L'interpolazione riguarda il futuro"
    ],
    correct: [0],
    exp: "Interpolare stima valori mancanti tra dati noti (dentro il range); prevedere estrapola oltre l'ultimo dato (nel futuro), operazione più incerta."
  },
  {
    id: "u10100", topic: "Pipeline serie storica",
    q: "Un flusso tipico di analisi di una serie temporale è:",
    opts: [
      "Visualizzare → trasformare/rendere stazionaria → modellare → validare (temporale) → prevedere",
      "Visualizzare → modellare → trasformare/rendere stazionaria → validare (temporale) → prevedere",
      "Visualizzare → trasformare/rendere stazionaria → prevedere → modellare → validare (temporale)",
      "Prevedere → visualizzare → trasformare/rendere stazionaria → modellare → validare (temporale)"
    ],
    correct: [0],
    exp: "Il flusso: esplorare la serie, stabilizzarla (varianza, trend, stagionalità), identificare e stimare un modello, validarlo con backtesting temporale e infine produrre previsioni con intervalli."
  },
  // === AGGIUNGI NUOVE DOMANDE TIME SERIES QUI ===
]);
