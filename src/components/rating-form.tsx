import { Formik } from "formik";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { InsertScoreDocument } from "../generated/graphql";
import { useTypedMutation } from "../hooks/useTypedMutation";

function InputRow({
  handleChange,
  name,
  values,
}: {
  handleChange(): void;
  name: string;
  values: Record<string, any>;
}) {
  return (
    <Form.Group controlId={`${name}_comment`}>
      <Form.Label>{name}</Form.Label>
      <InputGroup>
        <Form.Control
          as="select"
          custom
          className="col-sm-2"
          name={`${name}_score`}
          value={values[`${name}_score`]}
          onChange={handleChange}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
        <Form.Control
          type="text"
          placeholder={`${name} comments`}
          name={`${name}_comment`}
          value={values[`${name}_comment`]}
          onChange={handleChange}
        />
      </InputGroup>
    </Form.Group>
  );
}
export default function RatingForm({ runId }: { runId: number }) {
  const [insertScore, { error }] = useTypedMutation(InsertScoreDocument, {
    onError: () => {},
  });

  return (
    <Card id="rating-container">
      <Card.Body>
        <Formik
          initialValues={{
            commentary_comment: "",
            commentary_score: 1,
            gameplay_comment: "",
            gameplay_score: 1,
            overall_comment: "",
            overall_score: 1,
            summary_comment: "",
            rewatchable: false,
          }}
          onSubmit={async (vals) => {
            insertScore({
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
              <h2 className="mb-3">Rate me</h2>

              <InputRow
                handleChange={handleChange as any}
                name="commentary"
                values={values}
              />
              <InputRow
                handleChange={handleChange as any}
                name="gameplay"
                values={values}
              />
              <InputRow
                handleChange={handleChange as any}
                name="overall"
                values={values}
              />

              <Form.Group controlId="summary_comment">
                <Form.Label>
                  Summary
                  <Form.Control
                    type="text"
                    placeholder="Summary comments"
                    name="summary_comment"
                    value={values.summary_comment}
                    onChange={handleChange}
                  />
                </Form.Label>
              </Form.Group>
              <Form.Group controlId="rewatchable">
                <Form.Check
                  type="checkbox"
                  name="rewatchable"
                  label="Rewatchable?"
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
      </Card.Body>
    </Card>
  );
}
