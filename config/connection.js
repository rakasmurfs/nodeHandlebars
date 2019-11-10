var mysql = require("mysql");

var connection;

if ("mysql://r7zlq1pxkngin7j9:w8l3yle0eadtwsn9@lolyz0ok3stvj6f0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/hd2lkn1ecyf02j24"){
    console.log("Using environment:", "mysql://r7zlq1pxkngin7j9:w8l3yle0eadtwsn9@lolyz0ok3stvj6f0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/hd2lkn1ecyf02j24");
    try{
        connection = mysql.createConnection("mysql://r7zlq1pxkngin7j9:w8l3yle0eadtwsn9@lolyz0ok3stvj6f0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/hd2lkn1ecyf02j24");
    }
    catch(error){
        console.log(error);
    }
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 8889,
        user: "root",
        password: "root",
        database: "burgers_db"
    });
}

connection.connect(function(err){
    if(err){
        console.error("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;