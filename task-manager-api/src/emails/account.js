const sgMail = require('@sendgrid/mail');

const sendgridAPIKey = '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';

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'cmburboa@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app ${name}. Let me know how you get along with the app.`
    });
};

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'cmburboa@gmail.com',
        subject: 'We\'re sorry to see you go',
        text: `Good bye ${name}. I hope to see you back sometime soon.`
    });
};

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
};