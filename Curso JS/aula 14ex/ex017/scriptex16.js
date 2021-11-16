function calcular(){
    var tabuada=window.document.getElementById("tabuada")

    for(var c=1;c<=10;c++){
        
        let tab=Number(tabuada.value)
        window.document.getElementsByTagName("option")[0].innerHTML=`Tabuada do ${tab}`
        let m=window.document.getElementsByTagName("option")[c]
        let r=tab*c
        m.innerHTML=`${tab}x${c}=${r}`
    }
}