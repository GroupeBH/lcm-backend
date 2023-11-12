const User = require("../../models").User;
const { Op } = require("sequelize");
const Contact = require("../../models").Contact;
const Site = require("../../models").Site;
const Role = require("../../models").Role;

const getUsers = async (req, res) => {
  const users = await User.findAll({
    where: {},
    include: [{ model: Contact }, { model: Site }, { model: Role }],
  });
  console.log("users : ", users);
  try {
    if (users.length > 0) {
      res.status(200).json({ message: "success", users });
    } else {
      res.status(404).json({ message: "Not Found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getUsers,
};
