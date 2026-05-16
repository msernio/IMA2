const video = document.querySelector("#custom-audio-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
const themeTitle = document.querySelector("#theme-title");
const albumCover = document.querySelector(".album-cover");
video.removeAttribute("controls");

// playPauseBtn.addEventListener("click", togglePlayPause);
video.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "Pause.png";
  } else {
    video.pause();
    playPauseImg.src = "Play.png";
  }
}
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}
// Add other functionalities here

document.querySelector("#theme-forest").addEventListener("click", function() {
    themeTitle.textContent = "Forest";
    albumCover.src = "Image1.jpeg";
    video.src = "Forest.mp3";
    video.load();
});

document.querySelector("#theme-Rain").addEventListener("click", function() {
    themeTitle.textContent = "Rain";
    albumCover.src = "Image2.jpeg";
    video.src = "Rain.mp3";
    video.load();
});

document.querySelector("#theme-Night").addEventListener("click", function() {
    themeTitle.textContent = "Night";
    albumCover.src = "Image3.jpeg";
    video.src = "Night.mp3";
    video.load();
});

document.querySelector("#skip-back-btn").addEventListener("click", function() {
  video.currentTime = video.currentTime - 15;
});

document.querySelector("#skip-forward-btn").addEventListener("click", function() {
  video.currentTime = video.currentTime + 15;
});

