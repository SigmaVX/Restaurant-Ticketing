$("#order-submit").on("click", function(event){
    event.preventDefault();
    console.log("clicked");

    var quantity = $("#order-quantity").val().trim();
    var checkNumber =  $("#check-number").val().trim();
    var checkLength = checkNumber.length;
    
    if(quantity === "" || checkNumber === "" || checkLength !== 4){
        $("#errorModal").modal("show");
    } else {

        var newOrder ={
            item: $("#food-item").find(":selected").attr("data"),
            quantity: quantity,
            checkNumber: checkNumber,
            tableNumber: $("#table-number").find(":selected").attr("data")
        }

        $.ajax({
            url: "/neworder",
            type: "POST",
            data: newOrder
        }).then(function(data) {
            console.log("Data Stored: ", data);
            location.reload();
        });
    };   
});

$(".done-btn").on("click", function(event){
    event.preventDefault();

    id = $(this).attr("data");
    console.log(id);

    var updateItem = {
        id: id
    }

    $.ajax({
        url: "/neworder",
        type: "PUT",
        data: updateItem
    }).then(function(data) {
        console.log("Data Stored: ", data);
        location.reload();
    });
});
