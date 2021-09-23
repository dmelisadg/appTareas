const fs = require("fs");

const escribirJSON =(arrayJSON)=>{
    const arrayJS = JSON.stringify(arrayJSON,null,4);
    fs.writeFileSync('./database/tareas1.json',arrayJS)
}
const leerJSON = () =>{return JSON.parse(fs.readFileSync('./database/tareas1.json'))} 

const guardarTarea = (titulo,estado)=>{
    const nueva = {
    titulo:titulo,
    estado:estado}
    const dB = leerJSON();
    dB.push(nueva);
    escribirJSON(dB);
}
const leerPorEstado= (estado)=>{
    const dB = leerJSON();
    const filtro =  dB.filter(x => x.estado==estado);
    return filtro  
}

module.exports = { escribirJSON,leerJSON,guardarTarea,leerPorEstado};