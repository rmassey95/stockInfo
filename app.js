const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const app = express();

//connect to MongoDB
mongoose.connect('mongodb://localhost/financeDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(() => {
        console.log("MONGO DB CONNECTED");
    })
    .catch((e) => {
        console.log(e);
        console.log('NO CONNECTION');
    })

//set view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/search', (req, res) => {
    res.render('pages/search');
})

app.get('/company', (req, res) => {
    const { company } = req.query;
    console.log(company);
    res.send('SUCCESS');
})

//create main page    
app.get('/', (req, res) => {
    res.send('HOME');
})

//connect to specified port
const port = 3000;
app.listen(port, () => {
    console.log(`CONNECTED TO PORT ${port}`);
});