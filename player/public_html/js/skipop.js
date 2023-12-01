var video = document.getElementById("vidplayer");
var skipop = document.getElementById("skip-op");
var autoJumpCheckbox = document.getElementById("auto-jump-checkbox");
    
setInterval(() => {
    if (video.currentTime >= 70 && video.currentTime <= 85) {
      skipop.style.display = 'block';
      if (autoJumpCheckbox.checked) {
        jumpToTime();
      }
    } else {
      skipop.style.display = 'none';
    }
}, 1000);

function jumpToTime() {
    video.currentTime = 161; 
}
