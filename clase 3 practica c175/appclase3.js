 //ejercicio 1

    var nombre = prompt (" cual es tu nombre  ")
   
    console.log(typeof(nombre))
 
//ejercicio 2
function restar(a,b){
   return a-b;
}
restar (10,6)
var resultado = restar (10,6)
console.log(resultado)

//ejercicio 3
function sumar (a,b){
var suma = a + b ;
console.log (suma)

}
sumar (1,2)
sumar (2,1)

//ejercicio 4

var lado = prompt("ingrese el lado del cuadrado")
   
var perimetro = lado * 4 // perimetro es la suma de los  4 lados
   
var superficie = lado * lado // superficie es lado * lado 
   
console.log(perimetro); 
   
console.log(superficie); 





//ejercicio 5

function aCelsius(fahrenheit){
   return (fahrenheit-32) * (5/9);

}
var resultado = aCelsius(77);
console.log(resultado);

//ejercicio 6
var verbo = "programar";
var mensaje = "estoy aprendiendo a " + verbo + "" + " con FreedComeCamp";
console.log(mensaje);