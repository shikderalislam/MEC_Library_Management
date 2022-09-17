const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.jwtsecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user
            next();
        });
    } else {
        res.sendStatus(401);
    }
}

module.exports = authenticateToken