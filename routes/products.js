const firebase = require("./../models/connect")
var ref = firebase.database().ref();
const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser');
var urlEncode = bodyparser.urlencoded({ extended: false });
ref.on("value", function(snapshot) {
    products = snapshot.val();
}, function(error) {
    console.log("Error: " + error.code);
});


router.get('/products', (req, res, next) => {


    res.render('products', products);

})
module.exports = router;