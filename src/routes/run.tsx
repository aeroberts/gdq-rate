import React from "react";
import { useParams } from "react-router-dom";
import { GetSpecificRunDocument } from "../generated/graphql";
import { AuthContext } from "../contexts/gdq-rate-auth";
import { useCachingSubscription } from "../hooks/useCachingSubscription";
import RatingForm from "../components/rating-form";
import { Comment } from "../components/comment";
import CardColumns from "react-bootstrap/esm/CardColumns";
import StarFilled from "../icons/StarFilled";
import StarEmpty from "../icons/StarEmpty";
import StarHalf from "../icons/StarHalf";
import { Stars } from "../components/stars";

export default function Run() {
  const { runId } = useParams();
  const { userData } = React.useContext(AuthContext);
  const { loading, error, data } = useCachingSubscription(
    GetSpecificRunDocument,
    {
      variables: {
        loggedIn: !!userData,
        userId: userData && userData.user_id,
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
      <p>
        <strong>Commentary: </strong>{" "}
        <Stars
          val={run.scores_aggregate.aggregate?.avg?.commentary_score ?? 0}
        />
      </p>
      <p>
        <strong>Gameplay: </strong>{" "}
        <Stars val={run.scores_aggregate.aggregate?.avg?.gameplay_score ?? 0} />
      </p>
      <p>
        <strong>Overall: </strong>{" "}
        <Stars val={run.scores_aggregate.aggregate?.avg?.overall_score ?? 0} />
      </p>
      <h2 className="mb-3">Reviews</h2>
      <div className="comment-section">
        {run.scores.map((score) => (
          <Comment {...score} />
        ))}
      </div>
      {!!userData ? <RatingForm runId={runId} /> : <p>Login to rate</p>}
    </>
  );
}
