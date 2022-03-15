1//
const $articleImg = $("article img");

$articleImg.addClass("image-center");

2//
const $lastParagraph = $("article :last-child");

$lastParagraph.css("display", "none");


3//
const randomNum = Math.floor(Math.random() * 100);

const $title = $("#title");

$title.css("font-size", `${randomNum}px`);

//4
const $list = $("ol");

$list.append('<li>Melanie, Anita, & Joannes were here!</li>');

//5
const $aside = $("aside");

$aside.html("<p>Sorry for that! j/k </p>")

//6

const $colorInput = $(".form-control");

const colorArray = Array.from($colorInput);


$colorInput.on("keyup blur change", () => {
  // let event = evt.target;
  let red = colorArray[0].value;
  let blue = colorArray[1].value;
  let green = colorArray[2].value;

  $("body").css("background-color", `rgb(${red}, ${green}, ${blue})`);
});


// 7. Add an event listener so that when you click on the image,
//    it is removed from the DOM.

$("img").on("click", function (evt) {
  $(evt.target).remove();
});

//both work 
$('img').on('click', () => {
  $('img').remove();
})
