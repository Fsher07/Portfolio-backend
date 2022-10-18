const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const PORT = process.env.PORT || 5000;
const experienceRoute = require('./routes/experience');
const skillRoute = require('./routes/skill');
const projectRoute = require('./routes/project');

//Connect to db
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('connection successful'))
  .catch((err) => console.log(err));

//Middleware
app.use(express.json());
app.use(cors());

//Routes
app.use('/api', experienceRoute);
app.use('/api', skillRoute);
app.use('/api', projectRoute);

app.listen(PORT, () => {
  console.log('Server is running on port 4000');
});

app.get('/', (req, res) => {
  res.send('Hello World');
});
