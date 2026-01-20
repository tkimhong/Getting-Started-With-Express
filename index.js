const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.type("text/html");
  response.send("Dididi");
});

app.get("/about", (request, response) => {
  response.type("text/html");
  response.send("About page");
});

app.get("/contact", (request, response) => {
  response.type("text/html");
  response.send("Contact page");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
