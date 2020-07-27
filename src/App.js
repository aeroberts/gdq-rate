import "./styles/App.css";
import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from "apollo-link-ws";
import { HttpLink } from "apollo-link-http";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";

import GDQRNavBar from "./components/navbar";
import Profile from "./routes/profile";
import Runs from "./routes/runs";
import Login from "./routes/login";
import Home from "./routes/home";

const httpLink = new HttpLink({
    uri: "https://sgdq.shaneschulte.com/v1/graphql"
});

const wsLink = new WebSocketLink({
    uri: "wss://sgdq.shaneschulte.com/v1/graphql",
    options: {
        reconnect: true
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
    link,
    cache: new InMemoryCache()
});

export default function App() {
    return (
        <Router>
            <ApolloProvider client={client}>
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
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </ApolloProvider>
        </Router>
    );
}
