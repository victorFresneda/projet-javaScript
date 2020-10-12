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




//------------------------------------------------------------------------------------


var int1 = "piedra";
var int2 = "papel";
var int3 = "tijera";
var result = 0;

var resultado = function (user, cpu){


    if (user === int2 && cpu === int1
        ){
       result++
    }

    if (user === int1 && cpu === int3
        ){
       result=2
    }

    if (user === int3 && cpu === int2
        ){
       result=3
    }

    if (user === cpu){
        result=4
    }


switch(result){

case 1:

console.log("gana usuario con "+int2);
break;

case 2:
console.log("gana usuario con "+int1);
break;

case 3:
console.log("gana usuario con"+int3);
break;

case 4:

console.log("empate");
break;

default:
}console.log("la maquina gano");

}

resultado(int3,int1);   