import React from "react";
import { useParams } from "react-router-dom";
import { GetSpecificRunDocument } from "../generated/graphql";
import { AuthContext } from "../contexts/gdq-rate-auth";
import { useCachingSubscription } from "../hooks/useCachingSubscription";
import RatingForm from "../components/rating-form";

export default function Run() {
  const { runId } = useParams();
  const { userData } = React.useContext(AuthContext);
  const { loading, error, data } = useCachingSubscription(
    GetSpecificRunDocument,
    {
      variables: {
        loggedIn: !!userData,
        userId: userData && userData.id,
        runId,
      },
    }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (!data?.runs.length) {
    return <p>Run not found</p>;
  }
  const run = data.runs[0];
  console.log(run);
  return (
    <>
      <h2 className="mb-3">{run.game}</h2>
      <p>
        <strong>Runner: </strong> {run.runner}
      </p>
      <p>
        <strong>Platform: </strong> {run.platform}
      </p>
      <p>
        <strong>Duration: </strong> {run.duration}
      </p>
      <p>
        <strong>Category: </strong> {run.category}
      </p>
      {!!userData ? <RatingForm runId={runId} /> : null}
    </>
  );
}
