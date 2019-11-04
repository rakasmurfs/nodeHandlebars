var connection = require("./connection.js");

var orm = {
    selectAll: function(tableName, callback) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, [tableName], function(err, result) {
            if (err) throw err;
            callback(result)
        });
    },
    insertOne: function(tableName, column1, column2, column1Value, column2Value, cb) {
        var queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?);";
    
        console.log(queryString);
    
        connection.query(queryString, [tableName, column1, column2, column1Value, column2Value], function(err, result) {
          if (err) throw err;
          cb(result);
        });
      },
      
    updateOne: function(tableName, devouredColumn, devouredState, burgerID) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE id=?";
    
        console.log(queryString);
    
        connection.query(queryString, [tableName, devouredColumn, devouredState, burgerID], function(
          err,
          result
        ) {
          if (err) throw err;
          console.log(result);
        });
      },
    
      deleteOne: function(tableName, burgerID) {
        var queryString = "DELETE FROM ?? WHERE id=?";
    
        console.log(queryString);
    
        connection.query(queryString, [tableName, burgerID], function(
          err,
          result
        ) {
          if (err) throw err;
          console.log(result);
        });
      }
};

module.exports = orm;