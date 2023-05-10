import './App.css';
import Titulos from './componentes/Titulo'
import Subtitulos from './componentes/Subtitulos'
import Formulario from './componentes/Formulario'

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
              </div>
            </div>
          </header>
        </div>
      </div>
    </body>
  )
}

export default App
