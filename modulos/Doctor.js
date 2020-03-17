export default class Doctor {
    constructor({nombre, especialidad, telefono, cedula}) {
        this._nombre = nombre;
        this._especialidad = especialidad;
        this._telefono = telefono;
        this._cedula = cedula;
    }
    getApellido = _ => this.nombre.getApellido();
    getPerfil = _ => `Cedula: ${this._cedula}\nEspecialidad: ${this._especialidad}\nNombre ${this._nombre.getNombreCompleto()}\nTelefono: ${this._telefono}`;

}