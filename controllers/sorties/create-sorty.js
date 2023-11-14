
const Product = require("../../models").Product;
const Sorty = require("../../models").Sorty;
const Client = require("../../models").Client;
const _ = require("lodash");

const createSorty = async (req, res) => {
  const { site, user, productName, quantity, isPaid, firstName, lastName, middlename, phone, adressAdress, aceinAdress } = req.body;

  console.log('body: ', req.body);
  const dataClient = {firstName, lastName, middlename, phone, adressAdress, aceinAdress};

  const findCliented = await Client.findOne({ where: dataClient });

  const client = findCliented ? findCliented : await Client.create(dataClient);
  console.log("client : ", client.id);

  const findedProduct = await Product.findOne({ where: {name: productName}, });

  try {

    if(findedProduct) {
        await findedProduct.set({quantity: findedProduct.quantity - _.toNumber(quantity)})
        await findedProduct.save()

        console.log(findedProduct)

        const sorty = await Sorty.create({
            quantity: _.toNumber(quantity),
            SiteId: site,
            ProductId: findedProduct.id,
            UserId: user,
            isPaid,
            clientId: client.id
        })

        console.log("sorty : ", sorty);
    
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
