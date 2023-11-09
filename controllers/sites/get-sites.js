const Site = require("../../models").Site;

const getSites = async (req, res) => {
  const sites = await Site.findAll();
  console.log("Sites : ", sites);
  try {
    if (sites.length > 0) {
      res.status(200).json({ message: "success", sites });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getSites,
};
