import React, { Fragment, useState } from "react"

const Formulario = () => {


    const [mascota, setMascotas] = useState("")
    const [propietario, setPorpietario] = useState("")
    const [fecha, setFecha] = useState("")
    const [hora, setHora] = useState("")
    const [sintomas, setSintomas] = useState("")

    const [cita, setCitas] = useState({
        mascota: null,
        propietario: null,
        fecha: null,
        hora: null,
        sintomas: null
    })
    const updateCitas = (e) => {
        setCitas({...cita,[e.target.name]:[e.target.value]})
        if (e.target.name === 'mascota') {
            console.log(cita)
            setMascotas(e.target.value)
        }
        if (e.target.name === 'propietario') {
            console.log(cita)
            setPorpietario(e.target.value)
        }
        if (e.target.name === 'fecha') {
            console.log(cita)
            setFecha(e.target.value)
        }
        if (e.target.name === 'hora') {
            console.log(cita)
            setHora(e.target.value)
        }
        if (e.target.name === 'sintomas') {
            console.log(cita)
            setSintomas(e.target.value)
        }
    }
    return(
        <Fragment>
           <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <form>
              <label>Nombre Mascota</label>
              <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" onChange={async (e) => updateCitas(e)}/>
              <label>Nombre Dueño</label>
              <input type="text"  name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" onChange={async (e) => updateCitas(e)}/>
              <label>Fecha</label>
              <input type="date" name="fecha" className="u-full-width"onChange={async (e) =>updateCitas(e)}/>
              <label>hora</label>
              <input type="time" name="hora" className="u-full-width" onChange={async (e) => updateCitas(e)}/>
              <label>Sintomas</label>
              <textarea name="sintomas" className="u-full-width" onChange={async (e) => updateCitas(e)}></textarea>
              <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
          </div>
        </Fragment>
    )
}

export default Formulario