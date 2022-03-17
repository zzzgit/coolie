import EventEmitter from "eventemitter3"
import ITask from "../model/ITask"
import Task from "../model/Task"


const retry = (task: ITask, times: number): Task=>{
	const func = (init: any, emitter: EventEmitter): Promise<any>=> {
		let current = task.execute(init)
		for (let i = 1; i < times; i++) { // 從1開始
			current = current.catch(() => {
				emitter.emit(`retry`, i)
				return task.execute(init)
			})
		}
		return current
	}
	return new Task(func)
}

export default retry
