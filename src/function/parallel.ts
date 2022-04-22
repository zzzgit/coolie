import ITask from "../model/ITask"
import Task from "../model/Task"

const parallel = (tasks: ITask[]): Task=>{
	const func = function(param:any): Promise<any> {
		const promise = Promise.all(tasks.map(task => task.execute(param)))
		return promise
	}
	return new Task(func)
}


export default parallel
