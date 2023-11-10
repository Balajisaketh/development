var nodemailer = require('nodemailer')

// Create a transporter using your email service's SMTP settings

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user:'balajisakeths@gmail.com',
      pass:'kjye semt wedh msme' // naturally, replace both with your real credentials or an application-specific password
    }
  });
   

// Email content
function sendmail(receivermailid,orderid)
{
    const mailOptions = {
        from: 'balajisakeths@gmail.com',
        to: receivermailid,
        subject: 'Subject of the Email',
        text: 'Your order placed successfully. Order ID: ' + orderid,
        // You can also use HTML to format the email body
        html: `<p>Your order placed successfully. Order ID: ${orderid}</p>`,
      };

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
}
module.exports = { sendmail };

