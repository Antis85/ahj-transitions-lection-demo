makeEaseOut = (timing) => (timeFraction) => 1 - timing(1 - timeFraction);

function ballEasing(timeFraction) {
  for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
    }
  }
}

window.onload = function () {
  document.getElementById('ball').onclick = function () {

    const field = this.parentNode;
    const height = field.clientHeight - this.clientHeight;

    this.animate({
      duration: 2000,
      timing: makeEaseOut(ballEasing),
      draw: function(progress) {
        this.style.top = height * progress + 'px'
      }
    });


  };
};


