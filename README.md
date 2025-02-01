# Pinterest Themer

A customizable theme engine for Pinterest that currently features a modern dark theme.

## Overview

Pinterest Themer is a work-in-progress userscript that transforms Pinterest's interface. Currently offering a dark theme, with plans to support multiple theme options in future updates. While functional, this project is in early development and actively evolving.

## Features

- Modern dark theme (more themes planned)
- Smooth animations and transitions 
- Enhanced button and input styling
- Improved visual hierarchy
- Works across all Pinterest domains
- Preserves original Pinterest functionality

## Installation

1. Install a userscript manager like Tampermonkey or Greasemonkey in your browser
2. Navigate to the `dist` folder in this repository
3. Install the latest version of `bundle.user.js` - this is the production-ready version that gets updated with each optimized build
4. Visit Pinterest and the theme will automatically apply

## Development

To set up the development environment:

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development mode with hot reload:
   ```bash
   npm run dev
   ```
4. For production build:
   ```bash
   npm run build
   ```

The development build will watch for changes and automatically rebuild. The compiled script can be found in the `dist` folder.

## Compatibility 

Works with all major browsers and Pinterest domains including:
- pinterest.com
- pinterest.ca
- pinterest.co.uk
- And other regional Pinterest sites

## Contributing

While the project is in early stages, contributions and suggestions are welcome. Please feel free to submit a Pull Request or open an Issue.

## License

This project is licensed under the GNU General Public License v3.0 - see the LICENSE file for details. 
