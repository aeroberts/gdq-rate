import "./styles/App.css";
import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

import { WebSocketLink } from "apollo-link-ws";
import { HttpLink } from "apollo-link-http";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";

import { AuthContextProvider } from "./contexts/gdq-rate-auth";
import GDQRNavBar from "./components/navbar";
import Profile from "./routes/profile";
import Runs from "./routes/runs";
import Login from "./routes/login";
import Register from "./routes/register";
import Home from "./routes/home";

const httpLink = new HttpLink({
  uri: `${window.location.origin}/v1/graphql`,
});

const wsLink = new WebSocketLink({
  uri: `${window.location.protocol.includes('s') ? 'wss' : 'ws'}://${window.location.host}/v1/graphql`,
  options: {
    reconnect: true,
  },
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('jwt_token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  });

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: authLink.concat(link),
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
                <Route path="/profile">
                  <Profile />
                </Route>
                <Route path="/login">
                  <Login />
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
