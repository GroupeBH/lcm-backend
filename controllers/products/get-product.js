const Sorty = require("../../models").Sorty;
const Product = require("../../models").Product;
const User = require("../../models").User;

const getProduct = async (req, res) => {
  console.log(req.params)
  const product = await Product.findOne({
    where: {id: req.params.id},
  });
  console.log("produit : ", product);
  try {
    if (product !== null) {
      res.status(200).json({ message: "success", product });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getProduct,
};
