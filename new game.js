var user = Number(
    prompt("Opciones: 1-piedra 2-papel 3-tijera")
);

var machine = Math.floor(Math.random() * (4-1)) + 1;

switch (user, machine){
    
    case user === 1 && machine === 3:
        console.log("User win!")
        break;
    case user === 2 && machine === 1:
        console.log("Usuario gano !")
        break;
    case user === 3 && machine === 2:
        console.log(" gano!")
        break;
    case user === machine:
        console.log("Draw")
        break;
    default:
        console.log("Machine win!")
}