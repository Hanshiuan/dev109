// Buttons and input options
var mybutton = document.getElementById("clearBtn");
var colorPicker = document.getElementById("colorPicker");
var sizePicker = document.getElementById("sizePicker");

// click to clear
mybutton.addEventListener("click", function(event) {
  var elements = document.querySelectorAll(".dot");
  elements.forEach(el => el.remove());

  // Avoid pressing buttons that also draw dots
  event.stopPropagation();
});

// Click elsewhere on the screen to add dot
document.addEventListener("click", function(event) {
  var dot = document.createElement("div");
  dot.className = "dot";

  // dot's color and size
  let color = colorPicker.value;
  let size = parseInt(sizePicker.value);
  dot.style.background = color;
  dot.style.width = size + "px";
  dot.style.height = size + "px";
  dot.style.left = (event.pageX - size / 2) + "px";
  dot.style.top = (event.pageY - size / 2) + "px";

  document.body.appendChild(dot);
});
