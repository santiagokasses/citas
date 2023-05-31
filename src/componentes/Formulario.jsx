import './Formulario.css'
import React, { Fragment, useState } from "react"

const Formulario = (props) => {


    const updateCitas = () => {
        const nuevaCita = {
          mascota: document.getElementsByName("mascota")[0].value,
          propietario: document.getElementsByName("propietario")[0].value,
          fecha: document.getElementsByName("fecha")[0].value,
          hora: document.getElementsByName("hora")[0].value,
          sintomas: document.getElementsByName("sintomas")[0].value,
        }
        props.setCitas(prevCitas => [...prevCitas, nuevaCita])
      }
      const handleSubmit = (e) => {
        e.preventDefault()
        updateCitas()
        document.getElementsByName("mascota")[0].value = ""
        document.getElementsByName("propietario")[0].value = ""
        document.getElementsByName("fecha")[0].value = ""
        document.getElementsByName("hora")[0].value = ""
        document.getElementsByName("sintomas")[0].value = ""
      }

    return (
        <Fragment>
            <div className="one-half column">
                <h2>Crear mi Cita</h2>
                <form onSubmit={handleSubmit}>
                    <label>Nombre Mascota</label>
                    <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota"/>
                    <label>Nombre Dueño</label>
                    <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota"/>
                    <label>Fecha</label>
                    <input type="date" name="fecha" className="u-full-width"/>
                    <label>hora</label>
                    <input type="time" name="hora" className="u-full-width" />
                    <label>Sintomas</label>
                    <textarea name="sintomas" className="u-full-width"/>
                    <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
                </form>
            </div>
        </Fragment>
    )
}

export default Formulario