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

//Avoid CORS error

app.use(function (req, res, next) {
  // Website to connect
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://salim-portfolio.vercel.app/'
  );

  // Request methods
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );

  // Request headers
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );

  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
const corsOpts = {
  origin: '*',

  methods: ['GET', 'POST'],

  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOpts));

//Routes
app.use('/api', experienceRoute);
app.use('/api', skillRoute);
app.use('/api', projectRoute);

app.listen(PORT, () => {
  console.log('Server is running on port 5000');
});

app.get('/', (req, res) => {
  res.send('Port 5000 is working');
});
