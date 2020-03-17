import Paciente from "./Paciente.js";

class PacienteAsegurado extends Paciente {
    /**
     * 
     * @param {*} AtributosClienteAsegurado
     * @param {*} p  Parametros para el paciente normal
     */
    constructor(
        { numeroPoliza, finVigencia, compañia },
        p = { nombre, fechaNacimiento, telefono }) {

        super(p);
        this._numeroPoliza = numeroPoliza;
        this._finVigencia = finVigencia;
        this._compañia = compañia;
    }

    getPerfil = _ =>
        `${
        this._nombre.getNombreCompleto()
        } ${
        this._fechaNacimiento.getFecha()
        } ${
        this._telefono
        } ${
        this._numeroPoliza
        } ${
        this._finVigencia.getFecha()
        } ${
        this._compañia
        }`;

}