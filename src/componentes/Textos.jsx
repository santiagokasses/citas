import React from "react"

const Textos = (props) => {
    const citas = props.cita;
    const eliminar = (a) => {
       citas.slice(a-1, a+1)
    }
    return citas && citas.map((cita) => (
        <div className="cita">    
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Dueño: <span>{cita.propietario}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Sintomas: <span>{cita.sintomas}</span></p>
            <button className="button elimnar u-full-width" onClick={eliminar(citas.indexOf(cita))}>Eliminar ×</button>
        </div>
    ))
}
export default Textos