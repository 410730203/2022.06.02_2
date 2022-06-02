function setup() {
	createCanvas(windowWidth, windowHeight);
	background('#F2E9E4');
}

function drawFlower(clr1,clr2,size=1){
	push()
	fill(clr1)
		ellipse(0, 0, 50);		//目前此圓，仍以圓心為座標點
		ellipseMode(CORNER)   // 設定以左上角為座標點上的座標
		//fill('#A76571')
	fill(clr2)
	for(var i=0;i<16;i=i+1){//同樣的動作重複16次
		ellipse(30, -20, 100*size, 30);  // 設定以左上角為座標點，做一個花瓣
		line(30,-5,120*size,-5)
		rotate(PI/8) //180度產生八片，360度產生16片
	}

	pop()
    
}
var colors1 =["#ccd5ae","#e9edc9","#fefae0","#faedcd","#d4a373"] //花心顏色
var colors2 =["#E63946","#F1FAEE","#A8DADC","#457B9D","#1D3557"] //花瓣顏色

function draw() {
	background('#F2E9E4')
	var count=0
	for(var x=0;x<width;x=x+150)
	{
		for(var y=0;y<height;y=y+150)
		{
			push()
				count=count+1
				translate(x,y); //讓圓心在視窗的中心點
				scale(0.8)//整朵縮小
				rotate(frameCount/50)
				drawFlower(colors1[count%colors1.length],colors2[count%colors2.length],map(mouseX,0,width,0,1)) //length判斷前面(colors1)的長度
			pop()
		}
	}
	
}
		