// -------TODO: get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip');
const ranges = player.querySelectorAll('.player__slider');

// -------TODO: build functions

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

// how much is video actually going to be skipped
function skip() {
  // dataset has skip value (-10/25) in it
  // parseFloat to convert string into true number
  video.currentTime += parseFloat(this.dataset.skip);
}

// listen for a change on sliders
function handleRangeUpdate() {
  video[this.name] = this.value;
  // .name is property (volume or playbackRate) so it is equal to value on either range
  // console.log(this.name);
  // console.log(this.value);
}

// match progress bar to length of video
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

// ability to click along progress bar and change time of video
function scrub(e) {
  // ( ) gives us a percentage then * by video duration
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  // then update the video
  video.currentTime = scrubTime;
}

// -------TODO: hook up event listeners

// click on video to play and pause
video.addEventListener('click', togglePlay);
// listen for when video is playing or paused
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
// shows progress bar in line with time of video
video.addEventListener('timeupdate', handleProgress);

// add functionality to buttons
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
progress.addEventListener('click', scrub);