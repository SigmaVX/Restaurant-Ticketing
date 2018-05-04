// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
  getSome: function(keyName, keyValue, cb) {
    var sqlString = "SELECT id, menu_item, quantity, check_number, table_number, DATE_FORMAT(orders.order_time, '%a %l:%i') AS order_time, DATE_FORMAT(orders.filled_time, '%a %l:%i') AS filled_time, order_filled FROM orders WHERE ?? = ?";
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
  },
  priorityOrders: function(cb){
    var sqlString = "SELECT a.filled_time, a.order_filled, b.filled_time, b.order_filled, a.id, a.menu_item, a.quantity, DATE_FORMAT(a.order_time, '%a %l:%i') AS order_time, a.check_number, a.table_number FROM orders a, orders b WHERE a.id <> b.id AND a.table_number = b.table_number AND a.order_filled = false AND b.order_filled = true";
    console.log(sqlString);
    connection.query(sqlString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }

};

// Export ORM For Models
module.exports = orm;