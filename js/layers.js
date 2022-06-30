addLayer("chione", {
    name: "chi 1", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "一", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "U+4E00 points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.49, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('chione', 13)) mult = mult.times(upgradeEffect('chione', 13))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    upgrades: {
       11:{
         title:"Double Point Gain",
         description:"Double your point gain.",
         cost:new Decimal(1),
         effect() {
         eff = new Decimal(2)
         if (hasUpgrade('chione', 15)) eff = eff.times(2.25)
         if (hasUpgrade('chione', 16)) eff = eff.times(2.75)
         return eff
    },
         effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
       },
      12:{
         title:"Sqrt gain",
         description:"square root for gain.",
         cost:new Decimal(4),
         effect() {
         eff = player.chione.points.sqrt()
         return eff
    },
         effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
       },
      13:{
         title:"Sqrt gain",
         description:"square root for U+4E00 point multipler.",
         cost:new Decimal(4),
         effect() {
         eff = player.chione.points.sqrt()
         return eff
    },
         effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
       },
      14:{
         title:"Double Point Gain",
         description:"Double your point gain.",
         cost:new Decimal(1e3),
         effect() {
         eff = new Decimal(5)
         return eff
    },
         effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
       },
      15:{
         title:"Boost effect",
         description:"boost effect gain.",
         cost:new Decimal(5e3),
       },
      16:{
         title:"Boost effect II",
         description:"boost effect gain.",
         cost:new Decimal(1e5),
       },
      17:{
         title:"Log10 gain",
         description:"logratim ten for gain.",
         cost:new Decimal(2e6),
         effect() {
         eff = player.chione.points.log10()
         return eff
    },
         effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
       },
      18:{
         title:"Log10 gain",
         description:"logratim ten for gain.",
         cost:new Decimal(5e7),
         effect() {
         eff = player.chione.points.log10()
         return eff
    },
         effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
       },
      19:{
         title:"Base 2",
         description:"logratim ten for gain and unlock new layer..",
         cost:new Decimal(9e8),
         effect() {
         eff = player.chione.points.log10()
         return eff
    },
         effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
       },
    },
})

addLayer("chione", {
    name: "chi 2", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "丁", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(1e9), // Can be a function that takes requirement increases into account
    resource: "U+4E01 points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.chione.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.49, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('chione', 13)) mult = mult.times(upgradeEffect('chione', 13))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    upgrades: {
       11:{
         title:"Double Point Gain",
         description:"Double your point gain.",
         cost:new Decimal(1),
         effect() {
         eff = new Decimal(2)
         return eff
         },
       },
    },
})
