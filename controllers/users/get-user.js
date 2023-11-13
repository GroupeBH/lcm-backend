const User = require("../../models").User;
const Contact = require("../../models").Contact;
const Site = require("../../models").Site;
const Role = require("../../models").Role;

const getUser = async (req, res) => {
  console.log(req.params);
  const user = await User.findOne({
    where: { id: req.params.id },
    include: [{ model: Contact }, { model: Site }, { model: Role }],
  });
  console.log("User : ", user);
  try {
    if (user) {
      res.status(200).json({ message: "success", user });
    }
    // else {
    //   res.status(500).json({ message: "faild", user: null });
    // }
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  getUser,
};
