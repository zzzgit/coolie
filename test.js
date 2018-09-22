const coolie = require("./index.js")
const Schedule = coolie.Schedule

coolie.schedule(() => console.log("開干2"), Schedule.delay("2s").name("foo"))
//coolie.cancel("foo")
coolie.run()

