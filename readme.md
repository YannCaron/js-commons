# @cyann/ts-commons

**ts-commons** is a js/ts set of helping classes for algorithmic purpose.

It provide:
- Usefull methods for Array and string
- Helper classes for objects and functions
- StringBuilder and PathBuilder
- Stack
- Queue
- PriorityQueue

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

### PriorityQueue

`PriorityQueue<T>` uses a binary min-heap backed by a `T[]`. The order predicate
returns `true` when its first argument has higher priority; it defaults to `(a, b) => a < b`.

```ts
import { PriorityQueue } from '@cyann/js-commons'

const queue = new PriorityQueue<{ priority: number }>((a, b) => a.priority < b.priority)
queue.push({ priority: 3 }).push({ priority: 1 })

queue.peek()    // { priority: 1 }, without removing it
queue.pop()     // { priority: 1 }
queue.size()    // 1
queue.isEmpty() // false
```

`pop()` and `peek()` return `undefined` when empty. `push()` returns the queue.
Insertion and removal take O(log n); `peek()`, `size()` and `isEmpty()` take O(1).
