var orm = require("../config/orm.js");

var burgers = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(data) {
      cb(data);
    });
  },
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(data) {
      cb(data);
    });
  },
  updateOne: function(condition, cb) {
    orm.updateOne(condition, function(data) {
      cb(data);
    });
  }
};

module.exports = burgers;
