class: center, middle

# Calculator Kata
Copied from [Roy Osherovs's TDD kata](http://osherove.com/tdd-kata-1/)

---


# Rules

- Try not to read ahead.
- Do one task at a time. 
  - The trick is to learn to work *incrementally*.
- Make sure you only test for correct inputs. there is no need to test for invalid inputs for this kata

---

# Goal

Create a simple String calculator with a method ___add(string numbers)___

Requirements:
- The method can take 0, 1 or 2 numbers as a string, and will return their sum (for an empty string it will return 0) for example “” or “1” or “1,2”

---

# TDD

Start with the simplest *FAILING* test case of an empty string and slowly increase complexity.

Remember to solve things as simply as possible so that you force yourself to write tests you did not think about
Remember to refactor after each passing test

"RED->GREEN->REFACTOR"

---

# Setup

Install Node.js and npm

Create a package.json file and install mocha testing framework
 - npm init
 - npm install mocha --save-dev
 - npm install chai --save-dev

add mocha to package.json
In a terminal window, run 
```bash
$ npm test -- --watch
```

We will use http://mochajs.org/ for a test framework with chai for BDD style assertions

---

# Step 1

```javascript
var should = require('chai').should();
var calc = require('./calculator.js');

describe('Calculator', function() {
  describe('#add', function() {
    it('should return 0 when the value is not present', function() {
      calc.add('').should.equal(0);
    });
  });
});
```

---

# Step 2

Given a string of '1' return an int of 1

```javascript
var should = require('chai').should();
var calc = require('./calculator.js');

describe('Calculator', function() {
  describe('#add', function() {
    it('should return 0 when the value is not present', function() {
      calc.add('').should.equal(0);
    });
*  it('should return 0 when the value is not present', function() {
*      calc.add('1').should.equal(1);
*    });
  });
});
```

---

# Step 3,4,5

```javascript
  calc.add('1,2').should.equal(3);
```

add some robustness to your code

```javascript
  calc.add('100').should.equal(100);
  calc.add('0').should.equal(0);
  calc.add('17,33').should.equal(50);
```

---

# Refactor

---

# Refactor

Use your 'production code' as test code to refactor your tests.  See any patterns or repeated code?

---

# New Requirement 6

Allow the _add_ method to handle an unknown amount of numbers

```javascript
  calc.add('17,33,50,100,200').should.equal(400)
```

---

# New Requirement 7

- Allow the _add_ method to handle new lines between numbers (instead of commas).
- The following input is ok:  “1\n2”  (will equal 3)
- The following input is ok:  “1\n2\n3”  (will equal 6)
- The following input is NOT ok:  “1,\n” (no need to prove it - just clarifying)

---

# New Requirement 7

- Allow the _add_ method to handle new lines between numbers (in ADDITION to commas).
- The following input is ok:  “1\n2”  (will equal 3)
- The following input is ok:  “1\n2,3”  (will equal 6)
- The following input is NOT ok:  “1,\n” (no need to prove it - just clarifying)

---

# New Requirement 8

- Support different delimiters to change a delimiter, 
  - the beginning of the string will contain a separate line that looks like 
```
//[delimiter]
[numbers…]
```
- _//;\n1;2_ should return three 
- _//$\n1$2_ should return three 
- note: the first line is optional. all existing scenarios should still be supported

---

# New Requirement 9

- Calling Add with a negative number will throw an exception __negatives not allowed__
with the negative that was passed
- if there are multiple negatives, show all of them in the exception message

---

# Bonus Round

- bigger than 1000 should be ignored, so adding 2 + 1001  = 2
- Delimiters can be of any length with the following format: 
```//[delimiter]\n```

```
//[***]\n1***2***3  //returns 6
``` 

- Allow multiple delimiters like this:  ```//[delim1][delim2]\n```   

```
//[*][%]\n1*2%3  // returns 6
```
- handle multiple delimiters with length longer than one char

```
//[*][%][**]\n1*2%3**6  // returns 12
```
