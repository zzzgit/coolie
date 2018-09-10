let instantHandler = function (coolie) {
	coolie.job()
	coolie.state= Coolie.state.finished
}

class Coolie {
	constructor(setting) {
		// 校驗之
		console.log(setting)
		this.name = setting.name
		this.type = setting.type
		this.job = setting.job
	}
	static run (coolie){
		Coolie.cooliePool.push(coolie)
		Coolie.boost()
	}
	static boost (){
		if(Coolie.isBoosted){
			return null
		}
		Coolie.isBoosted=true
		Coolie.timeout = setTimeout(() => {
			Coolie.cooliePool.forEach(item => {
				if(item.state===Coolie.state.finished){
					return null
				}
				if (item.type === Coolie.type.instant) {
					return instantHandler(item)
				}
			})
		}, 500)
	}
	static shutdown (){
		clearTimeout(Coolie.timeout)
	}
}
Coolie.cooliePool=[]
Coolie.isBoosted=false
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

module.exports = Coolie