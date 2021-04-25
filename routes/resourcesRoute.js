const express = require("express");
const { addResource, getResources } = require("../controller/resource");
const router = express.Router();

router.get('/', getResources);

router.post('/add', addResource);

module.exports = router;