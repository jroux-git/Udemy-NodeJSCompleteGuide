const express = require("express");
const path = require('path');
const rootDir = require('../../utils/path');

const router = express.Router();

// Relative path: GET /admin/add-product
router.get('/add-product', (req, res, next)=>{
    console.log("add product page");
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// Relative path: POST /admin/add-product
router.post('/add-product',(req, res, next)=>{
    console.log("...adding a product");
    console.log(req.body);
    res.redirect('/admin/add-product');
});

module.exports = router;