const express = require("express");
const { engine } = require("express-handlebars");
const app = express();

// TODO: External CSS

// Configure Handlebars as view engine
app.engine(
  "handlebars",
  engine({
    defaultLayout: "main",
  }),
);

app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

// For organization purposes; it's still called at the end after actual routes
const errorHandler = (error, request, response, next) => {
  console.error(error.stack);
  response.type("text/plain");
  response.status(500);
  response.send("500 - Internal Server Error");
};

const unknownEndpoint = (request, response) => {
  response.type("text/html");
  response.status(404);
  response.render("404");
  //   response.send("404 - Not Found");
};

app.get("/", (request, response) => {
  response.type("text/html");
  response.render("home");
});

app.get("/about", (request, response) => {
  response.type("text/html");
  response.render("about");
});

app.get("/contact", (request, response) => {
  response.type("text/html");
  response.render("contact");
});

app.use(unknownEndpoint);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
