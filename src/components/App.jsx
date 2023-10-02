import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  function change(event) {
    const newvalue = event.target.value;
    const name = event.target.name;
    setContact((previousvalue) => {
      if (name === "fName") {
        return {
          fName: newvalue,
          lName: previousvalue.lName,
          email: previousvalue.email
        };
      } else if (name === "lName") {
        return {
          fName: previousvalue.fName,
          lName: newvalue,
          email: previousvalue.email
        };
      } else {
        return {
          fName: previousvalue.fName,
          lName: previousvalue.lName,
          email: newvalue
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={change}
          value={contact.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={change}
          value={contact.lName}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={change}
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
