# @cyann/ts-commons

**ts-commons** is a js/ts set of helping classes for algorithmic purpose.

It provide:
- Usefull methods for Array and string
- Helper classes for objects and functions
- StringBuilder and PathBuilder
- Stack
- Queue

## Installation

Install it from NPM: `npm install --save @cyann/js-parsec`

## Examples

### Stringbuilder

**StringBuilder** stand for building strings without using concatenation.

```js
const sb = new StringBuilder()
sb.append('h', 'e')
sb.repeat('l', 2)
sb.append('o')
sb.append(' ')
sb.append('world')

console.log(sb.toString())
// hello world
```