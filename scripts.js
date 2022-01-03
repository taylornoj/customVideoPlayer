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


// TODO: hook up event listeners

// click on video to play and pause
video.addEventListener('click', togglePlay);

// add functionality to play button
toggle.addEventListener('click', togglePlay);