import Doctor from "./Doctor.js";
import Cita from "./Cita.js";

export default class Hospital {
    constructor({nombre, direccion}) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._doctores = [];
        this._citas = []
    }
    /**
     * @param {Doctor} doctor 
     */
    registrarDoctor = doctor => this._doctores.push(doctor);

    listarDoctores = _ => this._doctores.forEach(d => console.log(d.getPerfil(), '\n'));

    /**
     * 
     * @param {Cita} cita 
     */
    registrarCita = cita => this._citas.push(cita);

    listarCitas = _ => this._citas.forEach(c => console.log(c.getCita(), '\n'));

}