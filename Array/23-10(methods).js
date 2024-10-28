let data=[10,20,21,1210,30,40,50];

// function lessThan30(value)
// {
//     // // return value >= 15 && value < 30;
//     // return value < 30 ;
//     // // return value >= 30;
//     // // retrun value %2 === 1 ;
// }
// console.log(lessThan30);

// let result = data.filter(lessThan30)

// let result = data.filter((value)=>
// {
// //    return value >= 15 && value < 30;
//     // return value < 30 ;
//     // return value >= 30;
//     // return value %2 === 1 ;
// })
// console.log(result);

// console.log(data.every((value)=>{
//     return value <=50;
// }));

// console.log(data.some((value)=>{
//     return value >= 250;
// }));

// console.log(data.indexOf(40));

// console.log(data.indexOf(420));

// console.log(data.includes(50));

// console.log(data.sort((a,b)=>{
//     return a - b; 
// }).reverse());

// console.log(data.sort((a,b)=>{
//     return a - b; 
// }));

// console.log(data.sort((a,b)=>{
//     return a - b; 
// }).reverse().pop());

// console.log(data.join("-"));

// data.forEach((value,index)=>{
//     console.log(index,"=>",value);  
// })

// let result = data.map((value)=>{
//     return value*2;
// });
// console.log(result); //  or
// console.log(data);


































































// +----------------------------------------+--------------------------------------+
// |               forEach                  |                  map                |
// +----------------------------------------+--------------------------------------+
// | 1. Executes a function once for each   | 1. Executes a function once for each |
// |    array element.                      |    array element.                    |
// +----------------------------------------+--------------------------------------+
// | 2. Does not return anything. It always | 2. Returns a new array with the      |
// |    returns `undefined`.                |    results of the applied function.  |
// +----------------------------------------+--------------------------------------+
// | 3. Primarily used for side effects     | 3. Primarily used for transforming   |
// |    (e.g., logging, updating UI, etc.). |    data or creating a new array.     |
// +----------------------------------------+--------------------------------------+
// | 4. Does not create a new array.        | 4. Creates and returns a new array.  |
// |    Operates only on the original array.|                                      |
// +----------------------------------------+--------------------------------------+
// | 5. Cannot be chained with other array  | 5. Can be chained with other array   |
// |    methods (e.g., `.filter()`, 
// | `.reduce()`).                          |   methods, enabling transformations. |
// +----------------------------------------+--------------------------------------+
// | 6. Allows modifying the original array | 6. Does not modify the original      |
// |    if elements are mutated.            |    array. It works on a copy.        |
// +----------------------------------------+--------------------------------------+
// | 7. Does not care about the return value| 7. The function’s return value is    |
// |    from the function callback.         |    important and stored in the new   |
// |                                        |    array.                            |
// +----------------------------------------+--------------------------------------+
// | 8. Synchronous execution: Cannot use   | 8. Can handle async operations if    |
// |    `async/await` in the callback.      |    `async` callback is used.         |
// +----------------------------------------+--------------------------------------+
// | 9. Has better performance when side    | 9. Slightly slower as it creates a   |
// |    effects are needed, as no new array |    new array, especially in large    |
// |    is created.                         |    datasets.                         |
// +----------------------------------------+--------------------------------------+
// | 10. Commonly used when you don’t need  | 10. Commonly used when you need to   |
// |     the original array to be altered.  |     create a new array with modified |
// |                                        |     values.                          |
// +----------------------------------------+--------------------------------------+

