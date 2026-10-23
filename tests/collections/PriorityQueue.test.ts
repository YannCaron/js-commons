import test from 'node:test'
import assert from 'node:assert/strict'
import { PriorityQueue } from '../../index.ts'

test('priorityQueue is empty on construction', () => {

	const queue = new PriorityQueue<number>()
	assert.strictEqual(queue.size(), 0)
	assert.strictEqual(queue.isEmpty(), true)
	assert.strictEqual(queue.peek(), undefined)
	assert.strictEqual(queue.pop(), undefined)
	assert.strictEqual(queue.size(), 0)

})

test('priorityQueue handles a single element and can be reused', () => {

	const queue = new PriorityQueue<number>()
	for (const value of [3, 0, -1]) {
		assert.strictEqual(queue.push(value), queue)
		assert.strictEqual(queue.size(), 1)
		assert.strictEqual(queue.isEmpty(), false)
		assert.strictEqual(queue.peek(), value)
		assert.strictEqual(queue.peek(), value)
		assert.strictEqual(queue.size(), 1)
		assert.strictEqual(queue.pop(), value)
		assert.strictEqual(queue.isEmpty(), true)
		assert.strictEqual(queue.peek(), undefined)
		assert.strictEqual(queue.pop(), undefined)
	}

})

test('priorityQueue pops numbers in ascending order including duplicates', () => {

	for (const values of [
		[7, -2, 4, 0, -2, 9, 1, 3],
		[0, 1, 2, 3, 4, 5, 6],
		[6, 5, 4, 3, 2, 1, 0],
		[2, 2, 2, 2],
	]) {
		const queue = new PriorityQueue<number>()
		for (const value of values) queue.push(value)
		const expected = [...values].sort((a, b) => a - b)

		for (let i = 0; i < expected.length; i++) {
			assert.strictEqual(queue.size(), expected.length - i)
			assert.strictEqual(queue.peek(), expected[i])
			assert.strictEqual(queue.pop(), expected[i])
		}
		assert.strictEqual(queue.isEmpty(), true)
	}

})

test('priorityQueue uses natural string order by default', () => {

	const queue = new PriorityQueue<string>()
	queue.push('charlie').push('alpha').push('bravo')
	assert.strictEqual(queue.pop(), 'alpha')
	assert.strictEqual(queue.pop(), 'bravo')
	assert.strictEqual(queue.pop(), 'charlie')

})

test('priorityQueue accepts a custom order for objects', () => {

	const queue = new PriorityQueue<{ name: string, priority: number }>((a, b) => a.priority < b.priority)
	const low = { name: 'low', priority: 3 }
	const high = { name: 'high', priority: 1 }
	const medium = { name: 'medium', priority: 2 }
	queue.push(low).push(high).push(medium)

	assert.strictEqual(queue.peek(), high)
	assert.strictEqual(queue.pop(), high)
	assert.strictEqual(queue.pop(), medium)
	assert.strictEqual(queue.pop(), low)

})

test('priorityQueue accepts a reversed order', () => {

	const queue = new PriorityQueue<number>((a, b) => a > b)
	for (const value of [3, 1, 5, 2, 5, 4]) queue.push(value)
	assert.deepStrictEqual(Array.from({ length: 6 }, () => queue.pop()), [5, 5, 4, 3, 2, 1])
	assert.strictEqual(queue.isEmpty(), true)

})

test('priorityQueue distinguishes undefined values from an empty queue', () => {

	const queue = new PriorityQueue<number | undefined>((a, b) =>
		a === undefined ? b !== undefined : b !== undefined && a < b)
	queue.push(2).push(undefined).push(1)
	assert.strictEqual(queue.peek(), undefined)
	assert.strictEqual(queue.size(), 3)
	assert.strictEqual(queue.pop(), undefined)
	assert.strictEqual(queue.size(), 2)
	assert.strictEqual(queue.pop(), 1)
	assert.strictEqual(queue.pop(), 2)
	assert.strictEqual(queue.isEmpty(), true)

})

test('priorityQueue matches a sorted reference during mixed pushes and pops', () => {

	const queue = new PriorityQueue<number>()
	const reference: number[] = []
	let state = 12345
	const next = () => {
		state = (Math.imul(state, 1664525) + 1013904223) >>> 0
		return state
	}

	for (let i = 0; i < 1000; i++) {
		if (reference.length === 0 || next() % 3 !== 0) {
			const value = next() % 101 - 50
			queue.push(value)
			reference.push(value)
			reference.sort((a, b) => a - b)
		} else {
			assert.strictEqual(queue.pop(), reference.shift())
		}
		assert.strictEqual(queue.size(), reference.length)
		assert.strictEqual(queue.isEmpty(), reference.length === 0)
		assert.strictEqual(queue.peek(), reference[0])
	}

	while (reference.length > 0) assert.strictEqual(queue.pop(), reference.shift())
	assert.strictEqual(queue.size(), 0)
	assert.strictEqual(queue.isEmpty(), true)

})

test('priorityQueue keeps comparison counts logarithmic', () => {

	let comparisons = 0
	const queue = new PriorityQueue<number>((a, b) => {
		comparisons++
		return a < b
	})

	for (let value = 1024; value > 0; value--) {
		comparisons = 0
		queue.push(value)
		assert.ok(comparisons <= Math.ceil(Math.log2(queue.size())))
	}
	for (let value = 1; value <= 1024; value++) {
		const size = queue.size()
		comparisons = 0
		assert.strictEqual(queue.pop(), value)
		assert.ok(comparisons <= 2 * Math.ceil(Math.log2(size)))
	}

})
