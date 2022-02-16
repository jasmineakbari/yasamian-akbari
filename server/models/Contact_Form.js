const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/date_format');

const contactFormSchema = new Schema(
    {
        contact_name: {
            type: String,
            required: true
        },
        contact_email: {
            type: String,
            required: true
        },
        contact_phone_number: {
            type: String,
            required: false,
            maxlength: 10
        },
        contact_message: {
            type: String,
            required: true,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        }
    },
    {
      toJSON: {
        getters: true
      }
    }
);

const contactForm = model('contact_form', contactFormSchema)
  
module.exports = contactForm;