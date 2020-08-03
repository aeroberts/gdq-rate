import "./styles/App.css";
import React from "react";

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
import Runs from "./routes/runs";
import Login from "./routes/login";
import Logout from "./routes/logout";
import Register from "./routes/register";
import Home from "./routes/home";
import Run from "./routes/run";

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
  return (
    <ApolloProvider client={client}>
      <AuthContextProvider>
        <Router>
          <div id="root-container">
            <GDQRNavBar />
            <div className="main-body container">
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
