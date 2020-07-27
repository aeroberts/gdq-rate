import React from "react";
import { useQuery } from "@apollo/client";
import ALL_RUNS from "./constants/queries";

export default function Runs() {
    const { loading, error, data } = useQuery(ALL_RUNS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return <h2>Alex</h2>;
}