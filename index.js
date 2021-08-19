const bodyParser = require("body-parser");
const express = require("express");
const dotenv = require("dotenv");
const { sendMail } = require("./Utils/emailSender");
const { eMessage } = require("./Utils/emailTemplate");
dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", express.static(__dirname + "/views/"));

//app.use(express.static());

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server Listening on Port ${PORT}`);
});

app.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    if (!name && !email && !subject && !message)
      return res.json("Incomplete Data");
    await sendMail({
      name,
      email,
      subject,
      message: await eMessage(name, email, subject, message),
    });
    res.status(201).json({ message: "Email Sent" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Email Not Sent" });
  }
});
