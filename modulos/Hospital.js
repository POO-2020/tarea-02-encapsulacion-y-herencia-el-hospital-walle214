import Doctor from "./Doctor.js";
import Cita from "./Cita.js";

export default class Hospital {
    constructor({ nombre, direccion }) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._doctores = [];
        this._citas = []
    }
    /**
     * @param {Doctor} doctor
     */
    buscarDoctor = doctor =>
        this._doctores.findIndex(d => doctor.esIgual(d));
    /**
     * @param {Doctor} doctor
     */
    registrarDoctor = doctor => {
        if (this.buscarDoctor(doctor) < 0) {
            this._doctores.push(doctor);
            return true;
        }
        return false;
    }
    /**
     * @param {Doctor} doctor
     */
    eliminarDoctor = doctor => {
        const index = this.buscarDoctor(doctor);
        if (!(index < 0)) {
            this._doctores.splice(index, 1);
            return true;
        }
        return false;
    }
    /**
     * @param {Doctor} viejoDoctor
     * @param {Doctor} nuevoDoctor
     */
    actualizarDoctor = (viejoDoctor, nuevoDoctor) => {
        const index = this.buscarDoctor(viejoDoctor);
        if (!(index < 0)) {
            this._doctores.splice(index, 1, nuevoDoctor);
            return true;
        }
        return false;
    }
    listarDoctores = _ => this._doctores.forEach(d => console.log(d.getPerfil(), '\n'));


    buscarCita = cita =>
        this._citas.findIndex(c => c.esIgual(cita));

    registrarCita = cita => {
        if (this.buscarCita(cita) < 0) {
            this._citas.push(cita);
            return true;
        }
        return false;
    }

    eliminarCita = cita => {
        const index = this.buscarCita(cita);
        if (!(index < 0)) {
            this._citas.splice(index, 0);
            return true;
        }
        return false;
    }
    editarCita = (viejaCita, nuevaCita) => {
        const index = this.buscarCita(viejaCita);
        if (!(index < 0)) {
            this._citas.splice(index, 0, nuevaCita);
            return true;
        }
        return false;
    }

    listarCitas = _ => this._citas.forEach(c => console.log(c.getCita()));

}