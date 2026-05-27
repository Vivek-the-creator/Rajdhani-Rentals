# Google Sheets Inquiry Setup

1. Open https://script.google.com and create a new Apps Script project.
2. Paste `Code.gs` into the project.
3. Click **Deploy** > **New deployment** > **Web app**.
4. Set **Execute as** to **Me**.
5. Set **Who has access** to **Anyone**.
6. Deploy, authorize the script, and copy the Web app URL.
7. Create `.env.local` in the project root with:

```env
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

8. Restart the Vite dev server after adding `.env.local`.

The script writes new rows into the `Inquiries` sheet inside the spreadsheet:
`1mVyz9D6SjH3J3aeElQxWWU9dJmCDdNkgitB_DNQYZrQ`.
