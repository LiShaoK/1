function gotoScene1() {
	var scene1 = document.getElementById("scene1");
	var scene2 = document.getElementById("scene2");
	scene1.style.display = "block";
	scene2.style.display = "none";
}

function gotoScene2() {
	var scene1 = document.getElementById("scene1");
	var scene2 = document.getElementById("scene2");
	scene1.style.display = "none";
	scene2.style.display = "block";
}

var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
text1.innerHTML = "我的天";
text2.innerHTML = "厉害";
