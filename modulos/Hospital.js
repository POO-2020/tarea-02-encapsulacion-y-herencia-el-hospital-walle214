import Doctor from "./Doctor.js";
import Cita from "./Cita.js";

export default class Hospital {
    /**
     * 
     * @param {String} nombre nombre del hospital
     * @param {String} direccion direccion del hospital
     */
    constructor(nombre, direccion) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.doctores = [];
        this.citas = []
    }
    /**
     * @param {Doctor} doctor 
     */
    registrarDoctor = doctor => this.doctores.push(doctor);

    listarDoctores = _ => this.doctores.forEach(d => console.log(d.getPerfil(), '\n'));

    /**
     * 
     * @param {Cita} cita 
     */
    registrarCita = cita => this.citas.push(cita);

    listarCitas = _ => this.citas.forEach(c => console.log(c.getCita(), '\n'));

}