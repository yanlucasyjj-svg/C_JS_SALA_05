function soma(n1, n2){
    return n1 + n2
}
function param(){
    var n1 = document.getElementById("n1").valueAsNumber
    var n2 = document.getElementById("n2").valueAsNumber 
    var resp = document.getElementById("resp")
    resp.textContent = soma(n1, n2)
}