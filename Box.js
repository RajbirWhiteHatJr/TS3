// class Box{

//     constructor(x, y, width, height){
       
//         var options = {
//             'restitution':0.8,
//             'friction':1.0,
//             'density':1.0
//         }

//         this.body = Bodies.rectangle(x, y, width, height, options);
//         this.width = width;
//         this.height = height;
//         World.add(world, this.body);
//     }

// display(){

//     push();
//     translate(this.body.position.x, this.body.position.y);
//     imageMode(CENTER);
//     image(this.image, 0, 0, this.width, this.height);
//     pop();
    


// }


// }



class Box {
    constructor(x, y, width, height) {
      var options = {
          //isStatic:true
          'restitution':0.8,
         'friction':1.0,
          'density':1.0
     }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
     
      World.add(world, this.body);
      this.visibility = 255;
    }
    display(){
      
      
      if(this.body.speed<3){
        var pos =this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        fill("blue")
      }
      else{
        World.remove(world,this.body);
        push();
        this.visibilty = this.visibility-5
        tint(255,this.visibility)
        rect(this.image,this.body.position.x,this.body.position.y,50,50);
        pop();
      }
     
    }
      score(){
        if(this.visibility<0 && this.visibility>-105){
          Score = Score+1;
        }
        
        }

  };
  

  
