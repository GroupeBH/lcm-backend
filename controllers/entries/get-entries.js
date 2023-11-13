const Entry = require("../../models").Entry;
const Product = require("../../models").Product;
const User = require("../../models").User;

const getEntries = async (req, res) => {
  const entries = await Entry.findAll({ 
   
    include: [{model: Product},{model: User}],
});
  console.log("Entrys : ", entries[0].Product);
  try {
    if (entries.length > 0) {
      res.status(200).json({ message: "success", entries });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getEntries,
};
