let num=document.getElementById("num")
let lista=document.getElementById("dados")
let res =document.getElementById("res")
let select=[]
function adicionar(){
    
    if (num.value.length==0 || num<1 || num>100 ){
        window.alert("Digite um número de 1 a 100 ")}
    
     else if (select.indexOf(Number(num.value))!=-1){
        window.alert("Número já digitado")}
            
    else {
        select.push(Number(num.value))
        let item=document.createElement("option")
        item.text=`O valor ${num.value} adicionado`
        lista.appendChild(item)}

            
        num.value=""
        num.focus()

    }
    function finalizar(){
        if (select.length==0) {
            window.alert("Digite valores")}
            else {
                let tot=select.length
                let maior=select[0]
                let menor =select[0]
                let media=0
                let soma=0
                
                for(let pos in select){
                    soma+=select[pos]
                    if(select[pos]>maior)
                        maior=select[pos]
                    if(select[pos]<menor)
                    menor=select[pos]
                }
                media=soma/tot
                
                res.innerHTML=""
                res.innerHTML+=`<p>A quantidade de elementos é ${tot}.</p>`
                res.innerHTML+=`<p>O maior valor informado foi ${maior}.</p>`
                res.innerHTML+=`<p>O menor valor informado foi ${menor}.</p>`
                res.innerHTML+=`<p>Somando todos os valores temos ${soma}.</p>`
                res.innerHTML+=`<p>A média dos valores foi ${media}</p>`


        
     } 
    }
   