img="";
status="";
function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector('cococssd',modelLoaded);
document.getElementById("status").innerHTML="status:object detecting";
}
function preload(){
img=loadImage('dog_cat.jpg');
}
function draw(){
    image(img,0,0,640,420);
    fill("#f542ef");
    text("Dog",45,75);
    noFill();
    stroke("#f542ef");
    rect(30,60,450,350);

    
    fill("#f542ef");
    text("Cat",320,120);
    noFill();
    stroke("#f542ef");
    rect(300,90,270,320);
}
function modelLoaded(){
    console.log("modelLoaded");
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
if(error){
    console.log(error);
    
}
console.log(results);
}