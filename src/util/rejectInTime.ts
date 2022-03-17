const rejectInTime = (milliSecond:number): Promise<any>=>{
	return new Promise((resolve, reject) => {
		setTimeout(() => reject(new Error("rejected due to time out")), milliSecond)
	})
}

export default rejectInTime
