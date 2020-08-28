const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const router = express.Router();

//# Get all the contacts
router.get('/user', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

//# Add a new contact (name, mobile number)
router.post('/user', async (req, res) => {
  const { mobile, name } = req.body;

  try {
    req.check('mobile').matches(/^(?:\+88|88)?(01[3-9]\d{8})$/);
    const error = req.validationErrors();
    if (error) {
      res.status(500).json({
        message: 'plese enter a valid Bangladeshi number',
      });
    } else {
      const user = new User({ mobile, name });
      await user.save();
      res.status(200).json({
        message: 'Contact Created Successfully',
        user,
      });
    }
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

//# Delete a given number
router.delete('/user/:number', async (req, res) => {
  try {
    const number = req.params.number;
    await User.deleteOne({ mobile: number });
    res.status(200).json({
      message: 'Contact deleted',
    });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

//# Edit a contact number
router.patch('/user/:id', async (req, res) => {
  try {
    req.check('mobile').matches(/^(?:\+88|88)?(01[3-9]\d{8})$/);
    const error = req.validationErrors();
    if (error) {
      res.status(500).json({
        message: 'plese enter a valid Bangladeshi number',
      });
    } else {
      const id = req.params.id;
      await User.updateOne({ _id: id }, { $set: { mobile: req.body.mobile } });
      res.status(200).json({
        message: 'number updated successfully',
      });
    }
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

//# Get contact details by a mobile number
router.get('/user/:mobile', async (req, res) => {
  try {
    const query = { mobile: req.params.mobile };
    const user = await User.find(query);
    res.status(200).json(user);
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

module.exports = router;
