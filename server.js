const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({
        message: "Kubernetes Demo API",
        status: "running"
    });
});

app.get("/api/hello", (req, res) => {
    res.json({
        message: "Hello from Kubernetes!"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});