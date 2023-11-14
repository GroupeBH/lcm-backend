
const Product = require("../../models").Product;
const Entry = require("../../models").Entry;
const _ = require("lodash");

const createEntry = async (req, res) => {
  const { site, user, productName, quantity, price } = req.body;

  console.log("req data", req.body)

  const findedProduct = await Product.findOne({
    where: {name: productName},
  });

  if(findedProduct) {
    await findedProduct.set({quantity: findedProduct.quantity + _.toNumber(quantity)})
    await findedProduct.save()
  }


  const product = (!findedProduct) ? await Product.create({name: productName, quantity: _.toNumber(quantity)})
     : findedProduct;
  console.log('produit:', product)
  try {
    if(product) {
      const entry = await Entry.create({
        quantity: _.toNumber(quantity),
        unitPrice: _.toNumber(price),
        SiteId: _.toNumber(site),
        ProductId: product.id,
        UserId: user
      })
  
      return res.status(200).json({ message: "success", entry });
    }
    
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

module.exports = {
  createEntry,
};
