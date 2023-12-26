//Variables
const idiomas = ['Bienvenido','Bienvenue', 'Welcome', 'Irasshaimase', 'Willkommen']; //Lista de idiomas
let indice = 0; //Inicializando en 0


// Funcion
function cambiarIdioma(){


    const saludo = 'Hola, ';
    const mensaje = `${saludo}${idiomas[indice]}`;
    document.getElementById('saludar').innerText = mensaje;
    indice = (indice + 1) % idiomas.length;


}


//Intervalo
setInterval(cambiarIdioma, 3000); // Cambia cada 3 segundos (3000 milisegundos)