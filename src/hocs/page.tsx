import React from "react";

interface Options {
  fullWidth?: boolean;
}
export const Page = <T extends object>(
  C: React.ComponentType<T>,
  options: Options = {}
) => {
  return (props: T) => {
    return (
      <div className={options.fullWidth ? undefined : "container"}>
        <C {...props} />
      </div>
    );
  };
};
