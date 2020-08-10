import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import { GetUserRunsQuery } from "../generated/graphql";
import { ArrayOf } from "../utils/types";
import { Stars } from "./stars";

interface Props {
  score: ArrayOf<GetUserRunsQuery["scores"]>;
}

interface SubscoreDisplayProps {
  score: number;
  comment: string;
  type: string;
}

const SubscoreDisplay: React.FC<SubscoreDisplayProps> = ({
  score,
  comment,
  type,
}) => {
  return (
    <div className="score-subsection">
      <Row>
        <Col
          className={
            comment
              ? "col-auto d-flex align-items-center has-comment"
              : "col-auto d-flex align-items-center"
          }
        >
          <p className="mb-0 score-header font-weight-bold">{type} Score</p>
        </Col>
        <Col
          className={
            comment
              ? "col-auto d-flex align-items-center has-comment"
              : "col-auto d-flex align-items-center"
          }
        >
          <Stars val={score} />{" "}
        </Col>
      </Row>
      {comment ? <p className="comment-display mb-0"> {comment}</p> : null}
    </div>
  );
};

const ScoreAccordion: React.FC<Props> = ({ score }) => {
  return (
    <Accordion className="score-accordion bg-dark">
      <Card className="bg-light border-primary">
        <Accordion.Toggle
          as={Card.Header}
          className="score-accordion-header-row"
          eventKey="0"
        >
          <Row className="justify-content-between">
            <Col className="col-auto">
              <h4>{score.run.game}</h4>
            </Col>
            <Col className="col-auto d-flex align-items-center">2 of 2</Col>
          </Row>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <SubscoreDisplay
              score={score.commentary_score}
              type="Commentary"
              comment={score.commentary_comment}
            />

            <hr></hr>

            <SubscoreDisplay
              score={score.gameplay_score}
              type="Gameplay"
              comment={score.gameplay_comment}
            />

            <hr></hr>

            <SubscoreDisplay
              score={score.overall_score}
              type="Overall"
              comment={score.overall_comment}
            />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default ScoreAccordion;

/*

    commentary_comment
    commentary_score
    gameplay_comment
    gameplay_score
    overall_comment
    overall_score
    rewatchable
    summary_comment
    */
