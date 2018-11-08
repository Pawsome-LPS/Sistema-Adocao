import express from 'express';
const router = express.Router();

router.get('/',  (req, res, next) => {
    nome = req.body.nome;
    raca = req.body.raca;
    
    res.status(200).send({
        title: "busca!",
        pets: []
    });`git `
});
module.exports = router;