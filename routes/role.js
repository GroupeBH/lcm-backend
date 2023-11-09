var express = require("express");
const createRole = require("../controllers/roles/create-role");
const getRoles = require("../controllers/roles/get-roles");
const getRole = require("../controllers/roles/get-role");
var router = express.Router();

router.post("/create-role", createRole);
router.get("/get-roles", getRoles);
router.get("/:id", getRole);

module.exports = router;
