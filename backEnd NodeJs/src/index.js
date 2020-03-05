const User = require('./controllers/User');

module.exports = app => {
  app.use('/user', User);
};
