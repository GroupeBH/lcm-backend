const Product = require("../../models").Product;
const _ = require('lodash');

const updatePrice = async (req, res) => {
  const { price, productId } = req.body;
  console.log(req.body)
  let product = await Product.findOne({
    where: {id: _.toNumber(productId)},
  });
  console.log("produit : ", product);
  try {
    if (product !== null) {
      product = product.set({unitPrice: _.toNumber(price)})
      product.save();
      console.log("with new price : ", product)
      res.status(200).json({ message: "success", product });
    }
  } catch (err) {
    console.log("error", err)
    res.status(500).json(err);
  }
};

module.exports = {
  updatePrice,
};
