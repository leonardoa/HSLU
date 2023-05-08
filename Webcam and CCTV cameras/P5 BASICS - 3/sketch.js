/*
Simple click function.
Circle and rect
*/

let click = false;

function setup() {
  createCanvas(400, 400);
  background(200, 200, 200);
}

function draw() {
  background(200, 200, 200);
  
  /*
  The if-else construct is a conditional instruction, i.e. it allows instructions or code
  blocks to be executed depending on the occurrence of a condition.
  */
  
  if (click == false) {
    fill(255, 0, 0);
    noStroke();
    ellipseMode(CENTER);
    ellipse(width / 2, height / 2, 100, 100);
  } else {
    fill(255, 0, 255);
    noStroke();    
    rectMode(CENTER);
    rect(width / 2, height / 2, 100, 100);
  }
}

/*
This is a function that understands when a user clicks on the canvas. And the user clicks, something can be done.
*/
function mouseClicked() {
  click = !click;
}
