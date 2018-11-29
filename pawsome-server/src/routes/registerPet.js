import express from 'express';
const router = express.Router();
router.post('/',  (req, res, next) => {
    o_id = req.body.owner_id;
    nome = req.body.nome;
    raca = req.body.raca;

    var status;
    MongoClient.connect("mongodb://localhost:27017/pawsome", (err, db) => {
        if (err) {
            status = null;
            return;
        }
        collection = db.collection('users');

        collection.insertOne({owner_id: o_id, nome: nome, raca: raca}, (error, res) => {
            status = error ? null : "ok";
        })
    })
    if (status) {
        res.status(200).send({
            title: "Register Pet!"
        });
    }
    else {
        res.status(400).send({
            title: "Fuck!"
        });
    }
});
module.exports = router;