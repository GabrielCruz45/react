// Object destructing
// Extract the name and rank from the Aramaki object into
// separate variables with a single line of code.
const aramaki = {
    name: 'Aramaki Daisuke',
    birthdate: 1955,
    species: 'Cyborg',
    gender: 'Male',
    hairColor: 'White',
    eyeColor: 'Brown',
    height: 153,
    team: 'Public Security, Sector 9',
    ocuppation: 'Section Chief (Liutenant Colonel)'
};

// const currentYear = new Date("2025-11-26");

let aramakiBirthYear = aramaki.birthdate;
let aramakiName = aramaki.name;
let aramakiSpecies = aramaki.species;
console.log(`| Name: ${aramakiName} | Birth Year: ${aramakiBirthYear} | Species: ${aramakiSpecies} |`);



// Array destructing
// The missionTimeline array has 5 steps. Use array
// destructuring to assign the first step to initialScan and
// the third step to infiltrationPoint.
const missionTimeline = [
    "Initial Cyberbrain Scan", 
    "Firewall Penetration", 
    "Establish Infiltration Point", 
    "Data Extraction", 
    "Clean Exit & Cover Trace"
];
// destruct!!
const [step_one, step_two, step_three, step_four, step_five] = missionTimeline;

console.log(step_three);
console.log(step_four);


// Spread Operator (Array Copy)
// Create a new array newTargets by performing a shallow
// copy of the existing targetList array and adding one new
// target without mutating the original targetList.
const targetList = ["Puppet Master", "Project 2501", "The Laughing Man"];
const newTargets = [...targetList, "The GHOSTLINE"];

console.log(targetList);
console.log(newTargets);





// Spread Operator (Object Merge)
// Merge a TachikomaBase object and a
// TachikomaUpgrades object into a single fullTachikoma
// object.
const TachikomaBase = {
    model: "Tachikoma Type C",
    armament: "11.7mm Gatling",
    ai_level: "Child-like",
    color: "Blue"
};

const TachikomaUpgrades = {
    fuel: "Polymer gel",
    armament: "50mm Grenade Launcher",
    optics: "Multi-Spectrum Sensor",
    color: "Yellow"
};

const fullTachikoma = {...TachikomaBase, ...TachikomaUpgrades};

console.log(fullTachikoma);


// Array Map
// Use map() on the sensorReadings array of numbers to
// generate a new array where each reading is multiplied
// by 1.5 (simulating signal boost).
const sensorReadings = [10, 25, 42, 18, 55];
const sensorReadingsTwo = sensorReadings.map(reading => reading * 1.5);
console.log(sensorReadingsTwo);


// --------------------------------------------------------------------------------









// Object map() in JSX context
// You have an array of agent objects [{id: 1, name:
// 'Motoko'}, {id: 2, name: 'Batou'}]. Use map() to transform
// this into an array of strings like ['<li>Motoko (ID: 1)</li>', '<li>Batou (ID: 2)</li>'].




// Array Filter
// Filter the agentRoster array of objects to create a new
// array containing only agents whose securityLevel is
// greater than or equal to 7.





// Filtering (Immutability)
// Create a function removeAgent(roster, agentId) that
// uses filter() to remove an agent without modifying the
// original roster array.





// Array Reduce() (summing)
// Calculate the total damage potential by summing the
// attackValue property across all objects in the
// weaponInventory array.





// Array Reduce() (Tallying-Grouping)
// Use reduce() on the logEntries array to count how many
// entries have the status: 'Error'.



