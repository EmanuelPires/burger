var connection = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

var orm = {
  selectAll: function() {
    var query = "SELECT * FROM burgers";
    connection.query(query, function(err, data) {
      if (err) throw err;
      res.json(data);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    var queryString = "ISERT INTO " + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";
  },
  updateOne: function(id, devoured) {}
};

module.exports = orm;
