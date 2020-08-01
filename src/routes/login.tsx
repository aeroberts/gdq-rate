import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Formik } from "formik";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/gdq-rate-auth";

export default function Login() {
  const [error, setError] = React.useState("");
  const [redirect, setRedirect] = React.useState(false);

  const { refetch } = React.useContext(AuthContext);

  if (redirect) {
    return <Redirect to={"/"} />;
  }

  return (
    <Card id="login-container">
      <Card.Body>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={async ({ email, password }) => {
            const resp = await window.fetch("/rest/auth/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email, password }),
            });
            const data = await resp.json();
            if (resp.status >= 200 && resp.status < 300) {
              const { jwt_token } = data;
              localStorage.setItem("jwt_token", jwt_token);
              await refetch();
              setRedirect(true);
            }
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
              <h2 className="mb-3">Login</h2>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={values.email}
                  autoComplete="email"
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="password-2">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  autoComplete="password"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              {error ? <p className="text-danger">{error}</p> : null}
              <Button
                variant="primary"
                type="submit"
                className="sign-in-button"
                disabled={isSubmitting}
              >
                Sign in
              </Button>
              <GoogleAuthButton />
            </Form>
          )}
        </Formik>
      </Card.Body>
    </Card>
  );
}

function GoogleAuthButton() {
  return (
    <div className="google-auth-button">
      <a href="https://sgdq.shaneschulte.com/rest/auth/providers/google">
        <div />
      </a>
    </div>
  );
}
