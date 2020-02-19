window.onload = function () {
  const square = document.getElementById('moving_square');
  const width = square.offsetWidth;
  document.onkeydown = function (e) {
    square.style.top = square.offsetTop + 'px';
    square.style.left = square.offsetLeft + 'px';
    if (e.key === 'ArrowUp') {
      square.style.top = parseInt(square.style.top) - width + 'px';
    }
    if (e.key === 'ArrowDown') {
      square.style.top = parseInt(square.style.top) + width + 'px';
    }
    if (e.key === 'ArrowLeft') {
      square.style.left = parseInt(square.style.left) - width + 'px';
    }
    if (e.key === 'ArrowRight') {
      square.style.left = parseInt(square.style.left) + width + 'px';
    }
  }
};