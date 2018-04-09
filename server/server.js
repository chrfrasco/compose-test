const express = require("express");

const app = express();

app.get("/api/message", (req, res) => {
  res.status(200).json({ msg: "Hello from the server container" });
});

app.listen(8080, () => console.log("listening on :8080"));
