// Cars: Write a function that stores information about a car in a Object.

//  The function should always receive a manufacturer and a model name. 

// It should then accept an arbitrary number of keyword arguments.

//  Call the function with the required information and two other name-value pairs,

//  such as a color or an optional feature. Print the Object that’s returned to make 

// sure all the information was stored correctly.

function  Gen_car_45(manufacturer:string,model:string,...additional:[string,any][]):object{
    const car={
        manufacturer,
        model,
    }
    for (const [key,value] of additional) {
        car[key]=value;
    }
    return car;
}

const car=Gen_car_45("Honda","Civic",["Color","Red"],["Engine","V-12"]);
const car2=Gen_car_45("Toyota","Supra-MK5",["Color","Red"],["Engine","V-12"]);

console.log(car);
console.log(car2);