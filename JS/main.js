var timeInterval = 1000 / 40
var count = 0

function gameLoop() {
    document.getElementById("test1").innerHTML = count
    count++

}

setInterval(gameLoop,timeInterval)