function preload(){
    font = loadFont('AvenirNextLTPro-Demi.otf');
}
function setup(){
    createCanvas(windowWidth,windowHeight);
    background(0);
    textFont(font);
    stroke(255);
    fill(255);
    //text("coding",width/2-200,height/2)
    let points = font.textToPoints("coding",width/2-200,height/2,128);
    points.forEach((p)=>{
        point(p.x,p.y)
    });
}
function draw(){
}