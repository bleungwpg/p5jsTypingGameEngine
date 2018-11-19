var health;
var typingBox;
var canvasID;
var words1;
var maxTime;
var resetTime;
var lastRecordedTime;

function preload()
{


}

function setup()
{
	createCanvas(800,600);


	frameRate(30);

	maxTime = 5;
	resetTime = false;

	// question bank number 1
	wordsMax1 = 9;
	words1 = new Array(wordsMax1);

	words1[0] = "car";
	words1[1] = "red";
	words1[2] = "victoria";
	// question bank number 1



	health = 300;
	canvasID = 100;
	locked = false;

	typingBox = createInput('');
	typingBox.position(110,210);
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

	showHealth();

}

function showQuestion(wordToType,nextID)
{
	fill(0,0,0);
	text(wordToType,110,200);

	if (typingBox.value() == wordToType)
	{
		canvasID = nextID;
		typingBox.value("");
		resetTime = false;
	}

	manageTime();

}

function manageTime()
{
	if (resetTime == false)
	{
		resetTime = true;
		lastRecordedTime = frameCount + maxTime * 30;
	}
	else
	{
		if (frameCount >= lastRecordedTime)
		{
			resetTime = false;
			health = health - 50;
			canvasID++;
			typingBox.value("");
		}
	}

	fill(255,255,255);
	rect(50,500,(lastRecordedTime - frameCount)*4,50);

	fill(0,0,0);
	var s = int((lastRecordedTime - frameCount) / 30 + 1);
	text("Time Remaining: "+s,50,530);
}

// shows your health bar and check if you are dead or not
function showHealth()
{
	fill(0,255,0);
	rect(300,30,health,25);
	fill(0,0,0);
	text(health,300+10,30+20)
	if (health <= 0)
	{
		canvasID = -1;
	}
}

// checks what happens when you click on a button
function isButtonClicked(correct,nextID)
{
	var deductHealth = false;
	if (mouseIsPressed && !locked)
	{
		locked = true;
		for (var i = 0; i < numberOfAnswers; i++)
		{
			if (mouseX > questionX[i] && mouseX < questionX[i] + questionLength && mouseY > questionY[i] && mouseY < questionY[i] + questionHeight)
			{
				if (i == correct)
				{
					canvasID = nextID;
					return 0;
				}
				else
				{
					deductHealth = true;
				}
			}
		}
		if (deductHealth)
		{
			health = health - 50;
		}
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

// locked is to prevent HOLDING onto the button
function mouseReleased()
{
	locked = false;
}










