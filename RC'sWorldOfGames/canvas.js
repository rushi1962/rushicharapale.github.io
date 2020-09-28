var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c=canvas.getContext('2d');

function Circle(x,y,dx,dy)
{
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.draw=function()
    {
        c.beginPath();
    
        c.arc(this.x,this.y,30,0,Math.PI*2,false);
        c.strokeStyle='rgba(142,222,253,1)';
       
        c.stroke();
        //c.fill();
    }
    this.update=function()
    {
       
        if(this.x+30>=innerWidth||this.x-30<=0)
        {
            this.dx=-this.dx;
        }
        if(this.y+30>=innerHeight||this.y-30<=0)
        {
            this.dy=-this.dy;
        }
        
        this.x=this.x+this.dx;
        this.y+=this.dy;
        this.draw();
    }
}
var circleArray=[];
for(var i=0;i<70;i++)
{
    var x=(Math.random()*(innerWidth-60))+30;
    var y=(Math.random()*(innerHeight-60))+30; 

    var dx=(Math.random()-0.5)*8;
    var dy=(Math.random()-0.5)*8;
    
    circleArray.push(new Circle(x,y,dx,dy));
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for(var i=0;i<70;i++)
    {
        circleArray[i].update();
    }
   
}

animate();