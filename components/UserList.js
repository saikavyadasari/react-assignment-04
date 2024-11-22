import React from "react";
import { Link, Outlet } from "react-router-dom";

const UserList = () => {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ];

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`${user.id}`}>{user.name}</Link> |{" "}
            <Link to={`edit/${user.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default UserList;
