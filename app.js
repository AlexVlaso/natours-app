const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Test server api...");
});
app.post("/", (req, res) => {
  res.status(200).json({ message: "You can use post method", data: "test" });
});
const port = 3000;

app.listen(port, () => {
  console.log(`App is starting ant port ${port}...`);
});
