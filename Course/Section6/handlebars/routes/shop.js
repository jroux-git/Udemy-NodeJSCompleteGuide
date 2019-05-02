const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("shop.js", adminData.products);
  res.render("shop", {
    pageTitle: "Shop",
    path: "/",
    prods: adminData.products,
    hasProducts: adminData.products.length > 0
  });
});

module.exports = router;
