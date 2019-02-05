var e = require("./save.js");
var base = 17;
var width = 10;

var test = ["test values", "today we came here", "to celebrate our test", "values are a bit longer", "than I expected", "but its fine", "finally azman.", "bbbaaa", " a", " a b c a b c", "jok"];

var jsonised = JSON.stringify({"key":e.encode(17, 10, "elma")});

var parsed = JSON.parse(jsonised);

/*
for(i=0; i<test.length; i++) {
    console.log(e.encode(base, width, test[i]) + "/n");
    console.log(i + " " + test.length + " " + test[i]);
}
*/

var i = 0;
/*
while (i<test.length) {
    console.log(e.encode(base, width, test[i]));
    i++;
}*/