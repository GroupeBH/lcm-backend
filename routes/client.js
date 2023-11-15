var express = require("express");
const getClients = require("../controllers/clients/get-clients");
const getClient = require("../controllers/clients/get-client");
var router = express.Router();

router.get("/get-clients", getClients);
router.get("/:id", getClient);

module.exports = router;
