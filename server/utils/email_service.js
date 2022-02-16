const nodemailer = require("nodemailer");

// Contact_Form email sent via request input
async function send_contact_email(input) {
    await input;
    let email_req = input;
    let email_auth = String(process.env.EMAIL_AUTH);
    const to_email = String(process.env.CONTACT_EMAIL);

    // create reusable transporter object using the default SMTP transport
    let smtpConfig = {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: to_email, 
            pass: email_auth 
        }
    };

    let transporter = nodemailer.createTransport(smtpConfig);

    // send mail with defined transport object
    let email_data = await transporter.sendMail({
        from: to_email,
        to: to_email,
        subject: `New Portfolio Contact Request from ${email_req.contact_name}`,
        html: `<body>
                <p>Contact Request Informaition</p>
                </br>
                <p>Name: ${email_req.contact_name}</p>
                </br>
                <p>Email: ${email_req.contact_email}</p>
                </br>
                <p>Phone: ${email_req.contact_phone_number}</p>
                </br>
                <p>Contact Message: ${email_req.contact_message}</p>
                </body>`
    });


    console.log("Contact request sent!", email_data.messageId);
};

module.exports.send_contact_email = send_contact_email;