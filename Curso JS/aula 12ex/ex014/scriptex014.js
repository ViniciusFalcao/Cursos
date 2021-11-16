
function carregar(){
    var msg=window.document.getElementById("msg")
    var imagem=window.document.getElementById("imagem")
    var data= new Date()
    var hora=data.getHours()
    msg.innerHTML="Agora são "+hora+" horas."
    if(hora<12 && hora>=0){
        imagem.src="dia.png" 
        document.body.style.backgroundColor="#fdf364"}

    else if (hora<18){
        imagem.src="tarde.png"
        document.body.style.backgroundColor="#ed973e"
    }

    else {
        imagem.src="noite.png"
        document.body.style.backgroundColor="#696969"
        }
}