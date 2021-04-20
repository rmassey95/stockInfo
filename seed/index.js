const mongoose = require('mongoose');
const Company = require('../models/companySchema');

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

const seedDB = async () => {
    await Company.deleteMany({});
    const company = new Company({
        name: 'Apple',
        stockTicker: 'aapl',
        companyDesc: 'Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services.',
        industryGroup: 'technology hardware and equipment',
        sector: 'information technology',
        industry: 'technology hardware, storage and peripherals',
        subindustry: 'technology hardware, storage and peripherals',
        qualitativeInfo: {
            mgmtInfo: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, dignissimos! Debitis alias similique accusantium quae dignissimos earum aspernatur, quibusdam id vero quod ipsam, quas.',
            conclusion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, dignissimos! Debitis alias similique accusantium quae dignissimos earum aspernatur, quibusdam id vero quod ipsam, quas.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, dignissimos! Debitis alias similique accusantium quae dignissimos earum aspernatur, quibusdam id vero quod ipsam, quas.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, dignissimos! Debitis alias similique accusantium quae dignissimos earum aspernatur, quibusdam id vero quod ipsam, quas.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, dignissimos! Debitis alias similique accusantium quae dignissimos earum aspernatur, quibusdam id vero quod ipsam, quas.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, dignissimos! Debitis alias similique accusantium quae dignissimos earum aspernatur, quibusdam id vero quod ipsam, quas.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, dignissimos! Debitis alias similique accusantium quae dignissimos earum aspernatur, quibusdam id vero quod ipsam, quas.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, dignissimos! Debitis alias similique accusantium quae dignissimos earum aspernatur, quibusdam id vero quod ipsam, quas.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, dignissimos! Debitis alias similique accusantium quae dignissimos earum aspernatur, quibusdam id vero quod ipsam, quas.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, dignissimos! Debitis alias similique accusantium quae dignissimos earum aspernatur, quibusdam id vero quod ipsam, quas.'
        }
    })
    await company.save();
}

seedDB().then(() => {
    mongoose.connection.close();
})