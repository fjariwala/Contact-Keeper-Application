const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {

    /** Get token from the header */
    const token = req.header('x-auth-token');

    // check if token is null or not
    if (!token) {
        res.status(401).json({ msg: 'Acces is denied..' });
    }

    try {

        const decoded = jwt.verify(token, config.get('jwtSecret'));

        req.user = decoded.userData;

        next();

    } catch (error) {

        res.status(401).json({ msg: 'Token is invalid' });
    }
}