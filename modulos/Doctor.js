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
        this._nombre = nombre;
        this._especialidad = especialidad;
        this._telefono = telefono;
        this._cedula = cedula;
    }
    getApellido = _ => this.nombre.getApellido();
    getPerfil = _ => `Cedula: ${this._cedula}\nEspecialidad: ${this._especialidad}\nNombre ${this._nombre.getNombreCompleto()}\nTelefono: ${this._telefono}`;

}