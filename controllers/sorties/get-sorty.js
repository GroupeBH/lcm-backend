const Sorty = require("../../models").Sorty;
const Product = require("../../models").Product;
const User = require("../../models").User;

const getSorty = async (req, res) => {
  console.log(req.params)
  const sorty = await Sorty.findOne({
    where: {id: req.params.id},
    include: [{model: Product},{model: User}],
  });
  console.log("la sortie : ", sorty);
  try {
    if (sorty !== null) {
      res.status(200).json({ message: "success", sorty });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getSorty,
};
