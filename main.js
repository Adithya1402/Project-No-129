song1= "";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreLeftWrist = 0;
song_variable="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();
}
function preload()
{
    song1= loadSound("Song1Gravity.mp3");
    song2= loadSound("Song2Kesariya.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=captureVideo(VIDEO);
    video.hide();
    poseNet=ml5.posenet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function draw(){
    image(video,0,0,600,500);

    song_1.isPlaying();
    song_2.isPlaying();

    Fill("#FF0000");
    stroke("FF0000");

    song_variable = Gravity.isPlaying();
    console.log(song_variable);

    if(scoreLeftWrist > 0.2)
    circle(leftWristX,leftWristY,20);
    song_variable.stop()
    if(song_variable== false){
        song1.play();
    }
    else{
        console.log("Song Name : Gravity ");
        document.getElementById("song_id").innerHtml ="Song Name : Gravity"
    }

}


function gotPoses(results)
{
    if(results.length > 0);
{
    console.log(results);
    scoreLeftWrist = results[0].pose.keypoints[9].score;
    leftWristX=results[0].pose.leftfWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    console.log("leftWristX= " +leftWristX +"leftWristY = " + leftWristY);

    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    console.log("rightWristX= " +rightWristX +"rightWristY = "+ rightWristY);
}


}



