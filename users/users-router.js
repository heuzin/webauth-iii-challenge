const router = require('express').Router();

const Users = require('./users-model');
const restricted = require('');

router.get('/', restricted, (req, res) => {

    const { sub, role } = req.decodedToken;

    if (role === 'department') {
        Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.status(500).send(err));
    } else {
        Users.findById(sub)
        .then(users => {
            res.json(users);
        })
        .catch(err => res.status(500).send(err));
    }
});

module.exports = router;