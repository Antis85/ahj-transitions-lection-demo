window.onload = function () {
  const start = Date.now();
  const obj = document.getElementById('requestAnimationFrameSquare');

  const posMax = (obj.parentNode.clientWidth - obj.clientWidth) * 10;

  let progress = 0;

  function draw() {
    // const progress = Date.now() - start;
    progress++;
    obj.style.left = progress + "px";
    if (progress < posMax) {
      window.requestAnimationFrame(draw);
    }
  }

  window.requestAnimationFrame(draw);
};