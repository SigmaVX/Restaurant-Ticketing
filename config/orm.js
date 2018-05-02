// Import MySQL connection.
var connection = require("./connection.js");

// post new order
// update an order to close it out
// display partial orders - table were one is done and another is not
// display all closed
// display all open 

var orm = {
  getSome: function(keyName, keyValue, cb) {
    var sqlString = "SELECT * FROM orders WHERE ?? = ?";
    connection.query(sqlString, [keyName, keyValue], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  postItem: function(val1, val2, val3, val4, cb) {
    var sqlString = "INSERT INTO orders (menu_item, quantity, check_number, table_number) VALUE (?,?,?,?)";
    console.log(sqlString);
    connection.query(sqlString, [val1, val2, val3, val4], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateItem: function(conditionValue, cb) {
    var sqlString = "UPDATE orders SET filled_time = CURRENT_TIMESTAMP(), order_filled = true WHERE id = ?";
    console.log(sqlString);
    connection.query(sqlString, [conditionValue], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

// Export ORM For Models
module.exports = orm;