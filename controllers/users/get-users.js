const User = require("../../models").User;

const getUsers = async (req, res) => {
  const users = await User.findAll();
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
