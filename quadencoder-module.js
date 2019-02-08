var methods = {
	quad: function (a, x) {
    return ((1 / a) * (x ** 2));
  },
	encode: function (base, width, key, precision=1000){
    var abc2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "w", "v", "y", "z", "q", "x", " ", ",", ".", "!", "?"];
    var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "w", "v", "y", "z", "x", " ", ",", ".", "!", "?", ":", ";", "<", ">", "'", "%", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "Z", "X", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var height = ((1/base) * ((width) ** 2));
    //console.log(height);
    var hEach = height / abc.length; // height allocated to each letter in abc.
    var keyLetters = key.split("");
    var final = "";
    //var precision = 100000;
    for (i=0;i<keyLetters.length;i++){
        var cv = abc.indexOf(keyLetters[i]);  // cv = current value.
        var seed = Math.random();
        var max = hEach * (cv + 1);
        var min = max - hEach;
        var val = (((seed * (max - min) + min) * precision));
        var letter = (Math.round(val) / precision);
        //console.log(letter);
        
        if (letter < max - (hEach / 2)) {
            var letteru = Math.round(letter * precision + 1) / precision;
        } else if (letter > max - (hEach / 2)) {
            var letteru = Math.round(letter * precision - 1) / precision;
        }
        
        if (i == keyLetters.length - 1) {
            //final += Math.floor(max * precision) / precision;
            final += letteru;
        } else {
            //final +=  Math.floor(max * precision) / precision + ":" ; letter + ":";
            final +=  letteru + ":";
        }
    }
    return final;
  },
  decode: function (base, width, key){
    var abc2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "w", "v", "y", "z", "q", "x", " ", ",", ".", "!", "?"];
    var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "w", "v", "y", "z", "x", " ", ",", ".", "!", "?", ":", ";", "<", ">", "'", "%", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "Z", "X", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
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