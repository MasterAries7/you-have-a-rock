var timeInterval = 1000 / 40
var frame_count = 0


function gameLoop() {
    document.getElementById("frame-counter").innerHTML = (frame_count % 40) + 1
    frame_count++
}

function lookAround() {
    if (Math.random() < .75) {
        document.getElementById("console").innerHTML = "You look around for a while, but find nothing interesting."
    } else {
        document.getElementById("console").innerHTML = "You look around for a while, and find another rock."
    }
}

setInterval(gameLoop,timeInterval)