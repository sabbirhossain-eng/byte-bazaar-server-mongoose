const express = require("express");
require('dotenv').config();
const cors = require("cors");
const app = express();

app.use(
    cors({
      origin: [
        "http://localhost:5173",
      ],
      credentials: true,
    })
  );
  app.use(express.json());

  // handle error for unknown routes
app.all("*", (req, res, next) => {
    res.status(404).json({
      status: "fail",
      message: `Can't find ${req.originalUrl} on this server`,
    });
  });

  module.exports = app;