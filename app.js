var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testDB'
});



var index = require('./routes/index');
var about = require('./routes/about');
var datasets = require('./routes/datasets');
var AACR_GEINE = require('./routes/AACR_GEINE');
var EU_UK = require('./routes/EU_UK');
var metabric = require('./routes/metabric');
var tcga = require('./routes/tcga');
var toru = require('./routes/toru');
//var users = require('./routes/users');

var app = express();
app.locals.points = "1234";
app.locals.flare = require('./flare.json');
//app.locals.AACR_GEINE_JS = require('./public/convertcsv.json');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/about', about);
app.use('/datasets', datasets);
app.use('/AACR_GEINE', AACR_GEINE);
app.use('/EU_UK', EU_UK);
app.use('/metabric', metabric);
app.use('/tcga', tcga);
app.use('/toru', toru);

//app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


module.exports = app;