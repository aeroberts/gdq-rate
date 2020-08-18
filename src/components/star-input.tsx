import React from "react";
import StarEmpty from "../icons/StarEmpty";
import StarFilled from "../icons/StarFilled";
import { Field } from "formik";

const gold = "#e1ad21";

type Action = "enter" | "leave" | "click";
function SingleButton({
  cb,
  filled,
  hover,
  error,
  rated,
}: {
  cb(action: Action): void;
  filled?: boolean;
  hover?: boolean;
  error?: boolean;
  rated?: boolean;
}) {
  let color = gold;
  if (error && !rated) {
    color = "red";
  }

  return (
    <div
      onMouseEnter={cb.bind(null, "enter")}
      onMouseLeave={cb.bind(null, "leave")}
      onClick={cb.bind(null, "click")}
      className="pr-1"
    >
      {filled ? <StarFilled color={color} /> : <StarEmpty color={color} />}
    </div>
  );
}
function StarButton({
  rating = 0,
  setRating,
  error,
}: {
  rating?: number;
  setRating(i: number): void;
  error?: boolean;
}) {
  const [hoverRating, setHoverRating] = React.useState(0);
  const cb = React.useCallback(
    (i: number, action: Action) => {
      switch (action) {
        case "enter":
          setHoverRating(i);
          break;
        case "leave":
          setHoverRating(0);
          break;
        case "click":
          setRating(i);
          break;
      }
    },
    [setRating]
  );
  return (
    <div className="col d-flex align-items-center no-left-gutter stars-array">
      {Array.apply(null, { length: 5 } as any).map((_, i) => (
        <SingleButton
          cb={cb.bind(null, i + 1)}
          filled={hoverRating > 0 ? hoverRating > i : rating > i}
          hover={Boolean(hoverRating)}
          error={error}
          rated={Boolean(rating)}
          key={i}
        />
      ))}
    </div>
  );
}

export default function StarsInput({
  name,
  error,
}: {
  name: string;
  error: boolean;
}) {
  return (
    <Field name={name} id={name} type="number">
      {({ field: { value }, form: { setFieldValue } }: any) => (
        <StarButton
          rating={value}
          setRating={setFieldValue.bind(null, name)}
          error={error}
        />
      )}
    </Field>
  );
}
