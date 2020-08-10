import { Formik } from "formik";
import React from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Form from "react-bootstrap/esm/Form";
import { AuthContext } from "../contexts/gdq-rate-auth";
import { UpdateUserDocument } from "../generated/graphql";
import { Page } from "../hocs/page";
import { useTypedMutation } from "../hooks/useTypedMutation";

export default Page(Settings);

function Settings() {
  const { userData, refetch } = React.useContext(AuthContext);
  const [insertScore, { error }] = useTypedMutation(UpdateUserDocument);

  if (!userData?.user_id) {
    return <p>You must be logged in to view this page</p>;
  }

  return (
    <Card id="settings-container" className="bg-light">
      <Card.Body>
        <Formik
          initialValues={{
            display_name: userData.display_name ?? "",
            avatar_url: userData.avatar_url ?? "",
          }}
          onSubmit={async ({ display_name, avatar_url }) => {
            await insertScore({
              variables: {
                displayName: display_name,
                avatarUrl: avatar_url,
                userId: userData?.user_id,
              },
            });
            await refetch();
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
              <h2 className="mb-3">Settings</h2>
              <Form.Group controlId="display_name">
                <Form.Label>Display Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Display Name"
                  name="display_name"
                  className="border-secondary"
                  value={values.display_name}
                  autoComplete="name"
                  onChange={handleChange}
                  required
                  minLength={3}
                  maxLength={25}
                />
              </Form.Group>

              <Form.Group controlId="avatar_url">
                <Form.Label>Avatar URL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Avatar URL"
                  className="border-secondary"
                  name="avatar_url"
                  value={values.avatar_url}
                  autoComplete="avatar_url"
                  onChange={handleChange}
                />
              </Form.Group>
              {error ? <p className="text-danger">{error}</p> : null}
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                Save
              </Button>
            </Form>
          )}
        </Formik>
      </Card.Body>
    </Card>
  );
}
