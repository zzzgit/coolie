import ITask from "./ITask"

// never be used outside
class InnerTask implements ITask {
	private _gen: Generator<ITask, void, boolean>

	constructor(generator: Generator<ITask, void, boolean>) {
		this._gen = generator
	}

	getTask(): ITask | undefined {
		const next = this._gen.next()
		if (next.done) {
			return undefined
		}
		return next.value
	}


	// 不帶參數
	async execute(): Promise<void> {
		let task = this.getTask()
		while (task) {
			await task.execute()
			task = this.getTask()
		}
		return undefined
	}
}


export default InnerTask

