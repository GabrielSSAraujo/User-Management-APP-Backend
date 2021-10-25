const express = require("express");
const UserController = require("./Controller/UserController");
const jwt = require('./Auth/jwt')

const router = express.Router();

router.post("/register", jwt.checkJWT, UserController.createUser);
router.get("/login",  UserController.userLogin);
router.get("/user/logeded", jwt.checkJWT, UserController.getInfoUser);
router.get("/user/listAll", jwt.checkJWT, UserController.listAllUsers);
module.exports = router;
