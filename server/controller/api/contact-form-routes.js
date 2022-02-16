const router = require('express').Router();
const mongoose = require('mongoose');
const contactFormModel = require('../../models/Contact_Form');
const email_service = require('../../utils/email_service');

// Client side contact form submissions
router.post('/contact-form', async (req, res, err) => {
    let send_email = await email_service.send_contact_email(req.body);

    if(!err) {   
        let contactForm = new contactFormModel({
            contact_name: req.body.name,
            contact_email: req.body.email,
            contact_phone_number: req.body.phone_number,
            contact_message: req.body.message
        });
       
        contactForm.save((err, doc) => {
            if (!err) {
                console.log('success', 'User added successfully!');
                res.redirect('/contact');
            } else {
                console.log('Error during record insertion : ' + err);
            }
        });
    }
    else {                
        console.log(err);
    }
    return send_email;
});

module.exports = router;