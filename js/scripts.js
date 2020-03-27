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
      $("#a-ruby").show();
      $("#a-js").hide();
    } else if (fieldInput === "web" && comInput === "established" && platInput === "apple" & easyInput === "no") {
      $("#a-ruby").show();
      $("#a-js").hide();
    } else if (fieldInput === "web" && comInput === "large" && platInput === "windows" && easyInput === "no") {
      $("#a-csharp").show();
      $("#a-js").hide(); 
    } else if (fieldInput === "game" && comInput === "large" && platInput === "windows" && easyInput === "no") {
      $("#a-csharp").show();
      $("#a-js").hide(); 
    } else {
      $("#nope").show();
    }
    event.preventDefault();
  });
});