const nodemailer = require("nodemailer");
const enviroment = require('../enviroments/enviroments');

class Mailer {
	constructor() {
		this.transporter = nodemailer.createTransport({
			host: enviroment.enviromentsDataEmail.MAIL_HOST,
			port: enviroment.enviromentsDataEmail.PORT,
			secure: false, // true for 465, false for other ports
			auth: {
				user: enviroment.enviromentsDataEmail.MAIL_FROM_ADDRESS, // generated ethereal user
				pass: enviroment.enviromentsDataEmail.MAIL_PASSWORD // generated ethereal password
			}
		});
		/* verify connection configuration
		this.transporter.verify(function(error, success) {
			if (error) {
				console.log(error);
			} else {
				console.log('Server is ready to take our messages');
			}
		});*/
	}

	sendMail(paramSendEmail) {
		//console.log(paramSendEmail);
		try {

			let messages = '';
			let mailOptions = {
				from: enviroment.enviromentsDataEmail.MAIL_FROM_ADDRESS, // sender address
				to: paramSendEmail.email_destinatario, // list of receivers
				subject: paramSendEmail.asunto, // Subject line
				//text: paramSendEmail.mensaje, // plain text body
				html: "<b>Hello world?</b>", // html body
				attachments: [
					{ // Use a URL as an attachment
					  filename: 'your-testla.png',
					  path: 'https://media.gettyimages.com/photos/view-of-tesla-model-s-in-barcelona-spain-on-september-10-2018-picture-id1032050330?s=2048x2048'
				  	}
				]
			  };
			
			this.transporter.sendMail(mailOptions, (error, info) => {
				if (error) {
					console.log('Error al enviar el correo ' + error);
				} else {
					console.log('Correo enviado correctamente.');
				}
			});

		}catch (x) {
			console.log('Email.enviarCorreo -- Error--' + x);
		}

		
	}

}

module.exports = new Mailer;