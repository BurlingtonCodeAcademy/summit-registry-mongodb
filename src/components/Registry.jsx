import React, { useState, useEffect } from "react";
import "../styles/App.css";

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
              <div id="entries">
                <table key={entry._id}>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Message</th>
                      <th>Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{entry.name}</td>
                      <td>{entry.date}</td>
                      <td>{entry.msg}</td>
                      <td>
                        {" "}
                        <form action={`/scribble/${entry._id}`} method="POST">
                          <button>Scribble this out?</button>
                        </form>
                        <form action={`/pencil-in/${entry._id}`} method="POST">
                          <button>Pencil something in?</button>
                        </form>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
    return null;
  }
}
