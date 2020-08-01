const { exec } = require("child_process");
const express = require("express");
const app = express();
const port = 5911;

// Request Handler
app.post("/deploy", async (req, res) => {
    if (req.headers["secret"] !== process.env.HASURA_GRAPHQL_ADMIN_SECRET) {
        console.warn(`[${new Date()}] Received failed deploy attempt!`);
        return res.json({
            result: "Auth failed"
        });
    }
    console.log(`[${new Date()}] Starting a new deploy...`);
    exec("./deploy.sh", (err, stdout, stderr) => {
        if (err) {
            console.error(`[${new Date()}] Failed a deploy attempt!`);
            res.json({ result: stderr });
        } else {
            console.log(`[${new Date()}] Successfully deployed.`);
            res.json({ result: stdout });
        }
    });
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
