# Contributing to Wesnoth Timeline

We love your input! We want to make contributing to this project as easy and transparent as possible.

## Development Process

1. Fork the repo
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## Adding New Timeline Events

To add new events to the timeline, edit `scripts/timeline-data.js` and follow the existing format:

```javascript
{
    year: "Year",
    title: "Event Title",
    description: "Event description with <span class='WTL-timeline-manager-person'>highlightable elements</span>",
    icon: "fa-icon-name",
    era: "era-name",
    translationKey: "unique_key",
    category: "mainline|umc|mainline uncannon",
    related_campaign_events: "campaign_name",
    univers: "wesnoth|other"
}
```

## Adding Translations

1. Add translations to the respective language files in `scripts/lang/`
2. Make sure to update all language files for consistency
3. Test the translations in the interface

## Code Style

- Use consistent indentation (spaces)
- Follow the existing JavaScript and CSS naming conventions
- Comment your code when appropriate