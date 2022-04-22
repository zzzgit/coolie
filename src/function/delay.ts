import ISubscribable from "../model/ISubscribable"
import ITask from "../model/ITask"
import Task from "../model/Task"
import AsyncFunc from "../type/AsyncFunc"
import resolveInTime from "../util/resolveInTime"


const delay = (task: ITask, milliSecond: number): Task=>{
	const sleep = resolveInTime(milliSecond)
	const func: AsyncFunc = async function(that: ISubscribable, init: any): Promise<any> {
		that.emit(`delay:begin`)
		await sleep
		that.emit(`delay:due`)
		return task.execute(init)
	}
	return new Task(func)
}

export default delay
