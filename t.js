var quad = require("./save.js");

var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "w", "v", "y", "z", "q", "x", " ", ",", ".", "!", "?"];

//var base = 72;
//var width = 47;

var c = 0;
var fail = 0;

while (c<=700000) {
    var t = "";
    var base = 72;
    var width = 47;
    
    for (i=0; i<100; i++) {
        var random = abc[Math.floor(Math.random() * abc.length)];
        var b = Math.floor(Math.random() * 50) + 25;
        var w = Math.floor(Math.random() * 50) + 25;
        t += random;
        base = b;
        width = w;
    }

    var code = quad.encode(base, width, t);

    //console.log(code);

    var sol = quad.decode(base, width, code);

    //console.log(sol);

    if (sol != t) {
        fail++;
        console.log(c + " -- " + fail + " failure, base: " + base + ", width: " + width);
        console.log(t);
        console.log(sol);
        console.log(code);
    } else {
        //console.log(c + " -- " + fail + " failure, base: " + base + ", width: " + width);
        var a = "a";
    }
    
    c++;
    t = "";
}

console.log("done.");