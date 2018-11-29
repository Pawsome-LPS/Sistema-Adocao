express = require('express');
MongoClient = require('mongodb').MongoClient;

const router = express.Router();
router.post('/',  (req, res, next) => {
    email = req.body.email;
    password = req.body.password;
    var status;
    MongoClient.connect("mongodb://localhost:27017/pawsome", (err, db) => {
        collection = db.collection('users');
        collection.findOne({email: email, password: password}, (error, item) => {
            status = item ?  {email: item.email, name: item.name} : null;
        })
    })
    if (status) {
        res.status(200).send({
            status
        });
    }
    else {
        res.status(400).send({
            title: "Fuck!"
        });
    }
});
module.exports = router;