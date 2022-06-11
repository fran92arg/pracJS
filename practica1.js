function suma( a, b){
  c=a+b;
  return c;
}
console.log(suma);
function presentacion(a,b){
    return("Hola,soy "+a+" y tengo "+b+" años")
}
console.log(presentacion("Francisco","29"));
function potencia(){
    return (Math.pow(2,3));
}
console.log(potencia());
function idioma(nombre){
    if(nombre=="Español"){
        return("Hola");
    }else if(nombre=="Chino"){
        return("Chao");
    }else if(nombre=="Portugues"){
        return("Ola");
    }else return("Error, ingrese un idioma válido")
}
console.log(idioma("Español"));
//let array=[10,21,22,2,5];

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
console.log(sacaMayores([10,21,22,2,5]));
