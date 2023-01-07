// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

(function (window) {
  var speakWord = "Good Bye";
  var byeSpeaker = {};
  var goodbyePrintname = {};

  byeSpeaker.speak = function(goodbyePrintname) {
    console.log(speakWord + " " + goodbyePrintname);
  }

  window.byeSpeaker = byeSpeaker;

})(window);
