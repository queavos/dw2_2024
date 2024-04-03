var numero = 1
numero = numero +1
numero = numero + '1'
numero = parseInt(numero)
numero = numero + 2
// console.log(numero)
var text = ''
text = 'hola mundo'
// console.log(text)
const pi = 3.14
// console.log(pi)
var si = false
// console.log(si)
var edad = 19
var mayor = false
if(edad > 18){
    mayor = true
}else{
    mayor = false
}
// console.log(mayor)

function saludar(nombre, edad){
    if(edad > 18){
        return('hola '+nombre+' eres mayor de edad')
    }else{
        return('hola '+nombre+' no eres mayor de edad')
    }
}

let cont = 0
// while (cont < 5) {
    // cont = cont + 1
    // cont++
    // console.log(cont)
// } 

let array = ['amarillo', 'rojo','azul']
// array.push()
let array2 = []

if(array.includes('azul')){
    var indice = array.indexOf('azul')
    // console.log(indice)
    array.splice(indice,1)
}else{
    console.log('no contiene elemento')
}
// console.log(array)

var text = ''
text = 'hola mundo'
console.log('cadena',text.includes('mundo'))

console.log(typeof text)

if(typeof text == 'string'){
    console.log(text.slice(0,4))
}else{
    console.log('no es string')
}


// console.log(text)
text = 1
console.log(typeof text)

text = false
console.log(typeof text)

// console.log('cantidad de caracteres ',text.length)
// var txt_mayuscula = text.toUpperCase()

// console.log(txt_mayuscula.toLowerCase())

// console.log('posicion ',text.indexOf('mundo') )

// console.log(text.replace('hola','chau'))
console.log(text.includes('pepe'))
// if(text.includes('pepe')){
//     console.log('contiene')
// }else{
//     console.log('no contiene')
// }


// array = [1]
// array.push('algo')
// console.log(array.length)

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     array[i] = element + 1
//     // console.log(array[i])
// }

// array.splice(0,1)


// console.log(array)


// for (let i = 0; i < 5; i++) {
//     console.log(i)            
// }

//   let mensaje =  saludar('pepe', 12)
//     console.log(mensaje)