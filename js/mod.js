let modInfo = {
	name: "The Chiense Tree",
	id: "A6TCT",
	author: "nobody",
	pointsName: "points",
	modFiles: ["layers.js", "tree.js"],

	discordName: "Stuff Discord's Server!",
	discordLink: "https://discord.gg/WbQhM2j8",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 6666,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "1.0.0",
	name: "Start",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v1.0.0 - Start</h3><br>
		- Added 2 Layers.<br>
		- Added 26 Upgrades<br>
    - Added 3 Milestones<br>
    - Game Released at going when?<br>
    - Endgame at Competed All Milestones.`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
  if (hasUpgrade('chione', 11)) gain = gain.times(upgradeEffect('chione', 11))
  if (hasUpgrade('chione', 12)) gain = gain.times(upgradeEffect('chione', 12))
  if (hasUpgrade('chione', 14)) gain = gain.times(upgradeEffect('chione', 14))
  if (hasUpgrade('chione', 17)) gain = gain.times(upgradeEffect('chione', 17))
  if (hasUpgrade('chione', 18)) gain = gain.times(upgradeEffect('chione', 18))
  if (hasUpgrade('chione', 19)) gain = gain.times(upgradeEffect('chione', 19))
  if (hasUpgrade('chione', 22)) gain = gain.times(upgradeEffect('chione', 22))
  if (hasUpgrade('chione', 23)) gain = gain.times(upgradeEffect('chione', 23))
  if (hasUpgrade('chione', 24)) gain = gain.times(upgradeEffect('chione', 24))
  if (hasUpgrade('chione', 25)) gain = gain.times(upgradeEffect('chione', 25))
  if (hasUpgrade('chione', 26)) gain = gain.times(upgradeEffect('chione', 26))
  if (hasUpgrade('chione', 27)) gain = gain.times(upgradeEffect('chione', 27))
  if (hasUpgrade('chione', 29)) gain = gain.times(upgradeEffect('chione', 29))
  if (hasUpgrade('chitwo', 11)) gain = gain.times(upgradeEffect('chitwo', 11))
  if (hasUpgrade('chitwo', 13)) gain = gain.times(player.chitwo.points.sqrt())
  if (hasUpgrade('chitwo', 14)) gain = gain.times(3)
  if (hasUpgrade('chitwo', 15)) gain = gain.times(new Decimal(100).log2())
  if (hasUpgrade('chitwo', 16)) gain = gain.times(new Decimal(100).log2())
  if (hasMilestone("chitwo", 0)) gain = gain.times(3)
  if (hasMilestone("chitwo", 1)) gain = gain.times(new Decimal(10).log2())
  if (hasMilestone("chitwo", 2)) gain = gain.times(3)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return hasMilestone("chitwo", 2)
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3.141 * 1e5) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}