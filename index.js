const express = require("express");
const { engine } = require("express-handlebars");
const app = express();

// Configure Handlebars as view engine
app.engine(
  "handlebars",
  engine({
    defaultLayout: "main",
  }),
);

app.set("view engine", "handlebars");

// For organization purposes; it's still called at the end after actual routes
const unknownEndpoint = (request, response) => {
  response.type("text/html");
  response.status(404);
  response.send("404 - Not Found");
};

app.get("/", (request, response) => {
  response.type("text/html");
  response.send("<h1>Di-di-di</h1>");
});

app.get("/about", (request, response) => {
  response.type("text/html");
  response.send("<h1>About page</h1>");
});

app.get("/contact", (request, response) => {
  response.type("text/html");
  response.send("<h1>Contact page</h1>");
});

app.use(unknownEndpoint);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
