let vehicles = [];
function preload(){
    font = loadFont('AvenirNextLTPro-Demi.otf');
}
function setup(){
    createCanvas(windowWidth,windowHeight);
    
    textFont(font);
    stroke(255);
    fill(255);
    //text("coding",width/2-200,height/2)
    let points = font.textToPoints("coding",width/2-200,height/2,128);
    points.forEach((p)=>{
        vehicles.push(new Vehicle(p));
    });
}
function draw(){
    background(0);
    vehicles.forEach(vehicle=>{
        vehicle.render();
        vehicle.update();
        vehicle.behaviours();
    });
}