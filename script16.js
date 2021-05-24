function somando(){
    let inicio = document.getElementById('numeroInicio')
    let fim = document.getElementById('numeroFim')
    let passo = document.getElementById('numeroPasso')
    let conta = document.getElementById('contando')
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        conta.innerHTML += `IMPOSSÍVEL CONTAR`
        //window.alert('ERRO, faltam dados')
    } else {
        conta.innerHTML = `Progresso da contagem: <br>`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            conta.innerHTML += `Passo inválido! Considerando passo 1. <br>`
            p = 1
        }
        
        if (i < f){
        // contagem crescente
            for (let contador = i; contador <= f; contador+=p){
                conta.innerHTML += `${contador} \u{23E9} `
            }
           
        } else {
        // contagem decrescente 
            for (let contador = i; contador >= f; contador-=p){
                conta.innerHTML += `${contador} \u{23E9} `
            }

        }
        conta.innerHTML +=`\u{1F3C1}` 
        
    }
    //\u{1F468} \u{200D} \u{1F4BB}
}
