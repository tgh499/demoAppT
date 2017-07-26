var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var test1 = test2 = test3 = test4 = test5 = test6 = test7 = [];


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testDB'
});

connection.connect(function(error) {
    if (!!error) {
        console.log("Error");
    } else {
        console.log("Connected");
    }
});



/* GET home page. */
router.get('/', function(req, res, next) {

    connection.query("SELECT analyst FROM `analyst` WHERE 1", function(error, rows, fields) {
        if (!!error) {
            console.log("Error in the query.");
        } else {
            console.log("Success");
        }
        for (var i = 0; i < rows.length; i++) {
            temp = (rows[i].analyst.toString());
            test1.push(temp);
        };
    });

    connection.query("SELECT analyst FROM analyst ORDER BY analyst", function(error, rows, fields) {
        if (!!error) {
            console.log("Error in the query.");
        } else {
            console.log("Success");
        }
        for (var i = 0; i < rows.length; i++) {
            temp = (rows[i].analyst.toString());
            test2.push(temp);
        };
    });

    connection.query("SELECT analyst FROM analyst ORDER BY analyst DESC", function(error, rows, fields) {
        if (!!error) {
            console.log("Error in the query.");
        } else {
            console.log("Success");
        }
        for (var i = 0; i < rows.length; i++) {
            temp = (rows[i].analyst.toString());
            test3.push(temp);
        };
    });

    connection.query("SELECT author_name FROM `first_author` WHERE 1", function(error, rows, fields) {
        if (!!error) {
            console.log("Error in the query.");
        } else {
            console.log("Success");
        }
        for (var i = 0; i < rows.length; i++) {
            temp = (rows[i].author_name.toString());
            test4.push(temp);
        };
    });

    connection.query("SELECT author_name FROM `first_author` ORDER BY author_name", function(error, rows, fields) {
        if (!!error) {
            console.log("Error in the query.");
        } else {
            console.log("Success");
        }
        for (var i = 0; i < rows.length; i++) {
            temp = (rows[i].author_name.toString());
            test5.push(temp);
        };
    });

    connection.query("SELECT author_name FROM `first_author` ORDER BY author_name DESC", function(error, rows, fields) {
        if (!!error) {
            console.log("Error in the query.");
        } else {
            console.log("Success");
        }
        for (var i = 0; i < rows.length; i++) {
            temp = (rows[i].author_name.toString());
            test6.push(temp);
        };
    });

    connection.query("SELECT author_name FROM `first_author` ORDER BY author_name DESC", function(error, rows, fields) {
        if (!!error) {
            console.log("Error in the query.");
        } else {
            console.log("Success");
        }
        for (var i = 0; i < rows.length; i++) {
            temp = { label: (rows[i].author_name.toString()), data: i };
            test7.push(temp);

        };
    });

    console.log(test7);



    res.render('index', { title: 'Demo Of Datasets', defArray: test1, ascArray: test2, dscArray: test3, defArray1: test4, ascArray1: test5, dscArray1: test6, pieJson: test7 });
    test1 = [];
    test2 = [];
    test3 = [];
    test4 = [];
    test5 = [];
    test6 = [];
    test7 = [];
});

module.exports = router;