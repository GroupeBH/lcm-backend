const Sorty = require("../../models").Sorty;
const Product = require("../../models").Product;
const User = require("../../models").User;

const getSorties = async (req, res) => {
  const sorties = await Sorty.findAll({ 
   
    include: [{model: Product},{model: User}],
});
  console.log("Sorties : ", sorties[0]?.Product);
  try {
    if (sorties && sorties.length > 0) {
      res.status(200).json({ message: "success", sorties });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getSorties,
};
