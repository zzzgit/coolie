import EventEmitter from "eventemitter3"
import ITask from "../model/ITask"
import Task from "../model/Task"
import rejectInTime from "../util/rejectInTime"


const inTime = (task: ITask, milliSecond: number): Task=>{
	let timeout = rejectInTime(milliSecond)
	const func = (init: any, emitter: EventEmitter): Promise<any> =>{
		timeout = timeout.catch((e) => {
			emitter.emit(`timeout`)
			throw e
		})
		return Promise.race([timeout, task.execute(init)])
	}
	return new Task(func)
}

export default inTime
