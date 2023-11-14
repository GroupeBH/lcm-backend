var express = require("express");
const getClients = require("../controllers/clients/get-clients");
var router = express.Router();

router.get("/get-clients", getClients);

module.exports = router;
