type Constructor<T> = new (...args: any[]) => T;
type Instance = { constructor: Function };

export default class Objects {

    /* istanbul ignore next */
    private constructor() { }

    static checkAbstractClass<T>(clazz: Constructor<T>, target: Instance) {
        if (target.constructor.name === clazz.name) {
            throw new TypeError(`Cannot implement '${clazz.name}' abstract class!`)
        }
    }

    static checkAbstractMethod<T extends Instance>(obj: T, method: string) {
        if (obj[method as keyof T] === undefined) {
            throw new TypeError(`Abstract method '${method}' should be implemented in class '${obj.constructor.name}'!`)
        }
    }

    static isObject(obj: any): boolean {
        return obj === Object(obj);
    }
}
