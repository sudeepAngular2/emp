var express = require("express");
var app=express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
app.use(cookieParser());
app.use(bodyParser.json({ limit: '50mb', extended: true })); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  limit: '50mb', extended: true
}));
app.get('/', function (req, res) {
    // Cookies that have not been signed
    console.log('Cookies: ', req.cookies)
   
    // Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies)
    res.json({"cookies":req.signedCookies})
  })
app.listen(8000,function(err){
console.log("Server Started");
})