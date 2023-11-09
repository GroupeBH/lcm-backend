const Agent = require("../../models").Agent;
const Contact = require("../../models").Contact;
const Site = require("../../models").Site;
const Position = require("../../models").Position;

const getAgent = async (req, res) => {
  console.log(req.params)
  const agent = await Agent.findOne({
    where: {id: req.params.id},
    include: [{model: Contact}, {model: Site},  {model: Position}],
  });
  console.log("Agent : ", agent);
  try {
    if (agent !== null) {
      res.status(200).json({ message: "success", agent });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAgent,
};
