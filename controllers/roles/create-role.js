const Role = require("../../models").Role;
// const User = require("../../models").User;

const createRole = async (req, res) => {
  const { name } = req.body;

  const checkUser = await Role.findOne({ name });

  try {
    if (!checkUser) {
      const role = await Role.create({ name });
      if (role) {
        res.status(200).json({ message: "success", role });
      } else {
        res.status(500).json({
          message:
            "Le serveur a rencontré une erreur et n'a pas pu traiter votre demande.",
          data: null,
        });
      }
    } else {
      res.status(500).json({
        message: "Cet role existe deja",
        data: null,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = createRole;
