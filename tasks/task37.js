// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message 
// that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
// and a shirt of any size with a different message.
function make_shirt_37(size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I LOVE TYPESCRIPT"; }
    console.log("THE SIZE OF SHIRT IS ".concat(size, " \n THE MESSAGE TO  BE PRINTED ON THE SHIRT IS...\n\t \"").concat(text, "\""));
}
make_shirt_37();
make_shirt_37("Medium", "I love  Javascript");
