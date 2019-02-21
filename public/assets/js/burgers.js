$(function() {
  $("#submit").on("click", function(event) {
    console.log("hello world");

    var burgerToEat = { burger_name: $("#burgerToEat").val(), devoured: 0 };

    $.ajax("/api/burgers", {
      type: "POST",
      data: burgerToEat
    }).then(function() {
      console.log("burgermade");
    });
  });
});
