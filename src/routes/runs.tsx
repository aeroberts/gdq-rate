import React from "react";
import { useSubscription } from "@apollo/client";
import { ALL_RUNS } from "../constants/queries";
import { RunsTable } from "../components/runs-table";
import { AuthContext } from "../contexts/gdq-rate-auth";

export default function Runs() {
  const { userData } = React.useContext(AuthContext);
  const { loading, error, data } = useSubscription(ALL_RUNS, {
    variables: {
      loggedIn: !!userData,
      userId: userData && userData.id,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <RunsTable runs={data.runs} loggedIn={!!userData} />;
}
