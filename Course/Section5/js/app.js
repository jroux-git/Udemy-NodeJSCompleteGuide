const http = require("http");
const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded());

app.get('/add-product', (req, res, next)=>{
    console.log("Add Product");
    res.send('<form action="/product" method="POST"><input type="text" name="title" id="txtProductName" /><button type="submit" value="Add">Add</button></form>');
    res.end();
});

app.post('/product',(req, res, next)=>{
    console.log("...adding a product");
    console.log(req.body);
    res.redirect('/add-product');
});

app.use('/',(req, res, next)=>{
    console.log("Fallback middelware");
    res.send('<h1>Home Page</h1>');
});

app.listen(3000);
