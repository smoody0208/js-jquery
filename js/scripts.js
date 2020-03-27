$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var nameInput = $("#name").val();
    var devInput = $("#development").val();
    var fieldInput = $("#field").val();
    var comInput = $("#company").val();
    var platInput = $("#platform").val();
    var easyInput = $("#easy").val();

    $(".name").text(nameInput);

    if (devInput === "front-end") {
      $("#a-js").show();
    } else if (fieldInput === "web" && comInput === "startup" && platInput === "apple" && easyInput === "no") {
      $("#a-ruby").show().siblings().hide("#a-ruby");
    } else if (fieldInput === "web" && comInput === "established" && platInput === "apple" & easyInput === "no") {
      $("#a-ruby").show().siblings().hide("#a-ruby");
    } else if (fieldInput === "web" && comInput === "large" && platInput === "windows" && easyInput === "no") {
      $("#a-csharp").show().siblings().hide("#a-csharp");
    } else if (fieldInput === "game" && comInput === "large" && platInput === "windows" && easyInput === "no") {
      $("#a-csharp").show().siblings().hide("#a-csharp");
    } else {
      $("#nope").show().sibilings().hide("#nope");
    }
    event.preventDefault();
  });
});