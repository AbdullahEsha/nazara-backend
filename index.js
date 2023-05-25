const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routerCart = require("./routes/cart");
const routerCategory = require("./routes/category");
const routerContact = require("./routes/contact");
const routerCoupon = require("./routes/coupon");
const routerOrder = require("./routes/order");
const routerProduct = require("./routes/product");
const routerReturnExchange = require("./routes/returnExchange");
const routerReview = require("./routes/review");
const routerSizeChart = require("./routes/sizeChart");
const routerUser = require("./routes/user");

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("hello world! test check operational....");
});

const connUri = process.env.MONGODB_URL;

mongoose
  .connect(connUri)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

app.use("/cart", routerCart);
app.use("/category", routerCategory);
app.use("/contact", routerContact);
app.use("/coupon", routerCoupon);
app.use("/order", routerOrder);
app.use("/product", routerProduct);
app.use("/return-exchange", routerReturnExchange);
app.use("/review", routerReview);
app.use("/size-chart", routerSizeChart);
app.use("/user", routerUser);

module.exports = app;
