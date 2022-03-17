const symbols: {[key: string]: unique symbol} = {
	PromiseState: Symbol(),
	PromiseResult: Symbol(),
	PromiseReason: Symbol(),
}

export default symbols
