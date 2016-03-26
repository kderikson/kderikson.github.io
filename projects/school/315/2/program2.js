function js_style() {
  console.log("hello world");
  var colors = ["red", "green", "blue", "orange", "gray"];
  var fonts = ["Arial", "Arial Black", "Comic Sans MS", "Impact", "Courier New"];

  var colornum = Math.floor(Math.random() * 5);
  var fontnum = Math.floor(Math.random() * 5);

  var fontsize = Math.floor(Math.random() * 40) + 1;

  console.log(colornum.toString());
  console.log(fontnum.toString());
  console.log(fontsize.toString());

  document.getElementById("text").style.color = colors[colornum];
  document.getElementById("text").style.fontSize = fontsize;
  document.getElementById("text").style.fontFamily = fonts[fontnum];
}
