const User = require("../../models").User;

const createUser = async (req, res) => {
  const { name, email } = req.body;

  try {
    const user = await User.create({
      name,
      email,
    });
    console.log(user);
    if (user) {
      res.status(200).json({ message: "success", user });
    } else {
      res.status(500).json({ message: "User is not created" });
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  createUser,
};
