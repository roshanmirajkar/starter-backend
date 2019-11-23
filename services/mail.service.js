const mailcomposer = require('mailcomposer');
const config = require('../config');
// eslint-disable-next-line
const mailgun = require('mailgun-js')({ apiKey: config.email.mailgun.private, domain: config.email.domain });

exports.send = function(from, to, subject, text) {
  return new Promise((resolve, reject) => {
    const mail = mailcomposer({
      from,
      to,
      subject,
      html: text
    });

    mail.build((mailBuildError, message) => {
      const emailTemplate = {
        to,
        message: message.toString('ascii')
      };

      mailgun.messages().sendMime(emailTemplate, (err, body) => {
        if(err) {
          reject(new Error(err));
        }
        resolve(body);
      });
    });
  });
};
