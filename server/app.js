require("dotenv").config();

const express = require('express');
const createError = require("http-errors");
const path = require('path');
const methodOverride = require("method-override");
const morgan = require('morgan');  // Require morgan for logging

const app = express();

const cors = require('cors');
app.use(cors());


const port = parseInt(process.env.PORT) || process.argv[3] || 8080;

// Middleware
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));
app.use(morgan("dev"));  // Use morgan for logging
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/api/epoints", (req, res) => {
  res.json({"msg": " you are successfully accessing epoints "});
});



// Accessing modular routes
const airtimeRouter = require("./routes/airtime");
app.use("/api/send-airtime", airtimeRouter);

// Error handling
// 404 page
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler 
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: process.env.NODE_ENV === 'development' ? err : {}
  });
});

module.exports = app;
// Start server
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
