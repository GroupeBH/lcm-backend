const cryptPassword = require("../../services/bcrypt/crypt-password");

const User = require("../../models").User;
const Contact = require("../../models").Contact;
const Role = require("../../models").Role;
const Site = require("../../models").Site;

const moment = require("moment");

const _ = require("lodash");

const createUser = async (req, res) => {
  const {
    name,
    email,
    password,
    firstName,
    lastName,
    middlename,
    phone,
    birthdate,
    address,
    role,
    site,
  } = req.body;

  const contactData = _.omit(req.body, ["site", "role"]);

  let contactCriteria = {
    firstName,
    lastName,
    email,
  };

  console.log("contactData : ", contactData);

  const findContact = await Contact.findOne({ where: contactCriteria });

  try {
    if (!findContact) {
      const contact = await Contact.create(contactData);
      if (contact) {
        const user = await User.create({
          name,
          email,
          password: cryptPassword(password),
          RoleId: _.toNumber(role),
          SiteId: _.toNumber(site),
          ContactId: _.toNumber(contact.id),
        });
        if (user) {
          res.status(200).json({ message: "success", data: user });
        } else {
          res.status(500).json({
            message:
              "Le serveur a rencontré une erreur et n'a pas pu traiter votre demande.",
            data: null,
          });
        }
      } else {
        res.status(500).json({
          message:
            "Le serveur a rencontré une erreur et n'a pas pu traiter votre demande.",
          data: null,
        });
      }
    } else {
      res.status(500).json({
        message:
          "Cet utilisateur existe déjà. Veillez modifier vos informations.",
        data: null,
      });
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  createUser,
};
