import React from "react";
import "./Register.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import hero_cat from "../../Assets/hero-img.png";
import animals from "../Adopt/data";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();

  const { animalType, animalID } = useParams();

  const pet = animals.find(
    (animal) =>
      animal.animalType === animalType && animal.id === parseInt(animalID)
  );

  const handleLogin = async (
    values,
    { setSubmitting, setErrors, setStatus }
  ) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("userName", data.name);
        console.log("User authenticated");
        localStorage.setItem("token", data.token);
        navigate(`/adopt/${animalType}/${pet.id}`);
      } else {
        console.log(data.error);
        setErrors({ password: data.error });
      }
    } catch (err) {
      console.log(err);
      setErrors({ password: "Something went wrong. Please try again." });
    }

    setSubmitting(false);
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
            onSubmit={handleLogin}
          >
            {(formik) => (
              <Form>
                <h1 className="register-form-title">Log In</h1>
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
                <button
                  className="register-form-button"
                  type="submit"
                  disabled={!formik.isValid}
                >
                  Log In
                </button>
                <p className="register-form-signup-prompt">
                  Don't have an account yet?{" "}
                  <Link to="/users/signup">
                    <span
                      style={{
                        color: "purple",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Sign up
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

export default Login;
