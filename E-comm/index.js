const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config()
const jwt = require("jsonwebtoken")

const app = express();
const port = process.env.PORT || 3000;
const db = mongoose.connection;

const userRouter = require("./routes/userRoutes");
const roleRouter = require("./routes/roleRoutes");
const categoryRouter = require("./routes/categoryRoutes")
const productRouter = require("./routes/productRoutes")
const tagRouter = require("./routes/tagRoutes");
const cartRouter = require("./routes/cartRoutes")
const orderRouter = require("./routes/orderRoutes")

app.use(express.json());

app.get("/", (req, res) => res.send("Home!"));
app.use(userRouter);
app.use(roleRouter);
app.use(categoryRouter);
app.use(productRouter);
app.use(tagRouter);
app.use(cartRouter);
app.use(orderRouter);


//dummy login/logout endpoints
app.post("/login", (req, res) => {
  res.send("Logged in!")
})

app.get("/logout", (req, res) => {
  res.send("Logged out!")
})



app.listen(port, () => {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/E-commerce");
    db.on("error", () => console.log(`Database connection error`));
    db.once("open", function () {
      console.log("Mongodb connected.");
    });
  } catch (error) {
    console.log(`someting went worng ${error}`);
  }
  console.log(`Example app listening on ${port} port!`);
});
