const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const router = express.Router();

router.post('/user', async (req, res) => {
  const { mobile, name } = req.body;
  try {
    const user = new User({ mobile, name });
    await user.save();
    res.send('Post request made');
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

module.exports = router;
