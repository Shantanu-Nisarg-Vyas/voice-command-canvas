function setup() {
    canvas = createCanvas(1200, 900);
}

x = 0;
y = 0;
circle1 = "";
square = "";
rectangle = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "System is listening, please speak.";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "Voice detected: " + content;
}

if (content == "circle") {
    x = math.floor(math.random * 1150);
    y = math.floor(math.random * 850);
    circle1 = "set"
    document.getElementById("status").innerHTML = "Started drawing circle.";
}
if (content == "square") {
    x = math.floor(math.random * 1150);
    y = math.floor(math.random * 850);
    square = "set"
    document.getElementById("status").innerHTML = "Started drawing square.";
}
if (content == "rectangle") {
    x = math.floor(math.random * 1100);
    y = math.floor(math.random * 850);
    rectangle = "set"
    document.getElementById("status").innerHTML = "Started drawing rectangle.";
}

function draw() {
    if (circle1 == "set") {
        circle (x, y, 25);
        document.getElementById("status").innerHTML = "Circle is drawn.";
        circle1 = "";
    }
    if (square == "set") {
        rect (x, y, 50, 50);
        document.getElementById("status").innerHTML = "Square is drawn.";
        square = "";
    }
    if (circle == "set") {
        rect (x, y, 100, 50);
        document.getElementById("status").innerHTML = "Rectangle is drawn.";
        rectangle = "";
    }
}