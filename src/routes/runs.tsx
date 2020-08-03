import React from "react";
import { RunsTable } from "../components/runs-table";
import { AuthContext } from "../contexts/gdq-rate-auth";
import { GetAllRunsDocument } from "../generated/graphql";
import { useCachingSubscription } from "../hooks/useCachingSubscription";

export default function Runs() {
  const { userData } = React.useContext(AuthContext);
  let { loading, error, data } = useCachingSubscription(GetAllRunsDocument, {
    variables: {
      loggedIn: !!userData,
      userId: userData && userData.user_id,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <RunsTable runs={data!.runs} loggedIn={!!userData} />;
}
