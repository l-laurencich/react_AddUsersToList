import React from "react";
import Card from "../UI/Card";
import User from "./User";
import './UserList.css'

const UserList = (props) => {
  return (
    <Card className='users'>
      <ul>
        {props.users.map((user) => (
          <User key={user.id}>
            {user.name} is {user.age} years old
          </User>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
