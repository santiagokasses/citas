import './Textos.css'
import React, { useState }from "react"
import ModalF from './ModalF'

const Textos = (props) => {
    const [show, setShow] = useState(false);
    const abrirModal = (i) => {
        setShow(true)
        eliminar(i)
    }
    let citas = props.cita

    const eliminar = (a) => {
        const nuev = [...props.cita]
        nuev.splice(a, 1)
        props.setCitas(nuev)
    }
    return (
        <>
            <ModalF show={show} setShow={setShow}/>
            {citas && citas.map((cita, i) => (
                <div className="cita" key={i}>
                    <p>Mascota: <span>{cita.mascota}</span></p>
                    <p>Dueño: <span>{cita.propietario}</span></p>
                    <p>Fecha: <span>{cita.fecha}</span></p>
                    <p>Hora: <span>{cita.hora}</span></p>
                    <p>Sintomas: <span>{cita.sintomas}</span></p>
                    <button className="button elimnar u-full-width" type="button" onClick={() => abrirModal(i)}>Eliminar ×</button>
                </div>
            ))}
        </>
    )
}
export default Textos