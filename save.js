var methods = {
	quad: function (a, x) {
    return ((1 / a) * (x ** 2));
  },
	encode: function (base, width, key){
    var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "w", "v", "y", "z", "q", "x", " ", ",", ".", "!", "?"];
    var height = ((1/base) * ((width) ** 2));
    var hEach = height / abc.length; // height allocated to each letter in abc.
    var keyLetters = key.split("");
    var final = "";
    var precision = 100000;
    for (i=0;i<keyLetters.length;i++){
        var cv = abc.indexOf(keyLetters[i]);  // cv = current value.
        var seed = Math.random();
        var max = hEach * (cv + 1);
        var min = max - hEach;
        var val = (((seed * (max - min) + min) * precision));
        var letter = (Math.round(val) / precision);
        //console.log(letter);
        if (i == keyLetters.length - 1) {
            //final += Math.floor(max * precision) / precision;
            final += letter;
        } else {
            //final +=  Math.floor(max * precision) / precision + ":" ; letter + ":";
            final +=  letter + ":";
        }
    }
    return final;
  },
  decode: function (base, width, key){
    var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "w", "v", "y", "z", "q", "x", " ", ",", ".", "!", "?"];
    var loop = function (e, height) {
        var hEach = height / abc.length;
        var a = 0;
        var lap = 1;

        while (a<abc.length) {
            if (parseFloat(e) <= hEach * (a + 1) * lap) {
                return abc[a];
            } else if ((parseFloat(e) >= hEach * (a + 1) * lap) && a == abc.length - 1) {
                lap++;
                a = -1;
            }
            a++;
        }
    }
    var height = ((1/base) * ((width) ** 2));
    var hEach = height / abc.length; // height allocated to each letter in abc.
    var keyLetters = key.split(":");
    var final = "";
    var precision = 100000;
    //console.log(hEach);
    i = 0;
    while (i<keyLetters.length) {
        var letter = loop(keyLetters[i], height);
        final += letter;
        i++;
    }
    return final;
  },
  loop : function (e, height) {
    var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "w", "v", "y", "z", "q", "x", " ", ",", ".", "!", "?"];
    var hEach = height / abc.length;
    var a = 0;
    var lap = 1;
    
    while (a<abc.length) {
        if (parseFloat(e) <= hEach * (a + 1) * lap) {
            return abc[a];
        } else if ((parseFloat(e) >= hEach * (a + 1) * lap) && a == abc.length - 1) {
            lap++;
            a = -1;
        }
        a++;
    }
  }
};

module.exports = methods; 