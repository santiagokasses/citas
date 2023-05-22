import './App.css'
import Titulos from './componentes/Titulo'
import Subtitulos from './componentes/Subtitulos'
import Formulario from './componentes/Formulario'
import Textos from './componentes/Textos'

function App() {
  let citas = [];
  citas.push({
    mascota: 'Blacky',
    Dueno: 'Jere',
    Fecha:'2023-05-08',
    Hora: '16:15',
    Sintomas: 'No está comiendo'
  })
  citas.push({
    mascota: 'Nina',
    Dueno: 'Martin',
    Fecha:'2021-08-05',
    Hora: '08:20',
    Sintomas: 'Le duele la pierna'
  })
  citas.push({
    mascota: 'Sifon',
    Dueno: 'Flecha',
    Fecha:'2023-06-10',
    Hora: '09:24',
    Sintomas: 'Duerme mucho'
  })

  return (
          <header className="App-header">
            <Titulos titulos="ADMINISTRADOR DE PACIENTES" />
            <div class="container">
              <div class="row">
                    <Formulario/>
                <div class="one-half column">
                  <Subtitulos subtitulos="Administra tus citas"/>
                  <div class="cita">
                    <Textos cita={citas}/>
                  </div>
                </div>
              </div>
            </div>
          </header>
  )
}

export default App
