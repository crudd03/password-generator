# password-generator
**Homework 3:** Password generator

**Summary:** A fully functional password generator that allows user to choose length and type of characters to generate a pseudo-random password. This is homework assignment 3 for the Michigan State bootcamp.

**Link:** https://crudd03.github.io/password-generator/

**Description:**
* When user clicks the 'Generate Password' button, user is prompted for desired length of password.
  * Generator is meant for passwords that are greater than or equal to 8 characters, and less than or equal to 128 characters.
  * If a length is chosen that is out of bounds, an error message will appear and user will have the opportunity to try again.
* After length is chosen, user will have the opportunity to select which character types that are to be included in the password: upper case letters, lower case letters, numbers, and/or symbols.
  * If no character types are selected, an error message will appear and user will have the opportunity to try again.
* After character types are selected, a pseudo-random password will be generated based on the length and character types selected. The Javascript code uses the Math.random() method as a basis to generate this password.

**Screenshot:**

[![password-generator.png](https://i.postimg.cc/8CVF9Jck/password-generator.png)](https://postimg.cc/68Y5GQCF)
