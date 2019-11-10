var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL){
    console.log("Using environment:", process.env.JAWSDB_URL);
    try{
        connection = mysql.createConnection(process.env.JAWSDB_URL);
    }
    catch(error){
        console.log(error);
    }
} else {
    connection = mysql.createConnection({
        host: "lolyz0ok3stvj6f0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "r7zlq1pxkngin7j9",
        password: "w8l3yle0eadtwsn9",
        database: "hd2lkn1ecyf02j24"
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