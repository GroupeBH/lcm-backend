
const Site = require("../../models").Site;

const createSite = async (req, res) => {
  const { name } = req.body;
  console.log(req.body);
  const checkSite = await Site.findOne({
    where: { name },
  });

  try {
    if (!checkSite) {
      const site = await Site.create({
        name,
      });
      if (site) {
        console.log("site crée")
        res.status(200).json({ message: "success", site });
      } else {
        res.status(500).json({
          message:
            "Le serveur a rencontré une erreur et n'a pas pu traiter votre demande.",
        });
      }
    } else {
      res
        .status(500)
        .json({
          message:
            "Ce site existe déjà. Veillez modifier votre information.",
        });
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  createSite,
};
