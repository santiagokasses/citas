import './App.css';
import Cita from './componentes/Cita'
import Titulos from './componentes/Titulos'
import Subtitulos from './componentes/Subtitulos'
import Formulario from './componentes/Formulario'

function App() {
  return (
    <body>
      <div className="App">
        <div id="root">
          <header className="App-header">
            <Titulos Titulos="ADMINISTRADOR DE PACIENTES" />
            <div class="container">
              <div class="row">
                <div class="one-half column">
                  <Subtitulos subtitulos="Crear mi Cita" />
                  <Formulario text="" />
                  <Cita nro="1" />
                  <Cita nro="2" />
                  <Cita nro="3" />
                  <Cita nro="4" />
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </body>
  );
}

export default App;
