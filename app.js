const listar = process.argv[2];
const filtro = process.argv[3];
const titulo = process.argv[3];
const estado = process.argv[4];

const funciones = require('./funcionesDeTareas');

switch(listar){
    case 'listar':
        leerJSON.forEach(function(leerJSON){console.log( leerJSON.titulo,leerJSON.estado)});
        break;
    case 'crear':
        funciones.guardarTarea(titulo,estado);
        break;
      case 'filtrar':
        console.log(funciones.leerPorEstado(filtro))
        break;
    case undefined:
        console.log('Atención - tienes que pasar una acción');
        break;
    default:
        console.log('No entiendo que querés hacer');
        break;
    }
