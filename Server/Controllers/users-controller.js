const users = require("../Models/users-models");

const getUser = async (req, res) => {
  try {
    res.status(200).send("user received");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const postUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const userExists = await users.findOne({ email });

    if (userExists) {
      res.status(400).send("Email already Exists!");
    }

    const user = await users.create({ username, email, password });
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { getUser, postUser };
