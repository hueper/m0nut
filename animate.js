var animate = (function (){
var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var p3 = document.getElementById('p3');
var p4 = document.getElementById('p4');

var circles = document.getElementsByTagName('circle');
for (var i = 0; i < circles.length; i++) {
  var R1 = ((Math.random() * 0.699) + 0.300).toFixed(3),
			R2 = ((Math.random() * -0.899) - 0.100).toFixed(3),
			R3 = ((Math.random() * 0.899) + 0.100).toFixed(3),
			R4 = (Math.random() + 0.4).toFixed(3);
  console.log(circles[i]);
  var animation = "blinker 20s cubic-bezier(" + R1 + ", " + R2 + ", " + R3 + ", " + R4 + ") infinite";
  // circles[i].style.fill = '#'+Math.floor(Math.random()*16777215).toString(16);
  circles[i].style.fill = "#000000";
  circles[i].style.animation = animation;
  p1.style.fill = "#000000";
  p1.style.animation = animation;
  p2.style.fill = "#000000";
  p2.style.animation = animation;
  p3.style.fill = "#000000";
  p3.style.animation = animation;
  p4.style.fill = "#000000";
  p4.style.animation = animation;
}
}());
