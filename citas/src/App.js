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
    <body>
        <div id="root">
          <header className="App-header">
            <Titulos titulos="ADMINISTRADOR DE PACIENTES" />
            <div class="container">
              <div class="row">
                <div class="one-half column">
                  <Subtitulos subtitulos="Crear mi Cita" />
                  <form>
                    <Formulario formulario="Nombre Mascota"/>
                    <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota" value=""/>
                    <Formulario formulario="Nombre Dueño"/>
                    <input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota" value=""/>
                    <Formulario formulario="Fecha"/>
                    <input type="date" name="fecha" class="u-full-width" value=""/>
                    <Formulario formulario="hora"/>
                    <input type="time" name="hora" class="u-full-width" value=""/>
                    <Formulario formulario="Sintomas"/>
                    <textarea name="sintomas" class="u-full-width"></textarea>
                    <button type="submit" class="u-full-width button-primary">Agregar Cita</button>
                  </form>
                </div>
                <div class="one-half column">
                  <Subtitulos subtitulos="Administra tus citas"/>
                  <div class="cita">
                    <Textos cita={citas}/>
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
