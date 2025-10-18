// Données de la chronologie - Facilement modifiables
const timelineData = [
	{
		year: "Préhistoire",
		title: "Premiers Habitants",
		description: "Les <span class='WTL-timeline-manager-faction' data-faction='elfes'>elfes</span> et les <span class='WTL-timeline-manager-faction' data-faction='nains'>nains</span> habitent le <span class='WTL-timeline-manager-place' data-place='Grand Continent'>Grand Continent</span>. Les <span class='WTL-timeline-manager-faction' data-faction='humains'>humains</span> habitent l'<span class='WTL-timeline-manager-place' data-place='Ouest lointain'>Ouest lointain</span>. Le peuple d'<span class='WTL-timeline-manager-person' data-person='Haldric'>Haldric</span> colonise l'<span class='WTL-timeline-manager-place' data-place='Île Verte'>Île Verte</span> depuis un continent plus à l'ouest.",
		icon: "fa-tree",
		era: "founding",
		translationKey: "inhabitants_early",
		category: "mainline", // can be 'mainline', 'umc' or 'mainline uncannon'
		related_campaign_events: "aucune", // list of campaigns that mention those events or campaigns where those events are part of its scenarios
		univers: "wesnoth" // can be another string if it's  umc
	},
	{
		year: "200 BW",
		title: "Arrivée des Seigneurs-Liches",
		description: "Les <span class='WTL-timeline-manager-faction' data-faction='Seigneurs-Liches'>Seigneurs-Liches</span> arrivent sur l'<span class='WTL-timeline-manager-place' data-place='Île Verte'>Île Verte</span> après avoir perdu une guerre dans l'<span class='WTL-timeline-manager-place' data-place='Ouest lointain'>Ouest lointain</span>. Après une longue guerre, le peuple d'<span class='WTL-timeline-manager-person' data-person='Haldric'>Haldric</span> en vient à dominer l'<span class='WTL-timeline-manager-place' data-place='Île Verte'>Île Verte</span>. Les '<span class='WTL-timeline-manager-faction' data-faction='Wesfolk'>Wesfolk</span>' et leurs <span class='WTL-timeline-manager-faction' data-faction='Seigneurs-Liches'>Seigneurs-Liches</span> sont repoussés vers des terres marginales.",
		icon: "fa-skull",
		era: "founding",
		translationKey: "lich_lords",
		category: "mainline",
		related_campaign_events: "aucune",
		univers: "wesnoth"
	},
	{
		year: "12 BW",
		title: "Découverte du Grand Continent",
		description: "Le Prince Héritier de <span class='WTL-timeline-manager-place' data-place='Southbay'>Southbay</span> découvre le <span class='WTL-timeline-manager-place' data-place='Grand Continent'>Grand Continent</span>.",
		icon: "fa-ship",
		era: "founding",
		translationKey: "discovery",
		category: "mainline",
		related_campaign_events: "aucune",
		univers: "wesnoth"
	},
	{
		year: "6 BW",
		title: "Mort du Prince Héritier",
		description: "Suite à ces voyages vers le <span class='WTL-timeline-manager-place' data-place='Grand Continent'>Grand Continent</span>, le Prince Héritier aîné tombe malade et meurt. Son jeune frère est impliqué dans un complot pour le tuer. Pour détourner l'attention, le jeune Prince déclenche une guerre avec les <span class='WTL-timeline-manager-faction' data-faction='Wesfolk'>Wesfolk</span> et leurs <span class='WTL-timeline-manager-faction' data-faction='Seigneurs-Liches'>Seigneurs-Liches</span>.",
		icon: "fa-crown",
		era: "founding",
		translationKey: "prince_death",
		category: "mainline",
		related_campaign_events: "aucune",
		univers: "wesnoth"
	},
	{
		year: "1 BW",
		title: "Arrivée des Colons",
		description: "Des colons <span class='WTL-timeline-manager-faction' data-faction='humains'>humains</span>, dirigés par le Prince <span class='WTL-timeline-manager-person' data-person='Haldric'>Haldric</span>, arrivent en grand nombre sur la côte ouest du <span class='WTL-timeline-manager-place' data-place='Grand Continent'>Grand Continent</span> (le débarquement a lieu dans la future <span class='WTL-timeline-manager-place' data-place='Baie des Perles'>Baie des Perles</span>). Les <span class='WTL-timeline-manager-faction' data-faction='humains'>humains</span> arrivent au milieu d'un différend latent entre les <span class='WTL-timeline-manager-faction' data-faction='elfes'>elfes</span> et les <span class='WTL-timeline-manager-faction' data-faction='nains'>nains</span>.",
		icon: "fa-users",
		era: "founding",
		translationKey: "settlers_arrival",
		category: "mainline",
		related_campaign_events: "aucune",
		univers: "wesnoth"
	},
	{
		year: "1 YW",
		title: "Fondation de Wesnoth",
		description: "<span class='WTL-timeline-manager-person' data-person='Haldric'>Haldric</span> se voit accorder les plaines au nord et au sud du <span class='WTL-timeline-manager-place' data-place='Grand Fleuve'>Grand Fleuve</span>. <span class='WTL-timeline-manager-person' data-person='Haldric'>Haldric</span> accepte un Pacte de Défense Mutuelle avec les <span class='WTL-timeline-manager-faction' data-faction='elfes'>elfes</span>. <span class='WTL-timeline-manager-person' data-person='Haldric'>Haldric</span> fonde le pays de <span class='WTL-timeline-manager-place' data-place='Wesnoth'>Wesnoth</span> dans la plaine centrale au sud du <span class='WTL-timeline-manager-place' data-place='Grand Fleuve'>Grand Fleuve</span>. Le règne d'<span class='WTL-timeline-manager-person' data-person='Haldric I'>Haldric I</span> (anciennement le prince Haldric) commence.",
		icon: "fa-flag",
		era: "founding",
		translationKey: "wesnoth_founding",
		category: "mainline",
		related_campaign_events: "aucune",
		univers: "wesnoth"
	},
	{
		year: "2 YW",
		title: "Arrivée des Orcs sur le Grand Continent",
		description: "Les <span class='WTL-timeline-manager-faction' data-faction='orcs'>orcs</span>, suivant les navires fuyant l'<span class='WTL-timeline-manager-place' data-place='Île Verte'>Île Verte</span>, commencent à arriver sur le <span class='WTL-timeline-manager-place' data-place='Grand Continent'>Grand Continent</span>. Ces <span class='WTL-timeline-manager-faction' data-faction='orcs'>orcs</span> sont vaincus par les forces d'<span class='WTL-timeline-manager-person' data-person='Haldric'>Haldric</span>. Certains des survivants <span class='WTL-timeline-manager-faction' data-faction='orcs'>orcs</span> fuient vers l'<span class='WTL-timeline-manager-place' data-place='Île Verte'>Île Verte</span>, d'autres se déplacent pour attaquer les <span class='WTL-timeline-manager-faction' data-faction='elfes'>elfes</span>.",
		icon: "fa-helmet-battle",
		era: "founding",
		translationKey: "orcs_arrival",
		category: "mainline",
		related_campaign_events: "aucune",
		univers: "wesnoth"
	},
	{
		year: "3 YW",
		title: "Vents du Destin",
		description: "Les <span class='WTL-timeline-manager-faction' data-faction='Drakes'>Drakes</span> arrivent sur le <span class='WTL-timeline-manager-place' data-place='Grand Continent'>Grand Continent</span>. <span class='WTL-timeline-manager-place' data-place='Elensefar'>Elensefar</span> et <span class='WTL-timeline-manager-place' data-place='Wesmere'>Wesmere</span> sont pillés par les <span class='WTL-timeline-manager-faction' data-faction='Drakes'>Drakes</span>. Les <span class='WTL-timeline-manager-faction' data-faction='Drakes'>Drakes</span> construisent un aérien au nord de <span class='WTL-timeline-manager-place' data-place='Wesmere'>Wesmere</span>.",
		icon: "fa-wind",
		era: "founding",
		translationKey: "winds_of_fate",
		category: "mainline",
		related_campaign_events: "aucune",
		univers: "wesnoth"
	},
	{
		year: "8 YW",
		title: "Deuxième Vague d'Orcs",
		description: "Une deuxième vague d'<span class='WTL-timeline-manager-faction' data-faction='orcs'>orcs</span> arrive de l'<span class='WTL-timeline-manager-place' data-place='Île Verte'>Île Verte</span> ; ces <span class='WTL-timeline-manager-faction' data-faction='orcs'>orcs</span> commencent à revendiquer de grandes parties du nord du <span class='WTL-timeline-manager-place' data-place='Grand Continent'>Grand Continent</span> pour eux-mêmes. <span class='WTL-timeline-manager-person' data-person='Erlornas'>Erlornas</span> de <span class='WTL-timeline-manager-place' data-place='Wesmere'>Wesmere</span> est impliqué dans le premier affrontement <span class='WTL-timeline-manager-faction' data-faction='elfes'>elfe</span> direct avec les <span class='WTL-timeline-manager-faction' data-faction='orcs'>orcs</span>.",
		icon: "fa-shield-alt",
		era: "founding",
		translationKey: "second_orc_wave",
		category: "mainline",
		related_campaign_events: "aucune",
		univers: "wesnoth"
	},
	{
		year: "20 YW",
		title: "Mort d'Haldric Ier",
		description: "<span class='WTL-timeline-manager-person' data-person='Haldric I'>Haldric I</span> meurt. <span class='WTL-timeline-manager-person' data-person='Haldric II'>Haldric II</span> monte sur le trône. Les <span class='WTL-timeline-manager-faction' data-faction='humains'>humains</span> et les <span class='WTL-timeline-manager-faction' data-faction='elfes'>elfes</span> vainquent décisivement les <span class='WTL-timeline-manager-faction' data-faction='orcs'>orcs</span> à <span class='WTL-timeline-manager-place' data-place='Tath'>Tath</span>, arrêtant ainsi l'avance orque.",
		icon: "fa-monument",
		era: "founding",
		translationKey: "haldric_death",
		category: "mainline",
		related_campaign_events: "aucune",
		univers: "wesnoth"
	}
];