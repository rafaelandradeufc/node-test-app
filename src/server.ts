import { createConnection } from "typeorm";

// create typeorm connection
createConnection().then(() => {
  // create and setup express app
  const app = require("./app");

  // start express server
  const port = 3000;
  app.listen(port, () => console.log(`App start in localhost:${port} !`));
});