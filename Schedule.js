class Schedule {
	constructor(setting) {
		//validate
		for(let key in setting){
			this[key] = setting[key]
		}
	}
	static delay(duaration) {
		//parse
		duaration = +duaration
		return new Schedule({ type: "delay", duaration })
	}
}

module.exports = Schedule
