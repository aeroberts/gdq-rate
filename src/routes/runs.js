import React from "react";
import { useSubscription } from "@apollo/client";
import ALL_RUNS from "../constants/queries";

export default function Runs() {
    const { loading, error, data } = useSubscription(ALL_RUNS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return <h2>{JSON.stringify(data)}</h2>;
}