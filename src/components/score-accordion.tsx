import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import { GetUserRunsQuery } from "../generated/graphql";
import { ArrayOf } from "../utils/types";

interface Props {
  score: ArrayOf<GetUserRunsQuery["scores"]>;
}
const ScoreAccordion: React.FC<Props> = ({ score }) => {
  return (
    <Accordion className="score-accordion">
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          className="score-accordion-header-row"
          eventKey="0"
        >
          <Row className="justify-content-between">
            <Col className="col-auto">{score.run.game} </Col>
            <Col className="col-auto">2 of 2</Col>
          </Row>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <p>Commentary Score: {score.commentary_score}</p>
            <textarea
              disabled={true}
              value={score.commentary_comment}
            ></textarea>
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
