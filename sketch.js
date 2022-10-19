function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw(){
    background("#545e56"); //背景顏色
    noFill() //不要充滿顏色
    // stroke(255) //框線顏色(255為白色)
    noFill() //不要充滿顏色
    strokeWeight(3)
    rectMode(CENTER) //以方框中心點為坐標點


    for(var j=0;j<(height/50);j++) {
      for(var i=0;i<(width/50);i=i+1) //i++ ==>i=i+1
    {
      ellipse(25+(i*50),25+(j*50),10+mouseY/25) //在座標(25.25)畫一個直徑10圓
      stroke("#f0efeb")
      ellipse(50+(i*50),50+(j*50),20+mouseX/25) //在座標(25.25)畫一個直徑10圓
      stroke("#ece2d0")
    }

  }
}