## You will need to run NPM install to have all of the necessary dependencies for this project.

### Send 'student' branch for students to clone down.

### Run-time: ~1 hour

### `node server.js` and `npm start` in top level of directory in two separate command lines

## Purpose

This workshop is designed to target these pain points specific to the Chat App project:

* Usage of Mongoose Models and Schema.
* Creating an API route on our server from our database.
* Manipulating the database via routes on the server.

## Lesson Guide


### Usage of Mongoose Models and Schema:

Within Entry.js, create the Mongoose schema as following:
```
name: String,
date: String,
msg: String

```

Within server.js, create the Mongoose model as following:

```
const Entries = mongoose.model("findome-entries", Entry);

```

Things to go over:

* The difference between the Schema and the Model
* What the two pieces of the Model are

### Creating an API route on our server from our database:

Within server.js, create a GET route that will connect to our collection and send it as as a response in JSON format.

Things to go over:

* All pieces of the collection.find; students at this point have only created API endpoints from within their project directory.

### Manipulating the database via routes on the server:

Within server.js, create several POST routes that handle CREATE, UPDATE, and DELETE functionality.

Things to go over:

* Various methods on the collection depending on the intended action.
* Why we need the empty `updated` object for our UPDATE functionality to work as imagined.