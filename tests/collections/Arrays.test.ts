import "../../src/collections/Arrays"

test('array.isEmpty', () => {

    const array = new Array<number>()
    expect(array.isEmpty).toBe(true)

    array.push(0)
    expect(array.isEmpty).toBe(false)

    array.pop()
    expect(array.isEmpty).toBe(true)

})

test('array.first', () => {

    const array = new Array()

    expect(array.first).toBe(undefined)

    array.push(0)
    expect(array.first).toBe(0)

    array.push(1)
    array.push(2)
    expect(array.first).toBe(0)

    array.clear()
    expect(array.first).toBe(undefined)

})

test('array.last', () => {

    const array = new Array()

    expect(array.last).toBe(undefined)

    array.push(0)
    expect(array.last).toBe(0)

    array.push(1)
    array.push(2)
    expect(array.last).toBe(2)

    array.clear()
    expect(array.last).toBe(undefined)

})

test('array.pushAll() simple', () => {

    const array = new Array<Number>()

    array.pushAll(2, 1, 0)
    expect(array.length).toBe(3)

    expect (array[0]).toBe(2)
    expect (array[1]).toBe(1)
    expect (array[2]).toBe(0)

})

test('array.pushAll() from mixed', () => {

    const array = new Array()

    array.pushAll([0, 1], 2)
    expect(array.length).toBe(2)

    expect (array[0]).toStrictEqual([0, 1])
    expect (array[1]).toBe(2)

})

test('array.clear()', () => {

    const array = new Array()

    array.push(0)
    array.push(1)
    array.push(2)
    expect(array.isEmpty).toBe(false)

    array.clear()
    expect(array.isEmpty).toBe(true)

})

