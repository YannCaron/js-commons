import "../../src/collections/Arrays"
import Objects from "../../src/core/Objects"
import StringBuilder from "../../src/string/StringBuilder"

test('Objects.checkAbstractClass', () => {

    class MyAbstract {

        constructor() {
            Objects.checkAbstractClass(MyAbstract, this)
        }

    }

    class MyConcret extends MyAbstract { }

    expect(() => { new MyAbstract() })
        .toThrow(TypeError)

    expect(() => { new MyAbstract() })
        .toThrow("Cannot implement 'MyAbstract' abstract class!")

    expect(() => { new MyConcret() })
        .not.toThrow(TypeError)

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

    expect(() => { new MyClassNok() })
        .toThrow(TypeError)

    expect(() => { new MyClassNok() })
        .toThrow("Abstract method 'myMethod' should be implemented in class 'MyClassNok'!")

    expect(() => { new MyClassOk() })
        .not.toThrow(TypeError)

})

test('Objects.isObject', () => {

    expect(Objects.isObject({})).toBe(true)
    expect(Objects.isObject({a: 0})).toBe(true)
    expect(Objects.isObject(StringBuilder)).toBe(true)
    expect(Objects.isObject(new StringBuilder())).toBe(true)
    expect(Objects.isObject([])).toBe(true)
    expect(Objects.isObject(new Array<string>())).toBe(true)

    expect(Objects.isObject(null)).toBe(false)
    expect(Objects.isObject(undefined)).toBe(false)
    expect(Objects.isObject(NaN)).toBe(false)
    expect(Objects.isObject(Infinity)).toBe(false)
    expect(Objects.isObject(false)).toBe(false)
    expect(Objects.isObject(1)).toBe(false)
    expect(Objects.isObject("")).toBe(false)
    expect(Objects.isObject("Object")).toBe(false)

})
