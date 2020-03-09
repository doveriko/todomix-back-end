const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');
require('dotenv').config();

const authRouter = require('./routes/authRouter');
const listRouter = require('./routes/listRouter')


// MONGOOSE CONNECTION
mongoose
  .connect(process.env.MONGODB_URI, {
    keepAlive: true,
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
  })
  .then( () => console.log(`Connected to database`))
  .catch( (err) => console.error(err));


// EXPRESS SERVER INSTANCE
const app = express();


// CORS MIDDLEWARE SETUP
app.use(
  cors({
    credentials: true,
    origin: [
      process.env.PUBLIC_DOMAIN,
      "https://post-mix.herokuapp.com"],
  }),
);
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });

// MIDDLEWARE
app.use(logger('dev'));
app.use(bodyParser.json());
// For forms:
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// SESSION MIDDLEWARE
app.use(
  session({
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60, // 1 day
    }),
    secret: process.env.SECRET_SESSION,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
  }),
);


// ROUTER MIDDLEWARE
app.use('/auth', authRouter);
app.use('/lists', listRouter);


// ROUTE FOR SERVING REACT APP (index.html)
app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/public/index.html");
});


// 404 
// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).json({ code: 'not found' });
});

// ERROR HANDLING. If you try to call an endpoint that doesn't exist
app.use((err, req, res, next) => {
  // always log the error
  console.error('ERROR', req.method, req.path, err);

  // only send the error if the error ocurred before sending the response 
  // (don't try to send the response after it has already been sent)
  if (!res.headersSent) {
    const statusError = err.status || '500';
    res.status(statusError).json(err);
  }
});


module.exports = app;
