const express = require("express");
const app = express();

// console.dir(app);

let port = 8081;
//Listen incoming api request
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//receiveing a request
// app.use((req, res) => {
//   console.log("Request received");
//   res.send("This is a basic response");
// });

//sending a response
// res.send("This is a basic response");

//Routing
app.get("/home", (req, res) => {
  res.send("Welcome to home page");
});

//Nodemon
//For restarting the server automatically

//Query Strings
app.get("/search", (req, res) => {
  console.log(req.query);
  res.send("no results");
});
