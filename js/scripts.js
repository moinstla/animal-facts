$(document).ready(function() {
  $("input[name=animals]:radio").click(function() {
      if ($("input[name=animals]:checked").val() === "turtles") {
        $("#snakes").hide();
        $("#insects").hide();
        $("#turtles").show();
      } else if ($("input[name=animals]:checked").val() === "snakes") {
        $("#insects").hide();
        $("#turtles").hide();
        $("#snakes").show();
      } else {
        $("#turtles").hide();
        $("#snakes").hide();
        $("#insects").show();
      }
  });
});
