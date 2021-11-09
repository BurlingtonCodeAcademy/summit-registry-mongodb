import React, { useState, useEffect } from "react";

export default function Peak() {
  const [allEntries, setAllEntries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allentries")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setAllEntries(json);
      });
  }, [setAllEntries]);

  return (
    <>
      <div>
        {allEntries.map((entry) => {
          return (
            <div>
              <h1>{entry.name}</h1>
              <h1>{entry.date}</h1>
              <h1>{entry.msg}</h1>
              <form action = {`/scribble/${entry._id}`} method = "POST">
                  <button>Scribble this out?</button>
              </form>
              <form action = {`/pencil-in/${entry._id}`} method = "POST">
                  <button>Pencil something in?</button>
              </form>
              
              
            </div>
          );
        })}
      </div>
      <form action="/write" method="POST">
        <input type="text" name="name" placeholder="Who are you?" />
        <input type="text" name="date" placeholder="When were you here?" />
        <input type="text" name="msg" placeholder="What do you have to say?" />
        <input type="submit" value="Write in the log" />
      </form>
    </>
  );
}