# Quadratic-Encoder

Quadratic encoder is a kind of encoding program that uses quadratic formulae to encode each character. 
It takes the each character and assigns it a random value between two values depending on the _base_, _width_ and _precision_ values.

It's uses the formulae ``` (1/base) * width^2 ``` to determine the height range for the characters available and will calculate the 
height of each character with ``` height / alphabet.lenght ``` and will assign a random value for the character within its range.
