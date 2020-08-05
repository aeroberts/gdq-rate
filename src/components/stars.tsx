import React from "react";
import StarEmpty from "../icons/StarEmpty";
import StarHalf from "../icons/StarHalf";
import StarFilled from "../icons/StarFilled";

// how the hell does this actually work?
export function Stars({ val }: { val: number }) {
  return (
    <>
      {Array.apply(null, { length: 5 } as any).map((_, i) =>
        i + 1 - val > 0.75 ? (
          <StarEmpty key={i} />
        ) : i + 1 - val > 0.25 ? (
          <StarHalf key={i} />
        ) : (
          <StarFilled key={i} />
        )
      )}
    </>
  );
}
