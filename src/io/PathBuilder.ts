import StringBuilder from "../string/StringBuilder"

export default class PathBuilder extends StringBuilder {

	private readonly _separator: string

	static parse(path: string, separator = '/'): PathBuilder {
		return new PathBuilder(path, separator)
	}

	constructor(path: string = '', separator: string = '/') {
		super(path.split(separator))
		this._separator = separator
	}

	toString(): string {
		return this._array.join(this._separator)
	}

}