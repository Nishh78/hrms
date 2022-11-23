const mongoose = require("./../../config/db");
const Schema = new mongoose.Schema({
    id: Number,
    name: String,
    country_id: { type: mongoose.Schema.ObjectId, ref: "country" },
    status: {
        type: String,
        enum: ["Active", "Inactive", "Delete"],
        default: "Active",
    },
});

const stateSchema = mongoose.model("states", Schema);
module.exports = stateSchema;
