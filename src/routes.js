const express = require("express");
const UserController = require("./Controller/UserController");
//insert oauth2

const router = express.Router();

router.get("/", UserController.teste);

module.exports = router;
