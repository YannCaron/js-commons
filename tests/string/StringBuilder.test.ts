import StringBuilder from './../../src/string/StringBuilder'

test('stringBuilder.isEmpty and clear', () => {

	const sb = new StringBuilder
	expect(sb.isEmpty).toBe(true)
	
	sb.append("test")
	expect(sb.isEmpty).toBe(false)

	sb.clear()
	expect(sb.isEmpty).toBe(true)

})

test('stringBuilder.append and toString', () => {

	const sb = new StringBuilder
	sb.append('hi')
	expect(sb.toString()).toBe('hi')

	sb.append(' ')
	expect(sb.toString()).toBe('hi ')
	
	sb.append('world')
	expect(sb.toString()).toBe('hi world')
	
	sb.append('!')
	expect(sb.toString()).toBe('hi world!')

})

test('stringBuilder.first and last', () => {

	const sb = new StringBuilder
	sb.append('hi')

	sb.append(' ')
	
	sb.append('world')
	
	expect(sb.first).toBe('hi')
	expect(sb.last).toBe('world')

})

test('stringBuilder.splice last', () => {

	const sb = new StringBuilder
	sb.append('t', 'e', 's', 't')
	expect(sb.toString()).toBe('test')

	sb.splice(2)
	expect(sb.toString()).toBe('te')
		
	sb.append('s', 't')
	expect(sb.toString()).toBe('test')

	sb.splice(sb.length - 1)
	expect(sb.toString()).toBe('tes')
		
	sb.append('t')
	expect(sb.toString()).toBe('test')

})

test('stringBuilder.repeat', () => {

	const sb = new StringBuilder
	sb.repeat('g', 7)
	expect(sb.toString()).toBe('ggggggg')

	sb.clear()
	sb.repeat('g', -1)
	expect(sb.toString()).toBe('')
	
	sb.clear()
	sb.repeat('', 7)
	expect(sb.toString()).toBe('')
		
	sb.clear()
	sb.repeat('g')
	expect(sb.toString()).toBe('g')

})