
const Product = require("../../models").Product;
const Sorty = require("../../models").Sorty;
const _ = require("lodash");

const createSorty = async (req, res) => {
  const { site, user, productName, quantity } = req.body;

  const findedProduct = await Product.findOne({
    where: {name: productName},
  });

  try {
    if(findedProduct) {
        await findedProduct.set({quantity: findedProduct.quantity - _.toNumber(quantity)})
        await findedProduct.save()

        console.log(findedProduct)

        const sorty = await Sorty.create({
            quantity: _.toNumber(quantity),
            SiteId: site,
            ProductId: findedProduct.id,
            UserId: user
        })
    
        return res.status(200).json({ message: "success", sorty });
    }
    
    
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

module.exports = {
  createSorty,
};
