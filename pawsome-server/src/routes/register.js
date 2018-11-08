import express from 'express';
const router = express.Router();
router.post('/',  (req, res, next) => {
    email = req.body.email;
    password = req.body.password;
    nome = req.body.nome;

    res.status(200).send({
        title: "Register!"
    });
});
module.exports = router;