import '../collections/Arrays.ts'

export default class Functions {

    /* istanbul ignore next */
    private constructor() { }

    private static matchArgs(fnStr: string): Array<string> {
        if (fnStr.startsWith('function')
            || /\s*\([\s\S]*\)\s*=>/.test(fnStr)) {

            const args = /\(\s*([\s\S]*?)\s*\)/.exec(fnStr);
            if (!args || !args[1].trim()) return []
            return args[1].split(/\s*,\s*/).map(a => a.trim()).filter(Boolean);

        } else if (/\s*[\s\S]*\s*=>/.test(fnStr)) {

            const args = /\s*([^=>]+?)\s*=>/.exec(fnStr);
            if (!args || !args[1].trim()) return []
            return args[1].split(/\s*,\s*/).map(a => a.trim()).filter(Boolean);

        }

        /* istanbul ignore next */
        return []

    }

    static extractArguments(fn: Function): Array<string> {
        const fnStr = fn.toString()
        return Functions.matchArgs(fnStr)
    }

    static hasRestArgument(args: Array<string> | string): boolean {

        const arg = Array.isArray(args) ? args.last : args
        return arg.startsWith('...')

    }

}