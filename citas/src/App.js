import './App.css'
import Titulos from './componentes/Titulo'
import Subtitulos from './componentes/Subtitulos'
import Formulario from './componentes/Formulario'
import Texto from './componentes/Texto'
import Boton from './componentes/Boton'

function App() {
  return (
    <body>
        <div id="root">
          <header className="App-header">
            <Titulos titulos="ADMINISTRADOR DE PACIENTES" />
            <div class="container">
              <div class="row">
                <div class="one-half column">
                  <Subtitulos subtitulos="Crear mi Cita" />
                  <Formulario>
                    <Formulario mascota="Nombre Mascota"/>
                    <Formulario nombre="Nombre Dueño"/>
                    <Formulario fecha="Fecha"/>
                    <Formulario hora="hora"/>
                    <Formulario sintoma="Sintomas"/>
                  </Formulario>
                </div>
                <div class="one-half column">
                  <Subtitulos subtitulos="Administra tus citas"/>
                  <div class="cita">
                    <Texto text="Mascota: " textdos="Blacky"/>
                    <Texto text="Dueño: " textdos="Jere"/>
                    <Texto text="Fecha: " textdos="2023-05-08"/>
                    <Texto text="Hora: " textdos="16:15"/>
                    <Texto text="Sintomas: " textdos="No está comiendo"/>
                    <Boton text="Eliminar ×"/>
                  </div>
                  <div class="cita">
                    <Texto text="Mascota: " textdos="Nina"/>
                    <Texto text="Dueño: " textdos="Martin"/>
                    <Texto text="Fecha: " textdos="2021-08-05"/>
                    <Texto text="Hora: " textdos="08:20"/>
                    <Texto text="Sintomas: " textdos="Le duele la pierna"/>
                    <Boton text="Eliminar ×"/>
                  </div>
                  <div class="cita">
                    <Texto text="Mascota: " textdos="Sifon"/>
                    <Texto text="Dueño: " textdos="Flecha"/>
                    <Texto text="Fecha: " textdos="2023-06-10"/>
                    <Texto text="Hora: " textdos="09:24"/>
                    <Texto text="Sintomas: " textdos="Duerme mucho"/>
                    <Boton text="Eliminar ×"/>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
    </body>
  )
}

export default App
