const translations_en = {
	// Interface
	"timeline_title": "Timeline of Wesnoth",
	"timeline_subtitle": "Explore the chronological history of the kingdom of Wesnoth and surrounding regions",
	"language_label": "Language:",
	"theme_label": "Theme:",
	"theme_light": "Light",
	"theme_dark": "Dark",
	"footer_text": "Wesnoth Timeline &copy; 2025 - Based on the official history of Battle for Wesnoth",
	"keywords_title": "Filter by keywords",
	"reset_highlights": "Reset highlights",
	"toggle_all": "Show/Hide all",
	"no_results": "No results found for this keyword",
    "filters_expand": "Expand",
    "filters_collapse": "Collapse",
    "filter_all": "All",
    "filter_other": "Other",
	"how_to_title": "How To",
	"how_to_modal_title": "How To Guide",
	"notifications_label": "Notifications:",
	"notifications_enabled": "Enabled",
	"notifications_disabled": "Disabled", 
	"notifications_blocked": "Blocked",
	"notifications_unsupported": "Not supported",
	"notification_prompt_title": "Stay Updated",
	"notification_prompt_message": "Get notified about new timeline events and updates",
	"notification_prompt_enable": "Enable",
	"notification_prompt_later": "Later",
	"notification_test_title": "Test Notification",
	"notification_test_body": "This is a test notification from Wesnoth Timeline",
	"notification_update_title": "Timeline Updated",
	"notification_update_body": "New historical content is available",
	"notification_digest_title": "Wesnoth Digest",
	"notification_digest_body": "Check out today's featured historical events",
	
	// Tab titles
	"how_to_tab_language": "Add Language",
	"how_to_tab_era": "Add Era", 
	"how_to_tab_event": "Add Event",
	"how_to_tab_filter": "Add Filter",
	
	// Language section
	"how_to_language_title": "How to Add a New Language",
	"how_to_language_step1_title": "Create Language File",
	"how_to_language_step1_desc": "Create a new JavaScript file in the scripts/lang/ directory named with the language code (e.g., es.js for Spanish).",
	"how_to_language_step2_title": "Update HTML",
	"how_to_language_step2_desc": "Add the language option to the language selector in index.html:",
	"how_to_language_step3_title": "Register Language",
	"how_to_language_step3_desc": "Add the language to the translations object in translation-manager.js:",
	"how_to_language_rec1": "Use ISO language codes for file names",
	"how_to_language_rec2": "Keep all translation keys consistent across languages",
	"how_to_language_rec3": "Test right-to-left layouts for languages like Arabic",
	
	// Era section
	"how_to_era_title": "How to Add a New Era",
	"how_to_era_step1_title": "Add Era Section in HTML",
	"how_to_era_step1_desc": "Add a new era section in the index.html file within the eras content:",
	"how_to_era_step2_title": "Add Translations",
	"how_to_era_step2_desc": "Add translation keys for the new era in all language files:",
	"how_to_era_rec1": "Use consistent naming for era IDs",
	"how_to_era_rec2": "Include rich HTML content in descriptions",
	"how_to_era_rec3": "Add appropriate icons for visual consistency",
	
	// Event section
	"how_to_event_title": "How to Add a New Timeline Event",
	"how_to_event_step1_title": "Add Event Data",
	"how_to_event_step1_desc": "Add a new event object to the timelineData array in timeline-data.js:",
	"how_to_event_step2_title": "Add Translations",
	"how_to_event_step2_desc": "Add translation keys for the event in all language files:",
	"how_to_event_rec1": "Use consistent translation key patterns",
	"how_to_event_rec2": "Include proper HTML markup in descriptions",
	"how_to_event_rec3": "Assign correct era and category values",
	
	// Filter section
	"how_to_filter_title": "How to Add a New Filter",
	"how_to_filter_step1_title": "Update Filter Logic",
	"how_to_filter_step1_desc": "Modify the filter functions in timeline-manager.js to handle your new filter type:",
	"how_to_filter_step2_title": "Update Filter Application",
	"how_to_filter_step2_desc": "Update the applyFilters() and passesFilters() functions to include your new filter:",
	"how_to_filter_rec1": "Use descriptive filter names",
	"how_to_filter_rec2": "Test filter combinations thoroughly",
	"how_to_filter_rec3": "Ensure proper state management",
	
	// Common
	"how_to_recommendations": "Recommendations",
	
	// filter translations
	"filters_title": "Filter Events",
	"filter_category": "Category",
	"filter_campaign": "Campaigns",
	"filter_universe": "Universe",
	"apply_filters": "Apply Filters",
	"reset_filters": "Reset Filters",
	"no_filter_results": "No events match the selected filters",
	"filter_mainline": "Mainline",
	"filter_umc": "UMC", 
	"filter_mainline_non_canon": "Mainline non-canon",
	"filter_universe_wesnoth": "Wesnoth",
	"meta_category": "Category",
	"meta_universe": "Universe", 
	"meta_campaigns": "Campaigns",
	"intro_title": "About This Timeline",
	"intro_expand": "Expand",
	"intro_collapse": "Collapse", 
	"intro_text": "This is a official chronological history of the country of Wesnoth and surrounding regions, gleaned from written accounts and verbal histories passed down through the generations. Portions of entries surrounded by parentheses and containing a question mark are assumed or unconfirmed information. The history is sorted by era, and within the era by date, using the Foundation of Wesnoth as a base. BW=Before Wesnoth, YW=Years Wesnoth. They function the same way as BC and AD do in our timekeeping system. Each of the eras is summarized before the timeline for that era begins. This history of the Great Continent is a subject of active scholarship.",
	"intro_text_2": "The world that Wesnoth resides in is called Irdya. Before the Great Fall and the (unchronicled) technological age, this name is only rarely used.",
	"spoiler_warning": "Spoiler warning! This page contains plot spoilers to several campaigns.",
	
	// Campaign names
	"campaign_the_rise_of_wesnoth": "The Rise of Wesnoth",
	"campaign_legend_of_wesmere": "Legend of Wesmere",
	"campaign_a_tale_of_two_brothers": "A Tale of Two Brothers",
	"campaign_descent_into_darkness": "Descent into Darkness",
	"campaign_delfadors_memoirs": "Delfador's Memoirs",
	"campaign_liberty": "Liberty",
	"campaign_heir_to_the_throne": "Heir to the Throne",
	"campaign_northern_rebirth": "Northern Rebirth",
	"campaign_the_hammer_of_thursagan": "The Hammer of Thursagan",
	"campaign_eastern_invasion": "Eastern Invasion",
	"campaign_dead_water": "Dead Water",
	"campaign_under_the_burning_suns": "Under the Burning Suns",
	
	// Era translations
	"general_eras_title": "General Eras",
	"eras_expand": "Expand",
	"eras_collapse": "Collapse",
	"era_expand": "Expand", 
	"era_collapse": "Collapse",
	"coming_soon": "Coming Soon",
	
	// Era titles
	"era_founding_title": "The Founding of Wesnoth",
	"era_taming_title": "The Taming of the Wild",
	"era_golden_age_title": "The Golden Age of Wesnoth", 
	"era_first_dark_age_title": "The First Dark Age of Wesnoth",
	"era_turmoil_title": "The Turmoil of Asheviere",
	"era_fear_title": "The Age of Fear",
	"era_silver_age_title": "The Silver Age of Wesnoth",
	"era_legacy_title": "The Legacy of Black-Eye Karun",
	"era_after_fall_title": "After the Great Fall",
	
	// Eras
	"era_founding_title": "The Founding of Wesnoth",
	"era_founding_description": "During the age of the Founding of Wesnoth, there were two important geographic locations, these being the <span class='WTL-timeline-manager-place' data-place='Green Isle'>Green Isle</span> and the <span class='WTL-timeline-manager-place' data-place='Great Continent'>Great Continent</span>. <span class='WTL-timeline-manager-person' data-person='Haldric'>Haldric</span> is the main historical figure at this time. This age ends with the founding of <span class='WTL-timeline-manager-place' data-place='Wesnoth'>Wesnoth</span> as a country in the <span class='WTL-timeline-manager-place' data-place='Great Continent'>Great Continent</span>, and with <span class='WTL-timeline-manager-faction' data-faction='orcs'>orcs</span> attacking both <span class='WTL-timeline-manager-faction' data-faction='elves'>elves</span> and <span class='WTL-timeline-manager-faction' data-faction='humans'>men</span> from the sea.",
	
	// Timeline items with HTML structure
	"inhabitants_early_title": "Early Inhabitants",
	"inhabitants_early_desc": "<span class='WTL-timeline-manager-faction' data-faction='elves'>Elves</span> and <span class='WTL-timeline-manager-faction' data-faction='dwarves'>dwarves</span> inhabit the <span class='WTL-timeline-manager-place' data-place='Great Continent'>Great Continent</span>. <span class='WTL-timeline-manager-faction' data-faction='humans'>Humans</span> inhabit the <span class='WTL-timeline-manager-place' data-place='distant West'>distant West</span>. <span class='WTL-timeline-manager-person' data-person='Haldric'>Haldric's</span> people colonise the <span class='WTL-timeline-manager-place' data-place='Green Isle'>Green Isle</span> from a continent further to the west.",
	
	"lich_lords_title": "Arrival of the Lich-Lords",
	"lich_lords_desc": "The <span class='WTL-timeline-manager-faction' data-faction='Lich-Lords'>Lich-Lords</span> arrive on the <span class='WTL-timeline-manager-place' data-place='Green Isle'>Green Isle</span> after losing a war in the <span class='WTL-timeline-manager-place' data-place='distant West'>distant West</span>. After a long war <span class='WTL-timeline-manager-person' data-person='Haldric'>Haldric's</span> people come to dominate the <span class='WTL-timeline-manager-place' data-place='Green Isle'>Green Isle</span>. The '<span class='WTL-timeline-manager-faction' data-faction='Wesfolk'>Wesfolk</span>' and their <span class='WTL-timeline-manager-faction' data-faction='Lich-Lords'>Lich-Lords</span> are pushed onto marginal lands.",
	
	"discovery_title": "Discovery of the Great Continent",
	"discovery_desc": "The Crown Prince of <span class='WTL-timeline-manager-place' data-place='Southbay'>Southbay</span> discovers the <span class='WTL-timeline-manager-place' data-place='Great Continent'>Great Continent</span>.",
	
	"prince_death_title": "Death of the Crown Prince",
	"prince_death_desc": "Following these voyages to the <span class='WTL-timeline-manager-place' data-place='Great Continent'>Great Continent</span>, the elder Crown Prince falls ill and dies. His younger brother is implicated in a plot to kill him. As a distraction the younger Prince starts a war with the <span class='WTL-timeline-manager-faction' data-faction='Wesfolk'>Wesfolk</span> and their <span class='WTL-timeline-manager-faction' data-faction='Lich-Lords'>Lich-Lords</span>.",
	
	"settlers_arrival_title": "Arrival of Settlers",
	"settlers_arrival_desc": "<span class='WTL-timeline-manager-faction' data-faction='humans'>Human</span> settlers, led by Prince <span class='WTL-timeline-manager-person' data-person='Haldric'>Haldric</span>, arrive at the western coast of the <span class='WTL-timeline-manager-place' data-place='Great Continent'>Great Continent</span> (the landfall occurs in the future <span class='WTL-timeline-manager-place' data-place='Bay of Pearls'>Bay of Pearls</span>) in large numbers. <span class='WTL-timeline-manager-faction' data-faction='humans'>Humans</span> arrive in the middle of a simmering dispute between the <span class='WTL-timeline-manager-faction' data-faction='elves'>elves</span> and <span class='WTL-timeline-manager-faction' data-faction='dwarves'>dwarves</span>.",
	
	"wesnoth_founding_title": "Founding of Wesnoth",
	"wesnoth_founding_desc": "<span class='WTL-timeline-manager-person' data-person='Haldric'>Haldric</span> is granted the plains north and south of the <span class='WTL-timeline-manager-place' data-place='Great River'>Great River</span>. <span class='WTL-timeline-manager-person' data-person='Haldric'>Haldric</span> agrees to a Pact of Mutual Defence with the <span class='WTL-timeline-manager-faction' data-faction='elves'>elves</span>. <span class='WTL-timeline-manager-person' data-person='Haldric'>Haldric</span> founds the country of <span class='WTL-timeline-manager-place' data-place='Wesnoth'>Wesnoth</span> in the central plain south of the <span class='WTL-timeline-manager-place' data-place='Great River'>great River</span>. Reign of <span class='WTL-timeline-manager-person' data-person='Haldric I'>Haldric I</span> (formerly prince Haldric) begins.",
	
	"orcs_arrival_title": "Orcs Arrive on the Great Continent",
	"orcs_arrival_desc": "<span class='WTL-timeline-manager-faction' data-faction='orcs'>Orcs</span>, following the ships fleeing from the <span class='WTL-timeline-manager-place' data-place='Green Isle'>Green Isle</span>, begin to arrive on the <span class='WTL-timeline-manager-place' data-place='Great Continent'>Great Continent</span>. These <span class='WTL-timeline-manager-faction' data-faction='orcs'>orcs</span> are defeated by <span class='WTL-timeline-manager-person' data-person='Haldric'>Haldric's</span> forces. Some of the orcish survivors flee back to the <span class='WTL-timeline-manager-place' data-place='Green Isle'>Green Isle</span>, others move to attack the <span class='WTL-timeline-manager-faction' data-faction='elves'>elves</span>.",
	
	"winds_of_fate_title": "Winds of Fate",
	"winds_of_fate_desc": "The <span class='WTL-timeline-manager-faction' data-faction='Drakes'>Drakes</span> arrive on the <span class='WTL-timeline-manager-place' data-place='Great Continent'>Great Continent</span>. <span class='WTL-timeline-manager-place' data-place='Elensefar'>Elensefar</span> and <span class='WTL-timeline-manager-place' data-place='Wesmere'>Wesmere</span> are raided by <span class='WTL-timeline-manager-faction' data-faction='Drakes'>Drakes</span>. The <span class='WTL-timeline-manager-faction' data-faction='Drakes'>drakes</span> build an eyrie north of <span class='WTL-timeline-manager-place' data-place='Wesmere'>Wesmere</span>.",
	
	"second_orc_wave_title": "Second Orc Wave",
	"second_orc_wave_desc": "A second wave of <span class='WTL-timeline-manager-faction' data-faction='orcs'>orcs</span> arrive from the <span class='WTL-timeline-manager-place' data-place='Green Isle'>Green Isle</span>; these <span class='WTL-timeline-manager-faction' data-faction='orcs'>orcs</span> begin claiming large portions of the northern <span class='WTL-timeline-manager-place' data-place='Great Continent'>Great Continent</span> for themselves. <span class='WTL-timeline-manager-person' data-person='Erlornas'>Erlornas</span> of <span class='WTL-timeline-manager-place' data-place='Wesmere'>Wesmere</span> is involved in the first direct elvish clash with <span class='WTL-timeline-manager-faction' data-faction='orcs'>orcs</span>.",
	
	"haldric_death_title": "Death of Haldric I",
	"haldric_death_desc": "<span class='WTL-timeline-manager-person' data-person='Haldric I'>Haldric I</span> dies. <span class='WTL-timeline-manager-person' data-person='Haldric II'>Haldric II</span> ascends to the throne. <span class='WTL-timeline-manager-faction' data-faction='humans'>Humans</span> and <span class='WTL-timeline-manager-faction' data-faction='elves'>elves</span> decisively defeat the <span class='WTL-timeline-manager-faction' data-faction='orcs'>orcs</span> at <span class='WTL-timeline-manager-place' data-place='Tath'>Tath</span>, thus halting the orcish advance."
};