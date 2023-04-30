/*
CCTV + YOLO (You Only Look Once )
*/

let video;
let yolo;
let status;
let objects = [];
let person = false;

function setup() {
  createCanvas(160, 120);
  video = createCapture(VIDEO);
  video.size(320, 240);

  // Create a YOLO method
  yolo = ml5.YOLO(video, startDetecting);

  // Hide the original video
  video.hide();
  status = select("#status");
}

function draw() {
  person = false;
  image(video, 0, 0, width, height);
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].className == "person") {
      person = true;
    }
    noStroke();
    fill(0, 255, 0);
    text(objects[i].className, objects[i].x * width, objects[i].y * height - 5);
    //noFill();
    fill(0, 255, 0, 90);
    strokeWeight(4);
    stroke(0, 255, 0);
    rect(
      objects[i].x * width,
      objects[i].y * height,
      objects[i].w * width,
      objects[i].h * height
    );
  }

  let a = select("#camera");
  if (person == true) {
    a.hide();
  } else {
    a.show();
  }
}

function startDetecting() {
  //status.html("Model loaded!");
  detect();
}

function detect() {
  yolo.detect(function (err, results) {
    objects = results;
    detect();
  });
}
