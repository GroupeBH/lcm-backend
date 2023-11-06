const Position = require("../../models").Position;

const getPosition = async (req, res) => {
  console.log(req.params)
  const position = await Position.findOne({
    where: {id: req.params.id}
  });
  console.log("position : ", position);
  try {
    if (position !== null) {
      res.status(200).json({ message: "success", position });
    } else {
      console.log("pas trouvé")
      res.status(404).json({ message: "Not Found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getPosition,
};
