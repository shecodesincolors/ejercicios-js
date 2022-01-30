/*
EJERCICIOS JS 
Carolina Aide Ramírez Lara
ada_hack275
*/

//EJERICIO 1

const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];

function esPrimo(num){
  for(let i=2; num>i; i++){
    if(num%i==0){
      return false;
    }else{
  return num>1;}
}}

console.log("Ejercicio 1");
let Primos=ejercicio1.filter(esPrimo);
console.log(`Estos numeros son primos:${Primos}`);


//console.log(ejercicio1.filter(esPrimo));


const ejercicio2 = [
  {
    nombre: "Gabriel",
    edad: 22,
    esFamiliar: false,
  },
  {
    nombre: "Jaime",
    edad: 15,
    esFamiliar: true,
  },
  {
    nombre: "María",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Angel",
    edad: 19,
    esFamiliar: true,
  },
  {
    nombre: "Fer",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Rachel",
    edad: 30,
    esFamiliar: true,
  },
];

//EJERCICIO 2
console.log("Ejercicio 2");
function filtroVIP(persona){
if(persona.edad>=18 && persona.esFamiliar){
console.log(`Puedes pasar ${persona.nombre}`);
}}

ejercicio2.forEach((persona)=>{
filtroVIP(persona);
});

//EJERCICIO 3
console.log("Ejercicio 3");
function fibonacciNumbers(){
let fib = []; // El array fibonacci

console.log(fib[0] = 0);
console.log(fib[1] = 1);

for (i = 2; i <= 49; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}
console.log(`Se imprimieron los primeros ${fib.length} números de la serie Fibonacci`);
}

fibonacciNumbers();
