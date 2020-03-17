import Nombre from "./Nombre.js";

export default class Doctor {
    /**
     * 
     * @param {Nombre} nombre 
     * @param {String} especialidad 
     * @param {Number} telefono 
     * @param {String} cedula 
     */
    constructor(nombre, especialidad, telefono, cedula) {
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.telefono = telefono;
        this.cedula = cedula;
    }
    getPerfil = _ => `Cedula: ${this.cedula}\nEspecialidad: ${this.especialidad}\nNombre ${this.nombre.getNombreCompleto()}\nTelefono: ${this.telefono}`;

}