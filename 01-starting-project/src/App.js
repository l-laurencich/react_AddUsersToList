import React, { useState } from "react";

import UserList from "./components/UserList";
import Userinput from "./components/Userinput";

import "./App.css";

function App() {
  const [users, setUsers] = useState([
    { name: "Tim!", age: 23, id: "g1" },
    { name: "Jim", age: 44, id: "g2" },
  ]);

  const AddNewUserHandler = (enteredName, enteredAge) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({
        name: enteredName,
        age: enteredAge,
        id: Math.random().toString(),
      });
      return updatedUsers;
    });
  };

  return (
    <div className="container">
      <Userinput onAddUser={AddNewUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
