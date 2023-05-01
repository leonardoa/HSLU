/*
Mousemove and mouse click
In this case, the shape follows the movement of the mouse.
*/

let click = false;
let img1, img2;
let img_width = 100;

function preload() {
  img1 = loadImage("1.jpg");
  img2 = loadImage("2.jpg");
}

function setup() {
  createCanvas(400, 400);
  background(200, 200, 200);
}

function draw() {
  if (click == false) {
    background(200, 0, 200);
    imageMode(CENTER);
    image(
      img1,
      mouseX,
      mouseY,
      (img1.width / img1.height) * img_width,
      img_width
    );
  } else {
    background(0, 0, 255);
    imageMode(CENTER);
    image(
      img2,
      mouseX,
      mouseY,
      (img2.width / img2.height) * img_width,
      img_width
    );
  }
}

function mouseClicked() {
  if (click == false) {
    click = true;
  } else {
    click = false;
  }
}
