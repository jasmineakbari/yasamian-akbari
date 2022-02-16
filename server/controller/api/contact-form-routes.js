const router = require('express').Router();
const mongoose = require('mongoose');
const contactFormModel = require('../../models/Contact_Form');
const email_service = require('../../utils/email_service');

// Client side contact form submissions
router.post('/contact-form-request', async (req, res, err) => {
    let send_email = await email_service.send_contact_email(req.body);

    let contactForm = new contactFormModel({
        contact_name: String(req.body.contact_name),
        contact_email: String(req.body.contact_email),
        contact_phone_number: String(req.body.contact_phone_number),
        contact_message: String(req.body.contact_message)
    });

    console.log(contactForm);
    
    contactForm.save((err, doc) => {
        if (err) {
          console.log(err);
        } else {
          res.send(doc);
        }
    });

    return send_email;
});

module.exports = router;