const User = require('../models/user');

const addUser = async (req, res) => {
  console.log(req.body);
  const newUser = await new User(req.body);
  if (newUser) {
    newUser.save();
    return res.status(200).send({ user: newUser });
  } else {
    return res.status(400).send({ message: 'something went wrong' });
  }
};

const getUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById({ _id: id });
  if (user) {
    return res.status(200).send({ user: user });
  } else {
    return res.status(400).send({ message: 'not found' });
  }
};

// get user with team
const getTemsUsers = async (req, res) => {
  if (Object.keys(req.query).length != 0) {
    const user_id = req.query.user_id;
    const team_id = req.query.team_id;
    const findUser = await User.find({ _id: user_id, team_id: team_id });
    if (findUser.length != 0) {
      return res.status(200).send({ user: findUser });
    }
  } else {
    return res
      .status(400)
      .send({ message: 'please , give me user id and team id' });
  }
};

// get users of one team
const usersTeam = async (req, res) => {
  const teamId = req.params.team_id;
  const findUsers = await User.find({ team_id: teamId });
  if (findUsers.length != 0) {
    return res.status(200).send({ users: findUsers });
  } else {
    res.status(400).send({ message: 'no users for this team' });
  }
};

module.exports = { addUser, getUser, getTemsUsers, usersTeam };
