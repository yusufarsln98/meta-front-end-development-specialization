{
// For-each with method
    const fruits = ['kiwi','mango','apple','pear'];
    function appendIndex(fruit, index) {
        console.log(`${index}. ${fruit}`)
    }
    fruits.forEach(appendIndex);
}

console.log('\n-------------------------------\n');

{
// For-each with an anonymous method
    const veggies = ['onion', 'garlic', 'potato'];
    veggies.forEach( function(veggie, index) {
        console.log(`${index}. ${veggie}`);
    });
}

console.log('\n-------------------------------\n');

{
    // The filter method
    const nums = [0,10,20,30,40,50];

    let filtered = nums.filter( function(num) {
        return num > 20;
    });
    console.log(filtered);
}

console.log('\n-------------------------------\n');

{
// The map method
    const numbers = [0,10,20,30,40,50];

    let mapped = numbers.map( function(num) {
        return num * 2;
    });
    console.log(mapped);
}

console.log('\n-------------------------------\n');

{
    const result = [];
    const drone = {
        speed: 100,
        color: 'yellow'
    }
    const droneKeys = Object.keys(drone);
    droneKeys.forEach( function(key) {
        // Push, can take more than one parameters
        result.push(key, drone[key])
    })
    console.log(result)
}

console.log('\n-------------------------------\n');

{
// Map
    let bestBoxers = new Map();
    bestBoxers.set(1, "The Champion");
    bestBoxers.set(2, "The Runner-up");
    bestBoxers.set(3, "The third place");

    console.log(bestBoxers);
    console.log(bestBoxers.get(1));

}

console.log('\n-------------------------------\n');

{
// Set
    const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
    const uniqueFruits = new Set(repetitiveFruits);

    console.log(uniqueFruits);
    console.log(repetitiveFruits);

}

console.log('\n-------------------------------\n');

{
// Spread and Rest
    const fruits = ['apple', 'pear', 'plum']
    const berries = ['blueberry', 'strawberry']
    const fruitsAndBerries = [...fruits, ...berries] // concatenate
    console.log(fruitsAndBerries); // outputs a single array

    const fruits1 = ['apples', 'pears']
    const fruits2 = [...fruits]
    fruits1.pop()
    console.log(fruits1, "not", fruits2)
}


