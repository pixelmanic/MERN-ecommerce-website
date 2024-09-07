const express = require("express");
const { getUser, postUser } = require("../Controllers/users-controller");

const router = express.Router();


router.get("/", getUser)

router.post("/", postUser)

module.exports = router;