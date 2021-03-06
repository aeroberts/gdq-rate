import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Formik } from "formik";
import { Redirect } from "react-router-dom";
import { Page } from "../hocs/page";

export default Page(Register);

function Register() {
  const [error, setError] = React.useState("");
  const [redirect, setRedirect] = React.useState(false);

  if (redirect) {
    return <Redirect to={"/login"} />;
  }

  return (
    <Card id="login-container" className="bg-dark">
      <Card.Body>
        <Formik
          initialValues={{
            email: "",
            password: "",
            password2: "",
            display_name: "",
          }}
          onSubmit={async ({ email, password, password2, display_name }) => {
            if (password !== password2) {
              setError("Passwords don't match");
              return;
            }
            if (password.length < 5) {
              setError("Password needs to be at least 5 characters long");
              return;
            }
            const resp = await window.fetch("/rest/auth/register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email,
                password,
                user_data: {
                  display_name,
                },
              }),
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
              onSubmit={(handleSubmit as unknown) as any}
              className={isSubmitting ? "is-submitting" : ""}
            >
              <h2 className="mb-3">Register</h2>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={values.email}
                  autoComplete="email"
                  required
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="display_name">
                <Form.Label>Display Name</Form.Label>
                <Form.Control
                  type="display_name"
                  placeholder="Enter display name"
                  name="display_name"
                  value={values.display_name}
                  autoComplete="display_name"
                  minLength={3}
                  maxLength={25}
                  required
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  minLength={5}
                  value={values.password}
                  required
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="password2">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  name="password2"
                  value={values.password2}
                  required
                  onChange={handleChange}
                />
              </Form.Group>
              {error ? <p className="text-danger">{error}</p> : null}
              <Button
                variant="primary"
                type="submit"
                className="sign-in-button"
                disabled={isSubmitting}
              >
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </Card.Body>
    </Card>
  );
}
