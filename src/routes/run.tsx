import React from "react";
import { useParams } from "react-router-dom";
import { useGetSpecificRunSubscription } from "../generated/graphql";
import { AuthContext } from "../contexts/gdq-rate-auth";

export default function Run() {
    const { runId } = useParams();
    const { userData } = React.useContext(AuthContext);
    const { loading, error, data } = useGetSpecificRunSubscription({
        variables: {
            loggedIn: !!userData,
            userId: userData && userData.id,
            runId
        }
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return <pre>{JSON.stringify(data!.runs[0], null, 2)}</pre>;
}
