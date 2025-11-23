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

let equipment = "Inactive";
let batteryLevel = 100;


const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const deployMicroRobot = async () => {
    console.log("Motoko: Deploying micro robot.");

    await sleep(1000);

    console.log("Togusa: 1 second wait complete.");
};

deployMicroRobot();