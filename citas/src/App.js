import './App.css';
import Titulos from './componentes/Titulos'
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
                  <Formulario text="" />
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
