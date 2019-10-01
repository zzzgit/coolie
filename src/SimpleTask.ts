import Task from "./Task"

class SimpleTask implements Task {
	private _retriedTimes: number = 0
	_pool: Task[];	// it should be a linked list
	public get retriedTimes(): number {
		return this._retriedTimes;
	}
	public set retriedTimes(value: number) {
		throw new Error("not supported")
	}
	retry() {
		this._retriedTimes++
	}
	constructor(payload: Function, pool: Array<Task>) {
		this._pool = pool
		this._promise = payload(this)
	}
	run(task) {
		return Promise.resolve()
	}
	private _done: boolean;
	public get done(): boolean {
		return this._done;
	}
	public set done(value: boolean) {
		if (value === false && this._done === true) {
			throw "new supported 22";
		}
		this._done = value;
		let index = this._pool.indexOf(this)
		this._pool.splice(index, 1)
	}
	private _promise: Promise<any>;
	public get promise(): Promise<any> {
		return this._promise;
	}
	public set promise(value: Promise<any>) {
		throw "new supported 333";
	}


}

// SimpleTask.run

export default SimpleTask
