var objects = [];
function setup()
{
createCanvas(windowWidth,windowHeight);
 for(var i = 0; i < objects.length; i++);
  objects[i] = new Obj(random(width),random(0,100));
}
function draw()
{
    background(255);
    for(var i = 0; i < objects.length; i++)
    {
    objects[i].move();
    objects[i].display();
    objects[i].bounceback();
    }
    
     if(mouseIsPressed)
        {
        objects.push(new Obj(mouseX,mouseY));
        }
    if(objects.length > 1000)
        {
            Obj.splice(0,1);
        }
    
}

function Obj(x,y)
{
    this.x = x;
    this.y = y;
    
    this.yspeed = 10;
    this.gravity = 1;
    
    this.move = function()
    {
       this.yspeed += this.gravity;
        this.y += this.yspeed; 
    }
    
    this.bounceback = function()
    {
        if(this.y > height-100)
            {
              //  print(this.y);
                this.yspeed = this.yspeed *-0.99;
            }
         if(this.y > height-90)
             this.y = height - 90;
             //this.yspeed = 0;
        
    }
    
    this.display = function()
    {
        fill(255,0,0,200);
        noStroke();
        ellipse(this.x,this.y,25,25);
    }

}
