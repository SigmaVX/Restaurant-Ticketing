// Import the ORM To Build Functions
var orm = require("../config/orm.js");


var orders = {
  openOrders: function(cb) {
    orm.getSome("order_filled", false, function(result) {
      cb(result);
    });
  },
  filledOrders: function(cb) {
    orm.getSome("order_filled", true, function(result) {
      cb(result);
    });
  },
  newOrder: function(val1, val2, val3, val4, cb) {
    orm.postItem(val1, val2, val3, val4, function(result) {
      cb(result);
    });
  },
  markDone: function(conditionValue,  cb) {
    orm.updateItem(conditionValue, function(result) {
      cb(result);
    });
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = orders;