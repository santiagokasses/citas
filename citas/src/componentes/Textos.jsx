const Textos = (props) => {
    return (
        <div>
            <p>Mascota: <span>{props.mascota}</span></p>
            <p>Dueño: <span>{props.Dueno}</span></p>
            <p>Fecha: <span>{props.Fecha}</span></p>
            <p>Hora: <span>{props.Hora}</span></p>
            <p>Sintomas: <span>{props.Sintomas}</span></p>
        </div>
    )
}
export default Textos