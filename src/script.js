document.addEventListener('DOMContentLoaded', function () {

  // Header click message
  const header = document.querySelector('.header');
  if (header) {
    header.innerText = "Hey Manohar ❤️ Will you be my Valentine?";
    header.addEventListener('click', function () {
      alert("You are my forever ❤️ Happy Valentine’s Day 💐");
    });
  }

  // Button animation
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function () {
      button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseleave', function () {
      button.style.transform = 'scale(1)';
    });
    button.addEventListener('mousedown', function () {
      button.style.transform = 'scale(0.9)';
    });
    button.addEventListener('mouseup', function () {
      button.style.transform = 'scale(1.1)';
    });
  });

  // GIF logic
  const gifContainer = document.querySelector('.gif-container');
  const gifPaths = [
    'public/gif1.gif',
    'public/gif2.gif',
    'public/gif3.gif'
  ];
  let currentGifIndex = 0;

  function updateGif() {
    if (gifContainer) {
      gifContainer.src = gifPaths[currentGifIndex];
    }
  }

  buttons.forEach((button, index) => {
    button.addEventListener('click', function () {
      currentGifIndex = index;
      updateGif();

      if (index === 0) {
        alert("Yayyy ❤️ I knew you’d say YES 😘");
      }
    });
  });

  updateGif();
});

