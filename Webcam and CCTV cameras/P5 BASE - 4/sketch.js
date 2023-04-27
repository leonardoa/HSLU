/*
Mouse click and mousemove
*/

let click = false;
let isRightSide = false;

function setup() {
  createCanvas(400, 400);
  background(200, 200, 200);
}

function draw() {
  
  /*
  If you are in the right position of the screen 
  we can change the color of the background.
  */
  
  if (isRightSide == false) {
    background(0, 255, 255);
  } else {
    background(255, 255, 0);
  }

  if (click == false) {
    fill(255, 0, 0);
    noStroke();
    ellipseMode(CENTER);
    ellipse(width / 2, height / 2, 100, 100);
  } else {
    fill(0, 0, 255);
    noStroke();
    rectMode(CENTER);
    rect(width / 2, height / 2, 100, 100);
  }
}

function mouseClicked() {
  click = !click;
}

/*
This is a function that understands when a user move the mouse arounf the canvas. 
When the user moves, we can tell which co-ordinate she/he is in.
*/

function mouseMoved() {
  if (mouseX > width / 2) {
    isRightSide = true;
  } else {
    isRightSide = false;
  }
}
