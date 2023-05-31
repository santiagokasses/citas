import React from "react"

const Textos = (props) => {
    const citas = props.cita;

    const eliminar = (a) => {
        console.log(a)
        const nuev = citas.splice(a,1)
        console.log(nuev)
    }

    return citas && citas.map((cita, i) => (
        <div className="cita" key={i}>    
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Dueño: <span>{cita.propietario}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Sintomas: <span>{cita.sintomas}</span></p>
            <button className="button elimnar u-full-width" type="button" onClick={() => eliminar(i)}>Eliminar ×</button>
        </div>
    ))
}
export default Textos