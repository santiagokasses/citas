import './App.css'
import Titulos from './componentes/Titulo'
import Subtitulos from './componentes/Subtitulos'
import Formulario from './componentes/Formulario'
import Texto from './componentes/Texto'
import Boton from './componentes/Boton'

function App() {
  return (
    
    <body>
      <div className="App">
        <div id="root">
          <header className="App-header">
            <Titulos titulos="ADMINISTRADOR DE PACIENTES" />
            <div class="container">
              <div class="row">
                <div class="one-half column">
                  <Subtitulos subtitulos="Crear mi Cita" />
                  <form>
                    <Formulario formulario="Nombre Mascota"/>
                    <Formulario formulario="Nombre Dueño"/>
                    <Formulario formulario="Fecha"/>
                    <Formulario formulario="hora"/>
                    <Formulario formulario="Sintomas"/>
                  </form>
                </div>
                <div class="one-half column">
                  <Subtitulos text="Administra tus citas"/>
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
      </div>
      <script src="/static/js/bundle.js"></script>
      <script src="/static/js/vendors~main.chunk.js"></script>
      <script src="/static/js/main.chunk.js"></script>
    </body>
  )
}

export default App
