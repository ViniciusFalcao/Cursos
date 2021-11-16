function verificar(){
    var nasc=window.document.getElementById("nasc")
    var nnasc=Number(nasc.value)
    var data= 2021
    var idade=data-nnasc
    var res=window.document.getElementById("res")
    var img=window.document.getElementById("img")
    var sex=window.document.getElementsByName("sex")
    if(idade<15 && sex[0].checked){
        img.src="bebemenino.png"
        res.innerHTML="Você é um menino com "+idade+" anos"
    }else if(idade<15 && sex[1].checked){
        img.src="bebemenina.png"
        res.innerHTML="Você é uma menina com "+idade+" anos"

    }else if(idade>=15 && idade<25 && sex[0].checked){
        img.src="hj.png"   
        res.innerHTML="Você é um homem jovem com "+idade+" anos"
    }else if (idade>=15 && idade <25 && sex[1].checked){
        img.src="mj.png" 
        res.innerHTML="Você é uma mulher jovem com "+idade+" anos"
    }else if (idade>=25 && idade <50 && sex[0].checked){
        img.src="homemadulto.png"
        res.innerHTML="Você é um homem adulto com "+idade+" anos"


    }else if (idade>=25 && idade <50 && sex[1].checked){
        img.src="mulheradulta.png"
        res.innerHTML="Você é uma mulher adulta com "+idade+" anos"
    }else if (idade>=50 && sex[0].checked){
        img.src="homemidoso.png" 
        res.innerHTML="Você é um homem idoso com "+idade+" anos"

    }else {
        img.src="mulheridosa.png"
        resinnerHTML="Você é uma mulher idosa com "+idade+" anos"
    }

}

