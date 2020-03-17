import Nombre from "./Nombre.js";
import Fecha from "./Fecha.js";
export default class Paciente {
    /**
     * 
     * @param {Nombre} nombre 
     * @param {Fecha} fechaNacimiento
     * @param {Number} telefono 
     */
    constructor(nombre, fechaNacimiento, telefono) {
        this._nombre = nombre;
        this._fechaNacimiento = fechaNacimiento;
        this._telefono = telefono;
    }

    getNombreCompleto = _ => this._nombre.getNombreCompleto();

    getPerfil = _ => `${this._nombre.getNombreCompleto()} ${this._fechaNacimiento.getFecha()} ${this._telefono}`;

}