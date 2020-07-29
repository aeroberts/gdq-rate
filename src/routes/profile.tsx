import React from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <>
      <h2>Users</h2>
      <Link to="/logout">Logout</Link>
    </>
  );
}
