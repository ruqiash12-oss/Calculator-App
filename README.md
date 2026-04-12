# Frontend Mentor - Calculator App

This is a solution for the **Calculator app** challenge on Frontend Mentor.

## Overview

A responsive calculator with theme switching (3 themes), keyboard-like layout, and basic operations.


### Features

- 3 Themes (Theme 1 / Theme 2 / Theme 3) using CSS variables
- Theme toggle built with radio inputs
- Calculator functions:
  - Add, subtract, multiply, divide
  - Decimal support
  - DEL (delete last character)
  - RESET (clear all)
  - Prevents repeated operators (e.g. `++++`, `////`)
  - Prevents multiple decimals in the same number
- Saves the current calculation in `localStorage`

## Links

- Live Site URL: https://ruqiash12-oss.github.io/Calculator-App/
- Solution URL: https://www.frontendmentor.io/solutions/calculator-app-with-3-themes--0TkHW2Cay

## Built with

- HTML5
- CSS (CSS Variables, Grid, `:has()` for theme switching)
- JavaScript (DOM + localStorage)

## Getting started

### Run locally

1. Download the project files.
2. Open `index.html` in your browser.

No build tools required.

## Notes

- Theme switching is implemented with CSS `:has()`:
  - If you test on an older browser that does not support `:has()`, themes may not change.
- The calculator evaluation uses `eval()` for learning purposes.

## Folder structure

- `index.html`
- `style.css`
- `script.js`
- `images/`

## Author

- Frontend Mentor profile: https://www.frontendmentor.io/profile/ruqiash12-oss
- GitHub: https://github.com/ruqiash12-oss
