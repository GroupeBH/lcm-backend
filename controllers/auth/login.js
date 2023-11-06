const comparePassword = require("../../services/bcrypt/compare-password");

const User = require("../../models").User;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email: email } });
  try {
    if (user) {
      const isMatchPassword = comparePassword(password, user.password);
      if (isMatchPassword) {
        res.status(200).json({ message: "success", data: user });
      } else {
        res
          .status(500)
          .json({ message: "Mot de passe ou email incorrect", data: null });
      }
    } else {
      res
        .status(500)
        .json({ message: "Mot de passe ou email incorrect", data: null });
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = login;
