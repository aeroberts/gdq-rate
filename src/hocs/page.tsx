import React from "react";

export const Page = <T extends object>(C: React.ComponentType<T>) => {
  return (props: T) => {
    return (
      <div className="container">
        <C {...props} />
      </div>
    );
  };
};
