
import express = require("express");
import cors = require("cors");
import routes from "./routes/index.routes";

// create and setup express app
const app = express();


app.use(express.json());

app.use(
    cors()
    //       {
    //     origin: "http://localhost:3000",
    //     credentials: true,
    //   }
  );

// Add all routes from routes folder
app.use("/api", routes);


module.exports = app;