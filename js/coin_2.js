window.onload = function () {
  document.getElementById('coin_2').onclick = function () {
    this.classList.add('coin_2_second_state');
    this.addEventListener('transitionend', () => {
      this.classList.remove('coin_2_second_state');
      console.log('coin_2_second_state deleted');
    });
  };
};