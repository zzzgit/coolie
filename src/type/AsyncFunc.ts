import ISubscribable from "../model/ISubscribable"

/* eslint-disable @typescript-eslint/no-type-alias */
type AsyncFunc = (that: ISubscribable, init: any) => Promise<any>

export default AsyncFunc
