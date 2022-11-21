var karakterler = ["£", "#", "$", "&", "*", "?", "+", "-", "^", "%", "é", "<", ">", ",", ";", "`", ".", ":", "_", "-", "|", "!", "'", "/", "[", "]", "{", "}", "(", ")"];
var rakamlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var harfler = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "y", "z", "x", "q"];
function preferences1() {
    let statuofCharacter = false;
    if (document.querySelector(".character input").checked) {
        statuofCharacter = true;
    }
    return statuofCharacter;
}
function preferences2() {
    let statuofSpecialCharacter = false;
    if (document.querySelector(".Specialcharacter input").checked) {
        statuofSpecialCharacter = true;
    }
    return statuofSpecialCharacter;
}
function preferences3() {
    let statuofNumber = false;
    if (document.querySelector(".number input").checked) {
        statuofNumber = true;
    }
    return statuofNumber;
}
function generatePassword() {
    document.querySelector(".Password").innerHTML = "";
    let password = "";
    let passworda = [];
    let newPassworda = [];
    let range = document.getElementById("rangevalue").innerHTML;
    if (preferences1() && preferences2() && preferences3()) {
        for (let i = 0; i < range / 3; i++) {
            let sayi = parseInt(Math.random() * harfler.length);
            passworda.push(harfler[sayi]);
        }
        for (let i = 0; i < range / 3; i++) {
            let sayi = parseInt(Math.random() * karakterler.length);
            passworda.push(karakterler[sayi]);
        }
        for (let i = 0; i < range / 3; i++) {
            let sayi = parseInt(Math.random() * rakamlar.length);
            passworda.push(rakamlar[sayi]);
        }
    }
    else if (preferences1() && preferences2()) {
        for (let i = 0; i < range / 2; i++) {
            let sayi = parseInt(Math.random() * harfler.length);
            passworda.push(harfler[sayi]);
        }
        for (let i = 0; i < range / 2; i++) {
            let sayi = parseInt(Math.random() * karakterler.length);
            passworda.push(karakterler[sayi]);
        }
    }
    else if (preferences2() && preferences3()) {
        for (let i = 0; i < range / 2; i++) {
            let sayi = parseInt(Math.random() * karakterler.length);
            passworda.push(karakterler[sayi]);
        }
        for (let i = 0; i < range / 2; i++) {
            let sayi = parseInt(Math.random() * rakamlar.length);
            passworda.push(rakamlar[sayi]);
        }
    }
    else if (preferences1() && preferences3()) {
        for (let i = 0; i < range / 2; i++) {
            let sayi = parseInt(Math.random() * harfler.length);
            passworda.push(harfler[sayi]);
        }
        for (let i = 0; i < range / 2; i++) {
            let sayi = parseInt(Math.random() * rakamlar.length);
            passworda.push(rakamlar[sayi]);
        }
    }
    else if (preferences1()) {
        for (let i = 0; i < range; i++) {
            let sayi = parseInt(Math.random() * harfler.length);
            passworda.push(harfler[sayi]);
        }
    }
    else if (preferences2()) {
        for (let i = 0; i < range; i++) {
            let sayi = parseInt(Math.random() * karakterler.length);
            passworda.push(karakterler[sayi]);
        }
    }
    else if (preferences3()) {
        for (let i = 0; i < range; i++) {
            let sayi = parseInt(Math.random() * rakamlar.length);
            passworda.push(rakamlar[sayi]);
        }
    }
    else {
        window.alert("You must do Range>0 or one checkbox must check");
    }

    //final
    for (let i = 0; i < passworda.length; i++) {
        let sayi = parseInt((Math.random() * range));
        newPassworda[i] = passworda[sayi];
        password += newPassworda[i];
    }
    document.querySelector(".Password").innerHTML = password;
}