# Form submission Apps Script

1. Open the Apps Script project attached to the spreadsheet that receives your contact enquiries.
2. Replace its `Code.gs` contents with [Code.js](./Code.js), then save.
3. Run `initialSetup` once and approve the requested permissions.
4. Deploy a **new version** of the existing Web App. Keep the same access settings and use its existing `/exec` URL.

The script keeps contact enquiries in `Sheet1` and automatically creates these tabs on the first matching submission:

- `Job Seeker Registrations`
- `Company Hiring Requirements`
