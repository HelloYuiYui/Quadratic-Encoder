# Quadratic-Encoder

![](https://img.shields.io/github/license/HelloYuiYui/Quadratic-Encryption.svg?style=flat) ![](https://img.shields.io/badge/language-javascript-yellow.svg)

Quadratic encryptor is a kind of encryption algorithm that uses quadratic formula to encrypt each character. 
It takes the each character and assigns it a random value between two values depending on the _base_, _width_ and _precision_ values.

It's uses the formulae ``` (1/base) * width^2 ``` to determine the height range for the characters available and will calculate the 
height of each character with ``` height / alphabet.lenght ``` and will assign a random value for the character within its range.

**base**: This value is used to determine the range of numbers to be used for encrypting the characters.<br>
**width**: Same with _base_, this value is used to determine the range of numbers to be used for encrypting the characters.<br>
**precision**: This will determine how many decimals there will be. Hence the name precision. Its default value is 1000, or 3 decimals.
