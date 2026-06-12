function dividir(){
    var n3 = parseFloat(document.getElementById("n1").value)
    var n4 = parseFloat(document.getElementById("n2").value)
    var resp = document.getElementById("respDiv")

    if(n4 !== 0){
        resp.textContent = (n1 / n2).toFixed(2)
    }else{
        resp.textContent = "Não se divide por 0"
    }
}