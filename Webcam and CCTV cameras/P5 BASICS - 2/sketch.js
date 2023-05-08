/*
Variables must be initialised at the beginning of the code.
A variable, in computer science, is a data container located in a portion of memory intended to contain values, which can be changed during the execution of a programme.
*/

let variable_name = false;

/*
Within the setup function we will put all the information concerning the settings. 
For example the size of the canvas or the background colour.

Functions in computer science are software modules with a unique name that perform specific tasks. They are characterised by input values, output values and/or side effects.
*/

function setup() {
  /* Dimension of canvas */
  createCanvas(200, 200);
  
  /* Background of canvas */
  background(200,200)
  
}

/*
Called directly after setup(), the draw() function continuously executes the lines of code contained inside its block until the program is stopped or noLoop() is called. 
*/

function draw() {
  /*
  ellipse(x, y, w, h)
  */
  //rectMode(CENTER);
  rect(10, height/2, 20, 20)
}

