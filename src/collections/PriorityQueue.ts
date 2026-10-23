export default class PriorityQueue<T> {

	private readonly _heap: T[] = []
	private readonly _order: (a: T, b: T) => boolean

	constructor(order: (a: T, b: T) => boolean = (a, b) => a < b) {
		this._order = order
	}

	push(value: T): PriorityQueue<T> {
		let index = this._heap.length
		this._heap.push(value)

		while (index > 0) {
			const parent = Math.floor((index - 1) / 2)
			if (!this._order(value, this._heap[parent])) break

			this._heap[index] = this._heap[parent]
			index = parent
		}
		this._heap[index] = value
		return this
	}

	pop(): T | undefined {
		if (this.isEmpty()) return undefined

		const first = this._heap[0]
		const last = this._heap.pop() as T
		if (this.isEmpty()) return first

		let index = 0
		while (index * 2 + 1 < this._heap.length) {
			let child = index * 2 + 1
			const right = child + 1
			if (right < this._heap.length && this._order(this._heap[right], this._heap[child])) {
				child = right
			}
			if (!this._order(this._heap[child], last)) break

			this._heap[index] = this._heap[child]
			index = child
		}
		this._heap[index] = last
		return first
	}

	peek(): T | undefined {
		return this._heap[0]
	}

	size(): number {
		return this._heap.length
	}

	isEmpty(): boolean {
		return this._heap.length === 0
	}

}
