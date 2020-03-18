import Paciente from "./Paciente.js";

export default class PacienteAsegurado extends Paciente {
    /**
     * 
     * @param {*} AtributosClienteAsegurado
     * @param {*} p  Parametros para el paciente normal
     */
    constructor(
        {
            numeroPoliza,
            finVigencia,
            compannia,
            nombre,
            fechaNacimiento,
            telefono
        }
    ) {


        super({ nombre, fechaNacimiento, telefono });
        this._numeroPoliza = numeroPoliza;
        this._finVigencia = finVigencia;
        this._compannia = compannia;
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
        this._compannia
        }`;

}