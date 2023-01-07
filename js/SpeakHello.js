(function (window) {
  var speakWord = "Hello";
  var helloSpeaker = {};
  var helloPrintname = {};

  helloSpeaker.speak = function(helloPrintname) {
    console.log(speakWord + " " + helloPrintname);
  }

  window.helloSpeaker = helloSpeaker;

})(window);
