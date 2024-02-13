interface Array<T> {
    pushAll(...entries: Array<T>): Array<T>
    readonly isEmpty: boolean
    readonly first: T
    readonly last: T
    clear(): Array<T>
}

Array.prototype.pushAll = function (...entries) {
    for (const entry of entries) this.push(entry)
    return this
}

Object.defineProperty(Array.prototype, 'isEmpty', {
    get: function (): boolean {
        return this.length === 0
    }
})

Object.defineProperty(Array.prototype, 'first', {
    get: function () {
        if (this.isEmpty)
            return undefined
        return this.at(0)
    }
})

Object.defineProperty(Array.prototype, 'last', {
    get: function () {
        if (this.isEmpty)
            return undefined
        return this.at(this.length - 1)
    }
})

Array.prototype.clear = function () {
    this.splice(0, this.length)
    return this
}
