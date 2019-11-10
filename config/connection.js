var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL){
    console.log("Using environment:", process.env.JAWSDB_URL);
    try{
        connection = mysql.createConnection(process.env.JAWSDB_URL);
        connection.connect();
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