import EventEmitter from "eventemitter3"

/* eslint-disable @typescript-eslint/no-type-alias */
type AsyncFunc = (init: any, emitter: EventEmitter<string | symbol, any>) => Promise<any>

export default AsyncFunc
