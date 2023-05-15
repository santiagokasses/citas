 import React, { Fragment } from "react"
const Formulario = (props) => {
    return(
        <Fragment>
            <label>{props.mascota}</label>
            <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota" value=""/>
            <label>{props.nombre}</label>
            <input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota" value=""/>
            <label>{props.fecha}</label>
            <input type="date" name="fecha" class="u-full-width" value=""/>
            <label>{props.hora}</label>
            <input type="time" name="hora" class="u-full-width" value=""/>
            <label>{props.sintoma}</label>
            <textarea name="sintomas" class="u-full-width"></textarea>
            <button type="submit" class="u-full-width button-primary">Agregar Cita</button>
        </Fragment>
    )
}

export default Formulario