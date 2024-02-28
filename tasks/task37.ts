// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message 

// that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 

// and a shirt of any size with a different message.


function make_shirt_37(size:string="Large",text:string="I LOVE TYPESCRIPT"):void{
    console.log(`THE SIZE OF SHIRT IS ${size} \n THE MESSAGE TO  BE PRINTED ON THE SHIRT IS...\n\t \"${text}\"`);
}

make_shirt_37();

make_shirt_37("Medium","I love  Javascript");