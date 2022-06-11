
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
function idioma(nombre){
    if(nombre=="Español"){
        return("Hola");
    }else if(nombre=="Chino"){
        return("Chao");
    }else if(nombre=="Portugues"){
        return("Ola");
    }else return("Error, ingrese un idioma válido")
}
//console.log(idioma("Español"));

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
  console.log(global);
  global = "Hello!" 
}
function b(){
  var global = "Chao!"
  console.log(global)
}
a(); 
b(); 
console.log(global) 
/*
RESPUESTAS
1er log:hola!
2do log:chao!
3er log:chao

*/

 
//let array=[10,21,22,2,5];

/*
function sacaMayores(arreglo){
    largo=arreglo.length;
    console.log(largo);
    var nuevo=[];
    k=0;
    for(i=0;i++;i<largo){
        if(arreglo[i]>20){
            nuevo.push(arreglo[i]);
        }
    }
    return (nuevo);
}
console.log(sacaMayores([10,21,22,2,5]))*/
