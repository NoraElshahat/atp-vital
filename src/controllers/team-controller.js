const Team = require('../models/team');

const addTeam = async (req, res) => {
  const newTeam = await new Team(req.body);
  if (newTeam) {
    await newTeam.save();
    return res.status(200).send({ user: newTeam });
  } else {
    return res.status(400).send({ message: 'something went wrong' });
  }
};

const getTeam = async (req, res) => {
  const teams = await Team.find({});
  if (teams) {
    return res.status(200).send({ team: teams });
  } else {
    return res.status(400).send({ message: 'not found' });
  }
};
module.exports = { addTeam, getTeam };
