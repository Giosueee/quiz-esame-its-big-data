/* ============================================================
   MATERIA: SO Reti Virtualizzazione  (UFS02)
   100 domande bilanciate e "a trabocchetto". Opzioni concise: il
   dettaglio sta nel campo exp, così la corretta non si riconosce.
   ============================================================ */
registerSubject("SO Reti Virtualizzazione", [
  {
    id: "u02001", topic: "Sistema operativo",
    q: "Qual è il compito principale di un sistema operativo?",
    opts: [
      "Gestire le risorse hardware e fare da intermediario con i programmi",
      "Tradurre una volta per tutte il codice sorgente in linguaggio macchina",
      "Fornire l'interfaccia grafica con cui l'utente apre le applicazioni"
    ],
    correct: [0],
    exp: "Il SO gestisce CPU, memoria, dischi e periferiche e offre ai programmi un'interfaccia uniforme per usarle, facendo da strato intermedio tra hardware e applicazioni."
  },
  {
    id: "u02002", topic: "Kernel",
    q: "Che cos'è il kernel?",
    opts: [
      "Il nucleo del sistema operativo, che gira con i privilegi più alti",
      "Il programma con cui l'utente avvia e chiude le altre applicazioni",
      "L'area di memoria in cui risiedono i dati dei processi utente"
    ],
    correct: [0],
    exp: "Il kernel è il cuore del SO: gira in modalità privilegiata (kernel mode) e controlla accesso a hardware, processi e memoria. Le applicazioni girano invece in user mode, con permessi ridotti."
  },
  {
    id: "u02003", topic: "Processo",
    q: "Che cos'è un processo?",
    opts: [
      "Un programma in esecuzione, con un proprio spazio di memoria",
      "Un programma salvato su disco in attesa di essere avviato",
      "Un flusso di esecuzione che condivide la memoria con altri"
    ],
    correct: [0],
    exp: "Un processo è un'istanza di un programma in esecuzione, con memoria, registri e risorse propri. Lo stesso programma può generare più processi distinti e isolati tra loro."
  },
  {
    id: "u02004", topic: "Processo vs thread",
    q: "Qual è la differenza principale tra processo e thread?",
    opts: [
      "I thread condividono la memoria del processo; i processi sono isolati",
      "I processi condividono la memoria; i thread hanno spazi separati",
      "I thread girano in processi diversi e comunicano solo via rete"
    ],
    correct: [0],
    exp: "Un processo ha uno spazio di memoria proprio e isolato; i thread sono flussi di esecuzione DENTRO un processo che ne condividono la memoria. I thread sono più leggeri ma richiedono sincronizzazione."
  },
  {
    id: "u02005", topic: "Scheduling",
    q: "A cosa serve lo scheduler della CPU?",
    opts: [
      "Decidere quale processo pronto usa la CPU e per quanto tempo",
      "Spostare le pagine di memoria tra la RAM e l'area di swap",
      "Assegnare a ogni processo un identificativo univoco alla creazione"
    ],
    correct: [0],
    exp: "Lo scheduler assegna la CPU ai processi pronti secondo una politica (round robin, priorità, ecc.), dando l'illusione che più processi girino contemporaneamente su una singola CPU."
  },
  {
    id: "u02006", topic: "Multitasking",
    q: "Il multitasking (time sharing) consiste nel:",
    opts: [
      "Alternare rapidamente più processi sulla CPU così da sembrare simultanei",
      "Distribuire i processi su più core così da eseguirli davvero in parallelo",
      "Eseguire un processo per volta fino al termine, poi passare al successivo"
    ],
    correct: [0],
    exp: "Il multitasking assegna a turno piccole fette di tempo (time slice) ai vari processi: l'alternanza è così rapida da sembrare esecuzione simultanea, anche con una sola CPU."
  },
  {
    id: "u02007", topic: "Deadlock",
    q: "Che cos'è un deadlock (stallo)?",
    opts: [
      "Più processi bloccati in attesa reciproca di risorse che non si liberano",
      "Un processo che monopolizza la CPU impedendo agli altri di avanzare",
      "Più processi che modificano una risorsa condivisa senza sincronizzarsi"
    ],
    correct: [0],
    exp: "Il deadlock si verifica quando processi si bloccano a vicenda: ognuno attende una risorsa detenuta da un altro, e nessuno può proseguire. Serve prevenirlo o rilevarlo e interromperlo."
  },
  {
    id: "u02008", topic: "Gestione memoria",
    q: "A cosa serve la memoria virtuale?",
    opts: [
      "Dare a ogni processo più spazio di indirizzi della RAM fisica",
      "Spostare nella cache del processore i dati usati più di frequente",
      "Ridurre il consumo di RAM comprimendo i processi inattivi"
    ],
    correct: [0],
    exp: "La memoria virtuale usa una parte del disco (swap/paging) come estensione della RAM: ogni processo 'vede' uno spazio di indirizzi ampio e continuo, anche se la RAM fisica è limitata."
  },
  {
    id: "u02009", topic: "Paginazione",
    q: "La paginazione della memoria consiste nel:",
    opts: [
      "Suddividere memoria logica e fisica in blocchi di dimensione fissa",
      "Suddividere la memoria in segmenti di lunghezza variabile per processo",
      "Spostare l'intero processo su disco quando la RAM è insufficiente"
    ],
    correct: [0],
    exp: "La paginazione divide memoria logica e fisica in blocchi di taglia fissa (pagine e frame): permette di caricare in RAM solo le pagine necessarie, spostando le altre su disco (swap)."
  },
  {
    id: "u02010", topic: "File system",
    q: "Che cos'è un file system?",
    opts: [
      "Il modo in cui il SO organizza e memorizza i file su un supporto",
      "Il programma che indicizza i file per velocizzarne la ricerca",
      "L'area di memoria dove il SO tiene i file aperti di recente"
    ],
    correct: [0],
    exp: "Il file system definisce come dati e metadati sono organizzati su disco (cartelle, permessi, nomi). Esempi: NTFS, ext4, FAT32, APFS. Gestisce allocazione dello spazio e accesso ai file."
  },
  {
    id: "u02011", topic: "Modello OSI",
    q: "Quanti livelli ha il modello OSI?",
    opts: [
      "7",
      "5",
      "4"
    ],
    correct: [0],
    exp: "Il modello OSI ha 7 livelli: Fisico, Data Link, Rete, Trasporto, Sessione, Presentazione, Applicazione. È un modello di riferimento concettuale per la comunicazione di rete."
  },
  {
    id: "u02012", topic: "TCP/IP",
    q: "A quale livello del modello TCP/IP opera il protocollo IP?",
    opts: [
      "Livello di rete",
      "Livello di trasporto",
      "Livello applicazione"
    ],
    correct: [0],
    exp: "IP opera al livello di rete (internet) e si occupa dell'indirizzamento e dell'instradamento dei pacchetti tra reti diverse. TCP e UDP stanno al livello di trasporto sopra IP."
  },
  {
    id: "u02013", topic: "TCP vs UDP",
    q: "Qual è la differenza principale tra TCP e UDP?",
    opts: [
      "TCP è affidabile e orientato alla connessione; UDP è veloce ma senza garanzie",
      "UDP garantisce l'ordine e la consegna dei dati; TCP lavora best-effort",
      "TCP e UDP sono entrambi senza connessione e non ritrasmettono i dati persi"
    ],
    correct: [0],
    exp: "TCP garantisce consegna ordinata e senza perdite (con conferme e ritrasmissioni) ma è più lento; UDP è 'best effort', più rapido e leggero, usato per streaming, giochi, DNS dove la velocità conta."
  },
  {
    id: "u02014", topic: "Indirizzo IP",
    q: "Un indirizzo IPv4 è composto da:",
    opts: [
      "32 bit, scritti come quattro numeri da 0 a 255",
      "128 bit, scritti come otto gruppi esadecimali",
      "48 bit, espressi come sei coppie esadecimali"
    ],
    correct: [0],
    exp: "IPv4 usa 32 bit, rappresentati come quattro ottetti (es. 192.168.1.1), ciascuno 0-255. IPv6 usa invece 128 bit per superare l'esaurimento degli indirizzi IPv4."
  },
  {
    id: "u02015", topic: "DNS",
    q: "A cosa serve il DNS?",
    opts: [
      "Tradurre i nomi di dominio nei corrispondenti indirizzi IP",
      "Assegnare in automatico un indirizzo IP ai dispositivi della rete",
      "Instradare i pacchetti verso la rete di destinazione corretta"
    ],
    correct: [0],
    exp: "Il DNS (Domain Name System) traduce nomi leggibili (es. google.com) nell'indirizzo IP corrispondente, così gli utenti non devono ricordare numeri. È una sorta di 'rubrica' di internet."
  },
  {
    id: "u02016", topic: "HTTP",
    q: "Cosa distingue HTTPS da HTTP?",
    opts: [
      "HTTPS aggiunge alla connessione la cifratura TLS/SSL dei dati",
      "HTTPS comprime le pagine per ridurne il tempo di caricamento",
      "HTTPS instrada il traffico attraverso un proxy che nasconde l'IP"
    ],
    correct: [0],
    exp: "HTTPS aggiunge a HTTP un livello di cifratura (TLS/SSL) che protegge i dati scambiati tra browser e server da intercettazioni e manomissioni. È lo standard per i siti sicuri."
  },
  {
    id: "u02017", topic: "Porte",
    q: "A cosa serve il numero di porta in una comunicazione di rete?",
    opts: [
      "Identificare l'applicazione o il servizio su un host",
      "Indicare a quale rete appartiene il dispositivo mittente",
      "Stabilire la priorità del pacchetto nella coda di invio"
    ],
    correct: [0],
    exp: "La porta identifica il servizio specifico su un host (es. 80 = HTTP, 443 = HTTPS, 22 = SSH). L'IP individua la macchina, la porta il programma con cui comunicare su di essa."
  },
  {
    id: "u02018", topic: "Porte note",
    q: "Quale porta è associata di default a HTTPS?",
    opts: [
      "443",
      "80",
      "22"
    ],
    correct: [0],
    exp: "HTTPS usa la porta 443; HTTP la 80. Altre note: 22 SSH, 21 FTP, 25 SMTP (email), 53 DNS. Sono le 'well-known ports' (0-1023)."
  },
  {
    id: "u02019", topic: "LAN/WAN",
    q: "Qual è la differenza tra LAN e WAN?",
    opts: [
      "La LAN copre un'area locale; la WAN un'area geografica ampia",
      "La LAN collega reti lontane; la WAN dispositivi nello stesso edificio",
      "La LAN si basa sugli indirizzi IP; la WAN sugli indirizzi MAC"
    ],
    correct: [0],
    exp: "LAN (Local Area Network) collega dispositivi in un'area ristretta (casa, ufficio); WAN (Wide Area Network) collega reti su grandi distanze geografiche. Internet è la più grande WAN."
  },
  {
    id: "u02020", topic: "Switch vs router",
    q: "Qual è la differenza tra switch e router?",
    opts: [
      "Lo switch collega la stessa rete; il router collega reti diverse",
      "Lo switch collega reti diverse; il router dispositivi della stessa rete",
      "Lo switch instrada in base agli indirizzi IP; il router in base ai MAC"
    ],
    correct: [0],
    exp: "Lo switch instrada i dati tra dispositivi della STESSA rete locale (usa gli indirizzi MAC); il router collega reti diverse e instrada i pacchetti tra di esse (usa gli indirizzi IP)."
  },
  {
    id: "u02021", topic: "Virtualizzazione",
    q: "Cos'è la virtualizzazione?",
    opts: [
      "Creare versioni virtuali di risorse fisiche come server, storage e reti",
      "Collegare più server fisici in un unico cluster ad alte prestazioni",
      "Comprimere i dati sul disco così da occupare meno spazio possibile"
    ],
    correct: [0],
    exp: "La virtualizzazione astrae le risorse fisiche creando risorse virtuali: su un unico server fisico possono girare più macchine virtuali indipendenti, ottimizzando l'uso dell'hardware."
  },
  {
    id: "u02022", topic: "Macchina virtuale",
    q: "Cos'è una macchina virtuale (VM)?",
    opts: [
      "Un computer emulato via software, con un proprio SO, su hardware fisico",
      "Un ambiente isolato che condivide il kernel del sistema operativo host",
      "Una partizione del disco riservata a un secondo sistema operativo"
    ],
    correct: [0],
    exp: "Una VM è un ambiente software che simula un computer completo (CPU, memoria, disco) e ospita un proprio sistema operativo, isolato dagli altri, condividendo l'hardware fisico sottostante."
  },
  {
    id: "u02023", topic: "Hypervisor",
    q: "Cos'è un hypervisor?",
    opts: [
      "Il software che crea e gestisce le macchine virtuali su un host",
      "Il sistema operativo ospite che gira dentro una macchina virtuale",
      "Lo strato che distribuisce i container tra più nodi di un cluster"
    ],
    correct: [0],
    exp: "L'hypervisor (o Virtual Machine Monitor) alloca le risorse fisiche alle VM e le tiene isolate. Esempi: VMware ESXi, Hyper-V, KVM, VirtualBox."
  },
  {
    id: "u02024", topic: "Hypervisor",
    q: "Qual è la differenza tra hypervisor di tipo 1 e di tipo 2?",
    opts: [
      "Il tipo 1 gira sull'hardware nudo; il tipo 2 sopra un SO ospite",
      "Il tipo 1 gira sopra un SO ospitante; il tipo 2 sull'hardware nudo",
      "Il tipo 1 esegue container; il tipo 2 macchine virtuali complete"
    ],
    correct: [0],
    exp: "L'hypervisor di tipo 1 (bare-metal, es. ESXi) gira direttamente sull'hardware, più efficiente e usato nei datacenter. Il tipo 2 (hosted, es. VirtualBox) gira come applicazione sopra un SO esistente."
  },
  {
    id: "u02025", topic: "Container",
    q: "Cos'è un container (es. Docker)?",
    opts: [
      "Un ambiente isolato che condivide il kernel del SO host",
      "Una macchina virtuale con un proprio kernel e SO completo",
      "Un pacchetto compresso che raccoglie codice e documentazione"
    ],
    correct: [0],
    exp: "Un container isola un'applicazione e le sue dipendenze, ma condivide il kernel del SO host: è molto più leggero e veloce di una VM, che invece include un intero SO ospite."
  },
  {
    id: "u02026", topic: "Container vs VM",
    q: "Rispetto a una VM, un container è tipicamente:",
    opts: [
      "Più leggero e rapido da avviare del corrispondente ambiente",
      "Più pesante perché include un intero sistema operativo ospite",
      "Più isolato perché emula anche l'hardware del computer"
    ],
    correct: [0],
    exp: "Il container condivide il kernel dell'host e impacchetta solo l'app e le librerie: parte in secondi e occupa poco. Una VM emula hardware e include un intero SO ospite, quindi è più pesante."
  },
  {
    id: "u02027", topic: "Docker image",
    q: "Cos'è un'immagine Docker?",
    opts: [
      "Un modello immutabile da cui si avviano i container",
      "L'istanza in esecuzione avviata a partire da un modello",
      "Il file di testo con le istruzioni per costruire il pacchetto"
    ],
    correct: [0],
    exp: "L'immagine è un pacchetto immutabile con codice, librerie e configurazione: da una stessa immagine si possono avviare più container identici. Il container è l'istanza in esecuzione dell'immagine."
  },
  {
    id: "u02028", topic: "Cloud",
    q: "Cosa significa IaaS (Infrastructure as a Service)?",
    opts: [
      "Il provider offre infrastruttura virtualizzata: server, storage e rete",
      "Il provider offre una piattaforma pronta su cui sviluppare le app",
      "Il provider offre un software finito da usare tramite il browser"
    ],
    correct: [0],
    exp: "Nell'IaaS il cloud fornisce infrastruttura virtualizzata (VM, storage, rete) che l'utente gestisce. Sopra ci sono PaaS (piattaforma di sviluppo) e SaaS (software pronto, es. Gmail)."
  },
  {
    id: "u02029", topic: "Cloud",
    q: "In quale modello il provider gestisce TUTTO e l'utente usa solo l'applicazione?",
    opts: [
      "SaaS (Software as a Service)",
      "PaaS (Platform as a Service)",
      "IaaS (Infrastructure as a Service)"
    ],
    correct: [0],
    exp: "Nel SaaS il provider gestisce infrastruttura, piattaforma e software: l'utente usa solo l'applicazione via browser (es. Gmail, Office 365), senza preoccuparsi di server o aggiornamenti."
  },
  {
    id: "u02030", topic: "Snapshot",
    q: "A cosa serve uno snapshot di una macchina virtuale?",
    opts: [
      "Salvare lo stato della VM in un istante, per ripristinarlo in seguito",
      "Copiare la VM su un altro host mentre continua a essere in esecuzione",
      "Comprimere il disco della VM così da liberare spazio di archiviazione"
    ],
    correct: [0],
    exp: "Uno snapshot congela lo stato della VM (disco, memoria, config) in un momento preciso: utile prima di un aggiornamento rischioso, per poter tornare indietro se qualcosa va storto."
  },
  {
    id: "u02031", topic: "Modalità di esecuzione",
    q: "In quale modalità girano i normali programmi utente?",
    opts: [
      "In user mode, con privilegi limitati sull'hardware",
      "In kernel mode, con accesso completo a tutto l'hardware",
      "In una modalità che cambia a ogni chiamata di sistema"
    ],
    correct: [0],
    exp: "I programmi utente girano in user mode, senza accesso diretto all'hardware: per operazioni privilegiate chiamano il kernel tramite system call. Solo il kernel gira in kernel mode."
  },
  {
    id: "u02032", topic: "System call",
    q: "Cos'è una system call?",
    opts: [
      "Una richiesta di un programma al kernel per ottenere un servizio",
      "Una chiamata a una funzione di un'altra libreria applicativa",
      "Un segnale hardware che interrompe l'esecuzione della CPU"
    ],
    correct: [0],
    exp: "La system call è il meccanismo con cui un'applicazione in user mode chiede al kernel un servizio privilegiato (I/O su file, creazione processi, rete). È il ponte controllato tra user e kernel mode."
  },
  {
    id: "u02033", topic: "RAM vs disco",
    q: "Qual è la differenza principale tra RAM e disco (SSD/HDD)?",
    opts: [
      "La RAM è veloce e volatile; il disco è più lento ma persistente",
      "La RAM conserva i dati da spenta; il disco li perde allo spegnimento",
      "La RAM e il disco hanno la stessa velocità ma capacità diverse"
    ],
    correct: [0],
    exp: "La RAM è velocissima ma volatile (si svuota allo spegnimento); il disco è più lento ma conserva i dati in modo permanente. I programmi in esecuzione stanno in RAM, i file su disco."
  },
  {
    id: "u02034", topic: "Boot",
    q: "Cosa avviene durante il boot del computer?",
    opts: [
      "Il firmware avvia il caricamento del sistema operativo in memoria",
      "Il sistema operativo verifica e ripara automaticamente il file system",
      "Il processore esegue una serie di test di stress su tutti i componenti"
    ],
    correct: [0],
    exp: "Al boot il firmware (BIOS/UEFI) esegue i test iniziali e passa il controllo al bootloader, che carica il kernel del SO in memoria e avvia il sistema fino al login."
  },
  {
    id: "u02035", topic: "Firewall",
    q: "A cosa serve un firewall?",
    opts: [
      "Filtrare il traffico di rete secondo regole di sicurezza",
      "Analizzare i file salvati in locale alla ricerca di malware",
      "Cifrare il traffico in uscita verso i siti su internet"
    ],
    correct: [0],
    exp: "Il firewall controlla il traffico in ingresso e uscita, permettendo o bloccando le connessioni in base a regole (porte, IP, protocolli), per proteggere la rete da accessi non autorizzati."
  },
  {
    id: "u02036", topic: "MAC address",
    q: "Cos'è l'indirizzo MAC?",
    opts: [
      "Un identificativo fisico univoco della scheda di rete",
      "Un indirizzo assegnato dal DHCP a ogni nuova connessione",
      "Il nome con cui il computer è registrato nel sistema DNS"
    ],
    correct: [0],
    exp: "Il MAC address è un identificatore hardware univoco della scheda di rete (es. 00:1A:2B:...), assegnato dal produttore. Opera a livello data link, mentre l'IP opera a livello di rete."
  },
  {
    id: "u02037", topic: "DHCP",
    q: "A cosa serve il protocollo DHCP?",
    opts: [
      "Assegnare automaticamente gli indirizzi IP ai dispositivi",
      "Tradurre i nomi di dominio nei relativi indirizzi IP",
      "Verificare le credenziali di chi si collega alla rete"
    ],
    correct: [0],
    exp: "Il DHCP assegna in automatico a ogni dispositivo che si connette un indirizzo IP (e altri parametri di rete), evitando la configurazione manuale e i conflitti di indirizzi."
  },
  {
    id: "u02038", topic: "Subnet mask",
    q: "A cosa serve la subnet mask?",
    opts: [
      "Distinguere la parte di rete dalla parte host di un indirizzo IP",
      "Indicare il gateway a cui inviare i pacchetti diretti all'esterno",
      "Assegnare un indirizzo IP univoco a ciascun dispositivo della rete"
    ],
    correct: [0],
    exp: "La subnet mask (es. 255.255.255.0) indica quali bit dell'IP identificano la rete e quali l'host, permettendo di suddividere una rete in sottoreti e stabilire chi è 'locale'."
  },
  {
    id: "u02039", topic: "Ping",
    q: "A cosa serve il comando ping?",
    opts: [
      "Verificare se un host è raggiungibile e misurarne la latenza",
      "Tradurre un nome di dominio nel suo indirizzo IP corrispondente",
      "Mostrare l'elenco dei router attraversati fino alla destinazione"
    ],
    correct: [0],
    exp: "Ping invia pacchetti ICMP a un host e attende la risposta: serve a verificare la connettività di rete e a misurare il tempo di andata e ritorno (latenza)."
  },
  {
    id: "u02040", topic: "Backup",
    q: "Quale strategia descrive un backup 'incrementale'?",
    opts: [
      "Salva solo i dati modificati dall'ultimo backup di qualsiasi tipo",
      "Salva tutte le modifiche fatte rispetto all'ultimo backup completo",
      "Salva ogni volta l'intero contenuto ripartendo da zero"
    ],
    correct: [0],
    exp: "Il backup incrementale copia solo le modifiche dall'ultimo backup (completo o incrementale): occupa poco spazio ma il ripristino richiede la catena completa. Il differenziale copia le modifiche dall'ultimo completo."
  },
  {
    id: "u02041", topic: "Concorrenza",
    q: "Cos'è una 'race condition'?",
    opts: [
      "Un bug dovuto all'ordine imprevedibile di accesso a dati condivisi",
      "Due processi che si bloccano a vicenda attendendo risorse l'uno dell'altro",
      "Un processo che per bassa priorità non ottiene mai la CPU"
    ],
    correct: [0],
    exp: "La race condition avviene quando più thread/processi accedono a una risorsa condivisa senza sincronizzazione e il risultato dipende dall'ordine di esecuzione, causando comportamenti imprevedibili."
  },
  {
    id: "u02042", topic: "Sincronizzazione",
    q: "A cosa serve un semaforo (o mutex) nella programmazione concorrente?",
    opts: [
      "Regolare l'accesso a risorse condivise evitando conflitti tra thread",
      "Distribuire i processi tra i vari core disponibili della CPU",
      "Ripristinare uno stato coerente del sistema dopo un guasto improvviso"
    ],
    correct: [0],
    exp: "Semafori e mutex sono meccanismi di sincronizzazione: garantiscono che una risorsa condivisa (es. una variabile o un file) sia usata da un solo thread alla volta, prevenendo le race condition."
  },
  {
    id: "u02043", topic: "Cloud",
    q: "Cosa significa PaaS (Platform as a Service)?",
    opts: [
      "Il provider offre una piattaforma per sviluppare e distribuire app",
      "Il provider offre solo hardware virtualizzato da configurare a mano",
      "Il provider offre un'applicazione finita e pronta all'uso"
    ],
    correct: [0],
    exp: "Nel PaaS il provider gestisce infrastruttura e ambiente (SO, runtime, database), e lo sviluppatore si concentra solo sul codice dell'applicazione. Es: Heroku, Google App Engine."
  },
  {
    id: "u02044", topic: "Scalabilità",
    q: "Cosa distingue la scalabilità 'orizzontale' da quella 'verticale'?",
    opts: [
      "Orizzontale aggiunge più macchine; verticale potenzia una singola macchina",
      "Orizzontale potenzia una macchina; verticale ne aggiunge di nuove",
      "La verticale è possibile solo nel cloud, l'orizzontale solo on-premise"
    ],
    correct: [0],
    exp: "Scalare in verticale (scale up) = aumentare risorse di un server (più CPU/RAM). Scalare in orizzontale (scale out) = aggiungere più server che lavorano insieme, tipico del cloud e dei big data."
  },
  {
    id: "u02045", topic: "Interrupt",
    q: "Cos'è un interrupt?",
    opts: [
      "Un segnale che sospende la CPU per gestire subito un evento urgente",
      "Un errore irreversibile che arresta l'intero sistema operativo",
      "Una richiesta di un programma al kernel per ottenere un servizio"
    ],
    correct: [0],
    exp: "L'interrupt è un segnale (hardware o software) che interrompe l'esecuzione corrente della CPU per gestire subito un evento (es. tasto premuto, dato dal disco), poi si riprende da dove si era rimasti."
  },
  {
    id: "u02046", topic: "Driver",
    q: "Cos'è un driver di dispositivo?",
    opts: [
      "Il software che fa comunicare il SO con un componente hardware",
      "Un programma che ottimizza in automatico le prestazioni del disco",
      "Il firmware integrato nel dispositivo direttamente dal produttore"
    ],
    correct: [0],
    exp: "Il driver traduce le richieste generiche del SO nei comandi specifici di un dispositivo (stampante, scheda video, ecc.): senza il driver giusto l'hardware non funziona correttamente."
  },
  {
    id: "u02047", topic: "NAT",
    q: "A cosa serve il NAT (Network Address Translation)?",
    opts: [
      "Far condividere a più dispositivi un unico indirizzo IP pubblico",
      "Tradurre i nomi di dominio nei relativi indirizzi IP numerici",
      "Assegnare gli indirizzi IP privati ai dispositivi della rete locale"
    ],
    correct: [0],
    exp: "Il NAT traduce gli IP privati della rete locale in un unico IP pubblico verso internet (e viceversa): permette a molti dispositivi di uscire su internet con un solo indirizzo pubblico."
  },
  {
    id: "u02048", topic: "VPN",
    q: "A cosa serve una VPN?",
    opts: [
      "Creare un tunnel cifrato tra il dispositivo e una rete remota",
      "Filtrare il traffico in ingresso secondo regole di sicurezza",
      "Distribuire le richieste tra più server per bilanciare il carico"
    ],
    correct: [0],
    exp: "La VPN (Virtual Private Network) crea un collegamento cifrato su internet, come se il dispositivo fosse fisicamente nella rete remota: protegge il traffico e permette accessi sicuri a distanza."
  },
  {
    id: "u02049", topic: "Bit e byte",
    q: "Quanti bit ci sono in un byte?",
    opts: [
      "8",
      "4",
      "16"
    ],
    correct: [0],
    exp: "Un byte è composto da 8 bit. Un bit è la singola cifra binaria (0/1). Con 8 bit si rappresentano 256 valori (2^8), es. un carattere ASCII."
  },
  {
    id: "u02050", topic: "Latenza vs banda",
    q: "Qual è la differenza tra latenza e larghezza di banda?",
    opts: [
      "La latenza è il ritardo; la banda è quanti dati passano nel tempo",
      "La latenza è quanti dati passano; la banda è il ritardo di trasmissione",
      "Latenza e banda misurano entrambe la velocità del disco fisso"
    ],
    correct: [0],
    exp: "La latenza è il tempo che un pacchetto impiega ad arrivare (ritardo, in ms); la banda è quanti dati passano per unità di tempo (es. Mbps). Alta banda ma alta latenza = molti dati ma con ritardo."
  },
  {
    id: "u02051", topic: "Processo: stati",
    q: "Quale di questi è uno stato tipico di un processo?",
    opts: [
      "In attesa di un'operazione di I/O (blocked)",
      "In fase di compilazione del codice sorgente",
      "Archiviato in modo permanente sul disco"
    ],
    correct: [0],
    exp: "Un processo passa tra stati come pronto (attende la CPU), in esecuzione (usa la CPU) e in attesa/blocked (fermo su un'operazione di I/O). La compilazione riguarda la traduzione del codice, non l'esecuzione; l'archiviazione su disco riguarda i file, non i processi."
  },
  {
    id: "u02052", topic: "Cache",
    q: "A cosa serve la memoria cache della CPU?",
    opts: [
      "Tenere vicino alla CPU i dati usati più di frequente",
      "Conservare i dati in modo permanente anche a computer spento",
      "Estendere la memoria disponibile usando una porzione del disco"
    ],
    correct: [0],
    exp: "La cache è una memoria piccola e velocissima tra CPU e RAM che conserva dati/istruzioni usati spesso: riduce l'attesa della CPU. Esistono livelli L1, L2, L3 di dimensione e velocità decrescenti."
  },
  {
    id: "u02053", topic: "Protocolli",
    q: "Quale protocollo si usa per l'invio delle email?",
    opts: [
      "SMTP",
      "IMAP",
      "POP3"
    ],
    correct: [0],
    exp: "SMTP (Simple Mail Transfer Protocol) gestisce l'INVIO delle email. IMAP e POP3 servono invece a RICEVERE/scaricare la posta dal server: sono distrattori forti perché riguardano tutti l'email, ma con ruolo opposto."
  },
  {
    id: "u02054", topic: "OSI: livello trasporto",
    q: "Quale protocollo opera al livello di trasporto?",
    opts: [
      "TCP",
      "IP",
      "HTTP"
    ],
    correct: [0],
    exp: "TCP è un protocollo di trasporto (gestisce la comunicazione end-to-end tra applicazioni). IP sta al livello di rete (sotto), HTTP al livello applicazione (sopra): entrambi plausibili ma di livelli diversi."
  },
  {
    id: "u02055", topic: "Load balancer",
    q: "A cosa serve un load balancer?",
    opts: [
      "Distribuire il carico delle richieste tra più server",
      "Memorizzare in cache le pagine statiche più richieste",
      "Bloccare le richieste che violano le regole di sicurezza"
    ],
    correct: [0],
    exp: "Il load balancer smista le richieste tra più server, evitando che uno solo si sovraccarichi: migliora prestazioni, disponibilità e tolleranza ai guasti. È chiave nella scalabilità orizzontale."
  },
  {
    id: "u02056", topic: "Kernel",
    q: "Se un programma utente vuole scrivere su disco, cosa deve fare?",
    opts: [
      "Richiederlo al kernel tramite una system call",
      "Scrivere direttamente sui settori del disco tramite il driver",
      "Passare da solo in kernel mode per eseguire l'operazione"
    ],
    correct: [0],
    exp: "In user mode il programma non può toccare l'hardware direttamente: deve chiedere al kernel tramite system call (es. write). Il kernel esegue l'operazione in modo controllato e sicuro."
  },
  {
    id: "u02057", topic: "Thread",
    q: "Un vantaggio dei thread rispetto ai processi separati è:",
    opts: [
      "Comunicano facilmente perché condividono la stessa memoria",
      "Sono più isolati perché hanno spazi di memoria separati",
      "Continuano a girare anche se il processo padre termina"
    ],
    correct: [0],
    exp: "I thread di uno stesso processo condividono la memoria, quindi comunicano rapidamente e sono leggeri. Lo svantaggio è che la memoria condivisa richiede sincronizzazione per evitare errori."
  },
  {
    id: "u02058", topic: "Cloud pubblico/privato",
    q: "Cosa distingue un cloud pubblico da uno privato?",
    opts: [
      "Il pubblico serve più clienti; il privato una sola organizzazione",
      "Il pubblico è dedicato a un solo cliente; il privato è condiviso tra molti",
      "Il pubblico è installato on-premise; il privato è gestito dal provider"
    ],
    correct: [0],
    exp: "Il cloud pubblico (AWS, Azure) è condiviso tra molti clienti sull'infrastruttura del provider; il privato è riservato a una singola organizzazione. L'ibrido combina i due."
  },
  {
    id: "u02059", topic: "Overhead virtualizzazione",
    q: "Perché i container si sono diffusi rispetto alle VM per il deployment?",
    opts: [
      "Sono leggeri, veloci da avviare e portabili tra ambienti diversi",
      "Includono un intero SO ospite che ne garantisce l'isolamento",
      "Non richiedono alcun sistema operativo sottostante per funzionare"
    ],
    correct: [0],
    exp: "I container avviano in secondi, occupano poche risorse (condividono il kernel host) e garantiscono che l'app giri identica ovunque ('funziona sulla mia macchina' risolto). Ideali per microservizi e CI/CD."
  },
  {
    id: "u02060", topic: "Orchestrazione",
    q: "A cosa serve Kubernetes?",
    opts: [
      "Orchestrare e scalare i container distribuiti su più macchine",
      "Costruire le immagini da cui vengono avviati i container",
      "Fornire il kernel condiviso su cui i container vengono eseguiti"
    ],
    correct: [0],
    exp: "Kubernetes orchestra i container: li distribuisce sui nodi, li riavvia se cadono, li scala in base al carico e ne gestisce il networking. Docker crea/esegue i container, Kubernetes li coordina su larga scala."
  },
  {
    id: "u02061", topic: "Permessi file",
    q: "In un sistema Unix/Linux, i permessi di un file riguardano:",
    opts: [
      "Lettura, scrittura ed esecuzione per proprietario, gruppo e altri",
      "La priorità di esecuzione assegnata al processo che apre il file",
      "L'ordine con cui i file vengono elencati all'interno della cartella"
    ],
    correct: [0],
    exp: "I permessi Unix definiscono chi può leggere (r), scrivere (w) ed eseguire (x) un file, per tre categorie: proprietario, gruppo e altri. Si gestiscono con chmod (es. 755)."
  },
  {
    id: "u02062", topic: "Shell",
    q: "Cos'è la shell (es. Bash)?",
    opts: [
      "Un interprete di comandi per usare il SO da riga di comando",
      "Il nucleo del SO che gestisce direttamente hardware e processi",
      "La finestra grafica con cui si aprono e chiudono le applicazioni"
    ],
    correct: [0],
    exp: "La shell è l'interfaccia testuale che interpreta i comandi dell'utente e li fa eseguire al SO (es. Bash, Zsh, PowerShell). Permette anche di scrivere script per automatizzare operazioni."
  },
  {
    id: "u02063", topic: "Rete: pacchetto",
    q: "Cos'è un pacchetto in una rete?",
    opts: [
      "Un'unità di dati con intestazione e payload, instradata sulla rete",
      "Una connessione stabile aperta tra due applicazioni che dialogano",
      "L'insieme di regole condivise che governa la comunicazione"
    ],
    correct: [0],
    exp: "I dati vengono suddivisi in pacchetti: ognuno ha un'intestazione (con indirizzi sorgente/destinazione) e un payload (i dati). I pacchetti viaggiano indipendentemente e vengono riassemblati a destinazione."
  },
  {
    id: "u02064", topic: "IPv4 vs IPv6",
    q: "Perché è stato introdotto IPv6?",
    opts: [
      "Per superare l'esaurimento degli indirizzi disponibili con IPv4",
      "Per sostituire il protocollo TCP con uno più veloce ed efficiente",
      "Per eliminare la necessità dei router tra reti differenti"
    ],
    correct: [0],
    exp: "IPv4 (32 bit) offre ~4,3 miliardi di indirizzi, ormai insufficienti. IPv6 usa 128 bit, fornendo un numero enorme di indirizzi e migliorie in sicurezza e instradamento."
  },
  {
    id: "u02065", topic: "Processo zombie",
    q: "Cos'è un processo 'zombie' in Unix?",
    opts: [
      "Un processo terminato il cui stato non è ancora stato letto dal padre",
      "Un processo figlio ancora vivo il cui padre è già terminato",
      "Un processo che consuma tutta la CPU rallentando l'intero sistema"
    ],
    correct: [0],
    exp: "Uno zombie è un processo figlio già terminato ma la cui voce resta nella tabella dei processi finché il padre non ne 'raccoglie' lo stato di uscita (wait). Occupa solo una voce, non risorse reali."
  },
  {
    id: "u02066", topic: "Throughput",
    q: "Il throughput di un sistema indica:",
    opts: [
      "La quantità di lavoro completato nell'unità di tempo",
      "Il ritardo con cui una singola operazione viene completata",
      "La percentuale di tempo in cui il sistema resta operativo"
    ],
    correct: [0],
    exp: "Il throughput misura quanto lavoro (es. richieste, dati) un sistema porta a termine per unità di tempo. È diverso dalla latenza, che misura il ritardo di una singola operazione."
  },
  {
    id: "u02067", topic: "DNS",
    q: "Se il DNS non funziona ma la rete sì, cosa succede tipicamente?",
    opts: [
      "Si può navigare per indirizzo IP ma non per nome di dominio",
      "Si può navigare per nome ma non digitando direttamente l'IP",
      "La rete continua a funzionare senza alcun tipo di limitazione"
    ],
    correct: [0],
    exp: "Senza DNS i nomi (es. google.com) non vengono risolti in IP, quindi la navigazione 'per nome' fallisce, ma raggiungendo direttamente l'IP la connessione funziona: il problema è solo la traduzione dei nomi."
  },
  {
    id: "u02068", topic: "Virtualizzazione risorse",
    q: "La virtualizzazione migliora l'uso dell'hardware perché:",
    opts: [
      "Più VM condividono un server fisico, sfruttandolo di più",
      "Ogni VM riceve un server fisico dedicato esclusivamente a sé",
      "Le VM raddoppiano la quantità di memoria fisica installata"
    ],
    correct: [0],
    exp: "Un server fisico spesso è sottoutilizzato; consolidando più VM sullo stesso hardware si sfruttano meglio le risorse, si riducono i costi e si semplifica la gestione (consolidamento server)."
  },
  {
    id: "u02069", topic: "Firewall vs antivirus",
    q: "Firewall e antivirus fanno la stessa cosa?",
    opts: [
      "Il firewall filtra il traffico di rete, l'antivirus rileva software malevolo",
      "Il firewall analizza i file locali, l'antivirus controlla il traffico di rete",
      "Entrambi cifrano i dati dell'utente per proteggerli dagli attacchi"
    ],
    correct: [0],
    exp: "Il firewall controlla le connessioni di rete (chi entra/esce); l'antivirus analizza file e programmi per individuare malware. Sono complementari, non alternativi."
  },
  {
    id: "u02070", topic: "Cloud: elasticità",
    q: "L'elasticità del cloud significa che:",
    opts: [
      "Le risorse si adattano automaticamente in su o in giù in base al carico",
      "Le risorse restano fisse e vanno riconfigurate manualmente ogni volta",
      "I dati vengono replicati automaticamente in più regioni geografiche"
    ],
    correct: [0],
    exp: "L'elasticità permette di aumentare le risorse quando il carico cresce e ridurle quando cala, pagando solo per quel che si usa. È uno dei vantaggi chiave del cloud rispetto all'hardware fisico."
  },
  {
    id: "u02071", topic: "Protocollo SSH",
    q: "A cosa serve SSH?",
    opts: [
      "Accedere in modo sicuro e cifrato a un computer remoto",
      "Trasferire file tra due host su una connessione non cifrata",
      "Assegnare gli indirizzi IP ai dispositivi remoti della rete"
    ],
    correct: [0],
    exp: "SSH (Secure Shell) permette di collegarsi e gestire un computer remoto tramite una connessione cifrata (di norma sulla porta 22), sostituendo protocolli insicuri come Telnet."
  },
  {
    id: "u02072", topic: "Multiprocessore",
    q: "Un sistema multi-core permette di:",
    opts: [
      "Eseguire davvero più istruzioni in parallelo su core diversi",
      "Alternare rapidamente i processi su un'unica unità di calcolo",
      "Aumentare la frequenza di clock del singolo core della CPU"
    ],
    correct: [0],
    exp: "Un processore multi-core ha più unità di elaborazione (core): può eseguire davvero più thread in parallelo, a differenza del semplice time sharing su una singola CPU che solo li alterna."
  },
  {
    id: "u02073", topic: "Storage",
    q: "Cosa distingue lo storage a oggetti (object storage) dal file system tradizionale?",
    opts: [
      "Memorizza i dati come oggetti con metadati, ideale per grandi volumi",
      "Organizza i dati in una gerarchia di cartelle e sottocartelle annidate",
      "Memorizza i dati in righe e colonne di tabelle tra loro collegate"
    ],
    correct: [0],
    exp: "L'object storage (es. Amazon S3) archivia i dati come oggetti con identificativo e metadati in uno spazio piatto, altamente scalabile per file, backup e big data. Il file system usa una gerarchia di cartelle."
  },
  {
    id: "u02074", topic: "Concorrenza vs parallelismo",
    q: "Concorrenza e parallelismo sono la stessa cosa?",
    opts: [
      "La concorrenza gestisce più attività insieme; il parallelismo le esegue simultaneamente",
      "La concorrenza esegue davvero in simultanea; il parallelismo si limita ad alternarle",
      "Sono la stessa cosa e richiedono entrambi più core fisici"
    ],
    correct: [0],
    exp: "Concorrenza = gestire più task che progrediscono nello stesso periodo (anche alternandoli su una CPU). Parallelismo = eseguirli letteralmente allo stesso istante su più core. Il parallelismo è una forma di concorrenza."
  },
  {
    id: "u02075", topic: "Rete: banda",
    q: "1 Gbps di larghezza di banda equivale a:",
    opts: [
      "1 gigabit al secondo di dati trasferibili sulla rete",
      "1 gigabyte di spazio di archiviazione reso disponibile",
      "1 miliardo di operazioni al secondo eseguite dalla CPU"
    ],
    correct: [0],
    exp: "Gbps = gigabit per secondo, misura la velocità di trasferimento (banda). Attenzione: 1 byte = 8 bit, quindi 1 Gbps ≈ 125 MB/s. Non va confuso con lo spazio su disco (GB)."
  },
  {
    id: "u02076", topic: "Alta disponibilità",
    q: "Cosa si intende per alta disponibilità (high availability)?",
    opts: [
      "Un sistema progettato per restare operativo anche in caso di guasti",
      "Un sistema che elabora enormi quantità di dati in parallelo",
      "Un sistema che garantisce risposte entro scadenze temporali rigide"
    ],
    correct: [0],
    exp: "L'alta disponibilità mira a minimizzare i tempi di inattività tramite ridondanza, failover e bilanciamento: se un componente si guasta, un altro subentra così il servizio resta attivo."
  },
  {
    id: "u02077", topic: "Container: portabilità",
    q: "Perché si dice che un container garantisce portabilità?",
    opts: [
      "App e dipendenze girano identiche su qualunque host col runtime",
      "Il container si può spostare solo copiandolo su un supporto USB",
      "Il container funziona unicamente sul sistema che l'ha creato"
    ],
    correct: [0],
    exp: "Il container impacchetta app e dipendenze in un ambiente standard: gira uguale su portatile, server on-premise o cloud, purché ci sia il runtime (es. Docker). Elimina i problemi 'sul mio PC funziona'."
  },
  {
    id: "u02078", topic: "Bootloader",
    q: "Cos'è il bootloader?",
    opts: [
      "Il programma che carica il sistema operativo in memoria all'avvio",
      "Il firmware che esegue i test iniziali sui componenti hardware",
      "Il processo che gestisce l'autenticazione e il login degli utenti"
    ],
    correct: [0],
    exp: "Il bootloader (es. GRUB) è avviato dal firmware e carica il kernel del SO in memoria, avviando il sistema. Può anche permettere di scegliere tra più sistemi operativi installati."
  },
  {
    id: "u02079", topic: "Rete: protocollo",
    q: "Cos'è un protocollo di rete?",
    opts: [
      "Un insieme di regole condivise per far comunicare i dispositivi",
      "Il dispositivo fisico che collega tra loro reti diverse",
      "Il programma applicativo che invia i dati attraverso la rete"
    ],
    correct: [0],
    exp: "Un protocollo definisce formato dei messaggi, tempi e regole della comunicazione, così dispositivi diversi si capiscono (es. TCP/IP, HTTP). Senza protocolli comuni la comunicazione sarebbe impossibile."
  },
  {
    id: "u02080", topic: "Memoria: swap",
    q: "Cosa succede quando il sistema fa 'swapping' intenso?",
    opts: [
      "Le prestazioni calano perché il disco è molto più lento della RAM",
      "Le prestazioni migliorano perché si libera spazio nella RAM",
      "La RAM viene svuotata e i programmi aperti si chiudono da soli"
    ],
    correct: [0],
    exp: "Se la RAM è insufficiente, il SO sposta pagine su disco (swap). Uno swapping eccessivo (thrashing) rallenta molto il sistema, perché il disco è molto più lento della RAM."
  },
  {
    id: "u02081", topic: "Cloud: costi",
    q: "Il modello 'pay-as-you-go' del cloud significa:",
    opts: [
      "Si paga in base all'effettivo utilizzo delle risorse consumate",
      "Si paga un canone fisso indipendente da quanto si consuma",
      "Si paga una sola volta l'hardware fisico acquistato in anticipo"
    ],
    correct: [0],
    exp: "Con il pay-as-you-go paghi solo le risorse che consumi (ore di calcolo, GB di storage, traffico), senza grandi investimenti iniziali: trasforma i costi da capitale a operativi."
  },
  {
    id: "u02082", topic: "Gestione processi",
    q: "Il comando che mostra i processi in esecuzione su Linux è tipicamente:",
    opts: [
      "ps (o top/htop)",
      "ls",
      "df"
    ],
    correct: [0],
    exp: "ps elenca i processi attivi; top/htop li mostrano in tempo reale con uso di CPU e memoria. ls elenca i file di una cartella e df mostra lo spazio libero sui dischi: comandi reali ma con tutt'altro scopo."
  },
  {
    id: "u02083", topic: "Isolamento",
    q: "Due VM sullo stesso host fisico condividono lo stesso sistema operativo?",
    opts: [
      "No: ogni VM ha il proprio sistema operativo indipendente",
      "Sì: tutte le VM condividono il kernel del sistema operativo host",
      "Sì: condividono il SO ma mantengono file utente separati"
    ],
    correct: [0],
    exp: "Ogni VM ha un SO ospite completo e indipendente, isolato dalle altre. Sono i CONTAINER a condividere il kernel del SO host, non le VM."
  },
  {
    id: "u02084", topic: "Rete: gateway",
    q: "Cos'è il gateway predefinito (default gateway)?",
    opts: [
      "Il router che inoltra il traffico verso le altre reti",
      "Il server che assegna gli indirizzi IP nella rete locale",
      "Il server che traduce i nomi di dominio in indirizzi IP"
    ],
    correct: [0],
    exp: "Il default gateway è l'indirizzo (tipicamente il router) a cui un dispositivo invia i pacchetti destinati a reti diverse dalla propria, es. per raggiungere internet."
  },
  {
    id: "u02085", topic: "Sistema operativo: tipi",
    q: "Quale di questi è un sistema operativo?",
    opts: [
      "Linux",
      "MySQL",
      "Apache"
    ],
    correct: [0],
    exp: "Linux è un sistema operativo. MySQL è un DBMS (gestione di database) e Apache è un web server: entrambi sono applicazioni che girano SOPRA il sistema operativo, non sistemi operativi."
  },
  {
    id: "u02086", topic: "Rete: ISO/OSI applicazione",
    q: "A quale livello OSI opera il protocollo HTTP?",
    opts: [
      "Applicazione",
      "Trasporto",
      "Rete"
    ],
    correct: [0],
    exp: "HTTP è un protocollo di livello applicazione (il più alto): definisce come client e server web si scambiano richieste e risposte. Sotto usa TCP (trasporto) e IP (rete)."
  },
  {
    id: "u02087", topic: "Virtualizzazione: overcommit",
    q: "L'overcommitment delle risorse in virtualizzazione significa:",
    opts: [
      "Assegnare alle VM più risorse virtuali di quelle fisiche presenti",
      "Riservare a ogni VM risorse fisiche esclusive, fisse e non condivise",
      "Lasciare inutilizzata metà delle risorse fisiche per sicurezza"
    ],
    correct: [0],
    exp: "L'overcommit assegna alle VM, nel complesso, più CPU/RAM di quelle fisiche, contando sul fatto che non tutte le VM le usino al massimo contemporaneamente. Va gestito per evitare cali di prestazioni."
  },
  {
    id: "u02088", topic: "Processo: PID",
    q: "Cos'è il PID di un processo?",
    opts: [
      "Un numero identificativo univoco assegnato al processo",
      "Il valore di priorità con cui il processo viene schedulato",
      "La quantità di memoria che il processo occupa in RAM"
    ],
    correct: [0],
    exp: "Il PID (Process IDentifier) è un numero univoco assegnato dal SO a ogni processo, usato per riferirsi a esso (es. per terminarlo con kill PID)."
  },
  {
    id: "u02089", topic: "Rete: protocolli sicuri",
    q: "Quale coppia di protocolli è la versione SICURA dell'altra?",
    opts: [
      "HTTP → HTTPS",
      "TCP → UDP",
      "IP → MAC"
    ],
    correct: [0],
    exp: "HTTPS è la versione cifrata (via TLS) di HTTP: stesso protocollo, resa sicura. TCP e UDP sono protocolli di trasporto diversi (non uno la versione sicura dell'altro); IP e MAC sono indirizzi di livelli differenti."
  },
  {
    id: "u02090", topic: "Failover",
    q: "Cos'è il failover?",
    opts: [
      "Il subentro automatico di un sistema di riserva al primario guasto",
      "La distribuzione delle richieste tra più server attivi in parallelo",
      "Il ripristino dei dati a partire da un backup dopo una perdita"
    ],
    correct: [0],
    exp: "Il failover è il meccanismo per cui, se il componente attivo si guasta, un componente di riserva subentra automaticamente mantenendo il servizio: è alla base dell'alta disponibilità."
  },
  {
    id: "u02091", topic: "SO: modalità",
    q: "Perché esistono user mode e kernel mode?",
    opts: [
      "Per protezione: solo il kernel può eseguire operazioni privilegiate",
      "Per velocità: le due modalità raddoppiano la potenza di calcolo disponibile",
      "Per compatibilità con i programmi scritti in linguaggi differenti"
    ],
    correct: [0],
    exp: "La separazione tra user e kernel mode è una protezione: un programma difettoso o malevolo in user mode non può danneggiare direttamente hardware e sistema, deve passare dal kernel controllato."
  },
  {
    id: "u02092", topic: "Rete: banda vs latenza",
    q: "Per una videochiamata fluida conta soprattutto:",
    opts: [
      "Una bassa latenza, cioè un ritardo di rete minimo",
      "Una grande larghezza di banda, anche con ritardo elevato",
      "Un indirizzo IP statico e pubblico assegnato al dispositivo"
    ],
    correct: [0],
    exp: "Nelle comunicazioni in tempo reale (videochiamate, giochi) la bassa latenza è cruciale: un ritardo elevato rende la conversazione scattosa, anche con banda abbondante."
  },
  {
    id: "u02093", topic: "Container: Dockerfile",
    q: "Cos'è un Dockerfile?",
    opts: [
      "Un file di testo con le istruzioni per costruire un'immagine",
      "L'istanza in esecuzione avviata a partire da un'immagine",
      "Un registro online dove si pubblicano le immagini pronte"
    ],
    correct: [0],
    exp: "Il Dockerfile descrive passo passo come costruire un'immagine (SO base, dipendenze, codice, comando di avvio). Da esso si crea l'immagine, da cui si avviano i container."
  },
  {
    id: "u02094", topic: "Rete: broadcast",
    q: "Un messaggio 'broadcast' in una rete è:",
    opts: [
      "Un messaggio inviato a tutti i dispositivi della rete locale",
      "Un messaggio inviato a un unico destinatario ben preciso",
      "Un messaggio inviato solo a un gruppo selezionato di host"
    ],
    correct: [0],
    exp: "Il broadcast invia lo stesso messaggio a tutti i dispositivi del segmento di rete. L'unicast va a un singolo destinatario, il multicast a un gruppo selezionato."
  },
  {
    id: "u02095", topic: "SO real-time",
    q: "Un sistema operativo real-time è progettato per:",
    opts: [
      "Garantire risposte entro tempi rigidamente definiti",
      "Elaborare grandi volumi di dati con la massima velocità media",
      "Restare operativo il più a lungo possibile senza subire guasti"
    ],
    correct: [0],
    exp: "Un SO real-time garantisce che le operazioni critiche siano completate entro scadenze temporali precise (deterministiche): essenziale in ambiti come automotive, avionica, controllo industriale."
  },
  {
    id: "u02096", topic: "Cloud: regioni",
    q: "Perché i provider cloud offrono più 'regioni' geografiche?",
    opts: [
      "Ridurre la latenza verso gli utenti e rispettare i vincoli sui dati",
      "Concentrare tutti i dati in un unico grande datacenter centrale",
      "Aumentare il costo del servizio in proporzione alla distanza"
    ],
    correct: [0],
    exp: "Distribuire i datacenter in regioni diverse avvicina i servizi agli utenti (meno latenza), aumenta la resilienza ai disastri e permette di rispettare leggi che impongono dove tenere i dati."
  },
  {
    id: "u02097", topic: "Processo: fork",
    q: "L'operazione 'fork' in Unix:",
    opts: [
      "Crea un nuovo processo figlio, copia di quello padre",
      "Sostituisce il programma del processo corrente con un altro",
      "Crea un nuovo thread che condivide la memoria del processo"
    ],
    correct: [0],
    exp: "fork() genera un nuovo processo (figlio) quasi identico al padre, con un proprio PID e spazio di memoria. È il meccanismo classico Unix per creare nuovi processi."
  },
  {
    id: "u02098", topic: "Rete: firewall stateful",
    q: "Un firewall 'stateful' rispetto a uno 'stateless':",
    opts: [
      "Tiene traccia dello stato delle connessioni per decidere cosa permettere",
      "Valuta ogni pacchetto isolatamente in base a regole fisse e statiche",
      "Cifra tutte le connessioni consentite tra il client e il server"
    ],
    correct: [0],
    exp: "Il firewall stateful conosce il contesto delle connessioni (es. una risposta a una richiesta legittima viene ammessa), offrendo controllo più fine dello stateless, che valuta ogni pacchetto isolatamente."
  },
  {
    id: "u02099", topic: "Virtualizzazione: migrazione",
    q: "La 'live migration' di una VM consiste nel:",
    opts: [
      "Spostare una VM in esecuzione su un altro host senza interromperla",
      "Salvare lo stato della VM per poterlo ripristinare più avanti",
      "Convertire una macchina virtuale in un container più leggero"
    ],
    correct: [0],
    exp: "La live migration trasferisce una VM attiva da un server fisico a un altro senza fermare i servizi: utile per manutenzione hardware, bilanciamento del carico e alta disponibilità."
  },
  {
    id: "u02100", topic: "SO: virtualizzazione hardware",
    q: "Le estensioni hardware come Intel VT-x o AMD-V servono a:",
    opts: [
      "Supportare in modo efficiente la virtualizzazione a livello di CPU",
      "Aumentare la frequenza di clock del processore quando è sotto carico",
      "Cifrare via hardware i dati che transitano nella memoria RAM"
    ],
    correct: [0],
    exp: "VT-x (Intel) e AMD-V sono estensioni del processore che rendono la virtualizzazione più efficiente, permettendo alle VM di eseguire istruzioni con minor overhead. Sono spesso da abilitare nel BIOS/UEFI."
  },
  // === AGGIUNGI NUOVE DOMANDE SO RETI VIRTUALIZZAZIONE QUI ===
]);
