require("dotenv").config();
const express = require("express");
const connectDb = require("./Utils/db");
const productsRouter = require("./Routes/products-routes");
const usersRouter = require("./Routes/users-routes")
const app = express();

app.use(express.json());

app.use("/api/products", productsRouter);

app.use("/api/users", usersRouter)

const PORT = process.env.PORT || 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log("server on", process.env.PORT);
  });
});
