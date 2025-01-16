function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    var fsex = document.getElementsByName('radsex')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!') 
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked) {
            gen = 'Homem'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebeM.jpg')
            } else if (idade < 24) {
                //jovem
                img.setAttribute('src', 'jovemM.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultoM.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosoM.jpg')
            }
        } else if (fsex[1].checked) {
            gen = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebeF.jpg')
            } else if (idade < 24) {
                //jovem
                img.setAttribute('src', 'jovemF.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultoF.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosoF.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos`
        res.appendChild(img)
    }
}