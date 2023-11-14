const Client = require("../../models").Client;

const getClients = async (req, res) => {
  const clients = await Client.findAll();
  console.log("clients : ", clients);
  try {
    if (clients.length > 0) {
      res.status(200).json({ message: "success", clients });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = getClients;
