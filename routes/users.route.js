var express = require('express');
const { check, validationResult } = require('express-validator');
var router = express.Router();
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var config = require('config');
var userModel = require('../models/User.model');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/',
  /**
   * Form body server side validation
   */
  [
    check('name', 'name is required')
      .not()
      .isEmpty(),
    check('email', 'valid email is required')
      .isEmail(),
    check('password', 'password must be 5 or more characters long')
      .isLength({ min: 5 })
  ],

  /**
   * From here the data is entered into the database
   */
  async (req, res) => {

    const errors = validationResult(req);

    // means if errors are here... so then respond with error code
    if (!errors.isEmpty()) {
      return res.status(400).json({ msg: errors.array() });
    }

    const { name, email, password } = req.body;

    try {

      /**
       * Checking wheather the user is already available or not!
       */
      let userData = await userModel.findOne({
        email: email
      })

      /*
      If user exists
       */
      if (userData !== null) {
        return res.status(400).json({ msg: 'User with email id :' + email + ' already exists' });
      }

      userData = new userModel({
        name: name,
        email: email,
        password: password
      })

      var salt = await bcrypt.genSalt(10);

      userData.password = await bcrypt.hash(password, salt);

      await userData.save();

      //res.status(200).json({ msg: 'Data stored' });
      const payload = {
        user: {
          id: userData.id
        }
      }

      jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 3600 }, (err, token) => {

        if (err) throw err;

        res.status(200).json({ token });
      });
    }
    catch (error) {
      console.log(error);
      return res.status(400).json({ msg: error });
    }

  })

module.exports = router; 
