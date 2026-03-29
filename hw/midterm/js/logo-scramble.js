(function () {
  var CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  function scramble(el) {
    var original = el.dataset.original || el.innerText.trim();
    el.dataset.original = original;

    var frame = 0;
    var speed = 40;          // ms per frame
    var stepsPerChar = 8;    // random frames before each char locks in
    var totalFrames = original.length * stepsPerChar;

    clearInterval(el._scrambleInterval);

    el._scrambleInterval = setInterval(function () {
      el.innerText = original
        .split('')
        .map(function (char, i) {
          if (frame >= i * stepsPerChar) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join('');

      frame++;

      if (frame > totalFrames) {
        clearInterval(el._scrambleInterval);
        el.innerText = original;
      }
    }, speed);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var logo = document.querySelector('.logo-text');
    if (!logo) return;
    logo.addEventListener('mouseenter', function () {
      scramble(logo);
    });
  });
})();
