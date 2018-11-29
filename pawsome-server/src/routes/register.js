express = require('express');
MongoClient = require('mongodb').MongoClient;

const router = express.Router();
router.post('/',  (req, res, next) => {
    email = req.body.email;
    password = req.body.password;
    nome = req.body.nome;

    var status;
    MongoClient.connect("mongodb://localhost:27017/pawsome", (err, db) => {
        collection = db.collection('users');
        collection.insertOne({email: email, password: password, name: name}, (error, item) => {
            status = item ?  "Ok" : "";
        })
    })
    if (status) {
        res.status(200).send({
            title: "Register!"
        });
    }
    else {
        res.status(400).send({
            title: "Fuck!"
        });
    }
});
module.exports = router;