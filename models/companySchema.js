const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    stockTicker: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    marketInfo: {
        priceToEarnings: Number,
        stockPrice: Number,
        marketCap: Number,
        yearHigh: Number,
        yearLow: Number
    },
    quantInfo: {
        assetTurnover: Number,
        debtToEquityRatio: Number,
        currentRatio: Number,
        grossMargin: Number
    },
    qualitativeInfo: {
        links: [String],
        mgmtInfo: String,
        conclusion: String
    }
});

module.exports = mongoose.model('Company', companySchema);