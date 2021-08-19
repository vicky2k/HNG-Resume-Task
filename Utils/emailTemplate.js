exports.eMessage = async (name, email, subject, message) => {
  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact US Response Form</title>
  </head>
  <body>
    <h2>Somebody wants to get across to you</h2>

    <div>
    Name: ${name}
    Email: ${email}
    Subject: ${subject}
     Message: ${message}
       </div>
  </body>
</html>`;

  return html;
};
