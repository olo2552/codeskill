const render = require('./smartStringTemplate.js') 

describe('smartStringTemplate under tests', () => {
	test('renders the correct message with 1 param in the beginning of the string', () => {
		expect( render('${imie} ma kota!', {"imie": "Ala"}) ) 
		.toBe('Ala ma kota!')
	})

	test('renders the correct message with 1 param in the middle of the string', () => {
		expect( render('Syn Ali, czyli ${imie} ma kota!', {"imie": "Piotr"}) ) 
		.toBe('Syn Ali, czyli Piotr ma kota!')
	})	

	test('renders the correct message with 1 param in the end of the string', () => {
		expect( render('Kot ma ${imie}!', {"imie": "Alę"}) ) 
		.toBe('Kot ma Alę!')
	})

	test('renders the correct message with 2 same params and an array of variables', () => {
		expect( render("${osoby.0.imie} ${osoby.0.imie} ma kota", {"osoby": [{"imie": "Ala"}, {"imie": "Iwona"}]}) )
		.toBe('Ala Ala ma kota')
	})

	test('renders the correct message with 2 same neighboring params and an array of variables', () => {
		expect( render("${osoby.0.imie} oraz ${osoby.0.imie} ma kota", {"osoby": [{"imie": "Ala"}, {"imie": "Iwona"}]}) )
		.toBe('Ala oraz Ala ma kota')
	})

	test('renders the correct message with 2 different params and an array of variables', () => {
		expect( render("${osoby.0.imie} oraz ${osoby.1.imie} ma kota", {"osoby": [{"imie": "Ala"}, {"imie": "Iwona"}]}) )
		.toBe('Ala oraz Iwona ma kota')
	})

	test('renders the correct message with 2 different neighboring params and an array of variables', () => {
		expect( render("${osoby.0.imie} oraz ${osoby.1.imie} ma kota", {"osoby": [{"imie": "Ala"}, {"imie": "Iwona"}]}) )
		.toBe('Ala oraz Iwona ma kota')
	})

	test('returns null when given invalid variables input', () => {
		expect( render("${osoby.0.imie} oraz ${osoby.1.imie} ma kota", {}) )
		.toBeNull()
	})
})