var timeInterval = 1000 / 40
var count = 0

function gameLoop() {
    document.write(count)
    count++

}

setInterval(gameLoop,timeInterval)