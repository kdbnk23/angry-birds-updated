class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
    this.boxScore=0;
  }

  fade(){
    if (this.boxScore==1){
      boxScore=boxScore+25
    }
  }
display(){
  if (this.body.speed<4.5){
    super.display();
  }else{
    Matter.remove(world, this.body)
    this.boxScore=this.boxScore+1
    
  }
  
}
};
