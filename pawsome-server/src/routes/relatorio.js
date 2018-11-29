express = require('express');
MongoClient = require('mongodb').MongoClient;

const router = express.Router();

router.get('/',  (req, res, next) => {
    var status;
    MongoClient.connect("mongodb://localhost:27017/pawsome", (err, db) => {
        collection = db.collection('users');
        pets = []
        collection.find({}).toArray((error, result)=>{
            pets = error? [] : result;
                        
        });
    })
    res.status(200).send({
        title: "busca!",
        pets: pets
    });
});
module.exports = router;