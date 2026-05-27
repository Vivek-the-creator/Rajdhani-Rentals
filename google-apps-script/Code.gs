const SPREADSHEET_ID = '1mVyz9D6SjH3J3aeElQxWWU9dJmCDdNkgitB_DNQYZrQ';
const SHEET_NAME = 'Inquiries';

const HEADERS = [
  'Submitted At',
  'Name',
  'Company',
  'Email',
  'Phone',
  'Equipment Required',
  'Rental Duration',
  'Project Location',
  'Start Date',
  'Message',
  'Page URL',
];

function doPost(e) {
  const sheet = getInquirySheet();
  const data = e.parameter || {};

  sheet.appendRow([
    data.submittedAt || new Date().toISOString(),
    data.name || '',
    data.company || '',
    data.email || '',
    data.phone || '',
    data.equipmentType || '',
    data.duration || '',
    data.location || '',
    data.startDate || '',
    data.message || '',
    data.pageUrl || '',
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getInquirySheet() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }

  return sheet;
}
