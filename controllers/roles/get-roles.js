const Role = require("../../models").Role;

const getRoles = async (req, res) => {
  const roles = await Role.findAll();
  try {
    if (roles.length > 0) {
      res.status(200).json({ message: "success", roles });
    } else {
      res.status(500).json({ message: "Aucun role trouvé.", data: null });
    }
  } catch (err) {
    throw err;
  }
};

module.exports = getRoles;
