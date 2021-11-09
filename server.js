//importing mongoose
const mongoose = require("mongoose");
//connect mongoose to the database
mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//init the database through the connection constructor, stored in a varaible
const db = mongoose.connection;

const express = require("express");

const cors = require("cors");

//importing entry schema
const Entry = require("./Entry");

//setting up default port
const port = process.env.PORT || 5000;

//binding express to a variable
const app = express();
//binds error message to the connection variable to print if an error occurs
db.on("error", console.error.bind(console, "connection error"));

app.use(express.static("./build"));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const Entries = mongoose.model("findome-entries", Entry);

app.get("/allentries", async (req, res) => {
  let allEntries = await Entries.find({});
  res.json(allEntries);
});

app.post("/write", async (req, res) => {
  const newEntry = new Entries({
    name: req.body.name,
    date: req.body.date,
    msg: req.body.msg,
  });

  await newEntry.save();
  res.redirect("/");
});

app.post("/scribble/:entryId", async (req, res) => {
  let entryId = req.params.entryId;
  console.log(entryId);

  await Entries.deleteOne({ _id: entryId });

  res.redirect("/")
});

app.post("/pencil-in/:entryId" , async (req, res) => {
  let entryId = req.params.entryId;
  res.send(`<div><h2>What are you writing over?</h2>
  <form method = "POST" action="/pencil-in/${entryId}/update">
        <input type = "text" name="name" placeholder = "name"/>
        <input type = "text" name="date" placeholder = "date"/>
        <input type = "text" name="msg" placeholder = "message"/>
        <input type="submit" />
        </form>
        </div>`);
});

app.post("/pencil-in/:entryId/update", async (req, res) => {
  let entryId = req.params.entryId;

  let updated = {}

  if (req.body.name) {
      updated.name = req.body.name
  }

  if (req.body.date) {
      updated.date = req.body.date
  }

  if (req.body.msg) {
      updated.msg = req.body.msg
  }

  await Entries.findByIdAndUpdate(
    { _id: entryId },
    { $set: { name: updated.name, date: updated.date, msg: updated.msg } }
  );
  res.redirect("/")
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
