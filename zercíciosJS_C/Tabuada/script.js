function tabuada(){
    var num = document.getElementById("n1").valueAsNumber
    var i = 0

    var texto = "T A B U A D A<br>";
    texto += "==============<br>";

    for (var i = 0; i <= 10; i++) {
        texto += `${num} x ${i} = ${num * i}<br>`;
    }

    texto += "==============";

    resp.innerHTML = texto;
}