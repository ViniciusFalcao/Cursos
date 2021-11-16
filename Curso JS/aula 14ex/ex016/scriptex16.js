function contar() 
{
    var inicio=document.getElementById("inicio")
    var fim=document.getElementById("fim")
    var incremento=document.getElementById("incremento")
    var res=document.getElementById("res")
    res.innerHTML="Contando: "
    
    if(inicio.value.length==0){
     window.alert("[ERRO] Inicio vazio")}
     else if (incremento.value.length==0 ||incremento.value=="0"){
        window.alert("Incremento invalido considerando ele igual a 1")
        let n1=Number(inicio.value)
        let n2=Number(fim.value)
        let n3=Number(incremento.value)
        if(n1<n2)
        {
            while(n1<=n2){
            res.innerHTML+=("     "+n1)
            let n3 =1
            n1+=n3}
        } 
        else if(n1>n2){
            while(n1>=n2){
                res.innerHTML+="     "+n1
                let n3=1
                n1-=n3
            }
        }
     }
     else 
    {
        let n1=Number(inicio.value)
        let n2=Number(fim.value)
        let n3=Number(incremento.value)
        if(n1<n2){
            while(n1<=n2)
            {
                res.innerHTML+=("     "+n1)
                
                n1+=n3}
            }
            else if(n1>n2){
                while(n1>=n2){
                    res.innerHTML+="     "+n1
                    n1-=n3
                }
            }
    }

    }