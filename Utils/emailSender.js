const nodemailer = require("nodemailer");

exports.sendMail = async (option) => {
  // Creat a transporter object and input all your configurations

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  // The actual data being passed as
  // email options name, email, subject, message

  const mailOptions = {
    from: `${option.name} <${option.email}>`,
    to: process.env.YOUR_EMAIL,
    subject: `Contact US Form- ${option.subject}`,
    html: option.message,
  };

  await transporter.sendMail(mailOptions);

  // const result = await transporter.sendMail(mailOptions, // function(err, response))
  // if (err) console.log(err)
};
