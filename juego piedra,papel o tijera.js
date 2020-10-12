var int1 = "piedra";
var int2 = "papel";
var int3 = "tijera";

var resultado = function (cpu, user){

if (user != cpu){

if (user === int2 && cpu === int1){
    console.log("el usuario gana con "+ int2);

    
} else if (user === int1 && cpu === int3){
    console.log("el usuario gano  con "+ int1);

}

else if (user === int3 && cpu === int2){
    console.log("el usuario gano con "+ int3);
    
}

else{
  console.log(" cpu gana");
}

} else if (user === cpu){

    console.log("Empate")
}



}; 


resultado(int2,int2);