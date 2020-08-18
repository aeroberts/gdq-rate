import React from "react";
import { Page } from "../hocs/page";
import { useCachingSubscription } from "../hooks/useCachingSubscription";
import { GetCurrentRunDocument } from "../generated/graphql";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import RatingForm from "../components/rating-form";
import { AuthContext } from "../contexts/gdq-rate-auth";
import { useLocation, HashRouter, Route } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";
import { ChatBox } from "../components/chatbox";

export default Page(Home, { fullWidth: true });

function Home() {
  const { hash } = useLocation();
  const { userData } = React.useContext(AuthContext);
  const [tabKey, setTabKey] = React.useState("chat");
  let { loading, error, data } = useCachingSubscription(GetCurrentRunDocument);

  const text = loading
    ? "Loading..."
    : data?.current_run[0]?.game ?? "No Run in Progress";

  const runId = data?.current_run[0]?.run_id;

  return (
    <div className="container-fluid">
      <div className="row">
        <h1 className="col">SGDQ 2020 - {text}</h1>
      </div>
      <div className="row">
        <div className="col-12 col-xl-8 mb-3 pr-0">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              src="https://player.twitch.tv/?channel=gamesdonequick&parent=sgdq.shaneschulte.com"
              className="embed-responsive-item"
              allowFullScreen
              frameBorder={0}
            ></iframe>
          </div>
        </div>
        <div className="col-12 col-xl-4">
          <Card id="rating-container" className="mb-3 bg-dark">
            <Card.Header>
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
            {hash !== "#form" ? <ChatBox /> : <RatingForm runId={runId} />}
          </Card>
        </div>
      </div>
    </div>
  );
}
