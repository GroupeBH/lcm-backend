const Role = require("../../models").Role;

const getRole = async (req, res) => {
  try {
    const role = await Role.findOne({ where: { id: req.params.id } });
    if (role) {
      res.status(200).json({ message: "success", role });
    } else {
      res.status(200).json({ message: "Aucun role trouvé", role });
    }
  } catch (err) {
    throw err;
  }
};

module.exports = getRole;
