var timeInterval = 1000 / 40;
var frame_count = 0;
var rock_count = 1;
var innovation = 0;
var fireFlag = false;
var researchFlags = [false];

// researchFlags( 0 = FIRE )

function gameLoop() {
    document.getElementById("frame-counter").innerHTML = (frame_count % 40) + 1;
    frame_count++;
    Draw();
}

function Draw() {
    if (document.getElementById("lookAroundButton").style.display != 'none') {
        if (rock_count == 1) {
            document.getElementById("lookAroundButton").style.display = 'initial';
        } else {
            document.getElementById("lookAroundButton").style.display = 'none';
        }
    }
    if (!researchFlags[0]) {
        if (rock_count == 2) {
            document.getElementById("bangRocksButton").style.display = 'initial';
        } else {
            document.getElementById("bangRocksButton").style.display = 'none';
        }
    }

    //draw variableStack
    document.getElementById("variableStack").innerHTML = "Rock Count = " + rock_count + "</br>" + "Innovation = " + innovation + "</br>";

}

function lookAround() {
    var rando = Math.random()
    if (rando < .75) {
        document.getElementById("console").innerHTML = "You look around for a while, but find nothing interesting.";
    } else {
        document.getElementById("console").innerHTML = "You look around for a while, and find another rock.";
        rock_count++;
    }
}

function bangRocks() {
    var rando = Math.random()
    if (rando < .25) {
        document.getElementById("console").innerHTML = "You bang two rocks together, hit your thumb, it hurt.";
        innovation++;
    } else if ((rando >= .25) && (rando < .5)) {
        document.getElementById("console").innerHTML = "You bang two rocks together, it makes a lound clack.";
        innovation = innovation + 2;
    } else if ((rando >= .5) && (rando < .9)) {
        document.getElementById("console").innerHTML = "You bang two rocks together, fail miserably, and drop your rocks.";
        innovation--;
    } else {
        document.getElementById("console").innerHTML = "You bang two rocks together, a spark is created, it is wonderous.";
        innovation = innovation + 5;
        if (!fireFlag) {
            fireFlag = true;
        }
    }
}

setInterval(gameLoop, timeInterval);