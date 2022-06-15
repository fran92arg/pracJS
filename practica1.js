
//ejercicio 1
function suma( a, b){
  c=a+b;
  return c;
}
//console.log(suma);
//ejercicio 2
function presentacion(a,b){
    return("Hola,soy "+a+" y tengo "+b+" años")
}
//console.log(presentacion("Francisco","29"));
//ejercicio 3
function potencia(){
    return (Math.pow(2,3));
}
//console.log(potencia());
//ejercicio 4
// function idioma(nombre){
//     if(nombre=="Español"){
//         return("Hola");
//     }else if(nombre=="Chino"){
//         return("Chao");
//     }else if(nombre=="Portugues"){
//         return("Ola");
//     }else return("Error, ingrese un idioma válido")
// }
// console.log(idioma("Portugues"));


/*ejercicio 5
item ---> 5

function sumar(a, b){
    return a + b;
}
console.log(sumar(10, 2));
console.log()
console.log(restar(5, 2));
var restar = function(a, b){
    return a - b;
}
Analiza la función y si hay algún error, arregla el hilo de ejecución.
Muestra los valores.*/
//solucion
function sumar(a, b){
    return a + b;
}
//console.log(sumar(10, 2));
//console.log()
var restar = function(a, b){
    return a - b;
}
//console.log(restar(5, 2));

//ejercicio 6

var global = "Hola!"
function a(){
 // console.log(global);
  global = "Hello!" 
}
function b(){
  var global = "Chao!"
 // console.log(global)
}
//a(); 
//b(); 
//console.log(global) 
/*

- Sobre el Código anterior

- Cuales serian los valores al ejecutarse

- Demuestra cada valor sin ejecutar el código.

RESPUESTAS
1er log:hola!
2do log:chao!
3er log:chao

*/
//ejercicio 7
function resta(a,b){
    return a - b;
}
  
function Exponente(a,b){
    return Math.pow(a, b);
}
/**
 * 
- Sobre el Código anterior

- Representa el valor pero usando directamente operadores

- Muestra su valor.

 * 
 */
 //function restr(a,b){
 //   return Math.
 //}
/**
  * item ---> 8
    3 > 2   &&   2 > 1
    Muestra su resultado
Respuesta
(true)&&(true)=true
*/
//let array=[10,21,22,2,5];

//ejercicio 
/*
item ---> 9
3 > 2 > 1
Muestra su valor
Respuesta:True
*/


//ejercicio 10
/*
item ---> 10

Crea una función 
Lee el arreglo [10, 21, 22, 2, 5].
recorre ese arreglo y guarda en otro arreglo donde los valores sean mayores que 20
Muestra ese nuevo arreglo.

*/
function sacaMayores(arreglo,nuevo){
    arreglo.forEach(element => {
        if(element>20){
            nuevo.push(element)
        }
    });
    console.log(nuevo)
}
let nuevo=[];
//sacaMayores([10,21,22,2,5],nuevo)


// item ---> 11

// Crea una función 
// Lee el siguiente arreglo de objetos [{“nombre”: “Joaco”}, {“nombre”: “Seba”}, 
// {“nombre”: “Juan”}, {“nombre”: “Cristian”}]
// Muestra todos los nombres.
obs=[
    {nombre: "Joaco"}, 
    {nombre: "Seba"},
    {nombre: "Juan"}, 
    {nombre: "Cristian"}
];
function muestraNombres(arrayObs){
    arrayObs.forEach(element => {
        console.log(element.nombre)
    });
}
//muestraNombres(obs)