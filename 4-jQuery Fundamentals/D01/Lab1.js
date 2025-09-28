// Task 1
var $container1 = $(".container1");
$("<div>Black</div>").addClass("black").appendTo($container1);
$("<div>White</div>").addClass("white").prependTo($container1);
$("<p></p>")
  .addClass("yellow")
  .text("Yellow")
  .insertBefore($container1.find("p.pink"));

// Task 2
$(".container2 p").each(function () {
  var text = $(this).text();
  var link = $("<a></a>").attr("href", "http://" + text).text(text);
  $(this).replaceWith(link);
});

// Task 3
var $img = $(".container3 img");
$img.wrap("<figure></figure>");
$("<figcaption></figcaption>").text("Coffee").insertAfter($img);

// Task 4
$(".container4 td.col-age").empty();

$(".container4 td.col-name")
  .filter(function () {
    return $(this).text().toLowerCase() === "mohsen";
  })
  .addClass("man");

$(".container4 td").toggleClass("your-email");

// Task 5
$(".container5 li")
  .each(function (i,e) {
    if(i % 3 !== 0){
      e.remove();
    }
  });

  
// Task 6
$('input[name="username"]').val("Abdelrahman Gamal Badr");

$('#my-form input[type="checkbox"]').attr("checked", true);
