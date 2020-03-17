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
        this._fecha = fecha;
        this._hora = hora;
        this._doctor = doctor;
        this._paciente = paciente;
    }
    getCita = _ =>
        `${
        this._fecha.getFecha()
        } ${
        this._hora.getFormato24()
        } Dr. ${
        this._doctor.getApellido()
        } ${
        this._paciente.getNombreCompleto()
        }`;

}