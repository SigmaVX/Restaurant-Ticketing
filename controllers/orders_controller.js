var express = require("express");
var router = express.Router();

// Import Model For Database Functions.
var orders = require("../models/orders.js");

var data = {
    openOrderData: "",
    closedOrderData: ""
}

router.get("/", function(req, res){
    orders.openOrders(function(result){
        data.openOrderData = result;

        orders.filledOrders(function(result2){
            data.closedOrderData = result2;
            res.render("index", data); 
        });
    });
  });

 router.post("/neworder", function(req, res){   
    var item = req.body.item;
    var quantity = req.body.quantity;
    var checkNumber = req.body.checkNumber;
    var tableNumber = req.body.tableNumber;

    orders.newOrder(item, quantity, checkNumber, tableNumber, function(result){
       res.sendStatus(200).end();
    });
 });
  
 router.put("/neworder", function(req, res){
    var id = req.body.id;
    orders.markDone(id, function(result){
       res.sendStatus(200).end();
    });
 });


// Export To server.js  
module.exports = router;