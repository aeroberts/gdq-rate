import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Formik } from 'formik';

export default function Login() {


    return (
        <Card id="login-container">
            <Card.Body>
                <Formik
                    initialValues={{ username: '', password: '', checkbox: false }}
                    onSubmit={async values => {
                        await new Promise(r => setTimeout(r, 2000));
                    }}>
                    {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        touched,
                        isValid,
                        errors,
                        isSubmitting
                    }) => (
                            <Form onSubmit={handleSubmit} className={isSubmitting ? "is-submitting" : ""}>
                                <Form.Group controlId="username">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter username" 
                                        name="username"
                                        value={values.username}
                                        onChange={handleChange} />
                                </Form.Group>

                                <Form.Group controlId="password-2">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        placeholder="Password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange} />
                                </Form.Group>
                                <Form.Group controlId="nice">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
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