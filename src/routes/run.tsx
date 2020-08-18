import React from "react";
import { useParams } from "react-router-dom";
import { Comment } from "../components/comment";
import RatingForm from "../components/rating-form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Stars } from "../components/stars";
import { AuthContext } from "../contexts/gdq-rate-auth";
import { GetSpecificRunDocument } from "../generated/graphql";
import { useCachingSubscription } from "../hooks/useCachingSubscription";
import { Page } from "../hocs/page";

export default Page(Run);

function Run() {
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
      <Row>
        <Col md className="mb-3">
          <Card className="bg-light">
            <Card.Body>
              <Card.Title>{run.game}</Card.Title>
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
                  val={
                    run.scores_aggregate.aggregate?.avg?.commentary_score ?? 0
                  }
                />
              </p>
              <p>
                <strong>Gameplay: </strong>{" "}
                <Stars
                  val={run.scores_aggregate.aggregate?.avg?.gameplay_score ?? 0}
                />
              </p>
              <p>
                <strong>Overall: </strong>{" "}
                <Stars
                  val={run.scores_aggregate.aggregate?.avg?.overall_score ?? 0}
                />
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md className="mb-3">
          {!!userData ? (
            run.scores.some((score) => score.user.id === userData.user_id) ? (
              <Card className="bg-light">
                <Card.Body>You have already rated this run.</Card.Body>
              </Card>
            ) : (
              <Card id="rating-container" className="mb-3 bg-dark">
                <RatingForm runId={runId} />
              </Card>
            )
          ) : (
            <Card className="bg-light">
              <Card.Body>Login to rate</Card.Body>
            </Card>
          )}
        </Col>
      </Row>
      <h2 className="mb-3">Reviews</h2>
      <div className="comment-section">
        {run.scores.map((score) => (
          <Comment {...score} key={score.user.id} />
        ))}
      </div>
    </>
  );
}
