function auto (MARCA, MODELO, ANNIO){
  this.marca = MARCA;
  this.modelo = MODELO;
  this.annio = ANNIO;
}
var cantidadAutos = prompt("Ingrese cantidad de autos a listar");
var autos = [];
for(var i = 0 ; i < cantidadAutos ; i++){
  var marca = prompt("Ingresa la marca del auto N°" + Number(i+1) + ":");
  var modelo = prompt("Ingresa el modelo del auto N°" + Number(i+1) + ":");
  var annio = prompt("Ingresa el año del auto N°" + Number(i+1) + ":");
  autos.push(new auto (marca, modelo, annio));
}

for(var i = 0 ; i < autos.length ; i++){
  console.log(autos[i]);
}