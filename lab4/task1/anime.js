(function() {
  const images = document.querySelectorAll('.movie-container img');

  images.forEach(function(image, index) {
    image.style.opacity = 0;

    anime({
      targets: image,
      opacity: 1,
      scale: 1.1,
      duration: 1200,
      easing: 'easeInOutExpo',
      delay: index * 250,
    });
  });
})();