const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {

    /** Get token from the header */
    const token = req.header('x-auth-token');
    //console.log(token);
    // check if token is null or not
    if (!token) {
        res.status(401).json({ msg: 'Acces is denied..' });
    }

    try {

        const decoded = jwt.verify(token, config.get('jwtSecret'));
        //console.log(decoded);
        req.user = decoded.user;

        next();

    } catch (error) {

        res.status(401).json({ msg: 'Token is invalid' });
    }
}