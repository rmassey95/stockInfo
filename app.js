const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const Company = require('./models/companySchema');

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

app.get('/companies', async (req, res) => {
    const companies = await Company.find({});
    res.render('pages/companyList', { companies });
});

app.get('/company/:id', async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const company = await Company.findById(id);
    console.log(company);
    res.render('pages/companyPage', { company });
})

//create main page    
app.get('/', (req, res) => {
    res.send('HOME');
});

//connect to specified port
const port = 3000;
app.listen(port, () => {
    console.log(`CONNECTED TO PORT ${port}`);
});