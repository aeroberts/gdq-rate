import React from "react";
import StarEmpty from "../icons/StarEmpty";
import StarHalf from "../icons/StarHalf";
import StarFilled from "../icons/StarFilled";

// how the hell does this actually work?
export function Stars({ val }: { val: number }) {
  return (
    <div className="col-auto d-flex pr-0 pl-0 align-items-center">
      {Array.apply(null, { length: 5 } as any).map((_, i) =>
        i + 1 - val > 0.75 ? (
          <div className="mr-1">
            <StarEmpty key={i} />
          </div>
        ) : i + 1 - val > 0.25 ? (
          <div className="mr-1">
            <StarHalf key={i} />
          </div>
        ) : (
          <div className="mr-1">
            <StarFilled key={i} />
          </div>
        )
      )}
    </div>
  );
}
