var express = require('express');
const { check, validationResult } = require('express-validator');
var router = express.Router();
var bcrypt = require('bcrypt');
var auth = require('../middleware/auth');
var jwt = require('jsonwebtoken');
var config = require('config');
var userModel = require('../models/User.model');

router.get('/', auth, async (req, res) => {

    try {

        var user = await userModel.findById(req.user.id).select('-password');
        res.status(200).json({ msg: user });

    } catch (err) {

        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
})

router.post('/',
    /**
     * Providing the validation
     */
    [
        check('email', 'Please provide a valid Email')
            .isEmail(),
        check('password', 'Please enter the password')
            .exists()
    ],


    async (req, res) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ msg: errors.array() });
        }

        const { email, password } = req.body;

        try {

            let user = await userModel.findOne({
                email: email
            })

            if (!user) {
                res.status(400).json({ msg: 'No user is available from this email id..' });
            }

            /**
             * Now checking wheather the password is correct or not
             */

            const isMatch = await bcrypt.compare(password, user.password);

            /** If the passwords don't match */
            if (!isMatch) {

                res.status(400).json({ msg: 'Invalid credentials' });
            }

            var payload = {

                userData: {
                    id: user.id
                }
            };

            jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 3600 }, (err, token) => {

                if (err) throw err;

                res.status(200).json({ token });
            });

        } catch (error) {

            console.log(error.message);
            res.status(500).json({ msg: 'Server error ..' });
        }
    })

module.exports = router;