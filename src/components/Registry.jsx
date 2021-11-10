import React, { useState, useEffect } from "react";
import '../styles/App.css'

export default function Peak(props) {
  const [allEntries, setAllEntries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allentries")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setAllEntries(json);
      });
  }, []);


  if (props.lookRegister === true) {

    return (
      <>
        <div>
          {allEntries.map((entry) => {
       
            return (
              <div key = {entry._id}>
                <h2>{entry.name}</h2>
                <h2>{entry.date}</h2>
                <h2>{entry.msg}</h2>
                <form action={`/scribble/${entry._id}`} method="POST">
                  <button>Scribble this out?</button>
                </form>
                <form action={`/pencil-in/${entry._id}`} method="POST">
                  <button>Pencil something in?</button>
                </form>
              </div>
            );
          })}
        </div>
        <form action="/write" method="POST">
          <input type="text" name="name" placeholder="Who are you?" />
          <input type="text" name="date" placeholder="When were you here?" />
          <input
            type="text"
            name="msg"
            placeholder="What do you have to say?"
          />
          <input type="submit" value="Write in the log" />
        </form>
      </>
    );
  } else {
      return (null);
  }
}
