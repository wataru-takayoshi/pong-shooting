
var context = document.getElementById('canvas').getContext('2d');
var Height = canvas.height;
var Width = canvas.width;

var view = 1;

var vyi = 1;
var enemyHP;
var enemyRHP;
var playerHP;
var playerRHP;
var blueRHP;
var blueHP;
var lop = 0;
var ora;
var ora2;
var playbomb;
var playbombR;
var chage = 0;
var chageR = 0;

var gleenR = 0;
var red = 0;
var blue = 0;

var gleen = 0;
var redR = 0;
var blueRR = 0;

var xi;
var yi;
var xi2;
var yi2;

var tera1 = false;
var tera2 = false;
var tera3 = false;
var tera4 = false;
var tera5 = false;
var tera6 = false;


var img = new Image();
img.src = "http://maku-cam2.jiu.ac.jp/~wataru/sozai/midori.png";

var teramoto2 =  new Image();
teramoto2.src = "http://maku-cam2.jiu.ac.jp/~wataru/sozai/teramotow2.jpg";


function gazo(x,h){
 context.drawImage(img,x,h);
 }

function select1(){
enemyHP = 20;
enemyRHP = 20;
playerHP = 20;
playerRHP =20;
blueRHP = 20;
blueHP = 20;
playbomb = 2;
playbombR = 2;

function ball(x,y,z){
	context.beginPath();
	context.arc(x,y,z,0,Math.PI*2,true);
	context.closePath();
	context.fill();
				
				}
	function str(x,y){
context.beginPath();
context.arc(x,y,z,0,Math.PI*2,true);
context.closePath();
	context.lineWidth = 5;
context.stroke();
					
	}

function gazou(){
		this.z = 47.5;
	context.fillStyle = "#00ff00";
		ball(130,100,50);
		ball(700,100,50);
	context.fillStyle = "#ff0000";
		ball(130,280,50);
		ball(700,280,50);
	context.fillStyle = "#0000ff";
		ball(130,460,50);
		ball(700,460,50);
	context.fillStyle = 'rgba(0,0,0,0)';
	context.strokeStyle = "#ffff00";
		str(this.x,this.y,this.z);
		str(this.xi,this.yi,this.z);
	if(tera1){
	this.x = 130;
	this.y = 100;	
	}
	if(tera2){
	this.x = 130;
	this.y = 280;
	}
	if(tera3){
	this.x = 130;
	this.y = 460;
	}
	if(tera4){
	this.xi = 700;
	this.yi = 100;
	}
	if(tera5){
	this.xi = 700;
	this.yi  =280;
	}
	if(tera6){
	this.xi = 700;
	this.yi = 460;
	}
	
if(mouseX > Width/2.5 && mouseX < Width/2.5 + 180 && mouseY > Height/1.2-5 && mouseY < Height/1.2 + 50){
	context.font = "60px Ariarl";
	context.fillStyle = "#00ffff";
	context.fillText("start",Width/2.5,Height/1.2);
}else{
	context.font = "60px Ariarl";
	context.fillStyle = "#99ff00";
	context.fillText("start",Width/2.5,Height/1.2);
 }
context.font ="30px MS Pゴシック"
context.fillStyle = "#bbFF99";
context.fillText("色を選択してstartボタンをオシテネ！",165,Height/4+40);
	
	}
document.onmousemove = function(e){
		mouseX = e.pageX;
		mouseY = e.pageY;
}



function onload(){
	canvas.addEventListener("click",sel,false);
}
function sel(e){
	var rect = e.target.getBoundingClientRect();
		mouseX = Math.floor(e.clientX - rect.left);
		mouseY = Math.floor(e.clientY - rect.top);
	if(mouseX > 80 && mouseX < 180)
	if(mouseY > 50 && mouseY < 150){
		gleenR = 1;
		red = 0;
		blue = 0;
		tera1 = true;
		tera2 = false;
		tera3 = false;
	}
	if(mouseX > 80 && mouseX < 180)
	if(mouseY > 230 && mouseY < 330){
		gleenR = 0;
		red = 1;
		blue = 0;
		tera1 = false;
		tera2 = true;
		tera3 = false;
	}
	
	if(mouseX > 80 && mouseX < 180)
	if(mouseY > 410 && mouseY < 510){
		gleenR = 0;
		red = 0;
		blue = 1;
		tera1 = false;
		tera2 = false;
		tera3 = true;

	}

	if(mouseX > 650 && mouseX < 750)
	if(mouseY > 50 && mouseY < 150){
		gleen = 1;
		redR = 0;
		blueRR = 0;
		tera4 = true;
		tera5 = false;
		tera6 = false;
	}

	if(mouseX > 650 && mouseX < 750)
	if(mouseY > 230 && mouseY < 330){
		gleen = 0;
		redR = 1;
		blueRR = 0;
		tera4 = false;
		tera5 = true;
		tera6 = false;
	}
	
	if(mouseX > 650 && mouseX < 750)
	if(mouseY > 410 && mouseY < 510){
		gleen = 0;
		redR = 0;
		blueRR = 1;
		tera4 = false;
		tera5 = false;
		tera6 = true;
	}
	if(gleenR + red + blue == 1
		&& gleen + redR + blueRR == 1){
	if(view ==1 && mouseX > Width/2.5-30 && mouseX < Width/2.5 + 160){
	if(mouseY > Height/1.2 - 30 && mouseY < Height/1.2 + 25){
	view =2
	init();
	console.log(view);
	}
}}
}
gazou();
onload();
}

function select2(){
		context.fillStyle = "#ff99ff";
		context.fillText("Please Enter",Width/3.5-10,Height/1.5);

	if(playerRHP <= 0 || enemyHP <= 0 || blueHP <= 0){
		context.fillStyle = "#0099ff";
		context.fillText("LOSE",100,Height/2.3);
		context.fillStyle = "#ff9900";
		context.fillText("WIN!",600,Height/2.3);
	}
	if(playerHP <= 0 || enemyRHP <= 0 || blueRHP <= 0){
		context.fillStyle = "#ff9900";
		context.fillText("WIN!",100,Height/2.3);
		context.fillStyle = "#0099ff";
		context.fillText("LOSE",600,Height/2.3);
	}
		ww = true;

}
var ww = false;
