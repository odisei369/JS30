var keys = document.querySelectorAll(".key");
keys = Array.from(keys);
var sounds = document.querySelectorAll("audio");
sounds = Array.from(sounds);


window.addEventListener("keydown", checkKey);

function playSound(keyCode) {
    sounds.forEach(function (sound) {
        if (sound.getAttribute("data-key") == keyCode) {
            sound.currentTime = 0;
            sound.play();
        }
    });
}
function animateKey(key) {
    key.classList.add("playing");
    key.addEventListener("transitionend", function (event) {
        console.log(event);
        key.classList.remove("playing");
    })
}
function checkKey(event) {
    console.log(event.keyCode);
    keys.forEach(function (key) {
        if (key.getAttribute("data-key") == event.keyCode) {
            playSound(event.keyCode);
            animateKey(key);
        }
    });
}
