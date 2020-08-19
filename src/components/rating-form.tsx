import { Formik, FormikErrors } from "formik";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import {
  InsertScoreDocument,
  GetSpecificRunSubscription,
} from "../generated/graphql";
import { useTypedMutation } from "../hooks/useTypedMutation";
import { ArrayOf } from "../utils/types";
import InputRow from "./rating-form-input-row";

type Score = ArrayOf<ArrayOf<GetSpecificRunSubscription["runs"]>["scores"]>;

export default function RatingForm({
  runId,
  hasScore,
}: {
  runId?: number | null;
  hasScore?: Score | undefined;
}) {
  const [insertScore, { error }] = useTypedMutation(InsertScoreDocument, {
    onError: () => {},
  });

  return (
    <Card.Body>
      {runId ? (
        <Formik
          initialValues={{
            commentary_comment: hasScore?.commentary_comment || "",
            commentary_score: hasScore?.commentary_score || 0,
            gameplay_comment: hasScore?.gameplay_comment || "",
            gameplay_score: hasScore?.gameplay_score || 0,
            overall_comment: hasScore?.overall_comment || "",
            overall_score: hasScore?.overall_score || 0,
            summary_comment: hasScore?.summary_comment || "",
            rewatchable: hasScore?.rewatchable || false,
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
              {hasScore ? <h3 className="mb-3">Your rating</h3> : null}
              {["commentary", "gameplay", "overall", "summary"].map((type) => {
                return (
                  <InputRow
                    handleChange={handleChange as any}
                    key={type}
                    name={type}
                    values={values}
                    errors={errors}
                    hasScore={hasScore}
                    showStars={type !== "summary"}
                  />
                );
              })}

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
              {!hasScore ? (
                <Button variant="primary" type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              ) : null}
            </Form>
          )}
        </Formik>
      ) : (
        <p>No active run right now</p>
      )}
    </Card.Body>
  );
}
