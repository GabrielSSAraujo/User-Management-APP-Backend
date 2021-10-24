const express = require("express");
const UserController = require("./Controller/UserController");
const jwt = require('./Auth/jwt')
//insert oauth2

const router = express.Router();

router.post("/register", jwt.checkJWT, UserController.createUser);
router.get("/login",  UserController.userLogin);
module.exports = router;
