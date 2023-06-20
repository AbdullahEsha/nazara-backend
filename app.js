require("dotenv").config();
const express = require("express");

const routerCart = require("./routes/cart");
const routerCategory = require("./routes/category");
const routerContact = require("./routes/contact");
const routerCoupon = require("./routes/coupon");
const routerOrder = require("./routes/order");
const routerProduct = require("./routes/product");
const routerPromotion = require("./routes/promotion");
const routerReturnExchange = require("./routes/returnExchange");
const routerReview = require("./routes/review");
const routerSizeChart = require("./routes/sizeChart");
const routerSubCategory = require("./routes/subCategory");
const routerSubscriber = require("./routes/subscriber");
const routerUser = require("./routes/user");
const cors = require('cors');
const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.use("/api/v1/category", routerCategory);
app.use("/api/v1/product", routerProduct);
app.use("/api/v1/promotion", routerPromotion);
app.use("/api/v1/cart", routerCart);
app.use("/api/v1/contact", routerContact);
app.use("/api/v1/coupon", routerCoupon);
app.use("/api/v1/order", routerOrder);
app.use("/api/v1/return-exchange", routerReturnExchange);
app.use("/api/v1/review", routerReview);
app.use("/api/v1/size-chart", routerSizeChart);
app.use("/api/v1/sub-category", routerSubCategory);
app.use("/api/v1/subscriber", routerSubscriber);
app.use("/api/v1/user", routerUser);

module.exports = app;
