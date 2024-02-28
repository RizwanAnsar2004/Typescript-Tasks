// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

class Car{
    name:string;
    model:Number;
    manufacturar:string;
    constructor(name:string,model:Number,manufacturer:string){
        this.name=name;
        this.model=model;
        this.manufacturar=manufacturer;
    }

     display():void{
        console.log(`NAME:${this.name} \n Model:${this.model} \n Manufacturar: ${this.manufacturar}`);
    }
}


let honda=new Car("Civic",2077,"Honda");
let bike=new Car("cd-70",2055,"Honda");
honda.display();
bike.display();
