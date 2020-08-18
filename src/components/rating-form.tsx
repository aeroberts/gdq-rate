import { Formik, FormikErrors } from "formik";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { InsertScoreDocument } from "../generated/graphql";
import { useTypedMutation } from "../hooks/useTypedMutation";
import StarInput from "./star-input";

function InputRow({
  handleChange,
  name,
  values,
  errors,
}: {
  handleChange(): void;
  name: string;
  values: Record<string, any>;
  errors: Record<string, any>;
}) {
  return (
    <Form.Group
      controlId={`${name}_comment`}
      className="form-header-stars-container"
    >
      <div className="row form-header-stars-row">
        <Form.Label className="col-auto font-weight-bold">
          {name[0].toUpperCase()}
          {name.substr(1)}
        </Form.Label>
        <StarInput
          name={`${name}_score`}
          error={Boolean(errors[`${name}_score`])}
        />
      </div>
      <Form.Control
        as="textarea"
        className="input-textarea border-dark"
        placeholder={`additonal comments (optional)`}
        name={`${name}_comment`}
        value={values[`${name}_comment`]}
        onChange={handleChange}
      />
    </Form.Group>
  );
}
export default function RatingForm({ runId }: { runId?: number | null }) {
  const [insertScore, { error }] = useTypedMutation(InsertScoreDocument, {
    onError: () => {},
  });

  return (
    <Card.Body>
      {runId ? (
        <Formik
          initialValues={{
            commentary_comment: "",
            commentary_score: 0,
            gameplay_comment: "",
            gameplay_score: 0,
            overall_comment: "",
            overall_score: 0,
            summary_comment: "",
            rewatchable: false,
          }}
          validateOnBlur={false}
          validateOnChange={false}
          validate={(values) => {
            const errors: FormikErrors<typeof values> = {};
            if (!values.commentary_score) {
              errors.commentary_score = "cannot be 0";
            }
            if (!values.gameplay_score) {
              errors.gameplay_score = "cannot be 0";
            }
            if (!values.overall_score) {
              errors.overall_score = "cannot be 0";
            }
            return errors;
          }}
          onSubmit={async (vals) => {
            await insertScore({
              variables: {
                ...vals,
                run_id: runId,
              },
            });
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
              <InputRow
                handleChange={handleChange as any}
                name="commentary"
                values={values}
                errors={errors}
              />
              <InputRow
                handleChange={handleChange as any}
                name="gameplay"
                values={values}
                errors={errors}
              />
              <InputRow
                handleChange={handleChange as any}
                name="overall"
                values={values}
                errors={errors}
              />

              <Form.Group controlId="summary_comment">
                <Form.Label className="mb-3 font-weight-bold">
                  Summary
                </Form.Label>
                <Form.Control
                  as="textarea"
                  className="input-textarea border-dark"
                  placeholder="Summary comments (optional)"
                  name="summary_comment"
                  value={values.summary_comment}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="rewatchable">
                <Form.Check
                  type="checkbox"
                  name="rewatchable"
                  label="Rewatchable?"
                  className="font-weight-bold"
                  value={String(values.rewatchable)}
                  onChange={handleChange}
                />
              </Form.Group>
              {error ? <p className="text-danger">{error.message}</p> : null}
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      ) : (
        <p>No active run right now</p>
      )}
    </Card.Body>
  );
}
