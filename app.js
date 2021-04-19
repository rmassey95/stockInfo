const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const Company = require('./models/companySchema');
const methodOverride = require('method-override');
const { restart } = require('nodemon');
const { findByIdAndUpdate, findByIdAndDelete } = require('./models/companySchema');

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

//data parser middleware
app.use(express.urlencoded({ extended: true }));
//override method, allows use of put and delete for forms
app.use(methodOverride('_method'))

//company list, shows all the companies in the database
app.get('/companies', async (req, res) => {
    const companies = await Company.find({});
    res.render('pages/companyList', { companies });
});

//create page for adding a new company
app.get('/company/add', (req, res) => {
    res.render('pages/companyAdd');
})

//edit company page
app.get('/company/edit/:id', async (req, res) => {
    const { id } = req.params;
    const company = await Company.findById(id);
    res.render('pages/companyEdit', { company });
})

//add company information to database
app.post('/companies', async (req, res) => {
    const company = new Company(req.body.company);
    await company.save();
    res.redirect('/companies');
})

//displays information on the selected company
app.get('/company/:id', async (req, res) => {
    const { id } = req.params;
    const company = await Company.findById(id);
    res.render('pages/companyPage', { company });
})

//updates company with new edits
app.put('/company/:id', async (req, res) => {
    const { id } = req.params;
    await Company.findByIdAndUpdate(id, req.body.company);
    res.redirect(`/company/${id}`);
})

app.delete('/company/:id', async (req, res) => {
    const { id } = req.params;
    await Company.findByIdAndDelete(id);
    res.redirect('/companies');
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