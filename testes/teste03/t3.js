function clicar(){
    let ini = document.getElementById('xini')
    let fim =  document.getElementById('ifim')
    let res = document.getElementById('res')
 
    let i = Number(ini.value)
    let f = Number(fim.value)

    if (i < f){
        for(c = i; c<=f; c++){
            res.innerHTML += (`${c} `)
        }

    } else {
        for(let c = i; c >= f; c-=1){
            res.innerHTML += (`${c} `)
        }
    }
    
}

/* if(c%2==0){
document.body.style.color('green')
} */