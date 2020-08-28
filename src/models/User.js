const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  mobile: {
    type: Number,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

mongoose.model('User', userSchema);
