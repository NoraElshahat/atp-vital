const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({
  name: String,
  team_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team',
    },
  ],
});

const User = mongoose.model('User', UserModel);
module.exports = User;
