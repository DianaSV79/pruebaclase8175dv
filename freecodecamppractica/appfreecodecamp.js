//ejercicio de prueba 
var estaciones = ["invierno","otoño","primavera"];
console.log(estaciones)
estaciones.shift()
console.log (estaciones)
estaciones.unshift("verano")
console.log(estaciones)

var miListaDeCompras = [["cereal",3],["leche",3],["galletitas pepas",3]]
console.log("voy a comprar " + ""+ miListaDeCompras[0][1]+" unidades de "+""+miListaDeCompras[0][0]+".");

function mostrarMensaje() {
 
   console.log("hola,Mundo");
}
mostrarMensaje ();

function sumar (a,b){
   var suma = a + b;
   console.log("el resultado de " + a +" + "+ b + " es "+ suma)
}
sumar(5,3);
sumar(8,9);

function sumar (a,b){
   return a + b ;
}
console.log(sumar(5,3));//si
sumar(5,3); //no 

//practica de operador de igualdad y estrictamente igual 

var a;
var b;

a = 5;
b = 5;
console.log( a == b );//true
console.log(a === b );//true

b = 8;
console.log( a == b );//false
console.log(a === b );//false

b ="5";
console.log( a == b );//true
console.log(a === b );//false

a = "javascript";

//operador de desigualdad

console.log(9 != 6);//true
console.log(9!=9);//false
console.log("javascript" != "javascript")//false

console.log([1,2,3] != [1,2,3]);// lo muestra como true pero no es correcto 

//operador de desigualdad estricta

console.log(1 != "1"); //false
console.log(1 !== "1"); //true

//operador >

//operador >= 

console.log (5 > 5); //false
console.log (5 >= 5);//true

//operador < que

console.log( 5 < 6); // true
console.log (10 < 3); //false

console.log("a"< "b"); //true
console.log ("ABC" < "ACB");//true

var a = 15;
var b = 7;
console.log(a<b);//false
console.log(b<a);//true

//operador menor o igual que 

console.log(5<5);//false
console.log(5<=5);//true

//operadores logicos


// sentencias condicionales 
 var x = 5;
if ( x > 2){
    console.log("la condicion es verdadera")
}

var x = 5;
if ( x < 2){
    console.log("la condicion es verdadera")
}

var x = 5;
if ((x > 2)&&(x < 10)){
    console.log("la condicion es verdadera");

}
var estacion = "verano";
if(estacion == "invierno"){
    console.log("¡sí! Me gusta el invierno")
}       //no se ejecuta porque la condicion no es verdadera

console.log("despues del condicional...");

var x = 5 ;
if (x < 2){
    console.log("la condicion es verdadera"); 
} else {
    console.log(" la condicion es falsa")
}

function clasificarValor(valor){
    if ( valor % 2 == 0){
        console.log("divisible entre 2 ");
    } else if (valor % 3 == 0) {
console.log( " divisible por 3 ");
    } else {
        console.log( "  no es divisible entre las opciones ");
    }
}

clasificarValor(2);// es true por lo tanto se ejecuta if 
clasificarValor(3);//se ejecuta solo if else 
clasificarValor(5);// se ejecuta else 

// encadenar sentencias "else..if"

function interpretarIMC(IndicedeMasaCorporal){
    if(IndicedeMasaCorporal < 18.5){
        console.log("bajo peso");
    } else if ( IndicedeMasaCorporal <= 24.9){
        console.log("normal");
    } else if ( IndicedeMasaCorporal <= 29.9){
        console.log( "sobrepeso");
    } else {
        console.log("obeso");
    }
   
}
interpretarIMC(17.8);
interpretarIMC(22.2);
interpretarIMC(28.5);
interpretarIMC(32.2);

//ejercicio de codigo de golf
/* en el juego de golf cada hoyo tiene un par que representa
el numero promedio de golpes
que se espera que haga un golfista para introducir
la pelota en el hoyo.
hay un nombre diferente dependiendo de que tan 
por encima o por debajo del que estan tus golpes.
tu funcion tomara los argumentos par y golpes .
retorna la cadena correcta segun esta tabla que muestra 
los golpes en orden de mayor a menor prioridad :
golpes                retornar 
1                       "hole -in-one"
<= par - 2              "eagle"
par - 1                 "birdie"
par                     "par"
par + 1                  "bogey"
par + 2                  "double bogey"
>=
 par + 3               " go Home!"

par y golpes seran numericos y positivos
*/
function puntajeDeGolf(par,golpes){
    if (golpes == 1){
        return "Hole-in-one!";
    } else if (golpes <= par - 2){
        return "eagle";
    
    } else if ( golpes == par - 1){
        return "birdie";
    } else if ( golpes == par){
        return "par";
    }  else if (golpes == par + 1 ){
        return "bogey";
    } else if (golpes == par + 2){
        return "double bogey";
    } else if (golpes >= par + 3){
        return "go home";
    }

}
console.log(puntajeDeGolf(4,1));
console.log(puntajeDeGolf(4,2));