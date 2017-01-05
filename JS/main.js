var timeInterval = 1000 / 40;
var frame_count = 0;
var rock_count = 1;
var innovation = 0;
var fireFlag = false;
var consoleLength = 20;

var consoleStrings = [];

var researchFlags = [false];
var researchCost = [100];
var researchNames = ["FIRE"];
var researchConsoleBlurb = ["You strike a spark, it ignites some dried leaves for a moment.  You must find more."]

initConsole();

function initConsole() {
    consoleStrings[0] = "You have a rock."
    for (a = 1; a <= consoleLength; a++) {
        consoleStrings[a] = "";
    }
}


function gameLoop() {
    document.getElementById("frame-counter").innerHTML = (frame_count % 40) + 1;
    frame_count++;
    Draw();
}

function consoleInput(str) {
    for (z = consoleLength; z > 0 ; z--) {
        consoleStrings[z] = consoleStrings[z - 1];
    }
    consoleStrings[0] = str;
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

    //draw research panel

    if ((fireFlag) && (!researchFlags[0])) {
        document.getElementById("research0Button").style.display = 'initial';
        document.getElementById("research0Button").innerHTML = researchNames[0];
    } else {
        document.getElementById("research0Button").style.display = 'none';
    }

    //draw variableStack
    document.getElementById("variableStack").innerHTML = "Rock Count = " + rock_count + "</br>" + "Innovation = " + innovation + "</br>";

    //draw the console
    drawConsole();
}

function drawConsole() {
    var outputString = "";
    for (z = consoleLength-1; z >= 0; z--) {
        outputString += consoleStrings[z];
        outputString += "</br>"
    }
    document.getElementById("console").innerHTML = outputString;
}

function lookAround() {
    var rando = Math.random()
    if (rando < .75) {
        consoleInput("You look around for a while, but find nothing interesting.");
    } else {
        consoleInput("You look around for a while, and find another rock.");
        rock_count++;
    }
}

function bangRocks() {
    var rando = Math.random()
    if (rando < .25) {
        consoleInput("You bang two rocks together, hit your thumb, it hurt.");
        innovation++;
    } else if ((rando >= .25) && (rando < .5)) {
        consoleInput("You bang two rocks together, it makes a lound clack.");
        innovation = innovation + 2;
    } else if ((rando >= .5) && (rando < .9)) {
        consoleInput("You bang two rocks together, fail miserably, and drop your rocks.");
        innovation--;
    } else {
        consoleInput("You bang two rocks together, a spark is created, it is wonderous.");
        innovation = innovation + 5;
        if (!fireFlag) {
            fireFlag = true;
        }
    }
}

function buyResearch(x){
    if (innovation >= researchCost[x]) {
        innovation = innovation - researchCost[x];
        researchFlags[x] = true;
        consoleInput(researchConsoleBlurb[x])
    } else {
        consoleInput("You lack the necessary understanding.");
    }
}

setInterval(gameLoop, timeInterval);