document.querySelector('.menu-mobile').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.menu-desplegable').classList.toggle('active');
  });