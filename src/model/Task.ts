import ITask from "./ITask"
import AsyncFunc from "../type/AsyncFunc"
import Subscribable from "./Subscribable"

class Task extends Subscribable implements ITask {
	private _executor: AsyncFunc


	constructor(asyncFunc: AsyncFunc) {
		super()
		this._executor = asyncFunc
	}

	execute(param : any): Promise<any> {
		return this._executor(this, param)
	}
}


export default Task

