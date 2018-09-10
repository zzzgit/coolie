let Coolie = require("./index.js")


let setting = {
	name : "aa",
	type: Coolie.type.instant,
	job: ()=>console.log("開干")
}
let aa = new Coolie(setting)
Coolie.run(aa)

setting = {
	name: "aabb",
	type: Coolie.type.instant,
	job: () => console.log("開干2")
}
let bb = new Coolie(setting)
Coolie.run(bb)