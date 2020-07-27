import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Redirect } from "react-router-dom";

export default function Logout() {
    const [redirect, setRedirect] = React.useState(false);

    React.useEffect(() => {
        (async function () {
            await window.fetch("/rest/auth/logout");
            setRedirect(true);
        })();
    }, []);

    if (redirect) {
        return <Redirect to={"/"} />;
    }
    return null;
}
