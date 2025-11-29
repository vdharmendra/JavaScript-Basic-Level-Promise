// 1. Create a Basic Promise
// Create a promise that resolves after 2 seconds with the message "Promise resolved!".

// const myPromise1 = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         resolve("Hello after 2 second \n Promised Resolved");
//     },2000);
// });

// myPromise1.then((results)=>{
//     console.log(results);
// })
// .catch((error) => {
//     console.log(error);
// });


// 2. Handle Promise with .then()
// Create a promise that resolves with a number (e.g., 100) and use .then() to log the result.

// const myPromise2 = new Promise((resolve, reject) => {
//     resolve(150);
// });
// myPromise2.then((num)=>{
//     console.log(num);
// });


// 3. Handle Rejection with .catch()
// Create a promise that rejects with an error message and handle it using .catch().

// const myPromise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("SOMETHING WENT WRONG");
//     }, 1500);
// });

// myPromise3.then(result => {
//     console.log(result);
// })
// .catch(error => {
//     console.log(error);
// })

// 4. Using .finally()
// Create a promise that resolves after 2 seconds, and use .finally() to log "Promise has been processed" regardless of whether it resolves or rejects.

// const myPromise4 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("Promise Resolve on finally(). FINALLY FUNCTION");
//     },1500);
// });

// myPromise4.then(result => {
//     console.log("Result:",result);
// }).catch(error => {
//     console.log("Error:", error);
// })
// .finally(any => {
//     console.log("Promsie Completed!");
// })


// Promise with Delay
// Write a function that returns a promise that resolves after a given delay in milliseconds.

// const myPromise5 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promised Resolve MILLISECOND");
//     }, 700);
// });

// myPromise5.then(result => {
//     console.log(result);
// }).catch(error => {
//     console.log(error);
// });

// function delay(ms){
//     return new Promise((resolve) => {
//         setTimeout(()=> {
//             resolve(`Resolved after ${ms} ms`)
//         }, ms);
//     });
// }

// delay(1500).then(msg => {
//     console.log(msg);
// });

// function delay(ms){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(`Resolved after ${ms} ms`);
//         }, ms);
//     })
// }

// delay(2000).then(result=>{
//     console.log(result);
// });


// 6. Chaining Promises
// Chain two promises, where the first resolves with a string and the second modifies the string (e.g., ". JS promises").

// myPromise6 = new Promise((resolve, reject) => {
//     resolve(`Promise Resolved`);
// });

// myPromise6.then(str=>{
//     console.log(str, "\n");
//     return str + ` - Modified`;
// })
// .then(modifySTR=>{
//     console.log(`Modify String - `, modifySTR)
// })

// const myPromise7 = new Promise((resolve, reject)=>{
//     resolve(`Promised Resolved`);
// });

// myPromise7.then(str => {
//     console.log(str);
//     return str + " - Modify";
// }).then(modifySTR=>{
//     console.log(`Modify String`, modifySTR);
// });


// const myPromise8 = new Promise((resolve, reject) => {
//     resolve(`Promised Resolved`);
// })

// myPromise8.then(result=>{
//     console.log("First String", result);
//     return result + ` Modify String`
// })
// .then(modifySTR=>{
//     console.log(modifySTR,`This is Modify STRING`);
// })
// .catch(error => {
//     console.log(error);
// });

// Promise.all()
// Use Promise.all() to resolve two promises that each resolve after a delay and log their results when all promises are resolved.

// function delay(ms, value){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(value);
//         }, ms);
//     })
// }
// const myPromise9 = delay(1000, "First Promise Resolved");
// const myPromise10 = delay(2000, "Second Promise Resolved");

// Promise.all([myPromise9, myPromise10])
// .then(results => {
//     console.log("All Promises resolved:", results);    
// })
// .catch(error => {
//     console.log("One of Promise Failed", error);
// })

// Promise.race()
// Create two promises where one resolves quickly, and the other takes longer. Use Promise.race() to log the result of the first promise that resolves.

// function delay(ms, value){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(value);
//         },ms)
//     })
// }

// const myPromise12 = delay(1000, "Fast Promised Resolved");
// const myPromise13 = delay(3000, "slow Promise Resolved");

// Promise.race([myPromise12, myPromise13])
// .then(result => {
//     console.log("First Resolved promise", result);
// })
// .catch(error => {
//     console.log("Error:", error);
// });

// 9. Return a Promise from a Function
// Create a function fetchData() that returns a promise that resolves with a string "Data loaded". Call the function and log the result.

// function fetchData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("Data Loading");
//         }, 1500);
//     });
// }

// fetchData().then(result => {
//     console.log(result)
// })

// Error Handling with catch()
// Create a promise that rejects with an error, then use .catch() to log a custom error message.

// const myPromise14 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("SOMETHING WENT WRONG");
//     }, 1500)
// })

// myPromise14.then(result => {
//     console.log(result);
// }).catch(error => {
//     console.error("Error:", error);
// }).finally(() => console.log("Promise has settled."));

// Chaining with Conditional Logic
// Create a promise that resolves with a number, and use .then() to check if the number is greater than 10. If it is, resolve with "Success", otherwise reject with "Failure".

// const numberPromise = new Promise((resolve, reject) =>{
//     resolve(15);
// });

// numberPromise
// .then(num => {
//     if(num > 10){
//         return "Success"
//     } else {
//         throw "Failer"
//     }
// })
// .then(result => {
//     console.log("Result:", result);
// })
// .catch(error => {
//     console.log("Error:", error);
// });

// Simulate Async Data Fetching
// Simulate fetching data from an API using a promise that resolves with mock data after 1 second.
// function fetchData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const mockData = {
//                 id: 1,
//                 name: "john doe",
//                 email: "john.doe@gmail.com"
//             };
//             resolve(mockData);
//         }, 1500)
//     })
// }

// fetchData()
// .then(data => {
//     console.log("Featch data:", data)
// })
// .catch(error => {
//     console.error("Error fetching data:", error);
// });

// Promise with Nested Logic
// Create a promise chain where each .then() performs an async operation, like fetching mock data, modifying it, and logging the final result.

// function fetchData() {
//     return new Promise((resolve) => {
//         setTimeout(()=>{
//             resolve({ id:1, name: "John Doe", age: 25})
//         }, 1000);
//     });
// }

// function modifyData(data){
//     return new Promise((resolve) => {
//         setTimeout(()=>{
//             data.age += 1;
//             resolve(data);
//         }, 1000);
//     });
// }

// function logData(data){
//     return new Promise((resolve) => {
//         setTimeout(()=>{
//             console.log("Final data:", data);
//             resolve("Done logging");
//         }, 500)
//     });
// }

// fetchData()
// .then(data => {
//     console.log("Fetch data:", data);
//     return modifyData(data);
// })
// .then(message => {
//     console.log(message);
// })
// .catch(error => {
//     console.log("Error:", error);
// });

// Create a Rejected Promise with Reason
// Create a promise that rejects with a specific error message like "Request Failed". Log the error using .catch().

// const myPromise15 = new Promise((resolve, reject) => {
//     reject("Reject Failed");
// });

// myPromise15.catch((error) => {
//     console.log("Error:", error);
// });


// . Use Promise.allSettled()
// Use Promise.allSettled() with an array of promises, some of which resolve and others reject. Log the results of all promises.

// const promises = [
//     Promise.resolve("Success 1"),
//     Promise.reject("Error 1"),
//     Promise.resolve("Success 2"),
//     Promise.reject("Error 2")
// ];

// Promise.allSettled(promises)
// .then((results) => {
//     results.forEach((results, index ) => {
//         if(results.status === "fulfilled"){
//             console.log(`Promise ${index + 1} fulfilled with value:`, results.value);        
//         }else{
//             console.log(`Promsie ${index + 1} reject with reason:`, results.reason);
//         }
//     });
// });


// Simulate an Async Task with setTimeout
// Create a promise using setTimeout() that resolves after a random time between 1 and 5 seconds. Log the result when it resolves.

// function asyncTask() {
//     return new Promise((resolve) => {
//         const delay = Math.floor(Math.random() * 5000) + 2000;

//         setTimeout(() => {
//             resolve(`Task completed after ${delay} ms`);
//         }, delay);
//     });
// }

// asyncTask().then((result) => {
//     console.log(result);
// });


// Promise Chaining with Conditional Logic
// Create a promise that resolves with a number. Chain a .then() to check if the number is even. If it is, resolve with "Even", otherwise resolve with "Odd".

// const numberPromise = new Promise((resolve) => {
//     const num = Math.floor(Math.random() * 100);
//     resolve(num);
// });

// numberPromise
// .then((num)=>{
//     console.log("Number: ", num);
//     if(num % 2 === 0){
//         return "Even";
//     }else{
//         return "odd";
//     }
// })
// .then((result)=>{
//     console.log("Result:", result);
// })
// .catch((error)=>{
//     console.log("Error:", error);
// })


// Creating a Delayed Promise (using setTimeout)
// Write a function fetchData() that returns a promise that resolves after a 3-second delay and logs "Data loaded!".

// function fetchData(){
//     return new Promise((resolve) => {
//         setTimeout(()=>{
//             resolve("Data loaded!");
//         }, 3000);
//     })
// }

// fetchData().then((message) =>{
//     console.log(message);
// });

// ### You can also rewrite it using async/await for a cleaner syntax if desired:
// async function loadData() {
//     const message = await fetchData();
//     console.log(message);
// }
// loadData();


// Chaining Multiple .then() Handlers
// Create a promise that resolves with a number, then chain multiple .then() handlers that each manipulate the number (e.g., doubling, adding, etc.).

// const numberPromsie = new Promise((resolve) =>{
//     resolve(5);
// });

// numberPromsie.then((num) =>{
//     console.log("INITIAL NUMBER:", num);
//     return num * 2;
// })
// .then((num) => {
//     console.log("AFTER DOUBLING:", num);
//     return num + 10;
// })
// .then((num) => {
//     console.log("AFTER ADDING 10:", num);
//     return num / 3;
// })
// .then((num) => {
//     console.log("AFTER DIVIDING BY 3:", num);
    
// })
// .catch((error) => {
//     console.log("Error:", error);
// });


// Timeout Handling in Promises
// Create a promise that simulates a task taking a long time (e.g., 5 seconds). If it takes more than 3 seconds, reject with "Timeout error".

// function longTaskWithTimeout(){
//     return new Promise((resolve, reject) =>{
//         const task = setTimeout(() => {
//             resolve("Task completed!");
//         }, 5000);

//         const timeout = setTimeout(()=>{
//             reject("Timeout error");
//         }, 3000);
//     });
// }

// longTaskWithTimeout()
// .then((msg)=>{
//     console.log(msg);
// })
// .catch((err)=>{
//     console.log(err);
// });


// Error Handling in Promise Chains
// Create a chain of promises where each step can fail. Add a .catch() at the end to handle any error that occurs in the chain.

// function step(value, label){
//     return new Promise((resolve, reject)=>{
//         console.log(`Running step:  ${label} `);

//         const success = Math.random() > 0.3;

//         setTimeout(() => {
//             if(success){
//                 resolve(value + 1);
//             }else{
//                 reject(`Error in step: ${label}`);
//             }
//         }, 1000);
//     })
// }

// step(0, "Step 1")
// .then((result)=>{
//     step(result, "Step 2");
// })
// .then((result) => {
//     step(result, "Step 3");
// })
// .then((finalResult) => {
//     console.log("Final Result: ", finalResult);
// })
// .catch((error)=> {
//     console.log("Catch Error:", error);
// });


// Async-Await Conversion (using async/await)
// Convert a promise-based asynchronous function to use async/await. Handle the resolution and rejection using try/catch.

// ### Original Promise-Based Function

// function FetchData(){
//     return new Promise((resolve, reject) => {
//         const success = Math.random() > 0.3;

//         setTimeout(() => {
//             if(success){
//                 resolve("Data fetched successfully");
//             }else{
//                 reject("Failed to fetch data.");
//             }
//         }, 1000);
//     });
// }
// ## Converted to async/await with try/catch
// async function loadData(){
//     try{
//         const result = await FetchData();
//         console.log(result);
//     }catch(error){
//         console.log("Error:", error);
//     }
// }

// loadData();



// Promise with Multiple .then() Handlers
// Create a promise that resolves with a value. Chain multiple .then() handlers to modify the value at each step (e.g., increment, multiply, etc.) and log the final result.

const myPromise16 = new Promise((resolve)=>{
    resolve(2);
})

myPromise16
.then((value)=>{
    console.log("Step 1 (start):", value);
    return value + 3;
})
.then((value)=>{
    console.log("Step 2 (after +3):", value);
    return value * 4;
})
.then((value)=>{
    console.log("Step 3(after * 4):", value);
    return value - 5;
})
.then((finalValue)=>{
    console.log("Final Value:" , finalValue);
})
.catch((err) => {
    console.log("Error:", err);
});