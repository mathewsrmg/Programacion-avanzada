//Tradicional separar strings

/*
function separarCodigo(codigo){
    let nombre= codigo.split(":")
    return (`El nombre es ${nombre[1]}`)
}
console.log(separarCodigo("ARQ2556: Nodin Chavdri"))
*/

//Funcion de Flecha
let separarCodigo = (codigo)=>{
    let nombre= codigo.split(": ")
    return (`El nombre es ${nombre[1]}`)
}
console.log(separarCodigo("ARQ2556: Han solo"))
