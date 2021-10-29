noseX = 0;
noseY = 0;
function preload() {
    clown_mustache = loadImage('mustache.png');
    clown_lips = loadImage('lips.png');
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide()
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);    
}

function draw() {
image(video,0,0,300,300);
image(clown_mustache,noseX +15,noseY,50,20);
image(clown_lips,noseX +15,noseY +30,50,20)
}

function filter1() {
    save("filter.png");

}
function modelLoaded(){
    console.log("model Loaded");
}
function gotPoses(results){
    if ( results.length >0){
        console.log(results);
        noseX = results[0].pose.nose.x-40;
        noseY = results[0].pose.nose.y;
    }
}