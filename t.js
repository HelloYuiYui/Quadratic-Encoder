var quad = require("./quadencoder-module.js");

var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "w", "v", "y", "z", "x", " ", ",", ".", "!", "?", ":", ";", "<", ">", "'", "%", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "Z", "X", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

//var base = 72;
//var width = 47;

var c = 0;
var fail = 0;
var fails = [];

while (c<=10000) {
    var t = "";
    var base = 56; //Math.floor(Math.random() * 1000) + 1;
    var width = 14; //Math.floor(Math.random() * 1000) + 10;
    var precision = 1;
    
    for (i=0; i<=100; i++) {
        var random = abc[Math.floor(Math.random() * abc.length)];
        t += random;
    }
    
    var code = quad.encode(base, width, t, precision);

    //console.log(code);

    var sol = quad.decode(base, width, code, t, precision);

    //console.log(sol);

    if (sol != t) {
        fail++;
        console.log(c + " -- " + fail + " failure, base: " + base + ", width: " + width);
        solLetters = sol.split("");
        tLetters = t.split("");
        codeLetters = code.split(":");
        for (a=0; a<tLetters.length; a++) {
            if (solLetters[a] != tLetters[a]) {
                fails.push("__  " + a + ", source: " + tLetters[a] + ", decoded: " + solLetters[a] + ", " + codeLetters[a] + ", base: " + base + ", width: " + width + "  __");
            }
        }
    } else if (sol == t) {
        console.log(c + " -- " + fail + " failure, base: " + base + ", width: " + width);
    }
    
    c++;
}

console.log(/*fails +*/ "\n\ndone.");