function sum(num1,num2){
    return num1 + num2;
}

function calc(num1,num2,callback){
    return callback(num1,num2);
}

console.log(calc(2,2,sum));

setTimeout(function(){ //Ejecuta  la funcion que este dentro (es un callback) tras el tiempo dado en milisegundos
    console.log('Hola JavaScript');
}, 2000); 


function gretting(name){
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'Alejandro'); //La funcion setTimeout recibe sus parametros de la siguiente manera: (function, time, arguments).