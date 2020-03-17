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
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.telefono = telefono;
    }
    getPerfil = _ => `${this.nombre.getNombreCompleto()} ${this.fechaNacimiento.getFecha()} ${this.telefono}`;

}