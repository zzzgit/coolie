import Task from "./Task"
import ITask from "./ITask"
import InnerTask from "./InnerTask"
import AsyncFunc from "../type/AsyncFunc"
import parallel from "../function/parallel"

class ConcurrentTask implements ITask {
	private readonly _gen: Generator<ITask, void, boolean>

	private readonly _threads: number


	constructor(asyncFuncs: AsyncFunc[], threads: number) {
		const tasks = asyncFuncs.map(func=> new Task(func))
		const generator = function* (): Generator<ITask, void, boolean> {
			for (const task of tasks) {
				yield task
			}
		}
		this._gen = generator()
		this._threads = threads
	}

	execute(): Promise<any> {
		const task_arr = []
		const threads_int = this._threads
		for (let i = 0; i < threads_int; i++) {
			const task = new InnerTask(this._gen)
			task_arr.push(task)
		}
		const wrapper = parallel(task_arr)
		return wrapper.execute(undefined)
	}
}


export default ConcurrentTask
