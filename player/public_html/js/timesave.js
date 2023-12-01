window.onunload = function() {
    var videoElement = document.querySelector("#vidplayer");
    localStorage.setItem("currentTime", videoElement.currentTime);
  }
  
  window.onload = function() {
    var videoElement = document.querySelector("#vidplayer");
    var currentTime = localStorage.getItem("currentTime");
    if (currentTime) {
        videoElement.currentTime = currentTime;
    }
  }