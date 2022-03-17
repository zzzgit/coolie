const resolveInTime = (milliSecond: number): Promise<any> => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(undefined), milliSecond)
	})
}

export default resolveInTime
