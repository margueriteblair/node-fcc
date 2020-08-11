//imported packages
const express = require('express');
require('dotenv').config(); // or require('dotenv/config')

const homeRouter = require('./routes/homeRouter');

const app = express();
//importing middleware
app.use(express.json())
app.use(express.static('public'))
//importing routers
app.use('/', homeRouter);

const port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
    console.log(`Successfully listening to ${port}`)
})

//Create a GET route handler in homeRouter.js on the path /environment
//It should implement two environment variables and send a different responses based on the environment vars.

