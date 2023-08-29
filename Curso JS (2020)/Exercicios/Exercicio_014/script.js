function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas. `
    if (hora >= 0 && hora <12) {
        //Bom dia
        img.src = 'tarde.png'
        document.body.style.background = '#90a6a3'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'tradereal.png'
        document.body.style.background = '#5b200f'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#536572'
        //Boa noite
    }

}
