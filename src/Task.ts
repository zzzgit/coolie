interface Task {
	run(task: Task): Promise<any>
	done: boolean
	retriedTimes: number
	retry: Function
	promise: Promise<any>
}

export default Task
