function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function animateColorGradient() {
    var colorGradient = document.getElementById('color-gradient');
    setInterval(function() {
      var startColor = generateRandomColor();
      var endColor = generateRandomColor();
      colorGradient.style.background = 'linear-gradient(to right, ' + startColor + ', ' + endColor + ')';
    }, 2000); // Ändert den Farbverlauf alle 2 Sekunden
  }
  
  animateColorGradient();
  