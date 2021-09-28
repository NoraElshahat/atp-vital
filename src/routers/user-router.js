const {
  addUser,
  getUser,
  getTemsUsers,
  usersTeam,
} = require('../controllers/user-controller');
const express = require('express');
const router = express.Router();

// router to add user
router.post('/new-user', addUser);

// router to get user
router.get('/user/:id', getUser);

// get users team
router.get('/user-team', getTemsUsers);

// router to get all user under team
router.get('/team-users/:team_id', usersTeam);

module.exports = router;
