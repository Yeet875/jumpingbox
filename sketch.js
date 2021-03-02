var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    //create 4 different surfaces
surface1 =CreateSprite(100,400,25,5);
Surface2 =CreateSprite(100,400,25,5);
Surface3= CreateSprite(100,400,35,5);
Surface4 =CreateSprite(100,400,35,5);
    //create box sprite and give velocity
Box =CreateSprite(200,200,20,5)
Box.VelocityY =3;
}

function draw() {
    background(rgb(255,255,255));
    //create edgeSprite
CreateEdgeSprite();
Box.BounceOff(EdgeSprites);

    if(Surface1.isTouching(Box) &&Box.BounceOff(Surface1)){
    Box.ShapeColor ="Red"
    }
    
    if(Surface2.isTouching(Box) && Box.BounceOff(Surface2) ){
    Box.ShapeColor ="Blue"
    }

    if(Surface3.isTouching && Box.BounceOff(Surface3)){
    Box.ShapeColor = "Green"
    }
    if(Surface4.isTouching && Box.BounceOff(Surface4)){
    Box.ShapeColor ="Yellow" 
    }
}
drawSprites();