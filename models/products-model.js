exports.getallproducts = () => {
    const firebase = require("./connect")



    var ref = firebase.database().ref();

    ref.on("value", function(snapshot) {
        if (snapshot.val() !== undefined) {
            console.log(snapshot.val());
            return snapshot.val();
        }
    }, function(error) {
        console.log("Error: " + error.code);
    });
}