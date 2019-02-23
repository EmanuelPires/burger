$(function() {
  $("#submit").on("click", function(event) {
    console.log("hello world");

    var burgerToEat = { burger_name: $("#burgerToEat").val(), devoured: 0 };

    $.ajax("/api/burgers", {
      type: "POST",
      data: burgerToEat
    }).then(function() {
      console.log("burgermade");
      location.reload();
    });
  });

  $(".change-devoured").on("click", function(event) {
    console.log("EATING!");

    var id = $(this).data("id");
    var newDevoured = 1;

    var newDevouredState = {
      devoured: newDevoured
    };
    $.ajax("api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(function() {
      console.log("Changed Devoured to ", newDevoured);

      location.reload();
    });
  });
});

// $(".change-devoured").on("click", function(event) {
//   console.log("EATING!");

//   var id = $(this).data("id");
//   var newDevoured = $(this).data("devoured");

//   var newDevouredState = {
//     devoured: newDevoured
//   };
//   $.ajax("api/burgers/" + id, {
//     type: "PUT",
//     data: newDevouredState
//   }).then(function() {
//     console.log("Changed Devoured to ", newDevoured);

//     location.reload();
//   });
// });
