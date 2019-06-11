const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();
const port = 8000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const indexRouter = require('./routes/index');
const projectRouter = require('./routes/project');
const aboutRouter = require('./routes/about');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static', express.static('public'));

app.use('/', indexRouter);
app.use('/project', projectRouter);
app.use('/about', aboutRouter);

app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.locals.error = err;
  res.status(err.status)
  res.render('error');
});


  app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
  })
  
  module.exports = app;