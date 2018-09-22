const Schedule = require("./Schedule")


class Coolie {
	constructor(setting) {
		// 校驗之
		console.log(setting)
		this.name = setting.name
		this.type = setting.type
		this.job = setting.job
	}
	static schedule(task, schedule) {
		Coolie.mapppp[schedule.name] = () => {
			setTimeout(() => {
				task()
			}, schedule.duaration * 1000)
		}
	}
	static run() {
		Coolie.boost()
	}
	static boost() {
		if (Coolie.isBoosted) {
			return null
		}
		Coolie.isBoosted = true
		Coolie.timeout = setTimeout(() => {
			for (let key in Coolie.mapppp){
				let item = Coolie.mapppp[key]
				if (item.state === Coolie.state.finished) {
					return null
				}
				item()
			}
		}, 500)
	}
	static shutdown() {
		clearTimeout(Coolie.timeout)
	}
}
Coolie.mapppp = {}
Coolie.isBoosted = false
Coolie.type = {
	instant: 1,
	timing: 2,
	internal: 3,
	manual: 4
}
Coolie.state = {
	inited: 1,
	putInQuee: 2,
	begun: 3,
	finished: 4
}
Coolie.Schedule = Schedule
module.exports = Coolie
