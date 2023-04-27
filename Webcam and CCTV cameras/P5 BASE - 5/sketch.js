/*
Mousemove and mouse click
In this case, the shape follows the movement of the mouse.
*/

let click = false;
let mX = -100;
let mY = -100;

function setup() {
  createCanvas(400, 400);
  background(200, 200, 200);
}

function draw() {
  background(200, 200, 200);
  if (click == false) {
    fill(255, 0, 0);
    noStroke();
    ellipseMode(CENTER);
    /*
    Instead of having precise location information. 
    This shape will move in space depending on the size of the mouse.
    */
    ellipse(mX, mY, 100, 100);
  } else {
    fill(0, 0, 255);
    noStroke();
    rectMode(CENTER);
    /*
    Instead of having precise location information. 
    This shape will move in space depending on the size of the mouse.
    */    
    rect(mX, mY, 100, 100);
  }
}

function mouseClicked() {
  click = !click;
}

/*
During the mouse move, we assign the current mouse position to the variables.
*/
function mouseMoved() {
  mX = mouseX;
  mY = mouseY;
}
