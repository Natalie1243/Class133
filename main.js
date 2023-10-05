img  = "";
status_model = "";
objects ="";

function setup() {
    canvas = createCanvas(600, 450);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecing objects";
}

function preload() {
    img = loadImage('dog_cat.jpg');
}

function draw() {
    image(img, 0, 0, 600, 450);
    if (status_model == 1) {
        for(i=0; i < objects.length; i++) {

            fill('red');
            text(objects[i].label , objects[i].x, objects[i].y);
            stroke('red');
            noFill();
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            textSize(20);
        }
   
    }

    
    
}

function modelLoaded() {
    console.log("Model Loaded")
    objectDetector.detect(img, gotResult);

}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        status_model = 1;
        objects = results;
    }
}