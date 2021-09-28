const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 8000;
require('./src/db/db');
const userRouter = require('./src/routers/user-router');
const teamRouter = require('./src/routers/team-router');

//to convert body of request to json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(teamRouter);
app.use(userRouter);
// server listening
app.listen(PORT, () => {
  console.log(`your server is ready to listen on port ${PORT}`);
});
