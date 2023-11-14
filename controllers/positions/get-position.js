const Agent = require("../../models").Agent;
const Contact = require("../../models").Contact;
const Site = require("../../models").Site;
const Position = require("../../models").Position;

const getPosition = async (req, res) => {
  console.log(req.params)
  const position = await Position.findOne({
    where: {id: req.params.id},
    include: {
      model: Agent,
      include: [Contact, Site]
    }
  });
  console.log("position : ", position);
  try {
    if (position !== null) {
      res.status(200).json({ message: "success", position });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getPosition,
};
