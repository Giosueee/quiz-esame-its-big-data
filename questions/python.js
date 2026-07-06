/* ============================================================
   MATERIA: Python  —  banca domande
   Ogni oggetto: { id, topic, q, opts:[...], correct:[indici], exp }
   correct e SEMPRE un array: >1 elemento = domanda a risposta multipla.
   Per aggiungere domande: copia un blocco prima del marcatore in fondo.
   ============================================================ */
registerSubject("Python", [
  {
    id: "py001", topic: "Basi del linguaggio",
    q: "Quali affermazioni descrivono correttamente Python? (una o più risposte)",
    opts: [
      "È un linguaggio interpretato",
      "È un linguaggio di alto livello",
      "Supporta la programmazione a oggetti (OOP)",
      "Usa la tipizzazione statica, come C o Java"
    ],
    correct: [0,1,2],
    exp: "Python è interpretato (eseguito riga per riga da un interprete), di alto livello (vicino al linguaggio umano) e orientato agli oggetti. La tipizzazione è DINAMICA, non statica: il tipo di una variabile si decide a runtime, non va dichiarato."
  },
  {
    id: "py002", topic: "Basi del linguaggio",
    q: "Cosa significa che Python ha 'tipizzazione dinamica'?",
    opts: [
      "Il tipo di una variabile è determinato a runtime e può anche cambiare",
      "Devi dichiarare esplicitamente il tipo di ogni variabile prima di poterla usare",
      "Tutte le variabili sono numeri interi, a meno di conversioni fatte esplicitamente",
      "Una volta assegnato, il valore di una variabile non può più essere modificato"
    ],
    correct: [0],
    exp: "Con la tipizzazione dinamica non dichiari il tipo: scrivi x = 5 e Python capisce che è un intero; poi puoi fare x = 'ciao' e diventa una stringa. Il controllo del tipo avviene mentre il programma gira."
  },
  {
    id: "py003", topic: "Commenti e indentazione",
    q: "Come si scrive un commento su una singola riga in Python?",
    opts: [
      "// commento",
      "# commento",
      "/* commento */",
      "-- commento"
    ],
    correct: [1],
    exp: "In Python il commento a riga singola inizia con il carattere #. Tutto ciò che segue # sulla stessa riga viene ignorato dall'interprete. (// e /* */ sono di altri linguaggi, -- è di SQL)."
  },
  {
    id: "py004", topic: "Commenti e indentazione",
    q: "Quanti spazi si usano (per convenzione) per indentare un blocco di codice in Python?",
    opts: [
      "1 spazio",
      "2 spazi",
      "4 spazi",
      "8 spazi"
    ],
    correct: [2],
    exp: "La convenzione (PEP 8) raccomanda 4 spazi per ogni livello di indentazione. In Python l'indentazione non è estetica: DEFINISCE i blocchi di codice, quindi è obbligatoria e va tenuta coerente."
  },
  {
    id: "py005", topic: "Commenti e indentazione",
    q: "Perché in Python è pericoloso mischiare TAB e spazi per indentare?",
    opts: [
      "Il comportamento del TAB dipende dall'editor: può creare indentazioni incoerenti ed errori",
      "Il carattere di tabulazione è vietato dalla sintassi di Python in qualunque circostanza",
      "Mischiare TAB e spazi rallenta sensibilmente l'esecuzione del programma a ogni avvio",
      "Non comporta alcun problema: TAB e spazi vengono trattati come equivalenti dall'interprete"
    ],
    correct: [0],
    exp: "A seconda dell'editor, TAB può inserire un carattere speciale oppure un numero variabile di spazi. Mischiarli fa sì che due righe SEMBRINO allineate ma non lo siano per Python → IndentationError. Meglio usare sempre 4 spazi."
  },
  {
    id: "py006", topic: "Operatori aritmetici",
    q: "Quanto vale 40 // 3 in Python?",
    opts: [
      "13.33",
      "13",
      "1",
      "12"
    ],
    correct: [1],
    exp: "L'operatore // è la divisione INTERA (floor division): restituisce solo la parte intera del quoziente. 40 diviso 3 fa 13,33 → // dà 13. (Il resto 1 lo dà invece l'operatore %)."
  },
  {
    id: "py007", topic: "Operatori aritmetici",
    q: "Quanto vale 40 % 3 in Python?",
    opts: [
      "13",
      "1",
      "0",
      "3"
    ],
    correct: [1],
    exp: "L'operatore % è il MODULO: restituisce il RESTO della divisione. 40 = 3×13 + 1, quindi il resto è 1. Utile ad esempio per capire se un numero è pari: n % 2 == 0."
  },
  {
    id: "py008", topic: "Operatori aritmetici",
    q: "Quanto vale 5 ** 3 in Python?",
    opts: [
      "15",
      "125",
      "8",
      "53"
    ],
    correct: [1],
    exp: "L'operatore ** è l'ELEVAMENTO A POTENZA. 5 ** 3 significa 5 elevato alla 3 = 5×5×5 = 125."
  },
  {
    id: "py009", topic: "Operatori aritmetici",
    q: "Di che tipo è il risultato dell'espressione 40 / 3 ?",
    opts: [
      "int (numero intero), vale esattamente 13",
      "float (numero decimale), vale circa 13.33",
      "str (stringa), cioè il testo '13.33'",
      "Genera un errore perché i tipi non coincidono"
    ],
    correct: [1],
    exp: "In Python 3 l'operatore / esegue SEMPRE la divisione reale e restituisce un float, anche se il risultato fosse tondo (es. 6/2 dà 3.0). Per avere l'intero si usa //."
  },
  {
    id: "py010", topic: "Input e Output",
    q: "La funzione input() restituisce sempre un valore di tipo...",
    opts: [
      "int",
      "float",
      "str (stringa)",
      "dipende da cosa scrive l'utente"
    ],
    correct: [2],
    exp: "input() restituisce SEMPRE una stringa (str), anche se l'utente digita dei numeri. Per ottenere un numero devi convertire esplicitamente, ad esempio int(input()) oppure float(input())."
  },
  {
    id: "py011", topic: "Input e Output",
    q: "Cosa stampa print('Hello', 'World', sep='-') ?",
    opts: [
      "Hello World",
      "Hello-World",
      "Hello,World",
      "HelloWorld-"
    ],
    correct: [1],
    exp: "Il parametro sep definisce il separatore usato tra i vari argomenti di print. Con sep='-' i due valori vengono uniti da un trattino: Hello-World. Di default sep è uno spazio."
  },
  {
    id: "py012", topic: "Liste",
    q: "Data lista = ['a','b','c',10,15], cosa restituisce lista[-1] ?",
    opts: [
      "'a'",
      "15",
      "Errore",
      "10"
    ],
    correct: [1],
    exp: "Gli indici negativi contano dalla FINE: -1 è l'ultimo elemento, -2 il penultimo, ecc. Quindi lista[-1] è 15."
  },
  {
    id: "py013", topic: "Liste",
    q: "Data lista = ['a','b','c',10,15] (5 elementi), cosa succede con lista[5] ?",
    opts: [
      "Restituisce l'ultimo elemento della lista, cioè il valore 15 in questo caso",
      "Restituisce None, dato che l'indice richiesto non corrisponde ad alcun valore",
      "Solleva un errore IndexError, perché l'indice è fuori dai limiti della lista",
      "Restituisce una lista vuota, ignorando l'indice che eccede la lunghezza della lista"
    ],
    correct: [2],
    exp: "Gli indici validi vanno da 0 a 4 (lunghezza 5 → ultimo indice = lunghezza-1). L'indice 5 non esiste, quindi Python solleva IndexError: list index out of range."
  },
  {
    id: "py013b", topic: "Liste",
    q: "Quali metodi delle liste MODIFICANO la lista originale (in-place)? (una o più risposte)",
    opts: [
      "append()",
      "sort()",
      "len()",
      "pop()"
    ],
    correct: [0,1,3],
    exp: "append() aggiunge un elemento in fondo, sort() ordina la lista sul posto, pop() rimuove (e restituisce) un elemento: tutti e tre cambiano la lista. len() invece non modifica nulla, si limita a restituire il numero di elementi."
  },
  {
    id: "py014", topic: "Liste",
    q: "Cosa restituisce l'espressione [1, 2, 3][::-1] ?",
    opts: [
      "[1, 2, 3]",
      "[3, 2, 1]",
      "[1, 3]",
      "Errore"
    ],
    correct: [1],
    exp: "Lo slice [::-1] scorre la sequenza con passo -1, cioè al contrario: inverte la lista → [3, 2, 1]. È un modo idiomatico per invertire liste e stringhe."
  },
  {
    id: "py015", topic: "Liste",
    q: "Data lista = ['a','b','c',10,15], cosa restituisce lista[:3] ?",
    opts: [
      "['a','b','c']",
      "['a','b','c',10]",
      "[10, 15]",
      "['c',10,15]"
    ],
    correct: [0],
    exp: "Lo slice [:3] prende gli elementi dagli indici 0, 1 e 2 (l'estremo destro 3 è ESCLUSO). Risultato: ['a','b','c']."
  },
  {
    id: "py016", topic: "Liste",
    q: "Cosa fa il metodo lista.append(20) ?",
    opts: [
      "Aggiunge 20 alla fine della lista, modificandola",
      "Crea una nuova lista con 20 aggiunto, senza toccare l'originale",
      "Inserisce 20 all'inizio della lista",
      "Sostituisce l'ultimo elemento con 20"
    ],
    correct: [0],
    exp: "append() aggiunge l'elemento in coda alla lista e modifica la lista ORIGINALE (in-place). Non restituisce una nuova lista: il suo valore di ritorno è None."
  },
  {
    id: "py017", topic: "Stringhe",
    q: "Cosa succede eseguendo 'Hello' + 1 ?",
    opts: [
      "Solleva un TypeError perché non si può concatenare una stringa con un intero",
      "Restituisce la stringa 'Hello1' convertendo automaticamente il numero",
      "Restituisce 'Hello' ignorando in silenzio il valore numerico 1",
      "Restituisce 6, sommando i codici dei caratteri della stringa"
    ],
    correct: [0],
    exp: "Python non converte automaticamente i tipi: sommare una stringa e un numero dà TypeError. Per concatenare devi convertire il numero: 'Hello' + str(1) → 'Hello1'."
  },
  {
    id: "py018", topic: "Stringhe",
    q: "Dato stringa = 'Hello World', cosa produce f'La frase è {stringa}!' ?",
    opts: [
      "'La frase è {stringa}!'",
      "'La frase è Hello World!'",
      "Errore di sintassi",
      "'La frase è stringa!'"
    ],
    correct: [1],
    exp: "La f-string (stringa preceduta da f) valuta le espressioni tra parentesi graffe e le sostituisce col loro valore. Quindi {stringa} viene rimpiazzato da 'Hello World'."
  },
  {
    id: "py019", topic: "Stringhe",
    q: "Quale espressione è un modo alternativo (equivalente) di scrivere f'Ciao {nome}' ?",
    opts: [
      "'Ciao {nome}'.format(nome)",
      "'Ciao {}'.format(nome)",
      "'Ciao ' + nome + format",
      "format('Ciao', nome)"
    ],
    correct: [1],
    exp: "Il metodo .format() sostituisce le graffe vuote {} con gli argomenti passati, in ordine: 'Ciao {}'.format(nome). È l'alternativa 'classica' alle f-string, introdotte più tardi."
  },
  {
    id: "py020", topic: "Dizionari",
    q: "Dato d = {'a':5,'b':10}, cosa succede scrivendo d['casa'] (chiave inesistente)?",
    opts: [
      "Restituisce None",
      "Restituisce una stringa vuota",
      "Solleva un KeyError",
      "Aggiunge la chiave 'casa' con valore 0"
    ],
    correct: [2],
    exp: "Accedere a una chiave che non esiste con le parentesi quadre solleva KeyError. Per evitare l'errore si usa .get('casa'), che restituisce None (o un valore di default) invece di bloccare il programma."
  },
  {
    id: "py021", topic: "Dizionari",
    q: "Dato d = {'a':5,'b':10}, cosa restituisce d.get('casa', 0) ?",
    opts: [
      "Solleva un KeyError perché la chiave 'casa' non esiste all'interno del dizionario",
      "None, ignorando completamente il secondo argomento passato al metodo get",
      "0, cioè il valore di default indicato come secondo argomento del metodo",
      "La stringa 'casa', ossia la chiave che è stata cercata dentro il dizionario"
    ],
    correct: [2],
    exp: ".get(chiave, default) restituisce il valore della chiave se esiste, altrimenti il secondo argomento come default. Qui 'casa' non c'è, quindi restituisce 0. Senza il secondo argomento restituirebbe None."
  },
  {
    id: "py022", topic: "Dizionari",
    q: "Quali metodi di un dizionario servono a ottenere rispettivamente le chiavi, i valori e le coppie? (una o più risposte)",
    opts: [
      "keys()",
      "values()",
      "items()",
      "get()"
    ],
    correct: [0,1,2],
    exp: "keys() restituisce le chiavi, values() i valori, items() le coppie (chiave, valore). get() invece serve a leggere il valore di UNA singola chiave in modo sicuro."
  },
  {
    id: "py023", topic: "Valori logici (truthy/falsy)",
    q: "Quali di questi valori sono considerati False (falsy) in un contesto booleano? (una o più risposte)",
    opts: [
      "0",
      "'' (stringa vuota)",
      "[] (lista vuota)",
      "'ciao'"
    ],
    correct: [0,1,2],
    exp: "In Python gli oggetti 'vuoti' valgono False: il numero 0, la stringa vuota '', la lista vuota [], il dizionario vuoto {}, e None. Tutto ciò che NON è vuoto (come 'ciao') vale True."
  },
  {
    id: "py024", topic: "Valori logici (truthy/falsy)",
    q: "Quanto vale bool([1, 2]) ?",
    opts: [
      "False",
      "True",
      "2",
      "Errore"
    ],
    correct: [1],
    exp: "Una lista NON vuota è truthy, quindi bool([1,2]) è True. Solo la lista vuota [] è False. Lo stesso vale per stringhe e dizionari."
  },
  {
    id: "py025", topic: "Operatori logici",
    q: "Quanto vale (True and False) or True ?",
    opts: [
      "False",
      "True",
      "None",
      "Errore"
    ],
    correct: [1],
    exp: "Prima si valuta la parentesi: True and False = False. Poi False or True = True. and richiede che ENTRAMBI siano veri; or richiede che ALMENO uno sia vero."
  },
  {
    id: "py026", topic: "Operatori di comparazione",
    q: "Quanto vale 'hello' in 'Hello World!' ?",
    opts: [
      "False, perché l'operatore in distingue maiuscole e minuscole (case sensitive)",
      "True, perché la frase contiene comunque la sequenza di lettere h-e-l-l-o",
      "True, perché l'operatore in ignora la differenza tra maiuscole e minuscole",
      "Solleva un errore perché in funziona solo con le liste, non con le stringhe"
    ],
    correct: [0],
    exp: "L'operatore 'in' verifica se una sottostringa è contenuta in un'altra, ma Python distingue maiuscole/minuscole (case sensitive): 'hello' con la h minuscola NON è dentro 'Hello World!'. Risultato: False."
  },
  {
    id: "py027", topic: "Operatori di comparazione",
    q: "Cosa verifica l'operatore != ?",
    opts: [
      "Che due valori siano uguali",
      "Che due valori siano diversi",
      "Che il primo sia maggiore del secondo",
      "L'appartenenza a una lista"
    ],
    correct: [1],
    exp: "!= significa 'diverso da' e restituisce True quando i due valori NON sono uguali. È l'opposto di ==."
  },
  {
    id: "py028", topic: "Gestione eccezioni",
    q: "A cosa serve il costrutto try / except ?",
    opts: [
      "A ripetere più volte di seguito uno stesso blocco di codice",
      "A gestire gli errori senza far arrestare l'intero programma",
      "A definire una nuova funzione riutilizzabile nel programma",
      "A creare una nuova classe con i relativi metodi e attributi"
    ],
    correct: [1],
    exp: "try/except serve a gestire le ECCEZIONI (errori a runtime): il codice 'a rischio' va nel blocco try; se genera un errore, invece di bloccare tutto il programma si esegue il blocco except."
  },
  {
    id: "py029", topic: "if / elif / else",
    q: "Cosa manca SEMPRE alla fine della riga di un if (o for, while, def)?",
    opts: [
      "Il punto e virgola ;",
      "I due punti :",
      "Una parentesi graffa {",
      "La parola end"
    ],
    correct: [1],
    exp: "In Python l'intestazione di if/elif/else/for/while/def/class termina SEMPRE con i due punti ':' , seguiti dal blocco indentato. Dimenticarli causa un SyntaxError."
  },
  {
    id: "py030", topic: "if / elif / else",
    q: "In una catena if / elif / elif / else, quanti blocchi vengono eseguiti al massimo?",
    opts: [
      "Solo il primo blocco la cui condizione è vera (oppure l'else se nessuna lo è)",
      "Tutti i blocchi la cui condizione risulta vera, valutati uno dopo l'altro in ordine",
      "Sempre due blocchi: quello dell'if iniziale e in aggiunta quello finale dell'else",
      "Nessun blocco viene eseguito finché non si verifica esattamente una sola condizione"
    ],
    correct: [0],
    exp: "Python valuta le condizioni dall'alto verso il basso ed esegue SOLO il primo ramo la cui condizione risulta vera; poi esce dall'intera struttura. Se nessuna condizione è vera esegue l'else (se presente)."
  },
  {
    id: "py031", topic: "match",
    q: "Da quale versione di Python è disponibile il costrutto match / case ?",
    opts: [
      "Python 2.7",
      "Python 3.6",
      "Python 3.10 o superiore",
      "È sempre esistito"
    ],
    correct: [2],
    exp: "Il pattern matching structural con match/case è stato introdotto in Python 3.10. Su versioni precedenti non è disponibile e va usato if/elif."
  },
  {
    id: "py032", topic: "Cicli for e range",
    q: "Cosa rappresenta range(5) ?",
    opts: [
      "I numeri da 1 a 5 inclusi",
      "I numeri da 0 a 4 (0 incluso, 5 escluso)",
      "I numeri da 0 a 5 inclusi",
      "Una lista già materializzata [0,1,2,3,4]"
    ],
    correct: [1],
    exp: "range(n) genera la sequenza da 0 INCLUSO a n ESCLUSO, quindi range(5) → 0,1,2,3,4. È una sequenza 'pigra' (congelata): per vederla come lista serve list(range(5))."
  },
  {
    id: "py033", topic: "Cicli for e range",
    q: "Perché questo codice NON modifica la lista? \n\nfor animale in animali:\n    animale = animale.upper()",
    opts: [
      "La variabile del ciclo è una copia del valore: riassegnarla non tocca l'elemento nella lista",
      "Il metodo upper() non esiste per le stringhe, quindi la riga viene semplicemente ignorata",
      "Manca l'istruzione return, senza la quale la modifica non viene applicata alla lista",
      "In realtà il codice funziona e modifica correttamente ogni elemento della lista in maiuscolo"
    ],
    correct: [0],
    exp: "Nel for, 'animale' è una variabile temporanea che contiene il valore dell'elemento. Riassegnarla non tocca la lista. Per MODIFICARE gli elementi devi usare gli indici: for i in range(len(animali)): animali[i] = animali[i].upper()."
  },
  {
    id: "py034", topic: "Cicli for e range",
    q: "Cosa restituisce enumerate(lista) quando lo si scorre con un for?",
    opts: [
      "Soltanto gli elementi della lista, uno dopo l'altro, come farebbe un normale for",
      "Coppie (indice, elemento) per ciascun elemento della sequenza",
      "Soltanto gli indici numerici degli elementi, senza i valori corrispondenti",
      "La lunghezza complessiva della lista, cioè il numero totale dei suoi elementi"
    ],
    correct: [1],
    exp: "enumerate() abbina a ogni elemento il suo indice: for i, el in enumerate(lista) ti dà sia la posizione i sia il valore el. Comodo quando ti serve anche l'indice mentre iteri."
  },
  {
    id: "py035", topic: "Cicli for e range",
    q: "Qual è una regola importante quando si itera con un for su una sequenza?",
    opts: [
      "Non aggiungere né togliere elementi dalla sequenza che si sta iterando in quel momento",
      "Bisogna sempre usare range() al posto di scorrere direttamente gli elementi della lista",
      "Non si possono usare le liste come sequenza: servono per forza tuple oppure dizionari",
      "Ogni ciclo for deve sempre terminare con un blocco else, altrimenti non risulta valido"
    ],
    correct: [0],
    exp: "Modificare (aggiungere/rimuovere elementi) una sequenza mentre la si scorre con un for porta a risultati IMPREVEDIBILI, perché gli indici si spostano durante l'iterazione. Se devi rimuovere elementi, usa un while o costruisci una nuova lista."
  },
  {
    id: "py036", topic: "List comprehension",
    q: "Cosa produce [x.upper() for x in ['a','b'] ] ?",
    opts: [
      "['a','b']",
      "['A','B']",
      "'AB'",
      "Errore"
    ],
    correct: [1],
    exp: "La list comprehension crea una NUOVA lista applicando un'espressione a ogni elemento. Qui applica .upper() a 'a' e 'b' → ['A','B']. Sintassi: [ ESPRESSIONE for VAR in SEQUENZA ]."
  },
  {
    id: "py037", topic: "List comprehension",
    q: "Come si FILTRANO gli elementi in una list comprehension?",
    opts: [
      "Aggiungendo una condizione if in fondo, es. [x for x in seq if condizione]",
      "Anteponendo la parola chiave filter, come in [filter x for x in seq]",
      "Non è possibile filtrare direttamente all'interno di una list comprehension",
      "Inserendo un ciclo while dentro le parentesi quadre al posto del for"
    ],
    correct: [0],
    exp: "Basta aggiungere un if con una condizione booleana in fondo: [animale for animale in animali if len(animale)==4] tiene solo gli elementi che soddisfano la condizione."
  },
  {
    id: "py038", topic: "Ciclo while",
    q: "Quando è più indicato un ciclo while rispetto a un for?",
    opts: [
      "Quando non sai in anticipo quante iterazioni servono: si ripete finché una condizione è vera",
      "Quando devi scorrere una lista di elementi già noti dall'inizio alla fine in ordine",
      "Quando ti serve un contatore numerico che cresce di uno a ogni passaggio del ciclo",
      "Sempre: il ciclo while è preferibile al for in qualsiasi situazione tu debba iterare"
    ],
    correct: [0],
    exp: "Il while ripete il blocco FINCHÉ la condizione booleana resta vera: ideale quando non conosci il numero di ripetizioni (ricerche, cicli che aggiungono/tolgono elementi, cicli 'infiniti'). Il for è invece adatto a scorrere sequenze note."
  },
  {
    id: "py039", topic: "Funzioni",
    q: "Cosa restituisce una funzione che NON contiene un'istruzione return?",
    opts: [
      "0",
      "Una stringa vuota",
      "None",
      "Un errore"
    ],
    correct: [2],
    exp: "Se una funzione non ha return (o ha return senza valore), restituisce automaticamente None. Per questo se provi a usarne il risultato ottieni None."
  },
  {
    id: "py040", topic: "Funzioni",
    q: "Come si definisce un argomento con valore di default? \n\ndef ripeti(stringa, volte=3): ...",
    opts: [
      "Gli argomenti di default vanno messi PRIMA di quelli obbligatori",
      "Gli argomenti di default vanno messi ALLA FINE, dopo quelli obbligatori",
      "Non è possibile avere valori di default",
      "Serve la parola chiave default"
    ],
    correct: [1],
    exp: "Gli argomenti con valore di default (es. volte=3) vanno scritti DOPO quelli senza default. Quando chiami la funzione puoi ometterli (usa il default), passarli per posizione o per nome (volte=7)."
  },
  {
    id: "py041", topic: "Funzioni",
    q: "Perché è pericoloso usare una lista (o altro oggetto mutabile) come valore di default? \n\ndef f(lista=[]): ...",
    opts: [
      "La lista di default è condivisa tra tutte le chiamate e conserva le modifiche precedenti",
      "Perché le liste non possono in alcun modo essere passate come argomento a una funzione",
      "Perché una lista come valore di default causa subito un errore di sintassi alla definizione",
      "Non è affatto pericoloso: ogni chiamata riceve comunque una nuova lista vuota e separata"
    ],
    correct: [0],
    exp: "Il valore di default viene creato UNA sola volta, alla definizione della funzione. Se è mutabile (lista, dizionario), lo STESSO oggetto è condiviso da tutte le invocazioni e accumula le modifiche. Soluzione: usare lista=None e crearla dentro la funzione."
  },
  {
    id: "py042", topic: "Funzioni",
    q: "A cosa serve la parola chiave global dentro una funzione?",
    opts: [
      "A creare una variabile visibile solo dentro la funzione",
      "A poter RIASSEGNARE una variabile definita fuori dalla funzione",
      "A rendere la funzione più veloce",
      "A importare un modulo"
    ],
    correct: [1],
    exp: "Dentro una funzione puoi LEGGERE una variabile esterna, ma se provi a riassegnarla Python ne crea una nuova locale. Dichiarando 'global nome' dici a Python di modificare proprio la variabile esterna."
  },
  {
    id: "py043", topic: "Funzioni lambda",
    q: "Quali affermazioni sono vere per le funzioni lambda? (una o più risposte)",
    opts: [
      "Non usano la parola chiave def",
      "Non richiedono la parola return",
      "Devono stare su una sola riga",
      "Possono contenere molte istruzioni e cicli"
    ],
    correct: [0,1,2],
    exp: "Una lambda è una funzione anonima 'al volo': niente def, niente return (il valore è l'espressione stessa), e deve stare su una singola riga con una sola espressione. lambda x,y: x+y equivale a una def che ritorna x+y."
  },
  {
    id: "py044", topic: "Funzioni lambda",
    q: "A cosa serve il parametro key in sorted(lista, key=...) ?",
    opts: [
      "A fornire una funzione che, dato un elemento, restituisce il valore su cui ordinare",
      "A indicare quanti elementi della lista devono essere effettivamente ordinati dalla funzione",
      "A forzare l'ordinamento in ordine alfabetico anche quando gli elementi sono dei numeri",
      "A rimuovere gli elementi duplicati dalla lista prima di procedere con l'ordinamento"
    ],
    correct: [0],
    exp: "key riceve una funzione che, per ogni elemento, calcola il valore su cui ordinare. Es: sorted(animali, key=lambda x: x[1]) ordina le tuple in base al secondo elemento (es. l'età) invece che alfabeticamente."
  },
  {
    id: "py045", topic: "OOP - classi e oggetti",
    q: "Qual è la differenza tra una classe e un'istanza (oggetto)?",
    opts: [
      "La classe è il modello/stampo; l'istanza è un esemplare concreto creato da quel modello",
      "L'istanza è il modello generale, mentre la classe è un singolo esemplare creato da esso",
      "La classe risiede solo nella memoria, mentre l'istanza viene sempre salvata su disco fisso",
      "Sono la stessa identica cosa: due termini intercambiabili per indicare lo stesso concetto"
    ],
    correct: [0],
    exp: "La classe (es. Animale) è la descrizione/modello di tutti i possibili animali; l'istanza (es. mio_gatto = Animale(...)) è un esemplare concreto costruito da quel modello, con i suoi valori."
  },
  {
    id: "py046", topic: "OOP - self",
    q: "Cosa rappresenta 'self' nei metodi di una classe?",
    opts: [
      "L'istanza corrente, cioè l'oggetto specifico su cui il metodo è stato chiamato",
      "La classe stessa, cioè il modello da cui vengono creati tutti gli oggetti",
      "Una variabile globale condivisa da tutte le istanze di quella classe",
      "Il valore che il metodo restituirà automaticamente alla fine dell'esecuzione"
    ],
    correct: [0],
    exp: "self è il riferimento all'ISTANZA corrente. self.verso significa 'il verso proprio di questo specifico oggetto'. Va messo come primo parametro dei metodi, ma non lo passi tu quando chiami mio_gatto.parla()."
  },
  {
    id: "py047", topic: "OOP - __init__",
    q: "A cosa serve il metodo __init__ ?",
    opts: [
      "È il costruttore: eseguito alla creazione dell'oggetto, ne inizializza gli attributi",
      "È il distruttore: eseguito quando l'oggetto viene eliminato dalla memoria",
      "Serve a definire come l'oggetto viene rappresentato come stringa nella print",
      "Serve a confrontare due istanze della stessa classe per vedere se sono uguali"
    ],
    correct: [0],
    exp: "__init__ è il COSTRUTTORE: viene eseguito automaticamente quando crei un'istanza e serve a inizializzare le variabili d'istanza (es. self.specie = specie). Il nome ha i doppi underscore perché è un metodo speciale."
  },
  {
    id: "py048", topic: "OOP - variabili classe/istanza",
    q: "Qual è la differenza tra variabile di ISTANZA e variabile di CLASSE?",
    opts: [
      "La variabile d'istanza può differire per ogni oggetto; quella di classe è condivisa da tutti",
      "La variabile di classe assume un valore diverso per ciascun oggetto creato dalla classe",
      "Le variabili d'istanza sono costanti e non possono più essere modificate dopo la creazione",
      "Non c'è alcuna differenza pratica: sono due nomi diversi per lo stesso identico concetto"
    ],
    correct: [0],
    exp: "La variabile d'istanza (es. self.specie) può essere diversa per ogni oggetto. La variabile di classe (es. regno_della_vita = 'ANIMALE', dichiarata direttamente nella classe) è una proprietà comune, uguale per tutti gli esemplari."
  },
  {
    id: "py049", topic: "OOP - metodi speciali",
    q: "A cosa serve ridefinire il metodo __str__ in una classe?",
    opts: [
      "Cambia come l'oggetto viene rappresentato come stringa, ad esempio quando lo si stampa",
      "Definisce come l'oggetto viene inizializzato al momento della sua creazione",
      "Stabilisce cosa accade quando l'oggetto viene eliminato dalla memoria",
      "Definisce cosa accade quando l'oggetto viene sommato a un altro con +"
    ],
    correct: [0],
    exp: "__str__ è un metodo speciale che definisce come l'oggetto viene trasformato in stringa (es. quando fai print(oggetto)). Senza ridefinirlo, Python stampa una rappresentazione poco leggibile con l'indirizzo di memoria."
  },
  {
    id: "py050", topic: "OOP - ereditarietà",
    q: "Come si crea una classe Cane che eredita dalla classe Animale?",
    opts: [
      "class Cane extends Animale:",
      "class Cane(Animale):",
      "class Cane inherits Animale:",
      "class Cane -> Animale:"
    ],
    correct: [1],
    exp: "In Python l'ereditarietà si dichiara mettendo la classe genitore tra parentesi: class Cane(Animale). Cane eredita così tutti gli attributi e metodi di Animale, e può aggiungerne o sovrascriverne."
  },
  {
    id: "py051", topic: "OOP - ereditarietà",
    q: "A cosa serve super().__init__(...) in una sottoclasse?",
    opts: [
      "A richiamare il costruttore della classe genitore e riutilizzarne l'inizializzazione",
      "A distruggere l'istanza della classe genitore prima di crearne una nuova nella sottoclasse",
      "A creare automaticamente una nuova classe che eredita da quella corrente durante l'avvio",
      "A rendere privati tutti gli attributi ereditati, così da nasconderli al codice esterno"
    ],
    correct: [0],
    exp: "super() fa riferimento alla classe genitore. super().__init__(specie, verso) richiama il costruttore del genitore per inizializzare gli attributi ereditati, così non devi riscriverli nella sottoclasse."
  },
  {
    id: "py052", topic: "OOP - override",
    q: "Cosa significa fare l'OVERRIDE di un metodo?",
    opts: [
      "Ridefinire in una sottoclasse un metodo del genitore, cambiandone il comportamento",
      "Cancellare definitivamente un metodo ereditato dalla classe genitore in tutte le istanze",
      "Richiamare due volte di seguito lo stesso metodo per raddoppiarne l'effetto sull'oggetto",
      "Rendere un metodo privato in modo che non sia più accessibile dall'esterno della classe"
    ],
    correct: [0],
    exp: "L'override è la ridefinizione, in una sottoclasse, di un metodo ereditato: la versione della sottoclasse 'vince' e sostituisce quella del genitore per quegli oggetti. Serve a specializzare o modificare un comportamento."
  },
  {
    id: "py053", topic: "OOP - incapsulamento",
    q: "Come si rende 'privato' un attributo in Python (per convenzione / name mangling)?",
    opts: [
      "Facendo iniziare il nome con due underscore, ad esempio self.__pinne",
      "Scrivendo la parola chiave private prima del nome, come in altri linguaggi",
      "Scrivendo il nome dell'attributo interamente in lettere maiuscole",
      "Non è possibile: in Python ogni attributo è sempre pubblico e accessibile"
    ],
    correct: [0],
    exp: "Anteponendo due underscore (self.__pinne) Python applica il 'name mangling' e l'attributo non è più accessibile direttamente dall'esterno (salmone.__pinne dà errore). Si accede tramite metodi getter/setter."
  },
  {
    id: "py054", topic: "OOP - property",
    q: "A cosa serve il decoratore @property in una classe?",
    opts: [
      "Definisce un metodo getter che si usa come un normale attributo, senza parentesi",
      "Elimina un attributo dall'istanza dopo che è stato letto la prima volta",
      "Rende la classe astratta, impedendo di crearne direttamente delle istanze",
      "Trasforma un attributo di istanza in una variabile globale visibile ovunque"
    ],
    correct: [0],
    exp: "@property trasforma un metodo in un 'getter' richiamabile come attributo (oggetto.name senza parentesi). Con @name.setter si definisce il metodo per assegnare il valore. Serve a controllare la lettura/scrittura di attributi privati."
  },
  {
    id: "py055", topic: "Pacchetti e ambienti",
    q: "Quali comandi installano una libreria Python? (una o più risposte)",
    opts: [
      "pip install Flask",
      "conda install Flask",
      "poetry add Flask",
      "python install Flask"
    ],
    correct: [0,1,2],
    exp: "pip (il gestore standard), conda (ambiente Anaconda) e poetry sono tre strumenti per installare pacchetti. 'python install Flask' non esiste. Le librerie si trovano su PyPI (Python Package Index, pypi.org)."
  },
  {
    id: "py056", topic: "Pacchetti e ambienti",
    q: "A cosa serve un ambiente virtuale (virtual environment)?",
    opts: [
      "A isolare le dipendenze di un progetto dalle altre installazioni Python del sistema",
      "A compilare il codice Python in linguaggio macchina per renderlo più veloce",
      "A cifrare il codice sorgente così che non sia leggibile da altri sviluppatori",
      "A gestire in automatico la connessione del programma alle risorse di internet"
    ],
    correct: [0],
    exp: "Un virtual environment (creato con python3 -m venv nomeenv) crea un ambiente Python isolato con le sue librerie, così progetti diversi possono usare versioni diverse dei pacchetti senza interferire tra loro."
  },
  {
    id: "py057", topic: "Pacchetti e ambienti",
    q: "A cosa serve il file requirements.txt ?",
    opts: [
      "A elencare le librerie e le versioni da installare, per ricreare l'ambiente altrove",
      "A contenere il codice sorgente principale che verrà eseguito all'avvio del programma",
      "A memorizzare in modo sicuro le password e le credenziali usate dal programma",
      "A definire le classi e le funzioni riutilizzabili all'interno del progetto Python"
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
      "package.json",
      "module.txt"
    ],
    correct: [1],
    exp: "Il file __init__.py (anche vuoto) dentro una cartella indica a Python che quella directory è un pacchetto importabile. È la convenzione classica per organizzare il codice in moduli."
  },
  {
    id: "py059", topic: "File e JSON",
    q: "Per salvare una collezione di oggetti Python (es. l'inventario di un magazzino) su file in modo leggibile e riutilizzabile, un formato tipico è...",
    opts: [
      "JSON",
      "MP3",
      "PNG",
      "EXE"
    ],
    correct: [0],
    exp: "JSON è un formato di testo per salvare dati strutturati (liste, dizionari). In Python si usa il modulo json (json.dump per salvare, json.load per caricare). È il formato richiesto dall'esercizio d'esame sul magazzino."
  },
  {
    id: "py060", topic: "Operazioni CRUD",
    q: "Cosa significa l'acronimo CRUD (operazioni di base su un archivio/DB)?",
    opts: [
      "Create, Read, Update, Delete",
      "Copy, Run, Undo, Delete",
      "Connect, Read, Use, Download",
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
      "kind()",
      "class()"
    ],
    correct: [1],
    exp: "type(oggetto) restituisce il tipo dell'oggetto (es. type([1,2]) → <class 'list'>). Utile per capire con che tipo di dato si sta lavorando."
  },
  {
    id: "py062", topic: "Liste",
    q: "Cosa restituisce len(lista) ?",
    opts: [
      "L'ultimo elemento della lista",
      "Il numero di elementi della lista",
      "La somma degli elementi",
      "Una copia della lista"
    ],
    correct: [1],
    exp: "len() restituisce la LUNGHEZZA, cioè il numero di elementi della lista (o caratteri di una stringa, o coppie di un dizionario). Non modifica la lista."
  },
  {
    id: "py100", topic: "Stringhe",
    q: "Le stringhe in Python sono immutabili. Cosa succede eseguendo s = 'ciao'; s[0] = 'X' ?",
    opts: [
      "Solleva un TypeError: le stringhe sono immutabili e non si modificano per indice",
      "La stringa viene modificata correttamente e la variabile s diventa 'Xiao'",
      "Non accade nulla: l'assegnazione viene ignorata e s resta invariata a 'ciao'",
      "Restituisce il carattere 'X' senza però modificare la variabile s originale"
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
      "['a b c']",
      "3"
    ],
    correct: [1],
    exp: ".split() senza argomenti divide la stringa sugli spazi e restituisce una LISTA di sottostringhe. Puoi passare un separatore, es. 'a,b'.split(',')."
  },
  {
    id: "py102", topic: "Stringhe",
    q: "Cosa restituisce '  ciao  '.strip() ?",
    opts: [
      "'ciao'",
      "'  ciao  '",
      "'ciao  '",
      "Errore"
    ],
    correct: [0],
    exp: ".strip() rimuove gli spazi (e gli a-capo) all'inizio e alla fine della stringa. Esistono anche .lstrip() (solo sinistra) e .rstrip() (solo destra)."
  },
  {
    id: "py103", topic: "Stringhe",
    q: "Cosa restituisce 'banana'.replace('a', 'o') ?",
    opts: [
      "'bonono'",
      "'banana'",
      "'bonana'",
      "Errore"
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
      "'Ciao'",
      "Errore"
    ],
    correct: [1],
    exp: ".upper() restituisce la stringa in maiuscolo, .lower() in minuscolo. Non modificano l'originale (le stringhe sono immutabili): restituiscono una nuova stringa."
  },
  {
    id: "py105", topic: "Stringhe",
    q: "Quanto vale len('Python') ?",
    opts: [
      "5",
      "6",
      "7",
      "Errore"
    ],
    correct: [1],
    exp: "len() su una stringa conta i caratteri. 'Python' ha 6 lettere → 6."
  },
  {
    id: "py106", topic: "Operatori di comparazione",
    q: "Quanto vale 1 < 5 < 10 in Python?",
    opts: [
      "True",
      "False",
      "Errore di sintassi",
      "5"
    ],
    correct: [0],
    exp: "Python permette il confronto 'a catena': 1 < 5 < 10 equivale a (1 < 5) and (5 < 10), entrambe vere → True."
  },
  {
    id: "py107", topic: "Operatori aritmetici",
    q: "Dopo x = 5; x += 3, quanto vale x ?",
    opts: [
      "5",
      "3",
      "8",
      "53"
    ],
    correct: [2],
    exp: "x += 3 è la forma abbreviata di x = x + 3 → 8. Esistono anche -=, *=, /=, //=, %=, **=."
  },
  {
    id: "py108", topic: "if / elif / else",
    q: "Cosa assegna stato = 'pari' if n % 2 == 0 else 'dispari' quando n vale 4 ?",
    opts: [
      "'pari'",
      "'dispari'",
      "True",
      "Errore"
    ],
    correct: [0],
    exp: "È l'operatore ternario (espressione condizionale): VALORE_SE_VERO if CONDIZIONE else VALORE_SE_FALSO. n=4 è pari → 'pari'."
  },
  {
    id: "py109", topic: "Cicli e controllo",
    q: "Cosa fa l'istruzione break dentro un ciclo?",
    opts: [
      "Salta all'iterazione successiva",
      "Interrompe ed esce immediatamente dal ciclo",
      "Riavvia il ciclo da capo",
      "Non fa nulla"
    ],
    correct: [1],
    exp: "break interrompe SUBITO il ciclo (for o while) e prosegue col codice dopo il ciclo. Per saltare solo all'iterazione corrente si usa continue."
  },
  {
    id: "py110", topic: "Cicli e controllo",
    q: "Cosa fa l'istruzione continue dentro un ciclo?",
    opts: [
      "Salta il resto del blocco e passa direttamente all'iterazione successiva del ciclo",
      "Interrompe subito il ciclo e prosegue con il codice che viene dopo di esso",
      "Termina l'intero programma nel punto in cui viene incontrata l'istruzione",
      "Riesegue da capo l'ultima riga eseguita prima di proseguire il ciclo"
    ],
    correct: [0],
    exp: "continue interrompe l'iterazione CORRENTE e passa direttamente alla successiva, saltando il codice rimanente nel blocco. break invece esce del tutto dal ciclo."
  },
  {
    id: "py111", topic: "Cicli e controllo",
    q: "A cosa serve l'istruzione pass?",
    opts: [
      "È un segnaposto che non fa nulla, usato dove serve un blocco non ancora scritto",
      "Stampa a video il valore della variabile che riceve come argomento",
      "Salta l'iterazione corrente del ciclo passando direttamente a quella dopo",
      "Cattura ed elimina in silenzio eventuali errori sollevati nel blocco"
    ],
    correct: [0],
    exp: "pass è un'istruzione 'vuota' che non fa niente. Si usa come segnaposto dove la sintassi richiede un blocco (es. una funzione o classe ancora da implementare)."
  },
  {
    id: "py112", topic: "Tuple",
    q: "Quale affermazione è vera per le tuple, es. t = (1, 2, 3) ?",
    opts: [
      "Sono immutabili: dopo la creazione non puoi aggiungere, togliere o cambiare elementi",
      "Sono modificabili esattamente come le liste, ad esempio con append e pop",
      "Possono contenere solo numeri, non stringhe o altri tipi di oggetti",
      "Possono contenere al massimo un solo elemento al loro interno"
    ],
    correct: [0],
    exp: "Le tuple sono sequenze IMMUTABILI: una volta create non puoi aggiungere, togliere o modificare elementi (t[0]=9 dà TypeError). Utili per dati che non devono cambiare."
  },
  {
    id: "py113", topic: "Tuple",
    q: "Dopo a, b = (10, 20), quanto valgono a e b ?",
    opts: [
      "a=(10,20), b non definito",
      "a=10 e b=20",
      "a=20 e b=10",
      "Errore"
    ],
    correct: [1],
    exp: "È lo 'unpacking' (spacchettamento): gli elementi della tupla vengono assegnati in ordine alle variabili. a=10, b=20. Funziona anche con le liste."
  },
  {
    id: "py114", topic: "Tuple",
    q: "Come si scrive una tupla con UN SOLO elemento?",
    opts: [
      "(5)",
      "(5,)",
      "[5]",
      "{5}"
    ],
    correct: [1],
    exp: "Serve la virgola: (5,) è una tupla di un elemento. (5) senza virgola è solo il numero 5 tra parentesi. [5] è una lista, {5} è un set."
  },
  {
    id: "py115", topic: "Set (insiemi)",
    q: "Cosa restituisce set([1, 2, 2, 3, 3, 3]) ?",
    opts: [
      "[1, 2, 3]",
      "{1, 2, 3}",
      "{1, 2, 2, 3, 3, 3}",
      "6"
    ],
    correct: [1],
    exp: "Un set (insieme) contiene solo valori UNICI: i duplicati vengono eliminati → {1, 2, 3}. È utile proprio per rimuovere i doppioni da una sequenza."
  },
  {
    id: "py116", topic: "Set (insiemi)",
    q: "Quali affermazioni sono vere per i set? (una o più risposte)",
    opts: [
      "Non contengono valori duplicati",
      "Non hanno un ordine garantito (non si accede per indice)",
      "Si aggiunge un elemento con .add()",
      "Mantengono sempre l'ordine di inserimento come le liste"
    ],
    correct: [0,1,2],
    exp: "I set non hanno duplicati, non sono ordinati (non puoi fare set[0]) e si popolano con .add(). L'ordine NON è garantito, a differenza delle liste."
  },
  {
    id: "py117", topic: "Dizionari",
    q: "A cosa serve il metodo .update() di un dizionario, es. d.update({'b': 9}) ?",
    opts: [
      "Aggiunge le nuove coppie chiave-valore e aggiorna quelle già presenti nel dizionario",
      "Cancella l'intero contenuto del dizionario riportandolo allo stato vuoto",
      "Restituisce una lista contenente soltanto le chiavi presenti nel dizionario",
      "Ordina le coppie del dizionario in base al valore associato alle chiavi"
    ],
    correct: [0],
    exp: ".update() aggiunge nuove coppie o aggiorna quelle esistenti. Se la chiave 'b' esiste ne cambia il valore, altrimenti la crea."
  },
  {
    id: "py118", topic: "Dizionari",
    q: "Dato d = {'a': 1, 'b': 2}, cosa restituisce 'a' in d ?",
    opts: [
      "True: l'operatore in verifica le CHIAVI",
      "False",
      "1",
      "Verifica i valori, quindi False"
    ],
    correct: [0],
    exp: "Su un dizionario l'operatore 'in' verifica la presenza tra le CHIAVI, non tra i valori. 'a' è una chiave → True. Per cercare tra i valori: valore in d.values()."
  },
  {
    id: "py119", topic: "List/dict comprehension",
    q: "Cosa produce {x: x*x for x in range(3)} ?",
    opts: [
      "{0: 0, 1: 1, 2: 4}",
      "[0, 1, 4]",
      "{0, 1, 4}",
      "Errore"
    ],
    correct: [0],
    exp: "È una dict comprehension: crea un dizionario con chiave x e valore x*x, per x in 0,1,2 → {0:0, 1:1, 2:4}. Sintassi: {chiave: valore for ... in ...}."
  },
  {
    id: "py120", topic: "Funzioni",
    q: "In def somma(*args), cosa rappresenta args dentro la funzione?",
    opts: [
      "Una tupla che raccoglie tutti gli argomenti posizionali passati alla funzione",
      "Un singolo valore, cioè il primo degli argomenti passati alla funzione al momento",
      "Un dizionario che associa a ogni argomento il nome del parametro corrispondente",
      "Una stringa contenente tutti gli argomenti concatenati uno dopo l'altro in ordine"
    ],
    correct: [0],
    exp: "*args raccoglie un numero variabile di argomenti POSIZIONALI in una tupla. Così puoi chiamare somma(1,2,3) e iterare su args al suo interno."
  },
  {
    id: "py121", topic: "Funzioni",
    q: "In def config(**kwargs), cosa rappresenta kwargs?",
    opts: [
      "Un dizionario che raccoglie tutti gli argomenti passati per nome (keyword)",
      "Una lista che raccoglie tutti gli argomenti passati per posizione",
      "Una tupla che contiene gli argomenti nell'ordine in cui sono passati",
      "Un intero pari al numero di argomenti ricevuti dalla funzione"
    ],
    correct: [0],
    exp: "**kwargs raccoglie gli argomenti passati per NOME in un dizionario. Es. config(host='x', port=8) → kwargs = {'host':'x','port':8}."
  },
  {
    id: "py122", topic: "Funzioni",
    q: "Una funzione con return a, b restituisce...",
    opts: [
      "Solo a",
      "Una tupla (a, b)",
      "Una lista [a, b]",
      "Errore: si può restituire un solo valore"
    ],
    correct: [1],
    exp: "return a, b restituisce una TUPLA (a, b). Chi chiama può fare x, y = funzione() per spacchettarla. È il modo Python di restituire più valori."
  },
  {
    id: "py123", topic: "None e identità",
    q: "Qual è il modo consigliato per verificare se una variabile è None?",
    opts: [
      "x == None",
      "x is None",
      "x = None",
      "None(x)"
    ],
    correct: [1],
    exp: "Si usa 'x is None': 'is' confronta l'IDENTITÀ (stesso oggetto in memoria), mentre '==' confronta il valore. Per None (oggetto unico) la convenzione è 'is None'."
  },
  {
    id: "py124", topic: "Tipi di dato",
    q: "Cosa fa isinstance(x, int) ?",
    opts: [
      "Restituisce True se x è un'istanza del tipo indicato, in questo caso un intero",
      "Converte il valore di x nel tipo indicato, in questo caso in un intero",
      "Crea e restituisce un nuovo oggetto del tipo indicato a partire da x",
      "Restituisce il numero di cifre di cui è composto il valore intero x"
    ],
    correct: [0],
    exp: "isinstance(oggetto, tipo) restituisce True se l'oggetto è di quel tipo (o di una sua sottoclasse). Es. isinstance(5, int) → True. È il modo preferito per controllare il tipo."
  },
  {
    id: "py125", topic: "Conversioni ed eccezioni",
    q: "Cosa succede eseguendo int('ciao') ?",
    opts: [
      "Solleva un ValueError perché la stringa non rappresenta un numero valido",
      "Restituisce 0, valore di default quando la conversione non è possibile",
      "Restituisce la stringa 'ciao' invariata, senza tentare la conversione",
      "Restituisce None per segnalare che la conversione non è riuscita"
    ],
    correct: [0],
    exp: "int() converte in intero, ma se la stringa non rappresenta un numero valido solleva ValueError. int('10') funziona, int('ciao') no. Spesso si gestisce con try/except."
  },
  {
    id: "py126", topic: "Stringhe",
    q: "Con prezzo = 3.14159, cosa produce f'{prezzo:.2f}' ?",
    opts: [
      "'3.14159'",
      "'3.14'",
      "'3'",
      "'3.142'"
    ],
    correct: [1],
    exp: "Nella f-string, :.2f formatta il numero come decimale con 2 cifre dopo la virgola → '3.14'. Utile per prezzi e valori arrotondati."
  },
  {
    id: "py127", topic: "Cicli for e range",
    q: "Cosa produce list(range(2, 10, 2)) ?",
    opts: [
      "[2,3,4,5,6,7,8,9]",
      "[2, 4, 6, 8]",
      "[2, 4, 6, 8, 10]",
      "[0, 2, 4, 6, 8]"
    ],
    correct: [1],
    exp: "range(start, stop, step): parte da 2, si ferma prima di 10, con passo 2 → [2,4,6,8]. Lo stop (10) è sempre escluso."
  },
  {
    id: "py128", topic: "Iterazione",
    q: "Cosa accoppia zip(['a','b'], [1, 2]) ?",
    opts: [
      "['a','b',1,2]",
      "[('a', 1), ('b', 2)]",
      "{'a': 1, 'b': 2}",
      "Errore"
    ],
    correct: [1],
    exp: "zip() abbina elemento per elemento più sequenze creando coppie: ('a',1), ('b',2). Utile per iterare due liste in parallelo: for lettera, numero in zip(l1, l2)."
  },
  {
    id: "py129", topic: "Moduli e import",
    q: "Per usare math.sqrt(9) cosa devi fare prima?",
    opts: [
      "Niente, è sempre disponibile",
      "Importare il modulo: import math",
      "Reinstallare Python",
      "Definire una funzione sqrt"
    ],
    correct: [1],
    exp: "sqrt fa parte del modulo math della libreria standard: va importato con 'import math' prima di usarlo. In alternativa: from math import sqrt, poi sqrt(9)."
  },
  {
    id: "py130", topic: "Gestione eccezioni",
    q: "Che errore genera l'operazione 10 / 0 ?",
    opts: [
      "ValueError",
      "ZeroDivisionError",
      "TypeError",
      "Nessuno, restituisce infinito"
    ],
    correct: [1],
    exp: "La divisione per zero solleva ZeroDivisionError. Si può prevenire controllando il divisore, oppure gestire l'errore con try/except."
  },
  {
    id: "py131", topic: "Gestione eccezioni",
    q: "A cosa serve l'istruzione raise, es. raise ValueError('dato non valido') ?",
    opts: [
      "A sollevare (lanciare) volontariamente un'eccezione, ad esempio per un input non valido",
      "A gestire un errore già verificato, in modo da non arrestare l'intero programma",
      "A ignorare in silenzio un errore e proseguire l'esecuzione come se nulla fosse",
      "A stampare a video un messaggio di avviso senza interrompere il flusso del codice"
    ],
    correct: [0],
    exp: "raise lancia volontariamente un'eccezione, ad esempio per segnalare un input non valido. try/except invece CATTURA gli errori che si verificano."
  },
  {
    id: "py132", topic: "Gestione eccezioni",
    q: "Nel costrutto try/except/finally, quando viene eseguito il blocco finally?",
    opts: [
      "Soltanto quando il blocco try viene eseguito senza sollevare alcun errore",
      "Soltanto quando all'interno del blocco try si verifica effettivamente un errore",
      "SEMPRE, sia che si verifichi un errore sia che non se ne verifichi alcuno",
      "Mai: il blocco finally è opzionale e viene sempre completamente ignorato"
    ],
    correct: [2],
    exp: "Il blocco finally viene eseguito SEMPRE, in ogni caso. Si usa per operazioni di 'pulizia' che devono avvenire comunque, es. chiudere un file o una connessione."
  },
  {
    id: "py133", topic: "Liste",
    q: "Qual è la differenza tra sorted(lista) e lista.sort() ?",
    opts: [
      "sorted() crea una nuova lista ordinata; .sort() ordina sul posto e restituisce None",
      "sort() crea una nuova lista ordinata, mentre sorted() modifica direttamente quella originale",
      "Sono equivalenti: entrambi restituiscono una nuova lista lasciando intatta quella di partenza",
      "sorted() funziona solo con i numeri, mentre .sort() funziona con qualsiasi tipo di dato"
    ],
    correct: [0],
    exp: "sorted(lista) NON modifica l'originale e restituisce una nuova lista ordinata. lista.sort() modifica la lista stessa e restituisce None. Scegli in base a se vuoi conservare l'ordine originale."
  },
  {
    id: "py134", topic: "Liste",
    q: "Data lista = [1, 2], cosa distingue lista.extend([3,4]) da lista.append([3,4]) ?",
    opts: [
      "extend aggiunge i singoli elementi → [1,2,3,4]; append aggiunge la lista intera → [1,2,[3,4]]",
      "append aggiunge i singoli elementi → [1,2,3,4]; extend aggiunge la lista intera → [1,2,[3,4]]",
      "Sono equivalenti: in entrambi i casi il risultato finale è esattamente la lista [1, 2, 3, 4]",
      "extend genera un errore perché non accetta una lista come argomento da aggiungere in coda"
    ],
    correct: [0],
    exp: ".extend() aggiunge uno per uno gli elementi dell'altra lista → [1,2,3,4]. .append() aggiunge l'argomento come singolo elemento → [1,2,[3,4]] (lista annidata)."
  },
  {
    id: "py135", topic: "Liste",
    q: "Cosa fa lista.insert(0, 'x') ?",
    opts: [
      "Inserisce 'x' in posizione 0 (all'inizio), spostando in avanti tutti gli altri elementi",
      "Aggiunge 'x' in fondo alla lista, dopo tutti gli elementi già presenti al suo interno",
      "Sostituisce l'elemento che si trova in posizione 0 con il nuovo valore 'x' indicato",
      "Rimuove l'elemento in posizione 0 e lo restituisce, accorciando di uno la lunghezza"
    ],
    correct: [0],
    exp: ".insert(indice, valore) inserisce l'elemento nella posizione indicata facendo scorrere gli altri. insert(0,'x') lo mette all'inizio. Per sostituire useresti lista[0]='x'."
  },
  {
    id: "py136", topic: "OOP - metodi speciali",
    q: "Quale metodo speciale bisogna definire in una classe perché funzioni len(oggetto) ?",
    opts: [
      "__init__",
      "__str__",
      "__len__",
      "__count__"
    ],
    correct: [2],
    exp: "Definendo __len__(self) nella classe, len(oggetto) restituirà ciò che quel metodo ritorna. È uno dei 'metodi speciali' (dunder) come __str__, __eq__, __getitem__."
  },
  {
    id: "py137", topic: "Funzioni generatore",
    q: "Come si crea una funzione generatore (generator function) in Python?",
    opts: [
      "Usando la parola chiave yield al posto di return per produrre i valori uno alla volta",
      "Aggiungendo il decoratore @generator sopra la definizione della funzione",
      "Aggiungendo l'annotazione -> gen nella firma della funzione dopo i parametri",
      "Richiamando la funzione con la sintassi generator(funzione) al momento della chiamata"
    ],
    correct: [0],
    exp: "Una funzione diventa generatore quando contiene almeno un yield: invece di calcolare tutto con return, 'produce' i valori uno alla volta risparmiando memoria. @generator e l'annotazione '-> gen' NON esistono: sono termini inventati, tipici distrattori d'esame."
  },
  {
    id: "py138", topic: "Riferimenti e mutabilità",
    q: "a = [1, 2]; b = a; b.append(3). Quanto vale len(a) alla fine?",
    opts: [
      "3, perché a e b puntano alla STESSA lista in memoria",
      "2, perché b è una copia indipendente e a non viene toccata",
      "1, perché append sostituisce il contenuto invece di aggiungere",
      "Solleva un errore perché non si può modificare a attraverso b"
    ],
    correct: [0],
    exp: "b = a NON copia la lista: crea un secondo nome per lo stesso oggetto. Modificando b modifichi anche a → len(a) è 3. Per una copia vera: b = a.copy() oppure b = a[:]."
  },
  {
    id: "py139", topic: "Uguaglianza e identità",
    q: "a = [1, 2]; b = [1, 2]. Cosa restituiscono a == b e a is b?",
    opts: [
      "a == b è True (stessi valori), a is b è False (oggetti diversi in memoria)",
      "Sono entrambi True, perché le due liste hanno lo stesso contenuto",
      "Sono entrambi False, perché due liste diverse non si possono confrontare",
      "a == b è False mentre a is b è True, perché contano solo i riferimenti"
    ],
    correct: [0],
    exp: "== confronta i VALORI (contenuto uguale → True). is confronta l'IDENTITÀ, cioè se è lo stesso oggetto in memoria: sono due liste distinte → False. Non confondere i due operatori."
  },
  {
    id: "py140", topic: "Argomenti di default mutabili",
    q: "def f(x, lista=[]): lista.append(x); return lista. Cosa restituisce la SECONDA chiamata f(2), dopo f(1)?",
    opts: [
      "[1, 2], perché la lista di default è la stessa e conserva i valori tra le chiamate",
      "[2], perché a ogni chiamata la lista di default viene ricreata vuota",
      "[1], perché viene conservato solo il valore della prima chiamata",
      "Solleva un errore perché una lista non è ammessa come valore di default"
    ],
    correct: [0],
    exp: "Trappola classica: il valore di default è creato UNA sola volta. Essendo mutabile, la stessa lista è condivisa: f(1) dà [1], f(2) dà [1,2]. Soluzione: usare lista=None e crearla dentro la funzione."
  },
  {
    id: "py141", topic: "Numeri in virgola mobile",
    q: "Quanto vale 0.1 + 0.2 == 0.3 in Python?",
    opts: [
      "False, per come i decimali sono rappresentati in virgola mobile (dà 0.30000...4)",
      "True, perché la somma restituisce esattamente 0.3 come previsto",
      "Solleva un errore di arrotondamento durante il confronto tra i numeri",
      "True, ma soltanto se prima si convertono i numeri con la funzione int()"
    ],
    correct: [0],
    exp: "I float non rappresentano esattamente molti decimali: 0.1 + 0.2 dà 0.30000000000000004, diverso da 0.3 → False. Per confronti sicuri si usa round() o math.isclose()."
  },
  {
    id: "py142", topic: "Valori logici (truthy/falsy)",
    q: "Quanto vale bool('False') (la stringa 'False', non il booleano)?",
    opts: [
      "True, perché qualsiasi stringa NON vuota è considerata vera",
      "False, perché il testo della stringa è proprio la parola 'False'",
      "Solleva un errore perché 'False' non è un valore booleano valido",
      "None, perché la stringa non può essere convertita in un booleano"
    ],
    correct: [0],
    exp: "Trappola: conta solo se la stringa è vuota o no, non il suo contenuto. 'False' è una stringa non vuota → bool('False') è True. Solo '' (stringa vuota) vale False."
  },
  {
    id: "py143", topic: "Operatori su stringhe",
    q: "Quanto vale '5' * 3 in Python?",
    opts: [
      "'555', perché l'operatore * ripete la stringa il numero di volte indicato",
      "15, perché la stringa '5' viene convertita in numero e poi moltiplicata",
      "'15', concatenando il prodotto numerico al valore originale della stringa",
      "Solleva un TypeError perché una stringa non può essere moltiplicata"
    ],
    correct: [0],
    exp: "Con stringa e intero, l'operatore * RIPETE la stringa: '5' * 3 → '555'. Non fa la moltiplicazione numerica (per quella servirebbe int('5') * 3 = 15)."
  },
  {
    id: "py144", topic: "Confronti insidiosi",
    q: "Cosa restituisce [] == False in Python?",
    opts: [
      "False, perché una lista e un booleano non sono uguali, pur essendo entrambi 'falsy'",
      "True, perché la lista vuota equivale in tutto e per tutto a False in qualunque confronto",
      "True, perché entrambi i valori vengono convertiti a 0 prima di essere confrontati tra loro",
      "Solleva un errore perché una lista e un booleano non sono tipi confrontabili con l'operatore =="
    ],
    correct: [0],
    exp: "Trappola: [] è 'falsy' (bool([]) è False) ma == confronta i VALORI, e una lista non è uguale a un booleano → False. 'Essere falsy' e 'essere uguale a False' sono cose diverse."
  },
  {
    id: "py145", topic: "Mutabilità nelle tuple",
    q: "t = (1, [2, 3]). L'istruzione t[1].append(4) cosa produce?",
    opts: [
      "Funziona: t diventa (1, [2, 3, 4]), perché la lista interna resta modificabile",
      "Solleva un errore, perché le tuple sono immutabili in ogni loro parte",
      "Non fa nulla, perché un append su un elemento di tupla viene ignorato",
      "Sostituisce l'intero secondo elemento della tupla con il valore 4"
    ],
    correct: [0],
    exp: "L'immutabilità della tupla riguarda QUALI oggetti contiene, non il loro stato interno: non puoi sostituire t[1], ma la lista dentro la tupla resta mutabile → diventa [2,3,4]. Trappola sottile."
  },
  {
    id: "py146", topic: "Variabili e scope",
    q: "x = 10; def f(): x = 5. Dopo aver chiamato f(), quanto vale x all'esterno?",
    opts: [
      "10, perché l'assegnazione dentro la funzione crea una NUOVA variabile locale",
      "5, perché la funzione modifica direttamente la variabile esterna chiamata x",
      "None, perché la funzione azzera il contenuto della variabile esterna x",
      "Solleva un errore perché la variabile x risulta definita due volte"
    ],
    correct: [0],
    exp: "Assegnare x dentro la funzione crea una variabile LOCALE che vale solo dentro f. La x esterna resta 10. Per modificarla davvero servirebbe dichiarare 'global x'."
  },
  // === AGGIUNGI NUOVE DOMANDE PYTHON QUI ===
]);
