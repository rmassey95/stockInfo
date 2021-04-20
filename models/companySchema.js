const mongoose = require('mongoose');
const { sectors, industryGroups, industries, subindustries } = require('./sectorsAndIndustries');

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
    companyDesc: {
        type: String,
        required: true
    },
    sector: {
        type: String,
        enum: sectors,
        required: true
    },
    industryGroup: {
        type: String,
        enum: industryGroups,
        required: true
    },
    industry: {
        type: String,
        enum: industries,
        required: true
    },
    subindustry: {
        type: String,
        enum: subindustries,
        required: true
    },
    /*   marketInfo: {
          priceToEarnings: Number,
          stockPrice: Number,
          marketCap: Number,
          yearHigh: Number,
          yearLow: Number
      }, */
    /* quantInfo: {
        assetTurnover: Number,
        debtToEquityRatio: Number,
        currentRatio: Number,
        grossMargin: Number
    }, */
    qualitativeInfo: {
        /* links: [String], */
        mgmtInfo: String,
        conclusion: String
    }
});

module.exports = mongoose.model('Company', companySchema);