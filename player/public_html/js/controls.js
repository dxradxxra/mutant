var controlElements = document.querySelectorAll(".controlsplayer");
var timeout;

function hideControls() {
    controlElements.forEach(function(element) {
        element.classList.add("hidden");
    });
}

function showControls() {
    controlElements.forEach(function(element) {
        element.classList.remove("hidden");
    });
}

function resetTimer() {
    clearTimeout(timeout);
    showControls();
    timeout = setTimeout(hideControls, 3000);
}

document.querySelector("#vidplayer").addEventListener("mousemove", resetTimer);

resetTimer();