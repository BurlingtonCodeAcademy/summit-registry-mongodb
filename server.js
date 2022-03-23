//importing mongoose
const mongoose = require("mongoose");
//connect mongoose to the database

//bringing in express
const express = require("express");

//bringing in cors to resolve any CORS errors in-browser
const cors = require("cors");

//importing entry schema
const Entry = require("./Entry");

//creating the initial connection to the database
mongoose.connect("mongodb://localhost:27017/summitregistry", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//init the database through the connection constructor, stored in a variable
const db = mongoose.connection;


//setting up default port
const port = process.env.PORT || 5000;

//binding express to a variable
const app = express();


//binds error message to the connection variable to print if an error occurs
db.on("error", console.error.bind(console, "connection error"));

//middleware functions
app.use(express.static("./build"));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//creating the Entry model utilizing the Entry schema and the "entries" collection


//creating our API route for the front end to access the entries from the database
app.get("/allentries", async (req, res) => {
  //assigning the result of a find on our Model to a variable

  //sending the result as a json to the page

});

//CREATE functionality for inserting a new entry into our collection
app.post("/create", async (req, res) => {
  //assigning the creation of a new entry to a variable


  //saving the new entry to the Model

  //redirecting to the home page

});

//DELETE functionality for removing an entry based on the id received in params
app.post("/delete/:entryId", async (req, res) => {
  //grabbing the document id received in params


  //using the retrieved document id to delete a matching document in our Entry model


  //redirecting to the home page

});


app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
