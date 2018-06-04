var keybindings = (function (){
var video = document.getElementById('video');
var sound1 = document.getElementById('sound1');
var sound2 = document.getElementById('sound2');
var sound3 = document.getElementById('sound3');

document.onkeypress = function(e) {
  /**
   * Play video on enter / pause on enter
   * @type {[type]}
   */
  console.log((e || window.event).keyCode);
  if ((e || window.event).keyCode === 107 /* enter key */ ) {
    if (video.paused) {
      video.style.display = "block";
      video.style.opacity = "1";
      video.play();
    } else {
      video.style.display = "none";
      video.style.opacity = "0";
      video.pause();
    }
    // video.paused ? video.play() : video.pause();
  }
  /**
   * Play Sound on k / pause on k
   * @type {[type]}
   */
  if ((e || window.event).keyCode === 13 /* k key */ ) {
    sound1.paused ? sound1.play() : sound1.pause();
  }
  /**
   * Play Sound on k / pause on k
   * @type {[type]}
   */
  if ((e || window.event).keyCode === 119 /* k key */ ) {
    sound2.paused ? sound2.play() : sound2.pause();
  }
  /**
   * Play Sound on k / pause on k
   * @type {[type]}
   */
  if ((e || window.event).keyCode === 115 /* k key */ ) {
    sound3.paused ? sound3.play() : sound3.pause();
  }
};
}());
