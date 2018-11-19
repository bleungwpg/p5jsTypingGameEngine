var health;


function preloadHealth()
{


}

function setupHealth()
{
	health = 300;
}

function drawHealth(setGameOverCanvasID)
{
	fill(0,255,0);
	rect(300,30,health,25);
	fill(0,0,0);
	text(health,300+10,30+20)
	if (health <= 0)
	{
		canvasID = setGameOverCanvasID;
	}
}

function deductHealth(amount)
{
	health = health - 50;
}

