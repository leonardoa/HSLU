/*
Here we load song and image.

https://pixabay.com/sound-effects
https://emojipedia.org/apple/
*/

let img, img2;
let scale = 0.6;
let mX = 0;
let sound, sound2;

/*
The preload function is used to upload external content (images, videos, sounds...)
Please remember to upload image.
*/

function preload() {
  sound = loadSound(
    "coconut-grove-bongo-drum-kit-solo-by-prettysleepy-art-13825.mp3"
  );
  sound2 = loadSound("girl_scream-6465.mp3");
  img = loadImage("desert-island_1f3dd-fe0f.png");
  img2 = loadImage("ghost_1f47b.png");
}

function setup() {
  createCanvas(400, 400);
  background(200, 200, 200);
}

function draw() {
  background(200, 200, 200);
  fill(210, 210, 210);
  noStroke();
  rect(width / 2, 0, width / 2, height);
  /*
  We place the image in the centre.
  */
  if (mX < width / 2) {
    imageMode(CENTER);
    image(img, width / 2, height / 2, img.width * scale, img.height * scale);
    if (sound.isPlaying() == false) {
      sound.play();
      sound2.stop();
    }
  } else {
    imageMode(CENTER);
    image(img2, width / 2, height / 2, img.width * scale, img.height * scale);
    if (!sound2.isPlaying()) {
      sound2.play();
      sound.stop();
    }
  }
}

function mouseMoved() {
  mX = mouseX;
}
