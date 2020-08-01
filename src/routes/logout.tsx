import React from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/gdq-rate-auth";
import { useApolloClient } from "@apollo/react-hooks";
import { UserInfoDocument } from "../generated/graphql";

export default function Logout() {
  const [redirect, setRedirect] = React.useState(false);
  const { refetch } = React.useContext(AuthContext);

  const client = useApolloClient();
  React.useEffect(() => {
    (async function () {
      await window.fetch("/rest/auth/logout", { method: "POST" });
      await localStorage.removeItem("jwt_token");
      try {
        await refetch();
      } catch (e) {
        // Clear out cache on error
        client.writeQuery({
          query: UserInfoDocument,
          data: {},
        });
      }
      setRedirect(true);
    })();
  }, [refetch, client]);

  if (redirect) {
    return <Redirect to={"/"} />;
  }
  return null;
}
