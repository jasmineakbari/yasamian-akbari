const router = require('express').Router();
const email_service = require('../../utils/email_service')

// client side contact form submissions
router.post('/contact-form', (req, res) => {
    const contact_request = req.body;
    
});

module.exports = router;