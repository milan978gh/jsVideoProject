const preloader = document.querySelector('.preloader');
const videoContainer = document.querySelector('.video-container');
const switchBtn = document.querySelector('.switch-btn');


window.onload = () => {
  preloader.classList.add('hide-preloader');
};

switchBtn.onclick = () => {
  if (!switchBtn.classList.contains('slide')) {
    switchBtn.classList.add('slide');
    videoContainer.pause();
  } else {
    switchBtn.classList.remove('slide');
    videoContainer.play();
  }
};

