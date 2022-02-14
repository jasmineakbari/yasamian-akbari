const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/ya-portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;