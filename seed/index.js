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
        industry: 'Consumer Electronics',
        sector: 'Technology',
        marketInfo: {
            priceToEarnings: 35.95,
            stockPrice: 133.01,
            marketCap: 2230000000,
            yearHigh: 145.09,
            yearLow: 66.18
        },
        quantInfo: {
            assetTurnover: 0.33,
            debtToEquityRatio: 1.721,
            currentRatio: 1.2,
            grossMargin: 38.27
        },
        qualitativeInfo: {
            links: [
                'https://www.google.com/',
                'https://stockcharts.com/',
                'https://www.marketwatch.com/'
            ],
            mgmtInfo: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, dignissimos! Debitis alias similique accusantium quae dignissimos earum aspernatur, quibusdam id vero quod ipsam, quas.',
            conclusion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, dignissimos! Debitis alias similique accusantium quae dignissimos earum aspernatur, quibusdam id vero quod ipsam, quas.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, dignissimos! Debitis alias similique accusantium quae dignissimos earum aspernatur, quibusdam id vero quod ipsam, quas.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, dignissimos! Debitis alias similique accusantium quae dignissimos earum aspernatur, quibusdam id vero quod ipsam, quas.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, dignissimos! Debitis alias similique accusantium quae dignissimos earum aspernatur, quibusdam id vero quod ipsam, quas.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, dignissimos! Debitis alias similique accusantium quae dignissimos earum aspernatur, quibusdam id vero quod ipsam, quas.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, dignissimos! Debitis alias similique accusantium quae dignissimos earum aspernatur, quibusdam id vero quod ipsam, quas.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, dignissimos! Debitis alias similique accusantium quae dignissimos earum aspernatur, quibusdam id vero quod ipsam, quas.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, dignissimos! Debitis alias similique accusantium quae dignissimos earum aspernatur, quibusdam id vero quod ipsam, quas.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, dignissimos! Debitis alias similique accusantium quae dignissimos earum aspernatur, quibusdam id vero quod ipsam, quas.'
        }
    })
    await company.save();
}

seedDB().then(() => {
    mongoose.connection.close();
})