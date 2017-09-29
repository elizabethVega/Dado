function lanzar(){
var jugador=1;
var valjugador1 =0;
for(i =0;i<2;i++){
	var valor = Math.floor(Math.random()*6+1);
	if(jugador==1){	valjugador1 = valor;}
	var dado = [[0,0,0,0,0,0,0,0,0]];
	switch(valor){
	case 6:
	dado[1]=1;
	dado[7]=1;

	case 4:
	dado[2]=1;
	dado[6]=1;

	case 2:
	dado[0]=1;
	dado[8]=1;
	break;

	case 5:
	dado[2]=1;
	dado[6]=1;

	case 3:
	dado[0]=1;
	dado[8]=1;

	case 1:
	dado[4]=1;
	break;
	}
	var id = 0;
	if(jugador ==2){
	id = 20;
	}
	for(x=0;x<=8;x++){
		if(dado[x]==1){
		document.getElementById(id+x).innerHTML="•";}
		else{
		document.getElementById(id+x).innerHTML=" ";}
	}
	jugador =2;
	}
ganador(valjugador1,valor);
}

function ganador(valjugador1,valor){
	if(valjugador1==valor){
	//alert("Empate");
	document.getElementById("resultados").innerHTML="Empate";
	}
	else if(valjugador1>valor){
	document.getElementById("resultados").innerHTML="Gano jugador 1";
	}
	else{document.getElementById("resultados").innerHTML="Gano jugador 2";}
}