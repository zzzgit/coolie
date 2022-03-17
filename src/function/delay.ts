import EventEmitter from "eventemitter3"
import ITask from "../model/ITask"
import Task from "../model/Task"
import resolveInTime from "../util/resolveInTime"


const delay = (task: ITask, milliSecond: number): Task=>{
	const sleep = resolveInTime(milliSecond)
	const func = async (init: any, emitter: EventEmitter): Promise<any> =>{
		emitter.emit(`delay:begin`)
		await sleep
		emitter.emit(`delay:due`)
		return task.execute(init)
	}
	return new Task(func)
}

export default delay

