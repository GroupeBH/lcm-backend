const Agent = require("../../models").Agent;
const Contact = require("../../models").Contact;
const Site = require("../../models").Site;
const Position = require("../../models").Position;
const { Op } = require('sequelize');

const getAgents = async (req, res) => {
  const agents = await Agent.findAll({ 
    where: {
        ContactId: { [Op.ne]: null },
    },
    include: [{model: Contact}, {model: Site},  {model: Position}],
});
  console.log("Agents.site : ", agents);
  try {
    if (agents.length > 0) {
      res.status(200).json({ message: "success", agents });
    }
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
};

module.exports = {
  getAgents,
};
