
var marcas = ["bugatti","ferrari","lomborguini","mazda","bugatti"];
var colores = ["rojo","verde","negro","plateado","rojo"];
var annio = ["2011","2012","2013","2014","2011"];
var modelo = ["viper","ultra","murcielago","aventador","viper"];


var num = Math.random();
var num1 = num*4;
var Alet1 = Math.ceil(num1);

var num = Math.random();
var num2 = num*4;
var Alet2 = Math.ceil(num2);

var num = Math.random();
var num3 = num*4;
var Alet3 = Math.ceil(num3);



function carsGenerator(Aleatorio){

for (i=0; i < numberAlt; i++){

}

}

function car(marca,modelo,annio,color){
       this.color = color;
       this.modelo = modelo;
       this.marca = marca;
       this.annio = annio;
}

var carOne = new car(marcas[Alet1],modelo[Alet2],annio[Alet3],colores[Alet2]);
var carTwo = new car(marcas[Alet2],modelo[Alet3],annio[Alet1],colores[Alet3]);
var carThree = new car(marcas[Alet3],modelo[Alet2],annio[Alet1],colores[Alet1]);

console.log(carOne);
console.log(carTwo);
console.log(carThree);

