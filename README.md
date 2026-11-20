# SakhiLedger 🌸

**A voice-friendly business companion for women-led and home-based Indian microbusinesses.**

SakhiLedger helps a business owner keep track of sales, expenses, customer credit (udhaar) and repayments, then turns those entries into a simple picture of the business.

> Early prototype. It is not yet a validated commercial product or a production-ready accounting system.

## Current prototype

- Record cash sales, business expenses, credit sales (udhaar), and repayments.
- Automatically calculate recorded sales, expenses, net after expenses, and outstanding customer dues.
- View recent entries and delete individual records.
- See basic insights based on recorded numbers.
- Switch the interface between English, Hindi, and Gujarati.
- Use browser speech recognition for voice notes where supported.
- Hear a spoken summary where browser speech synthesis is supported.
- Load clearly labelled sample data to explore the interface.

## Run it

No build step or package installation is needed.

1. Open `index.html` in a modern browser, or publish the repository with GitHub Pages.
2. Add a few entries using the form.
3. Try the language selector and the sample-data button.

For microphone features, use a browser that supports the Web Speech API. Microphone access generally requires HTTPS or localhost. Voice recognition availability and language accuracy vary by browser and device.

## Important data and calculation notes

- Entries are stored in the browser's `localStorage` on the current device. They are not synced to an account or backed up to a server.
- Clearing browser data can remove entries. This prototype does not yet provide export, restore, or multi-device sync.
- Credit sales count toward sales and outstanding dues. Repayments reduce outstanding dues and are not counted as new sales.
- Net after expenses is calculated as recorded sales minus recorded expenses. It is a simple operating view, not a formal profit, tax, inventory, or cash-flow statement.
- Repayments are currently deducted from the overall outstanding-dues total. The prototype does not yet match a repayment to a specific customer's invoice or prevent overpayment.
- The interface does not yet include user accounts, authentication, encryption at rest, a database, or a secure multi-user backend. Do not enter sensitive customer or financial information into this demo.

## Product direction

The longer-term product direction is a multilingual, voice-first business intelligence companion that helps small business owners understand what is happening in their business, not just record transactions.

Potential next steps, subject to user research and validation:

1. Customer-wise udhaar ledger and repayment matching.
2. Reliable voice entry for natural-language transactions.
3. Weekly and monthly comparisons with clear explanations.
4. Downloadable backups and consent-based cloud sync.
5. Simple pricing, margin, and cash-flow guidance.
6. Field testing with real microbusiness owners, with consent and no invented traction claims.

## Tech

- HTML, CSS, and vanilla JavaScript
- Browser `localStorage`
- Browser Web Speech API (optional, browser-dependent)
- No external API keys or paid services required

## Status

This repository contains an early, static front-end MVP. The features above describe the current local prototype, not a launched or independently validated service.
