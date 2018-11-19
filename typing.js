var typingBox;
var words1;

function setupTyping()
{
	// question bank number 1
	wordsMax1 = 9;
	words1 = new Array(wordsMax1);

	words1[0] = "car";
	words1[1] = "red";
	words1[2] = "victoria";
	// question bank number 1


	// setup textbox
	typingBox = createInput('');
	typingBox.position(110,210);
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

	// calls function in timer.js
	manageTime(50,500);
	drawHealth(-1);

}
