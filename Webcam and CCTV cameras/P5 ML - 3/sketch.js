/*
Simple drawing with the nose.
The closer we are to the screen, the more we change the colour.

*/

let video;
let poseNet;
let poses = [];
let bg = "rgb(220,220,220)";
let distance = 0;

function setup() {
  createCanvas(400, 400);
  video = createCapture(VIDEO);
  video.size(width, height);
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
  //background(bg);

  push();
  stroke(150);
  noFill();
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
  pop();

  drawKeypoints();
}

function drawKeypoints() {
  let i = 0;
  if (poses[0]) {
    let pose = poses[i].pose;

    let nose = pose.nose;
    let LeftEye = pose.leftEye;
    let rightEye = pose.righttEye;
    let leftWrist = pose.leftWrist;
    let rightWrist = pose.rightWrist;

    distance = dist(LeftEye.x, LeftEye.y, nose.x, nose.y);
    console.log(distance);
    for (let j = 0; j < pose.keypoints.length; j++) {
      let keypoint = pose.keypoints[j];
      if (keypoint.score > 0.2) {
        if (keypoint.part == "nose") {
          /*
          Let's check that the distance of my face 
          is greater than 0 and less than 50
          */
          if (distance > 0 && distance < 50) {
            fill(0, 0, 255);
          } else if (distance > 50 && distance < 100) {
          /*
          Let's check that the distance of my face 
          is greater than 50 and less than 100
          */
            fill(255, 0, 0);
          } else {
            fill(0, 255, 0);
          }
          ellipse(keypoint.position.x, keypoint.position.y, 5, 5);
        }
        noStroke();
      }
    }
  }
}
