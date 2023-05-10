import './App.css';
import Cita from './componentes/Cita'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cita titulos="ADMINISTRADOR DE PACIENTES"/>
        <Cita nro="1"/>
        <Cita nro="2"/>
        <Cita nro="3"/>
        <Cita nro="4"/>
      </header>
    </div>
  );
}

export default App;
