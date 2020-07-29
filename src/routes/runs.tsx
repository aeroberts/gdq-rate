import React from "react";
import { RunsTable } from "../components/runs-table";
import { AuthContext } from "../contexts/gdq-rate-auth";
import { useGetAllRunsSubscription } from "../generated/graphql";

export default function Runs() {
  const { userData } = React.useContext(AuthContext);
  const { loading, error, data } = useGetAllRunsSubscription({
    variables: {
      loggedIn: !!userData,
      userId: userData && userData.id,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <RunsTable runs={data!.runs} />;
}
