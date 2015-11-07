var showExamples = function(){
	
	//generate NaN
	var num = randNum(0, 10);
	num = num + "Costas";
	num = num / 2;
	
	//function call with more parameters
	var num2 = randNum(0, 10, 50);

	//concatenate undefined to string
	var costas = "Costas";
	var un = undefined;
	castas = costas + un;

	//compare functions with primitive
	var five = 5;
	if(five === randNum(0, 10))
		console.log("5 is equal to the random number");
	else
		console.log("5 is not equal to the random number");

	
};

function randNum(min,max)
{
    var num = min+Math.floor((Math.random()*(max-min+1)));
    return num;
}

showExamples();