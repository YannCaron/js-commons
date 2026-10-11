import test from 'node:test'
import assert from 'node:assert/strict'
import "../../src/collections/Arrays.ts"
import Objects from "../../src/core/Objects.ts"
import StringBuilder from "../../src/string/StringBuilder.ts"

test('Objects.checkAbstractClass', () => {

    class MyAbstract {

        constructor() {
            Objects.checkAbstractClass(MyAbstract, this)
        }

    }

    class MyConcret extends MyAbstract { }

    assert.throws(() => { new MyAbstract() }, TypeError)

    assert.throws(() => { new MyAbstract() }, {
        message: "Cannot implement 'MyAbstract' abstract class!"
    })

    assert.doesNotThrow(() => { new MyConcret() })

})

test('Objects.checkAbstractMethod', () => {

    class MyClassOk {

        constructor() {
            Objects.checkAbstractMethod(this, 'myMethod')
        }

        myMethod():void {} 

    }

    class MyClassNok {

        constructor() {
            Objects.checkAbstractMethod(this, 'myMethod')
        }

    }

    assert.throws(() => { new MyClassNok() }, TypeError)

    assert.throws(() => { new MyClassNok() }, {
        message: "Abstract method 'myMethod' should be implemented in class 'MyClassNok'!"
    })

    assert.doesNotThrow(() => { new MyClassOk() })

})

test('Objects.isObject', () => {

    assert.strictEqual(Objects.isObject({}), true)
    assert.strictEqual(Objects.isObject({a: 0}), true)
    assert.strictEqual(Objects.isObject(StringBuilder), true)
    assert.strictEqual(Objects.isObject(new StringBuilder()), true)
    assert.strictEqual(Objects.isObject([]), true)
    assert.strictEqual(Objects.isObject(new Array<string>()), true)

    assert.strictEqual(Objects.isObject(null), false)
    assert.strictEqual(Objects.isObject(undefined), false)
    assert.strictEqual(Objects.isObject(NaN), false)
    assert.strictEqual(Objects.isObject(Infinity), false)
    assert.strictEqual(Objects.isObject(false), false)
    assert.strictEqual(Objects.isObject(1), false)
    assert.strictEqual(Objects.isObject(""), false)
    assert.strictEqual(Objects.isObject("Object"), false)

})
