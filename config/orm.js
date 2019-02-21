var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

var orm = {
  selectAll: function(tableInput, cb) {
    var query = "SELECT * FROM " + tableInput + ";";
    connection.query(query, function(err, data) {
      if (err) throw err;
      cb(data);
      console.log(data);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";
    console.log(queryString);
    connection.query(queryString, vals, function(err, data) {
      if (err) throw err;
      cb(data);
    });
  }
};

module.exports = orm;
