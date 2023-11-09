
const Contact = require("../../models").Contact;
const Agent = require("../../models").Agent;
const _ = require("lodash");

const createAgent = async (req, res) => {
  const { firstname, middlename, lastname, email, phone, birthdate, startdate, address, site, position } = req.body;

  const contactData = _.omit(req.body, ['site', 'position'])
  console.log("contact:", contactData)
  const findContact = await Contact.findOne({
    where: contactData,
  });
  console.log("findContact:", findContact)

  try {
    if (!findContact) {
      const contact = await Contact.create(contactData);
      if (contact) {
        console.log("contact crée:", contact)
        console.log("situation", typeof _.toNumber(site), position)
        console.log("idCon", contact.id)
        const agent = await Agent.create({
            ContactId: contact.id,
            SiteId: _.toNumber(site),
            PositionId: _.toNumber(position),
        })
        console.log("agent crée:", agent.contact)
        res.status(200).json({ message: "success", agent });
      } else {
        res.status(500).json({
          message:
            "Le serveur a rencontré une erreur et n'a pas pu traiter votre demande.",
        });
      }
    } else {
      res
        .status(500)
        .json({
          message:
            "Cet utilisateur existe déjà. Veillez modifier vos informations.",
        });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

module.exports = {
  createAgent,
};
