function tabuada(){
    var num = document.getElementById("n1").valueAsNumber
    var i = 0

    var texto = "T A B U A D A\n";
    texto += "==============\n";

    for (var i = 0; i <= 10; i++) {
        texto += `${n} x ${i} = ${n * i}\n`;
    }

    texto += "==============";

    resp.textContent = texto;
}