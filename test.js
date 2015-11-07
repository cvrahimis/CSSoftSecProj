var generateNaN = function(){
	var num = randNum(0, 10);
	num = num + "Costas";
	num = num / 2;
};

function randNum(min,max)
{
    var num = min+Math.floor((Math.random()*(max-min+1)));
    return num;
}

generateNaN();