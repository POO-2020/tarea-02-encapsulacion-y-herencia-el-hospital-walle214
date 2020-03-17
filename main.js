import Fecha from "./modulos/Fecha.js";
import Tiempo from "./modulos/Tiempo.js";
import Nombre from "./modulos/Nombre.js";
import Doctor from "./modulos/Doctor.js";
import Paciente from "./modulos/Paciente.js";
import Cita from "./modulos/Cita.js";
import Hospital from "./modulos/Hospital.js";

const ulisesNombre = new Nombre('Ulises', 'Ramirez', 'Martinez');
const ulisesFechaNacimiento = new Fecha(24, 9, 2000);
const medioDia = new Tiempo(9, 0, 'pm');
const doctor = new Doctor(ulisesNombre, 'Cirujano', 31233998831, 'dsfbsdgb');
const paciente = new Paciente(ulisesNombre, ulisesFechaNacimiento, 3123398831);
const cita = new Cita(ulisesFechaNacimiento, medioDia, doctor, paciente);
const hospitalRegional = new Hospital('Hospital Regional', 'Some street');

const probarFecha = _ => {
    console.log(
        ulisesFechaNacimiento.getAnnios(),
        ulisesFechaNacimiento.getDiaFecha(),
        ulisesFechaNacimiento.getDias(),
        ulisesFechaNacimiento.getFecha(),
        ulisesFechaNacimiento.getMeses(),
        ulisesFechaNacimiento.getSemanas()
    );
}
probarFecha();

const probarTiempo = _ => {
    console.log(
        medioDia.getFormato12(),
        medioDia.getFormato24()
    );
}
probarTiempo();

const probarNombre = _ => {
    console.log(
        ulisesNombre.getApellidoNombre(),
        ulisesNombre.getIniciales(),
        ulisesNombre.getNombreCompleto()
    );
}
probarNombre();

const probarDoctor = _ => {
    console.log(doctor.getPerfil());
}
probarDoctor();

const probarPaciente = _ => {
    console.log(paciente.getPerfil());
}
probarPaciente();

const probarCita = _ => {
    console.log(cita.getCita());
}
probarCita();

const probarHospital = _ => {
    hospitalRegional.registrarDoctor(doctor);
    hospitalRegional.listarDoctores();
    hospitalRegional.registrarCita(cita);
    hospitalRegional.listarCitas();
}
probarHospital();