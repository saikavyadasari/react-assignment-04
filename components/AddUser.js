import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddUser = () => {
  const navigate = useNavigate();

  const initialValues = { name: "", email: "" };
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
  });

  const handleSubmit = (values) => {
    console.log("Form Data", values);
    navigate("/users");
  };

  return (
    <div>
      <h2>Add User</h2>
      <Formik
        initialValues={initialValues}
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
          <button type="submit">Add User</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddUser;
