import React from "react";
import "./Register.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import hero_cat from "../../Assets/hero-img.png";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignUp = (values) => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/users/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("Signed up successfully");
          navigate(`/login`);
        } else {
          console.log("Error signing up");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar />
      <div className="register-container">
        <div className="ctc-flow">
          <img className="cat" src={hero_cat} alt="" />
        </div>
        <div className="register-form-container">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSignUp}
          >
            {(formik) => (
              <Form>
                <h1 className="register-form-title">Sign Up</h1>
                <p className="register-form-label">Name:</p>
                <Field
                  className="register-form-field"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                <ErrorMessage
                  className="register-form-error"
                  name="name"
                  component="div"
                />
                <p className="register-form-label">Email:</p>
                <Field
                  className="register-form-field"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage
                  className="register-form-error"
                  name="email"
                  component="div"
                />
                <p className="register-form-label">Password:</p>
                <Field
                  className="register-form-field"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage
                  className="register-form-error"
                  name="password"
                  component="div"
                />
                <p className="register-form-label">Confirm Password:</p>
                <Field
                  className="register-form-field"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
                <ErrorMessage
                  className="register-form-error"
                  name="confirmPassword"
                  component="div"
                />
                <button
                  className="register-form-button"
                  type="submit"
                  disabled={!formik.isValid}
                >
                  Sign Up
                </button>
                <p className="register-form-login-prompt">
                  Already have an account?<> </>
                  <Link to="/login">
                    <span
                      style={{
                        color: "purple",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Log in
                    </span>
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default SignIn;
