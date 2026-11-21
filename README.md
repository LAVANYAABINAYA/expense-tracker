# Expense Tracker

A small browser-based expense tracker built with HTML, CSS and vanilla JavaScript.

## Features
- Add expenses with a description, amount and category
- View total spending and transaction count
- Delete individual expenses or clear all
- Persist data with browser local storage
- Responsive layout

## Run locally
1. Download or clone this repository.
2. Open `index.html` in a modern browser.
3. Add a sample expense and refresh the page to verify persistence.

## Project structure
- `index.html` — page structure
- `style.css` — responsive styling
- `script.js` — form handling, calculations and local storage

## Manual test checklist
- [ ] Empty description is rejected by the browser
- [ ] Zero or negative amount is rejected
- [ ] Adding an expense updates the total and count
- [ ] Deleting an expense updates the summary
- [ ] Data remains after refreshing the page

## Possible improvements
Add monthly filters, CSV export and charts.
