import Fecha from "./modulos/Fecha.js";
import Tiempo from "./modulos/Tiempo.js";
import Nombre from "./modulos/Nombre.js";
import Paciente from "./modulos/Paciente.js";
import PacienteAsegurado from './modulos/PacienteAsegurado.js';
import Doctor from "./modulos/Doctor.js";
import Cita from "./modulos/Cita.js";
import Hospital from "./modulos/Hospital.js";

const fecha1 = new Fecha(24, 7, 2010);
const fecha2 = new Fecha(4, 5, 2019);
const fecha3 = new Fecha(2, 11, 2004);
const fecha4 = new Fecha(12, 4, 2018);
const fecha5 = new Fecha(3, 3, 2012);
const fecha6 = new Fecha(8, 7, 2005);


const tiempo1 = new Tiempo(4, 42, 'am');
const tiempo2 = new Tiempo(3, 22, 'am');
const tiempo3 = new Tiempo(3, 1, 'am');
const tiempo4 = new Tiempo(5, 12, 'pm');
const tiempo5 = new Tiempo(11, 6, 'am');
const tiempo6 = new Tiempo(9, 57, 'pm');

const nombre1 = new Nombre('Karla', 'Ramirez', 'Martinez');
const nombre2 = new Nombre('Juan', 'Ramirez', 'Martinez');
const nombre3 = new Nombre('Vicky', 'Ramirez', 'Martinez');
const nombre4 = new Nombre('Maria', 'Cano', 'Herrera');
const nombre5 = new Nombre('Valentina', 'Cano', 'Galvez');
const nombre6 = new Nombre('Someone', 'Ramirez', 'Martinez');

const datosPacientes1 = {
    nombre: nombre1,
    fechaNacimiento: fecha1,
    telefono: 3123398831
}
const datosPacientes2 = {
    nombre: nombre2,
    fechaNacimiento: fecha2,
    telefono: 3123398831
}
const datosPacientes3 = {
    nombre: nombre3,
    fechaNacimiento: fecha3,
    telefono: 3123398831
}
const datosPacientes4 = {
    numeroPoliza: 6526,
    finVigencia: new Fecha(29, 4, 2021),
    compannia: 'Jabón ciel',
    nombre: nombre4,
    fechaNacimiento: fecha4,
    telefono: 3123398831
}
const datosPacientes5 = {
    numeroPoliza: 54,
    finVigencia: new Fecha(54, 3, 2022),
    compannia: 'Jabón ciel',
    nombre: nombre5,
    fechaNacimiento: fecha5,
    telefono: 3123398831
}
const datosPacientes6 = {
    numeroPoliza: 6524656,
    finVigencia: new Fecha(5, 11, 2020),
    compannia: 'Jabón ciel',
    nombre: nombre6,
    fechaNacimiento: fecha6,
    telefono: 3123398831
}
const paciente1 = new Paciente(datosPacientes1);
const paciente2 = new Paciente(datosPacientes2);
const paciente3 = new Paciente(datosPacientes3);
const paciente4 = new PacienteAsegurado(datosPacientes4);
const paciente5 = new PacienteAsegurado(datosPacientes5);
const paciente6 = new PacienteAsegurado(datosPacientes6);

const datosDoctor1 = {
    nombre: nombre1,
    especialidad: 'Medico Cirujano',
    telefono: 3123398831,
    cedula: 35154
}
const datosDoctor2 = {
    nombre: nombre2,
    especialidad: 'Medico Cirujano',
    telefono: 3123398831,
    cedula: 35186
}
const datosDoctor3 = {
    nombre: nombre3,
    especialidad: 'Medico Cirujano',
    telefono: 3123398831,
    cedula: 35151
}


const doctor1 = new Doctor(datosDoctor1);
const doctor2 = new Doctor(datosDoctor2);
const doctor3 = new Doctor(datosDoctor3);

const datosCita1 = {
    fecha: fecha1,
    hora: tiempo1,
    doctor: doctor1,
    paciente: paciente1
}
const datosCita2 = {
    fecha: fecha2,
    hora: tiempo3,
    doctor: doctor2,
    paciente: paciente2
}
const datosCita3 = {
    fecha: fecha3,
    hora: tiempo3,
    doctor: doctor3,
    paciente: paciente3
}

const cita1 = new Cita(datosCita1);
const cita2 = new Cita(datosCita2);
const cita3 = new Cita(datosCita3);

const hospital = new Hospital({
    nombre:'Santa Fé Clan',
    direccion:'Belisario Dominguez #39'
});

const probarFechas = _ => {
    console.log(
        fecha1.getAnnios(),
        fecha1.getDiaFecha(),
        fecha1.getDias(),
        fecha1.getFecha(),
        fecha1.getMeses(),
        fecha1.getSemanas(),
    )
}
// probarFechas();