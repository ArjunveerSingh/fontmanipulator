function setup(){
    video= createCapture(VIDEO);
    video.size(550,500);

    canvas= createCanvas(500,500);
    canvas.position(560,150);

    posenet=ml5.poseNet(video,ml);
    posenet.on('pose',gr);
}

function ml(){
    console.log("Model Loaded!!");
}

function gr(results){
if(results.length>0){
    console.log(results);
    lwx=results[0].pose.leftWrist.x;
    rwx=results[0].pose.rightWrist.x;
    d=floor(rwx-lwx);
}
}

function draw(){
    background('#6C91C2');
    textSize(d);
    fill('#FFE787');
    text('Arjun',50,400)
}