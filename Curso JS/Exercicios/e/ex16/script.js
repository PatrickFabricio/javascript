function contar() {
    var ini = document.getElementById("numin") 
    var fim = document.getElementById("numfim")
    var passo = document.getElementById("numpas")
    var res = document.getElementById('res')

    if(ini.value.length == 0 || passo.value.length == 0) {
    window.alert("[ERRO]Falmtam dados!")
    } else {
        res.innerHTML = "Contando: "
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        for(var c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449} `
        }
        res.innerHTML += `\u{1F3C1}`
    }

    
}