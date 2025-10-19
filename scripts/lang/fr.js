const translations_fr = {
	// Interface
	"timeline_title": "Chronologie de Wesnoth",
	"timeline_subtitle": "Explorez l'histoire chronologique du royaume de Wesnoth et des régions environnantes",
	"language_label": "Langue :",
	"theme_label": "Thème :",
	"theme_light": "Clair",
	"theme_dark": "Sombre",
	"footer_text": "Chronologie de Wesnoth &copy; 2025 - Basé sur l'histoire officielle de Battle for Wesnoth",
	"keywords_title": "Filtrer par mots-clés",
	"reset_highlights": "Réinitialiser les surlignements",
	"toggle_all": "Afficher/Masquer tout",
	"no_results": "Aucun résultat trouvé pour ce mot-clé",
    "filters_expand": "Développer",
    "filters_collapse": "Réduire",
    "filter_all": "Tous",
    "filter_other": "Autre",
	"how_to_title": "Comment faire",
	"how_to_modal_title": "Guide pratique",
	
	// Titres des onglets
	"how_to_tab_language": "Ajouter une langue",
	"how_to_tab_era": "Ajouter une époque",
	"how_to_tab_event": "Ajouter un événement", 
	"how_to_tab_filter": "Ajouter un filtre",
	
	// Section Langue
	"how_to_language_title": "Comment ajouter une nouvelle langue",
	"how_to_language_step1_title": "Créer un fichier de langue",
	"how_to_language_step1_desc": "Créez un nouveau fichier JavaScript dans le dossier scripts/lang/ avec le code de la langue (ex: fr.js pour le français).",
	"how_to_language_step2_title": "Mettre à jour le HTML",
	"how_to_language_step2_desc": "Ajoutez l'option de langue au sélecteur de langue dans index.html :",
	"how_to_language_step3_title": "Enregistrer la langue",
	"how_to_language_step3_desc": "Ajoutez la langue à l'objet translations dans translation-manager.js :",
	"how_to_language_rec1": "Utilisez les codes ISO pour les noms de fichiers",
	"how_to_language_rec2": "Maintenez des clés de traduction cohérentes entre les langues",
	"how_to_language_rec3": "Testez les dispositions de droite à gauche pour les langues comme l'arabe",
	
	// Section Époque
	"how_to_era_title": "Comment ajouter une nouvelle époque",
	"how_to_era_step1_title": "Ajouter une section époque dans le HTML",
	"how_to_era_step1_desc": "Ajoutez une nouvelle section époque dans le fichier index.html dans le contenu des époques :",
	"how_to_era_step2_title": "Ajouter les traductions",
	"how_to_era_step2_desc": "Ajoutez les clés de traduction pour la nouvelle époque dans tous les fichiers de langue :",
	"how_to_era_rec1": "Utilisez une nomenclature cohérente pour les ID d'époque",
	"how_to_era_rec2": "Incluez du contenu HTML riche dans les descriptions",
	"how_to_era_rec3": "Ajoutez des icônes appropriées pour une cohérence visuelle",
	
	// Section Événement
	"how_to_event_title": "Comment ajouter un nouvel événement chronologique",
	"how_to_event_step1_title": "Ajouter des données d'événement",
	"how_to_event_step1_desc": "Ajoutez un nouvel objet événement au tableau timelineData dans timeline-data.js :",
	"how_to_event_step2_title": "Ajouter les traductions",
	"how_to_event_step2_desc": "Ajoutez les clés de traduction pour l'événement dans tous les fichiers de langue :",
	"how_to_event_rec1": "Utilisez des modèles de clés de traduction cohérents",
	"how_to_event_rec2": "Incluez un balisage HTML approprié dans les descriptions",
	"how_to_event_rec3": "Attribuez les valeurs correctes d'époque et de catégorie",
	
	// Section Filtre
	"how_to_filter_title": "Comment ajouter un nouveau filtre",
	"how_to_filter_step1_title": "Mettre à jour la logique des filtres",
	"how_to_filter_step1_desc": "Modifiez les fonctions de filtrage dans timeline-manager.js pour gérer votre nouveau type de filtre :",
	"how_to_filter_step2_title": "Mettre à jour l'application des filtres",
	"how_to_filter_step2_desc": "Mettez à jour les fonctions applyFilters() et passesFilters() pour inclure votre nouveau filtre :",
	"how_to_filter_rec1": "Utilisez des noms de filtres descriptifs",
	"how_to_filter_rec2": "Testez minutieusement les combinaisons de filtres",
	"how_to_filter_rec3": "Assurez une gestion appropriée des états",
	
	// Commun
	"how_to_recommendations": "Recommandations",
	
	// filter translations
	"filters_title": "Filtrer les événements",
	"filter_category": "Catégorie",
	"filter_campaign": "Campagnes",
	"filter_universe": "Univers",
	"apply_filters": "Appliquer les filtres",
	"reset_filters": "Réinitialiser les filtres",
	"no_filter_results": "Aucun événement ne correspond aux filtres sélectionnés",
	"filter_mainline": "Principale",
	"filter_umc": "UMC",
	"filter_mainline_non_canon": "Principale non-canon", 
	"filter_universe_wesnoth": "Wesnoth",
	"meta_category": "Catégorie",
	"meta_universe": "Univers",
	"meta_campaigns": "Campagnes",
	"intro_title": "À propos de cette chronologie",
	"intro_expand": "Développer",
	"intro_collapse": "Réduire",
	"intro_text": "Ceci est l'histoire chronologique officielle du pays de Wesnoth et des régions environnantes, recueillie à partir de récits écrits et d'histoires orales transmises à travers les générations. Les parties des entrées entourées de parenthèses et contenant un point d'interrogation sont des informations supposées ou non confirmées. L'histoire est triée par ère, et au sein de l'ère par date, en utilisant la Fondation de Wesnoth comme base. BW = Avant Wesnoth, YW = Années Wesnoth. Elles fonctionnent de la même manière que BC et AD dans notre système de chronologie. Chacune des ères est résumée avant que la chronologie de cette ère ne commence. Cette histoire du Grand Continent fait l'objet de recherches actives.",
	"intro_text_2": "Le monde dans lequel réside Wesnoth s'appelle Irdya. Avant la Grande Chute et l'ère technologique (non chroniquée), ce nom n'est que rarement utilisé.",
	"spoiler_warning": "Avertissement spoiler ! Cette page contient des spoilers de l'intrigue de plusieurs campagnes.",
	
	// Campaign names
	"campaign_the_rise_of_wesnoth": "L'Avènement de Wesnoth",
	"campaign_legend_of_wesmere": "La Légende de Wesmere",
	"campaign_a_tale_of_two_brothers": "Un Conte de Deux Frères",
	"campaign_descent_into_darkness": "Descente dans les Ténèbres",
	"campaign_delfadors_memoirs": "Mémoires de Delfador",
	"campaign_liberty": "Liberté",
	"campaign_heir_to_the_throne": "Héritier du Trône",
	"campaign_northern_rebirth": "Renaissance du Nord",
	"campaign_the_hammer_of_thursagan": "Le Marteau de Thursagan",
	"campaign_eastern_invasion": "Invasion de l'Est",
	"campaign_dead_water": "Eaux Mortes",
	"campaign_under_the_burning_suns": "Sous les Soleils Brûlants",
	
	//  Era translations
	"general_eras_title": "Ères Générales",
	"eras_expand": "Développer",
	"eras_collapse": "Réduire",
	"era_expand": "Développer",
	"era_collapse": "Réduire", 
	"coming_soon": "Bientôt disponible",
	
	// Era titles
	"era_founding_title": "La Fondation de Wesnoth",
	"era_taming_title": "L'Apprivoisement de la Nature Sauvage",
	"era_golden_age_title": "L'Âge d'Or de Wesnoth",
	"era_first_dark_age_title": "Le Premier Âge Sombre de Wesnoth",
	"era_turmoil_title": "Les Troubles d'Asheviere", 
	"era_fear_title": "L'Ère de la Peur",
	"era_silver_age_title": "L'Âge d'Argent de Wesnoth",
	"era_legacy_title": "L'Héritage de Karun Œil-Noir",
	"era_after_fall_title": "Après la Grande Chute",
	
	// Eras
	"era_founding_title": "La Fondation de Wesnoth",
	"era_founding_description": "Durant l'ère de la Fondation de Wesnoth, il y avait deux localisations géographiques importantes, à savoir l'<span class='WTL-timeline-manager-place' data-place='Green Isle'>Île Verte</span> et le <span class='WTL-timeline-manager-place' data-place='Great Continent'>Grand Continent</span>. <span class='WTL-timeline-manager-person' data-person='Haldric'>Haldric</span> est la figure historique principale de cette époque. Cet âge se termine avec la fondation de <span class='WTL-timeline-manager-place' data-place='Wesnoth'>Wesnoth</span> en tant que pays dans le <span class='WTL-timeline-manager-place' data-place='Great Continent'>Grand Continent</span>, et avec les <span class='WTL-timeline-manager-faction' data-faction='orcs'>orcs</span> attaquant à la fois les <span class='WTL-timeline-manager-faction' data-faction='elves'>elfes</span> et les <span class='WTL-timeline-manager-faction' data-faction='humans'>humains</span> depuis la mer.",
	
	// Timeline items with HTML structure
	"inhabitants_early_title": "Premiers Habitants",
	"inhabitants_early_desc": "Les <span class='WTL-timeline-manager-faction' data-faction='elves'>elfes</span> et les <span class='WTL-timeline-manager-faction' data-faction='dwarves'>nains</span> habitent le <span class='WTL-timeline-manager-place' data-place='Great Continent'>Grand Continent</span>. Les <span class='WTL-timeline-manager-faction' data-faction='humans'>humains</span> habitent le <span class='WTL-timeline-manager-place' data-place='distant West'>lointain Ouest</span>. Le peuple de <span class='WTL-timeline-manager-person' data-person='Haldric'>Haldric</span> colonise l'<span class='WTL-timeline-manager-place' data-place='Green Isle'>Île Verte</span> depuis un continent plus à l'ouest.",
	
	"lich_lords_title": "Arrivée des Seigneurs-Liches",
	"lich_lords_desc": "Les <span class='WTL-timeline-manager-faction' data-faction='Lich-Lords'>Seigneurs-Liches</span> arrivent sur l'<span class='WTL-timeline-manager-place' data-place='Green Isle'>Île Verte</span> après avoir perdu une guerre dans le <span class='WTL-timeline-manager-place' data-place='distant West'>lointain Ouest</span>. Après une longue guerre, le peuple de <span class='WTL-timeline-manager-person' data-person='Haldric'>Haldric</span> en vient à dominer l'<span class='WTL-timeline-manager-place' data-place='Green Isle'>Île Verte</span>. Les '<span class='WTL-timeline-manager-faction' data-faction='Wesfolk'>Wesfolk</span>' et leurs <span class='WTL-timeline-manager-faction' data-faction='Lich-Lords'>Seigneurs-Liches</span> sont repoussés vers des terres marginales.",
	
	"discovery_title": "Découverte du Grand Continent",
	"discovery_desc": "Le Prince Héritier de <span class='WTL-timeline-manager-place' data-place='Southbay'>Southbay</span> découvre le <span class='WTL-timeline-manager-place' data-place='Great Continent'>Grand Continent</span>.",
	
	"prince_death_title": "Mort du Prince Héritier",
	"prince_death_desc": "Suite à ces voyages vers le <span class='WTL-timeline-manager-place' data-place='Great Continent'>Grand Continent</span>, l'aîné Prince Héritier tombe malade et meurt. Son jeune frère est impliqué dans un complot pour le tuer. Pour détourner l'attention, le jeune Prince déclenche une guerre avec les <span class='WTL-timeline-manager-faction' data-faction='Wesfolk'>Wesfolk</span> et leurs <span class='WTL-timeline-manager-faction' data-faction='Lich-Lords'>Seigneurs-Liches</span>.",
	
	"settlers_arrival_title": "Arrivée des Colons",
	"settlers_arrival_desc": "Des colons <span class='WTL-timeline-manager-faction' data-faction='humans'>humains</span>, menés par le Prince <span class='WTL-timeline-manager-person' data-person='Haldric'>Haldric</span>, arrivent en grand nombre sur la côte ouest du <span class='WTL-timeline-manager-place' data-place='Great Continent'>Grand Continent</span> (le débarquement a lieu dans la future <span class='WTL-timeline-manager-place' data-place='Bay of Pearls'>Baie des Perles</span>). Les <span class='WTL-timeline-manager-faction' data-faction='humans'>humains</span> arrivent au milieu d'un différend latent entre les <span class='WTL-timeline-manager-faction' data-faction='elves'>elfes</span> et les <span class='WTL-timeline-manager-faction' data-faction='dwarves'>nains</span>.",
	
	"wesnoth_founding_title": "Fondation de Wesnoth",
	"wesnoth_founding_desc": "<span class='WTL-timeline-manager-person' data-person='Haldric'>Haldric</span> se voit accorder les plaines au nord et au sud du <span class='WTL-timeline-manager-place' data-place='Great River'>Grand Fleuve</span>. <span class='WTL-timeline-manager-person' data-person='Haldric'>Haldric</span> accepte un Pacte de Défense Mutuelle avec les <span class='WTL-timeline-manager-faction' data-faction='elves'>elfes</span>. <span class='WTL-timeline-manager-person' data-person='Haldric'>Haldric</span> fonde le pays de <span class='WTL-timeline-manager-place' data-place='Wesnoth'>Wesnoth</span> dans la plaine centrale au sud du <span class='WTL-timeline-manager-place' data-place='Great River'>Grand Fleuve</span>. Le règne de <span class='WTL-timeline-manager-person' data-person='Haldric I'>Haldric I</span> (anciennement le prince Haldric) commence.",
	
	"orcs_arrival_title": "Arrivée des Orcs sur le Grand Continent",
	"orcs_arrival_desc": "Les <span class='WTL-timeline-manager-faction' data-faction='orcs'>orcs</span>, suivant les navires fuyant l'<span class='WTL-timeline-manager-place' data-place='Green Isle'>Île Verte</span>, commencent à arriver sur le <span class='WTL-timeline-manager-place' data-place='Great Continent'>Grand Continent</span>. Ces <span class='WTL-timeline-manager-faction' data-faction='orcs'>orcs</span> sont vaincus par les forces de <span class='WTL-timeline-manager-person' data-person='Haldric'>Haldric</span>. Certains survivants orcs fuient vers l'<span class='WTL-timeline-manager-place' data-place='Green Isle'>Île Verte</span>, d'autres partent attaquer les <span class='WTL-timeline-manager-faction' data-faction='elves'>elfes</span>.",
	
	"winds_of_fate_title": "Vents du Destin",
	"winds_of_fate_desc": "Les <span class='WTL-timeline-manager-faction' data-faction='Drakes'>Drakes</span> arrivent sur le <span class='WTL-timeline-manager-place' data-place='Great Continent'>Grand Continent</span>. <span class='WTL-timeline-manager-place' data-place='Elensefar'>Elensefar</span> et <span class='WTL-timeline-manager-place' data-place='Wesmere'>Wesmere</span> sont ravagés par les <span class='WTL-timeline-manager-faction' data-faction='Drakes'>Drakes</span>. Les <span class='WTL-timeline-manager-faction' data-faction='Drakes'>drakes</span> construisent un aérié au nord de <span class='WTL-timeline-manager-place' data-place='Wesmere'>Wesmere</span>.",
	
	"second_orc_wave_title": "Seconde Vague d'Orcs",
	"second_orc_wave_desc": "Une seconde vague d'<span class='WTL-timeline-manager-faction' data-faction='orcs'>orcs</span> arrive de l'<span class='WTL-timeline-manager-place' data-place='Green Isle'>Île Verte</span> ; ces <span class='WTL-timeline-manager-faction' data-faction='orcs'>orcs</span> commencent à revendiquer de vastes portions du nord du <span class='WTL-timeline-manager-place' data-place='Great Continent'>Grand Continent</span> pour eux-mêmes. <span class='WTL-timeline-manager-person' data-person='Erlornas'>Erlornas</span> de <span class='WTL-timeline-manager-place' data-place='Wesmere'>Wesmere</span> est impliqué dans le premier affrontement elfe direct avec les <span class='WTL-timeline-manager-faction' data-faction='orcs'>orcs</span>.",
	
	"haldric_death_title": "Mort d'Haldric I",
	"haldric_death_desc": "<span class='WTL-timeline-manager-person' data-person='Haldric I'>Haldric I</span> meurt. <span class='WTL-timeline-manager-person' data-person='Haldric II'>Haldric II</span> monte sur le trône. Les <span class='WTL-timeline-manager-faction' data-faction='humans'>humains</span> et les <span class='WTL-timeline-manager-faction' data-faction='elves'>elfes</span> vainquent de manière décisive les <span class='WTL-timeline-manager-faction' data-faction='orcs'>orcs</span> à <span class='WTL-timeline-manager-place' data-place='Tath'>Tath</span>, mettant ainsi un terme à l'avancée orque."
};