import IPromise from "./IPromise"

type onRejected<type> = (reason: type) => IPromise<never>


export default onRejected
