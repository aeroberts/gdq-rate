import React from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/gdq-rate-auth";

export default function Logout() {
  const [redirect, setRedirect] = React.useState(false);
  const { refetch } = React.useContext(AuthContext);

  React.useEffect(() => {
    (async function () {
      await window.fetch("/rest/auth/logout", { method: "POST" });
      await localStorage.removeItem("jwt_token");
      try {
        await refetch();
      } catch (e) {
        console.error(e);
      }
      setRedirect(true);
    })();
  }, [refetch]);

  if (redirect) {
    return <Redirect to={"/"} />;
  }
  return null;
}
