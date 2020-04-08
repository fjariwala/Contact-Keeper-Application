var express = require('express');
var router = express.Router();
var auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

var userModel = require('../models/User.model');
var contactModel = require('../models/Contact.model');

router.get('/', auth, async (req, res) => {

    try {
        const contactData = await contactModel.find({ user: req.user.id }).sort({ date: -1 });

        if (!contactData) {
            res.status(400).json({ msg: 'No contacts available..' });
        }

        res.status(200).json({ contactData });

    } catch (err) {

        console.error(err.message);
        res.status(400).json({ msg: err.message });
    }

})


router.post('/',
    [auth,
        [
            check('name', 'Name must be filled').not().isEmpty()
        ]
    ],
    async (req, res) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() });
        }

        const { name, email, phone, type } = req.body;

        try {

            var newContact = new contactModel({
                name,
                email,
                phone,
                type,
                /** THis comes from auth middleware */
                user: req.user.id
            });

            var contact = await newContact.save();

            res.status(200).json({ contact });

        } catch (err) {

            console.error(err.message);
            res.status(500).json({ msg: 'Internal server error' });
        }
    })

/**
 * This is to update contact
 */
router.put('/:id', auth, async (req, res) => {

    const { name, email, phone, type } = req.body;

    const contactFields = {};

    if (name) contactFields.name = name;
    if (email) contactFields.email = email;
    if (phone) contactFields.phone = phone;
    if (type) contactFields.type = type;

    try {

        let contact = await contactModel.findById(req.params.id);

        //console.log(contact);

        if (!contact) return res.status(400).json({ msg: 'Contact not found..' });

        /** Checking that the user owns the contact or not */
        if (contact.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Unauthorized ..' });
        }

        contact = await contactModel.findByIdAndUpdate(req.params.id,
            { $set: contactFields },
            { new: true }
        )
        //console.log(contact);
        res.status(200).json(contact);

    } catch (err) {

        console.error(err.message);
        res.status(500).json({ msg: 'Internal server error' });
    }
})

router.delete('/:id', async (req, res) => {

    const id = req.params.id;

    try {
        await contactModel.findByIdAndDelete(id);

        res.status(200).json({ msg: 'Contact deleted' });

    } catch (err) {

        res.status(400).json({ msg: err.message });
    }

})

module.exports = router;