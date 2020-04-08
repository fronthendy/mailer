const nodemailer = require('nodemailer');

const transport = {
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'dae1b551fce699',
    pass: 'aeaad613e64ac3'
  }
};

module.exports = {
  enviar: (req, res) => {

    const transporter = nodemailer.createTransport(transport);

    const email = {
      from: 'hendy@digitalhouse.com',
      to: req.body.dest,
      subject: req.body.subj,
      text: req.body.msg
    };

    transporter.sendMail(email,
      (error, info) => {
        if (error) {
          console.log(info);
          console.log(error);
          res.send('deu ruim!');
        } else {
          console.log(info);
          res.send('deu bom!');
        }
      }
    )
  }
}