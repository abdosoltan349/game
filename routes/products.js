const firebase = require("./../models/connect")
    //var ref = firebase.database().ref().child('/1');
const express = require('express');
const router = express.Router();



router.get('/products', (req, res, next) => {
    var dbRef = firebase.database().ref('/');
    dbRef.on("child_added", snap => {
        products = snap.val();
        console.log(products)
        res.render('products', products)
    });





})
module.exports = router;