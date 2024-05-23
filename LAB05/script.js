var speed = 100;
var interval1 = setInterval(grow, speed);
var fontSize = 5;
var idName = document.getElementById("paragraph-element");
console.log(idName.innerHTML);

function grow(){
	idName.innerHTML = "Text Growing";
	console.log(idName.innerHTML);
	idName.setAttribute("style", "font-size : " + fontSize + "px; color : red;");
	fontSize += 5;

	if(fontSize >= 50){
		clearInterval(interval1);
		var interval2 = setInterval(shrink, speed);
	}
}

function shrink(){
	idName.innerHTML = "Text Shrinking";
	idName.setAttribute("style", "font-size : " + fontSize + "px; color : blue;");
	fontSize -= 5;

	if(fontSize <= 5){
		clearInterval(interval2);
		// interval1(grow, 1000);
	}
}
