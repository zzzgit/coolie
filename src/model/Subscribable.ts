import * as EventEmitter from "eventemitter3"
import ISubscribable from "./ISubscribable"

type EventCallBack = (...args: any[]) => void

class Subscribable implements ISubscribable {
	private readonly emitter = new EventEmitter()

	getEmitter(): EventEmitter<string | symbol, any> {
		return this.emitter
	}

	off(event: string, fn?: EventCallBack, context?: any, once?: boolean): EventEmitter<string | symbol, any> {
		return this.emitter.off(event, fn, context, once)
	}

	once(event: string | symbol, fn: EventCallBack, context?: any): EventEmitter<string | symbol, any> {
		return this.emitter.once(event, fn, context)
	}

	// emit<T>(event: T, ...args: any[]): boolean {
	// 	return this.emitter.emit(event as unknown as (string | symbol), ...args)
	// }

	eventNames(): (string | symbol)[] {
		return this.emitter.eventNames()
	}

	listenerCount(event: string | symbol): number {
		return this.emitter.listenerCount(event)
	}

	removeAllListeners(event?: string | symbol): EventEmitter<string | symbol, any> {
		return this.removeAllListeners(event)
	}

	on(event: string, fn: EventCallBack): EventEmitter<string | symbol, any> {
		return this.emitter.on(event, fn)
	}
}

export default Subscribable
