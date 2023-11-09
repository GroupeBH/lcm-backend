const Site = require("../../models").Site;

const getSite = async (req, res) => {
  console.log(req.params)
  const site = await Site.findOne({
    where: {id: req.params.id}
  });
  console.log("Site : ", site);
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
