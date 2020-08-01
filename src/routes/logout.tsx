import React from "react";
import { Redirect } from "react-router-dom";
import { AuthContext, clearRefreshTimer } from "../contexts/gdq-rate-auth";

export default function Logout() {
  const [redirect, setRedirect] = React.useState(false);

  const { refetch } = React.useContext(AuthContext);

  React.useEffect(() => {
    (async function () {
      clearRefreshTimer();
      await window.fetch("/rest/auth/logout", { method: "POST" });
      await localStorage.removeItem("jwt_token");
      await refetch();
      setRedirect(true);
    })();
  }, [refetch]);

  if (redirect) {
    return <Redirect to={"/"} />;
  }
  return null;
}
