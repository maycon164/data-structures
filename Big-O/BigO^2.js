const numbers = [1,2,3,4,5];

const percorrerArray = array => {
    array.forEach(a => {
        array.forEach(b => {
            console.log(`Seq: ${a} : ${b}`)
        });
    });
    
};

percorrerArray(numbers)