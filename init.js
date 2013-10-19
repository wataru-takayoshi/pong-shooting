function init(){
clearInterval(lop);
if(view == 1){
	lop = setInterval(select1,1000/60);
}
else if(view == 2){
	main();
}
if(view == 3){
	setTimeout(select2,1000/60);
}
}
init();
