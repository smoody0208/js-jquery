$(document).ready(function) {
  $("form#quiz").submit(function(event) {
    var nameInput = $("input#name").val();
    var devInput = $("input#development").val();
    var fieldInput = $("input#field").val();
    var comInput = $("input#company").val();
    var platInput = $("input#platform").val();
    var easyInput = $("input#easy").val();

    $(".name").text(nameInput);

    if (devInput === "front-end") {
      $("#a-js").show():
      else if (fieldInput === "web" && comInput === "startup" && platInput === "apple")
    }

  }
}