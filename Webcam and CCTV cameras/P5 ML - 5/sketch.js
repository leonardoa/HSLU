/*
Images that follow the face. Click to change image.
https://emojiisland.com/
*/

let video;
let poseNet;
let poses = [];
let bg = "rgb(220,220,220)";
let distance = 0;
let mX = -250;
let mY = -250;
let img, img2;
let click = false;

function preload() {
  img = loadImage("clown.png");
  img2 = loadImage("sunglasses.png");
}

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
  background(bg);

  /*
  Place the video in the top left-hand corner. 
  This can be used to understand in real time what is happening.
  */
  if (video) {
    imageMode(CORNER);
    image(video, 0, 0);
  }

  drawKeypoints();
}

function drawKeypoints() {
  for (let i = 0; i < poses.length; i++) {
    /*
    We can get the position of the body
    */
    let pose = poses[i].pose;

    let nose = pose.nose;
    let LeftEye = pose.leftEye;
    let rightEye = pose.righttEye;
    let leftWrist = pose.leftWrist;
    let rightWrist = pose.rightWrist;

    /*
    We can calculate the distance.
    We can calculate the distance of the human from the computer 
    by making a calculation that understands the space       
    between the nose and the eye.
    */
    let distance = dist(LeftEye.x, LeftEye.y, nose.x, nose.y);
    for (let j = 0; j < pose.keypoints.length; j++) {
      let keypoint = pose.keypoints[j];
      if (keypoint.score > 0.5) {
        if (keypoint.part == "nose") {
          /*
          Place the image in the nose coordinates
          */
          imageMode(CENTER);
          if (click == false) {
            image(
              img,
              keypoint.position.x,
              keypoint.position.y,
              distance * 5,
              distance * 5
            );
          } else {
            image(
              img2,
              keypoint.position.x,
              keypoint.position.y,
              distance * 5,
              distance * 5
            );
          }
        }
      }
    }
  }
}

function mouseClicked() {
  click = !click;
}
