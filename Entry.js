const mongoose = require("mongoose")

const EntrySchema = new mongoose.Schema({
    name: String,
    date: String,
    msg: String
})

module.exports = EntrySchema