// Tier 1: Fundamentals and Initial Deployment



// let vs const
// Define Motoko's cyberbrain firmware version using a
// variable that cannot be reassigned. Define her current
// target coordinates using a variable that might change
// during the mission.
const motoko_fimware_version = 2.2;
let target_latitude = '18°28\'00\"';
let target_longitude = '66°06\'21\"';

const firmware = `Major Motoko Kusanagi Firmware Version: ${motoko_fimware_version}`
const target = `Target coordinates: ${target_latitude} N ${target_longitude} W`

console.log(firmware)
console.log(target)

// Template literals
// Construct a status report string for Aramaki: "Agent [Agent
// Name] is deployed at Sector [Sector Number]. Currents
// threat level: [Level]. " Use template literals for interpolation.
const agent = "Aramaki";
const sector = 9;
const threatLevel = "Red";
const statusReport = `Agent ${agent} is deployed at Sector ${sector}. Current threat level: ${threatLevel}`;

console.log(statusReport);



// Arrow Function
// Create a concise arrow function calculateEnergy that
// accepts powerConsumption and returns powerConsumption
// * 0.95 (accounting for a 5% system loss).
const calculateEnergy = (powerConsumption) => {return powerConsumption * 0.95};
let powerConsumed = 100

console.log(calculateEnergy(powerConsumed));

// Ternary Operator
// Batou is checking equipment. Use a ternary operator to set
// status to "Active" if batteryLevel > 20, otherwise set it to
// "Recharge".

let battery = "Inactive";
let batteryLevel = 100;


const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const checkBattery = async () => {
    while (true) {
        console.log(`Batou: Battery level: ${batteryLevel}`);
        if (batteryLevel > 20) {
            battery = "Active";
            console.log(`Batou: Battery is on "${battery}" mode.`);
        }
        else if (batteryLevel > 0) {
            battery = "Low Battery";
            console.log(`Batou: Battery is in "${battery}" mode.`);
        }
        else {
            battery = "Inactive"
            console.log(`Batou: Battery has no power. It's ${battery}.\n\nRecharging!\n\n`);
            while (batteryLevel < 101) {
                console.log(`Batou: Charging battery! Battery level: ${batteryLevel}\nBattery is in "${battery}" mode.`);
                batteryLevel += 1;
                await sleep(1000);
            };
            console.log(`Batou: Battery has power; recharged!.\n\nIt's ${battery}.\n\n`);
        }
        await sleep(1000);
        batteryLevel -= 1;
    }
};

// checkBattery();

// Block Scoping
// Inside an if block, declare a new variable tempCode using
// let. Demonstrate that this variable is not accessible outside the block.
let variable = true;

if (variable == true) {
    let tempCode = 'Life is temporary. Your definition of yourself is but a glimpse of this universe. Live unbound.';
    console.log(tempCode);
}
else {
    console.log(`Proving the variable ${tempCode} is out of scope in this else block.`);
    // this line outputs `ReferenceError: tempCode is not defined`
}


// Object Access
// Given a Tachikoma object with nested properties for pilot
// and weapons, log the pilot's name (Motoko) and the first weapon's name.
class Tachikoma {
    constructor(pilotName, weaponName){
        this.pilotName = pilotName;
        this.weaponName = weaponName;
    };
};

const motoko = new Tachikoma('Motoko', 'Elbi');
console.log(`Pilot's Name: ${motoko.pilotName} | Weapon's Name: ${motoko.weaponName}`);


// Array Access
// The logFiles array contains three strings. Access and log the
// string at the center index (index 1).



// Function declaration
// Write a named function authenticateAgent(id, password)
// that simply returns true if id is "Major" and password is "Ghost", otherwise false.



// Arrow function
// Write a single-line arrow function isOperational(status) that
// implicitly returns status === 'Ready'.



// Default Parameters
// Create a function deployAgent(name, sector = 'Unknown')
// that uses a default parameter for the sector. Call it once with, and once without, the sector argument.


