const express = require("express");
const cors = require("cors");
const verifyToken = require("./routes/verifyToken");
require("dotenv").config();

function startServer() {
  // Instantiating the app
  const app = express();

  // Express middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({
    extended: false
  }));

  // Import your router in here and use them in your express app.
  app.use("/api/auth", require("./routes/Auth"));
  app.use("/api/users", verifyToken, require("./routes/Users"));
  app.use("/api/bookings", require("./routes/Bookings"));
  app.use("/api/events", require("./routes/Events"));

  const port = process.env.PORT || 5000;
  // If the port.env exist will use that else use 5000
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

  // // To deploy our app to Heroku
  // if (process.env.NODE_ENV === "production") {
  //     // serving the staic public folder
  //     app.use(express.static(__dirname + '/public'))
  //     // Handling the routes in a sinlgle page application
  //     app.get('/.*/', (req, res) => {
  //         res.sendFile(__dirname + 'public/index.html')
  //     })
  // }
}

module.exports = startServer;