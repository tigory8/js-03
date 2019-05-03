let teslaX = {};
teslaX.make = 'Tesla';
teslaX.model = 'X';
teslaX.price = 150000;


function beep() {
    console.log(this.make + ' ' + this.model + ' ' + 'beep-beep');
}

teslaX.beep = beep;

teslaX.beep();

let seatIbiza = {
    make: 'Seat',
    model: 'Ibiza',
    price: 11000,
    beep: beep
};


seatIbiza.beep();

function Car(make, model, price) {
    this.make = make;
    this.model = model;
    this.price = price;
    return this;
};

Car.prototype.beep = beep;

let volkswagenBeetle = new Car('VW', "Beetle", 15000);

volkswagenBeetle.beep();

console.log(volkswagenBeetle);


let zazLanos = Object.create(null);
zazLanos.make = 'Zaz';
zazLanos.model = 'Lanps';
zazLanos.price = 1000;
zazLanos.beep = beep;
zazLanos.beep();

let zazSens = Object.create(zazLanos);
zazSens.model = 'Sens';
zazSens.beep();

const serverData = `{
   "make": "Chevrolet",
   "model": "Corvette",
   "price": 100000
}`;

const chevroletCorvette = JSON.parse(serverData);

const zazLanosSerialized = JSON.stringify(zazLanos);

const zazSensSerialized = JSON.stringify(zazSens);

class SuperCar extends Car{
    constructor(make, model, price) {
        super(make, model, price);
        this.isSuperCar = true;
    }
    nitro() {
        console.log(`Supercar ${this.make} ${this.model} NITRO!!!`)
    }
};

const ferarriLaFerrari = new SuperCar('Ferrari', 'LaFerrari', 300000);

ferarriLaFerrari.beep();
ferarriLaFerrari.nitro();


