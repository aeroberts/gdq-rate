import "./styles/App.css";
import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import GDQRNavBar from './components/navbar';
import Profile from './routes/profile';
import Runs from './routes/runs';
import Login from './routes/login';
import Home from './routes/home';

const client = new ApolloClient({
    uri: "https://sgdq.shaneschulte.com/",
    cache: new InMemoryCache()
});

export default function App() {
    return (
        <Router>
            <ApolloProvider client={client}>
                <div>
                    <GDQRNavBar/>

                    <div className="main-body container">
                        <Switch>
                            <Route path="/runs">
                                <Runs />
                            </Route>
                            <Route path="/profile">
                                <Profile />
                            </Route>
                            <Route path="/login">
                                <Profile />
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


