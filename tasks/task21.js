// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var Car = /** @class */ (function () {
    function Car(name, model, manufacturer) {
        this.name = name;
        this.model = model;
        this.manufacturar = manufacturer;
    }
    Car.prototype.display = function () {
        console.log("NAME:".concat(this.name, " \n Model:").concat(this.model, " \n Manufacturar: ").concat(this.manufacturar));
    };
    return Car;
}());
var honda = new Car("Civic", 2077, "Honda");
var bike = new Car("cd-70", 2055, "Honda");
honda.display();
bike.display();
