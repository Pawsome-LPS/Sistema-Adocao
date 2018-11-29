import express from 'express';
const router = express.Router();

router.get('/',  (req, res, next) => {
    nome = req.body.nome ? req.body.nome : null;
    raca = req.body.raca ? req.body.raca : null;
    var status;
    MongoClient.connect("mongodb://localhost:27017/pawsome", (err, db) => {
        collection = db.collection('users');
        var pets = []
        filtro = {}
        if(nome) {
            filtro['name'] = {$regex: /^.*\b(nome)\b.*$/};
        }
        if(raca){
            filtro['race'] = raca;
        }
        collection.find(filtro).toArray((err, result)=>{
            pets = result;
        });
    })
    res.status(200).send({
        title: "busca!",
        pets: pets
    });
});
module.exports = router;