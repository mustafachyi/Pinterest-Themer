# Pinterest Themer

A userscript to customize Pinterest's appearance with multi-theme support. While not a complete fix for every UI quirk, it lets you switch between pre-defined and custom themes for a personalized, if imperfect, Pinterest experience.

## Features

- **Multi-Theme Support:** Choose from themes like **Obsidian**, **Graphite**, **Charcoal**, etc. Add your own by following the `themes` array pattern.
- **Integrated Theme Switcher:** A drop-down in the Pinterest header lets you switch themes on the fly.
- **Basic UI Customization:** Provides enough adjustments for basic usage, despite some broken elements.

## Installation

1. **Install a Userscript Manager:**  
  Use [Tampermonkey](https://www.tampermonkey.net/) or [Greasemonkey](https://www.greasespot.net/).

2. **Add the Script:**  
  Create a new userscript and paste the contents, or install the script directly from GitHub.

3. **Visit Pinterest:**  
  The script auto-activates, applying your chosen theme and adding the theme switcher.

## Usage & Customization

- **Switch Themes:**  
  Use the drop-down to change themes. Your selection is saved in local storage and the page reloads automatically.
  
- **Add Custom Themes:**  
  Modify the `themes` array in the script. For example:
  ```javascript
  const themes = [
      {
          name: "My Custom Theme",
          colors: { bg: "#123456", obsidian: "#654321", secondary: "#abcdef", text: "#ffffff" },
          sizes: { borderWidth: "2px", searchHeight: "48px" },
          shadows: { dropdown: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }
      },
      // other themes...
  ];
  ```

## Development

1. Clone this repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development mode with:
   ```bash
   npm run dev
   ```
4. For production build:
   ```bash
   npm run build
   ```
   The compiled script is output to the `dist` folder.

## Compatibility

Tested on:
- Firefox with Tampermonkey

The script is designed to work across all Pinterest domains, though it hasn't been extensively tested on other browsers or userscript managers.

## Contributing

Contributions and suggestions are welcome. Please open an Issue or submit a Pull Request.

## License

This project is licensed under the GNU General Public License v3.0 – see the LICENSE file for details. 