import "./styles/App.css";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import { useQuery } from "@apollo/client";

import ALL_RUNS from "./constants/queries";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ApolloClient, InMemoryCache } from "@apollo/client";

import GDQRNavBar from './components/navbar';

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

function Home() {
    return <h2>Home</h2>;
}

function Profile() {
    return <h2>Users</h2>;
}

function Login() {
    return <h2>Login</h2>;
}

function Runs() {
    const { loading, error, data } = useQuery(ALL_RUNS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return <h2>Alex</h2>;
}