import React, { Fragment, useState } from "react"

const Formulario = (props) => {

    const [mascota, setMascotas] = useState("")
    const [propietario, setPorpietario] = useState("")
    const [fecha, setFecha] = useState("")
    const [hora, setHora] = useState("")
    const [sintomas, setSintomas] = useState("")

    const [citas, setCitas] = useState({
        mascota: null,
        propietario: null,
        fecha: null,
        hora: null,
        sintomas: null
    })
    const updateCitas = (e) => {
        setCitas({...citas,[e.target.name]:[e.target.value]})
        if (e.target.name === 'mascota') {
            console.log(citas)
            setMascotas(e.target.value)
        }
        if (e.target.name === 'propietario') {
            console.log(citas)
            setPorpietario(e.target.value)
        }
        if (e.target.name === 'fecha') {
            console.log(citas)
            setFecha(e.target.value)
        }
        if (e.target.name === 'hora') {
            console.log(citas)
            setHora(e.target.value)
        }
        if (e.target.name === 'sintomas') {
            console.log(citas)
            setSintomas(e.target.value)
        }
    }
    return(
        <Fragment>
           <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <form>
              <label>Nombre Mascota</label>
              <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" onChange={(e) => updateCitas(e)}/>
              <label>Nombre Dueño</label>
              <input type="text"  name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" onChange={(e) => updateCitas(e)}/>
              <label>Fecha</label>
              <input type="date" name="fecha" className="u-full-width"onChange={(e) =>updateCitas(e)}/>
              <label>hora</label>
              <input type="time" name="hora" className="u-full-width" onChange={(e) => updateCitas(e)}/>
              <label>Sintomas</label>
              <textarea name="sintomas" className="u-full-width" onChange={(e) => updateCitas(e)}></textarea>
              <button type="submit" className="u-full-width button-primary" onClick={()=> props.cita.push({citas})}>Agregar Cita</button>
            </form>
          </div>
        </Fragment>
    )
}

export default Formulario