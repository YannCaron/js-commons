import { Stack } from "./../../index"

describe('basic stack tests', () => {


    test('stack.peek()', () => {

        const stack = new Stack()

        stack.push(0)
        expect(stack.peek()).toBe(0)
        stack.push(1)
        expect(stack.peek()).toBe(1)
        stack.push(2)
        expect(stack.peek()).toBe(2)

        stack.clear()
        expect(stack.peek()).toBe(undefined)

    })

})