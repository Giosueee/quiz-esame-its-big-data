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
      "Compilare il codice sorgente in linguaggio macchina",
      "Navigare in internet e mostrare pagine web",
      "Progettare i circuiti fisici del processore"
    ],
    correct: [0],
    exp: "Il SO gestisce CPU, memoria, dischi e periferiche e offre ai programmi un'interfaccia uniforme per usarle, facendo da strato intermedio tra hardware e applicazioni."
  },
  {
    id: "u02002", topic: "Kernel",
    q: "Che cos'è il kernel?",
    opts: [
      "Il nucleo del sistema operativo, con i privilegi più alti",
      "Un programma utente come un browser",
      "La memoria fisica del computer",
      "Il linguaggio di programmazione del SO"
    ],
    correct: [0],
    exp: "Il kernel è il cuore del SO: gira in modalità privilegiata (kernel mode) e controlla accesso a hardware, processi e memoria. Le applicazioni girano invece in user mode, con permessi ridotti."
  },
  {
    id: "u02003", topic: "Processo",
    q: "Che cos'è un processo?",
    opts: [
      "Un programma in esecuzione, con il proprio spazio di memoria",
      "Un file salvato sul disco",
      "Un dispositivo hardware di input",
      "Una riga di codice sorgente"
    ],
    correct: [0],
    exp: "Un processo è un'istanza di un programma in esecuzione, con memoria, registri e risorse propri. Lo stesso programma può generare più processi distinti e isolati tra loro."
  },
  {
    id: "u02004", topic: "Processo vs thread",
    q: "Qual è la differenza principale tra processo e thread?",
    opts: [
      "I thread condividono la memoria del processo; i processi sono isolati",
      "Sono esattamente la stessa cosa",
      "Il thread ha sempre più memoria del processo",
      "I processi non possono essere eseguiti in parallelo"
    ],
    correct: [0],
    exp: "Un processo ha uno spazio di memoria proprio e isolato; i thread sono flussi di esecuzione DENTRO un processo che ne condividono la memoria. I thread sono più leggeri ma richiedono sincronizzazione."
  },
  {
    id: "u02005", topic: "Scheduling",
    q: "A cosa serve lo scheduler della CPU?",
    opts: [
      "A decidere quale processo usa la CPU e quando",
      "A salvare i file sul disco rigido",
      "A collegare il computer alla rete",
      "A tradurre il codice in linguaggio macchina"
    ],
    correct: [0],
    exp: "Lo scheduler assegna la CPU ai processi pronti secondo una politica (round robin, priorità, ecc.), dando l'illusione che più processi girino contemporaneamente su una singola CPU."
  },
  {
    id: "u02006", topic: "Multitasking",
    q: "Il multitasking (time sharing) consiste nel:",
    opts: [
      "Alternare rapidamente più processi sulla CPU per farli sembrare simultanei",
      "Usare più computer collegati in rete",
      "Aumentare la frequenza del processore",
      "Eseguire un solo programma per volta fino alla fine"
    ],
    correct: [0],
    exp: "Il multitasking assegna a turno piccole fette di tempo (time slice) ai vari processi: l'alternanza è così rapida da sembrare esecuzione simultanea, anche con una sola CPU."
  },
  {
    id: "u02007", topic: "Deadlock",
    q: "Che cos'è un deadlock (stallo)?",
    opts: [
      "Due o più processi bloccati in attesa reciproca di risorse",
      "Un processo che termina correttamente",
      "Un errore di sintassi nel codice",
      "Un aumento improvviso della velocità della CPU"
    ],
    correct: [0],
    exp: "Il deadlock si verifica quando processi si bloccano a vicenda: ognuno attende una risorsa detenuta da un altro, e nessuno può proseguire. Serve prevenirlo o rilevarlo e interromperlo."
  },
  {
    id: "u02008", topic: "Gestione memoria",
    q: "A cosa serve la memoria virtuale?",
    opts: [
      "A far usare ai programmi più memoria di quella fisica disponibile",
      "A rendere il disco più veloce della RAM",
      "A cifrare i dati in memoria",
      "A eliminare la necessità della RAM"
    ],
    correct: [0],
    exp: "La memoria virtuale usa una parte del disco (swap/paging) come estensione della RAM: ogni processo 'vede' uno spazio di indirizzi ampio e continuo, anche se la RAM fisica è limitata."
  },
  {
    id: "u02009", topic: "Paginazione",
    q: "La paginazione della memoria consiste nel:",
    opts: [
      "Suddividere la memoria in blocchi di dimensione fissa",
      "Ordinare i file alfabeticamente sul disco",
      "Cancellare la RAM a ogni avvio",
      "Duplicare la RAM su un secondo modulo"
    ],
    correct: [0],
    exp: "La paginazione divide memoria logica e fisica in blocchi di taglia fissa (pagine e frame): permette di caricare in RAM solo le pagine necessarie, spostando le altre su disco (swap)."
  },
  {
    id: "u02010", topic: "File system",
    q: "Che cos'è un file system?",
    opts: [
      "Il modo in cui il SO organizza e memorizza i file su un supporto",
      "Un programma per navigare in internet",
      "La memoria RAM del computer",
      "Un protocollo di comunicazione tra servizi o dispositivi"
    ],
    correct: [0],
    exp: "Il file system definisce come dati e metadati sono organizzati su disco (cartelle, permessi, nomi). Esempi: NTFS, ext4, FAT32, APFS. Gestisce allocazione dello spazio e accesso ai file."
  },
  {
    id: "u02011", topic: "Modello OSI",
    q: "Quanti livelli ha il modello OSI?",
    opts: [
      "7",
      "4",
      "5",
      "3"
    ],
    correct: [0],
    exp: "Il modello OSI ha 7 livelli: Fisico, Data Link, Rete, Trasporto, Sessione, Presentazione, Applicazione. È un modello di riferimento concettuale per la comunicazione di rete."
  },
  {
    id: "u02012", topic: "TCP/IP",
    q: "A quale livello del modello TCP/IP opera il protocollo IP?",
    opts: [
      "Livello di rete (internet)",
      "Livello di trasporto",
      "Livello applicazione",
      "Livello fisico"
    ],
    correct: [0],
    exp: "IP opera al livello di rete (internet) e si occupa dell'indirizzamento e dell'instradamento dei pacchetti tra reti diverse. TCP e UDP stanno al livello di trasporto sopra IP."
  },
  {
    id: "u02013", topic: "TCP vs UDP",
    q: "Qual è la differenza principale tra TCP e UDP?",
    opts: [
      "TCP è affidabile e orientato alla connessione; UDP è più veloce ma senza garanzie",
      "UDP garantisce consegna e ordine mentre TCP no",
      "TCP e UDP sono lo stesso protocollo di trasporto",
      "TCP è usato solo per posta elettronica e non per altri servizi"
    ],
    correct: [0],
    exp: "TCP garantisce consegna ordinata e senza perdite (con conferme e ritrasmissioni) ma è più lento; UDP è 'best effort', più rapido e leggero, usato per streaming, giochi, DNS dove la velocità conta."
  },
  {
    id: "u02014", topic: "Indirizzo IP",
    q: "Un indirizzo IPv4 è composto da:",
    opts: [
      "32 bit, scritti come quattro numeri da 0 a 255",
      "64 bit divisi in due parti",
      "16 caratteri esadecimali",
      "Un nome di dominio testuale"
    ],
    correct: [0],
    exp: "IPv4 usa 32 bit, rappresentati come quattro ottetti (es. 192.168.1.1), ciascuno 0-255. IPv6 usa invece 128 bit per superare l'esaurimento degli indirizzi IPv4."
  },
  {
    id: "u02015", topic: "DNS",
    q: "A cosa serve il DNS?",
    opts: [
      "A tradurre i nomi di dominio in indirizzi IP",
      "Ad assegnare automaticamente gli indirizzi IP ai dispositivi",
      "A instradare i pacchetti tra reti diverse",
      "A filtrare il traffico secondo regole di sicurezza"
    ],
    correct: [0],
    exp: "Il DNS (Domain Name System) traduce nomi leggibili (es. google.com) nell'indirizzo IP corrispondente, così gli utenti non devono ricordare numeri. È una sorta di 'rubrica' di internet."
  },
  {
    id: "u02016", topic: "HTTP",
    q: "Cosa distingue HTTPS da HTTP?",
    opts: [
      "HTTPS cifra la comunicazione tramite TLS/SSL",
      "HTTPS è più lento e insicuro",
      "HTTP usa la crittografia, HTTPS no",
      "Sono identici, cambia solo il nome"
    ],
    correct: [0],
    exp: "HTTPS aggiunge a HTTP un livello di cifratura (TLS/SSL) che protegge i dati scambiati tra browser e server da intercettazioni e manomissioni. È lo standard per i siti sicuri."
  },
  {
    id: "u02017", topic: "Porte",
    q: "A cosa serve il numero di porta in una comunicazione di rete?",
    opts: [
      "A identificare l'applicazione/servizio su un host",
      "A indicare la velocità della connessione",
      "A cifrare i dati trasmessi",
      "A sostituire l'indirizzo IP"
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
      "21",
      "25"
    ],
    correct: [0],
    exp: "HTTPS usa la porta 443; HTTP la 80. Altre note: 22 SSH, 21 FTP, 25 SMTP (email), 53 DNS. Sono le 'well-known ports' (0-1023)."
  },
  {
    id: "u02019", topic: "LAN/WAN",
    q: "Qual è la differenza tra LAN e WAN?",
    opts: [
      "La LAN copre un'area locale; la WAN un'area geografica ampia",
      "La WAN è sempre più piccola della LAN",
      "Sono termini sinonimi e non cambiano la procedura richiesta",
      "La LAN funziona solo via cavo, la WAN solo wireless"
    ],
    correct: [0],
    exp: "LAN (Local Area Network) collega dispositivi in un'area ristretta (casa, ufficio); WAN (Wide Area Network) collega reti su grandi distanze geografiche. Internet è la più grande WAN."
  },
  {
    id: "u02020", topic: "Switch vs router",
    q: "Qual è la differenza tra switch e router?",
    opts: [
      "Lo switch collega dispositivi nella stessa rete; il router collega reti diverse",
      "Sono lo stesso dispositivo",
      "Il router collega solo due computer",
      "Lo switch serve solo per il Wi-Fi"
    ],
    correct: [0],
    exp: "Lo switch instrada i dati tra dispositivi della STESSA rete locale (usa gli indirizzi MAC); il router collega reti diverse e instrada i pacchetti tra di esse (usa gli indirizzi IP)."
  },
  {
    id: "u02021", topic: "Virtualizzazione",
    q: "Cos'è la virtualizzazione?",
    opts: [
      "Creare versioni virtuali di risorse (server, storage, reti) su hardware fisico",
      "Aumentare fisicamente la RAM del computer",
      "Cancellare i dati in modo sicuro",
      "Cifrare l'intero disco rigido"
    ],
    correct: [0],
    exp: "La virtualizzazione astrae le risorse fisiche creando risorse virtuali: su un unico server fisico possono girare più macchine virtuali indipendenti, ottimizzando l'uso dell'hardware."
  },
  {
    id: "u02022", topic: "Macchina virtuale",
    q: "Cos'è una macchina virtuale (VM)?",
    opts: [
      "Un computer emulato via software, con proprio SO, su hardware fisico",
      "Un componente hardware del processore",
      "Un tipo di cavo di rete",
      "Un linguaggio per scrivere codice applicativo"
    ],
    correct: [0],
    exp: "Una VM è un ambiente software che simula un computer completo (CPU, memoria, disco) e ospita un proprio sistema operativo, isolato dagli altri, condividendo l'hardware fisico sottostante."
  },
  {
    id: "u02023", topic: "Hypervisor",
    q: "Cos'è un hypervisor?",
    opts: [
      "Il software che crea e gestisce le macchine virtuali",
      "Un tipo di firewall di rete",
      "Il processore fisico del server",
      "Un protocollo di trasmissione dati"
    ],
    correct: [0],
    exp: "L'hypervisor (o Virtual Machine Monitor) alloca le risorse fisiche alle VM e le tiene isolate. Esempi: VMware ESXi, Hyper-V, KVM, VirtualBox."
  },
  {
    id: "u02024", topic: "Hypervisor",
    q: "Qual è la differenza tra hypervisor di tipo 1 e di tipo 2?",
    opts: [
      "Il tipo 1 gira direttamente sull'hardware; il tipo 2 sopra un SO ospitante",
      "Il tipo 2 è sempre più veloce del tipo 1",
      "Il tipo 1 richiede un SO ospitante",
      "Hanno comportamento e risultato identici nello stesso contesto operativo"
    ],
    correct: [0],
    exp: "L'hypervisor di tipo 1 (bare-metal, es. ESXi) gira direttamente sull'hardware, più efficiente e usato nei datacenter. Il tipo 2 (hosted, es. VirtualBox) gira come applicazione sopra un SO esistente."
  },
  {
    id: "u02025", topic: "Container",
    q: "Cos'è un container (es. Docker)?",
    opts: [
      "Un ambiente isolato che condivide il kernel del SO host",
      "Una macchina virtuale con un proprio kernel completo",
      "Un dispositivo di rete fisico",
      "Un tipo di file compresso"
    ],
    correct: [0],
    exp: "Un container isola un'applicazione e le sue dipendenze, ma condivide il kernel del SO host: è molto più leggero e veloce di una VM, che invece include un intero SO ospite."
  },
  {
    id: "u02026", topic: "Container vs VM",
    q: "Rispetto a una VM, un container è tipicamente:",
    opts: [
      "Più leggero e rapido da avviare",
      "Più pesante, perché contiene un kernel proprio",
      "Sempre meno sicuro e mai usato in produzione",
      "Un sinonimo di macchina virtuale"
    ],
    correct: [0],
    exp: "Il container condivide il kernel dell'host e impacchetta solo l'app e le librerie: parte in secondi e occupa poco. Una VM emula hardware e include un intero SO ospite, quindi è più pesante."
  },
  {
    id: "u02027", topic: "Docker image",
    q: "Cos'è un'immagine Docker?",
    opts: [
      "Un modello immutabile da cui si avviano i container",
      "Un container già avviato a partire da un'immagine",
      "Una fotografia dello schermo",
      "Un file di log del sistema"
    ],
    correct: [0],
    exp: "L'immagine è un pacchetto immutabile con codice, librerie e configurazione: da una stessa immagine si possono avviare più container identici. Il container è l'istanza in esecuzione dell'immagine."
  },
  {
    id: "u02028", topic: "Cloud",
    q: "Cosa significa IaaS (Infrastructure as a Service)?",
    opts: [
      "Il provider offre risorse infrastrutturali (server, storage, rete) virtualizzate",
      "Il provider fornisce solo applicazioni finite pronte all'uso",
      "Un servizio esclusivamente di posta elettronica",
      "Un tipo di file system distribuito"
    ],
    correct: [0],
    exp: "Nell'IaaS il cloud fornisce infrastruttura virtualizzata (VM, storage, rete) che l'utente gestisce. Sopra ci sono PaaS (piattaforma di sviluppo) e SaaS (software pronto, es. Gmail)."
  },
  {
    id: "u02029", topic: "Cloud",
    q: "In quale modello il provider gestisce TUTTO e l'utente usa solo l'applicazione?",
    opts: [
      "SaaS (Software as a Service)",
      "IaaS (Infrastructure as a Service)",
      "On-premise",
      "Bare metal"
    ],
    correct: [0],
    exp: "Nel SaaS il provider gestisce infrastruttura, piattaforma e software: l'utente usa solo l'applicazione via browser (es. Gmail, Office 365), senza preoccuparsi di server o aggiornamenti."
  },
  {
    id: "u02030", topic: "Snapshot",
    q: "A cosa serve uno snapshot di una macchina virtuale?",
    opts: [
      "A salvare lo stato della VM in un istante, per ripristinarlo in seguito",
      "A cancellare definitivamente la VM",
      "A collegare la VM alla rete",
      "A tradurre il SO in un'altra lingua"
    ],
    correct: [0],
    exp: "Uno snapshot congela lo stato della VM (disco, memoria, config) in un momento preciso: utile prima di un aggiornamento rischioso, per poter tornare indietro se qualcosa va storto."
  },
  {
    id: "u02031", topic: "Modalità di esecuzione",
    q: "In quale modalità girano i normali programmi utente?",
    opts: [
      "User mode (modalità utente), con privilegi limitati",
      "Kernel mode, con privilegi massimi",
      "Sempre con accesso diretto all'hardware",
      "In modalità di sola lettura del disco"
    ],
    correct: [0],
    exp: "I programmi utente girano in user mode, senza accesso diretto all'hardware: per operazioni privilegiate chiamano il kernel tramite system call. Solo il kernel gira in kernel mode."
  },
  {
    id: "u02032", topic: "System call",
    q: "Cos'è una system call?",
    opts: [
      "Una richiesta di un programma al kernel per un servizio",
      "Una chiamata telefonica tra due server",
      "Un errore fatale del sistema",
      "Un comando di rete verso internet"
    ],
    correct: [0],
    exp: "La system call è il meccanismo con cui un'applicazione in user mode chiede al kernel un servizio privilegiato (I/O su file, creazione processi, rete). È il ponte controllato tra user e kernel mode."
  },
  {
    id: "u02033", topic: "RAM vs disco",
    q: "Qual è la differenza principale tra RAM e disco (SSD/HDD)?",
    opts: [
      "La RAM è veloce e volatile; il disco è più lento ma persistente",
      "La RAM conserva i dati anche da spenta",
      "Il disco è più veloce della RAM",
      "Sono la stessa memoria"
    ],
    correct: [0],
    exp: "La RAM è velocissima ma volatile (si svuota allo spegnimento); il disco è più lento ma conserva i dati in modo permanente. I programmi in esecuzione stanno in RAM, i file su disco."
  },
  {
    id: "u02034", topic: "Boot",
    q: "Cosa avviene durante il boot del computer?",
    opts: [
      "Il firmware avvia il caricamento del sistema operativo in memoria",
      "Vengono cancellati tutti i file utente",
      "Si installano automaticamente nuovi programmi",
      "Si spegne il processore"
    ],
    correct: [0],
    exp: "Al boot il firmware (BIOS/UEFI) esegue i test iniziali e passa il controllo al bootloader, che carica il kernel del SO in memoria e avvia il sistema fino al login."
  },
  {
    id: "u02035", topic: "Firewall",
    q: "A cosa serve un firewall?",
    opts: [
      "A filtrare il traffico di rete secondo regole di sicurezza",
      "Ad aumentare la velocità del disco",
      "A raffreddare fisicamente il processore",
      "A tradurre i nomi di dominio in IP"
    ],
    correct: [0],
    exp: "Il firewall controlla il traffico in ingresso e uscita, permettendo o bloccando le connessioni in base a regole (porte, IP, protocolli), per proteggere la rete da accessi non autorizzati."
  },
  {
    id: "u02036", topic: "MAC address",
    q: "Cos'è l'indirizzo MAC?",
    opts: [
      "Un identificativo fisico univoco della scheda di rete",
      "Un indirizzo IP dinamico",
      "Il nome del computer sulla rete",
      "Una porta di comunicazione"
    ],
    correct: [0],
    exp: "Il MAC address è un identificatore hardware univoco della scheda di rete (es. 00:1A:2B:...), assegnato dal produttore. Opera a livello data link, mentre l'IP opera a livello di rete."
  },
  {
    id: "u02037", topic: "DHCP",
    q: "A cosa serve il protocollo DHCP?",
    opts: [
      "Ad assegnare automaticamente gli indirizzi IP ai dispositivi",
      "A tradurre i nomi di dominio in indirizzi IP",
      "A instradare i pacchetti verso altre reti",
      "A verificare l'identità degli utenti che si collegano"
    ],
    correct: [0],
    exp: "Il DHCP assegna in automatico a ogni dispositivo che si connette un indirizzo IP (e altri parametri di rete), evitando la configurazione manuale e i conflitti di indirizzi."
  },
  {
    id: "u02038", topic: "Subnet mask",
    q: "A cosa serve la subnet mask?",
    opts: [
      "A distinguere la parte di rete dalla parte host di un indirizzo IP",
      "A cifrare l'indirizzo IP",
      "A velocizzare la connessione",
      "A contare i dispositivi accesi"
    ],
    correct: [0],
    exp: "La subnet mask (es. 255.255.255.0) indica quali bit dell'IP identificano la rete e quali l'host, permettendo di suddividere una rete in sottoreti e stabilire chi è 'locale'."
  },
  {
    id: "u02039", topic: "Ping",
    q: "A cosa serve il comando ping?",
    opts: [
      "A verificare se un host è raggiungibile e misurarne la latenza",
      "A cancellare un file",
      "A installare un programma",
      "A cifrare una connessione"
    ],
    correct: [0],
    exp: "Ping invia pacchetti ICMP a un host e attende la risposta: serve a verificare la connettività di rete e a misurare il tempo di andata e ritorno (latenza)."
  },
  {
    id: "u02040", topic: "Backup",
    q: "Quale strategia descrive un backup 'incrementale'?",
    opts: [
      "Salva solo i dati modificati dall'ultimo backup di qualsiasi tipo",
      "Salva ogni volta tutti i dati da zero",
      "Non salva mai nulla automaticamente",
      "Salva solo i file di sistema"
    ],
    correct: [0],
    exp: "Il backup incrementale copia solo le modifiche dall'ultimo backup (completo o incrementale): occupa poco spazio ma il ripristino richiede la catena completa. Il differenziale copia le modifiche dall'ultimo completo."
  },
  {
    id: "u02041", topic: "Concorrenza",
    q: "Cos'è una 'race condition'?",
    opts: [
      "Un bug dovuto all'ordine imprevedibile di accesso a risorse condivise",
      "Una gara di velocità tra due CPU",
      "Un tipo di attacco di rete",
      "Un errore di battitura nel codice"
    ],
    correct: [0],
    exp: "La race condition avviene quando più thread/processi accedono a una risorsa condivisa senza sincronizzazione e il risultato dipende dall'ordine di esecuzione, causando comportamenti imprevedibili."
  },
  {
    id: "u02042", topic: "Sincronizzazione",
    q: "A cosa serve un semaforo (o mutex) nella programmazione concorrente?",
    opts: [
      "A regolare l'accesso a risorse condivise evitando conflitti",
      "Ad aumentare la frequenza di clock della CPU",
      "A collegare in rete due computer distinti",
      "A distribuire i processi tra i core disponibili"
    ],
    correct: [0],
    exp: "Semafori e mutex sono meccanismi di sincronizzazione: garantiscono che una risorsa condivisa (es. una variabile o un file) sia usata da un solo thread alla volta, prevenendo le race condition."
  },
  {
    id: "u02043", topic: "Cloud",
    q: "Cosa significa PaaS (Platform as a Service)?",
    opts: [
      "Il provider offre una piattaforma per sviluppare e distribuire applicazioni",
      "Il provider fornisce solo hardware fisico",
      "Un software finito usato via browser",
      "Un protocollo di rete sicuro"
    ],
    correct: [0],
    exp: "Nel PaaS il provider gestisce infrastruttura e ambiente (SO, runtime, database), e lo sviluppatore si concentra solo sul codice dell'applicazione. Es: Heroku, Google App Engine."
  },
  {
    id: "u02044", topic: "Scalabilità",
    q: "Cosa distingue la scalabilità 'orizzontale' da quella 'verticale'?",
    opts: [
      "Orizzontale aggiunge più macchine; verticale potenzia una singola macchina",
      "Verticale aggiunge più macchine, orizzontale ne potenzia una",
      "Rappresentano lo stesso concetto e sono intercambiabili nell'esercizio",
      "Riguardano solo la grafica"
    ],
    correct: [0],
    exp: "Scalare in verticale (scale up) = aumentare risorse di un server (più CPU/RAM). Scalare in orizzontale (scale out) = aggiungere più server che lavorano insieme, tipico del cloud e dei big data."
  },
  {
    id: "u02045", topic: "Interrupt",
    q: "Cos'è un interrupt?",
    opts: [
      "Un segnale che sospende la CPU per gestire un evento urgente",
      "Un errore che spegne il computer",
      "Un tipo di file eseguibile",
      "Un comando di rete"
    ],
    correct: [0],
    exp: "L'interrupt è un segnale (hardware o software) che interrompe l'esecuzione corrente della CPU per gestire subito un evento (es. tasto premuto, dato dal disco), poi si riprende da dove si era rimasti."
  },
  {
    id: "u02046", topic: "Driver",
    q: "Cos'è un driver di dispositivo?",
    opts: [
      "Un software che permette al SO di comunicare con un componente hardware",
      "Un cavo fisico di collegamento, non software di comunicazione hardware",
      "Un malware, non un componente software del sistema operativo",
      "Una porta logica di rete, non un driver hardware"
    ],
    correct: [0],
    exp: "Il driver traduce le richieste generiche del SO nei comandi specifici di un dispositivo (stampante, scheda video, ecc.): senza il driver giusto l'hardware non funziona correttamente."
  },
  {
    id: "u02047", topic: "NAT",
    q: "A cosa serve il NAT (Network Address Translation)?",
    opts: [
      "A far condividere a più dispositivi un unico IP pubblico",
      "A cifrare il traffico web",
      "A velocizzare il disco",
      "A tradurre i nomi di dominio"
    ],
    correct: [0],
    exp: "Il NAT traduce gli IP privati della rete locale in un unico IP pubblico verso internet (e viceversa): permette a molti dispositivi di uscire su internet con un solo indirizzo pubblico."
  },
  {
    id: "u02048", topic: "VPN",
    q: "A cosa serve una VPN?",
    opts: [
      "A creare un tunnel cifrato tra il dispositivo e una rete remota",
      "Ad aumentare la RAM disponibile",
      "A raffreddare il processore",
      "A comprimere i file"
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
      "16",
      "1000"
    ],
    correct: [0],
    exp: "Un byte è composto da 8 bit. Un bit è la singola cifra binaria (0/1). Con 8 bit si rappresentano 256 valori (2^8), es. un carattere ASCII."
  },
  {
    id: "u02050", topic: "Latenza vs banda",
    q: "Qual è la differenza tra latenza e larghezza di banda?",
    opts: [
      "La latenza è il ritardo; la banda è la quantità di dati trasferibili nel tempo",
      "Sono termini sinonimi e non cambiano la procedura richiesta",
      "La banda è il ritardo, la latenza la quantità",
      "Riguardano solo il Wi-Fi"
    ],
    correct: [0],
    exp: "La latenza è il tempo che un pacchetto impiega ad arrivare (ritardo, in ms); la banda è quanti dati passano per unità di tempo (es. Mbps). Alta banda ma alta latenza = molti dati ma con ritardo."
  },
  {
    id: "u02051", topic: "Processo: stati",
    q: "Quali sono stati tipici di un processo? (una o più risposte)",
    opts: [
      "In esecuzione (running)",
      "Pronto (ready)",
      "In attesa (waiting/blocked)",
      "Compilato"
    ],
    correct: [0,1,2],
    exp: "Un processo passa tra stati: pronto (attende la CPU), in esecuzione (usa la CPU), in attesa (bloccato su I/O). 'Compilato' non è uno stato di esecuzione, riguarda la traduzione del codice."
  },
  {
    id: "u02052", topic: "Cache",
    q: "A cosa serve la memoria cache della CPU?",
    opts: [
      "A tenere vicino alla CPU i dati usati più di frequente, riducendo i tempi di accesso",
      "Ad archiviare i file in modo permanente su disco",
      "A collegare il computer alla rete internet",
      "A conservare i dati anche a computer spento"
    ],
    correct: [0],
    exp: "La cache è una memoria piccola e velocissima tra CPU e RAM che conserva dati/istruzioni usati spesso: riduce l'attesa della CPU. Esistono livelli L1, L2, L3 di dimensione e velocità decrescenti."
  },
  {
    id: "u02053", topic: "Protocolli",
    q: "Quale protocollo si usa per l'invio delle email?",
    opts: [
      "SMTP",
      "HTTP",
      "FTP",
      "DNS"
    ],
    correct: [0],
    exp: "SMTP (Simple Mail Transfer Protocol) gestisce l'INVIO delle email. Per riceverle si usano IMAP o POP3. HTTP è per il web, FTP per il trasferimento file, DNS per la risoluzione dei nomi."
  },
  {
    id: "u02054", topic: "OSI: livello trasporto",
    q: "Quali protocolli operano al livello di trasporto? (una o più risposte)",
    opts: [
      "TCP",
      "UDP",
      "IP",
      "HTTP"
    ],
    correct: [0,1],
    exp: "TCP e UDP sono protocolli di trasporto. IP sta al livello di rete (sotto), HTTP al livello applicazione (sopra). Il trasporto gestisce la comunicazione end-to-end tra applicazioni."
  },
  {
    id: "u02055", topic: "Load balancer",
    q: "A cosa serve un load balancer?",
    opts: [
      "A distribuire il carico di richieste tra più server",
      "A tradurre i nomi di dominio in indirizzi IP",
      "A memorizzare in cache le pagine più richieste",
      "A filtrare le richieste non autorizzate verso i server"
    ],
    correct: [0],
    exp: "Il load balancer smista le richieste tra più server, evitando che uno solo si sovraccarichi: migliora prestazioni, disponibilità e tolleranza ai guasti. È chiave nella scalabilità orizzontale."
  },
  {
    id: "u02056", topic: "Kernel",
    q: "Se un programma utente vuole scrivere su disco, cosa deve fare?",
    opts: [
      "Richiederlo al kernel tramite una system call",
      "Accedere direttamente all'hardware del disco",
      "Riavviare il computer",
      "Cambiare il proprio linguaggio di programmazione"
    ],
    correct: [0],
    exp: "In user mode il programma non può toccare l'hardware direttamente: deve chiedere al kernel tramite system call (es. write). Il kernel esegue l'operazione in modo controllato e sicuro."
  },
  {
    id: "u02057", topic: "Thread",
    q: "Un vantaggio dei thread rispetto ai processi separati è:",
    opts: [
      "Comunicano facilmente perché condividono la stessa memoria",
      "Sono sempre più sicuri e isolati",
      "Occupano più risorse di un processo",
      "Non possono mai bloccarsi"
    ],
    correct: [0],
    exp: "I thread di uno stesso processo condividono la memoria, quindi comunicano rapidamente e sono leggeri. Lo svantaggio è che la memoria condivisa richiede sincronizzazione per evitare errori."
  },
  {
    id: "u02058", topic: "Cloud pubblico/privato",
    q: "Cosa distingue un cloud pubblico da uno privato?",
    opts: [
      "Il pubblico è condiviso da più clienti; il privato è dedicato a una sola organizzazione",
      "Il privato è sempre gratuito",
      "Il pubblico non è accessibile da internet",
      "Rappresentano lo stesso concetto e sono intercambiabili nell'esercizio"
    ],
    correct: [0],
    exp: "Il cloud pubblico (AWS, Azure) è condiviso tra molti clienti sull'infrastruttura del provider; il privato è riservato a una singola organizzazione. L'ibrido combina i due."
  },
  {
    id: "u02059", topic: "Overhead virtualizzazione",
    q: "Perché i container si sono diffusi rispetto alle VM per il deployment?",
    opts: [
      "Sono leggeri, veloci da avviare e portabili tra ambienti",
      "Sono più pesanti ma più sicuri delle VM",
      "Includono sempre un intero SO ospite",
      "Non richiedono alcun sistema operativo"
    ],
    correct: [0],
    exp: "I container avviano in secondi, occupano poche risorse (condividono il kernel host) e garantiscono che l'app giri identica ovunque ('funziona sulla mia macchina' risolto). Ideali per microservizi e CI/CD."
  },
  {
    id: "u02060", topic: "Orchestrazione",
    q: "A cosa serve Kubernetes?",
    opts: [
      "A orchestrare (gestire e scalare) container su più macchine",
      "A costruire le immagini da cui partono i container",
      "A sostituire il sistema operativo dei server",
      "A configurare la rete fisica del data center"
    ],
    correct: [0],
    exp: "Kubernetes orchestra i container: li distribuisce sui nodi, li riavvia se cadono, li scala in base al carico e ne gestisce il networking. Docker crea/esegue i container, Kubernetes li coordina su larga scala."
  },
  {
    id: "u02061", topic: "Permessi file",
    q: "In un sistema Unix/Linux, i permessi di un file riguardano:",
    opts: [
      "Lettura, scrittura ed esecuzione per proprietario, gruppo e altri",
      "Solo la dimensione del file",
      "La velocità di accesso al file",
      "Il colore dell'icona del file"
    ],
    correct: [0],
    exp: "I permessi Unix definiscono chi può leggere (r), scrivere (w) ed eseguire (x) un file, per tre categorie: proprietario, gruppo e altri. Si gestiscono con chmod (es. 755)."
  },
  {
    id: "u02062", topic: "Shell",
    q: "Cos'è la shell (es. Bash)?",
    opts: [
      "Un interprete di comandi per interagire con il SO da riga di comando",
      "Il processore del computer",
      "Un protocollo di comunicazione tra servizi o dispositivi",
      "La memoria cache"
    ],
    correct: [0],
    exp: "La shell è l'interfaccia testuale che interpreta i comandi dell'utente e li fa eseguire al SO (es. Bash, Zsh, PowerShell). Permette anche di scrivere script per automatizzare operazioni."
  },
  {
    id: "u02063", topic: "Rete: pacchetto",
    q: "Cos'è un pacchetto in una rete?",
    opts: [
      "Un'unità di dati con intestazione e payload, instradata sulla rete",
      "Un cavo fisico usato per collegare dispositivi di rete",
      "Un programma applicativo installato sul computer",
      "Un dispositivo fisico, non un pacchetto dati trasmesso"
    ],
    correct: [0],
    exp: "I dati vengono suddivisi in pacchetti: ognuno ha un'intestazione (con indirizzi sorgente/destinazione) e un payload (i dati). I pacchetti viaggiano indipendentemente e vengono riassemblati a destinazione."
  },
  {
    id: "u02064", topic: "IPv4 vs IPv6",
    q: "Perché è stato introdotto IPv6?",
    opts: [
      "Per superare l'esaurimento degli indirizzi disponibili con IPv4",
      "Perché IPv4 era troppo veloce",
      "Per eliminare la necessità del DNS",
      "Per rendere le reti più lente"
    ],
    correct: [0],
    exp: "IPv4 (32 bit) offre ~4,3 miliardi di indirizzi, ormai insufficienti. IPv6 usa 128 bit, fornendo un numero enorme di indirizzi e migliorie in sicurezza e instradamento."
  },
  {
    id: "u02065", topic: "Processo zombie",
    q: "Cos'è un processo 'zombie' in Unix?",
    opts: [
      "Un processo terminato il cui stato non è ancora stato letto dal padre",
      "Un processo che consuma tutta la CPU",
      "Un virus informatico",
      "Un processo eseguito due volte"
    ],
    correct: [0],
    exp: "Uno zombie è un processo figlio già terminato ma la cui voce resta nella tabella dei processi finché il padre non ne 'raccoglie' lo stato di uscita (wait). Occupa solo una voce, non risorse reali."
  },
  {
    id: "u02066", topic: "Throughput",
    q: "Il throughput di un sistema indica:",
    opts: [
      "La quantità di lavoro completato nell'unità di tempo",
      "Il ritardo di una singola operazione",
      "La temperatura del processore",
      "Il numero di errori di rete"
    ],
    correct: [0],
    exp: "Il throughput misura quanto lavoro (es. richieste, dati) un sistema porta a termine per unità di tempo. È diverso dalla latenza, che misura il ritardo di una singola operazione."
  },
  {
    id: "u02067", topic: "DNS",
    q: "Se il DNS non funziona ma la rete sì, cosa succede tipicamente?",
    opts: [
      "Si può navigare per indirizzo IP ma non per nome di dominio",
      "Non si può fare assolutamente nulla in rete",
      "La connessione diventa più veloce",
      "I file locali si cancellano"
    ],
    correct: [0],
    exp: "Senza DNS i nomi (es. google.com) non vengono risolti in IP, quindi la navigazione 'per nome' fallisce, ma raggiungendo direttamente l'IP la connessione funziona: il problema è solo la traduzione dei nomi."
  },
  {
    id: "u02068", topic: "Virtualizzazione risorse",
    q: "La virtualizzazione migliora l'uso dell'hardware perché:",
    opts: [
      "Più VM condividono lo stesso server fisico, aumentandone l'utilizzo",
      "Raddoppia fisicamente la RAM installata",
      "Elimina la necessità di un sistema operativo",
      "Rende inutile la CPU"
    ],
    correct: [0],
    exp: "Un server fisico spesso è sottoutilizzato; consolidando più VM sullo stesso hardware si sfruttano meglio le risorse, si riducono i costi e si semplifica la gestione (consolidamento server)."
  },
  {
    id: "u02069", topic: "Firewall vs antivirus",
    q: "Firewall e antivirus fanno la stessa cosa?",
    opts: [
      "No: il firewall filtra il traffico di rete, l'antivirus rileva software malevolo",
      "Firewall e antivirus sono sinonimi e fanno lo stesso controllo",
      "Il firewall analizza file locali alla ricerca di malware",
      "L'antivirus gestisce indirizzi IP e regole di rete"
    ],
    correct: [0],
    exp: "Il firewall controlla le connessioni di rete (chi entra/esce); l'antivirus analizza file e programmi per individuare malware. Sono complementari, non alternativi."
  },
  {
    id: "u02070", topic: "Cloud: elasticità",
    q: "L'elasticità del cloud significa che:",
    opts: [
      "Le risorse si adattano automaticamente in su o in giù in base al carico",
      "Le risorse sono fisse e non cambiano mai",
      "I dati vengono sempre cancellati ogni notte",
      "Il servizio funziona solo offline"
    ],
    correct: [0],
    exp: "L'elasticità permette di aumentare le risorse quando il carico cresce e ridurle quando cala, pagando solo per quel che si usa. È uno dei vantaggi chiave del cloud rispetto all'hardware fisico."
  },
  {
    id: "u02071", topic: "Protocollo SSH",
    q: "A cosa serve SSH?",
    opts: [
      "Ad accedere in modo sicuro e cifrato a un computer remoto",
      "A inviare email",
      "A navigare pagine web non sicure",
      "A cancellare file da remoto senza cifratura"
    ],
    correct: [0],
    exp: "SSH (Secure Shell) permette di collegarsi e gestire un computer remoto tramite una connessione cifrata (di norma sulla porta 22), sostituendo protocolli insicuri come Telnet."
  },
  {
    id: "u02072", topic: "Multiprocessore",
    q: "Un sistema multi-core permette di:",
    opts: [
      "Eseguire realmente più istruzioni in parallelo su core diversi",
      "Aumentare la dimensione del disco",
      "Cifrare automaticamente i dati",
      "Collegare più monitor"
    ],
    correct: [0],
    exp: "Un processore multi-core ha più unità di elaborazione (core): può eseguire davvero più thread in parallelo, a differenza del semplice time sharing su una singola CPU che solo li alterna."
  },
  {
    id: "u02073", topic: "Storage",
    q: "Cosa distingue lo storage a oggetti (object storage) dal file system tradizionale?",
    opts: [
      "Memorizza dati come oggetti con metadati, ideale per grandi volumi non strutturati",
      "È sempre più lento e meno scalabile",
      "Usa cartelle annidate come unico modo di organizzare i dati",
      "Non può essere usato nel cloud"
    ],
    correct: [0],
    exp: "L'object storage (es. Amazon S3) archivia i dati come oggetti con identificativo e metadati in uno spazio piatto, altamente scalabile per file, backup e big data. Il file system usa una gerarchia di cartelle."
  },
  {
    id: "u02074", topic: "Concorrenza vs parallelismo",
    q: "Concorrenza e parallelismo sono la stessa cosa?",
    opts: [
      "No: la concorrenza gestisce più attività 'insieme', il parallelismo le esegue davvero simultaneamente",
      "Sì, sono sinonimi esatti",
      "Il parallelismo esiste solo con una CPU singola",
      "La concorrenza richiede sempre più computer"
    ],
    correct: [0],
    exp: "Concorrenza = gestire più task che progrediscono nello stesso periodo (anche alternandoli su una CPU). Parallelismo = eseguirli letteralmente allo stesso istante su più core. Il parallelismo è una forma di concorrenza."
  },
  {
    id: "u02075", topic: "Rete: banda",
    q: "1 Gbps di larghezza di banda equivale a:",
    opts: [
      "1 gigabit al secondo di dati trasferibili",
      "Una quantità di storage disponibile, non un tasso di trasferimento",
      "Una frequenza di CPU, non una misura di throughput dei dati",
      "Un tempo di risposta, non una misura di volume per secondo"
    ],
    correct: [0],
    exp: "Gbps = gigabit per secondo, misura la velocità di trasferimento (banda). Attenzione: 1 byte = 8 bit, quindi 1 Gbps ≈ 125 MB/s. Non va confuso con lo spazio su disco (GB)."
  },
  {
    id: "u02076", topic: "Alta disponibilità",
    q: "Cosa si intende per alta disponibilità (high availability)?",
    opts: [
      "Un sistema progettato per restare operativo anche in caso di guasti",
      "Un sistema molto veloce ma spesso spento",
      "Un sistema con tanto spazio su disco",
      "Un sistema senza connessione di rete"
    ],
    correct: [0],
    exp: "L'alta disponibilità mira a minimizzare i tempi di inattività tramite ridondanza, failover e bilanciamento: se un componente si guasta, un altro subentra così il servizio resta attivo."
  },
  {
    id: "u02077", topic: "Container: portabilità",
    q: "Perché si dice che un container garantisce portabilità?",
    opts: [
      "L'app e le sue dipendenze girano identiche su qualsiasi host con il runtime",
      "Perché può essere trasportato solo su chiavetta USB",
      "Perché funziona solo su un tipo di computer",
      "Perché non contiene alcuna dipendenza"
    ],
    correct: [0],
    exp: "Il container impacchetta app e dipendenze in un ambiente standard: gira uguale su portatile, server on-premise o cloud, purché ci sia il runtime (es. Docker). Elimina i problemi 'sul mio PC funziona'."
  },
  {
    id: "u02078", topic: "Bootloader",
    q: "Cos'è il bootloader?",
    opts: [
      "Il programma che carica il sistema operativo all'avvio",
      "Un antivirus di sistema",
      "Un tipo di rete locale",
      "La memoria cache della CPU"
    ],
    correct: [0],
    exp: "Il bootloader (es. GRUB) è avviato dal firmware e carica il kernel del SO in memoria, avviando il sistema. Può anche permettere di scegliere tra più sistemi operativi installati."
  },
  {
    id: "u02079", topic: "Rete: protocollo",
    q: "Cos'è un protocollo di rete?",
    opts: [
      "Un insieme di regole condivise per far comunicare i dispositivi",
      "Un cavo di rete fisico",
      "Un tipo di computer",
      "Un file di configurazione locale"
    ],
    correct: [0],
    exp: "Un protocollo definisce formato dei messaggi, tempi e regole della comunicazione, così dispositivi diversi si capiscono (es. TCP/IP, HTTP). Senza protocolli comuni la comunicazione sarebbe impossibile."
  },
  {
    id: "u02080", topic: "Memoria: swap",
    q: "Cosa succede quando il sistema fa 'swapping' intenso?",
    opts: [
      "Le prestazioni calano",
      "Il computer diventa più veloce",
      "La RAM viene cancellata",
      "La CPU si spegne"
    ],
    correct: [0],
    exp: "Se la RAM è insufficiente, il SO sposta pagine su disco (swap). Uno swapping eccessivo (thrashing) rallenta molto il sistema, perché il disco è molto più lento della RAM."
  },
  {
    id: "u02081", topic: "Cloud: costi",
    q: "Il modello 'pay-as-you-go' del cloud significa:",
    opts: [
      "Si paga in base all'effettivo utilizzo delle risorse",
      "Si paga una cifra fissa a vita",
      "Il servizio è sempre gratuito",
      "Si paga solo l'hardware fisico acquistato"
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
      "cd",
      "echo"
    ],
    correct: [0],
    exp: "ps elenca i processi; top/htop li mostrano in tempo reale con uso di CPU e memoria. ls elenca file, cd cambia cartella, echo stampa testo."
  },
  {
    id: "u02083", topic: "Isolamento",
    q: "Due VM sullo stesso host fisico condividono lo stesso sistema operativo?",
    opts: [
      "No: ogni VM ha il proprio sistema operativo indipendente",
      "Sì, condividono sempre lo stesso SO",
      "Sì, ma solo il kernel",
      "No, ma condividono gli stessi file utente"
    ],
    correct: [0],
    exp: "Ogni VM ha un SO ospite completo e indipendente, isolato dalle altre. Sono i CONTAINER a condividere il kernel del SO host, non le VM."
  },
  {
    id: "u02084", topic: "Rete: gateway",
    q: "Cos'è il gateway predefinito (default gateway)?",
    opts: [
      "Il dispositivo (di solito il router) che instrada il traffico verso altre reti",
      "Il nome del computer principale",
      "Un tipo di firewall software",
      "La velocità massima della rete"
    ],
    correct: [0],
    exp: "Il default gateway è l'indirizzo (tipicamente il router) a cui un dispositivo invia i pacchetti destinati a reti diverse dalla propria, es. per raggiungere internet."
  },
  {
    id: "u02085", topic: "Sistema operativo: tipi",
    q: "Quale di questi è un sistema operativo? (una o più risposte)",
    opts: [
      "Linux",
      "Windows",
      "macOS",
      "MySQL"
    ],
    correct: [0,1,2],
    exp: "Linux, Windows e macOS sono sistemi operativi. MySQL è invece un DBMS (sistema di gestione di database), un'applicazione che gira sopra il sistema operativo."
  },
  {
    id: "u02086", topic: "Rete: ISO/OSI applicazione",
    q: "A quale livello OSI opera il protocollo HTTP?",
    opts: [
      "Applicazione",
      "Trasporto",
      "Rete",
      "Fisico"
    ],
    correct: [0],
    exp: "HTTP è un protocollo di livello applicazione (il più alto): definisce come client e server web si scambiano richieste e risposte. Sotto usa TCP (trasporto) e IP (rete)."
  },
  {
    id: "u02087", topic: "Virtualizzazione: overcommit",
    q: "L'overcommitment delle risorse in virtualizzazione significa:",
    opts: [
      "Assegnare alle VM più risorse virtuali di quelle fisiche realmente presenti",
      "Lasciare metà hardware sempre inutilizzato",
      "Usare esattamente le risorse fisiche disponibili",
      "Disattivare la virtualizzazione"
    ],
    correct: [0],
    exp: "L'overcommit assegna alle VM, nel complesso, più CPU/RAM di quelle fisiche, contando sul fatto che non tutte le VM le usino al massimo contemporaneamente. Va gestito per evitare cali di prestazioni."
  },
  {
    id: "u02088", topic: "Processo: PID",
    q: "Cos'è il PID di un processo?",
    opts: [
      "Un numero identificativo univoco del processo",
      "La priorità del processo",
      "La quantità di RAM usata",
      "Il nome del programma"
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
      "IP → MAC",
      "DNS → DHCP"
    ],
    correct: [0],
    exp: "HTTPS è la versione cifrata (via TLS) di HTTP. TCP/UDP sono protocolli diversi, non uno la versione sicura dell'altro; IP e MAC sono indirizzi di livelli diversi; DNS e DHCP hanno scopi diversi."
  },
  {
    id: "u02090", topic: "Failover",
    q: "Cos'è il failover?",
    opts: [
      "Il passaggio automatico a un sistema di riserva quando quello primario si guasta",
      "Un guasto irreversibile del sistema",
      "Un aumento della velocità della rete",
      "La cancellazione dei backup"
    ],
    correct: [0],
    exp: "Il failover è il meccanismo per cui, se il componente attivo si guasta, un componente di riserva subentra automaticamente mantenendo il servizio: è alla base dell'alta disponibilità."
  },
  {
    id: "u02091", topic: "SO: modalità",
    q: "Perché esistono user mode e kernel mode?",
    opts: [
      "Per proteggere il sistema: solo il kernel può eseguire operazioni privilegiate",
      "Per rendere il computer più lento",
      "Perché gli utenti preferiscono due modalità",
      "Per raddoppiare la memoria"
    ],
    correct: [0],
    exp: "La separazione tra user e kernel mode è una protezione: un programma difettoso o malevolo in user mode non può danneggiare direttamente hardware e sistema, deve passare dal kernel controllato."
  },
  {
    id: "u02092", topic: "Rete: banda vs latenza",
    q: "Per una videochiamata fluida conta soprattutto:",
    opts: [
      "Bassa latenza (poco ritardo)",
      "Grande capacità del disco",
      "Alta frequenza della CPU",
      "Molte porte USB"
    ],
    correct: [0],
    exp: "Nelle comunicazioni in tempo reale (videochiamate, giochi) la bassa latenza è cruciale: un ritardo elevato rende la conversazione scattosa, anche con banda abbondante."
  },
  {
    id: "u02093", topic: "Container: Dockerfile",
    q: "Cos'è un Dockerfile?",
    opts: [
      "Un file di testo con le istruzioni per costruire un'immagine Docker",
      "Un container già avviato a partire da un'immagine",
      "Un log di errori",
      "Una rete virtuale"
    ],
    correct: [0],
    exp: "Il Dockerfile descrive passo passo come costruire un'immagine (SO base, dipendenze, codice, comando di avvio). Da esso si crea l'immagine, da cui si avviano i container."
  },
  {
    id: "u02094", topic: "Rete: broadcast",
    q: "Un messaggio 'broadcast' in una rete è:",
    opts: [
      "Un messaggio inviato a tutti i dispositivi della rete locale",
      "Un messaggio a un solo destinatario",
      "Un messaggio cifrato punto a punto",
      "Un errore di trasmissione"
    ],
    correct: [0],
    exp: "Il broadcast invia lo stesso messaggio a tutti i dispositivi del segmento di rete. L'unicast va a un singolo destinatario, il multicast a un gruppo selezionato."
  },
  {
    id: "u02095", topic: "SO real-time",
    q: "Un sistema operativo real-time è progettato per:",
    opts: [
      "Garantire risposte entro tempi rigidamente definiti",
      "Essere il più economico possibile",
      "Avere la grafica più bella",
      "Occupare meno spazio su disco"
    ],
    correct: [0],
    exp: "Un SO real-time garantisce che le operazioni critiche siano completate entro scadenze temporali precise (deterministiche): essenziale in ambiti come automotive, avionica, controllo industriale."
  },
  {
    id: "u02096", topic: "Cloud: regioni",
    q: "Perché i provider cloud offrono più 'regioni' geografiche?",
    opts: [
      "Per ridurre la latenza verso gli utenti e rispettare vincoli normativi sui dati",
      "Per rendere il servizio più costoso",
      "Per obbligare a usare un solo datacenter",
      "Per cancellare i dati periodicamente"
    ],
    correct: [0],
    exp: "Distribuire i datacenter in regioni diverse avvicina i servizi agli utenti (meno latenza), aumenta la resilienza ai disastri e permette di rispettare leggi che impongono dove tenere i dati."
  },
  {
    id: "u02097", topic: "Processo: fork",
    q: "L'operazione 'fork' in Unix:",
    opts: [
      "Crea un nuovo processo figlio copia di quello padre",
      "Cancella un processo",
      "Aumenta la RAM",
      "Chiude la connessione di rete"
    ],
    correct: [0],
    exp: "fork() genera un nuovo processo (figlio) quasi identico al padre, con un proprio PID e spazio di memoria. È il meccanismo classico Unix per creare nuovi processi."
  },
  {
    id: "u02098", topic: "Rete: firewall stateful",
    q: "Un firewall 'stateful' rispetto a uno 'stateless':",
    opts: [
      "Tiene traccia dello stato delle connessioni per decidere cosa permettere",
      "Non controlla mai pacchetti o stato delle connessioni",
      "È sempre meno sicuro indipendentemente dalle regole configurate",
      "Funziona solo in reti isolate senza accesso a Internet"
    ],
    correct: [0],
    exp: "Il firewall stateful conosce il contesto delle connessioni (es. una risposta a una richiesta legittima viene ammessa), offrendo controllo più fine dello stateless, che valuta ogni pacchetto isolatamente."
  },
  {
    id: "u02099", topic: "Virtualizzazione: migrazione",
    q: "La 'live migration' di una VM consiste nel:",
    opts: [
      "Spostare una VM in esecuzione su un altro host senza interromperla",
      "Cancellare la VM e ricrearla da zero",
      "Convertire la VM in un file di testo",
      "Spegnere l'host fisico"
    ],
    correct: [0],
    exp: "La live migration trasferisce una VM attiva da un server fisico a un altro senza fermare i servizi: utile per manutenzione hardware, bilanciamento del carico e alta disponibilità."
  },
  {
    id: "u02100", topic: "SO: virtualizzazione hardware",
    q: "Le estensioni hardware come Intel VT-x o AMD-V servono a:",
    opts: [
      "Supportare in modo efficiente la virtualizzazione a livello di CPU",
      "Aumentare la frequenza di clock del processore",
      "Gestire il raffreddamento della CPU sotto carico",
      "Ampliare la memoria cache di primo livello"
    ],
    correct: [0],
    exp: "VT-x (Intel) e AMD-V sono estensioni del processore che rendono la virtualizzazione più efficiente, permettendo alle VM di eseguire istruzioni con minor overhead. Sono spesso da abilitare nel BIOS/UEFI."
  },
  // === AGGIUNGI NUOVE DOMANDE SO RETI VIRTUALIZZAZIONE QUI ===
]);
