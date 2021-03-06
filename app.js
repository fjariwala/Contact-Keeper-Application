var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
/**
 * Database connection function ..
 */
var connectToDb = require('./config/dbConnection');

/**
 * Database username : feniljariwala82
 * Database Password : YbYzA7GRiTXq8VOo
 */

//var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users.route');
var loginRouter = require('./routes/login.route');
var contactRouter = require('./routes/contact.route');

var app = express();

connectToDb();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/contact', contactRouter);

// Server static assets in production
if (process.env.NODE_ENV === 'production') {

  // set static folder
  app.use(express.static('client/build'));

  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    
  });
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
