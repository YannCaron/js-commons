export default class Stack<T = any> extends Array<T> {

	peek() : T {
		return this[this.length - 1]
	}
	
}
