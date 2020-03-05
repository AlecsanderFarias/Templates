const mongoose = require('mongoose');
const paginate = require('mongoose-paginate-v2');

const User = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false }
});

User.plugin(paginate);

module.exports = mongoose.model('User', User);
