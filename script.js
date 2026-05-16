const video = document.querySelector("#custom-audio-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
const themeTitle = document.querySelector("#theme-title");
const albumCover = document.querySelector(".album-cover");
const albumcaption = document.querySelector(".album-caption");
const muteUnmuteImg = document.querySelector("#mute-unmute-img");
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

function toggleAudio() {
  if (video.muted) {
    video.muted = false;
    muteUnmuteImg.src = "mute.png"
  } else {
    video.muted = true;
    muteUnmuteImg.src = "Unmute.png";
  }
}

document.querySelector("#theme-forest").addEventListener("click", function() {
    themeTitle.textContent = "Forest";
    albumcaption.textContent = "Image by Denis_333";
    albumCover.src = "Image1.jpeg";
    video.src = "Forest.mp3";
    video.load();

    document.documentElement.style.setProperty('--primary-bg-color', '#c4783a');
    document.documentElement.style.setProperty('--main-bg-color', '#2d4a1e');
    document.documentElement.style.setProperty('--main-text-color', '#f5e6d0');
    document.documentElement.style.setProperty('--nav-bg-color', '#eb9046');
});

document.querySelector("#theme-Rain").addEventListener("click", function() {
    themeTitle.textContent = "Rain";
    albumcaption.textContent = "Image by alexkich";
    albumCover.src = "Image2.jpeg";
    video.src = "Rain.mp3";
    video.load();

    document.documentElement.style.setProperty('--primary-bg-color', '#6b7c8a');
    document.documentElement.style.setProperty('--main-bg-color', '#3d4f5c');
    document.documentElement.style.setProperty('--main-text-color', '#e8edf0');
    document.documentElement.style.setProperty('--nav-bg-color', '#8a9fad');
});

document.querySelector("#theme-Night").addEventListener("click", function() {
    themeTitle.textContent = "Night";
    albumCover.src = "Image3.jpeg";
    albumcaption.textContent = "Image by noon@photo";
    video.src = "Night.mp3";
    video.load();

    document.documentElement.style.setProperty('--primary-bg-color', '#4848a8');
    document.documentElement.style.setProperty('--main-bg-color', '#7e5fcc');
    document.documentElement.style.setProperty('--main-text-color', '#1e2540');
    document.documentElement.style.setProperty('--nav-bg-color', '#6b52a8');
});

document.querySelector("#theme-Ocean").addEventListener("click", function() {
    themeTitle.textContent = "Ocean";
    albumCover.src = "Image4.jpeg";
    albumcaption.textContent = "Image by ChanChai";
    video.src = "Ocean.mp3";
    video.load();

    document.documentElement.style.setProperty('--primary-bg-color', '#5ba3c9');
    document.documentElement.style.setProperty('--main-bg-color', '#2a6e9e');
    document.documentElement.style.setProperty('--main-text-color', '#f0f4e8');
    document.documentElement.style.setProperty('--nav-bg-color', '#7bbfd4');
});


document.querySelector("#skip-back-btn").addEventListener("click", function() {
  video.currentTime = video.currentTime - 15;
});

document.querySelector("#skip-forward-btn").addEventListener("click", function() {
  video.currentTime = video.currentTime + 15;
});

let isLooping = false;

document.querySelector("#loop-btn").addEventListener("click", function() {
    isLooping = !isLooping;
    video.loop = isLooping;
    
    if (isLooping) {
        document.querySelector("#loop-btn img").src = "LoopActive.png";
    } else {
        document.querySelector("#loop-btn img").src = "Loop.png";
    }
});