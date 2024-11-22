import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<UserList />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="edit/:userId" element={<EditUser />} />
        </Route>
        <Route path="add-user" element={<AddUser />} />
      </Routes>
    </Router>
  );
}

export default App;
