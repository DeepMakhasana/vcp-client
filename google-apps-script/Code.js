const SPREADSHEET_PROPERTY = "key";
const NOTIFICATION_EMAIL = "param.cc@gmail.com";

const FORM_CONFIG = {
  "Contact Enquiry": {
    sheetName: "Sheet1",
    emailHeading: "New contact enquiry",
    fields: [
      { key: "name", label: "Name" },
      { key: "number", label: "Number" },
      { key: "course", label: "Course" },
      { key: "message", label: "Message" },
    ],
  },
  "Job Seeker Registration": {
    sheetName: "Job Seeker Registrations",
    emailHeading: "New job seeker registration",
    fields: [
      { key: "fullName", label: "Full Name" },
      { key: "mobileNumber", label: "Mobile / WhatsApp Number" },
      { key: "email", label: "Email Address" },
      { key: "currentLocation", label: "City / Current Location" },
      { key: "experience", label: "Total Work Experience / Fresher" },
      { key: "cadKnowledge", label: "Jewellery CAD Software Knowledge" },
      { key: "skills", label: "Skills" },
      { key: "workPreference", label: "Preferred Job Location / Freelancing" },
      { key: "additionalInformation", label: "Additional Information" },
      { key: "consent", label: "Consent" },
    ],
  },
  "Company Hiring Requirement": {
    sheetName: "Company Hiring Requirements",
    emailHeading: "New company hiring requirement",
    fields: [
      { key: "companyName", label: "Company / Business Name" },
      { key: "contactPerson", label: "Contact Person Name" },
      { key: "mobileNumber", label: "Mobile / WhatsApp Number" },
      { key: "email", label: "Email Address" },
      { key: "companyCity", label: "Company City" },
      { key: "vacancies", label: "Number of Vacancies" },
      { key: "requiredSoftware", label: "Required Software" },
      { key: "requiredExperience", label: "Required Experience / Fresher" },
      { key: "jobType", label: "Job Type" },
      { key: "additionalRequirements", label: "Additional Requirements" },
    ],
  },
};

/** Run once from the spreadsheet-bound Apps Script project. */
function initialSetup() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  PropertiesService.getScriptProperties().setProperty(SPREADSHEET_PROPERTY, spreadsheet.getId());
}

function doPost(e) {
  const lock = LockService.getScriptLock();

  try {
    lock.waitLock(10000);

    const parameters = (e && e.parameter) || {};
    const formType = parameters.formType || "Contact Enquiry";
    const config = FORM_CONFIG[formType];

    if (!config) throw new Error(`Unsupported form type: ${formType}`);

    const spreadsheetId = PropertiesService.getScriptProperties().getProperty(SPREADSHEET_PROPERTY);
    if (!spreadsheetId) throw new Error("Run initialSetup once before accepting form submissions.");

    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = getOrCreateSheet_(spreadsheet, config);
    const submission = config.fields.map((field) => ({
      label: field.label,
      value: parameters[field.key] || "",
    }));

    sheet.appendRow([new Date(), ...submission.map((field) => field.value)]);
    sendNotification_(config.emailHeading, formType, submission);

    return jsonResponse_({ result: "success" });
  } catch (error) {
    console.error(error);
    return jsonResponse_({ result: "error", error: String(error.message || error) });
  } finally {
    if (lock.hasLock()) lock.releaseLock();
  }
}

function getOrCreateSheet_(spreadsheet, config) {
  let sheet = spreadsheet.getSheetByName(config.sheetName);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(config.sheetName);
    sheet.appendRow(["Date", ...config.fields.map((field) => field.label)]);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, config.fields.length + 1).setFontWeight("bold");
    sheet.autoResizeColumns(1, config.fields.length + 1);
  }

  return sheet;
}

function sendNotification_(heading, formType, submission) {
  const rows = submission
    .map(({ label, value }) => `<tr><td><b>${escapeHtml_(label)}</b></td><td>${escapeHtml_(value)}</td></tr>`)
    .join("");
  const htmlBody = `<h2>${escapeHtml_(heading)}</h2><table border="1" cellpadding="7" cellspacing="0"><tr><td><b>Form type</b></td><td>${escapeHtml_(formType)}</td></tr><tr><td><b>Date</b></td><td>${new Date().toLocaleString()}</td></tr>${rows}</table>`;
  const applicant = submission[0] && submission[0].value ? ` - ${submission[0].value}` : "";

  MailApp.sendEmail({
    to: NOTIFICATION_EMAIL,
    subject: `${heading}${applicant}`,
    htmlBody,
  });
}

function escapeHtml_(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function jsonResponse_(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(ContentService.MimeType.JSON);
}
