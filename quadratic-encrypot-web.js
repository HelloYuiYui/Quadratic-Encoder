var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "w", "v", "y", "z", "x", " ", ",", ".", "!", "?", ":", ";", "<", ">", "'", "%", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "Z", "X", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "\"", "-", "(", ")", "[", "]", "{", "}"];
var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ".", "-"];

var getEncoding = function() {
    var numberSubstitution = "5381720496:.-";
    var latin = "zmtqvfosupyre";
    var ipa = "ɓmtqvfosupyre";
    var greek = "δβζϗΣΨξλϮμπωΩ";
    var armenian = "Թ֍ԽՖՊպ֏֎ՎՋփՑճ";
    var hebrew = ["ה", "ט", "ל", "ג", "א", "ץ", "֟", "ש", "֛", "ת", "ֳ", "֒", "֢"];
    var devangari = "चईषऊऋञऌऎकखऱशह";
    var thai = "ฒฉธขฏฯฟษยลฮศ༃";
    var maths = "∑∫√∵≤⋇⋒⋈⋆⊯⊘≿≣";
    var cyrillic = "днгжызимейпою";
    var japanese = "昔年老た王様がて病気で私は";
    var korean = "랫동안아무런결실그없원하부";
    var chinese = "个从前有国王他儿子老大和老";
    var vietnamese = "àửốấườểằởđỗơẹ";
    
    var gibberish = "ğüşiöçéèñäëù";

    var t = document.getElementById("encode").value;
    var target = null;
    if (document.getElementById("customCharset").value.length > 0) {
        target = document.getElementById("customCharset").value.split("");
    } else if (t == "none") {
        target = nums;
    } else if (t == "armenian") {
        target = armenian.split("");
    } else if (t == "latin") {
        target = latin.split("");
    } else if (t == "cyrillic") {
        target = cyrillic.split("");
    } else if (t == "hebrew") {
        target = hebrew;
    } else if (t == "greek") {
        target = greek.split("");
    } else if (t == "devangari") {
        target = devangari.split("");
    } else if (t == "thai") {
        target = thai.split("");
    } else if (t == "japanese") {
        target = japanese.split("");
    } else if (t == "korean") {
        target = korean.split("");
    } else if (t == "chinese") {
        target = chinese.split("");
    } else if (t == "vietnamese") {
        target = vietnamese.split("");
    } else if (t == "maths") {
        target = maths.split("");
    } else if (t == "mixedNumbers") {
        target = numberSubstitution.split("");
    }
    //console.log(target.length)
    return target
}

var getQR = function() {
    var text = document.getElementById("en").innerHTML;
    var qr = new QRious({
        element: document.getElementById("qr"),
        value: text,
        size: 300
    })
    qr.toDataURL();
    /*text = document.getElementById("en").value;
    var qrcode = new QRCode("test", {
        text: "http://jindo.dev.naver.com/collie",
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });*/
}

var convert = function(txt){
    var target = getEncoding();
    var s = txt.split("");
    f = "";
    for (i=0;i<s.length;i++){
        var index = nums.indexOf(s[i]);
        f += target[index];
    }
    
    return f;
}

var deconvert = function(txt) {
    var target = getEncoding();
    var s = txt.split("");
    f = "";
    
    for (i=0;i<s.length;i++){
        var index = target.indexOf(s[i]);
        f += nums[index];
    }
    
    return f;    
}

var loop = function(e, height) {
    var hEach = height / abc.length;
    var a = 0;
    var lap = 1;
    
    while (a<abc.length) {
        if (parseFloat(e) <= hEach * (a + 1) * lap) {
            //console.log(a + " " + lap);
            return abc[a];
        } else if ((parseFloat(e) >= hEach * (a + 1) * lap) && a == abc.length - 1) {
            lap++;
            a = -1;
        }
        a++;
    }
}

var encode = function(base, width, key, precision=1000){
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
        
        if (letter < max - (hEach / 2)) {
            var letteru = Math.round(letter * precision + 1) / precision;
        } else if (letter > max - (hEach / 2)) {
            var letteru = Math.round(letter * precision - 1) / precision;
        }
        
        if (i == keyLetters.length - 1) {
            final += letteru;
        } else {
            final +=  letteru + ":";
        }
    }
    return final;
}

var decode = function(base, width, key, precision=1000){
    var loop = function (e, height) {
        var hEach = height / abc.length;
        var a = 0;
        var lap = 1;

        while (a<abc.length) {
            if (parseFloat(e) <= hEach * (a + 1) * lap) {
                //console.log(a + " " + lap);
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
    //var precision = 100000;
    //console.log(hEach);
    i = 0;
    while (i<keyLetters.length) {
        var letter = loop(keyLetters[i], height);
        final += letter;
        i++;
    }
    return final;
}

var enc = function() {
    var base = document.getElementById("b").value;
    var width = document.getElementById("w").value;
    var precision = document.getElementById("p").value;
    var text = document.getElementById("t").value;
    
    var calc = encode(base, width, text, precision);
    var qz = convert(calc);
    
    console.log(qz.length);
    
    document.getElementById("en").innerHTML = qz;
}

var dec = function() {
    var base = document.getElementById("b").value;
    var width = document.getElementById("w").value;
    var precision = document.getElementById("p").value;
    var text = document.getElementById("en").innerHTML;
    
    var solved = decode(base, width, deconvert(text), precision)
    
    document.getElementById("de").innerHTML = solved;
}

var dec2 = function() {
    var base = document.getElementById("b").value;
    var width = document.getElementById("w").value;
    var precision = document.getElementById("p").value;
    var text = document.getElementById("t").value;
    
    var solved = decode(base, width, deconvert(text), precision)
    
    document.getElementById("de").innerHTML = solved;
}

var check = function() {
    var output = document.getElementById("de").innerHTML;
    var input = document.getElementById("t").value;
    
    if (output == input) {
        document.getElementById("check").innerHTML = "all correct";
    } else if (output != input) {
        document.getElementById("check").innerHTML = "something is wrong";
    }
}