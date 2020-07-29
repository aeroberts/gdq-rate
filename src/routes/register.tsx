import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Formik } from "formik";
import { Redirect } from "react-router-dom";

export default function Register() {
  const [error, setError] = React.useState("");
  const [redirect, setRedirect] = React.useState(false);

  if (redirect) {
    return <Redirect to={"/login"} />;
  }

  return (
    <Card id="login-container">
      <Card.Body>
        <Formik
          initialValues={{ username: "", password: "", checkbox: false }}
          onSubmit={async ({ username: email, password }) => {
            const resp = await window.fetch("/rest/auth/register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email, password }),
            });
            if (resp.status >= 200 && resp.status < 300) {
              setRedirect(true);
            }
            const data = await resp.json();
            setError(data?.message);
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
            isSubmitting,
          }) => (
            <Form
              onSubmit={handleSubmit}
              className={isSubmitting ? "is-submitting" : ""}
            >
              <h2 className="mb-3">Register</h2>
              <Form.Group controlId="username">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="password-2">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="nice">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              {error ? <p className="text-danger">{error}</p> : null}
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Card.Body>
    </Card>
  );
}
