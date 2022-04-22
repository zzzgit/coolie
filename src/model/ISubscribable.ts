import EventEmitter from "eventemitter3"

interface ISubscribable {
	on(event: string, fn: (...args: any[]) => void): EventEmitter<string | symbol, any>
	off(event: string, fn?: ((...args: any[]) => void) | undefined, context?: any, once?: boolean | undefined): EventEmitter<string | symbol, any>
	once(event: string | symbol, fn: (...args: any[]) => void, context?: any): EventEmitter<string | symbol, any>
	emit<T>(event: T, ...args: any[]): boolean
	eventNames(): (string | symbol)[]
	listenerCount(event: string | symbol): number
	removeAllListeners(event?: string | symbol | undefined): EventEmitter<string | symbol, any>

}

export default ISubscribable
