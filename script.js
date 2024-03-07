function generateNumber(){
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    if (max > min){
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    alert(result)
    }
    else {
        alert("Por favor, o numero MINIMO precisa ser menor que o maximo")
    }

    
}