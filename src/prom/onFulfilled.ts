import IPromise from "./IPromise"

type onFulfilled<type> = (value: type) => type | IPromise<type>


export default onFulfilled
