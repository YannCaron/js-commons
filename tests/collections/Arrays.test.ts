import test from 'node:test'
import assert from 'node:assert/strict'
import "../../src/collections/Arrays.ts"

test('array.isEmpty', () => {

    const array = new Array<number>()
    assert.strictEqual(array.isEmpty, true)

    array.push(0)
    assert.strictEqual(array.isEmpty, false)

    array.pop()
    assert.strictEqual(array.isEmpty, true)

})

test('array.first', () => {

    const array = new Array()

    assert.strictEqual(array.first, undefined)

    array.push(0)
    assert.strictEqual(array.first, 0)

    array.push(1)
    array.push(2)
    assert.strictEqual(array.first, 0)

    array.clear()
    assert.strictEqual(array.first, undefined)

})

test('array.last', () => {

    const array = new Array()

    assert.strictEqual(array.last, undefined)

    array.push(0)
    assert.strictEqual(array.last, 0)

    array.push(1)
    array.push(2)
    assert.strictEqual(array.last, 2)

    array.clear()
    assert.strictEqual(array.last, undefined)

})

test('array.pushAll() simple', () => {

    const array = new Array<Number>()

    array.pushAll(2, 1, 0)
    assert.strictEqual(array.length, 3)

    assert.strictEqual(array[0], 2)
    assert.strictEqual(array[1], 1)
    assert.strictEqual(array[2], 0)

})

test('array.pushAll() from mixed', () => {

    const array = new Array()

    array.pushAll([0, 1], 2)
    assert.strictEqual(array.length, 2)

    assert.deepStrictEqual(array[0], [0, 1])
    assert.strictEqual(array[1], 2)

})

test('array.clear()', () => {

    const array = new Array()

    array.push(0)
    array.push(1)
    array.push(2)
    assert.strictEqual(array.isEmpty, false)

    array.clear()
    assert.strictEqual(array.isEmpty, true)

})

