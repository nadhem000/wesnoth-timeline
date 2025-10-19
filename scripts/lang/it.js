const translations_it = {
	// Interface
	"timeline_title": "Cronologia di Wesnoth",
	"timeline_subtitle": "Esplora la storia cronologica del regno di Wesnoth e delle regioni circostanti",
	"language_label": "Lingua:",
	"theme_label": "Tema:",
	"theme_light": "Chiaro",
	"theme_dark": "Scuro",
	"footer_text": "Cronologia di Wesnoth &copy; 2025 - Basata sulla storia ufficiale di Battle for Wesnoth",
	"keywords_title": "Filtra per parole chiave",
	"reset_highlights": "Reimposta evidenziazioni",
	"toggle_all": "Mostra/Nascondi tutto",
	"no_results": "Nessun risultato trovato per questa parola chiave",
    "filters_expand": "Espandi",
    "filters_collapse": "Comprimi", 
    "filter_all": "Tutti",
    "filter_other": "Altro",
	"how_to_title": "Come fare",
	"how_to_modal_title": "Guida pratica",
	"notifications_label": "Notifiche:",
	"notifications_enabled": "Abilitate",
	"notifications_disabled": "Disabilitate", 
	"notifications_blocked": "Bloccate",
	"notifications_unsupported": "Non supportate",
	"notification_prompt_title": "Rimani Aggiornato",
	"notification_prompt_message": "Ricevi notifiche su nuovi eventi della timeline e aggiornamenti",
	"notification_prompt_enable": "Abilita",
	"notification_prompt_later": "Più tardi",
	"notification_test_title": "Notifica di Test",
	"notification_test_body": "Questa è una notifica di test da Wesnoth Timeline",
	"notification_update_title": "Timeline Aggiornata",
	"notification_update_body": "Nuovo contenuto storico disponibile",
	"notification_digest_title": "Riepilogo Wesnoth",
	"notification_digest_body": "Scopri gli eventi storici in primo piano di oggi",
	
	// Titoli delle schede
	"how_to_tab_language": "Aggiungi lingua",
	"how_to_tab_era": "Aggiungi epoca",
	"how_to_tab_event": "Aggiungi evento",
	"how_to_tab_filter": "Aggiungi filtro",
	
	// Sezione Lingua
	"how_to_language_title": "Come aggiungere una nuova lingua",
	"how_to_language_step1_title": "Crea file della lingua",
	"how_to_language_step1_desc": "Crea un nuovo file JavaScript nella directory scripts/lang/ con il codice della lingua (es. it.js per l'italiano).",
	"how_to_language_step2_title": "Aggiorna HTML",
	"how_to_language_step2_desc": "Aggiungi l'opzione della lingua al selettore di lingua in index.html:",
	"how_to_language_step3_title": "Registra lingua",
	"how_to_language_step3_desc": "Aggiungi la lingua all'oggetto translations in translation-manager.js:",
	"how_to_language_rec1": "Usa codici ISO per i nomi dei file",
	"how_to_language_rec2": "Mantieni le chiavi di traduzione consistenti tra le lingue",
	"how_to_language_rec3": "Testa i layout da destra a sinistra per lingue come l'arabo",
	
	// Sezione Epoca
	"how_to_era_title": "Come aggiungere una nuova epoca",
	"how_to_era_step1_title": "Aggiungi sezione epoca in HTML",
	"how_to_era_step1_desc": "Aggiungi una nuova sezione epoca nel file index.html all'interno del contenuto delle epoche:",
	"how_to_era_step2_title": "Aggiungi traduzioni",
	"how_to_era_step2_desc": "Aggiungi le chiavi di traduzione per la nuova epoca in tutti i file della lingua:",
	"how_to_era_rec1": "Usa una denominazione consistente per gli ID epoca",
	"how_to_era_rec2": "Includi contenuto HTML ricco nelle descrizioni",
	"how_to_era_rec3": "Aggiungi icone appropriate per coerenza visiva",
	
	// Sezione Evento
	"how_to_event_title": "Come aggiungere un nuovo evento temporale",
	"how_to_event_step1_title": "Aggiungi dati evento",
	"how_to_event_step1_desc": "Aggiungi un nuovo oggetto evento all'array timelineData in timeline-data.js:",
	"how_to_event_step2_title": "Aggiungi traduzioni",
	"how_to_event_step2_desc": "Aggiungi le chiavi di traduzione per l'evento in tutti i file della lingua:",
	"how_to_event_rec1": "Usa schemi di chiavi di traduzione consistenti",
	"how_to_event_rec2": "Includi appropriato markup HTML nelle descrizioni",
	"how_to_event_rec3": "Assegna valori corretti per epoca e categoria",
	
	// Sezione Filtro
	"how_to_filter_title": "Come aggiungere un nuovo filtro",
	"how_to_filter_step1_title": "Aggiorna logica filtri",
	"how_to_filter_step1_desc": "Modifica le funzioni di filtro in timeline-manager.js per gestire il tuo nuovo tipo di filtro:",
	"how_to_filter_step2_title": "Aggiorna applicazione filtri",
	"how_to_filter_step2_desc": "Aggiorna le funzioni applyFilters() e passesFilters() per includere il tuo nuovo filtro:",
	"how_to_filter_rec1": "Usa nomi filtro descrittivi",
	"how_to_filter_rec2": "Testa accuratamente le combinazioni di filtri",
	"how_to_filter_rec3": "Assicura una corretta gestione degli stati",
	
	// Comune
	"how_to_recommendations": "Raccomandazioni",
	
	// Traduzioni del nuovo filtro
	"filters_title": "Filtra Eventi",
	"filter_category": "Categoria",
	"filter_campaign": "Campagne",
	"filter_universe": "Universo",
	"apply_filters": "Applica Filtri",
	"reset_filters": "Reimposta Filtri",
	"no_filter_results": "Nessun evento corrisponde ai filtri selezionati",
	"filter_mainline": "Principale",
	"filter_umc": "UMC",
	"filter_mainline_non_canon": "Principale non canon",
	"filter_universe_wesnoth": "Wesnoth",
	"meta_category": "Categoria",
	"meta_universe": "Universo",
	"meta_campaigns": "Campagne",
	"intro_title": "Informazioni su questa cronologia",
	"intro_expand": "Espandi",
	"intro_collapse": "Comprimi",
	"intro_text": "Questa è la cronologia storica ufficiale del paese di Wesnoth e delle regioni circostanti, ricavata da resoconti scritti e storie orali tramandate attraverso le generazioni. Le parti delle voci racchiuse tra parentesi e contenenti un punto interrogativo sono informazioni presunte o non confermate. La storia è ordinata per era, e all'interno dell'era per data, utilizzando la Fondazione di Wesnoth come base. BW=Prima di Wesnoth, YW=Anni Wesnoth. Funzionano allo stesso modo di BC e AD nel nostro sistema di cronologia. Ognuna delle ere è riassunta prima che inizi la cronologia per quell'era. La storia del Grande Continente è un argomento di studio attivo.",
	"intro_text_2": "Il mondo in cui risiede Wesnoth si chiama Irdya. Prima della Grande Caduta e dell'era tecnologica (non cronachizzata), questo nome è usato solo raramente.",
	"spoiler_warning": "Avviso spoiler! Questa pagina contiene spoiler della trama di diverse campagne.",
	
	// Campaign names
	"campaign_the_rise_of_wesnoth": "L'Ascesa di Wesnoth",
	"campaign_legend_of_wesmere": "Leggenda di Wesmere",
	"campaign_a_tale_of_two_brothers": "Una Storia di Due Fratelli",
	"campaign_descent_into_darkness": "Discesa nell'Oscurità",
	"campaign_delfadors_memoirs": "Memorie di Delfador",
	"campaign_liberty": "Libertà",
	"campaign_heir_to_the_throne": "Erede al Trono",
	"campaign_northern_rebirth": "Rinascita del Nord",
	"campaign_the_hammer_of_thursagan": "Il Martello di Thursagan",
	"campaign_eastern_invasion": "Invasione Orientale",
	"campaign_dead_water": "Acque Morte",
	"campaign_under_the_burning_suns": "Sotto i Soli Roventi",
	
	//  Era translations
	"general_eras_title": "Ere Generali",
	"eras_expand": "Espandi",
	"eras_collapse": "Comprimi", 
	"era_expand": "Espandi",
	"era_collapse": "Comprimi",
	"coming_soon": "Prossimamente",
	
	// Era titles
	"era_founding_title": "La Fondazione di Wesnoth",
	"era_taming_title": "L'Addomesticamento della Natura Selvaggia",
	"era_golden_age_title": "L'Età dell'Oro di Wesnoth",
	"era_first_dark_age_title": "La Prima Età Oscura di Wesnoth",
	"era_turmoil_title": "I Tumulti di Asheviere",
	"era_fear_title": "L'Era della Paura", 
	"era_silver_age_title": "L'Età d'Argento di Wesnoth",
	"era_legacy_title": "L'Eredità di Karun Occhio Nero",
	"era_after_fall_title": "Dopo la Grande Caduta",
	
	// Eras
	"era_founding_title": "La Fondazione di Wesnoth",
	"era_founding_description": "Durante l'epoca della Fondazione di Wesnoth, c'erano due importanti località geografiche, queste erano l'<span class='WTL-timeline-manager-place' data-place='Green Isle'>Isola Verde</span> e il <span class='WTL-timeline-manager-place' data-place='Great Continent'>Grande Continente</span>. <span class='WTL-timeline-manager-person' data-person='Haldric'>Haldric</span> è la principale figura storica di questo periodo. Quest'epoca si conclude con la fondazione di <span class='WTL-timeline-manager-place' data-place='Wesnoth'>Wesnoth</span> come nazione nel <span class='WTL-timeline-manager-place' data-place='Great Continent'>Grande Continente</span>, e con gli <span class='WTL-timeline-manager-faction' data-faction='orcs'>orchi</span> che attaccano sia gli <span class='WTL-timeline-manager-faction' data-faction='elves'>elfi</span> che gli <span class='WTL-timeline-manager-faction' data-faction='humans'>uomini</span> dal mare.",
	
	// Timeline items with HTML structure
	"inhabitants_early_title": "Primi Abitanti",
	"inhabitants_early_desc": "Gli <span class='WTL-timeline-manager-faction' data-faction='elves'>elfi</span> e i <span class='WTL-timeline-manager-faction' data-faction='dwarves'>nani</span> abitano il <span class='WTL-timeline-manager-place' data-place='Great Continent'>Grande Continente</span>. Gli <span class='WTL-timeline-manager-faction' data-faction='humans'>umani</span> abitano il <span class='WTL-timeline-manager-place' data-place='distant West'>lontano Occidente</span>. Il popolo di <span class='WTL-timeline-manager-person' data-person='Haldric'>Haldric</span> colonizza l'<span class='WTL-timeline-manager-place' data-place='Green Isle'>Isola Verde</span> da un continente più a ovest.",
	
	"lich_lords_title": "Arrivo dei Signori dei Lich",
	"lich_lords_desc": "I <span class='WTL-timeline-manager-faction' data-faction='Lich-Lords'>Signori dei Lich</span> arrivano sull'<span class='WTL-timeline-manager-place' data-place='Green Isle'>Isola Verde</span> dopo aver perso una guerra nel <span class='WTL-timeline-manager-place' data-place='distant West'>lontano Occidente</span>. Dopo una lunga guerra, il popolo di <span class='WTL-timeline-manager-person' data-person='Haldric'>Haldric</span> arriva a dominare l'<span class='WTL-timeline-manager-place' data-place='Green Isle'>Isola Verde</span>. I '<span class='WTL-timeline-manager-faction' data-faction='Wesfolk'>Uomini dell'Ovest</span>' e i loro <span class='WTL-timeline-manager-faction' data-faction='Lich-Lords'>Signori dei Lich</span> vengono respinti in terre marginali.",
	
	"discovery_title": "Scoperta del Grande Continente",
	"discovery_desc": "Il Principe Erede di <span class='WTL-timeline-manager-place' data-place='Southbay'>Southbay</span> scopre il <span class='WTL-timeline-manager-place' data-place='Great Continent'>Grande Continente</span>.",
	
	"prince_death_title": "Morte del Principe Erede",
	"prince_death_desc": "In seguito a questi viaggi nel <span class='WTL-timeline-manager-place' data-place='Great Continent'>Grande Continente</span>, il Principe Erede maggiore si ammala e muore. Suo fratello minore è implicato in una cospirazione per ucciderlo. Come diversivo, il Principe minore inizia una guerra con gli <span class='WTL-timeline-manager-faction' data-faction='Wesfolk'>Uomini dell'Ovest</span> e i loro <span class='WTL-timeline-manager-faction' data-faction='Lich-Lords'>Signori dei Lich</span>.",
	
	"settlers_arrival_title": "Arrivo dei Colonizzatori",
	"settlers_arrival_desc": "I colonizzatori <span class='WTL-timeline-manager-faction' data-faction='humans'>umani</span>, guidati dal Principe <span class='WTL-timeline-manager-person' data-person='Haldric'>Haldric</span>, arrivano in gran numero sulla costa occidentale del <span class='WTL-timeline-manager-place' data-place='Great Continent'>Grande Continente</span> (l'approdo avviene nella futura <span class='WTL-timeline-manager-place' data-place='Bay of Pearls'>Baia delle Perle</span>). Gli <span class='WTL-timeline-manager-faction' data-faction='humans'>umani</span> arrivano nel mezzo di una disputa latente tra gli <span class='WTL-timeline-manager-faction' data-faction='elves'>elfi</span> e i <span class='WTL-timeline-manager-faction' data-faction='dwarves'>nani</span>.",
	
	"wesnoth_founding_title": "Fondazione di Wesnoth",
	"wesnoth_founding_desc": "A <span class='WTL-timeline-manager-person' data-person='Haldric'>Haldric</span> vengono concesse le pianure a nord e a sud del <span class='WTL-timeline-manager-place' data-place='Great River'>Grande Fiume</span>. <span class='WTL-timeline-manager-person' data-person='Haldric'>Haldric</span> accetta un Patto di Difesa Reciproca con gli <span class='WTL-timeline-manager-faction' data-faction='elves'>elfi</span>. <span class='WTL-timeline-manager-person' data-person='Haldric'>Haldric</span> fonda la nazione di <span class='WTL-timeline-manager-place' data-place='Wesnoth'>Wesnoth</span> nella pianura centrale a sud del <span class='WTL-timeline-manager-place' data-place='Great River'>Grande Fiume</span>. Inizia il regno di <span class='WTL-timeline-manager-person' data-person='Haldric I'>Haldric I</span> (precedentemente principe Haldric).",
	
	"orcs_arrival_title": "Gli Orchi Arrivano sul Grande Continente",
	"orcs_arrival_desc": "Gli <span class='WTL-timeline-manager-faction' data-faction='orcs'>orchi</span>, seguendo le navi in fuga dall'<span class='WTL-timeline-manager-place' data-place='Green Isle'>Isola Verde</span>, iniziano ad arrivare sul <span class='WTL-timeline-manager-place' data-place='Great Continent'>Grande Continente</span>. Questi <span class='WTL-timeline-manager-faction' data-faction='orcs'>orchi</span> vengono sconfitti dalle forze di <span class='WTL-timeline-manager-person' data-person='Haldric'>Haldric</span>. Alcuni degli orchi sopravvissuti fuggono nuovamente verso l'<span class='WTL-timeline-manager-place' data-place='Green Isle'>Isola Verde</span>, altri si spostano per attaccare gli <span class='WTL-timeline-manager-faction' data-faction='elves'>elfi</span>.",
	
	"winds_of_fate_title": "Venti del Destino",
	"winds_of_fate_desc": "I <span class='WTL-timeline-manager-faction' data-faction='Drakes'>Draghi</span> arrivano sul <span class='WTL-timeline-manager-place' data-place='Great Continent'>Grande Continente</span>. <span class='WTL-timeline-manager-place' data-place='Elensefar'>Elensefar</span> e <span class='WTL-timeline-manager-place' data-place='Wesmere'>Wesmere</span> vengono saccheggiati dai <span class='WTL-timeline-manager-faction' data-faction='Drakes'>Draghi</span>. I <span class='WTL-timeline-manager-faction' data-faction='Drakes'>draghi</span> costruiscono un nido a nord di <span class='WTL-timeline-manager-place' data-place='Wesmere'>Wesmere</span>.",
	
	"second_orc_wave_title": "Seconda Ondata di Orchi",
	"second_orc_wave_desc": "Una seconda ondata di <span class='WTL-timeline-manager-faction' data-faction='orcs'>orchi</span> arriva dall'<span class='WTL-timeline-manager-place' data-place='Green Isle'>Isola Verde</span>; questi <span class='WTL-timeline-manager-faction' data-faction='orcs'>orchi</span> iniziano a reclamare vaste porzioni del <span class='WTL-timeline-manager-place' data-place='Great Continent'>Grande Continente</span> settentrionale per sé stessi. <span class='WTL-timeline-manager-person' data-person='Erlornas'>Erlornas</span> di <span class='WTL-timeline-manager-place' data-place='Wesmere'>Wesmere</span> è coinvolto nel primo scontro elfico diretto con gli <span class='WTL-timeline-manager-faction' data-faction='orcs'>orchi</span>.",
	
	"haldric_death_title": "Morte di Haldric I",
	"haldric_death_desc": "<span class='WTL-timeline-manager-person' data-person='Haldric I'>Haldric I</span> muore. <span class='WTL-timeline-manager-person' data-person='Haldric II'>Haldric II</span> ascende al trono. <span class='WTL-timeline-manager-faction' data-faction='humans'>Umani</span> ed <span class='WTL-timeline-manager-faction' data-faction='elves'>elfi</span> sconfiggono decisamente gli <span class='WTL-timeline-manager-faction' data-faction='orcs'>orchi</span> a <span class='WTL-timeline-manager-place' data-place='Tath'>Tath</span>, fermando così l'avanzata orchessa."
};