# Simple Business Website

A responsive business website for Rajdhani Rentals LLP, an aerial access equipment rental company. The site presents company information, equipment categories, project highlights, gallery content, and inquiry forms that submit rental requests to Google Sheets.

## Features

- Home, About, Equipment, Projects, Gallery, Contact, and Quote pages
- Responsive React UI with Tailwind CSS
- Equipment detail pages
- Inquiry and quote forms with validation
- Google Sheets integration through Google Apps Script
- Light/dark theme support

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- React Hook Form
- Zod
- Google Apps Script

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

Preview the production build:

```bash
npm run preview
```

## Environment Variables

Create a `.env.local` file in the project root:

```env
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

This URL should be the deployed Google Apps Script Web App URL, not the Google Spreadsheet URL.

## Google Sheets Integration

Form submissions are sent from the website to a Google Apps Script endpoint. The Apps Script receives the form data and writes it into the connected Google Spreadsheet.

Flow:

```text
Website form -> Google Apps Script Web App -> Google Spreadsheet
```

The Apps Script source is available in:

```text
google-apps-script/Code.gs
```

Setup instructions are available in:

```text
google-apps-script/README.md
```

## Project Structure

```text
src/
  components/
  context/
  data/
  hooks/
  layouts/
  pages/
  routes/
  services/
  styles/
google-apps-script/
```

## Notes

- `.env.local` is ignored by Git and should be created locally.
- `.env.example` shows the required environment variable format.
- The Google Sheet must be connected through a deployed Apps Script Web App with public access enabled for form submissions.
