const { addTeam, getTeam } = require('../controllers/team-controller');
const express = require('express');
const router = express.Router();

// router to add team
router.post('/new-team', addTeam);

// router to get team
router.get('/teams', getTeam);

module.exports = router;
