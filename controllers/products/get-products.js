const Product = require("../../models").Product;

const getProducts = async (req, res) => {
  const products = await Product.findAll();
  console.log("Products : ", products);
  try {
    if (products.length > 0) {
      res.status(200).json({ message: "success", products });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getProducts,
};
