// TODO: get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip');
const ranges = player.querySelectorAll('.player__slider');

// TODO: build functions

// plays and pauses movie
function togglePlay() {
  if(video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

//to recognize pause - regardless of how user paused the video
function updateButton() {
  // we can use 'this' because it is bound to the video itself through add event listener
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}


// TODO: hook up event listeners

// click on video to play and pause
video.addEventListener('click', togglePlay);
// listen for when video is playing or paused
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

// add functionality to play button
toggle.addEventListener('click', togglePlay);