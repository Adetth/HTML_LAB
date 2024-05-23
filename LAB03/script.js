function clearScreen(){
	document.getElementById("result").value = null;
}

function display(value){
	document.getElementById("result").value += value;
}

function calculate(){
	var p = document.getElementById("result");
	var q = eval(p.value);
	console.log(q);
	document.getElementById("result").value = q;
}