/* ============================================================
   MATERIA: Python  —  banca domande
   Ogni oggetto: { id, topic, q, opts:[...], correct:[indici], exp }
   correct e SEMPRE un array: >1 elemento = domanda a risposta multipla.
   Per aggiungere domande: copia un blocco prima del marcatore in fondo.
   ============================================================ */
registerSubject("Python", [
  {
    id: "py001", topic: "Basi del linguaggio",
    q: "Quale affermazione descrive correttamente Python?",
    opts: [
      "È un linguaggio interpretato e a tipizzazione dinamica",
      "È compilato in anticipo in linguaggio macchina come il C",
      "Usa la tipizzazione statica, con i tipi dichiarati a mano"
    ],
    correct: [0],
    exp: "Python è interpretato (eseguito riga per riga) e a tipizzazione DINAMICA: il tipo si decide a runtime e non va dichiarato. Non è compilato in anticipo come C, né statico come Java."
  },
  {
    id: "py002", topic: "Basi del linguaggio",
    q: "Cosa significa che Python ha 'tipizzazione dinamica'?",
    opts: [
      "Che ogni variabile va dichiarata col suo tipo prima dell'uso",
      "Che il tipo di una variabile è deciso a runtime e può cambiare",
      "Che una variabile, una volta assegnata, non può cambiare tipo"
    ],
    correct: [1],
    exp: "Con la tipizzazione dinamica non dichiari il tipo: scrivi x = 5 e Python capisce che è un intero; poi puoi fare x = 'ciao' e diventa una stringa. Il controllo del tipo avviene mentre il programma gira."
  },
  {
    id: "py003", topic: "Commenti e indentazione",
    q: "Come si scrive un commento su una singola riga in Python?",
    opts: [
      "-- commento",
      "// commento",
      "# commento"
    ],
    correct: [2],
    exp: "In Python il commento a riga singola inizia con il carattere #. Tutto ciò che segue # sulla stessa riga viene ignorato dall'interprete. (// e /* */ sono di altri linguaggi, -- è di SQL)."
  },
  {
    id: "py004", topic: "Lettura di codice",
    q: "Cosa stampa questo codice?\n\nnums = [1, 2, 3, 4, 5, 6]\nprint([n*n for n in nums if n % 2 != 0])",
    opts: [
      "[1, 9, 25]",
      "[1, 4, 9, 16, 25, 36]",
      "[1, 3, 5]"
    ],
    correct: [0],
    exp: "La list comprehension tiene solo i dispari (if n%2!=0 → 1,3,5) e ne fa il quadrato → [1, 9, 25]. Elevare al quadrato tutti gli elementi ignora il filtro; [1,3,5] applica il filtro ma dimentica il quadrato."
  },
  {
    id: "py005", topic: "Commenti e indentazione",
    q: "Perché in Python è pericoloso mischiare TAB e spazi per indentare?",
    opts: [
      "Il carattere TAB è vietato dalla sintassi di Python in ogni circostanza",
      "Il TAB dipende dall'editor: può creare indentazioni incoerenti ed errori",
      "Non causa problemi: TAB e spazi sono trattati come equivalenti dall'interprete"
    ],
    correct: [1],
    exp: "A seconda dell'editor, TAB può inserire un carattere speciale oppure un numero variabile di spazi. Mischiarli fa sì che due righe SEMBRINO allineate ma non lo siano per Python → IndentationError. Meglio usare sempre 4 spazi."
  },
  {
    id: "py006", topic: "Operatori aritmetici",
    q: "Quanto vale 40 // 3 in Python?",
    opts: [
      "12",
      "13.33",
      "13"
    ],
    correct: [2],
    exp: "L'operatore // è la divisione INTERA (floor division): restituisce solo la parte intera del quoziente. 40 diviso 3 fa 13,33 → // dà 13. (Il resto 1 lo dà invece l'operatore %)."
  },
  {
    id: "py007", topic: "Operatori aritmetici",
    q: "Quanto vale 40 % 3 in Python?",
    opts: [
      "1",
      "13",
      "0"
    ],
    correct: [0],
    exp: "L'operatore % è il MODULO: restituisce il RESTO della divisione. 40 = 3×13 + 1, quindi il resto è 1. Utile ad esempio per capire se un numero è pari: n % 2 == 0."
  },
  {
    id: "py008", topic: "Operatori aritmetici",
    q: "Quanto vale 5 ** 3 in Python?",
    opts: [
      "15",
      "125",
      "8"
    ],
    correct: [1],
    exp: "L'operatore ** è l'ELEVAMENTO A POTENZA. 5 ** 3 significa 5 elevato alla 3 = 5×5×5 = 125."
  },
  {
    id: "py009", topic: "Operatori aritmetici",
    q: "Di che tipo è il risultato dell'espressione 40 / 3 ?",
    opts: [
      "str (stringa), cioè il testo '13.33'",
      "int (numero intero), vale esattamente 13",
      "float (numero decimale), vale circa 13.33"
    ],
    correct: [2],
    exp: "In Python 3 l'operatore / esegue SEMPRE la divisione reale e restituisce un float, anche se il risultato fosse tondo (es. 6/2 dà 3.0). Per avere l'intero si usa //."
  },
  {
    id: "py010", topic: "Input e Output",
    q: "La funzione input() restituisce sempre un valore di tipo...",
    opts: [
      "Una stringa, qualunque cosa l'utente digiti",
      "Il tipo Python corrispondente a ciò che scrive",
      "Un intero quando inserisce solo cifre numeriche"
    ],
    correct: [0],
    exp: "input() restituisce SEMPRE una stringa (str), anche se l'utente digita dei numeri. Per ottenere un numero devi convertire esplicitamente, ad esempio int(input()) oppure float(input())."
  },
  {
    id: "py011", topic: "Input e Output",
    q: "Cosa stampa print('Hello', 'World', sep='-') ?",
    opts: [
      "Hello World",
      "Hello-World",
      "HelloWorld-"
    ],
    correct: [1],
    exp: "Il parametro sep definisce il separatore usato tra i vari argomenti di print. Con sep='-' i due valori vengono uniti da un trattino: Hello-World. Di default sep è uno spazio."
  },
  {
    id: "py012", topic: "Liste",
    q: "Data lista = ['a','b','c',10,15], cosa restituisce lista[-1] ?",
    opts: [
      "10",
      "'a'",
      "15"
    ],
    correct: [2],
    exp: "Gli indici negativi contano dalla FINE: -1 è l'ultimo elemento, -2 il penultimo, ecc. Quindi lista[-1] è 15."
  },
  {
    id: "py013", topic: "Liste",
    q: "Data lista = ['a','b','c',10,15] (5 elementi), cosa succede con lista[5] ?",
    opts: [
      "Solleva un IndexError, perché l'indice è fuori dai limiti della lista",
      "Restituisce None, dato che l'indice richiesto non corrisponde a un valore",
      "Restituisce l'ultimo elemento della lista, cioè il valore 15"
    ],
    correct: [0],
    exp: "Gli indici validi vanno da 0 a 4 (lunghezza 5 → ultimo indice = lunghezza-1). L'indice 5 non esiste, quindi Python solleva IndexError: list index out of range."
  },
  {
    id: "py013b", topic: "Liste",
    q: "Quale di questi metodi restituisce un valore SENZA modificare la lista?",
    opts: [
      "append()",
      "len()",
      "pop()"
    ],
    correct: [1],
    exp: "len() restituisce il numero di elementi e non tocca la lista. append() aggiunge un elemento in fondo e pop() ne rimuove uno: entrambi modificano la lista sul posto (in-place)."
  },
  {
    id: "py014", topic: "Liste",
    q: "Cosa restituisce l'espressione [1, 2, 3][::-1] ?",
    opts: [
      "Errore",
      "[1, 2, 3]",
      "[3, 2, 1]"
    ],
    correct: [2],
    exp: "Lo slice [::-1] scorre la sequenza con passo -1, cioè al contrario: inverte la lista → [3, 2, 1]. È un modo idiomatico per invertire liste e stringhe."
  },
  {
    id: "py015", topic: "Liste",
    q: "Data lista = ['a','b','c',10,15], cosa restituisce lista[:3] ?",
    opts: [
      "['a','b','c']",
      "['a','b','c',10]",
      "['c',10,15]"
    ],
    correct: [0],
    exp: "Lo slice [:3] prende gli elementi dagli indici 0, 1 e 2 (l'estremo destro 3 è ESCLUSO). Risultato: ['a','b','c']."
  },
  {
    id: "py016", topic: "Liste",
    q: "Cosa fa il metodo lista.append(20) ?",
    opts: [
      "Crea una nuova lista con 20 aggiunto, senza toccare l'originale",
      "Aggiunge 20 alla fine della lista, modificandola sul posto",
      "Inserisce 20 all'inizio della lista, prima di ogni altro elemento"
    ],
    correct: [1],
    exp: "append() aggiunge l'elemento in coda alla lista e modifica la lista ORIGINALE (in-place). Non restituisce una nuova lista: il suo valore di ritorno è None."
  },
  {
    id: "py017", topic: "Stringhe",
    q: "Cosa succede eseguendo 'Hello' + 1 ?",
    opts: [
      "Restituisce 6, sommando i codici dei caratteri della stringa",
      "Restituisce 'Hello1', convertendo automaticamente il numero in testo",
      "Solleva un TypeError: non si concatena una stringa con un intero"
    ],
    correct: [2],
    exp: "Python non converte automaticamente i tipi: sommare una stringa e un numero dà TypeError. Per concatenare devi convertire il numero: 'Hello' + str(1) → 'Hello1'."
  },
  {
    id: "py018", topic: "Stringhe",
    q: "Dato stringa = 'Hello World', cosa produce f'La frase è {stringa}!' ?",
    opts: [
      "'La frase è Hello World!'",
      "'La frase è {stringa}!'",
      "'La frase è stringa!'"
    ],
    correct: [0],
    exp: "La f-string (stringa preceduta da f) valuta le espressioni tra parentesi graffe e le sostituisce col loro valore. Quindi {stringa} viene rimpiazzato da 'Hello World'."
  },
  {
    id: "py019", topic: "Stringhe",
    q: "Quale espressione è un modo alternativo (equivalente) di scrivere f'Ciao {nome}' ?",
    opts: [
      "'Ciao {nome}'.format(nome)",
      "'Ciao {}'.format(nome)",
      "format('Ciao', nome)"
    ],
    correct: [1],
    exp: "Il metodo .format() sostituisce le graffe vuote {} con gli argomenti passati, in ordine: 'Ciao {}'.format(nome). È l'alternativa 'classica' alle f-string, introdotte più tardi."
  },
  {
    id: "py020", topic: "Dizionari",
    q: "Dato d = {'a':5,'b':10}, cosa succede scrivendo d['casa'] (chiave inesistente)?",
    opts: [
      "Aggiunge la chiave 'casa' con valore 0",
      "Restituisce il valore None",
      "Solleva un KeyError"
    ],
    correct: [2],
    exp: "Accedere a una chiave che non esiste con le parentesi quadre solleva KeyError. Per evitare l'errore si usa .get('casa'), che restituisce None (o un valore di default) invece di bloccare il programma."
  },
  {
    id: "py021", topic: "Dizionari",
    q: "Dato d = {'a':5,'b':10}, cosa restituisce d.get('casa', 0) ?",
    opts: [
      "0, cioè il valore di default indicato come secondo argomento",
      "None, ignorando il secondo argomento passato",
      "Solleva un KeyError perché la chiave 'casa' non esiste"
    ],
    correct: [0],
    exp: ".get(chiave, default) restituisce il valore della chiave se esiste, altrimenti il secondo argomento come default. Qui 'casa' non c'è, quindi restituisce 0. Senza il secondo argomento restituirebbe None."
  },
  {
    id: "py022", topic: "Dizionari",
    q: "Quale metodo di un dizionario restituisce le coppie (chiave, valore)?",
    opts: [
      "keys()",
      "items()",
      "values()"
    ],
    correct: [1],
    exp: "items() restituisce le coppie (chiave, valore). keys() restituisce le sole chiavi e values() i soli valori: tutti e tre metodi del dizionario, ma con risultato diverso."
  },
  {
    id: "py023", topic: "Valori logici (truthy/falsy)",
    q: "Quale di questi valori è considerato False (falsy) in un contesto booleano?",
    opts: [
      "[0] (lista con un elemento)",
      "'ciao' (stringa non vuota)",
      "[] (lista vuota)"
    ],
    correct: [2],
    exp: "Gli oggetti 'vuoti' sono falsy: la lista vuota [] vale False. Una stringa non vuota ('ciao') e una lista con almeno un elemento ([0], che contiene lo zero ma non è vuota) sono invece truthy."
  },
  {
    id: "py024", topic: "Valori logici (truthy/falsy)",
    q: "Quanto vale bool([1, 2]) ?",
    opts: [
      "True",
      "False",
      "2"
    ],
    correct: [0],
    exp: "Una lista NON vuota è truthy, quindi bool([1,2]) è True. Solo la lista vuota [] è False. Lo stesso vale per stringhe e dizionari."
  },
  {
    id: "py025", topic: "Operatori logici",
    q: "Quanto vale (True and False) or True ?",
    opts: [
      "False",
      "True",
      "None"
    ],
    correct: [1],
    exp: "Prima si valuta la parentesi: True and False = False. Poi False or True = True. and richiede che ENTRAMBI siano veri; or richiede che ALMENO uno sia vero."
  },
  {
    id: "py026", topic: "Operatori di comparazione",
    q: "Quanto vale 'hello' in 'Hello World!' ?",
    opts: [
      "True, perché l'operatore in ignora maiuscole e minuscole",
      "True, perché la frase contiene la sequenza di lettere h-e-l-l-o",
      "False, perché l'operatore in distingue maiuscole e minuscole"
    ],
    correct: [2],
    exp: "L'operatore 'in' verifica se una sottostringa è contenuta in un'altra, ma Python distingue maiuscole/minuscole (case sensitive): 'hello' con la h minuscola NON è dentro 'Hello World!'. Risultato: False."
  },
  {
    id: "py027", topic: "Operatori di comparazione",
    q: "Cosa verifica l'operatore != ?",
    opts: [
      "Che due valori siano diversi tra loro",
      "Che due valori siano uguali tra loro",
      "Che il primo valore sia maggiore del secondo"
    ],
    correct: [0],
    exp: "!= significa 'diverso da' e restituisce True quando i due valori NON sono uguali. È l'opposto di ==."
  },
  {
    id: "py028", topic: "Gestione eccezioni",
    q: "A cosa serve il costrutto try / except ?",
    opts: [
      "A ripetere più volte di seguito uno stesso blocco di codice",
      "A gestire gli errori senza far arrestare l'intero programma",
      "A definire una nuova funzione riutilizzabile nel programma"
    ],
    correct: [1],
    exp: "try/except serve a gestire le ECCEZIONI (errori a runtime): il codice 'a rischio' va nel blocco try; se genera un errore, invece di bloccare tutto il programma si esegue il blocco except."
  },
  {
    id: "py029", topic: "if / elif / else",
    q: "Cosa manca SEMPRE alla fine della riga di un if (o for, while, def)?",
    opts: [
      "Una parentesi graffa {",
      "Il punto e virgola;",
      "I due punti :"
    ],
    correct: [2],
    exp: "In Python l'intestazione di if/elif/else/for/while/def/class termina SEMPRE con i due punti ':' , seguiti dal blocco indentato. Dimenticarli causa un SyntaxError."
  },
  {
    id: "py030", topic: "if / elif / else",
    q: "In una catena if / elif / elif / else, quanti blocchi vengono eseguiti al massimo?",
    opts: [
      "Solo il primo blocco la cui condizione è vera, oppure l'else",
      "Tutti i blocchi la cui condizione risulta vera, in ordine",
      "due blocchi: quello dell'if iniziale e quello dell'else"
    ],
    correct: [0],
    exp: "Python valuta le condizioni dall'alto verso il basso ed esegue SOLO il primo ramo la cui condizione risulta vera; poi esce dall'intera struttura. Se nessuna condizione è vera esegue l'else (se presente)."
  },
  {
    id: "py031", topic: "match",
    q: "Da quale versione di Python è disponibile il costrutto match / case ?",
    opts: [
      "Python 3.6",
      "Python 3.10 o superiore",
      "Python 2.7"
    ],
    correct: [1],
    exp: "Il pattern matching structural con match/case è stato introdotto in Python 3.10. Su versioni precedenti non è disponibile e va usato if/elif."
  },
  {
    id: "py032", topic: "Cicli for e range",
    q: "Cosa rappresenta range(5) ?",
    opts: [
      "Da 0 a 5, con entrambi gli estremi inclusi",
      "Da 1 a 5, con entrambi gli estremi inclusi",
      "Da 0 a 4: lo 0 è incluso e il 5 è escluso"
    ],
    correct: [2],
    exp: "range(n) genera la sequenza da 0 INCLUSO a n ESCLUSO, quindi range(5) → 0,1,2,3,4. È una sequenza 'pigra' (congelata): per vederla come lista serve list(range(5))."
  },
  {
    id: "py033", topic: "Cicli for e range",
    q: "Perché questo codice NON modifica la lista? \n\nfor animale in animali:\n    animale = animale.upper()",
    opts: [
      "La variabile del ciclo è una copia: riassegnarla non tocca l'elemento nella lista",
      "Il metodo upper non esiste per le stringhe, quindi la riga viene ignorata",
      "Manca l'istruzione return, senza la quale la modifica non viene applicata"
    ],
    correct: [0],
    exp: "Nel for, 'animale' è una variabile temporanea che contiene il valore dell'elemento. Riassegnarla non tocca la lista. Per MODIFICARE gli elementi devi usare gli indici: for i in range(len(animali)): animali[i] = animali[i].upper()."
  },
  {
    id: "py034", topic: "Cicli for e range",
    q: "Cosa restituisce enumerate(lista) quando lo si scorre con un for?",
    opts: [
      "Solo gli elementi, uno dopo l'altro, come un normale for",
      "Ogni elemento accoppiato al suo indice numerico",
      "Solo gli indici numerici, senza i valori corrispondenti"
    ],
    correct: [1],
    exp: "enumerate() abbina a ogni elemento il suo indice: for i, el in enumerate(lista) ti dà sia la posizione i sia il valore el. Comodo quando ti serve anche l'indice mentre iteri."
  },
  {
    id: "py035", topic: "Cicli for e range",
    q: "Qual è una regola importante quando si itera con un for su una sequenza?",
    opts: [
      "Terminare ogni ciclo for con un blocco else, altrimenti non è valido",
      "Usare range al posto di scorrere direttamente gli elementi",
      "Non aggiungere né togliere elementi dalla sequenza che stai iterando"
    ],
    correct: [2],
    exp: "Modificare (aggiungere/rimuovere elementi) una sequenza mentre la si scorre con un for porta a risultati IMPREVEDIBILI, perché gli indici si spostano durante l'iterazione. Se devi rimuovere elementi, usa un while o costruisci una nuova lista."
  },
  {
    id: "py036", topic: "List comprehension",
    q: "Cosa produce [x.upper() for x in ['a','b'] ] ?",
    opts: [
      "['A','B']",
      "['a','b']",
      "'AB'"
    ],
    correct: [0],
    exp: "La list comprehension crea una NUOVA lista applicando un'espressione a ogni elemento. Qui applica .upper() a 'a' e 'b' → ['A','B']. Sintassi: [ ESPRESSIONE for VAR in SEQUENZA ]."
  },
  {
    id: "py037", topic: "List comprehension",
    q: "Come si FILTRANO gli elementi in una list comprehension?",
    opts: [
      "Anteponendo la parola filter, come in [filter x for x in seq]",
      "Aggiungendo un if in fondo, es. [x for x in seq if condizione]",
      "Inserendo un ciclo while dentro le parentesi quadre al posto del for"
    ],
    correct: [1],
    exp: "Basta aggiungere un if con una condizione booleana in fondo: [animale for animale in animali if len(animale)==4] tiene solo gli elementi che soddisfano la condizione."
  },
  {
    id: "py038", topic: "Ciclo while",
    q: "Quando è più indicato un ciclo while rispetto a un for?",
    opts: [
      "Quando ti serve un contatore che cresce di uno a ogni passaggio del ciclo",
      "Quando scorri una lista di elementi già noti dall'inizio alla fine in ordine",
      "Quando non sai quante iterazioni servono: ripeti finché una condizione è vera"
    ],
    correct: [2],
    exp: "Il while ripete il blocco FINCHÉ la condizione booleana resta vera: ideale quando non conosci il numero di ripetizioni (ricerche, cicli che aggiungono/tolgono elementi, cicli 'infiniti'). Il for è invece adatto a scorrere sequenze note."
  },
  {
    id: "py039", topic: "Funzioni",
    q: "Cosa restituisce una funzione che NON contiene un'istruzione return?",
    opts: [
      "None",
      "Il numero 0",
      "Un errore a runtime"
    ],
    correct: [0],
    exp: "Se una funzione non ha return (o ha return senza valore), restituisce automaticamente None. Per questo se provi a usarne il risultato ottieni None."
  },
  {
    id: "py040", topic: "Funzioni",
    q: "Come si definisce un argomento con valore di default? \n\ndef ripeti(stringa, volte=3): ...",
    opts: [
      "Vanno messi PRIMA di quelli obbligatori",
      "Vanno messi ALLA FINE, dopo quelli obbligatori",
      "Serve la parola chiave default davanti al nome"
    ],
    correct: [1],
    exp: "Gli argomenti con valore di default (es. volte=3) vanno scritti DOPO quelli senza default. Quando chiami la funzione puoi ometterli (usa il default), passarli per posizione o per nome (volte=7)."
  },
  {
    id: "py041", topic: "Funzioni",
    q: "Perché è pericoloso usare una lista (o altro oggetto mutabile) come valore di default? \n\ndef f(lista=[]): ...",
    opts: [
      "Una lista come valore di default causa subito un errore di sintassi",
      "Le liste non possono in alcun modo essere passate come argomento",
      "La lista di default è condivisa tra le chiamate e conserva le modifiche"
    ],
    correct: [2],
    exp: "Il valore di default viene creato UNA sola volta, alla definizione della funzione. Se è mutabile (lista, dizionario), lo STESSO oggetto è condiviso da tutte le invocazioni e accumula le modifiche. Soluzione: usare lista=None e crearla dentro la funzione."
  },
  {
    id: "py042", topic: "Funzioni",
    q: "A cosa serve la parola chiave global dentro una funzione?",
    opts: [
      "A poter RIASSEGNARE una variabile definita fuori dalla funzione",
      "A creare una variabile visibile solo all'interno della funzione",
      "A importare un modulo esterno da usare dentro la funzione"
    ],
    correct: [0],
    exp: "Dentro una funzione puoi LEGGERE una variabile esterna, ma se provi a riassegnarla Python ne crea una nuova locale. Dichiarando 'global nome' dici a Python di modificare proprio la variabile esterna."
  },
  {
    id: "py043", topic: "Funzioni lambda",
    q: "Quale affermazione sulle funzioni lambda è corretta?",
    opts: [
      "Possono contenere molte istruzioni e cicli come una normale funzione",
      "Sono anonime e contengono una sola espressione, senza def né return",
      "Richiedono la parola chiave return per restituire un valore"
    ],
    correct: [1],
    exp: "Una lambda è una funzione anonima 'al volo': niente def, niente return (il valore è l'espressione stessa) e sta su una sola riga con una sola espressione. lambda x,y: x+y equivale a una def che ritorna x+y."
  },
  {
    id: "py044", topic: "Funzioni lambda",
    q: "A cosa serve il parametro key in sorted(lista, key=...) ?",
    opts: [
      "La rimozione dei duplicati dalla lista prima di procedere con l'ordinamento",
      "Quanti elementi della lista devono essere effettivamente ordinati",
      "Una funzione che, dato un elemento, restituisce il valore su cui ordinare"
    ],
    correct: [2],
    exp: "key riceve una funzione che, per ogni elemento, calcola il valore su cui ordinare. Es: sorted(animali, key=lambda x: x[1]) ordina le tuple in base al secondo elemento (es. l'età) invece che alfabeticamente."
  },
  {
    id: "py045", topic: "OOP - classi e oggetti",
    q: "Qual è la differenza tra una classe e un'istanza (oggetto)?",
    opts: [
      "La classe è il modello; l'istanza un esemplare concreto creato da esso",
      "L'istanza è il modello; la classe un singolo esemplare creato da esso",
      "Sono la stessa cosa: due termini intercambiabili per lo stesso concetto"
    ],
    correct: [0],
    exp: "La classe (es. Animale) è la descrizione/modello di tutti i possibili animali; l'istanza (es. mio_gatto = Animale(...)) è un esemplare concreto costruito da quel modello, con i suoi valori."
  },
  {
    id: "py046", topic: "OOP - self",
    q: "Cosa rappresenta 'self' nei metodi di una classe?",
    opts: [
      "La classe stessa, cioè il modello da cui nascono tutti gli oggetti",
      "L'istanza corrente, l'oggetto su cui il metodo è stato chiamato",
      "Una variabile globale condivisa da tutte le istanze della classe"
    ],
    correct: [1],
    exp: "self è il riferimento all'ISTANZA corrente. self.verso significa 'il verso proprio di questo specifico oggetto'. Va messo come primo parametro dei metodi, ma non lo passi tu quando chiami mio_gatto.parla()."
  },
  {
    id: "py047", topic: "OOP - __init__",
    q: "A cosa serve il metodo __init__ ?",
    opts: [
      "Il metodo che definisce come l'oggetto è rappresentato come stringa",
      "Il distruttore: eseguito quando l'oggetto viene eliminato dalla memoria",
      "Il costruttore: alla creazione dell'oggetto ne inizializza gli attributi"
    ],
    correct: [2],
    exp: "__init__ è il COSTRUTTORE: viene eseguito automaticamente quando crei un'istanza e serve a inizializzare le variabili d'istanza (es. self.specie = specie). Il nome ha i doppi underscore perché è un metodo speciale."
  },
  {
    id: "py048", topic: "OOP - variabili classe/istanza",
    q: "Qual è la differenza tra variabile di ISTANZA e variabile di CLASSE?",
    opts: [
      "L'istanza può differire per ogni oggetto; quella di classe è condivisa da tutti",
      "La variabile di classe assume un valore diverso per ciascun oggetto creato",
      "Le variabili d'istanza sono costanti e non si possono più modificare"
    ],
    correct: [0],
    exp: "La variabile d'istanza (es. self.specie) può essere diversa per ogni oggetto. La variabile di classe (es. regno_della_vita = 'ANIMALE', dichiarata direttamente nella classe) è una proprietà comune, uguale per tutti gli esemplari."
  },
  {
    id: "py049", topic: "OOP - metodi speciali",
    q: "A cosa serve ridefinire il metodo __str__ in una classe?",
    opts: [
      "Definisce come l'oggetto viene inizializzato al momento della sua creazione",
      "Cambia come l'oggetto è rappresentato come stringa, es. quando lo si stampa",
      "Stabilisce cosa accade quando l'oggetto viene eliminato dalla memoria"
    ],
    correct: [1],
    exp: "__str__ è un metodo speciale che definisce come l'oggetto viene trasformato in stringa (es. quando fai print(oggetto)). Senza ridefinirlo, Python stampa una rappresentazione poco leggibile con l'indirizzo di memoria."
  },
  {
    id: "py050", topic: "OOP - ereditarietà",
    q: "Come si crea una classe Cane che eredita dalla classe Animale?",
    opts: [
      "class Cane inherits Animale:",
      "class Cane extends Animale:",
      "class Cane(Animale):"
    ],
    correct: [2],
    exp: "In Python l'ereditarietà si dichiara mettendo la classe genitore tra parentesi: class Cane(Animale). Cane eredita così tutti gli attributi e metodi di Animale, e può aggiungerne o sovrascriverne."
  },
  {
    id: "py051", topic: "OOP - ereditarietà",
    q: "A cosa serve super().__init__(...) in una sottoclasse?",
    opts: [
      "A richiamare il costruttore del genitore e riusarne l'inizializzazione",
      "A distruggere l'istanza del genitore prima di crearne una nuova",
      "A rendere privati tutti gli attributi ereditati dalla classe genitore"
    ],
    correct: [0],
    exp: "super() fa riferimento alla classe genitore. super().__init__(specie, verso) richiama il costruttore del genitore per inizializzare gli attributi ereditati, così non devi riscriverli nella sottoclasse."
  },
  {
    id: "py052", topic: "OOP - override",
    q: "Cosa significa fare l'OVERRIDE di un metodo?",
    opts: [
      "Cancellare definitivamente un metodo ereditato dalla classe genitore",
      "Ridefinire in una sottoclasse un metodo del genitore, cambiandone il comportamento",
      "Richiamare due volte di seguito lo stesso metodo per raddoppiarne l'effetto"
    ],
    correct: [1],
    exp: "L'override è la ridefinizione, in una sottoclasse, di un metodo ereditato: la versione della sottoclasse 'vince' e sostituisce quella del genitore per quegli oggetti. Serve a specializzare o modificare un comportamento."
  },
  {
    id: "py053", topic: "OOP - incapsulamento",
    q: "Come si rende 'privato' un attributo in Python (per convenzione / name mangling)?",
    opts: [
      "Scrivendo il nome dell'attributo interamente in lettere maiuscole",
      "Scrivendo la parola chiave private prima del nome dell'attributo",
      "Facendo iniziare il nome con due underscore, es. self.__pinne"
    ],
    correct: [2],
    exp: "Anteponendo due underscore (self.__pinne) Python applica il 'name mangling' e l'attributo non è più accessibile direttamente dall'esterno (salmone.__pinne dà errore). Si accede tramite metodi getter/setter."
  },
  {
    id: "py054", topic: "OOP - property",
    q: "A cosa serve il decoratore @property in una classe?",
    opts: [
      "Definisce un getter che si usa come un normale attributo, senza parentesi",
      "Elimina un attributo dall'istanza dopo che è stato letto la prima volta",
      "Rende la classe astratta, impedendo di crearne direttamente istanze"
    ],
    correct: [0],
    exp: "@property trasforma un metodo in un 'getter' richiamabile come attributo (oggetto.name senza parentesi). Con @name.setter si definisce il metodo per assegnare il valore. Serve a controllare la lettura/scrittura di attributi privati."
  },
  {
    id: "py055", topic: "Pacchetti e ambienti",
    q: "Quale comando installa la libreria Flask?",
    opts: [
      "python install Flask",
      "pip install Flask",
      "import Flask --install"
    ],
    correct: [1],
    exp: "pip è il gestore di pacchetti standard: 'pip install Flask' scarica la libreria da PyPI. 'python install Flask' e 'import Flask --install' non esistono: import serve solo a USARE una libreria già installata."
  },
  {
    id: "py056", topic: "Pacchetti e ambienti",
    q: "A cosa serve un ambiente virtuale (virtual environment)?",
    opts: [
      "A impacchettare il progetto in un unico file eseguibile",
      "A eseguire il codice con un interprete più veloce di quello di sistema",
      "A tenere separate le dipendenze dei diversi progetti Python"
    ],
    correct: [2],
    exp: "Un virtual environment (creato con python3 -m venv nomeenv) crea un ambiente Python isolato con le sue librerie, così progetti diversi possono usare versioni diverse dei pacchetti senza interferire tra loro."
  },
  {
    id: "py057", topic: "Pacchetti e ambienti",
    q: "A cosa serve il file requirements.txt ?",
    opts: [
      "Elenca le librerie e le versioni da installare, per ricreare l'ambiente",
      "Contiene il codice sorgente principale eseguito all'avvio del programma",
      "Memorizza in modo sicuro le password e le credenziali usate dal programma"
    ],
    correct: [0],
    exp: "requirements.txt elenca le dipendenze del progetto. Lo generi con 'pip freeze > requirements.txt' e chiunque può reinstallare tutto con 'pip install -r requirements.txt'. Utile per condividere/riprodurre l'ambiente."
  },
  {
    id: "py058", topic: "Pacchetti e ambienti",
    q: "Quale file, aggiunto a una cartella, la marca come pacchetto/modulo Python?",
    opts: [
      "main.py",
      "__init__.py",
      "package.json"
    ],
    correct: [1],
    exp: "Il file __init__.py (anche vuoto) dentro una cartella indica a Python che quella directory è un pacchetto importabile. È la convenzione classica per organizzare il codice in moduli."
  },
  {
    id: "py059", topic: "File e JSON",
    q: "Per salvare una collezione di oggetti Python (es. l'inventario di un magazzino) su file in modo leggibile e riutilizzabile, un formato tipico è...",
    opts: [
      "EXE",
      "PNG",
      "JSON"
    ],
    correct: [2],
    exp: "JSON è un formato di testo per salvare dati strutturati (liste, dizionari). In Python si usa il modulo json (json.dump per salvare, json.load per caricare). È il formato richiesto dall'esercizio d'esame sul magazzino."
  },
  {
    id: "py060", topic: "Operazioni CRUD",
    q: "Cosa significa l'acronimo CRUD (operazioni di base su un archivio/DB)?",
    opts: [
      "Create, Read, Update, Delete",
      "Copy, Run, Undo, Delete",
      "Create, Rollback, Update, Drop"
    ],
    correct: [0],
    exp: "CRUD = Create (crea), Read (leggi), Update (aggiorna), Delete (cancella): le quattro operazioni fondamentali che quasi ogni applicazione compie sui dati di un database."
  },
  {
    id: "py061", topic: "Tipi di dato",
    q: "Quale funzione restituisce il tipo di un oggetto in Python?",
    opts: [
      "typeof()",
      "type()",
      "class()"
    ],
    correct: [1],
    exp: "type(oggetto) restituisce il tipo dell'oggetto (es. type([1,2]) → <class 'list'>). Utile per capire con che tipo di dato si sta lavorando."
  },
  {
    id: "py062", topic: "Liste",
    q: "Cosa restituisce len(lista) ?",
    opts: [
      "La somma degli elementi della lista",
      "L'ultimo elemento della lista",
      "Il numero di elementi della lista"
    ],
    correct: [2],
    exp: "len() restituisce la LUNGHEZZA, cioè il numero di elementi della lista (o caratteri di una stringa, o coppie di un dizionario). Non modifica la lista."
  },
  {
    id: "py100", topic: "Stringhe",
    q: "Le stringhe in Python sono immutabili. Cosa succede eseguendo s = 'ciao'; s[0] = 'X' ?",
    opts: [
      "Solleva un TypeError: le stringhe sono immutabili",
      "La stringa viene modificata e la variabile s diventa 'Xiao'",
      "Non accade nulla: l'assegnazione è ignorata e s resta 'ciao'"
    ],
    correct: [0],
    exp: "Le stringhe sono immutabili: non puoi cambiarne un carattere per posizione. Per 'modificarle' devi crearne una nuova, es. s = 'X' + s[1:]."
  },
  {
    id: "py101", topic: "Stringhe",
    q: "Cosa restituisce 'a b c'.split() ?",
    opts: [
      "'abc'",
      "['a', 'b', 'c']",
      "['a b c']"
    ],
    correct: [1],
    exp: ".split() senza argomenti divide la stringa sugli spazi e restituisce una LISTA di sottostringhe. Puoi passare un separatore, es. 'a,b'.split(',')."
  },
  {
    id: "py102", topic: "Stringhe",
    q: "Cosa restituisce '  ciao  '.strip() ?",
    opts: [
      "'ciao  '",
      "'  ciao  '",
      "'ciao'"
    ],
    correct: [2],
    exp: ".strip() rimuove gli spazi (e gli a-capo) all'inizio e alla fine della stringa. Esistono anche .lstrip() (solo sinistra) e .rstrip() (solo destra)."
  },
  {
    id: "py103", topic: "Stringhe",
    q: "Cosa restituisce 'banana'.replace('a', 'o') ?",
    opts: [
      "'bonono'",
      "'bonana'",
      "'banana'"
    ],
    correct: [0],
    exp: ".replace(vecchio, nuovo) sostituisce TUTTE le occorrenze: ogni 'a' diventa 'o' → 'bonono'. Restituisce una nuova stringa; l'originale (immutabile) non cambia."
  },
  {
    id: "py104", topic: "Stringhe",
    q: "Cosa restituisce 'Ciao'.upper() ?",
    opts: [
      "'ciao'",
      "'CIAO'",
      "'Ciao'"
    ],
    correct: [1],
    exp: ".upper() restituisce la stringa in maiuscolo, .lower() in minuscolo. Non modificano l'originale (le stringhe sono immutabili): restituiscono una nuova stringa."
  },
  {
    id: "py105", topic: "Stringhe",
    q: "Quanto vale len('Python') ?",
    opts: [
      "7",
      "5",
      "6"
    ],
    correct: [2],
    exp: "len() su una stringa conta i caratteri. 'Python' ha 6 lettere → 6."
  },
  {
    id: "py106", topic: "Operatori di comparazione",
    q: "Quanto vale 1 < 5 < 10 in Python?",
    opts: [
      "True",
      "False",
      "Errore di sintassi"
    ],
    correct: [0],
    exp: "Python permette il confronto 'a catena': 1 < 5 < 10 equivale a (1 < 5) and (5 < 10), entrambe vere → True."
  },
  {
    id: "py107", topic: "Operatori aritmetici",
    q: "Dopo x = 5; x += 3, quanto vale x ?",
    opts: [
      "5",
      "8",
      "53"
    ],
    correct: [1],
    exp: "x += 3 è la forma abbreviata di x = x + 3 → 8. Esistono anche -=, *=, /=, //=, %=, **=."
  },
  {
    id: "py108", topic: "if / elif / else",
    q: "Cosa assegna stato = 'pari' if n % 2 == 0 else 'dispari' quando n vale 4 ?",
    opts: [
      "True",
      "'dispari'",
      "'pari'"
    ],
    correct: [2],
    exp: "È l'operatore ternario (espressione condizionale): VALORE_SE_VERO if CONDIZIONE else VALORE_SE_FALSO. n=4 è pari → 'pari'."
  },
  {
    id: "py109", topic: "Cicli e controllo",
    q: "Cosa fa l'istruzione break dentro un ciclo?",
    opts: [
      "Interrompe ed esce immediatamente dal ciclo",
      "Salta soltanto all'iterazione successiva del ciclo",
      "Riavvia il ciclo daccapo dalla prima iterazione"
    ],
    correct: [0],
    exp: "break interrompe SUBITO il ciclo (for o while) e prosegue col codice dopo il ciclo. Per saltare solo all'iterazione corrente si usa continue."
  },
  {
    id: "py110", topic: "Cicli e controllo",
    q: "Cosa fa l'istruzione continue dentro un ciclo?",
    opts: [
      "Interrompe subito il ciclo e prosegue con il codice che viene dopo",
      "Salta il resto del blocco e passa all'iterazione successiva del ciclo",
      "Termina l'intero programma nel punto in cui viene incontrata"
    ],
    correct: [1],
    exp: "continue interrompe l'iterazione CORRENTE e passa direttamente alla successiva, saltando il codice rimanente nel blocco. break invece esce del tutto dal ciclo."
  },
  {
    id: "py111", topic: "Cicli e controllo",
    q: "A cosa serve l'istruzione pass?",
    opts: [
      "Un comando che salta l'iterazione corrente del ciclo passando alla dopo",
      "Un'istruzione che stampa a video il valore che riceve come argomento",
      "Un segnaposto che non fa nulla, dove serve un blocco non ancora scritto"
    ],
    correct: [2],
    exp: "pass è un'istruzione 'vuota' che non fa niente. Si usa come segnaposto dove la sintassi richiede un blocco (es. una funzione o classe ancora da implementare)."
  },
  {
    id: "py112", topic: "Tuple",
    q: "Quale affermazione è vera per le tuple, es. t = (1, 2, 3) ?",
    opts: [
      "Sono immutabili: non puoi aggiungere, togliere o cambiare elementi",
      "Sono modificabili come le liste, ad esempio con i metodi append e pop",
      "Possono contenere soltanto numeri, non stringhe o altri tipi di oggetti"
    ],
    correct: [0],
    exp: "Le tuple sono sequenze IMMUTABILI: una volta create non puoi aggiungere, togliere o modificare elementi (t[0]=9 dà TypeError). Utili per dati che non devono cambiare."
  },
  {
    id: "py113", topic: "Tuple",
    q: "Dopo a, b = (10, 20), quanto valgono a e b ?",
    opts: [
      "a=20 e b=10",
      "a=10 e b=20",
      "a=(10,20), b non definito"
    ],
    correct: [1],
    exp: "È lo 'unpacking' (spacchettamento): gli elementi della tupla vengono assegnati in ordine alle variabili. a=10, b=20. Funziona anche con le liste."
  },
  {
    id: "py114", topic: "Tuple",
    q: "Come si scrive una tupla con UN SOLO elemento?",
    opts: [
      "[5]",
      "(5)",
      "(5,)"
    ],
    correct: [2],
    exp: "Serve la virgola: (5,) è una tupla di un elemento. (5) senza virgola è solo il numero 5 tra parentesi. [5] è una lista, {5} è un set."
  },
  {
    id: "py115", topic: "Set (insiemi)",
    q: "Cosa restituisce set([1, 2, 2, 3, 3, 3]) ?",
    opts: [
      "{1, 2, 3}",
      "[1, 2, 3]",
      "{1, 2, 2, 3, 3, 3}"
    ],
    correct: [0],
    exp: "Un set (insieme) contiene solo valori UNICI: i duplicati vengono eliminati → {1, 2, 3}. È utile proprio per rimuovere i doppioni da una sequenza."
  },
  {
    id: "py116", topic: "Set (insiemi)",
    q: "Quale affermazione sui set (insiemi) è corretta?",
    opts: [
      "Mantengono l'ordine di inserimento come fanno le liste",
      "Non contengono valori duplicati e non hanno un ordine garantito",
      "Si accede ai loro elementi per indice, ad esempio con s[0]"
    ],
    correct: [1],
    exp: "I set contengono solo valori unici (niente duplicati) e non sono ordinati: non puoi accedervi per indice (s[0] dà errore). Si popolano con .add()."
  },
  {
    id: "py117", topic: "Dizionari",
    q: "A cosa serve il metodo .update() di un dizionario, es. d.update({'b': 9}) ?",
    opts: [
      "Restituisce una lista contenente soltanto le chiavi presenti nel dizionario",
      "Cancella l'intero contenuto del dizionario riportandolo allo stato vuoto",
      "Aggiunge le nuove coppie e aggiorna quelle già presenti nel dizionario"
    ],
    correct: [2],
    exp: ".update() aggiunge nuove coppie o aggiorna quelle esistenti. Se la chiave 'b' esiste ne cambia il valore, altrimenti la crea."
  },
  {
    id: "py118", topic: "Dizionari",
    q: "Dato d = {'a': 1, 'b': 2}, cosa restituisce 'a' in d ?",
    opts: [
      "True, perché l'operatore in verifica le chiavi del dizionario",
      "False, perché l'operatore in verifica soltanto i valori",
      "Restituisce 1, cioè il valore associato alla chiave 'a'"
    ],
    correct: [0],
    exp: "Su un dizionario l'operatore 'in' verifica la presenza tra le CHIAVI, non tra i valori. 'a' è una chiave → True. Per cercare tra i valori: valore in d.values()."
  },
  {
    id: "py119", topic: "List/dict comprehension",
    q: "Cosa produce {x: x*x for x in range(3)} ?",
    opts: [
      "[0, 1, 4]",
      "{0: 0, 1: 1, 2: 4}",
      "{0, 1, 4}"
    ],
    correct: [1],
    exp: "È una dict comprehension: crea un dizionario con chiave x e valore x*x, per x in 0,1,2 → {0:0, 1:1, 2:4}. Sintassi: {chiave: valore for ... in ...}."
  },
  {
    id: "py120", topic: "Funzioni",
    q: "In def somma(*args), cosa rappresenta args dentro la funzione?",
    opts: [
      "Un singolo valore, cioè il primo degli argomenti passati alla funzione",
      "Un dizionario che associa a ogni argomento il nome del parametro",
      "Una tupla che raccoglie tutti gli argomenti posizionali passati"
    ],
    correct: [2],
    exp: "*args raccoglie un numero variabile di argomenti POSIZIONALI in una tupla. Così puoi chiamare somma(1,2,3) e iterare su args al suo interno."
  },
  {
    id: "py121", topic: "Funzioni",
    q: "In def config(**kwargs), cosa rappresenta kwargs?",
    opts: [
      "Un dizionario che raccoglie tutti gli argomenti passati per nome",
      "Una lista che raccoglie tutti gli argomenti passati per posizione",
      "Una tupla che contiene gli argomenti nell'ordine in cui sono passati"
    ],
    correct: [0],
    exp: "**kwargs raccoglie gli argomenti passati per NOME in un dizionario. Es. config(host='x', port=8) → kwargs = {'host':'x','port':8}."
  },
  {
    id: "py122", topic: "Funzioni",
    q: "Una funzione con return a, b restituisce...",
    opts: [
      "Soltanto il valore di a",
      "Una tupla (a, b)",
      "Una lista [a, b]"
    ],
    correct: [1],
    exp: "return a, b restituisce una TUPLA (a, b). Chi chiama può fare x, y = funzione() per spacchettarla. È il modo Python di restituire più valori."
  },
  {
    id: "py123", topic: "None e identità",
    q: "Qual è il modo consigliato per verificare se una variabile è None?",
    opts: [
      "x = None",
      "x == None",
      "x is None"
    ],
    correct: [2],
    exp: "Si usa 'x is None': 'is' confronta l'IDENTITÀ (stesso oggetto in memoria), mentre '==' confronta il valore. Per None (oggetto unico) la convenzione è 'is None'."
  },
  {
    id: "py124", topic: "Tipi di dato",
    q: "Cosa fa isinstance(x, int) ?",
    opts: [
      "Restituisce True se x è un'istanza del tipo indicato, qui un intero",
      "Converte il valore di x nel tipo indicato, in questo caso in un intero",
      "Crea e restituisce un nuovo oggetto del tipo indicato a partire da x"
    ],
    correct: [0],
    exp: "isinstance(oggetto, tipo) restituisce True se l'oggetto è di quel tipo (o di una sua sottoclasse). Es. isinstance(5, int) → True. È il modo preferito per controllare il tipo."
  },
  {
    id: "py125", topic: "Conversioni ed eccezioni",
    q: "Cosa succede eseguendo int('ciao') ?",
    opts: [
      "Restituisce 0, valore di default quando la conversione fallisce",
      "Solleva un ValueError perché la stringa non è un numero valido",
      "Restituisce la stringa 'ciao' invariata, senza tentare la conversione"
    ],
    correct: [1],
    exp: "int() converte in intero, ma se la stringa non rappresenta un numero valido solleva ValueError. int('10') funziona, int('ciao') no. Spesso si gestisce con try/except."
  },
  {
    id: "py126", topic: "Stringhe",
    q: "Con prezzo = 3.14159, cosa produce f'{prezzo:.2f}' ?",
    opts: [
      "'3.142'",
      "'3.14159'",
      "'3.14'"
    ],
    correct: [2],
    exp: "Nella f-string, :.2f formatta il numero come decimale con 2 cifre dopo la virgola → '3.14'. Utile per prezzi e valori arrotondati."
  },
  {
    id: "py127", topic: "Cicli for e range",
    q: "Cosa produce list(range(2, 10, 2)) ?",
    opts: [
      "[2, 4, 6, 8]",
      "[2, 4, 6, 8, 10]",
      "[2,3,4,5,6,7,8,9]"
    ],
    correct: [0],
    exp: "range(start, stop, step): parte da 2, si ferma prima di 10, con passo 2 → [2,4,6,8]. Lo stop (10) è sempre escluso."
  },
  {
    id: "py128", topic: "Iterazione",
    q: "Cosa accoppia zip(['a','b'], [1, 2]) ?",
    opts: [
      "{'a': 1, 'b': 2}",
      "[('a', 1), ('b', 2)]",
      "['a','b',1,2]"
    ],
    correct: [1],
    exp: "zip() abbina elemento per elemento più sequenze creando coppie: ('a',1), ('b',2). Utile per iterare due liste in parallelo: for lettera, numero in zip(l1, l2)."
  },
  {
    id: "py129", topic: "Moduli e import",
    q: "Per usare math.sqrt(9) cosa devi fare prima?",
    opts: [
      "Definire tu una funzione chiamata sqrt",
      "Niente, è una funzione disponibile",
      "Importare il modulo: import math"
    ],
    correct: [2],
    exp: "sqrt fa parte del modulo math della libreria standard: va importato con 'import math' prima di usarlo. In alternativa: from math import sqrt, poi sqrt(9)."
  },
  {
    id: "py130", topic: "Gestione eccezioni",
    q: "Che errore genera l'operazione 10 / 0 ?",
    opts: [
      "ZeroDivisionError",
      "ValueError",
      "TypeError"
    ],
    correct: [0],
    exp: "La divisione per zero solleva ZeroDivisionError. Si può prevenire controllando il divisore, oppure gestire l'errore con try/except."
  },
  {
    id: "py131", topic: "Gestione eccezioni",
    q: "A cosa serve l'istruzione raise, es. raise ValueError('dato non valido') ?",
    opts: [
      "A gestire un errore già verificato per non arrestare il programma",
      "A sollevare volontariamente un'eccezione, es. per un input non valido",
      "A ignorare in silenzio un errore e proseguire come se nulla fosse"
    ],
    correct: [1],
    exp: "raise lancia volontariamente un'eccezione, ad esempio per segnalare un input non valido. try/except invece CATTURA gli errori che si verificano."
  },
  {
    id: "py132", topic: "Gestione eccezioni",
    q: "Nel costrutto try/except/finally, quando viene eseguito il blocco finally?",
    opts: [
      "Soltanto quando all'interno del blocco try si verifica un errore",
      "Soltanto quando il blocco try viene eseguito senza alcun errore",
      "SEMPRE, sia che si verifichi un errore sia che non se ne verifichi"
    ],
    correct: [2],
    exp: "Il blocco finally viene eseguito SEMPRE, in ogni caso. Si usa per operazioni di 'pulizia' che devono avvenire comunque, es. chiudere un file o una connessione."
  },
  {
    id: "py133", topic: "Liste",
    q: "Qual è la differenza tra sorted(lista) e lista.sort() ?",
    opts: [
      "sorted() crea una nuova lista ordinata; .sort() ordina sul posto e dà None",
      "sort crea una nuova lista ordinata; sorted modifica quella originale",
      "Sono equivalenti: entrambi restituiscono una nuova lista ordinata"
    ],
    correct: [0],
    exp: "sorted(lista) NON modifica l'originale e restituisce una nuova lista ordinata. lista.sort() modifica la lista stessa e restituisce None. Scegli in base a se vuoi conservare l'ordine originale."
  },
  {
    id: "py134", topic: "Liste",
    q: "Data lista = [1, 2], cosa distingue lista.extend([3,4]) da lista.append([3,4]) ?",
    opts: [
      "append aggiunge i singoli elementi → [1,2,3,4]; extend la lista intera → [1,2,[3,4]]",
      "extend aggiunge i singoli elementi → [1,2,3,4]; append la lista intera → [1,2,[3,4]]",
      "Sono equivalenti: in entrambi i casi il risultato è la lista [1, 2, 3, 4]"
    ],
    correct: [1],
    exp: ".extend() aggiunge uno per uno gli elementi dell'altra lista → [1,2,3,4]. .append() aggiunge l'argomento come singolo elemento → [1,2,[3,4]] (lista annidata)."
  },
  {
    id: "py135", topic: "Liste",
    q: "Cosa fa lista.insert(0, 'x') ?",
    opts: [
      "Sostituisce l'elemento in posizione 0 con il nuovo valore 'x'",
      "Aggiunge 'x' in fondo alla lista, dopo tutti gli elementi presenti",
      "Inserisce 'x' in posizione 0, spostando in avanti gli altri elementi"
    ],
    correct: [2],
    exp: ".insert(indice, valore) inserisce l'elemento nella posizione indicata facendo scorrere gli altri. insert(0,'x') lo mette all'inizio. Per sostituire useresti lista[0]='x'."
  },
  {
    id: "py136", topic: "OOP - metodi speciali",
    q: "Quale metodo speciale bisogna definire in una classe perché funzioni len(oggetto) ?",
    opts: [
      "__len__",
      "__str__",
      "__count__"
    ],
    correct: [0],
    exp: "Definendo __len__(self) nella classe, len(oggetto) restituirà ciò che quel metodo ritorna. È uno dei 'metodi speciali' (dunder) come __str__, __eq__, __getitem__."
  },
  {
    id: "py137", topic: "Funzioni generatore",
    q: "Come si crea una funzione generatore (generator function) in Python?",
    opts: [
      "Aggiungendo il decoratore @generator sopra la definizione della funzione",
      "Usando la parola chiave yield al posto di return per produrre i valori",
      "Aggiungendo l'annotazione -> gen nella firma della funzione"
    ],
    correct: [1],
    exp: "Una funzione diventa generatore quando contiene almeno un yield: invece di calcolare tutto con return, 'produce' i valori uno alla volta risparmiando memoria. @generator e l'annotazione '-> gen' NON esistono: sono termini inventati, tipici distrattori d'esame."
  },
  {
    id: "py138", topic: "Riferimenti e mutabilità",
    q: "a = [1, 2]; b = a; b.append(3). Quanto vale len(a) alla fine?",
    opts: [
      "1, perché append sostituisce il contenuto invece di aggiungere",
      "2, perché b è una copia indipendente e a non viene toccata",
      "3, perché a e b puntano alla STESSA lista in memoria"
    ],
    correct: [2],
    exp: "b = a NON copia la lista: crea un secondo nome per lo stesso oggetto. Modificando b modifichi anche a → len(a) è 3. Per una copia vera: b = a.copy() oppure b = a[:]."
  },
  {
    id: "py139", topic: "Uguaglianza e identità",
    q: "a = [1, 2]; b = [1, 2]. Cosa restituiscono a == b e a is b?",
    opts: [
      "a == b è True, a is b è False",
      "Sono entrambi True, perché le due liste hanno lo stesso contenuto",
      "Sono entrambi False, perché due liste diverse non si confrontano"
    ],
    correct: [0],
    exp: "== confronta i VALORI (contenuto uguale → True). is confronta l'IDENTITÀ, cioè se è lo stesso oggetto in memoria: sono due liste distinte → False. Non confondere i due operatori."
  },
  {
    id: "py140", topic: "Argomenti di default mutabili",
    q: "def f(x, lista=[]): lista.append(x); return lista. Cosa restituisce la SECONDA chiamata f(2), dopo f(1)?",
    opts: [
      "[2], perché a ogni chiamata la lista di default viene ricreata vuota",
      "[1, 2], perché la lista di default è la stessa e conserva i valori",
      "[1], perché viene conservato solo il valore della prima chiamata"
    ],
    correct: [1],
    exp: "Trappola classica: il valore di default è creato UNA sola volta. Essendo mutabile, la stessa lista è condivisa: f(1) dà [1], f(2) dà [1,2]. Soluzione: usare lista=None e crearla dentro la funzione."
  },
  {
    id: "py141", topic: "Numeri in virgola mobile",
    q: "Quanto vale 0.1 + 0.2 == 0.3 in Python?",
    opts: [
      "Solleva un errore di arrotondamento durante il confronto",
      "True, perché la somma restituisce esattamente 0.3 come previsto",
      "False, per come i decimali sono rappresentati in virgola mobile"
    ],
    correct: [2],
    exp: "I float non rappresentano esattamente molti decimali: 0.1 + 0.2 dà 0.30000000000000004, diverso da 0.3 → False. Per confronti sicuri si usa round() o math.isclose()."
  },
  {
    id: "py142", topic: "Valori logici (truthy/falsy)",
    q: "Quanto vale bool('False') (la stringa 'False', non il booleano)?",
    opts: [
      "True, perché qualsiasi stringa NON vuota è considerata vera",
      "False, perché il testo della stringa è proprio la parola 'False'",
      "Solleva un errore perché 'False' non è un valore booleano valido"
    ],
    correct: [0],
    exp: "Trappola: conta solo se la stringa è vuota o no, non il suo contenuto. 'False' è una stringa non vuota → bool('False') è True. Solo '' (stringa vuota) vale False."
  },
  {
    id: "py143", topic: "Operatori su stringhe",
    q: "Quanto vale '5' * 3 in Python?",
    opts: [
      "15, perché la stringa '5' viene convertita in numero e moltiplicata",
      "'555', perché l'operatore * ripete la stringa il numero di volte indicato",
      "Solleva un TypeError perché una stringa non si può moltiplicare"
    ],
    correct: [1],
    exp: "Con stringa e intero, l'operatore * RIPETE la stringa: '5' * 3 → '555'. Non fa la moltiplicazione numerica (per quella servirebbe int('5') * 3 = 15)."
  },
  {
    id: "py144", topic: "Confronti insidiosi",
    q: "Cosa restituisce [] == False in Python?",
    opts: [
      "True, perché entrambi vengono convertiti a 0 prima del confronto",
      "True, perché la lista vuota equivale in tutto e per tutto a False",
      "False, perché una lista e un booleano non sono uguali, pur essendo falsy"
    ],
    correct: [2],
    exp: "Trappola: [] è 'falsy' (bool([]) è False) ma == confronta i VALORI, e una lista non è uguale a un booleano → False. 'Essere falsy' e 'essere uguale a False' sono cose diverse."
  },
  {
    id: "py145", topic: "Mutabilità nelle tuple",
    q: "t = (1, [2, 3]). L'istruzione t[1].append(4) cosa produce?",
    opts: [
      "Funziona: t diventa, la lista interna è modificabile",
      "Solleva un errore, perché le tuple sono immutabili in ogni loro parte",
      "Non fa nulla, perché un append su un elemento di tupla viene ignorato"
    ],
    correct: [0],
    exp: "L'immutabilità della tupla riguarda QUALI oggetti contiene, non il loro stato interno: non puoi sostituire t[1], ma la lista dentro la tupla resta mutabile → diventa [2,3,4]. Trappola sottile."
  },
  {
    id: "py146", topic: "Variabili e scope",
    q: "x = 10; def f(): x = 5. Dopo aver chiamato f(), quanto vale x all'esterno?",
    opts: [
      "5, perché la funzione modifica direttamente la variabile esterna x",
      "10, perché l'assegnazione dentro la funzione crea una variabile locale",
      "None, perché la funzione azzera il contenuto della variabile esterna"
    ],
    correct: [1],
    exp: "Assegnare x dentro la funzione crea una variabile LOCALE che vale solo dentro f. La x esterna resta 10. Per modificarla davvero servirebbe dichiarare 'global x'."
  },
  // === AGGIUNGI NUOVE DOMANDE PYTHON QUI ===
]);
