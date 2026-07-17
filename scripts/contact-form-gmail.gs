/**
 * Google Apps Script — Contact form → Gmail (no spam)
 *
 * Setup (logged in as metakreative9@gmail.com):
 * 1. Open https://script.google.com → New project
 * 2. Paste this entire file into Code.gs (replace any default code)
 * 3. Deploy → New deployment → Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the Web App URL
 * 5. Create `.env` in the project root:
 *    VITE_CONTACT_ENDPOINT=https://script.google.com/macros/s/XXXX/exec
 * 6. Restart `npm run dev` / redeploy the site
 *
 * Emails arrive FROM your Gmail. Reply goes to the visitor (Reply-To).
 */

var TO_EMAIL = 'metakreative9@gmail.com';

function doPost(e) {
  try {
    var data = {};
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    }

    var name = String(data.name || '').trim();
    var email = String(data.email || '').trim();
    var phone = String(data.phone || '').trim();
    var needs = String(data.needs || '').trim();
    var message = String(data.message || '').trim();

    if (!name || !email || !message) {
      return json_({ success: false, message: 'Missing required fields.' });
    }

    var subject = 'Meta Kreativ contact: ' + name + (needs ? ' — ' + needs : '');
    var html =
      '<p><strong>Name:</strong> ' + escapeHtml_(name) + '</p>' +
      '<p><strong>Email:</strong> ' + escapeHtml_(email) + '</p>' +
      '<p><strong>Phone:</strong> ' + escapeHtml_(phone) + '</p>' +
      '<p><strong>Needs:</strong> ' + escapeHtml_(needs) + '</p>' +
      '<p><strong>Message:</strong></p>' +
      '<p>' + escapeHtml_(message).replace(/\n/g, '<br>') + '</p>';

    GmailApp.sendEmail(TO_EMAIL, subject, message, {
      htmlBody: html,
      replyTo: email,
      name: name || 'Meta Kreativ Website',
    });

    return json_({ success: true });
  } catch (err) {
    return json_({ success: false, message: String(err) });
  }
}

function doGet() {
  return json_({ ok: true, service: 'Meta Kreativ contact form' });
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function escapeHtml_(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
