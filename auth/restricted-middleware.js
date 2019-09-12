const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (toke) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                console.log('failed to verify', err);
                res.status(401).json({
                    message: 'not verified'
                });
            } else {
                req.decodedToken = decodedToken
                next()
            }
        });
    } else {
        res.status(400).json({
            message: 'no token provided'
        });
    }
};