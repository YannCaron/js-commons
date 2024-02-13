import "../.."
import { Functions } from "../../index"

const lambda = (
    a: string,
    b: string,
    c: string,
    ...d: string[]) => { console.log(a, b, c, d); }

test('Functions.extractArguments', () => {

    expect(Functions.extractArguments(lambda)).toStrictEqual(['a', 'b', 'c', '...d'])

    expect(Functions.extractArguments(lambda).last).toStrictEqual('...d')

    expect(Functions.extractArguments(
        (a: string) => { console.log(a); }))
        .toStrictEqual(['a'])

    expect(Functions.extractArguments(
        (a: string) => a))
        .toStrictEqual(['a'])

    expect(Functions.extractArguments(
        function () { }))
        .toStrictEqual([])

    expect(Functions.extractArguments(
        function (a: string, b: string, ...c: string[]) { console.log(a, b, c); }))
        .toStrictEqual(['a', 'b', '...c'])

})

test('Functions.hasRestArgument', () => {

    expect(Functions.hasRestArgument(
        Functions.extractArguments(lambda).last))
        .toBe(true)

    expect(Functions.hasRestArgument(
        Functions.extractArguments((a: number) => a).last))
        .toBe(false)

    expect(Functions.hasRestArgument(
        Functions.extractArguments(lambda)))
        .toBe(true)

    expect(Functions.hasRestArgument(
        Functions.extractArguments((a: number) => a)))
        .toBe(false)

})
