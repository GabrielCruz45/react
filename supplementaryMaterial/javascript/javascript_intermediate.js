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



// Object map() in JSX context
// You have an array of agent objects [{id: 1, name:
// 'Motoko'}, {id: 2, name: 'Batou'}]. Use map() to transform
// this into an array of strings like ['<li>Motoko (ID: 1)</li>', '<li>Batou (ID: 2)</li>'].
const agents = [{id: 1, name: 'Motoko'}, {id: 2, name: 'Batou'}];
const agents_strings = agents.map(agent => `<li>${agent.name} (ID: ${agent.id})</li>`);
console.log(agents_strings);



// Array Filter
// Filter the agentRoster array of objects to create a new
// array containing only agents whose securityLevel is
// greater than or equal to 7.
const agentRoster = [
  {
    name: "Motoko Kusanagi",
    securityLevel: 10,
    cyberbrainConnected: true,
    id: 1
},
{
    name: "Batou",
    securityLevel: 9,
    cyberbrainConnected: true,
    id: 2
},
{
    name: "Togusa",
    securityLevel: 6,
    cyberbrainConnected: false,
    id: 3
},
{
    name: "Aramaki",
    securityLevel: 8,
    cyberbrainConnected: true,
    id: 4
},
{
    name: "Ishikawa",
    securityLevel: 7,
    cyberbrainConnected: true,
    id: 5
},
{
    name: "Borma",
    securityLevel: 5, 
    cyberbrainConnected: true,
    id: 6
},
{
    name: "Saito",
    securityLevel: 8,
    cyberbrainConnected: false,
    id: 7
},
];

const classifiedClearance_levelSeven = agentRoster.filter(agent => agent.securityLevel >= 7);
console.log(classifiedClearance_levelSeven);

// Filtering (Immutability)
// Create a function removeAgent(roster, agentId) that
// uses filter() to remove an agent without modifying the
// original roster array.

function removeAgent(roster, agentId) {
    return roster.filter(agent => agent.id !== agentId);
};

const filtered_roster = removeAgent(agentRoster, 7);
console.log(filtered_roster);



// Array Reduce() (summing)
// Calculate the total damage potential by summing the
// attackValue property across all objects in the
// weaponInventory array.
const weaponInventory = [
  {
    name: "Seburo M-5 (Modified)",
    attackValue: 120,
    owner: "Motoko Kusanagi",
  },
  {
    name: "H-CWS (Heavy Cybernetic Weapon System)",
    attackValue: 250,
    owner: "Batou",
  },
  {
    name: "Togusa's Revolver (M15-A1)",
    attackValue: 75,
    owner: "Togusa",
  },
  {
    name: "Digital Cloaking System",
    attackValue: 0, // Cloaking provides no direct attack value
    owner: "Motoko Kusanagi",
  },
  {
    name: "Sniper Rifle (Customized Anti-Cyber)",
    attackValue: 180,
    owner: "Saito",
  },
  {
    name: "Seburo MN-23 Submachine Gun",
    attackValue: 95,
    owner: "Ishikawa",
  },
  {
    name: "Tactical Grenades (Set of 4)",
    attackValue: 140,
    owner: "Batou",
  },
];

const initialValue = 0;
const sumWithInitial = weaponInventory.reduce(
    (accumulator, currentValue) => accumulator + currentValue.attackValue, initialValue,
);

console.log(sumWithInitial);




// Array Reduce() (Tallying-Grouping)
// Use reduce() on the logEntries array to count how many
// entries have the status: 'Error'.
const logEntries = [
  { id: 1001, timestamp: "2077-10-01T08:00:00Z", status: "Success", component: "Cyberbrain Mesh" },
  { id: 1002, timestamp: "2077-10-01T08:01:15Z", status: "Warning", component: "Tachikoma I/O" },
  { id: 1003, timestamp: "2077-10-01T08:02:30Z", status: "Error", component: "Weapon System Link" },
  { id: 1004, timestamp: "2077-10-01T08:03:45Z", status: "Success", component: "Aramaki Comms" },
  { id: 1005, timestamp: "2077-10-01T08:05:00Z", status: "Success", component: "Batou Eye Optics" },
  { id: 1006, timestamp: "2077-10-01T08:06:15Z", status: "Error", component: "Deep Dive Protocol" },
  { id: 1007, timestamp: "2077-10-01T08:07:30Z", status: "Warning", component: "Public Net Gateway" },
  { id: 1008, timestamp: "2077-10-01T08:08:45Z", status: "Success", component: "Motoko Proxy" },
  { id: 1009, timestamp: "2077-10-01T08:10:00Z", status: "Error", component: "Hanka Server Farm" },
  { id: 1010, timestamp: "2077-10-01T08:11:15Z", status: "Success", component: "Togusa Sidearm Check" },
  { id: 1011, timestamp: "2077-10-01T08:12:30Z", status: "Success", component: "Ishikawa Recon" },
  { id: 1012, timestamp: "2077-10-01T08:13:45Z", status: "Error", component: "Firewall Integrity" },
  { id: 1013, timestamp: "2077-10-01T08:15:00Z", status: "Warning", component: "Saito Scope Calibration" },
  { id: 1014, timestamp: "2077-10-01T08:16:15Z", status: "Success", component: "Motoko Proxy" },
  { id: 1015, timestamp: "2077-10-01T08:17:30Z", status: "Success", component: "Batou Eye Optics" },
  { id: 1016, timestamp: "2077-10-01T08:18:45Z", status: "Error", component: "Cyberbrain Mesh" },
  { id: 1017, timestamp: "2077-10-01T08:20:00Z", status: "Warning", component: "Tachikoma I/O" },
  { id: 1018, timestamp: "2077-10-01T08:21:15Z", status: "Success", component: "Aramaki Comms" },
  { id: 1019, timestamp: "2077-10-01T08:22:30Z", status: "Error", component: "Public Net Gateway" },
  { id: 1020, timestamp: "2077-10-01T08:23:45Z", status: "Success", component: "Weapon System Link" },
  { id: 1021, timestamp: "2077-10-01T08:25:00Z", status: "Warning", component: "Deep Dive Protocol" },
  { id: 1022, timestamp: "2077-10-01T08:26:15Z", status: "Error", component: "Hanka Server Farm" },
];


const initialValue_two = 0;
const sumWithInitial_two = logEntries.reduce(
    (accumulator, currentValue) => {
        if (currentValue.status === "Error") {
            return accumulator += 1;
        }
        else {
            return accumulator;
        };
    }, initialValue,
);

console.log(sumWithInitial_two);