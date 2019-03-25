let stepX1 = 70
let stepY1 = 250

let stepX2 = 1150
let stepY2 = 250

let moveX1 = 170
let moveX2 = 1150


function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background('white')
	if(key == 'w')
		stepY1-=10
	if(key == 's')
		stepY1+=10
	fill('white')
	rect(stepX1,stepY1,100,100)
	if(key == ' '){
		fill('black')
		ellipse(moveX1,stepY1+50,25,25)
		moveX1+=10
	}


	if(keyIsDown(UP_ARROW))
		stepY2-=10
	if(keyIsDown(DOWN_ARROW))
		stepY2+=10
	fill('black')
	rect(stepX2,stepY2,100,100)
	if(key == ' '){
		fill('white')
		ellipse(moveX2,stepY2+50,25,25)
		moveX2-=10
	}
}

function keyPressed(){
	
}