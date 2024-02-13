import '../collections/Arrays'

export default class StringBuilder {

	protected _array: Array<string>

	constructor(array: Array<string> = new Array<string>()) {
		this._array = array
	}

	get isEmpty(): boolean {
		return this._array.isEmpty
	}

	get length(): number {
		return this._array.length
	}

	get first(): string {
		return this._array.first
	}

	get last(): string {
		return this._array.last
	}

	append(...str: Array<string>): StringBuilder {
		for (const s of str) {
			this._array.push(s)
		}
		return this
	}

	repeat(str:string, count: number = 1): StringBuilder {
		for (let i = 0; i < count; i++) {
			this._array.push(str)
		}
		return this
	}

	splice(i: number):void {
		this._array.splice(i)
	}

	clear(): StringBuilder {
		this._array.clear()
		return this
	}

	toString(): string {
		return this._array.join("")
	}

}
