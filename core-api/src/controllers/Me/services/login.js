const UserModel = require('../../../models/User');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
const AUTH_SECRET = process.env.AUTH_SECRET;

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email }).select('password');

    if (!user) return res.status(401).end(); //usuario nao existe

    //senha errada
    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(401).end();
    }

    const me = await UserModel.findById(user._id);
    const token = jwt.sign({ id: user._id }, AUTH_SECRET, {});

    return res
      .status(200)
      .json({ token, me })
      .end();
  } catch (error) {
    return res.status(500).end();
  }
};
