export default class Nombre {
    /**
     *  
     * @param {String} nombre 
     * @param {String} apellidoPaterno 
     * @param {String} apellidoMaterno 
     */
    constructor(nombre, apellidoPaterno, apellidoMaterno) {
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
    }
    getNombreCompleto = _ => `${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno}`;

    getApellidoNombre = _ => `${this.apellidoPaterno} ${this.apellidoMaterno} ${this.nombre}`;

    getIniciales = _ => `${this.apellidoPaterno[0]}${this.apellidoMaterno[0]}${this.nombre[0]}`;

}