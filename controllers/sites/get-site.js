const Site = require("../../models").Site;
const Agent = require("../../models").Agent;
const Position = require("../../models").Position;
const Contact = require("../../models").Contact;

const getSite = async (req, res) => {

  const site = await Site.findOne({
    where: {id: req.params.id},
    include: [{
      model: Agent,
      include: [Contact,Position]
    }],

  });

  try {
    if (site !== null) {
      res.status(200).json({ message: "success", site });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getSite,
};
