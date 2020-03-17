export default class Cita {
    constructor({fecha, hora, doctor, paciente}) {
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