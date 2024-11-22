import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const EditUser = () => {
  const { userId } = useParams(); // Get the userId from the URL
  const navigate = useNavigate();

  // Example: Simulated user data from a database
  const [user, setUser] = useState(null);

  // Simulate fetching user data
  useEffect(() => {
    const fetchUser = () => {
      const mockUsers = [
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Smith", email: "jane@example.com" },
      ];
      const userData = mockUsers.find((u) => u.id === parseInt(userId, 10));
      setUser(userData);
    };
    fetchUser();
  }, [userId]);

  if (!user) {
    return <div>Loading user data...</div>;
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
  });

  const handleSubmit = (values) => {
    console.log("Updated User Data", values);
    // Simulate API update call and redirect
    navigate("/users");
  };

  return (
    <div>
      <h2>Edit User</h2>
      <Formik
        initialValues={{ name: user.name, email: user.email }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label>Name:</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" style={{ color: "red" }} />
          </div>
          <div>
            <label>Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" style={{ color: "red" }} />
          </div>
          <button type="submit">Update User</button>
        </Form>
      </Formik>
    </div>
  );
};

export default EditUser;
