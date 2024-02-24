import "../../src/collections/Arrays"
import Queue from "../../src/collections/Queue"

test('queue.isEmpty', () => {

	const queue = new Queue()
	expect(queue.isEmpty).toBe(true)

	queue.enqueue(0)
	expect(queue.isEmpty).toBe(false)

	queue.dequeue()
	expect(queue.isEmpty).toBe(true)

})

test('queue.clear()', () => {

	const queue = new Queue()

	queue.enqueue(0)
	queue.enqueue(1)
	queue.enqueue(2)
	expect(queue.isEmpty).toBe(false)

	queue.clear()
	expect(queue.isEmpty).toBe(true)

})

test('queue.peek()', () => {

	const queue = new Queue()

	queue.enqueue(0)
	expect(queue.peek()).toBe(0)
	queue.enqueue(1)
	expect(queue.peek()).toBe(0)
	queue.enqueue(2)
	expect(queue.peek()).toBe(0)

	queue.clear()
	expect(queue.peek()).toBe(undefined)

})

test('queue.enqueueAll()', () => {

	const queue = new Queue()

	queue.enqueueAll([0, 1, 2])
	expect(queue.dequeue()).toBe(0)
	expect(queue.dequeue()).toBe(1)
	expect(queue.dequeue()).toBe(2)

	expect(queue.isEmpty).toBe(true)

})
