import test from 'node:test'
import assert from 'node:assert/strict'
import "../../src/collections/Arrays.ts"
import Queue from "../../src/collections/Queue.ts"

test('queue.isEmpty', () => {

	const queue = new Queue()
	assert.strictEqual(queue.isEmpty, true)

	queue.enqueue(0)
	assert.strictEqual(queue.isEmpty, false)

	queue.dequeue()
	assert.strictEqual(queue.isEmpty, true)

})

test('queue.clear()', () => {

	const queue = new Queue()

	queue.enqueue(0)
	queue.enqueue(1)
	queue.enqueue(2)
	assert.strictEqual(queue.isEmpty, false)

	queue.clear()
	assert.strictEqual(queue.isEmpty, true)

})

test('queue.peek()', () => {

	const queue = new Queue()

	queue.enqueue(0)
	assert.strictEqual(queue.peek(), 0)
	queue.enqueue(1)
	assert.strictEqual(queue.peek(), 0)
	queue.enqueue(2)
	assert.strictEqual(queue.peek(), 0)

	queue.clear()
	assert.strictEqual(queue.peek(), undefined)

})

test('queue.enqueueAll()', () => {

	const queue = new Queue()

	queue.enqueueAll([0, 1, 2])
	assert.strictEqual(queue.dequeue(), 0)
	assert.strictEqual(queue.dequeue(), 1)
	assert.strictEqual(queue.dequeue(), 2)

	assert.strictEqual(queue.isEmpty, true)

})

test('queue.dequeue with undefined value', () => {

	const queue = new Queue<number | undefined>()
	queue.enqueue(undefined)

	assert.strictEqual(queue.isEmpty, false)
	assert.strictEqual(queue.dequeue(), undefined)
	assert.strictEqual(queue.isEmpty, true)

})

