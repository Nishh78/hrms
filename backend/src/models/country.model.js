const mongoose = require("./../../config/db");
const Schema = new mongoose.Schema({
    Country_Name: String,
    ISO2: String,
    id: Number,
    Phone_Code: Number,
    Time_Zone_in_Capital: String,
    Currency: String,
    currency_symoll: String,
    latitude: Number,
    longitude: Number,
    status: {
        type: String,
        enum: ["Active", "Inactive", "Delete"],
        default: "Active",
    },
});

const countryModel = mongoose.model("country", Schema);
module.exports = countryModel;
