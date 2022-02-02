function preload() {

}

function setup() {

canvas = createCanvas(800, 600);
canvas.position(110,250);
video = createCapture(VIDEO);
video.hide();
canvas.elt.style.border="2px solid";
}

function draw() {
image(video,150,150,500,350)

fill(255,0,0);
ellipse(50,50,60,60);

fill(0,255,0);
rect(80,40,650,20);

fill(255,0,0);
ellipse(760,54,60,60);

fill(0,255,0);
rect(40,80,20,440);

fill(255,0,0);
ellipse(50,550,60,60);

fill(0,255,0);
rect(40,80,20,440);

fill(0,255,0);
rect(80,540,650,20);

fill(255,0,0);
ellipse(750,550,60,60);

fill(0,255,0);
rect(745,80,20,440);
}
