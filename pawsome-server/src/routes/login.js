import express from 'express';
const router = express.Router();
router.post('/',  (req, res, next) => {
    email = req.body.email;
    password = req.body.password;
    res.status(200).send({
        title: "Login!"
    });
});
module.exports = router;