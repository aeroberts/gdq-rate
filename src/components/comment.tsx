import React from "react";
import { GetSpecificRunSubscription } from "../generated/graphql";
import { ArrayOf } from "../utils/types";
import Card from "react-bootstrap/esm/Card";
import { Avatar } from "./avatar";
import { Link } from "react-router-dom";
import { Stars } from "./stars";

type Score = ArrayOf<ArrayOf<GetSpecificRunSubscription["runs"]>["scores"]>;
interface Props extends Score {}

const CommentSection = ({
  comment,
  category,
  score,
}: {
  comment: string;
  category: string;
  score: number;
}) => {
  return (
    <>
      <div className="row mb-2">
        <strong className="col-auto pr-1">{category} (</strong>
        <Stars val={score} />
        <strong className="col-auto pl-0">)</strong>
      </div>
      <p>{comment}</p>
    </>
  );
};

export const Comment: React.FC<Props> = ({
  user,
  commentary_comment,
  commentary_score,
  gameplay_comment,
  gameplay_score,
  overall_comment,
  overall_score,
  summary_comment,
}) => {
  return (
    <Card className="comment mb-3 bg-light border-dark">
      <Card.Header>
        <Link to={`/profile/${user.id}`}>
          <div>
            <Avatar uri={user.avatar_url} name={user.display_name} size={26} />
            <span className="display-name">{user.display_name}</span>
          </div>
        </Link>
      </Card.Header>
      <Card.Body>
        <p>{summary_comment}</p>
        <CommentSection
          category="Commentary"
          comment={commentary_comment}
          score={commentary_score}
        />
        <CommentSection
          category="Gameplay"
          comment={gameplay_comment}
          score={gameplay_score}
        />
        <CommentSection
          category="Overall"
          comment={overall_comment}
          score={overall_score}
        />
      </Card.Body>
    </Card>
  );
};
