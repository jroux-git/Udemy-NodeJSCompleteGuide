// Global includes
const http = require("http");
const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const rootDir = require('./utils/path.js');

// Local includes
const adminRoutes = require('./js/routes/admin');
const shopRoutes = require('./js/routes/shop');

const app = express();

// Middleware 
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// If it ges here, no valid page was found, send 404 response
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views','errors', '404.html'));
});

app.listen(3000);
