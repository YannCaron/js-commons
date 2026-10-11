import test from 'node:test'
import assert from 'node:assert/strict'
import StringBuilder from '../../src/string/StringBuilder.ts'

test('stringBuilder.isEmpty and clear', () => {

	const sb = new StringBuilder()
	assert.strictEqual(sb.isEmpty, true)
	
	sb.append("test")
	assert.strictEqual(sb.isEmpty, false)

	sb.clear()
	assert.strictEqual(sb.isEmpty, true)

})

test('stringBuilder.append and toString', () => {

	const sb = new StringBuilder()
	sb.append('hi')
	assert.strictEqual(sb.toString(), 'hi')

	sb.append(' ')
	assert.strictEqual(sb.toString(), 'hi ')
	
	sb.append('world')
	assert.strictEqual(sb.toString(), 'hi world')
	
	sb.append('!')
	assert.strictEqual(sb.toString(), 'hi world!')

})

test('stringBuilder.first and last', () => {

	const sb = new StringBuilder()
	sb.append('hi')

	sb.append(' ')
	
	sb.append('world')
	
	assert.strictEqual(sb.first, 'hi')
	assert.strictEqual(sb.last, 'world')

})

test('stringBuilder.splice last', () => {

	const sb = new StringBuilder()
	sb.append('t', 'e', 's', 't')
	assert.strictEqual(sb.toString(), 'test')

	sb.splice(2)
	assert.strictEqual(sb.toString(), 'te')
		
	sb.append('s', 't')
	assert.strictEqual(sb.toString(), 'test')

	sb.splice(sb.length - 1)
	assert.strictEqual(sb.toString(), 'tes')
		
	sb.append('t')
	assert.strictEqual(sb.toString(), 'test')

})

test('stringBuilder.repeat', () => {

	const sb = new StringBuilder()
	sb.repeat('g', 7)
	assert.strictEqual(sb.toString(), 'ggggggg')

	sb.clear()
	sb.repeat('g', -1)
	assert.strictEqual(sb.toString(), '')
	
	sb.clear()
	sb.repeat('', 7)
	assert.strictEqual(sb.toString(), '')
		
	sb.clear()
	sb.repeat('g')
	assert.strictEqual(sb.toString(), 'g')

})