import Form from "react-bootstrap/Form";
import React from "react";
import StarInput from "./star-input";
import { GetSpecificRunSubscription } from "../generated/graphql";
import { ArrayOf } from "../utils/types";
import { Stars } from "./stars";

type Score = ArrayOf<ArrayOf<GetSpecificRunSubscription["runs"]>["scores"]>;

export default function InputRow({
  handleChange,
  name,
  values,
  errors,
  showStars,
  hasScore,
}: {
  handleChange(): void;
  name: string;
  values: Record<string, any>;
  errors: Record<string, any>;
  showStars: boolean;
  hasScore: Score | undefined;
}) {
  return (
    <Form.Group
      controlId={`${name}_comment`}
      className="form-header-stars-container"
    >
      <div className="row form-header-stars-row">
        <Form.Label className="col-auto font-weight-bold text-capitalize">
          {name}
        </Form.Label>
        {showStars ? (
          hasScore ? (
            <Stars
              val={Number(hasScore[`${name}_score` as keyof typeof hasScore])}
            />
          ) : (
            <StarInput
              name={`${name}_score`}
              error={Boolean(errors[`${name}_score`])}
            />
          )
        ) : null}
      </div>
      {hasScore ? (
        <p className="mb-4">{values[`${name}_comment`]}</p>
      ) : (
        <Form.Control
          as="textarea"
          className="input-textarea border-dark"
          placeholder={`additonal comments (optional)`}
          name={`${name}_comment`}
          value={values[`${name}_comment`]}
          onChange={handleChange}
        />
      )}
    </Form.Group>
  );
}
