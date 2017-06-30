const text = '${osoby.1.imie} and ${osoby.0.imie} is awesome!'
const textVariables = `{"osoby": [{"imie": "Ala"}, {"imie": "Iwona"}]}`
/*
	0. My assumption is that I want to extend this exercise, so I can take not only an array of variables, 
		but also take multiple variables within the pattern
	1. I notice, that variables provided to me is a JSON object, so I can just simply transform it into an object with JSON.parse()
	2. Entire exercise can be divided by 4 sub-problems: 
	   1. Extracting the variables from the pattern (in easy to work with form)
			- Lazy solution - take the ready-to-implement solution from string template parsing from Babel transpiler
			- @EDIT, looked it up because of curiosity, and it doesn't work - it's only syntactic sugar for string concatenation
	   2. Parsing variables patters to semantic (ready to use within JS) form
	   		- It turned out, that I don't need to parse for braket notation, I'll do it in point 3, splitting by . is fair enough
	   3. Extracting the variables values
	   		- I can use eval, for MVP, but because of safety and maintainability reasons I won't do it,
	   			- Quoting Michal: evalowi mówimy stanowcze... EVAL wypierdalaj Ty dziwko! And it seems preety legit philosophy
			- First thought: If you don't know how to solve a problem, the solution should be a reduce()
			- Wojtek's hint is that I have to think about reducing it the opposite way - instead of building an object, I have to cut the unnesesary pieces and go deeper till getting the value
			- I thought about this: I can reduce the array of splitted path: therefore I will know, where to end, and how to cut the intial object
				- Also, for reduce() my initial object should be 
			- I found a thread on stack, and my solution is similar to the others' : https://stackoverflow.com/questions/6393943/convert-javascript-string-in-dot-notation-into-an-object-reference
				- I could use _get() from loadash, if didn't find a solution by myself (if I could use Lodash on commercial project, I would still go for it - the library code is safer, tigt and tested, so it still seems to be better idea)
	   4. Replacing the variables with values from point 3 & concatenation
*/
export default render = (pattern, variables) => {
  variables = JSON.parse(variables)
  pattern
  	.split(/\$\{|}/) // Regex hint: it looks for '${' combination of characters, or the '}' character, so I can easy extract the variables from the text itself
  		// Now I have an array of strings, and I know, which of these are variables or just the text
  		// (After the split, the variables will ALWAYS have their neighbours from both sides, which means these will be only values with odd index starting from 1, to second-to-last)
  	.map((value, index, array) => {
  	  if(index > 0 && index%2 === 1 && index < array.length) {
  	  	return value
  	  	  .split('.')
  	  	  .reduce((object, key) => object[key], variables)
   	  } else {
  	  	return value
  	  }
  	})
  	.join('')
}

// Moral:
// 	- set all funtional JS methods are incomplete without .reduce(), without mastering it you cannot write a proper functional code,
// 		- TO ASK: How to master .reduce() any resources, excercises etc.
// 	- reduce can be used not only for building, but also dectructuring
// 	- I have to finally learn Jest, in order to test such function a lot quicker, which would drastically improve development time
//  - functional code is lot shorter and declarative/easier to read, and I think easier to maintain