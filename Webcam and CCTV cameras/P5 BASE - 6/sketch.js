/*
In this I want to show you how an element can move according to the frame rate. 
then by itself.
In relation to the keypress function we can change the direction.
*/

let direction = false;
let speed = 5;
let dimension = 40;
let currentPositionX = 0;
let currentPositionY = 0;
//let str = "";

function setup() {
  createCanvas(400, 400);
  background(200, 200, 200);
  currentPositionY = height / 2 - dimension / 2;
}

function draw() {
  background(200, 200, 200);

  /*
  If the direction is false, we move our rectangle horizontally.
  */
  if (direction == false) {
    fill(255, 0, 0);
    noStroke();

    /*
    The draw function is an infinite loop.
    So we can increment each variable.
    */
    currentPositionX = currentPositionX + speed;
    rect(currentPositionX, currentPositionY, dimension, dimension);

    /*
    We change the direction of the rectangle 
    if we have reached the end or are at the beginning.
    if current position is grather than width it come back
    */

    if (currentPositionX > width - dimension || currentPositionX < 0) {
      speed = speed * -1;
    }
  } else {
    fill(0, 255, 0);
    noStroke();
    currentPositionY = currentPositionY + speed;
    rect(currentPositionX, currentPositionY, dimension, dimension);
    if (currentPositionY > height - dimension || currentPositionY < 0) {
      speed = speed * -1;
    }
  }
}

/*
With this function we understand which letter was clicked on the keyboard. 
Depending on what we click on, we can change the value of a variable.
*/
function keyTyped() {
  str = key;
  if (key === "a") {
    direction = false;
  } else {
    direction = true;
  }
}
