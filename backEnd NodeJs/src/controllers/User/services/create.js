const UserModel = require('../../../models/User');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
  try {
    const { password, ...rest } = req.body;
    const userData = rest;

    userData.password = await bcrypt.hash(password, 8);
    userData.roles = ['athlete'];

    await UserModel.create(userData);

    return res.status(200).end();
  } catch (error) {
    console.log(error);

    return res.status(500).end();
  }
};
