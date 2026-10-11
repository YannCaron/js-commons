import test from 'node:test'
import assert from 'node:assert/strict'
import "../../src/string/String.ts"

test('String capitalizeFirstLetter', () => {

	assert.strictEqual('hi'.capitalizeFirstLetter(), 'Hi')

	assert.strictEqual('Hi'.capitalizeFirstLetter(), 'Hi')

	assert.strictEqual(''.capitalizeFirstLetter(), '')

	assert.strictEqual('123'.capitalizeFirstLetter(), '123')

})
