const characterCards = document.querySelectorAll('.character-card');
const characterStatus = document.getElementById('character-status');

characterCards.forEach(function (card) {
  card.addEventListener('click', function () {

    // Reset all cards first
    characterCards.forEach(function (c) {
      c.classList.remove('character-highlight');   // CSS class (remove)
      c.style.background = '';                     // CSS style (reset)
    });

    // 1. Add CSS Class — soft bg fill on selected card
    card.classList.add('character-highlight');

    // 2. Change CSS Style — deepen the bg tint slightly
    card.style.background = 'rgba(129, 140, 248, 0.18)';

    // 3. innerHTML — update the status bar below the grid
    var name = card.querySelector('h3').textContent;
    characterStatus.innerHTML = '<strong>Now reading about:</strong> ' + name;
  });
});

var auroraBtn = document.getElementById('aurora-btn');

auroraBtn.addEventListener('click', function () {

  // 4. Add / toggle CSS Class on <body>
  document.body.classList.toggle('aurora-mode');

  var isAurora = document.body.classList.contains('aurora-mode');

  // 5. Change CSS Style — update button background & text color
  auroraBtn.style.background  = isAurora ? '#6ee7b7' : 'transparent';
  auroraBtn.style.color       = isAurora ? '#0f172a' : '#ffffff';
  auroraBtn.style.borderColor = isAurora ? '#6ee7b7' : 'rgba(255,255,255,0.4)';

  // 6. innerHTML — swap button label
  auroraBtn.innerHTML = isAurora ? '&#10022; Aurora On' : '&#10022; Aurora Mode';
});


var locationCards = document.querySelectorAll('.location-card');
var locationStatus = document.getElementById('location-status');

locationCards.forEach(function (card) {
  card.addEventListener('click', function () {

    var wasActive = card.classList.contains('location-active');

    // Reset all location cards
    locationCards.forEach(function (c) {
      c.classList.remove('location-active');   // CSS class (remove)
      c.style.borderColor = '';               // CSS style (reset)
    });

    if (!wasActive) {
      // 7. Add CSS Class — highlight the selected location
      card.classList.add('location-active');

      // 8. Change CSS Style — purple accent border
      card.style.borderColor = '#818cf8';

      // 9. innerHTML — show which location is being explored
      var locationName = card.querySelector('h3').textContent;
      locationStatus.innerHTML = '<strong>Exploring:</strong> ' + locationName;
    } else {
      locationStatus.innerHTML = 'Click a location to explore it.';
    }
  });
});
