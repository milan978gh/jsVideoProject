const vidContainer = document.querySelector('.video-container');
const switchBtn = document.querySelector('.switch-btn');
const playBtn = document.querySelector('.play-btn');


switchBtn.addEventListener('click', function () {
  if (!switchBtn.classList.contains('play')) {
    vidContainer.play();
    playBtn.textContent = 'pause';
    switchBtn.classList.add('play');
  } else {
    vidContainer.pause();
    playBtn.textContent = 'play';
    switchBtn.classList.remove('play');
  }
});
vidContainer.addEventListener('ended', function () {
  vidContainer.load();
  playBtn.textContent = 'play';
  switchBtn.classList.remove('play');
});
