class Paper{
    constructor(){
        var options={
            isStatic=false,
            restitution:0.3,
            friction:0,
            density:1.2

        }
        this.image = loadImage("paper.png");
        
    }
   

    }
    function keyPressed(){
     if(keyCode === UP_ARROW){
         matter.body.applyForce(paperObject.body,paperObject.body.posisition,{x:130,y:-145  });
     }
    }
