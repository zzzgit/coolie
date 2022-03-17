import defaults from "./defaults"
import IPromise from "./IPromise"
import onFinally from "./onFinally"
import onFulfilled from "./onFulfilled"
import onRejected from "./onRejected"
import PromiseState from "./PromiseState"

class Ngaise<type> implements IPromise<type> {
	private state = "PENDING"


	private result: type|undefined = undefined

	private reason: type| undefined = undefined

	constructor() {
		console.log(2)
		//
	}

	catch(onrejected?: onRejected<type> | null): IPromise<type> {
		return this.then(undefined, onrejected)
	}

	finally(onfinally?: onFinally | null): IPromise<type> {
		onfinally = onfinally || defaults.onFinally
		onfinally()
		const prom = new Ngaise<type>()
		prom.state = this.state
		prom.reason = this.reason
		return prom
	}

	then(onfulfilled?: onFulfilled<type> | null, onrejected?: onRejected<type> | null): IPromise<type> {
		onfulfilled = onfulfilled || defaults.onFulfilled
		onrejected = onrejected || defaults.onRejected
		if (this.state == PromiseState.PENDING) {
			return undefined
		}
		let returned
		if (this.state == PromiseState.REJECTED) {
			returned = onrejected(this.reason as type)
		}
		if (this.state == PromiseState.FULFILLED) {
			returned = onfulfilled(this.result)
		}
		if (returned instanceof Ngaise) {
			return returned
		}
		const prom = new Ngaise<type>()
		prom.state = PromiseState.FULFILLED
		prom.result = returned as type
		return prom
	}
}

export default Ngaise
