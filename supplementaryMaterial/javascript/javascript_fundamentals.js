// Tier 1: Fundamentals and Initial Deployment

// Define Motoko's cyberbrain firmware version using a
// variable that cannot be reassigned. Define her current
// target coordinates using a variable that might change
// during the mission.

const motoko_fimware_version = 2.2;
let target_latitude = 182800;
let target_longitude = 660621;

// Construct a status report string for Aramaki: "Agent [Agent
// Name] is deployed at Sector [Sector Number]. Currents
// threat level: [Level]. " Use template literals for interpolation.

const agent = "Aramaki";
const sector = 9;
const threatLevel = "Red";
const statusReport = `Agent ${agent} is deployed at Sector ${sector}. Current threat level: ${threatLevel}`;

console.log(statusReport);
