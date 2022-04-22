import ISubscribable from "../model/ISubscribable"
import ITask from "../model/ITask"
import Task from "../model/Task"
import AsyncFunc from "../type/AsyncFunc"


const retry = (task: ITask, times: number): Task=>{
	const func:AsyncFunc = function(that: ISubscribable, init: any): Promise<any> {
		let current = task.execute(init)
		for (let i = 1; i < times; i++) { // 從1開始
			current = current.catch(() => {
				that.emit(`retry`, i)
				return task.execute(init)
			})
		}
		return current
	}
	return new Task(func)
}

export default retry
