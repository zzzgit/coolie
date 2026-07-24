import {createMachine, interpret} from 'xstate'

const promiseMachine =
/** @xstate-layout N4IgpgJg5mDOIC5QAcBOB7AtgS1mAdMmAHYTbFQDEASgKIDKA8gDIBqtiK6s2ALtumKcQAD0QBaAIwAmAAz5JANkkAWRbMUBWTZNkBOSQBoQATwl7F+fSoAcAZkXTFilbJ2SAvh+NosuAkSk5FR0AFK0AMIAKsLI3HwCQkiiEjLySqrqWjr6RqYStlZ6tnYA7NK6NpqOpV7eIMToEHCxGDh4hCRkFLHx-ILCYgjicpr4Nkoq0jYGijbSpVXGZsM2lrJ2BuWKpcp2GnpePm3++Khw6AA2AG6QvTz9SaBD8nPSTnruKkqadtXL5nkTkkdlcLlsNgORxAvnaBHOACswABjXh3ZJxB6JQaIV7zD5fH5-RQA4ZTfDA0GSTQzOx2SRVaGw-z3BIDZJDEbSPTjSbTWbzRaaUlSRQ86xVEGlXbSBw2OoeIA */
createMachine({
	id: "promise",
	initial: "pending",
	states: {
		pending: {
			on: {
				RESOLVE: {
					target: "resolved",
				},
				REJECT: {
					target: "rejected",
				},
			},
		},
		resolved: {
			type: "final",
		},
		rejected: {
			type: "final",
		},
	},
})
const promiseService = interpret(promiseMachine).onTransition(state =>
	console.log(state.value),
)

// Start the service
promiseService.start()
// => 'pending'

promiseService.send({type: 'RESOLVE'})
