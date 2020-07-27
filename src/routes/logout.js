import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/gdq-rate-auth";

export default function Logout() {
    const [redirect, setRedirect] = React.useState(false);
    const { refetch } = React.useContext(AuthContext);

    React.useEffect(() => {
        (async function () {
            await window.fetch("/rest/auth/logout", { method: "POST" });
            await localStorage.removeItem("jwt_token");
            try {
                await refetch();
            } catch (e) {
                console.error(e);
            }
            setRedirect(true);
        })();
    }, []);

    if (redirect) {
        return <Redirect to={"/"} />;
    }
    return null;
}
