const mongoose = require('mongoose');

const TeamModel = new mongoose.Schema({
  name: String,
});

const Team = mongoose.model('Team', TeamModel);
module.exports = Team;
