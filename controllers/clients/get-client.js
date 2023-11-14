const Client = require("../../models").Client;

const getClient = async (req, res) => {
  const client = await Client.findOne({
    where: { id: req.params.id }
  });
  try {
    if (client) {
      res.status(200).json({ message: "success", client });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = getClient;
