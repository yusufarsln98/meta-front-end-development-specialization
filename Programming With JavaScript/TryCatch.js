function addTwoNumbers(num1, num2) {
    var result = num1 + num2;
    try {
        if (typeof(num1) != 'number' || typeof(num2) != 'number') {
            throw new ReferenceError("Invalid arguments");
        }
        console.log("The result is: " + result);
    }
    catch (err){
        console.log(err);
    }
}

addTwoNumbers(5, "2");
console.log("End of program");

