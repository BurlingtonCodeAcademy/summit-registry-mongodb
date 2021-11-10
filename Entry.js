//importing mongoose
const mongoose = require("mongoose")

//creating our mongoose Schema
const EntrySchema = new mongoose.Schema({
    //these key value pairs are the name of the key and what TYPE you want the value to be
    name: String,
    date: String,
    msg: String
})

//exporting just the EntrySchema
module.exports = EntrySchema