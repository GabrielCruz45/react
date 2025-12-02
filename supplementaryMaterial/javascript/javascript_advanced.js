// Rest Parameters
// Create a function logMissionDebrief(agent, ...notes) that
// collects an arbitrary number of debriefing notes into a
// single array parameter.
// ...notes -> rest parameter

function logMissionDebrief(agent, ...notes) {
    return {agent, notes: [...notes]};
};

console.log(
    logMissionDebrief(
        "Major Kusanagi", 
        "Section 9 mobilized.", 
        "Primary target apprehended.", 
        "No civilian casualties.")
);


// Closure (counter)
// Create a factory function createTachikomaCounter()
// that returns an inner function. The inner function, when
// called, should increment and return a private Tachikoma
// deployment count, demonstrating a closure.

function createTachikomaCounter() {
    let privateTachikomaCounter = 0;

    return {
        tachikomaDeploymentCount: function () {
            return privateTachikomaCounter += 1;
        },
    };
};

const tachikomaCounter = createTachikomaCounter();
console.log(
    tachikomaCounter.tachikomaDeploymentCount()
);



// Shallow vs. Deep Copy

// Given a nested missionData object, use the spread operator (...) 
// to create a shallow copy. Then, demonstrate a change to a nested property in the copy
// still affects the original. Use JSON.parse(JSON.stringify(obj)) to create a deep copy
// and show that changes are isolated.

// shallow copies are dependent on source | deep copies are independent of source
// const ingredientList = ["noodles", {list : ["eggs", "flour", "water"] }];
// const ingredientListCopy = Array.from(ingredientList);

// ingredientListCopy[1].list = ['rice flour', 'water'];

// console.log(ingredientListCopy);    // [ 'noodles', { list: [ 'rice flour', 'water' ] } ]
// console.log(ingredientList);        // [ 'noodles', { list: [ 'rice flour', 'water' ] } ]


const missionData = {
  id: "Tachikoma-01",
  operation: "Innocence-Retrieval",
  details: {
    target: "Puppet Master",
    location: "Niihama, Japan",
    status: "Preparation",
    team: ["Motoko", "Batou", "Togusa"]
  },
  timestamp: Date.now()
};


// shallow copy
const shallowMissionData = {...missionData};

// change values for check
shallowMissionData['operation'] = "mofon-GO"
shallowMissionData['details']['target'] = "Los Gorditos";

// check if shallow copy
console.log(missionData);
console.log(shallowMissionData);



// deep copy
const deepMissionData = JSON.parse(JSON.stringify(missionData));

// change values for check
deepMissionData['operation'] = "Innocence_Retrieval";
deepMissionData['details']['team'] = [...deepMissionData['details']['team'], "Gabs"];

// check if deep copy
console.log(missionData);
console.log(deepMissionData);



// Promise (Basic)
// Create a new Promise called hologramCheck that
// resolves with the string "Hologram stable" if a random
// number is greater than 0.5, otherwise it rejects with
// "Hologram glitch".






// Promise Chaining
// Chain the hologramCheck promise with a .then() to log
// the success message, and a .catch() to log the error
// message





// Async/Await
// Write an async function runTacticalDeployment() that
// uses await to wait for the resolution of a simulated data
// fetch function (fetchTargetInfo()) before proceeding to
// the next step (logging a "Data processed" message).




// Error Handling (Async)
// Refactor the runTacticalDeployment function to use a
// try...catch block to gracefully handle rejection from
// fetchTargetInfo().







// Module Exports (Conceptual)
// Define a function getPublicSecurityFeed() in a
// conceptual file and use the export default syntax. Show
// how to import it into a main file using a named import.





// this Context (Function vs. Arrow)
// Define a simple class CyberneticAgent with a property
// name and a regular method logName(). Then, define a
// property that is an arrow function logNameArrow = () =>
// {...}. Call both to show how this behaves differently.





// Class Definition (Context)
// Define a class Tachikoma with a constructor that
// accepts serialNumber and a method speak(). Create an
// instance and call the method.



