require("dotenv").config();
const express = require("express");
const app = express();

const routerCart = require("./routes/cart");
const routerCategory = require("./routes/category");
const routerContact = require("./routes/contact");
const routerCoupon = require("./routes/coupon");
const routerOrder = require("./routes/order");
const routerProduct = require("./routes/product");
const routerReturnExchange = require("./routes/returnExchange");
const routerReview = require("./routes/review");
const routerSizeChart = require("./routes/sizeChart");
const routerSubCategory = require("./routes/subCategory");
const routerSubscriber = require("./routes/subscriber");
const routerUser = require("./routes/user");

const dbConnect = require("./utils/dbConn");

dbConnect();

app.use(express.json());
app.use("/cart", routerCart);
app.use("/category", routerCategory);
app.use("/contact", routerContact);
app.use("/coupon", routerCoupon);
app.use("/order", routerOrder);
app.use("/product", routerProduct);
app.use("/return-exchange", routerReturnExchange);
app.use("/review", routerReview);
app.use("/size-chart", routerSizeChart);
app.use("/sub-category", routerSubCategory);
app.use("/subscriber", routerSubscriber);
app.use("/user", routerUser);

module.exports = app;
