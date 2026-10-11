import StringBuilder from "../string/StringBuilder.ts"

export default class PathBuilder extends StringBuilder {

	private readonly _separator: string

	static parse(path: string, separator = '/'): PathBuilder {
		return new PathBuilder(path, separator)
	}

	constructor(path: string = '', separator: string = '/') {
		super(path.split(separator))
		this._separator = separator
	}

	clear(): PathBuilder {
		this._array.clear()
		this._array.push('')
		return this
	}

	toString(): string {
		return this._array.join(this._separator)
	}

}