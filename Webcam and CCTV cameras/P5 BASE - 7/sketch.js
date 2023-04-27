/*
https://emojipedia.org/apple/
*/

let img;
let img2;

let scale = 0.6;
let mX = 0;

/*
The preload function is used to upload external content (images, videos, sounds...)
Please remember to upload image.
*/
function preload() {
  img = loadImage("cat.jpeg");
  img2 = loadImage("ghost_1f47b.png");
}

function setup() {
  createCanvas(400, 400);
  background(200, 200, 200);
}

function draw() {
  background(200, 200, 200);

  /*
  We place the image in the centre.
  */
  if (mX < width / 2) {
    imageMode(CENTER);
    image(img, width / 2, height / 2, img.width * scale, img.height * scale);
  } else {
    imageMode(CENTER);
    image(img2, width / 2, height / 2, img.width * scale, img.height * scale);
  }
}

function mouseMoved() {
  mX = mouseX;
}
