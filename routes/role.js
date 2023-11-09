var express = require("express");
const createRole = require("../controllers/roles/create-role");
const getRoles = require("../controllers/roles/get-roles");
var router = express.Router();

router.post("/create-role", createRole);
router.get("/get-roles", getRoles);

module.exports = router;
