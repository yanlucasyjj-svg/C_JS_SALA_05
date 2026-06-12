function text(){
    var t1 = document.getElementById("t1").value
    var t2 = document.getElementById("t2").value
    var n1 = document.getElementById("n1").valueAsNumber
    var resp = document.getElementById("resp")

    resp.textContent= `Você nasceu em ${t1} e no estado do(e) ${t2} e tem ${n1} anos`;
}