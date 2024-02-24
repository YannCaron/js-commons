import "../../src/string/String"

test('String capitalizeFirstLetter', () => {

	expect('hi'.capitalizeFirstLetter()).toBe('Hi')

	expect('Hi'.capitalizeFirstLetter()).toBe('Hi')

	expect(''.capitalizeFirstLetter()).toBe('')

	expect('123'.capitalizeFirstLetter()).toBe('123')

})
