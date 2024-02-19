const express = require('express');
const app = express();

// enable cors
const cors = require('cors');
app.use(cors({optionsSuccessStatus:200}));


// Route
app.use('/api',require('./router/TestRouter'));

// Default router
app.get('*',(req,res) => {
    return res.json({message:"Hello node"});
});



module.exports = app;