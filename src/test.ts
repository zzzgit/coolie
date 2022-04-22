
import retry from "./function/retry"
import series from "./function/series"
import ISubscribable from "./model/ISubscribable"
import Task from "./model/Task"

const func = (that: ISubscribable, init:number):Promise<number>=>{
	console.log(2 + init)
	return Promise.resolve(init + 2)
}
const func2 = async (that: ISubscribable, init: number):Promise<number>=>{
	console.log(4 + init)
	return 4 + init
}

const abc = new Task(func)
const bbb = new Task(func2)

const ser = series([bbb, abc])
ser.execute(1).then(result =>console.log(result))
	.catch(e=>console.log(e))


let al = 0
const kkkkkkk = (that: ISubscribable, init: number): Promise<number> => {
	al = al + init
	console.log("step:", al)
	if (al > 10) {
		return Promise.resolve(al + 2)
	}
	return Promise.reject(new Error("err2or:" + al))
}

const t = new Task(kkkkkkk)

const realTask = retry(t, 12)
realTask.on("retry", time=>console.log(2, time))
realTask.execute(2)
