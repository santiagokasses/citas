import './App.css'
import Titulos from './componentes/Titulo'
import Subtitulos from './componentes/Subtitulos'
import Formulario from './componentes/Formulario'
import Textos from './componentes/Textos'
import Boton from './componentes/Boton'

function App() {
  return (
    <header className="App-header">
      <Titulos titulos="ADMINISTRADOR DE PACIENTES" />
      <div className="container">
        <div className="row">
          <Formulario/>
          <div className="one-half column">
            <Subtitulos subtitulos="Administra tus citas" />
            <div className="cita">
              <Textos mascota="Blacky" Dueno="Jere" Fecha="2023-05-08" Hora="16:15" Sintomas="No está comiendo" />
              <Boton text="Eliminar ×" />
            </div>
            <div className="cita">
              <Textos mascota="Nina" Dueno="Martin" Fecha="2021-08-05" Hora="08:20" Sintomas="Le duele la pierna" />
              <Boton text="Eliminar ×" />
            </div>
            <div className="cita">
              <Textos mascota="Sifon" Dueno="Flecha" Fecha="2023-06-10" Hora="09:24" Sintomas="Duerme mucho" />
              <Boton text="Eliminar ×" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default App
