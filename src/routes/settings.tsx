import React from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext, startRefreshTimer } from "../contexts/gdq-rate-auth";
import { useCachingSubscription } from "../hooks/useCachingSubscription";
import { GetUserRunsDocument, UpdateUserDocument } from "../generated/graphql";
import { firstOfArray } from "../utils/types";
import ScoreAccordion from "../components/score-accordion";
import { Avatar } from "../components/avatar";
import Card from "react-bootstrap/esm/Card";
import { Formik } from "formik";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import { useTypedMutation } from "../hooks/useTypedMutation";

export default function Settings() {
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
