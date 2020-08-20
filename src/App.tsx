import "./styles/App.css";
import React from "react";
import * as portals from "react-reverse-portal";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { WebSocketLink } from "apollo-link-ws";
import { HttpLink } from "apollo-link-http";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";

import { AuthContextProvider } from "./contexts/gdq-rate-auth";
import GDQRNavBar from "./components/navbar";
import Profile from "./routes/profile";
import Settings from "./routes/settings";
import Runs from "./routes/runs";
import Login from "./routes/login";
import Logout from "./routes/logout";
import Register from "./routes/register";
import Home from "./routes/home";
import Run from "./routes/run";
import { twitchPlayerNode, TwitchPlayer } from "./components/twitch_player";

const httpLink = new HttpLink({
  uri: `${window.location.origin}/hasura/v1/graphql`,
});

const wsLink = new WebSocketLink({
  uri: `${window.location.protocol.includes("s") ? "wss" : "ws"}://${
    window.location.host
  }/hasura/v1/graphql`,
  options: {
    reconnect: true,
  },
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("jwt_token");
  if (!token) return headers;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query) as any;
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: authLink.concat(link as any),
  cache: new InMemoryCache(),
});

export default function App() {
  // XXX: make sure we don't have a `refresh_token` param when we oauth sign in
  React.useEffect(() => {
    if (window.location.search) window.location.search = "";
  }, []);
  return (
    <ApolloProvider client={client}>
      <portals.InPortal node={twitchPlayerNode}>
        <TwitchPlayer />
      </portals.InPortal>
      <AuthContextProvider>
        <Router>
          <div id="root-container">
            <GDQRNavBar />
            <div className="main-body">
              <Switch>
                <Route path="/" exact></Route>
                <Route>
                  <portals.OutPortal node={twitchPlayerNode} popout />
                </Route>
              </Switch>
              <Switch>
                <Route path="/runs">
                  <Runs />
                </Route>
                <Route path="/run/:runId">
                  <Run />
                </Route>
                <Route path="/profile/:userId?">
                  <Profile />
                </Route>
                <Route path="/settings">
                  <Settings />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/logout">
                  <Logout />
                </Route>
                <Route path="/register">
                  <Register />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </AuthContextProvider>
    </ApolloProvider>
  );
}
