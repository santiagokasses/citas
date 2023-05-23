import './App.css'
import Titulos from './componentes/Titulo'
import Subtitulos from './componentes/Subtitulos'
import Formulario from './componentes/Formulario'
import Textos from './componentes/Textos'
import { useState } from 'react'

function App() {

  const [citas, setCitas] = useState([
    {
      mascota: 'Blacky',
      propietario: 'Jere',
      fecha: '2023-05-08',
      hora: '16:15',
      sintomas: 'No está comiendo'
    },
    {
      mascota: 'Nina',
      propietario: 'Martin',
      fecha: '2021-08-05',
      hora: '08:20',
      sintomas: 'Le duele la pierna'
    },
    {
      mascota: 'Sifon',
      propietario: 'Flecha',
      fecha: '2023-06-10',
      hora: '09:24',
      sintomas: 'Duerme mucho'
    }
  ])
  return (
    <header className="App-header">
      <Titulos titulos="ADMINISTRADOR DE PACIENTES" />
      <div className="container">
        <div className="row">
          <Formulario setCitas={setCitas} />
          <div className="one-half column">
            <Subtitulos subtitulos="Administra tus citas" />
            <div className="cita">
              <Textos cita={citas} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default App
