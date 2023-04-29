/*
Im a clown!
*/

let video;
let poseNet;
let poses = [];
let bg = "rgb(220,220,220)";
let distance = 0;
let mX = 0;
let mY = 0;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  background(bg);
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on("pose", function (results) {
    poses = results;
  });
}

function modelReady() {
  console.log("Model Loaded");
}

function draw() {
  background(bg)
  push();
  stroke(150);
  noFill();
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
  pop();

  
    /*
  Place the video in the top left-hand corner. 
  This can be used to understand in real time what is happening.
  */
  if (video) {
    image(video, 0, 0);
  }

  
  drawKeypoints();
}

function drawKeypoints() {
  let i = 0;
  if (poses[0]) {
    let pose = poses[i].pose;
    let LeftEye = pose.leftEye;
    let nose = pose.nose;
    mX = nose.x;
    mY = nose.y;
    distance = dist(LeftEye.x, LeftEye.y, nose.x, nose.y);
    console.log(distance);
    fill(244, 0, 0);
    ellipse(mX, mY, distance, distance);
  }
}
