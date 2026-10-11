import { describe, test } from 'node:test'
import assert from 'node:assert/strict'
import "../../src/collections/Arrays.ts"
import Stack from "../../src/collections/Stack.ts"

describe('basic stack tests', () => {

    test('stack.peek()', () => {

        const stack = new Stack()

        stack.push(0)
        assert.strictEqual(stack.peek(), 0)
        stack.push(1)
        assert.strictEqual(stack.peek(), 1)
        stack.push(2)
        assert.strictEqual(stack.peek(), 2)

        stack.clear()
        assert.strictEqual(stack.peek(), undefined)

    })

})