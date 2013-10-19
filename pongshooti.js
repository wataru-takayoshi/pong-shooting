/*var context = document.getElementById('canvas').getContext('2d');
var Height = canvas.height;
var Width = canvas.width;
var vyi = 1;
var enemyHP = 20;
var enemyRHP = 20;
var playerHP = 20;
var playerRHP =20;
var blueRHP = 20;
var blueHP = 20;
var img = new Image();
img.src = "http://maku-cam2.jiu.ac.jp/~wataru/sozai/midori.png";
var lop = 0;
var playbomb = 2;
var playbombR = 2;
var chage = 0;
var chageR = 0;

var gleenR = 0;
var red =0;
var blue = ;


var gleen = ;
var redR =0;
var blueRR = 0;

*/
	rightDown = false;
	leftDown = false;

	rightDown2 = false;
	leftDown2 = false;

	updown = false;
	updown2 = false;

	downdown = false;
	downdown2 = false;

	msdown = false;
	msdown2 = false;

	bombdown = false;
	bombdownR=false;
	bombdown2 = false;
	bombdown3 = false;
	fan = false;
	fan2 = false;
	fanR = false;
	fanR2 = false;

function onKeyDown(evt){
	if(evt.keyCode == 13 && ww)location.reload();
	if(evt.keyCode == 68)rightDown2 = true;
	if(evt.keyCode == 65)leftDown2=true;
	if(evt.keyCode == 39)rightDown = true;
	if(evt.keyCode == 37)leftDown=true;
	if(evt.keyCode == 83)updown2 =true;
	if(evt.keyCode ==87)downdown2 = true;
	if(evt.keyCode ==40)updown = true;
	if(evt.keyCode == 38)downdown = true;
	if(evt.keyCode == 81)msdown2 = true;
	if(evt.keyCode == 191)msdown = true;
	if(evt.keyCode == 49)bombdown2 = true;
	if(evt.keyCode == 50)bombdown3 = true;
	if(evt.keyCode == 49)fan = true;
	if(evt.keyCode == 50)fan2 = true;
	if(evt.keyCode == 76)bombdown = true;
	if(evt.keyCode == 186)bombdownR = true;
	if(evt.keyCode == 76)fanR = true;
	if(evt.keyCode == 186)fanR2 = true;
}

function onKeyUp(evt){
	if(evt.keyCode == 13)ent = false;
	if(evt.keyCode==68)rightDown2 = false;
	if(evt.keyCode==65)leftDown2=false;
	if(evt.keyCode==39)rightDown = false;
	if(evt.keyCode==37)leftDown=false;
	if(evt.keyCode == 83)updown2 =false;
	if(evt.keyCode ==87)downdown2 = false;
	if(evt.keyCode ==40)updown = false;
	if(evt.keyCode == 38)downdown = false;
	if(evt.keyCode == 81)msdown2 = false;
	if(evt.keyCode == 191)msdown = false;
	if(evt.keyCode == 49)bombdown2 = false;
	if(evt.keyCode == 50)bombdown3 = false;
	if(evt.keyCode == 51)fan = false;
	if(evt.keyCode == 52)fan2 = false;
	if(evt.keyCode == 76)bombdown = false;
	if(evt.keyCode == 186)bombdownR = false;
	if(evt.keyCode == 188)fanR = false;
	if(evt.keyCode == 190)fanR2 = false;
}

window.onkeydown = onKeyDown;
window.onkeyup = onKeyUp;

function main(){
var egauge = new Array(20);
var pgauge = new Array(20);
var bgauge = new Array(20);

var egaugeR = new Array(20);
var pgaugeR = new Array(20);
var bgaugeR = new Array(20);

function playerbomb(xi,yi,vxi,vyi){
	this.x = xi;
	this.y = yi;
	this.vy = vyi;
	this.vx = vxi;

	this.draw = _draw;
	this.move =  _move;
	this.gleenRhit = _gleenRhit;
	this.redhit = _redhit;
	this.bluehit = _bluehit
	return;

	function _draw(){
	context.fillStyle = "#ffffff";
		context.beginPath();
		context.arc(this.x,this.y,20,0,Math.PI*2,true);
		context.closePath();
		context.fill();
	}

	function _move(){
		this.y +=this.vy;
		this.x +=this.vx;
			if(this.x < Width/2)
			gleenBall.splice(i,1);
		if(this.x < Width/2+50){
		gleenBall[gleenBall.length] = new playerball(this.x,this.y,-2,-0.5);
		gleenBall[gleenBall.length] = new playerball(this.x,this.y,-2,0);
		gleenBall[gleenBall.length] = new playerball(this.x,this.y,-2,0.5);
		//gleenBall[gleenBall.length] = new playerball(this.x,this.y,1,-2)
		//gleenBall[gleenBall.length] = new playerball(this.x,this.y,-1,-2)
		gleenBall[gleenBall.length] = new playerball(this.x,this.y,-2,14)
		gleenBall[gleenBall.length] = new playerball(this.x,this.y,-2,-14)
		}
	}
function _gleenRhit(){
	if(playerR.x-5 <this.x+10 && playerR.x+5 > this.x-10)
		if(playerR.y +5 > this.y-10 && playerR.y-5 < this.y+10){
			playerRHP -=1;
			gleenBall.splice(i,1);
			}		
	}

	function _redhit(){
	if(enemy.x-5 <this.x+10 && enemy.x+5 > this.x-10)
		if(enemy.y +5 > this.y-10 && enemy.y-5 < this.y+10){
			enemyHP -=1;
			gleenBall.splice(i,1);
			}
	}

	function _bluehit(){
	if(Blue.x-5 <this.x+10 && Blue.x+5 > this.x-10)
		if(Blue.y +5 > this.y-10 && Blue.y-5 < this.y+10){
			blueHP -=1;
			gleenBall.splice(i,1);
			}
	}

}
function playerbombR(xi,yi,vxi,vyi){
	this.x = xi;
	this.y = yi;
	this.vy = vyi;
	this.vx = vxi;

	this.draw = _draw;
	this.move =  _move;
	this.redRhit = _redRhit;
	this.blueRhit = _blueRhit;
	this.gleenhit = _gleenhit;
	return;

	function _draw(){
	context.fillStyle = "#ffffff";
		context.beginPath();
		context.arc(this.x,this.y,20,0,Math.PI*2,true);
		context.closePath();
		context.fill();
	}

	function _move(){
		this.y +=this.vy;
		this.x +=this.vx;
			if(this.x > Width/2)
			gleenBallR.splice(ii,1);
		if(this.x > Width/2-50){
		gleenBallR[gleenBallR.length] = new playerballR(this.x,this.y,2,-0.5);
		gleenBallR[gleenBallR.length] = new playerballR(this.x,this.y,2,0);
		gleenBallR[gleenBallR.length] = new playerballR(this.x,this.y,2,0.5);
		//gleenBallR[gleenBallR.length] = new playerballR(this.x,this.y,1,2)
		//gleenBallR[gleenBallR.length] = new playerballR(this.x,this.y,-1,2)
		gleenBallR[gleenBallR.length] = new playerballR(this.x,this.y,2,14)
		gleenBallR[gleenBallR.length] = new playerballR(this.x,this.y,2,-14)
		}
	}
	
	function _gleenhit(){
	}

	function _redRhit(){
	}
	function _blueRhit(){
	}

}

function enemyballR(xi,yi,vxi,vyi){
	this.x = xi;
	this.y = yi;
	this.vy = vyi;
	this.vx = vxi

	this.draw = _draw;
	this.move =  _move;
	this.gleenRhit = _gleenRhit;
	this.bluehit = _bluehit;
	this.redhit = _redhit;
	return;

	function _draw(){
	context.fillStyle = "#ff0000";
		context.beginPath();
		context.arc(this.x,this.y,10,0,Math.PI*2,true);
		context.closePath();
		context.fill();
	}

	function _move(){
		this.y +=this.vy;
		this.x +=this.vx;
		//if(this.y < 0 || this.y > Height) this.vy = -this.vy
		//if(this.x < 0 || this.x > Width)this.vx =-this.vx;
				if(this.x-10 > Width || this.x+10 < 0){
					redBallR.splice(cc,1);
				}
	}

	function _redhit(){
		if(enemy.x-5 <this.x+8 && enemy.x+5 > this.x-8)
		if(enemy.y +5 > this.y-8 && enemy.y-5 < this.y+8){
			enemyHP -=1;
			redBallR.splice(cc,1);
		}
	}


	function _gleenRhit(){
		if(playerR.x-5 <this.x+10 && playerR.x+5 > this.x-10)
		if(playerR.y +5 > this.y-10 && playerR.y-5 < this.y+10){
			playerRHP -=1;
			playbombR +=1;
			redBallR.splice(cc,1);
		}

	}
	function _bluehit(){
	if(Blue.x-5 <this.x+10 && Blue.x+5 > this.x-10)
		if(Blue.y +5 > this.y-10 && Blue.y-5 < this.y+10){
			blueHP -=1;
			redBallR.splice(cc,1);
			}
	}
}

function enemyball(xi,yi,vxi,vyi){
	this.x = xi;
	this.y = yi;
	this.vy = vyi;
	this.vx = vxi

	this.draw = _draw;
	this.move =  _move;
	this.gleenhit = _gleenhit;
	this.blueRhit = _blueRhit;
	this.redRhit = _redRhit
	return;

	function _draw(){
	context.fillStyle = "#ff0000";
		context.beginPath();
		context.arc(this.x,this.y,10,0,Math.PI*2,true);
		context.closePath();
		context.fill();
	}

	function _move(){
		this.y +=this.vy;
		this.x +=this.vx;
		//if(this.y < 0 || this.y > Height) this.vy = -this.vy
		//if(this.x < 0 || this.x > Width)this.vx =-this.vx;
				if(this.x-10 > Width || this.x+10 < 0){
					redBall.splice(c,1);
				}
	}
	function _redRhit(){
		if(enemyR.x-5 <this.x+8 && enemyR.x+5 > this.x-8)
		if(enemyR.y +5 > this.y-8 && enemyR.y-5 < this.y+8){
			enemyRHP -=1;
			redBall.splice(i,1);
		}
	}

	function _gleenhit(){
		if(player.x-5 <this.x+10 && player.x+5 > this.x-10)
		if(player.y +5 > this.y-10 && player.y-5 < this.y+10){
			playerHP -=1;
			playbomb +=1;
			redBall.splice(c,1);
		}


	}
	function _blueRhit(){
	if(BlueR.x-5 <this.x+10 && BlueR.x+5 > this.x-10)
		if(BlueR.y +5 > this.y-10 && BlueR.y-5 < this.y+10){
			blueRHP -=1;
			redBall.splice(c,1);
			}
	}
}

function fannelballR(xi,yi,angle){
	this.x = xi;
	this.y = yi;
	this.vx = 4*Math.cos(angle);
	this.vy = -4*Math.sin(angle);

	this.draw = _draw;
	this.move =  _move;
	this.gleenRhit = _gleenRhit;
	this.bluehit = _bluehit;
	this.redhit = _redhit;
	return;

	function _draw(){
	context.fillStyle = "#ff0000";
		context.beginPath();
		context.arc(this.x,this.y,5,0,Math.PI*2,true);
		context.closePath();
		context.fill();
	}

	function _move(){
		this.x +=this.vx;
		this.y +=this.vy;
		//if(this.y < 0 || this.y > Height) this.vy = -this.vy
		//if(this.x < 0 || this.x > Width)this.vx =-this.vx;
				if(this.x-10 > Width || this.x+10 <0){
					redBallR.splice(cc,1);
				}
	}

	function _redhit(){
		if(enemy.x-5 <this.x+8 && enemy.x+5 > this.x-8)
		if(enemy.y +5 > this.y-8 && enemy.y-5 < this.y+8){
			enemyHP -=1;
			redBallR.splice(cc,1);
		}
	}

	function _gleenRhit(){
		if(playerR.x-5 <this.x+5 && playerR.x+5 > this.x-5)
		if(playerR.y +5 > this.y-5 && playerR.y-5 < this.y+5){
			playerRHP -=1;
			playbombR +=1;
			redBallR.splice(cc,1);
		}


		}
		function _bluehit(){
	if(Blue.x-5 <this.x+5 && Blue.x+5 > this.x-5)
		if(Blue.y +5 > this.y-5 && Blue.y-5 < this.y+5){
			blueHP -=1;
			redBallR.splice(cc,1);
		}
 }

}

function fannelball(xi,yi,angle){
	this.x = xi;
	this.y = yi;
	this.vx = 4*Math.cos(angle);
	this.vy = -4*Math.sin(angle);

	this.draw = _draw;
	this.move =  _move;
	this.redRhit = _redRhit;
	this.gleenhit = _gleenhit;
	this.blueRhit = _blueRhit;	
	return;

	function _draw(){
	context.fillStyle = "#ff0000";
		context.beginPath();
		context.arc(this.x,this.y,5,0,Math.PI*2,true);
		context.closePath();
		context.fill();
	}

	function _move(){
		this.x +=this.vx;
		this.y +=this.vy;
		//if(this.y < 0 || this.y > Height) this.vy = -this.vy
		//if(this.x < 0 || this.x > Width)this.vx =-this.vx;
				if(this.x-10 > Width || this.x+10 <0){
					redBall.splice(c,1);
				}
	}

		function _redRhit(){
		if(enemyR.x-5 <this.x+8 && enemyR.x+5 > this.x-8)
		if(enemyR.y +5 > this.y-8 && enemyR.y-5 < this.y+8){
			enemyRHP -=1;
			redBall.splice(c,1);
		}
	}

	function _gleenhit(){
		if(player.x-5 <this.x+5 && player.x+5 > this.x-5)
		if(player.y +5 > this.y-5 && player.y-5 < this.y+5){
			playerHP -=1;
			playbomb +=1;
			redBall.splice(c,1);
		}


		}
		function _blueRhit(){
	if(BlueR.x-5 <this.x+5 && BlueR.x+5 > this.x-5)
		if(BlueR.y +5 > this.y-5 && BlueR.y-5 < this.y+5){
			blueRHP -=1;
			redBall.splice(c,1);
		}
 }

}


	function fannelbulletgleen(){
		var o = -(player.y - Fannel.y);
		var a = (player.x - Fannel.x);
		var angle = Math.atan(o/a);

		if(a < 0)
						angle+=Math.PI;
						
		var j = -(player.y - Fannel2.y);
		var k= (player.x - Fannel2.x);
		var angle2= Math.atan(j/k);

		if(k < 0)
						angle2+=Math.PI;


		redBall[redBall.length]  = new fannelball(Fannel.x,Fannel.y,angle);
		redBall[redBall.length]  = new fannelball(Fannel2.x,Fannel2.y,angle2);

	}
	
	function fannelbulletRgleenR(){
		var o = -(playerR.y - FannelR.y);
		var a = (playerR.x - FannelR.x);
		var angle = Math.atan(o/a);

		if(a < 0)
						angle+=Math.PI;
						
		var j = -(playerR.y - Fannel2R.y);
		var k= (playerR.x - Fannel2R.x);
		var angle2= Math.atan(j/k);

		if(k < 0)
						angle2+=Math.PI;


		redBallR[redBallR.length]  = new fannelballR(FannelR.x,FannelR.y,angle);
		redBallR[redBallR.length]  = new fannelballR(Fannel2R.x,Fannel2R.y,angle2);

	}


function fannelbulletblueR(){
		var o = -(BlueR.y - Fannel.y);
		var a = (BlueR.x - Fannel.x);
		var angle = Math.atan(o/a);

		if(a < 0)
						angle+=Math.PI;
		var j = -(BlueR.y - Fannel2.y);
		var k = (BlueR.x - Fannel2.x);
		var angle2 = Math.atan(j/k);

		if(k < 0)
						angle2+=Math.PI;


		redBall[redBall.length]  = new fannelball(Fannel.x,Fannel.y,angle);
		redBall[redBall.length]  = new fannelball(Fannel2.x,Fannel2.y,angle2);
	}
	
function fannelbulletRblue(){
		var o = -(Blue.y - FannelR.y);
		var a = (Blue.x - FannelR.x);
		var angle = Math.atan(o/a);

		if(a < 0)
						angle+=Math.PI;
		var j = -(Blue.y - Fannel2R.y);
		var k = (Blue.x - Fannel2R.x);
		var angle2 = Math.atan(j/k);

		if(k < 0)
						angle2+=Math.PI;


		redBallR[redBallR.length]  = new fannelballR(FannelR.x,FannelR.y,angle);
		redBallR[redBallR.length]  = new fannelballR(Fannel2R.x,Fannel2R.y,angle2);
	}
	
	function fannelbulletredR(){
		var o = -(enemyR.y - Fannel.y);
		var a = (enemyR.x - Fannel.x);
		var angle = Math.atan(o/a);

		if(a < 0)
						angle+=Math.PI;
		var j = -(enemyR.y - Fannel2.y);
		var k = (enemyR.x - Fannel2.x);
		var angle2 = Math.atan(j/k);

		if(k < 0)
						angle2+=Math.PI;


		redBall[redBall.length]  = new fannelball(Fannel.x,Fannel.y,angle);
		redBall[redBall.length]  = new fannelball(Fannel2.x,Fannel2.y,angle2);
	}

function fannelbulletRred(){
		var o = -(enemy.y - FannelR.y);
		var a = (enemy.x - FannelR.x);
		var angle = Math.atan(o/a);

		if(a < 0)
						angle+=Math.PI;
		var j = -(enemy.y - Fannel2R.y);
		var k = (enemy.x - Fannel2R.x);
		var angle2 = Math.atan(j/k);

		if(k < 0)
						angle2+=Math.PI;


		redBallR[redBallR.length]  = new fannelballR(FannelR.x,FannelR.y,angle);
		redBallR[redBallR.length]  = new fannelballR(Fannel2R.x,Fannel2R.y,angle2);
	}



function fannel(){
	this.x = enemy.x+10;
	this.y = enemy.y-20;
	this.vx;
	this.vy;
	this.draw = _draw;
	this.move =  _move;
	
	return;

	function _draw(){
		context.fillStyle = "#ff9999";
		context.beginPath();
		context.fillRect(this.x,this.y,20,10);
		context.closePath();
		context.fill();
	}

	function _move(){
	this.vx = 5;

		if(this.x < Width-25 && bombdown2){
	this.x +=this.vx;
	}else{
		this.vy = 0;	
		}
		if(!fan){
		this.y =enemy.y-80;
		this.x =enemy.x-30;
		
		}
	}
}

function fannelR(){

this.x = enemyR.x-20;
	this.y = enemyR.y+10;
	this.vy;
	this.vx;

	this.draw = _draw;
	this.move =  _move;
	
	return;

	function _draw(){
		context.beginPath();
		context.fillRect(this.x,this.y,20,10);
		context.closePath();
		context.fill();
	}
	function _move(){
		this.vx = -5;

		if(this.x > 25 && bombdown){
			this.x +=this.vx;
		}else{
			this.vx = 0;	
		}
		if(!fanR){
			this.y =enemyR.y-80;
			this.x =enemyR.x+30;
		
		}
	}

}

function fannel2(){
	this.x = enemy.x-20;
	this.y = enemy.y+10;
	this.vy;
	this.vx;

	this.draw = _draw;
	this.move =  _move;
	
	return;

	function _draw(){
		context.beginPath();
		context.fillRect(this.x,this.y,20,10);
		context.closePath();
		context.fill();
	}
	function _move(){
		this.vx = 5;

		if(this.x < Width-25 && bombdown3){
			this.x +=this.vx;
		}else{
			this.vx = 0;	
		}
		if(!fan2){
			this.y =enemy.y+80;
			this.x =enemy.x-30;
		
		}
	}
}

function fannel2R(){
	this.x = enemyR.x-20;
	this.y = enemyR.y+10;
	this.vy;
	this.vx;

	this.draw = _draw;
	this.move =  _move;
	
	return;

	function _draw(){
		context.beginPath();
		context.fillRect(this.x,this.y,20,10);
		context.closePath();
		context.fill();
	}
	function _move(){
		this.vx = -5;

		if(this.x > 25 && bombdownR){
			this.x +=this.vx;
		}else{
			this.vx = 0;	
		}
		if(!fanR2){
			this.y =enemyR.y+80;
			this.x =enemyR.x+30;
		
		}
	}
}
//ここ
function playerballR(xi,yi,vxi,vyi){
	this.x = xi;
	this.y = yi;
	this.vy = vyi;
	this.vx = vxi;

	this.draw = _draw;
	this.move =  _move;
	this.redRhit = _redRhit;
	this.blueRhit = _blueRhit;
	this.gleenhit =_gleenhit;	
	return;

	function _draw(){
	context.fillStyle = "#00ff00";
		context.beginPath();
		context.arc(this.x,this.y,10,0,Math.PI*2,true);
		context.closePath();
		context.fill();
	}

	function _move(){
		this.y +=this.vy;
		this.x +=this.vx;
		//if(this.y < 0 || this.y > Height) this.vy = -this.vy
		//if(this.x < 0 || this.x > Width)this.vx =-this.vx;
		
		if(this.x+10 < 0 || this.x-10 >  Width){
		gleenBallR.splice(ii,1);
		}

	}
function _gleenhit(){
	if(player.x-5 <this.x+10 && player.x+5 > this.x-10)
		if(player.y +5 > this.y-10 && player.y-5 < this.y+10){
			playerHP -=1;
			playbomb +=1;
			gleenBallR.splice(ii,1);
			}		
	}

	function _redRhit(){
		if(enemyR.x-5 <this.x+8 && enemyR.x+5 > this.x-8)
		if(enemyR.y +5 > this.y-8 && enemyR.y-5 < this.y+8){
			enemyRHP -=1;
			gleenBallR.splice(ii,1);
		}
	}

	function _blueRhit(){
		if(BlueR.x-5 <this.x+8 && BlueR.x+5 > this.x-8)
		if(BlueR.y +5 > this.y-8 && BlueR.y-5 < this.y+8){
			blueRHP -=1;
			gleenBallR.splice(ii,1);
		}
	}

}

function playerball(xi,yi,vxi,vyi){
	this.x = xi;
	this.y = yi;
	this.vy = vyi;
	this.vx = vxi;

	this.draw = _draw;
	this.move =  _move;
	this.redhit = _redhit;
	this.bluehit = _bluehit;
	this.gleenRhit =	_gleenRhit;
	return;

	function _draw(){
	context.fillStyle = "#00ff00";
		context.beginPath();
		context.arc(this.x,this.y,10,0,Math.PI*2,true);
		context.closePath();
		context.fill();
	}

	function _move(){
		this.y +=this.vy;
		this.x +=this.vx;
		//if(this.y < 0 || this.y > Height) this.vy = -this.vy
		//if(this.x < 0 || this.x > Width)this.vx =-this.vx;
		
		if(this.x+10 < 0 || this.x-10 > Width){
		gleenBall.splice(i,1);
		}

	}

	function _gleenRhit(){
	if(playerR.x-5 <this.x+10 && playerR.x+5 > this.x-10)
		if(playerR.y +5 > this.y-10 && playerR.y-5 < this.y+10){
			playerRHP -=1;
			playbombR +=1;
			gleenBall.splice(i,1);
			}
}

	function _redhit(){	
			if(enemy.x-5 <this.x+8 && enemy.x+5 > this.x-8)
			if(enemy.y +5 > this.y-8 && enemy.y-5 < this.y+8){
			enemyHP -=1;
			gleenBall.splice(i,1);
		}

	}

	function _bluehit(){
		if(Blue.x-5 <this.x+8 && Blue.x+5 > this.x-8)
		if(Blue.y +5 > this.y-8 && Blue.y-5 < this.y+8){
			blueHP -=1;
			gleenBall.splice(i,1);
		}
	}

}



function Player(){
	this.x = Width-50;
	this.y = Height/3;

	this.draw = _draw;
	this.move = _move;
	this.move = _move;
	this.gleengauge = _gleen;
	return;

	function _gleen(){	
	var plax = Height-30;
		for(var gg = 0;gg < playerHP;gg++){
			pgauge[pgauge.length] = new gazo(Width-10,plax);
			plax -=22;
		}
	}

		function _draw(){
			context.fillStyle = "#00ff00";
			context.beginPath();
			context.arc(this.x,this.y,5,0,Math.PI*2,true);
			context.closePath();
			context.fill();
			if(playerHP < 1){
			view = 3;
			init();
			}
		}
	function _move(){
		if(this.x < Width-25 && rightDown)this.x +=2;
		if(this.x > Width/2+10 && leftDown)this.x -=2;
		if(this.y < Height-10 && updown)this.y +=2;
		if(this.y > 10 && downdown)this.y -=2;
	}

}

function PlayerR(){
	this.x = 30;
	this.y = Width/3;

	this.draw = _draw;
	this.move = _move;
	this.gleengauge = _gleen;
	return;

	function _gleen(){	
	var plax = Height-30;
		for(var gg = 0;gg < playerRHP;gg++){
			pgaugeR[pgaugeR.length] = new gazo(2,plax);
			plax -=22;
		}
	}


		function _draw(){
			context.fillStyle = "#00ff00";
			context.beginPath();
			context.arc(this.x,this.y,5,0,Math.PI*2,true);
			context.closePath();
			context.fill();
			if(playerRHP < 1){
			view = 3;
			init();
			
			}
		}
	
	function _move(){
		if(this.x < Width/2-10 && rightDown2)this.x +=2;
		if(this.x > 25 && leftDown2)this.x -=2;
		if(this.y < Height-10 && updown2)this.y +=2;
		if(this.y > 10 && downdown2)this.y -=2;
	}
}

function Enemy(){
	this.x = 40;
	this.y = Height/2;
	this.draw = _draw;
	this.move = _move;
	this.redgauge = _red;

	function _red(){	
	var enx = Height-30;
		for(var ga = 0;ga < enemyHP;ga++){
			egauge[egauge.length] = new gazo(2,enx);
			enx -=22;
		}
	}


		function _draw(){
		context.fillStyle = "#ff00ff";
			context.beginPath();
			context.arc(this.x,this.y,5,0,Math.PI*2,true);
			context.closePath();
			context.fill();
			if(enemyHP < 1){
			view = 3;
			init();

			}
		}
		function _move(){
		if(this.x < Width/2-10 && rightDown2)this.x +=2;
		if(this.x > 25 && leftDown2)this.x -=2;
		if(this.y < Height-10 && updown2)this.y +=2;
		if(this.y > 10 && downdown2)this.y -=2;
		}
}

function EnemyR(){
	this.x = Width-50;
	this.y = Height/2;
	this.draw = _draw;
	this.move = _move;
	this.redgauge = _red;

	function _red(){	
	var enx = Height-30;
		for(var ga = 0;ga < enemyRHP;ga++){
			egaugeR[egaugeR.length] = new gazo(Width-10,enx);
			enx -=22;
		}
	}
		function _draw(){
		context.fillStyle = "#ff00ff";
			context.beginPath();
			context.arc(this.x,this.y,5,0,Math.PI*2,true);
			context.closePath();
			context.fill();
			if(enemyRHP < 1){
			view = 3;
			init();

			}
		}

		function _move(){
		if(this.x < Width-30 && rightDown)this.x +=2;
		if(this.x > Width/2+10 && leftDown)this.x -=2;
		if(this.y < Height-10 && updown)this.y +=2;
		if(this.y > 10 && downdown)this.y -=2;
		}
}

function bluebombR(xi,yi,wi,hi,vxi,vyi){
	this.x = xi;
	this.y = yi;
	this.h = hi;
	this.w = wi;
	this.vx = vxi;
	this.vy = vyi;

	this.draw = _draw;
	this.move =  _move;
	this.gleenRhit = _gleenRhit;
	this.redhit = _redhit;
	this.bluehit = _bluehit;
		return;

	function _draw(){
		context.fillStyle = "#00aaff";
		context.beginPath();
		context.fillRect(this.x,this.y,this.w,this.h);
		context.closePath();
		context.fill();

	}

	function _move(){
		this.y +=this.vy;
		this.x +=this.vx;
		//if(this.y < 0 || this.y > Height) this.vy = -this.vy
		//if(this.x < 0 || this.x > Width)this.vx =-this.vx;
				if(this.x-50 > Width || this.x+50 < 0){
					blueBallR.splice(oc,1);
				}
	}
	
	function _bluehit(){
		if(Blue.x-5 <this.x+this.w && Blue.x+5 > this.x)
		if(Blue.y +5 > this.y && Blue.y-5 < this.y+this.h){
			blueHP -=1;
			//blueBallR.splice(oc,1);
		}


		}

	function _gleenRhit(){
		if(playerR.x-5 <this.x+this.w && playerR.x+5 > this.x)
		if(playerR.y +5 > this.y && playerR.y-5 < this.y+this.h){
			playerRHP -=1;
			playbombR +=1;
			//blueBallR.splice(oc,1);
		}


		}

	function _redhit(){
		if(enemy.x-5 <this.x+this.w && enemy.x+5 > this.x)
		if(enemy.y +5 > this.y && enemy.y-5 < this.y+this.h){
			enemyHP -=1;
			//blueBallR.splice(oc,1);
		}
	}

}
function bluebomb(xi,yi,wi,hi,vxi,vyi){
	this.x = xi;
	this.y = yi;
	this.h = hi;
	this.w = wi;
	this.vx = vxi;
	this.vy = vyi;

	this.draw = _draw;
	this.move =  _move;
	this.gleenhit = _gleenhit;
	this.redRhit = _redRhit;
	this.blueRhit = _blueRhit;
		return;

	function _draw(){
		context.fillStyle = "#00aaff";
		context.beginPath();
		context.fillRect(this.x,this.y,this.w,this.h);
		context.closePath();
		context.fill();

	}

	function _move(){
		this.y +=this.vy;
		this.x +=this.vx;
		//if(this.y < 0 || this.y > Height) this.vy = -this.vy
		//if(this.x < 0 || this.x > Width)this.vx =-this.vx;
				if(this.x-50 > Width || this.x+50 < 0){
					blueBall.splice(o,1);
				}
	}

function _blueRhit(){
		if(BlueR.x-5 <this.x+this.w && BlueR.x+5 > this.x)
		if(BlueR.y +5 > this.y && BlueR.y-5 < this.y+this.h){
			blueRHP -=1;
			//blueBall.splice(o,1);
		}


		}
	function _gleenhit(){
		if(player.x-5 <this.x+this.w && player.x+5 > this.x)
		if(player.y +5 > this.y && player.y-5 < this.y+this.h){
			playerHP -=1;
			playbomb +=1;
			//blueBall.splice(o,1);
		}


		}

	function _redRhit(){
		if(enemyR.x-5 <this.x+this.w && enemyR.x+5 > this.x)
		if(enemyR.y +5 > this.y && enemyR.y-5 < this.y+this.h){
			enemyRHP -=1;
			//blueBall.splice(o,1);
		}
	}



}

function blueballR(xi,yi,vxi,vyi,oo){
	this.x = xi;
	this.y = yi;
	this.vy = vyi;
	this.vx = vxi

	this.draw = _draw;
	this.move =  _move;
	this.gleenRhit = _gleenRhit;
	this.redhit = _redhit;
	this.bluehit = _bluehit;
	
	return;

	function _draw(){
		context.fillStyle = "#ff00ff";
		context.beginPath();
		context.arc(this.x,this.y,oo,0,Math.PI*2,true);
		context.closePath();
		context.fill();
	}

	function _move(){
		this.y +=this.vy;
		this.x +=this.vx;
		//if(this.y < 0 || this.y > Height) this.vy = -this.vy
		//if(this.x < 0 || this.x > Width)this.vx =-this.vx;
				if(this.x-10 > Width || this.x+10 < 0){
					blueBallR.splice(oc,1);
				}
	}

	function _bluehit(){
		if(Blue.x-5 <this.x+8 && Blue.x+5 > this.x-8)
		if(Blue.y +5 > this.y-8 && Blue.y-5 < this.y+8){
			blueHP -=1;
			blueBallR.splice(oc,1);

		}


		}

	function _gleenRhit(){
		if(playerR.x-5 <this.x+10 && playerR.x+5 > this.x-10)
		if(playerR.y +5 > this.y-10 && playerR.y-5 < this.y+10){
			playerRHP -=1;
			playbombR +=1;
			blueBallR.splice(oc,1);
		}


		}
		function _redhit(){
		if(enemy.x-5 <this.x+8 && enemy.x+5 > this.x-8)
		if(enemy.y +5 > this.y-8 && enemy.y-5 < this.y+8){
			enemyHP -=1;
			blueBallR.splice(oc,1);
		}
	}

}
function blueball(xi,yi,vxi,vyi,oo){
	this.x = xi;
	this.y = yi;
	this.vy = vyi;
	this.vx = vxi

	this.draw = _draw;
	this.move =  _move;
	this.gleenhit = _gleenhit;
	this.redRhit = _redRhit;
	this.blueRhit = _blueRhit;
	return;

	function _draw(){
		context.fillStyle = "#ff00ff";
		context.beginPath();
		context.arc(this.x,this.y,oo,0,Math.PI*2,true);
		context.closePath();
		context.fill();
	}

	function _move(){
		this.y +=this.vy;
		this.x +=this.vx;
		//if(this.y < 0 || this.y > Height) this.vy = -this.vy
		//if(this.x < 0 || this.x > Width)this.vx =-this.vx;
				if(this.x-10 > Width || this.x+10 < 0){
					blueBall.splice(o,1);
				}
	}

function _blueRhit(){
			if(BlueR.x-5 <this.x+10 && BlueR.x+5 > this.x-10)
			if(BlueR.y +5 > this.y-10 && BlueR.y-5 < this.y+10){
			blueRHP -=1;
			blueBall.splice(o,1);

		}

		}

	function _gleenhit(){
		if(player.x-5 <this.x+10 && player.x+5 > this.x-10)
		if(player.y +5 > this.y-10 && player.y-5 < this.y+10){
			playerHP -=1;
			playbomb +=1;
			blueBall.splice(o,1);
		}

		}
		function _redRhit(){
		if(enemyR.x-5 <this.x+8 && enemyR.x+5 > this.x-8)
		if(enemyR.y +5 > this.y-8 && enemyR.y-5 < this.y+8){
			enemyRHP -=1;
			blueBall.splice(o,1);
		}
	}

}


function Bblue(){
	this.x = 20;
	this.y = Height/1.5;
	this.draw = _draw;
	this.move = _move;
	this.bluegauge = _basblue;

	function _basblue(){
	var blx = Height-30;
		for(var gb = 0;gb < blueHP;gb++){
			bgauge[bgauge.length] = new gazo(2,blx);
			blx -=22;
		}
	}

		function _draw(){
		if(chage < 6){
			context.fillStyle = "#0000ff";
			}else{
			context.fillStyle = "#ff00ff";
			}

			context.beginPath();
			context.arc(this.x,this.y,5,0,Math.PI*2,true);
			context.closePath();
			context.fill();
			if(blueHP < 1){
			view = 3;
			init();

			}
		}
		function _move(){
			if(this.x < Width/2-10 && rightDown2)this.x +=2;
			if(this.x > 25 && leftDown2)this.x -=2;
			if(this.y < Height-10 && updown2)this.y +=2;
			if(this.y > 10 && downdown2)this.y -=2;
		}
}

function blueR(){
	this.x = Width-50;
	this.y = Height/1.5;
	this.draw = _draw;
	this.move = _move;
	this.bluegauge = _blue;

	function _blue(){
	var blx =Height-30;
		for(var gb = 0;gb < blueRHP;gb++){
			bgaugeR[bgaugeR.length] = new gazo(Width-10,blx);
			blx -=22;
		}
	}

		function _draw(){
		if(chageR < 6){
			context.fillStyle = "#0000ff";
			}else{
			context.fillStyle = "#ff00ff";
			}

			context.beginPath();
			context.arc(this.x,this.y,5,0,Math.PI*2,true);
			context.closePath();
			context.fill();
			if(blueRHP < 1){
			view = 3;
			init();

			}
		}

		function _move(){
		if(this.x < Width-25 && rightDown)this.x +=2;
		if(this.x > Width/2+10 && leftDown)this.x -=2;
		if(this.y < Height-10 && updown)this.y +=2;
		if(this.y > 10 && downdown)this.y -=2;

		}
}


var gleenBall = new Array();
var blueBall = new Array();
var redBall = new Array();
var gleenBallR = new Array();
var blueBallR = new Array();
var redBallR = new Array();
var i = 0;
var o = 0;
var c = 0;
var ii = 0;
var oc = 0;
var cc = 0;

var player = new Player();
var playerR = new PlayerR();
var Blue = new Bblue();
var BlueR = new blueR();
var enemy = new Enemy();
var enemyR = new EnemyR();
var pbomb = new playerbomb();
var Fannel = new fannel();
var FannelR = new fannelR();
var Fannel2 = new fannel2();
var Fannel2R = new fannel2R();

function shoot(){
	function enemyBalljoi(){		
		if(msdown2){
		if(enemyHP > 1)
		redBall[redBall.length]  = new enemyball(enemy.x,enemy.y,5,0);
		if(enemyHP <= 3){
		redBall[redBall.length]  = new enemyball(enemy.x,enemy.y,5,3);
		redBall[redBall.length]  = new enemyball(enemy.x,enemy.y,5,-3);
		redBall[redBall.length]  = new enemyball(enemy.x,enemy.y,5,0);
		}
	if(blueRR == 1)
	fannelbulletblueR();
	if(gleen == 1)
	fannelbulletgleen();
	if(redR == 1)
	fannelbulletredR();

	}
}

function enemyBalljoiR(){		
		if(msdown){
		if(enemyRHP > 1)
		redBallR[redBallR.length]  = new enemyballR(enemyR.x,enemyR.y,-5,0);
		if(enemyRHP <= 3){
		redBallR[redBallR.length]  = new enemyballR(enemyR.x,enemyR.y,-5,3);
		redBallR[redBallR.length]  = new enemyballR(enemyR.x,enemyR.y,-5,-3);
		redBallR[redBallR.length]  = new enemyballR(enemyR.x,enemyR.y,-5,0);
		}
	if(blue == 1)
	fannelbulletRblue();
	if(gleenR == 1)
	fannelbulletRgleenR();
	if(red == 1)
	fannelbulletRred();

	}
}

	function playerBalljoi(){

		if(msdown){
		//if(playerHP >= 2)
		gleenBall[gleenBall.length]  = new playerball(player.x,player.y,-4,0);
		//if(playerHP <= 1){
		gleenBall[gleenBall.length] = new playerball(player.x,player.y,-4,-0.8);
		gleenBall[gleenBall.length] = new playerball(player.x,player.y,-4,0);
		gleenBall[gleenBall.length] = new playerball(player.x,player.y,-4,0.8);
		//	}
		}
		
		if(playbomb > 0)
		if(bombdown){
			gleenBall[gleenBall.length] = new playerbomb(player.x,player.y,-0.8,0);
		playbomb -=1;
		}
	}
		function playerBalljoiR(){

		if(msdown2){
//		if(playerRHP >= 2)
		gleenBallR[gleenBallR.length]  = new playerballR(playerR.x,playerR.y,4,0);
		//if(playerRHP <= 1){
		gleenBallR[gleenBallR.length] = new playerballR(playerR.x,playerR.y,4,-0.8);
		gleenBallR[gleenBallR.length] = new playerballR(playerR.x,playerR.y,4,0);
		gleenBallR[gleenBallR.length] = new playerballR(playerR.x,playerR.y,4,0.8);
			//}
		}
		
		if(playbombR > 0)
		if(bombdown2){
			gleenBallR[gleenBallR.length] = new playerbombR(playerR.x,playerR.y,0.8,0);
		playbombR -=1;
		}
	}

	function blueBalljoi(){		
		if(msdown2){
//		if(blueHP >= 3)
//			blueBall[blueBall.length]  = new blueball(Blue.x,Blue.y,4,0,10);
		
//		if(blueHP <= 2)
			blueBall[blueBall.length]  = new bluebomb(Blue.x,Blue.y,20,10,10,0);
		}
		if(bombdown2){
		chage +=1;
		}
		else if(chage >= 6){
			blueBall[blueBall.length]  = new bluebomb(Blue.x,Blue.y-85,30,170,6,0);
			chage = 0;
		}
	}
	function blueBalljoiR(){		
		if(msdown){
//		if(blueRHP >= 3)
//			blueBallR[blueBallR.length]  = new blueballR(BlueR.x,BlueR.y,-4,0,10);
		
//		if(blueRHP <= 2)
			blueBallR[blueBallR.length]  = new bluebombR(BlueR.x,BlueR.y,20,10,-10,0);
		}
		if(bombdown){
		chageR +=1;
		}
		else if(chageR >= 6){
			blueBallR[blueBallR.length]  = new bluebombR(BlueR.x,BlueR.y-85,30,170,-6,0);
			chageR = 0
		}
	}

	blueBalljoi();
	enemyBalljoi();
	playerBalljoi();
	blueBalljoiR();
	enemyBalljoiR();
	playerBalljoiR();
}


function gazo(x,h){
context.drawImage(img,x,h);
}


function go(){
	this.gleendm = _gleendm;
	this.bluedm = _bluedm;
	this.reddm = _reddm;
	this.gleendmR = _gleendmR;
	this.bluedmR = _bluedmR;
	this.reddmR = _reddmR;

	function _gleendm(){
		for(i = 0; i < gleenBall.length;i++){
			gleenBall[i].draw();
			gleenBall[i].move();
			if(gleenR ==1 && gleen == 1)
			gleenBall[i].gleenRhit();
			if(blue ==1 && gleen == 1)
			gleenBall[i].bluehit();
			if(red ==1 && gleen == 1)
			gleenBall[i].redhit();

		}
	}
	
	function _gleendmR(){
		for(ii = 0; ii < gleenBallR.length;ii++){
			gleenBallR[ii].draw();
			gleenBallR[ii].move();
			if(gleenR ==1 && gleen == 1)
			gleenBallR[ii].gleenhit();
			if(gleenR ==1 && blueRR == 1)
			gleenBallR[ii].blueRhit();
			if(gleenR ==1 && redR == 1)
			gleenBallR[ii].redRhit();

		}
	}
	function _bluedm(){
		for(o = 0; o < blueBall.length;o++){
		blueBall[o].draw();
		blueBall[o].move();
		if(blue ==1 && blueRR == 1)
		blueBall[o].blueRhit();
		if(blue ==1 && gleen == 1)
		blueBall[o].gleenhit();
		if(blue ==1 && redR == 1)
		blueBall[o].redRhit();
		}
	}
	
	function _bluedmR(){
		for(oc = 0; oc < blueBallR.length;oc++){
		blueBallR[oc].draw();
		blueBallR[oc].move();
		if(blue ==1 && blueRR == 1)
		blueBallR[oc].bluehit();
		if(gleenR ==1 && blueRR == 1)
		blueBallR[oc].gleenRhit();
		if(red ==1 && blueRR == 1)
		blueBallR[oc].redhit();
		}
	}
	function _reddm(){
		for(c = 0; c < redBall.length;c++){
			redBall[c].draw();
			redBall[c].move();
			if(red ==1 && redR == 1)
			redBall[c].redRhit();
			if(red ==1 && gleen == 1)
			redBall[c].gleenhit();
			if(red ==1 && blueRR == 1)
			redBall[c].blueRhit();
		}
	}	
	
	function _reddmR(){
		for(cc = 0; cc < redBallR.length;cc++){
			redBallR[cc].draw();
			redBallR[cc].move();
			if(red ==1 && redR == 1)
			redBallR[cc].redhit();
			if(gleenR ==1 && redR == 1)
			redBallR[cc].gleenRhit();
			if(blue ==1 && redR == 1)
			redBallR[cc].bluehit();
		}
	}

}

var Go = new go();

/*
	rightDown = false;
	leftDown = false;

	rightDown2 = false;
	leftDown2 = false;

	updown = false;
	updown2 = false;

	downdown = false;
	downdown2 = false;

	msdown = false;
	msdown2 = false;

	bombdown = false;
	bombdownR=false;
	bombdown2 = false;
	bombdown3 = false;
	fan = false;
	fan2 = false;
	fanR = false;
	fanR2 = false;

function onKeyDown(evt){
	if(evt.keyCode == 68)rightDown = true;
	else if(evt.keyCode == 65)leftDown=true;
	else if(evt.keyCode == 39)rightDown2 = true;
	else if(evt.keyCode == 37)leftDown2=true;
	if(evt.keyCode == 83)updown =true;
	if(evt.keyCode ==87)downdown = true;
	if(evt.keyCode ==40)updown2 = true;
	if(evt.keyCode == 38)downdown2 = true;
	if(evt.keyCode == 81)msdown = true;
	if(evt.keyCode == 191)msdown2 = true;
	if(evt.keyCode == 49)bombdown = true;
	if(evt.keyCode == 50)bombdownR = true;
	if(evt.keyCode == 49)fanR = true;
	if(evt.keyCode == 50)fanR2 = true;
	if(evt.keyCode == 76)bombdown2 = true;
	if(evt.keyCode == 186)bombdown3 = true;
	if(evt.keyCode == 76)fan = true;
	if(evt.keyCode == 186)fan2 = true;
}

function onKeyUp(evt){
	if(evt.keyCode==68)rightDown = false;
	else if(evt.keyCode==65)leftDown=false;
	else if(evt.keyCode==39)rightDown2 = false;
	else if(evt.keyCode==37)leftDown2=false;
	if(evt.keyCode == 83)updown =false;
	if(evt.keyCode ==87)downdown = false;
	if(evt.keyCode ==40)updown2 = false;
	if(evt.keyCode == 38)downdown2 = false;
	if(evt.keyCode == 81)msdown = false;
	if(evt.keyCode == 191)msdown2 = false;
	if(evt.keyCode == 49)bombdown = false;
	if(evt.keyCode == 50)bombdownR = false;
	if(evt.keyCode == 51)fanR = false;
	if(evt.keyCode == 52)fanR2 = false;
	if(evt.keyCode == 76)bombdown2 = false;
	if(evt.keyCode == 186)bombdown3 = false;
	if(evt.keyCode == 188)fan = false;
	if(evt.keyCode == 190)fan2 = false;
}

window.onkeydown = onKeyDown;
window.onkeyup = onKeyUp;
	*/
	function loop1(){
		context.clearRect(0,0,Width,Height);
				
				player.move();
				player.draw();
				player.gleengauge();
				enemy.draw();
				enemy.move();
				enemy.redgauge();
				Fannel.draw();
				Fannel.move();
				Fannel2.draw();
				Fannel2.move();

			Go.gleendm();
			Go.reddm();
	}
	
	function loop2(){
		context.clearRect(0,0,Width,Height);
				
				player.move();
				player.draw();
				player.gleengauge();
				Blue.move();
				Blue.draw();
				Blue.bluegauge();

		Go.gleendm();
		Go.bluedm();
	}
	
	function loop3(){
		context.clearRect(0,0,Width,Height);
				
				player.move();
				player.draw();
				player.gleengauge();
				playerR.move();
				playerR.draw();
				playerR.gleengauge();

			Go.gleendm();
			Go.gleendmR();
	}
	
	function loop4(){
		context.clearRect(0,0,Width,Height);
				
				playerR.move();
				playerR.draw();
				playerR.gleengauge();
				BlueR.move();
				BlueR.draw();
				BlueR.bluegauge();

			Go.gleendmR();
			Go.bluedmR();
	}
	
	function loop5(){
		context.clearRect(0,0,Width,Height);
				
				Blue.move();
				Blue.draw();
				Blue.bluegauge();
				BlueR.move();
				BlueR.draw();
				BlueR.bluegauge();

			Go.bluedm();
			Go.bluedmR();
	}
	
	function loop6(){
		context.clearRect(0,0,Width,Height);
				
				enemy.draw();
				enemy.move();
				enemy.redgauge();
				Fannel.draw();
				Fannel.move();
				Fannel2.draw();
				Fannel2.move();
				BlueR.move();
				BlueR.draw();
				BlueR.bluegauge();

			Go.reddm();
			Go.bluedmR();
	}
	
	function loop7(){
		context.clearRect(0,0,Width,Height);
				
				playerR.move();
				playerR.draw();
				playerR.gleengauge();
				enemyR.draw();
				enemyR.move();
				enemyR.redgauge();
				FannelR.draw();
				FannelR.move();
				Fannel2R.draw();
				Fannel2R.move();

			Go.gleendmR();
			Go.reddmR();
	}
	
	function loop8(){
		context.clearRect(0,0,Width,Height);
				
				Blue.move();
				Blue.draw();
				Blue.bluegauge();
				enemyR.draw();
				enemyR.move();
				enemyR.redgauge();
				FannelR.draw();
				FannelR.move();
				Fannel2R.draw();
				Fannel2R.move();

		Go.bluedm();
			Go.reddmR();
	}
	
	function loop9(){
				
		context.clearRect(0,0,Width,Height);
				enemy.draw();
				enemy.move();
				enemy.redgauge();
				Fannel.draw();
				Fannel.move();
				Fannel2.draw();
				Fannel2.move();
				enemyR.draw();
				enemyR.move();
				enemyR.redgauge();
				FannelR.draw();
				FannelR.move();
				Fannel2R.draw();
				Fannel2R.move();

			Go.reddm();
			Go.reddmR();
	}
	
function charaselect(){
	if(red ==1 && gleen == 1){
		lop = setInterval(loop1,1000/150);
	}
	if(blue ==1 && gleen == 1){
		lop = setInterval(loop2,1000/150);
	}
	if(gleenR ==1 && gleen == 1){
		lop = setInterval(loop3,1000/150);
	}
	if(gleenR ==1 && blueRR == 1){
		lop = setInterval(loop4,1000/150);
	}
	if(blue ==1 && blueRR == 1){
		lop = setInterval(loop5,1000/150);
	}
	if(red ==1 && blueRR == 1){
		lop = setInterval(loop6,1000/150);
	}
	if(gleenR ==1 && redR == 1){
		lop = setInterval(loop7,1000/150);
	}
	if(blue ==1 && redR == 1){
		lop = setInterval(loop8,1000/150);
	}
	if(red ==1 && redR == 1){
		lop = setInterval(loop9,1000/150);
	}
}

function draw(){
	setInterval(shoot,300);
	charaselect();
}

draw();
}

/*function init(){
if(view == 1){
	select1();
}else if(view == 2){
	main();
	}
}
init();*/
