// Task 1
$(".container1 div").each(function () {
  var divColor = $(this).attr("class");
  $(this).css("background-color", divColor);

  var pColor = $(this).find("p").attr("class");
  $(this).find("p").css("color", pColor);
});

// Task 2
$('.container2 a[href*="google"]').text("Google");
$('.container2 a[href$="org"]').text("IEEE");
$('.container2 a[href^="https"]').text("Facebook");
$('.container2 a[href^="http"]').each(function () {
  $(this).text($(this).text() + " Official Website");
});

// Task 3
var thirdFigure = $(".container3 figure").eq(2);

thirdFigure.find("img").attr("src", "img/orange.png");
thirdFigure.find("figcaption").text("fig.3 - Orange Juice");
$("td .my-name").css("color", "blue");

// Task 4
$(".container4 td.my-name").attr("style", "color: blue;");
$(".container4 td:odd").css("background-color", "pink");
$(".container4 table").find("tr:last td:eq(1)").css("font-weight", "bold");

// Task 5
$(".container5 ul li:eq(1)").css("font-style", "italic");
$(".container5 ol li:eq(1)").next().css("color", "red");
