const router = require('express').Router();
const contactFormRoutes = require('./api/contact-form-routes');

router.use(contactFormRoutes);

module.exports = router;