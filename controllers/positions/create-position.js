const Position = require("../../models").Position;

const createPosition = async (req, res) => {
  const { name } = req.body;
  console.log(req.body);
  const checkPosition = await Position.findOne({
    where: { name },
  });

  try {
    if (!checkPosition) {
      const position = await Position.create({
        name,
      });
      if (position) {
        console.log("position crée");
        res.status(200).json({ message: "success", position });
      } else {
        res.status(500).json({
          message:
            "Le serveur a rencontré une erreur et n'a pas pu traiter votre demande.",
        });
      }
    } else {
      res.status(500).json({
        message:
          "Cette position existe déjà. Veillez modifier votre information.",
      });
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  createPosition,
};
