import ISubscribable from "../model/ISubscribable"
import ITask from "../model/ITask"
import Task from "../model/Task"
import AsyncFunc from "../type/AsyncFunc"
import rejectInTime from "../util/rejectInTime"


const inTime = (task: ITask, milliSecond: number): Task=>{
	let timeout = rejectInTime(milliSecond)
	const func:AsyncFunc = function(that: ISubscribable, init: any): Promise<any> {
		timeout = timeout.catch((e) => {
			that.emit(`timeout`)
			throw e
		})
		return Promise.race([timeout, task.execute(init)])
	}
	return new Task(func)
}

export default inTime
