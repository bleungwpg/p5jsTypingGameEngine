var canvasID;

function preload()
{

}

function setup()
{
	createCanvas(800,600);

	setupHealth();
	setupTimer();
	setupTyping();

	canvasID = 100;

}

function draw()
{
	background(125,125,125);


	if (canvasID == -1)
	{
		gameOver();
	}
	else if (canvasID == 100)
	{
		showQuestion(words1[0],101);
	}
	else if (canvasID == 101)
	{
		showQuestion(words1[1],102);
	}
	else if (canvasID == 102)
	{
		showQuestion(words1[2],103);
	}
	else if (canvasID == 103)
	{
		endOfSection1();
	}


}

function endOfSection1()
{
	typingBox.hide();
	textSize(32);
	fill(255,255,255);
	text("Section 1 complete!",50,50);
	textSize(12);


}

// handles all game over code
function gameOver()
{
	textSize(32);
	fill(255,255,255);
	text("GAME OVER!",50,50);
	textSize(12);
}
