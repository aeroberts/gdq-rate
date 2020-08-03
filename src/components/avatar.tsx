import React from "react";

export function Avatar({ uri }: { uri: string | null | undefined }) {
  return (
    <img
      className="avatar"
      alt="Profile Avatar"
      src={
        uri ||
        "https://avatars2.githubusercontent.com/u/8890027?s=460&u=82f8be7c74d22442ac93b0125649e591f8944032&v=4"
      }
    ></img>
  );
}
