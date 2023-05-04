// debo instalar lo siguiente en mi terminal:
// $npm i xmlhttprequest

const XMLHttpRequest = require('xmlhttprequest');
const API = 'https://api.escuelajs.co/api/v1'; //Al estar en mayuscula indico que API no se modificara dentro de alguna funcion.

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true); //.open me permite abrir una coleccion a nuestra api, los aregumentos son (tipo_de_peticion, url_a_utilizar, valor_de_habilitacion)


    xhttp.onreadystatechange = function (event){ //.onreadystatechange me permite escuchar el estado de una solicitud para saber cuando esta disponible la informacion. La function sera usada para validar el estado.
        
        if(xhttp.readyState === 4){ //El 4 significa que se ha completado la llamada.
            if(xhttp.status === 200){ //El 200 significa que la solicitud fue correcta
                //me quede minuto 2 en clase 8
            }
        }

    }
}
