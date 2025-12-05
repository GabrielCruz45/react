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
shallowMissionData['details']['target'] = "Los Gorditos"; // this points to the object address and makes the changes there
shallowMissionData['details']['location'] = "Cawas";

// check if shallow copy
console.log(shallowMissionData);
console.log(missionData);



// deep copy
const missionData_two = {
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

const deepMissionData = JSON.parse(JSON.stringify(missionData_two));

// change values for check
deepMissionData['operation'] = "mofon-GO"
deepMissionData['details']['target'] = "Los Gorditos"; // this doesn't point to the object address; original stay's the same
deepMissionData['details']['location'] = "Cawas";


// check if deep copy
console.log(deepMissionData);
console.log(missionData_two);



// Promise (Basic)

// Create a new Promise called hologramCheck that
// resolves with the string "Hologram stable" if a random
// number is greater than 0.5, otherwise it rejects with
// "Hologram glitch".

let hologramCheck = new Promise(function(resolve, reject) {
    let randomNumber = Math.random();
    console.log(randomNumber);

    if (randomNumber > 0.5) {
        resolve("Hologram stable.");
    }
    else {
        reject("Hologram Glitch.");
    }
});

hologramCheck.then (
    function(value) {console.log(value)},
    function(error) {console.log(error)}
);



// Promise Chaining
// Chain the hologramCheck promise with a .then() to log
// the success message, and a .catch() to log the error
// message
hologramCheck.then(value => console.log(value)).catch(error => console.log(error));




// Async/Await
// Write an async function runTacticalDeployment() that
// uses await to wait for the resolution of a simulated data
// fetch function (fetchTargetInfo()) before proceeding to
// the next step (logging a "Data processed" message).

function fetchTargetInfo() {
    return new Promise( 
        (resolve, reject) => {
            let success = false; // simulate success or failure

            setTimeout(() => {
                if (success) {
                    resolve("Data processed");
                }
                else {
                    reject("Data unprocessed!");
                };
            }, 3000);
        }  
    );
};

// async function runTacticalDeployment() {
//     console.log("Fetching data")
//     const resolution = await fetchTargetInfo();
//     console.log(resolution);
// };

// runTacticalDeployment();



// Error Handling (Async)
// Refactor the runTacticalDeployment function to use a
// try...catch block to gracefully handle rejection from
// fetchTargetInfo().

async function runTacticalDeployment() {
    try {
        console.log("Fetching data...");
        const resolution = await fetchTargetInfo();
        console.log(resolution);
    } catch (error) {
        console.error("Couldn't fetch target information.", error);
    }
};


runTacticalDeployment();



// Module Exports (Conceptual)
// Define a function getPublicSecurityFeed() in a
// conceptual file and use the export default syntax. Show
// how to import it into a main file using a named import.

import getPublicSecurityFeed from "./helpers.js";

console.log(getPublicSecurityFeed());


// this Context (Function vs. Arrow)
// Define a simple class CyberneticAgent with a property
// name and a regular method logName(). Then, define a
// property that is an arrow function logNameArrow = () =>
// {...}. Call both to show how this behaves differently.

class CyberneticAgent {
    constructor(name) {
        this.name = name;
    };

    logName() {
        console.log(`Regular : ${this.name}`);
    };
    
    logNameArrow = () => {
        console.log(`Arrow : ${this.name}`);
    };
};

const cyberPsycho = new CyberneticAgent("__g#4-");

cyberPsycho.logName()
cyberPsycho.logNameArrow()

// Class Definition (Context)
// Define a class Tachikoma with a constructor that
// accepts serialNumber and a method speak(). Create an
// instance and call the method.

class Tachikoma {
    constructor(serialNumber) {
        this.serialNumber = serialNumber;
    };

    speak() {
        console.log("Hello...");
    };
};

const tachikoma = new Tachikoma(93847201);

tachikoma.speak();
