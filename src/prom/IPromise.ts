import onFinally from "./onFinally"
import onFulfilled from "./onFulfilled"
import onRejected from "./onRejected"

interface IPromise<type>{
	catch(onrejected?: onRejected<type> | null | undefined): IPromise<type>
	finally(onfinally?: onFinally | null | undefined): IPromise<type>
	then(onfulfilled?: onFulfilled<type> | null | undefined, onrejected?: onRejected<type> | null | undefined): IPromise<type>
}

export default IPromise

