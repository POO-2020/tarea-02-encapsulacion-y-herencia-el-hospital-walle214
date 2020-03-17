export default class Nombre {
    /**
     *  
     * @param {String} nombre 
     * @param {String} apellidoPaterno 
     * @param {String} apellidoMaterno 
     */
    constructor(nombre, apellidoPaterno, apellidoMaterno) {
        this._nombre = nombre;
        this._apellidoPaterno = apellidoPaterno;
        this._apellidoMaterno = apellidoMaterno;
    }

    getApellido = _ => this._apellidoPaterno;

    getNombreCompleto = _ => `${this._nombre} ${this._apellidoPaterno} ${this._apellidoMaterno}`;

    getApellidoNombre = _ => `${this._apellidoPaterno} ${this._apellidoMaterno} ${this._nombre}`;

    getIniciales = _ => `${this._apellidoPaterno[0]}${this._apellidoMaterno[0]}${this._nombre[0]}`;

}