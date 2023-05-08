/*
Drawing a simple circle in the middle.
Here we will use stroke and fill background
*/

/*
In this example, you no longer see some comments. In fact, the comments only serve as a reminder of why we write certain portions of code. 
Comments are always placed within the slash and asterisk. 
*/

let variable_name = false;

function setup() {
  createCanvas(400, 400);
  background(200,200,200)
}

function draw() {
  
  //colors and stroke of shape
  fill(255,0,0);
  stroke(0,0,255);
  strokeWeight(2);
  
  /* Remove stroke */
  //noStroke();
  
  /* Remove fill */  
  //noFill()
  
  //ellipseMode(LEFT);
  ellipse(width/2, height/2, 50, 50)
}

