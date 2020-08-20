import React from "react";
import { Page } from "../hocs/page";
import { useCachingSubscription } from "../hooks/useCachingSubscription";
import {
  GetCurrentRunDocument,
  GetSpecificRunDocument,
} from "../generated/graphql";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import RatingForm from "../components/rating-form";
import { AuthContext } from "../contexts/gdq-rate-auth";
import { useLocation } from "react-router-dom";
import { ChatBox } from "../components/chatbox";
import { twitchPlayerNode } from "../components/twitch_player";
import * as portals from "react-reverse-portal";

export default Page(Home, { fullWidth: true, disablePopoutPlayer: true });

function Home() {
  const { hash } = useLocation();
  const { userData } = React.useContext(AuthContext);
  const [tabKey, setTabKey] = React.useState("chat");
  let { loading, error, data } = useCachingSubscription(GetCurrentRunDocument);

  const text = loading
    ? "Loading..."
    : data?.current_run[0]?.game ?? "No Run in Progress";

  const runId = data?.current_run[0]?.run_id;

  const { data: userRunData } = useCachingSubscription(GetSpecificRunDocument, {
    variables: {
      loggedIn: !!userData,
      userId: userData && userData.user_id,
      runId: runId!,
    },
    skip: !runId,
  });

  const userRun = userRunData ? userRunData.runs[0] : { scores: [] };

  return (
    <div className="container-fluid">
      <div className="row">
        <h1 className="col">SGDQ 2020 - {text}</h1>
      </div>
      <div className="row">
        <div className="col-12 col-xl-8 mb-3 pr-0 pl-xl-3 pl-0">
          <portals.OutPortal node={twitchPlayerNode} popout={false} />
        </div>
        <div className="col-12 col-xl-4">
          <Card id="rating-container" className="mb-3 bg-dark">
            <Card.Header className="chat-rate-header-container">
              <Nav
                variant="tabs"
                activeKey={hash || "#chat"}
                className="chat-rate-tabs"
              >
                <Nav.Item>
                  <Nav.Link id="chat-link" href="#chat">
                    Chat
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link id="rate-link" href="#form" disabled={!userData}>
                    Rating Form
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            {hash !== "#form" ? (
              <ChatBox />
            ) : (
              <RatingForm
                runId={runId}
                hasScore={userRun.scores.find(
                  (score) => score.user.id === userData?.user_id
                )}
              />
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
