// Cars: Write a function that stores information about a car in a Object.
//  The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments.
//  Call the function with the required information and two other name-value pairs,
//  such as a color or an optional feature. Print the Object that’s returned to make 
// sure all the information was stored correctly.
function Gen_car_45(manufacturer, model) {
    var additional = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additional[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    for (var _a = 0, additional_1 = additional; _a < additional_1.length; _a++) {
        var _b = additional_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
var car = Gen_car_45("Honda", "Civic", ["Color", "Red"], ["Engine", "V-12"]);
var car2 = Gen_car_45("Toyota", "Supra-MK5", ["Color", "Red"], ["Engine", "V-12"]);
console.log(car);
console.log(car2);
