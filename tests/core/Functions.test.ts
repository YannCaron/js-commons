import test from 'node:test'
import assert from 'node:assert/strict'
import "../../src/collections/Arrays.ts"
import Functions from "../../src/core/Functions.ts"

const lambda = (
    a: string,
    b: string,
    c: string,
    ...d: string[]) => { console.log(a, b, c, d); }

test('Functions.extractArguments', () => {

    assert.deepStrictEqual(Functions.extractArguments(lambda), ['a', 'b', 'c', '...d'])

    assert.strictEqual(Functions.extractArguments(lambda).last, '...d')

    assert.deepStrictEqual(Functions.extractArguments(
        (a: string) => { console.log(a); }),
        ['a'])

    assert.deepStrictEqual(Functions.extractArguments(
        (a: string) => a),
        ['a'])

    assert.deepStrictEqual(Functions.extractArguments(
        function () { }),
        [])

    assert.deepStrictEqual(Functions.extractArguments(
        function (a: string, b: string, ...c: string[]) { console.log(a, b, c); }),
        ['a', 'b', '...c'])

})

test('Functions.hasRestArgument', () => {

    assert.strictEqual(Functions.hasRestArgument(
        Functions.extractArguments(lambda).last),
        true)

    assert.strictEqual(Functions.hasRestArgument(
        Functions.extractArguments((a: number) => a).last),
        false)

    assert.strictEqual(Functions.hasRestArgument(
        Functions.extractArguments(lambda)),
        true)

    assert.strictEqual(Functions.hasRestArgument(
        Functions.extractArguments((a: number) => a)),
        false)

})

test('Functions.hasRestArgument with empty arguments', () => {

    assert.strictEqual(Functions.hasRestArgument([]), false)
    assert.strictEqual(Functions.hasRestArgument(Functions.extractArguments(() => {})), false)

})

