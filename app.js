const express = require('express');
const app = express();
const port = 3000;

//middleware

app.use(express.json());

//routes

const index = require('./routes/index.js');

app.use('/', index);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});