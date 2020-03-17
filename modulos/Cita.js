import Fecha from "./Fecha.js";
import Tiempo from "./Tiempo.js";
import Doctor from "./Doctor.js";
import Paciente from "./Paciente.js";

export default class Cita {
    /**
     * 
     * @param {Fecha} fecha Fecha de la
     * @param {Tiempo} hora Hora de la cita
     * @param {Doctor} doctor Doctor que atiende la cita
     * @param {Paciente} paciente Paciente que pidió la cita
     */
    constructor(fecha, hora, doctor, paciente) {
        this.fecha = fecha;
        this.hora = hora;
        this.doctor = doctor;
        this.paciente = paciente;
    }
    getCita = _ =>
        `${this.fecha.getFecha()} ${this.hora.getFormato24()} Dr. ${this.doctor.nombre.apellidoPaterno} ${this.paciente.nombre.getNombreCompleto()}`;

}