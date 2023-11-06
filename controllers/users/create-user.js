const cryptPassword = require("../../services/bcrypt/crypt-password");

const User = require("../../models").User;

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const findUser = await User.findOne({
    where: { email, name },
  });

  try {
    if (!findUser) {
      const user = await User.create({
        name,
        email,
        password: cryptPassword(password),
      });
      if (user) {
        res.status(200).json({ message: "success", data: user });
      } else {
        res.status(500).json({
          message:
            "Le serveur a rencontré une erreur et n'a pas pu traiter votre demande.",
          data: null,
        });
      }
    } else {
      res.status(500).json({
        message:
          "Cet utilisateur existe déjà. Veillez modifier vos informations.",
        data: null,
      });
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  createUser,
};
