// Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fs = player.querySelector('.fullScreen');

fs.addEventListener('click', full);
//Build functions
function full(){
  if (document.webkitFullscreenElement)
    document.webkitExitFullscreen();
  else
    player.webkitRequestFullscreen();
}

function togglePlay (){
  if(video.paused)
    video.play();
  else
    video.pause();
}

function updateButton() {
  const icon = this.paused ? "►" : "▋▋";
  toggle.innerHTML = icon;
}
function skip(){
  //console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
  video[this.name] = this.value;
  //console.log(this.value);
}

function handleProgress(){
  const percent = (video.currentTime/video.duration) * 100;
  //console.log(percent);
  progressBar.style.flexBasis = percent + '%';
}

function scrub(e){
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

//Hook up event listeners

progress.addEventListener('click', scrub);

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach(function (button) {
  button.addEventListener('click', skip);
});

ranges.forEach(function (range) {
  range.addEventListener('change', handleRangeUpdate);
});
ranges.forEach(function (range) {
  range.addEventListener('mousemove', handleRangeUpdate);
});


video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
let mouseDown = false;
progress.addEventListener('mousemove', (e) => {
  if (mouseDown)
    scrub(e);
});
progress.addEventListener('mouseup', () => mouseDown = false);
progress.addEventListener('mousedown', () => mouseDown = true);
