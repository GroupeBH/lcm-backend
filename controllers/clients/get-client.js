const Client = require("../../models").Client;

const getClient = async (req, res) => {
  const client = await Client.findOne({
    where: { id: req.params.id }
  });
  try {
    if (client) {
      res.status(200).json({ message: "success", client });
    }
    else{
      res.status(500).json({ message: "Cet utilisateur n'existe.", });
    }
  } catch (err) {
    res.status(400).json(err);
  }
};
module.exports = getClient;
