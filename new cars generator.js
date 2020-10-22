var car_list = [];

class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year
    }
}

function make_anew_car() {
    cars = parseInt(prompt("How much cars do you want? type a number."))

    if (typeof cars === "number"){
        for (var i = 0; i < cars; i++){
            brand = prompt("Type the car brand here");
            model = prompt("Type the car model");
            year = parseInt(prompt("Type the year in which the car came out"));
            car_list.push(new Car (brand, model, year));
        }
    }else{
        alert("C'mon brother type a number please");
    }
}

make_anew_car();
console.log(car_list);