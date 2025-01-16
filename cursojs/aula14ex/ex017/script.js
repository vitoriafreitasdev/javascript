 function tabuada(){
    let num = document.getElementById('inum')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1 
        tab.innerHTML = ''
        for (let c = 1; c <=10; c++){
            let item = document.createElement('option')
            let res = n*c
            item.text = `${n} x ${c} = ${res} `
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
 }



    //while (c <= 10){
       // let item = document.createElement('option')
      //  let res = n*c
     //   item.text = `${n} x ${c} = ${res} `
     //   item.value = `tab${c}`
     //   tab.appendChild(item)
      //  c++
   // }