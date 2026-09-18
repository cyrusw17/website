// Handles the contact form by composing a mailto: link so the site
// works without any backend or form service.
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = form.querySelector('#f-name').value.trim();
    var business = form.querySelector('#f-business').value.trim();
    var phone = form.querySelector('#f-phone').value.trim();
    var message = form.querySelector('#f-message').value.trim();

    var subject = encodeURIComponent('New inquiry from ' + (business || name || 'website visitor'));
    var bodyLines = [
      'Name: ' + name,
      'Business: ' + business,
      'Phone: ' + phone,
      '',
      'Message:',
      message
    ];
    var body = encodeURIComponent(bodyLines.join('\n'));

    window.location.href = 'mailto:cyruswilburn@icloud.com?subject=' + subject + '&body=' + body;
  });
});
