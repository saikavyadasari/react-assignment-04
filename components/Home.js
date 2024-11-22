import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Welcome to the User Management System</h1>
    <nav>
      <Link to="/users">User List</Link> | <Link to="/add-user">Add User</Link>
    </nav>
  </div>
);

export default Home;
