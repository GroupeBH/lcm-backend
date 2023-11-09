var express = require('express');
const { createAgent } = require('../controllers/agents/create-agent');
const { getAgents } = require('../controllers/agents/get-agents');
const { getAgent } = require('../controllers/agents/get-agent');
var router = express.Router();

/* GET users listing. */
router.post('/create-agent', createAgent);
router.get('/agents', getAgents)
router.get('/agents/:id', getAgent)

module.exports = router;
