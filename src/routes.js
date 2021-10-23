const express = require("express");
const UserController = require("./Controller/UserController");
//insert oauth2

const router = express.Router();

router.get("/", UserController.teste);
router.post("/register", UserController.cadastroUser)

module.exports = router;
