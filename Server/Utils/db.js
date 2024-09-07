const mongoose = require("mongoose");

const URI = process.env.MONGO_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
  } catch (error) {
    console.error("didn't connect to Database");
    process.exit(0);
  }
};

module.exports = connectDb;
