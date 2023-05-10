import './App.css';
import Cita from './componentes/Cita'
import Titulo from './componentes/Titulo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo Titulos="ADMINISTRADOR DE PACIENTES"/>
        <Cita nro="1"/>
        <Cita nro="2"/>
        <Cita nro="3"/>
        <Cita nro="4"/>
      </header>
    </div>
  )
}

export default App
