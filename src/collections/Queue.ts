export default class Queue<T> extends Array<T> {

	enqueue(val: T) : Queue<T> {
		this.push(val)
        return this
	}

	enqueueAll(entries:T[]) : Queue<T> {
		for (const entry of entries) this.enqueue(entry)
        return this
	}

	dequeue(): T {
		const value = this.shift()
		if (value == undefined) throw new Error(`Cannot dequeue an empty queue!`)
		return value;
	}

	peek() : T {
		return this[0];
	}

	clear() : Queue<T> {
		this.splice(0, this.length);
        return this
	}
    
}