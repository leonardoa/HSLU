/*
Here we check whether the face is to the right or left of the screen. 
If it is on the right play otherwise pause.
Right arm up we increase the volume.

This sketch contains the use of ML5.
ML5 must be inserted and integrated into the html file.
In this sketch, ML5 will recognise our body and the various joints.
*/

let video;
let poseNet;
let poses = [];
let bg = "rgb(220,220,220)";
let sound;
let control = 1;

function preload() {
  sound = loadSound("Gizmo.mp3");
}

function setup() {
  createCanvas(400, 400);
  video = createCapture(VIDEO);
  video.size(width, height);

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
  Here we can control the sound
  */
  /*
  If we are on left side
  */
  if (control == 1) {
    if (!sound.isPlaying()) {
      sound.play();
    }
  } 
  /*
  If we are on right side
  */
  else if (control == 2) {
    if (sound.isPlaying()) {
      sound.pause();
    }
  } 
  /*
  If we raise our left arm
  */
  else if (control == 3) {
    if (!sound.isPlaying()) {
      sound.play();
    }
    sound.setVolume(1);
  } 
  /*
  If we raise our right arm
  */
  else {
    if (!sound.isPlaying()) {
      sound.play();
    }
    sound.setVolume(0.2);
  }

  push();
  stroke(150);
  noFill();
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
  pop();

  drawKeypoints();
  drawSkeleton();
}

function drawKeypoints() {
  let i = 0;
  /*
  If pose net recognises a person.
  */
  if (poses[0]) {
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

    /*
    If our nose is on the right of the screen we can do something.
    If the left arm is up, we can do something else.
    */
    if (leftWrist.y < height / 2) {
      bg = "rgba(0,255,0,1)";
      control = 3;
    } else if (rightWrist.y < height / 2) {
      bg = "rgba(255,255,0,1)";
      control = 4;
    } else if (nose.x > width / 2) {
      bg = "rgba(220,220,220,1)";
      control = 1;
    } else {
      bg = "rgba(255,0,0,1)";
      control = 2;
    }

    /*
    Here we draw the nose/face and the rest of joint
    The for is a loop. 
    In this case the for loops all the body positions that pose net returns.
    */

    for (let j = 0; j < pose.keypoints.length; j++) {
      let keypoint = pose.keypoints[j];
      if (keypoint.score > 0.2) {
        if (keypoint.part == "nose") {
          fill(0, 0, 255);
          ellipse(keypoint.position.x, keypoint.position.y, distance, distance);
        } else {
          fill(0, 0, 255);
          ellipse(keypoint.position.x, keypoint.position.y, 5, 5);
          textSize(8);
          text(keypoint.part, keypoint.position.x + 5, keypoint.position.y + 5);
        }
        noStroke();
      }
    }
  }
}

/*
In this case, however, we are going to draw the skeleton.
That is, all the lines that connect the joints of the body.
*/
function drawSkeleton() {
  let i = 0;
  if (poses[0]) {
    let skeleton = poses[i].skeleton;
    for (let j = 0; j < skeleton.length; j++) {
      let partA = skeleton[j][0];
      let partB = skeleton[j][1];
      noFill();
      stroke(0, 0, 255);
      line(
        partA.position.x,
        partA.position.y,
        partB.position.x,
        partB.position.y
      );
    }
  }
}
