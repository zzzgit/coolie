import delay from "delay"
import Task from "../model/Task"

let globalConfig = null
let allTasksInThePlan: Task[] = []
const executingTasks: Task[] = []

const obj = {
	createSimplePlan(config: any): Promise<any> {
		// validate config
		globalConfig = config
		return new Promise(async (resole, reject) => {
			let next
			while ((next = config.resourceGen.next()) && !next.done) {
				const task = new Task((itself) => {
					// return createPromize(itself)
					return globalConfig.getPromise
				}, executingTasks)
				allTasksInThePlan.push(task)
				executingTasks.push(task)

				// recalculate
				await delay(config.initInterval)
			}
			if (next.done) {
				Promise.all(allTasksInThePlan.map(item => item.promise)).then((arr) => {
					console.log(` complete!`)
					console.log(arr)
					allTasksInThePlan = []
					// resolve(true)
				})
					.catch((e) => {
						throw "new supported 22"
					// reject(e)
					})
				return "clearInterval(hook)"
			}
		})
	},
}

export default obj
