const express = require("express");
const UserController = require("./Controller/UserController");
//insert oauth2

const router = express.Router();

router.post("/register", UserController.createUser);

module.exports = router;
