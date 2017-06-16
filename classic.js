var score = 0;
var timer = 0;
var x = 0;
var y = 0;
var block = new Array();

$(document).ready(function(){
	prepareForMobile();
	newGame();
});

function prepareForMobile(){

}

function newGame(){
	init();
	startGame();
}

function init(){
	for (var i = 0; i < 4; i ++) {
		creatRow();
	}
}

function creatRow{
	for(var i = 0; i < 4; i++){

	}
}

function deleteRow(){
	
}

function startGame(){
	$('start').onclick = function(e){
		moveDown();
	}
}

function updateScore(){
	$('#timer').innerHTML = timer;
}

function moveDown(){

}

function pauseGame(){

}

function resumeGame(){

}

function gameOver(){

}