var p, c,tb,pg,bi,ic,ii,cp,c1=0,cc=1;
var sb,sd,s=10,z=0

function preload(){
bi=loadImage('bin.png')
ii=loadImage('i.png')
}

function setup() {
  createCanvas(1250,555)
  p=createSprite(50,250,100,500)
  c=createSprite(675,280,1000,475)
  e=createSprite(mouseX,mouseY,40,40)
  pg=createGroup()
  tb=createSprite(50,50,50,50)
  tb.addImage(bi)
  ic=createSprite(50,450,75,75)
  ic.addImage(ii)
  cp=createSprite(50,125,50,50)
  sb=createSprite(50,200,50,50)
  sd=createSprite(50,200,s,s)
}

function draw() {
  background(220)
  
  z=z-1
  c1=c1-1
  sd.width=s
  sd.height=s
  e.visible=false
  cp.shapeColor='black'
  sb.shapeColor='white'
  tb.shapeColor='black'
  sd.shapeColor='black'
  e.shapeColor='pink'
  e.x=mouseX
  e.y=mouseY
  fill('grey')
  textSize(30)
  text('CANVAS V.1.00.0',350,35)
  c.shapeColor='white'
  if(c1<0&&mousePressedOver(cp)){
    cc=cc+1
    c1=10
  }
  if(cc>5){
    cc=1
  }
  if(z<0&&(mousePressedOver(sb)||mousePressedOver(sd))){
    s=s+2
    z=10
  }
  if(s>40){
    s=10
  }
  switch(cc){
    case 1:cp.shapeColor='black'
    break
    case 2:cp.shapeColor='red'
    break
    case 3:cp.shapeColor='blue'
    break
    case 4:cp.shapeColor='green'
    break
    case 5:cp.shapeColor='yellow'
    break
    default:break
  }
  if(mousePressedOver(c)){
    var pxl=createSprite(mouseX,mouseY,s,s)
    pxl.shapeColor='black'
    pg.add(pxl)
    switch(cc){
    case 1:pxl.shapeColor='black'
    break
    case 2:pxl.shapeColor='red'
    break
    case 3:pxl.shapeColor='blue'
    break
    case 4:pxl.shapeColor='green'
    break
    case 5:pxl.shapeColor='yellow'
    break
    default:break
    }
  }
    
  
  
  
  if(mousePressedOver(tb)){
    pg.destroyEach()
  }

  drawSprites();
}