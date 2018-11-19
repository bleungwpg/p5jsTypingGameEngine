var maxTime;
var resetTime;
var lastRecordedTime;


function setupTimer()
{
	frameRate(30);

	// modify this for when you want to countdown from.
	maxTime = 5;
	resetTime = false;

}

function manageTime(x,y)
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

			// uses function from health.js
			deductHealth(50);

			canvasID++;
			typingBox.value("");
		}
	}
	showTimeBar(50,500);

}

function showTimeBar(x,y)
{
	fill(255,255,255);
	rect(x,y,(lastRecordedTime - frameCount)*4,50);

	textSize(18);
	fill(0,0,0);
	var s = int((lastRecordedTime - frameCount) / 30 + 1);
	text("Time Remaining: "+s,x+30,y+30);
	textSize(12);
}