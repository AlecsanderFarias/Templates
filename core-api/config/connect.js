const mongoose = require('mongoose');
const URL = process.env.MONGODB_URI;
mongoose.Promise = global.Promise;
mongoose.connect(URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection;

module.exports = mongoose;
