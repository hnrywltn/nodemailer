
const express = require('express');
const app = express();
const port = 5000;
const nodemailer = require('nodemailer');
require('dotenv').config();







app.get('/', (req, res) =>{
    sendEmail()
        .then(response => res.send(response.message))
        .catch(err => res.status(500).send(error.message))
});



function sendEmail() {
    return new Promise((resolve, reject) => {

        let transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:process.env.EMAIL_USERNAME,
                pass:process.env.EMAIL_PASSWORD,
            }
        });

        const mail_options = {
            from:process.env.EMAIL_USERNAME,
            to:'hnrywltn@gmail.com',
            subject:'this is just a test email',
            text:'testing'
        }

        transporter.sendMail(mail_options, (err, info)=>{
            if(err){
                console.log(err);
                return reject({message: `An error occured `});
            };
            return resolve({message:`Email sent successfully`});
        });

    })
}


app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});





// let transport = nodemailer.createTransport(options[, defaults])
