var i = 0;
var txt = 'Welcome to our site. Click the button for move next page'; 
var s = 100; 

function click() {
  if (i < txt.length) {
    document.getElementById("text").innerHTML += txt.charAt(i);
    ++i;
    setTimeout(click, s);
  }
}
