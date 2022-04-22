import ITask from "../model/ITask"
import Task from "../model/Task"


const series = (tasks: ITask[]): Task=>{
	const func = function(init: any): Promise<any> {
		let current = Promise.resolve(init)
		tasks.forEach((task) => {
			current = current.then((result: any) => task.execute(result))
		})
		return current
	}
	return new Task(func)
}


export default series
