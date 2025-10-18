# Wesnoth Timeline

An interactive timeline visualization of the history of the kingdom of Wesnoth and surrounding regions, based on the official Battle for Wesnoth lore.

## Features

- **Interactive Timeline**: Chronological display of Wesnoth historical events
- **Multi-language Support**: English, French, Italian, and Arabic
- **Advanced Filtering**: Filter by category, campaign, and universe
- **Keyword Highlighting**: Click on people, places, or factions to highlight related events
- **Dark/Light Theme**: Toggle between different visual themes
- **Responsive Design**: Works on desktop and mobile devices

## Technologies Used

- HTML5, CSS3, JavaScript (ES6+)
- Font Awesome for icons
- LocalStorage for user preferences
- CSS Grid and Flexbox for layouts

## Installation

1. Clone this repository
2. Open `index.html` in a web browser
3. No build process or dependencies required!

## Usage

- Use the language selector to switch between supported languages
- Toggle the theme switch for dark/light mode
- Expand the filters section to filter events by category, campaign, or universe
- Click on keywords (highlighted in descriptions) to filter the timeline
- Use the reset buttons to clear filters and highlights

## Project Structure

```
wesnoth-timeline/
├── index.html
├── styles/
│   └── timeline-manager.css
├── scripts/
│   ├── timeline-data.js
│   ├── icons-manager.js
│   ├── translation-manager.js
│   ├── timeline-manager.js
│   ├── initialize.js
│   └── lang/
│       ├── en.js
│       ├── fr.js
│       ├── it.js
│       └── ar.js
└── assets/
    └── icons/
        └── style-icons/
		│	├── tree.png
		│	├── skull.png
		│	├── ship.png
		│	├── crown.png
		│	├── users.png
		│	├── flag.png
		│	├── helmet-battle.png
		│	├── wind.png
		│	├── shield-alt.png
		│	└── monument.png
		├── pwa-icons/
		│   ├── icon-72x72.png
		│   ├── icon-96x96.png
		│   ├── icon-128x128.png
		│   ├── icon-144x144.png
		│   ├── icon-152x152.png
		│   ├── icon-192x192.png
		│   ├── icon-384x384.png
		│   └── icon-512x512.png
		└── pwa-screenshots/
			├── screenshot-desktop.png
			└── screenshot-mobile.png
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is based on the official Battle for Wesnoth history. Battle for Wesnoth is licensed under the GPL v2.